const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend API Running Successfully"
  });
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});