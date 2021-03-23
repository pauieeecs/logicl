const admin = require("firebase-admin");
const cred = require("../cred.json");

admin.initializeApp({
  credential: admin.credential.cert(cred),
});

exports.admin = admin;
