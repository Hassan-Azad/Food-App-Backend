const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "MynameisJavascriptLibrarysecrity"


router.post(
  "/creatuser",
  [
    body("email").isEmail(),
    body("name", "Name must be of atleast 5 characters").isLength({ min: 5 }),
    body("password").isLength({ min: 5 }).withMessage("incorrect password"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try {
      await user.create({
        name: req.body.name,
        password: secPassword,
        location: req.body.location,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

// endpoint for login

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }).withMessage("incorrect password"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;
    try {
      let userData = await user.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Enter correct Credentials!" });
      }

      const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
      // if (req.body.password !== userData.password) {
        if (!pwdCompare) {
        return res.status(400).json({ errors: "Enter correct Credentials!" });
      }

      const data = {
        user:{
          id:userData.id
        }
      }

      const authToken = jwt.sign(data,jwtSecret) 
              // (header :byDefaukt, payload: data, signature:jwtSecret)

      return res.json({ success: true, authToken:authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
