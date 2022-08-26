"use strict";
(() => {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1929:
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
        return await addBook(req, res);
    } else if (req.method === "GET") {
        return await readBooks(req, res);
    } else {
        return res.status(405).json({
            message: "Method not allowed",
            success: false
        });
    }
};
async function readBooks(req, res) {
    const body = req.body;
    try {
        const allbooks = await prisma.bookSuggestion.findMany();
        return res.status(200).json(allbooks, {
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
async function addBook(req, res) {
    const body = req.body;
    try {
        const newEntry = await prisma.bookSuggestion.create({
            data: {
                bookTitle: body.title,
                bookAuthor: body.author,
                bookGenre: body.genre
            }
        });
        return res.status(200).json(newEntry, {
            success: true
        });
    } catch (error) {
        console.error("Request error", error);
        res.status(500).json({
            error: "Error adding book",
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
var __webpack_exports__ = (__webpack_exec__(1929));
module.exports = __webpack_exports__;

})();