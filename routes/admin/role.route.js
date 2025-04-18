const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/role_controller")

router.get("/", controller.index);

router.get("/create", controller.create);

router.post("/create", controller.createPost);

router.get("/edit/:id", controller.edit);

router.patch("/edit/:id", controller.editPatch);

router.get("/permissions", controller.permissions);






module.exports = router;