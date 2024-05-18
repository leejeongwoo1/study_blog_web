const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const saltRounds = 10;
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { email, nick, password, provider, blogId } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      throw new Error("이미 가입이 된 유저 입니다");
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log("hash", hash);
    const newUser = new User({ email, nick, password: hash, provider, blogId });
    await newUser.save();
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    });

    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        const token = user.generateToken();
        return res.status(200).json({ status: "success", user, token });
      }
    }
    throw new Error("아이디 또는 비밀번호가 일치하지 않습니다 ");
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});
module.exports = router;
