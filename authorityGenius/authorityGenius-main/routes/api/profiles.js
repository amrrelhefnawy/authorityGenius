// Routes that handle fetching and updating user profile data

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const PubProfile = require('../../models/PubProfile');
const RevProfile = require('../../models/RevProfile');
const User = require('../../models/User');

// @route  GET api/profiles/me
// @desc   Get current users profile
// @access Private

router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { accountType } = user;
    let profile;
    if (accountType === 'Publisher')
      profile = await PubProfile.findOne({ user: req.user.id });
    else if (accountType === 'Reviewer')
      profile = await RevProfile.findOne({ user: req.user.id });
    if (!profile)
      return res.status(400).json({ msg: 'There is no profile for this user' });
    res.send(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error in retrieving current user's profile");
  }
});

// @route  POST api/profiles/publisher
// @desc   Create or update a publisher's profile
// @access Private
router.post('/publisher', auth, async (req, res) => {
  const { firstName, lastName, avatar, about, websites, roles } = req.body;

  // Create the profile info object
  const name = { firstName, lastName };
  const profileFields = {};
  profileFields.user = req.user.id;
  if (avatar) profileFields.avatar = avatar;
  if (about) profileFields.about = about;
  if (websites)
    profileFields.websites = websites
      .split(',')
      .map((website) => website.trim());
  if (roles) profileFields.roles = roles.split(',').map((role) => role.trim());

  try {
    // Update the name
    await User.findByIdAndUpdate(req.user.id, { $set: name }, { new: true });

    // Updates existing profile or creates a new one
    let profile = await PubProfile.findOne({ user: req.user.id });
    if (profile) {
      profile = await PubProfile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    profile = new PubProfile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error in updating/creating publisher profile');
  }
});

// @route  POST api/profiles/reviewer
// @desc   Create or update a reviwer's profile
// @access Private
router.post('/reviewer', auth, async (req, res) => {
  const {
    firstName,
    lastName,
    avatar,
    about,
    websites,
    specialties,
    credentials,
    publications,
    jobPreferences,
    ratePerArticle,
  } = req.body;

  // Create the profile info object
  const name = { firstName, lastName };
  const profileFields = {};
  profileFields.user = req.user.id;
  if (avatar) profileFields.avatar = avatar;
  if (about) profileFields.about = about;
  if (websites)
    profileFields.websites = websites
      .split(',')
      .map((website) => website.trim());
  if (specialties)
    profileFields.specialties = specialties
      .split(',')
      .map((specialty) => specialty.trim());
  if (credentials)
    profileFields.credentials = credentials.map((credential) => ({
      ...credential,
    }));
  if (publications)
    profileFields.publications = publications
      .split(',')
      .map((publication) => publication.trim());
  if (jobPreferences)
    profileFields.jobPreferences = jobPreferences
      .split(',')
      .map((jobPreference) => jobPreference.trim());
  if (ratePerArticle) profileFields.ratePerArticle = ratePerArticle;

  try {
    // Update the name
    await User.findByIdAndUpdate(req.user.id, { $set: name }, { new: true });

    // Updates existing profile or creates a new one
    let profile = await RevProfile.findOne({ user: req.user.id });
    if (profile) {
      profile = await RevProfile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    profile = new RevProfile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error in updating/creating reviewer profile');
  }
});

module.exports = router;
