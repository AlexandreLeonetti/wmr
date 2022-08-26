"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/players";
exports.ids = ["pages/api/players"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/players.js":
/*!******************************!*\
  !*** ./pages/api/players.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        return await addPlayer(req, res);\n    } else if (req.method === \"GET\") {\n        return await readPlayers(req, res);\n    } else {\n        return res.status(405).json({\n            message: \"Method not allowed\",\n            success: false\n        });\n    }\n};\nasync function readPlayers(req, res) {\n    const body = req.body;\n    try {\n        const allplayers = await prisma.players.findMany();\n        return res.status(200).json(allplayers, {\n            success: true\n        });\n    } catch (error) {\n        console.log(error);\n        return res.status(500).json({\n            error: \"Error reading from database\",\n            success: false\n        });\n    }\n}\nasync function addPlayer(req, res) {\n    const body = req.body;\n    try {\n        const newEntry = await prisma.players.create({\n            data: {\n                username: body.username,\n                email: body.email,\n                password: body.password,\n                country: body.country,\n                level: body.level\n            }\n        });\n        return res.status(200).json(newEntry, {\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Request error\", error);\n        res.status(500).json({\n            error: \"Error adding player\",\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGxheWVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFLbEIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMxQyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDakIsT0FBTyxNQUFNQyxTQUFTLENBQUNILEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7S0FDcEMsTUFDRixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUM7UUFDMUIsT0FBTyxNQUFNRSxXQUFXLENBQUNKLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQUM7S0FDdEMsTUFDSTtRQUNLLE9BQU9BLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLG9CQUFvQjtZQUFFQyxPQUFPLEVBQUUsS0FBSztTQUFFLENBQUMsQ0FBQztLQUNsRjtDQUNaO0FBR0QsZUFBZUosV0FBVyxDQUFDSixHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUNsQyxNQUFNUSxJQUFJLEdBQUdULEdBQUcsQ0FBQ1MsSUFBSTtJQUNyQixJQUFHO1FBQ0QsTUFBTUMsVUFBVSxHQUFFLE1BQU1aLE1BQU0sQ0FBQ2EsT0FBTyxDQUFDQyxRQUFRLEVBQUU7UUFDakQsT0FBT1gsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ksVUFBVSxFQUFFO1lBQUNGLE9BQU8sRUFBQyxJQUFJO1NBQUMsQ0FBQyxDQUFDO0tBQ3pELFFBQU9LLEtBQUssRUFBRTtRQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1FBQ2xCLE9BQU9aLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ08sS0FBSyxFQUFFLDZCQUE2QjtZQUFFTCxPQUFPLEVBQUUsS0FBSztTQUFDLENBQUMsQ0FBQztLQUNyRjtDQUNGO0FBRUQsZUFBZUwsU0FBUyxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM3QixNQUFNUSxJQUFJLEdBQUdULEdBQUcsQ0FBQ1MsSUFBSTtJQUNyQixJQUFJO1FBQ00sTUFBTU8sUUFBUSxHQUFHLE1BQU1sQixNQUFNLENBQUNhLE9BQU8sQ0FBQ00sTUFBTSxDQUFDO1lBQy9CQyxJQUFJLEVBQUU7Z0JBQ1lDLFFBQVEsRUFBRVYsSUFBSSxDQUFDVSxRQUFRO2dCQUN2QkMsS0FBSyxFQUFFWCxJQUFJLENBQUNXLEtBQUs7Z0JBQ2pCQyxRQUFRLEVBQUVaLElBQUksQ0FBQ1ksUUFBUTtnQkFDdkJDLE9BQU8sRUFBRWIsSUFBSSxDQUFDYSxPQUFPO2dCQUNyQkMsS0FBSyxFQUFJZCxJQUFJLENBQUNjLEtBQUs7YUFDdEI7U0FDbEIsQ0FBQztRQUNaLE9BQU90QixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVSxRQUFRLEVBQUU7WUFBQ1IsT0FBTyxFQUFFLElBQUk7U0FBQyxDQUFDLENBQUM7S0FDMUQsQ0FBQyxPQUFPSyxLQUFLLEVBQUU7UUFDTkMsT0FBTyxDQUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUN0Q1osR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFTyxLQUFLLEVBQUUscUJBQXFCO1lBQUVMLE9BQU8sRUFBQyxLQUFLO1NBQUUsQ0FBQyxDQUFDO0tBQ3pFO0NBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3BsYXllcnMuanM/ZGUwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYWRkUGxheWVyKHJlcSwgcmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKXtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgcmVhZFBsYXllcnMocmVxLCByZXMpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcsIHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRQbGF5ZXJzKHJlcSwgcmVzKXtcbiAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xuICB0cnl7XG4gICAgY29uc3QgYWxscGxheWVycz0gYXdhaXQgcHJpc21hLnBsYXllcnMuZmluZE1hbnkoKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oYWxscGxheWVycywge3N1Y2Nlc3M6dHJ1ZX0pO1xuICB9Y2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjogXCJFcnJvciByZWFkaW5nIGZyb20gZGF0YWJhc2VcIiwgc3VjY2VzczogZmFsc2V9KTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRQbGF5ZXIocmVxLCByZXMpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RW50cnkgPSBhd2FpdCBwcmlzbWEucGxheWVycy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGJvZHkudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogYm9keS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBib2R5LnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeTogYm9keS5jb3VudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6ICAgYm9keS5sZXZlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdFbnRyeSwge3N1Y2Nlc3M6IHRydWV9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlcXVlc3QgZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiRXJyb3IgYWRkaW5nIHBsYXllclwiLCBzdWNjZXNzOmZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhZGRQbGF5ZXIiLCJyZWFkUGxheWVycyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwic3VjY2VzcyIsImJvZHkiLCJhbGxwbGF5ZXJzIiwicGxheWVycyIsImZpbmRNYW55IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibmV3RW50cnkiLCJjcmVhdGUiLCJkYXRhIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY291bnRyeSIsImxldmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/players.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/players.js"));
module.exports = __webpack_exports__;

})();