export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email === "jadhavsharvari588@gmail.com" && password === "mypassword123") {
    res.json({ message: "Login successful!" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
