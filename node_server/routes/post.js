const express = require("express");
const { Post } = require("../models");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      title: req.body.title,
    });
    res.status(200).json({ status: "ok", data: post });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({});
    res.status(200).json({ status: "ok", data: posts });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.id } });
    res.status(200).json({ status: "ok", data: post });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.update(
      {
        content: req.body.content,
        title: req.body.title,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({ status: "ok", data: post });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json({ status: "ok", data: post });
  } catch (error) {
    res.status(400).json({ status: "fail", error });
  }
});

module.exports = router;
