const express = require("express");
const router = express.Router();
const { handleGetAllUsers,
    handleGetUserbyId,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser } = require("./../controllers/user");

// router.get('/', async (req, res) => {

//     const allDbUser = await User.find({});

//     const html = `<ul> ${allDbUser.map((user) => `<li>${user.firstName}-${user.email}</li>`).join("")}</ul>`;
//     res.send(html);
// });

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router.route("/:id").get(handleGetUserbyId).patch(handleUpdateUserById).delete(handleDeleteUserById)

module.exports = router;