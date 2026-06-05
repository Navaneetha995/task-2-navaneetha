const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    name: "Mukesh",
    email: "mukesh@gmail.com"
  }
];

// GET ALL USERS
router.get("/", (req, res) => {
  res.json(users);
});

// GET USER BY ID
router.get("/:id", (req, res) => {
  const user = users.find(
    user => user.id === parseInt(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User Not Found"
    });
  }

  res.json(user);
});

// CREATE USER
router.post("/", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// UPDATE USER
router.put("/:id", (req, res) => {
  const user = users.find(
    user => user.id === parseInt(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User Not Found"
    });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
});

// DELETE USER
router.delete("/:id", (req, res) => {
  const index = users.findIndex(
    user => user.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "User Not Found"
    });
  }

  users.splice(index, 1);

  res.json({
    message: "User Deleted Successfully"
  });
});

module.exports = router;