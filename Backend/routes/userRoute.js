const multer = require('multer');
const { isAuthenticated } = require("../Middleware/verifyJWT");
const storage = multer.memoryStorage();
const express = require("express");
const upload = multer({ storage });
const {signup,signin,forgetpassword,resetpassword,textsummarization,speechrecognition} = require("../controllers/userController");
// const userController = require("../controllers/userController");

const router = express.Router();
router.route("/register").post(signup);
router.route("/login").post(signin);
router.route("/forgetpassword").post(forgetpassword);
router.route("/resetpassword/:userId/:accessToken").post(resetpassword);
router.post("/text-summarization", upload.array('documents'), textsummarization);
router.post("/audio-transform",upload.single('audioFile'),speechrecognition)



router.use(isAuthenticated);
module.exports = router;
