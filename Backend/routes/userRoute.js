const multer = require('multer');
const { isAuthenticated } = require("../Middleware/verifyJWT");
const storage = multer.memoryStorage();
const express = require("express");
const upload = multer({ storage });
const {signup,signin,forgetpassword,resetpassword,textsummarization} = require("../controllers/userController");
// const userController = require("../controllers/userController");

const router = express.Router();
router.route("/register").post(signup);
router.route("/login").post(signin);
router.route("/forgetpassword").post(forgetpassword);
router.route("/resetpassword/:userId/:accessToken").post(resetpassword);
router.post('/textSummarization', upload.array('documents'), textsummarization);

router.use(isAuthenticated);
module.exports = router;
