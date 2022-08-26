"use strict";
(() => {
var exports = {};
exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 3160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3160);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 /*const feedQuery = groq`
                *[_type == 'player' && !blockPlayer]{
                _id,
                ...
                } | order(_createdAt desc)
                `

const feedQuery = groq`
                *[_type == 'player' ]{
                _id,
                ...
                } | order(level  desc)
                `

type Data = {
 players: Player[] 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const players: player[]= await sanityClient.fetch(feedQuery)
  res.status(200).json({ players })
}

*/ 


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(706));
module.exports = __webpack_exports__;

})();