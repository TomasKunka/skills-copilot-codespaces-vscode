// Create web server

// Import modules
const express = require("express");
const router = express.Router();

// Import model
const Comment = require("../models/comment");

// Import middleware
const auth = require("../middleware/auth");

// Import controller
const commentController = require("../controllers/commentController");

// Create comment
router.post("/", auth, commentController.create);

// Get all comments
router.get("/", auth, commentController.getAll);

// Get comment by id
router.get("/:id", auth, commentController.getById);

// Update comment
router.put("/:id", auth, commentController.update);

// Delete comment
router.delete("/:id", auth, commentController.delete);

// Export module
module.exports = router;