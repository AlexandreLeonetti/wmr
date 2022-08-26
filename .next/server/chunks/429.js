"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 1429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Topbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Topelement.jsx



function Topelement({ Icon , title , destination , onClick  } = Props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            className: "",
            href: destination,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>onClick?.(),
                className: `  font-bold cursor-pointer items-center space-x-2 px-4 py-2
                           rounded-lg hover:bg-gray-100  transition-all duration-200 border ` + (title == "Log In" ? " text-white bg-blue-500 hover:bg-blue-700" : " text-blue-500 border-blue-500"),
                children: title
            })
        })
    });
}
/* harmony default export */ const components_Topelement = (Topelement);

;// CONCATENATED MODULE: ./components/Topleft.jsx



function Topleft_Topelement({ text , value , onClick  } = Props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " text-gray-500 flex group items-center space-x-2 px-1 py-4 transition-all duration-200",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "hidden md:inline-flex ",
            children: [
                text,
                " :  ",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "px-2 text-blue-700",
                    children: [
                        value,
                        "     "
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Topleft = (Topleft_Topelement);

// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ./components/Topbar.jsx






async function handler(req, res) {
    const session = await (0,react_.getSession)({
        req
    });
    console.log(session);
}
function Topbar(Props) {
    const { data: session  } = (0,react_.useSession)();
    const { 0: players , 1: setPlayers  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        fetchPlayers();
    }, []);
    const fetchPlayers = async ()=>{
        console.log("fetching players");
        try {
            const response = await fetch("/api/players", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setPlayers(await response.json());
            if (response.status !== 200) {
                console.log("something went wrong" + response);
            } else {}
        } catch (error) {
            console.log("there was an error reading from the db, ", error);
        }
    };
    console.log({
        data: session
    });
    handler();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " border-b border-grey-100 bg-white ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "lg:max-w-6xl md:flex md:justify-between py-1 mx-auto ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " hidden md:flex md:justify-start text-xs md:items-start",
                    children: Props.topStats == true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(Topleft, {
                                text: "Countries",
                                value: "dummy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Topleft, {
                                text: "Players",
                                value: players ? players.length : "none"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Topleft, {
                                text: "Top Country",
                                value: "Dummy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Topleft, {
                                text: "Fastest Player",
                                value: "Dummy"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-auto"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " flex justify-center md:justify-end text-xs items-center space-x-2 ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Topelement, {
                            Icon: outline_.BookmarkIcon,
                            title: "Ranking",
                            destination: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Topelement, {
                            Icon: outline_.HashtagIcon,
                            title: "Calculate",
                            destination: "/calculate/calculate"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Topelement, {
                            Icon: outline_.HashtagIcon,
                            title: "Train",
                            destination: "/train/train"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Topelement, {
                            destination: "",
                            onClick: session ? react_.signOut : react_.signIn,
                            Icon: outline_.UserIcon,
                            title: session ? "Log Out" : "Log In"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Topbar = (Topbar);


/***/ })

};
;