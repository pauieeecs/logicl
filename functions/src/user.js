/* eslint-disable max-len */

const functions = require("firebase-functions");
const express = require("express");
const admin = require("./admin").admin;

const userApp = express();

/**
 * id kısmında belirttiğiniz profilin bilgilerini geri döndürür.
 */
userApp.get("/profile/:id", async (req, res) => {
  if (req.params.id === "") {
    res.status(400).send({
      error: "ID can't be empty.",
    });
  }
  const user = await admin.firestore().collection("user").doc(req.params.id).get();
  if (!user.exists) {
    res.status(400).send({
      error: "User couldn't be found. Check ID is right.",
    });
  }
  res.status(200).send(user.data());
});

/**
 * üye dökümanı oluşturur ve başarılı olduğunu belirten bir response döndürür
 * bodyde gelmesi beklenen data (isimler aynı bu şekil):
 * email, fullName,photoUrl,authProvider,country,city,birthDate(gün/ay/yıl),userName,userId
 *
 * örnek: {
 *    email: "unallsukru@gmail.com",
 *    fullName: "Şükrü Ünal",
 *    photoUrl: "www.photo.com/url",
 *    authProvider: "email/github/google",
 *    country: "Turkey",
 *    city: "Denizli",
 *    birthDate: "gün inputu / ay inputu / yıl inputu",
 *    userName: "mailinin @ ten önceki kısmı? veya sukru-unal-43 gibi bir slug?"
 *    userId: "authdan gelen uid"
 * }
 */

userApp.options("/create", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST,GET");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).send();
});

userApp.post("/create", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const userInfo = JSON.parse(req.body);
  if (userInfo === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }
  const fullUserInfo = {
    ...userInfo,
    logiclCoin: 1000,
    bio: "Just joined Logicl.",
    joinedAt: admin.firestore.FieldValue.serverTimestamp(),
    experience: 0,
    level: 1,
    role: "user",
    jobTitle: "",
    gitHubLink: userInfo.gitHubLink ? userInfo.gitHubLink : "",
    twitterLink: "",
    teamName: "",
    teamSlug: "",
  };
  try {
    await admin.firestore().collection("user").doc(userInfo.userId).set(fullUserInfo);
    res.status(201).send({
      success: true,
      message: "User created successfuly",
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
 * body içerisindeki userId yi baz alıp alakalı dökümanı update eder.
 * profil güncelleme ekranındaki her şeyi alır ve önceki dökümanın üzerine yazar. dolayısıyla boş input yollarken dikkatli olun
 */
userApp.post("/update", async (req, res) => {
  const userInfo = JSON.parse(req.body);
  if (userInfo === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }

  try {
    await admin
        .firestore()
        .collection("user")
        .doc(userInfo.userId)
        .update({
          ...userInfo,
        });
    res.status(201).send({
      success: true,
      message: "User created successfuly",
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: "An error occured.",
      error: err,
    });
  }
});

exports.user = functions.https.onRequest(userApp);
