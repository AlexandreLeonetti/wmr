"use strict";
(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
async function handler(req, res) {
    if (req.method === "POST") {
        return await addPlayer(req, res);
    } else if (req.method === "GET") {
        return await readPlayers(req, res);
    } else {
        return res.status(405).json({
            message: "Method not allowed",
            success: false
        });
    }
};
async function readPlayers(req, res) {
    const body = req.body;
    try {
        const allplayers = await prisma.players.findMany();
        return res.status(200).json(allplayers, {
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error reading from database",
            success: false
        });
    }
}
async function addPlayer(req, res) {
    const body = req.body;
    try {
        const newEntry = await prisma.players.create({
            data: {
                username: body.username,
                email: body.email,
                password: body.password,
                country: body.country,
                level: body.level
            }
        });
        return res.status(200).json(newEntry, {
            success: true
        });
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({
            error: "Error adding player",
            success: false
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(795));
module.exports = __webpack_exports__;

})();