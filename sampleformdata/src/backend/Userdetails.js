const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  socialmediahandle: { type: String, required: true },
  files: [{ type: String, required: true }],
});


module.exports = mongoose.model("userdetail", UserDetailSchema);