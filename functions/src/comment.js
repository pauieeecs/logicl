/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const admin = require("./admin").admin;

const commentApp = express();

/**
 * yorum dökümanı oluşturma. beklenen body;
 * commentText, authorId, authorFullName, authorUserName, authorPhotoUrl, feeling
 * örnek: {
 *    commentText: "masallah guzel fikir calmasınlar dikkat et",
 *    ideaId: "bi idea idsi",
 *     authorId: "2321asfxTysaesDe2fvxriaHFVK7Z2",
 *    authorFullName: "Şükrü Ünal",
 *    authorUserName: "unallsukru",
 *    authorPhotoUrl: "www.googleimages.co/image.jpg",
 *    feeling: 0 veya 1
 * }
 */

commentApp.options("/create", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST,GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

commentApp.post("/create", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = JSON.parse(req.body);
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }
  // TODO: create comment document
  const shortIdea = await admin.firestore().collection("idea-short").doc(data.ideaId).get();
  if (!shortIdea.exists) {
    res.status(400).send({
      error: "Idea couldn't be found. ID might be invalid.",
    });
  }
  const ideaData = shortIdea.data();
  const comment = {
    comment: data.commentText,
    authorId: data.authorId,
    authorFullName: data.authorFullName,
    authorUserName: data.authorUserName,
    authorPhotoUrl: data.authorPhotoUrl,
    ideaId: shortIdea.id,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    upVoters: [],
    upVoterCount: 0,
  };
  const commentUnderUserDocument = {
    ideaCategory: ideaData.category,
    ideaTitle: ideaData.title,
    ideaShortDesc: ideaData.shortDesc,
    ideaAuthorUserName: ideaData.authorUserName,
    ideaCreatedAt: ideaData.createdAt,
    ideaSlug: ideaData.slug,
    ...comment,
  };
  try {
    const commentDoc = await admin
        .firestore()
        .collection("idea-full")
        .doc(shortIdea.id)
        .collection("comment")
        .add(comment);

    // TODO: create comment-idea mixed document under user document
    await admin
        .firestore()
        .collection("user")
        .doc(data.authorId)
        .collection("comment")
        .add(commentUnderUserDocument);

    const timeStamp = await (await commentDoc.get()).data().createdAt;
    res.status(200).send({
      success: true,
      message: "Commented successfuly.",
      commentId: commentDoc.id,
      timeStamp: timeStamp,
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

exports.comment = functions.https.onRequest(commentApp);
