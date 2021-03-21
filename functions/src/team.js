/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const admin = require("./admin").admin;

const teamApp = express();

/**
 * takım oluşturma
 * bodyde beklenen değerler;
 * creatorId(oluşturan kişinin uidsi), teamName, teamSlug ve oluşturma ekranındaki diğer tüm veriler.
 * örnek: {
 *    teamName: "Agalarla Co.",
 *    teamSlug: "agalarla-co",
 *    category: "Blockchain",
 *    description: "Agalarla Co. blockchain teknolojisi ile ilgili ürünler geliştiren, 100+ çalışana sahip ve 24 ülkede aktif hizmet veren bir kuruluştur."
 *    creatorId: "2321asfxTysaesDe2fvxriaHFVK7Z2",
 * }
 */
teamApp.post("/create", async (req, res) => {
  const data = req.body;
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }

  try {
    const userDoc = await admin.firestore().collection("user").doc(data.creatorId).get();
    const userData = userDoc.data();

    const teamDoc = await admin
        .firestore()
        .collection("team")
        .add({
          ...data,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
          userCount: 1,
          firstThreeUsers: [
            {
              fullName: userData.fullName,
              photoUrl: userData.photoUrl,
              userId: userData.userId,
            },
          ],
        });

    teamDoc.collection("user").add({
      ...userData,
      roleInTeam: "Admin",
      positionInTeam: "Leader",
    });

    await admin.firestore().collection("user").doc(data.creatorId).update({
      teamName: data.teamName,
      teamSlug: data.teamSlug,
    });

    res.status(201).send({
      success: true,
      message: "Team created successfuly.",
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: "An error occured.",
      error: err,
    });
  }
});

/**
 * başvuru oluşturma
 * bodyde beklenen değerler;
 * başvuru ekranındaki tüm bilgiler
 * örnek: {
 *    userId: "2321asfxTysaesDe2fvxriaHFVK7Z2",
 *    fullName: "Şükrü Ünal",
 *    email: "unallsukru@gmail.com",
 *    country: "Turkey",
 *    city: "Denizli",
 *    phone: "05325647336",
 *    description: "ben var ya ben fenasal biriyim beni işe alın tşkler."
 *    applyPosition: "Şirketi üstüme yapsanız yeterli, CEO da olur xD",
 *    teamId: "başvurulan takım idsi"
 * }
 */
teamApp.post("/apply", async (req, res) => {
  const data = req.body;
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }

  const userDoc = await admin.firestore().collection("user").doc(data.userId).get();
  const fullUserData = userDoc.data();

  const apply = {
    status: "pending",
    givenInfo: {
      fullName: data.fullName,
      email: data.email,
      country: data.country,
      city: data.city,
      phone: data.phone,
      description: data.description,
      applyPosition: data.applyPosition,
    },
    fetchedInfo: {
      ...fullUserData,
    },
  };

  try {
    await admin.firestore().collection("team").doc(data.teamId).collection("apply").add(apply);
    res.status(201).send({
      success: true,
      message: "Apply created successfuly.",
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: "An error occured.",
      error: err,
    });
  }
});

/**
 * başvuru değerlendirme (onaylama veya reddetme)
 * beklenen örnek body;
 *
 * örnek: {
 *    userId (başvuru yapan kişinin userId si): "2321asfxTysaesDe2fvxriaHFVK7Z2",
 *    teamId: "team id işte :D",
 *    applyId: "başvuru dökümanının idsi."
 *    isAccepted: true or false,
 *    roleInTeam: "user/admin/moderator",
 *    positionInTeam: "apply position vardı ya, işte o. CEO mesela",
 *    teamName: "Agalarla Co.",
 *    teamSlug: "agalarla-co",
 * }
 */
teamApp.post("/evaluate", async (req, res) => {
  const data = req.body;
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }
  const userDoc = await admin.firestore().collection("user").doc(data.userId).get();
  const userData = userDoc.data();

  if (data.isAccepted) {
    try {
      const user = {
        ...userData,
        roleInTeam: data.roleInTeam,
        positionInTeam: data.positionInTeam,
      };
      const teamDoc = admin.firestore().collection("team").doc(data.teamId);
      const teamData = await (await teamDoc.get()).data();
      await teamDoc.collection("apply").doc(data.applyId).update({
        status: "approved",
      });
      await teamDoc.collection("user").add(user);
      await admin.firestore().collection("user").doc(userData.userId).update({
        teamName: data.teamName,
        teamSlug: data.teamSlug,
      });
      if (teamData.userCount < 3) {
        teamDoc.update({
          userCount: admin.firestore.FieldValue.increment(1),
          firstThreeUsers: admin.firestore.FieldValue.arrayUnion({
            fullName: userData.fullName,
            photoUrl: userData.photoUrl,
            userId: userData.userId,
          }),
        });
      } else {
        teamDoc.update({
          userCount: admin.firestore.FieldValue.increment(1),
        });
      }
      res.status(201).send({
        success: true,
        message: "User created under team successfuly.",
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: "An error occured.",
        error: err,
      });
    }
  } else {
    try {
      await admin
          .firestore()
          .collection("team")
          .doc(data.teamId)
          .collection("apply")
          .doc(data.applyId)
          .update({
            status: "denied",
          });

      res.status(201).send({
        success: true,
        message: "Apply status switched to 'denied' successfuly.",
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: "An error occured.",
        error: err,
      });
    }
  }
});

teamApp.post("/update", async (req, res) => {
  const data = req.body;
  // check data
  if (data === null) {
    res.status(400).send({
      error: "Body can't be null.",
    });
  }

  const teamDoc = admin.firestore().collection("team").doc(data.teamId);
  const teamData = await teamDoc.get();
  if (teamData.creatorId !== data.userId) {
    res.status(400).send({
      success: false,
      message: "You can't edit other's teams.",
    });
  } else {
    try {
      await teamDoc.update({
        teamName: data.teamName,
        description: data.description,
        photoUrl: data.photoUrl,
      });
      res.status(201).send({
        success: true,
        message: "Team edited successfuly.",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        success: false,
        message: "An error occured.",
        error: err,
      });
    }
  }
});
exports.team = functions.https.onRequest(teamApp);
