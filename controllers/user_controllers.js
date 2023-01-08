const User = require("../models/User");

const getUserByUserID = async (req, res, next) => {
  const userId = req.params.id;
  let user;
  try {
    user = await User.findById(userId).populate(["batch", "course"]);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ msg: "No User Found" });
  }
  return res.status(200).json(user);
};

module.exports = {
    getUserByUserID
}