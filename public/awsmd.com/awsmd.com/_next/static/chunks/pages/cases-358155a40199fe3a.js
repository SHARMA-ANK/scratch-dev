(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [415], {
        18914: (s, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                default: () => x
            });
            var a = t(37876),
                l = t(40235);
            t(14232);
            var c = t(10627),
                i = t(98953),
                _ = t(39871),
                n = t(16723),
                r = t(99975),
                o = t(89408),
                d = t.n(o);
            let h = [...c.xL, ...c.v0],
                x = () => (0, a.jsxs)(r.A, {
                    className: d().root,
                    title: "AWSMD | Cases",
                    offIntro: !0,
                    children: [(0, a.jsx)(i.p4, {
                        header: (0, a.jsx)(n.A, {
                            isDark: !0
                        }),
                        data: h,
                        count: 5,
                        type: "cases"
                    }), (0, a.jsx)("div", {
                        className: d().content,
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsxs)("h2", {
                                className: d().title,
                                children: [(0, a.jsx)("strong", {
                                    children: "Popular"
                                }), " ", (0, a.jsx)("span", {
                                    children: "cases"
                                })]
                            }), (0, a.jsx)("ul", {
                                className: d().list,
                                children: h.map(s => (0, a.jsx)("li", {
                                    className: d().list_item,
                                    children: (0, a.jsx)(l.Zj, {
                                        type: "cases",
                                        data: s
                                    })
                                }, s.id))
                            })]
                        })
                    }), (0, a.jsx)(_.A.Parallax, {
                        color: "#F6F6F6",
                        children: (0, a.jsx)(_.A, {})
                    })]
                })
        },
        31489: (s, e, t) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/cases", function() {
                return t(18914)
            }])
        },
        89408: s => {
            s.exports = {
                root: "cases_root__hdKJb",
                content: "cases_content__EVgH0",
                title: "cases_title__S1_og",
                list: "cases_list__1jptF",
                list_item: "cases_list_item__RV3oy"
            }
        }
    },
    s => {
        s.O(0, [742, 296, 320, 377, 953, 636, 593, 792], () => s(s.s = 31489)), _N_E = s.O()
    }
]);