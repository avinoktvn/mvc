const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.name === "Invalid Credentials") {
    res.status(400).json({ message: "invalid email ora password" });
  } else if (err.name === "User not found") {
    res.status(404).json({ message: "user not found" });
  } else if (err.name === "Invalid File") {
    res.status(400).json({ message: "File Invalid" });
  } else if (err.name === "Image not found") {
    res.status(404).json({ message: "image not found" });
  }

  //
  else {
    res.status(500).send("internal server error");
  }
};
module.exports = errorHandler;
