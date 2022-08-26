"use strict";
(() => {
var exports = {};
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 3160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 6833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3160);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    const data = JSON.parse(req.body);
    const mutations = {
        mutations: [
            {
                create: {
                    _type: "player",
                    country: data.country,
                    username: data.username,
                    blockPlayer: false,
                    level: data.level
                }
            }
        ]
    };
    console.log(typeof data.level);
    const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
    const result = await fetch(apiEndpoint, {
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
        },
        body: JSON.stringify(mutations),
        method: "POST"
    });
    const jsonData = await result.json();
    res.status(200).json({
        name: "JD"
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6833));
module.exports = __webpack_exports__;

})();