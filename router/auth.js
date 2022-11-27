const express = require("express");
const userController = require("../controllers/users");
const router = express.Router();

router.post("/register",userController.register);
router.post("/login",userController.login);

router.post("/owner_reg",userController.owner_reg);
router.post("/owner_login",userController.owner_login);

router.post("/admin_login",userController.admin_login);


router.post("/owner",userController.owner);
module.exports=router;