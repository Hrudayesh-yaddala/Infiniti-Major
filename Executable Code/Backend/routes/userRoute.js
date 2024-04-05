const multer = require('multer');
const { isAuthenticated } = require("../Middleware/verifyJWT");
const storage = multer.memoryStorage();
const express = require("express");
const upload = multer({ storage });
const {signup,signin,forgetpassword,resetpassword,textsummarization,speechrecognition,handwrittenOcr,text2speech,languagetranslation,paraphraser,MathematicalSolving,EdittoHandwritten} = require("../controllers/userController");
// const userController = require("../controllers/userController");

const router = express.Router();
router.route("/register").post(signup);
router.route("/login").post(signin);
router.route("/forgetpassword").post(forgetpassword);
router.route("/resetpassword/:userId/:accessToken").post(resetpassword);
router.post("/text-summarization", upload.array('documents'), textsummarization);
router.post("/audio-transform",upload.single('audioFile'),speechrecognition);
// router.post("/audio-transform",upload.single('audioFile'),speechrecognition);
router.post("/hand-to-edit",upload.single('ImageFile'),handwrittenOcr);
router.post("/text-to-speech",upload.single('input_document'),text2speech);
router.post("/language-translation",upload.single('input_document'),languagetranslation);
router.post("/paraphrase",upload.single('input_document'),paraphraser);
router.post("/expression-solving",upload.single('input_document'),MathematicalSolving);
router.post("/edit-handwritten",upload.single('input_document'),EdittoHandwritten);


// router.route("/expression-solving").post(MathematicalSolving);









router.use(isAuthenticated);
module.exports = router;
