/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const admin = require("./admin").admin;

const ideaApp = express();

/**
 * idea oluşturma
 * bodyde olması gereken degerler (isimleri birebir aynı)
 * title, fullDesc, shortDesc, slug, authorUserId, mediaUrl, teamName, teamSlug
 *
 * örnek: {
 *    title: "şöyle bir fikir var fenasal",
 *    fullDesc: "uzun uzadıya fikir anlatıldı burda, pretend it is",
 *    shortDesc: "burda kullanıcı girdiyse onu yollayın yoksa ilk 144 karakterini veya ilk 3 cümlesini falan."
 *    slug: "soyle-bir-fikir-var-fenasal-221",
 *    authorUserId: "2321asfxTysaesDe2fvxriaHFVK7Z2",
 *    mediaUrl: "bos olabilir, ne varsa artık",
 *    teamName: "takım varsa adı"
 *    teamSlug: "as-well"
 *    category: "Blockchain"
 * }
 */

ideaApp.options("/create", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST,GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

ideaApp.post("/create", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const data = JSON.parse(req.body);
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }
  // create short version
  try {
    const userDoc = await admin.firestore().collection("user").doc(data.authorUserId).get();
    const userData = userDoc.data();
    const shortIdea = {
      teamName: data.teamName,
      teamSlug: data.teamSlug,
      title: data.title,
      shortDesc: data.shortDesc,
      category: data.category,
      upVote: 0,
      totalVote: 0,
      interactors: [],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      slug: data.slug,
      mediaUrl: data.mediaUrl,
      authorName: userData.fullName,
      authorUserId: data.authorUserId,
      authorUserName: userData.userName,
    };
    // create full version
    const fullIdea = {
      title: data.title,
      authorUserId: data.authorUserId,
      mediaUrl: data.mediaUrl,
      category: data.category,
      teamName: data.teamName,
      teamSlug: data.teamSlug,
      fullDesc: data.fullDesc,
      upVote: 0,
      totalVote: 0,
      interactors: [],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      slug: data.slug,
      authorName: userData.fullName,
      authorUserName: userData.userName,
      authorBio: userData.bio,
      authorCity: userData.city,
      authorPhotoUrl: userData.photoUrl,
    };

    // short doc
    const shortDocRef = admin.firestore().collection("idea-short").doc();
    await shortDocRef.set(shortIdea);
    await admin.firestore().collection("idea-full").doc(shortDocRef.id).set(fullIdea);

    // TODO: logicl coin azaltılması ve exp verilmesi.
    const experience = userData.experience + userData.level * 25 + 50;
    const freshUserData = {
      ...userData,
      logiclCoin: userData.logiclCoin - 200,
      experience: experience,
      level: experience / (userData.level * 50 + 50),
    };

    await admin
        .firestore()
        .collection("user")
        .doc(data.authorUserId)
        .update(freshUserData, {merge: true});
    const isLevelUp = userData.level < freshUserData.level;

    res.status(200).send({
      success: true,
      isLevelUp: isLevelUp,
      message: "Idea created successfuly.",
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

exports.idea = functions.https.onRequest(ideaApp);
