// const express = require("express");
// const {
//   registerUser,
//   loginUser,
//   refreshAccessToken,
// } = require("../controllers/auth.controller.cjs");

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/refresh", refreshAccessToken);
// // routes/authRoutes.js
// router.post("/logout", async (req, res) => {
//   res.clearCookie("refreshToken", {
//     httpOnly: true,
//     secure: false, // true in production
//     sameSite: "lax",
//   });

//   return res.status(200).json({ message: "Logged out successfully" });
// });

// module.exports = router;

const express = require("express");
const {
  registerUser,
  loginUser,
  refreshAccessToken,
} = require("../controllers/auth.controller.cjs");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshAccessToken);

// ✅ LOGOUT ROUTE (MUST BE HERE)
router.post("/logout", (req, res) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "lax",
  });

  return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
