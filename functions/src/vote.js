/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const admin = require("./admin").admin;

const voteApp = express();

/**
 * post votelama
 * bodyde beklenen değerler;
 * ideaId, userId, vote (olumsuzsa 0 değeri, olumluysa 1 değeri)
 * örnek : {
 *    ideaId: "idea id işte",
 *    userId: "2321asfxTysaesDe2fvxriaHFVK7Z2",
 *    vote: 1
 * }
 */

voteApp.options("/post", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST,GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

voteApp.options("/comment", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST,GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

voteApp.post("/post", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = JSON.parse(req.body);
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }

  try {
    await admin
        .firestore()
        .collection("idea-full")
        .doc(data.ideaId)
        .update({
          interactors: admin.firestore.FieldValue.arrayUnion({
            id: data.userId,
            feeling: data.vote,
          }),
          upVote: admin.firestore.FieldValue.increment(data.vote),
          totalVote: admin.firestore.FieldValue.increment(1),
        });

    await admin
        .firestore()
        .collection("idea-short")
        .doc(data.ideaId)
        .update({
          interactors: admin.firestore.FieldValue.arrayUnion({
            id: data.userId,
            feeling: data.vote,
          }),
          upVote: admin.firestore.FieldValue.increment(data.vote),
          totalVote: admin.firestore.FieldValue.increment(1),
        });
    res.status(200).send({
      success: true,
      message: "Post voted successfuly.",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      success: false,
      message: "An error occured.",
      error: err,
    });
  }
});

/**
 * comment uplama
 * bodyde beklenen değerler;
 * ideaId, commentId, userId
 * örnek : {
 *    ideaId: "somekindaideaid",
 *    commentId: "comment dökümanının idsi",
 *    userId: "2321asfxTysaesDe2fvxriaHFVK7Z2"
 * }
 */
voteApp.post("/comment", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = JSON.parse(req.body);
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }

  try {
    await admin
        .firestore()
        .collection("idea-full")
        .doc(data.ideaId)
        .collection("comment")
        .doc(data.commentId)
        .update({
          upVoterCount: admin.firestore.FieldValue.increment(1),
          upVoters: admin.firestore.FieldValue.arrayUnion(data.userId),
        });

    res.status(200).send({
      success: true,
      message: "Comment up voted successfuly.",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      success: false,
      message: "An error occured.",
      error: err,
    });
  }
});

exports.vote = functions.https.onRequest(voteApp);
