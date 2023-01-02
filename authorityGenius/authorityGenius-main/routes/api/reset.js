// Route that handle resseting user passwords


const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const Token = require("../../models/Token");
const User = require('../../models/User');

// @route  POST api/reset/
// @desc   Resets user password
// @access Public

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email} = req.body;


      // See if user exists
      let user = await User.findOne({ email });

      // If user exists, start reset process, else return error
      if (!user) {
        return res
        .status(400)
        .json({ errors: [{ msg: 'There is no account with this email' }] });
    } else {


      //first step, generating token
      //if token already exists in database, delete it. A new one will be created.
      let token = await Token.findOne({ email: email });
      if (token) { 
            await token.deleteOne()
      };

      let resetToken = crypto.randomBytes(32).toString("hex");
      const salt = await bcrypt.genSalt(10);

      const hash = await bcrypt.hash(resetToken, salt);
      const link = `/${resetToken}`;

      try {
      await new Token({
        email: email,
        token: hash,
        createdAt: Date.now(),
      }).save();
    } catch (err) {
      return res
      .status(400)
      .json({ errors: [{ msg: 'Error sending email. Please try again later.' }] });
    }

      //second step, send email with link, front end should send appropiate request after it has variables

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'finvfintestemail@gmail.com',
          pass: 'uwppjmyfqzrgsdtk'
        }
      });

      const mailOptions = {
        from: 'finvfintestemail@gmail.com',
        to: `${email}`,
        subject: `Link To Reset Password`,
        text: 
          `Link: http://localhost:3000/reset-password${link}`
      };

      try {
      transporter.sendMail(mailOptions);
      } catch (err) {
        return res
        .status(400)
        .json({ errors: [{ msg: 'Error sending email. Please try again later.' }] });
      }

      return res
      .status(200)
      .json({ msg: "Success, will send email" })
    }
  }
)

  router.post("/tokenCheck", async (req, res) => {

    const resetToken = req.body.token;

    let passwordResetToken = await Token.findOne({ resetToken });
    
    let isValid = false;

    try {
    isValid = await bcrypt.compare(resetToken, passwordResetToken.token);
    } catch (err) {
      return res.status(400).json({ errors: ["Password not reset, token is invalid"] });
    }

    if (isValid){
    
      return res
      .status(200)
      .json({ msg: "Success" })

    } else {
      
      return res.status(400).json({ errors: ["Password not reset, token is invalid"] });
    }
  
  });

  router.post("/passwordReset", 
    [
      check(  
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    
    const resetToken = req.body.token;
    const password = req.body.password;

    let passwordResetToken = await Token.findOne({ resetToken });
    const salt = await bcrypt.genSalt(10);

    const isValid = await bcrypt.compare(resetToken, passwordResetToken.token);

    const email = passwordResetToken.email;

    if (isValid){
    
      console.log('Token is valid');
      const hash = await bcrypt.hash(password, salt);
      await User.updateOne(
        { email: email },
        { $set: { password: hash } },
        { new: true }
      );
      await passwordResetToken.deleteOne();
      return res
      .status(200)
      .json({ msg: "Password succesfully reset" })
    } else {
      
      return res.status(400).json({ errors: ["Password not reset, Token is not valid"] });
    }
  
  });


module.exports = router;
