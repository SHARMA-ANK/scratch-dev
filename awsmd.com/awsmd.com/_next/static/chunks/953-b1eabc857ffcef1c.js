(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [953], {
        9271: e => {
            e.exports = {
                hero: "blog-hero_hero__XqIAy",
                hero_wrapper: "blog-hero_hero_wrapper__SqO09",
                hero_content: "blog-hero_hero_content__mYnQb",
                hero_box: "blog-hero_hero_box__lQqh8",
                hero_others: "blog-hero_hero_others__Enc7O",
                hero_title: "blog-hero_hero_title__SPJo_",
                hero_pagination: "blog-hero_hero_pagination__NKaYq",
                hero_swiper: "blog-hero_hero_swiper__nEXl1",
                hero_slide: "blog-hero_hero_slide__M5Eej",
                hero_slideAnimation: "blog-hero_hero_slideAnimation__BHa8Q",
                hero_pagination_mobile: "blog-hero_hero_pagination_mobile__J55DL"
            }
        },
        19151: e => {
            e.exports = {
                root: "blog-info_root__bu1Ea",
                item: "blog-info_item__t7FmK",
                read: "blog-info_read__lrKEJ",
                date: "blog-info_date__mR7lB"
            }
        },
        37575: e => {
            e.exports = {
                blog: "blog-popular-lite_blog__7ewzp",
                blog_header: "blog-popular-lite_blog_header__tPA9B",
                blog_title: "blog-popular-lite_blog_title__izaOg",
                blog_readAllBtn: "blog-popular-lite_blog_readAllBtn__cmqQG",
                blog_readAllBtn_mobile: "blog-popular-lite_blog_readAllBtn_mobile__6m09K",
                blog_articles: "blog-popular-lite_blog_articles__TI2RR",
                blog_swiper: "blog-popular-lite_blog_swiper__R4ixC",
                blog_slide: "blog-popular-lite_blog_slide__wYoXR",
                blog_footer: "blog-popular-lite_blog_footer__HXgIq",
                blog_controls: "blog-popular-lite_blog_controls__Jrqmw",
                blog_controls_prev: "blog-popular-lite_blog_controls_prev__OOPWs",
                blog_controls_next: "blog-popular-lite_blog_controls_next__JDiYA"
            }
        },
        40114: e => {
            e.exports = {
                pagination: "pagination_pagination__GFqnL",
                pagination_box: "pagination_pagination_box__pYeo_",
                pagination_button: "pagination_pagination_button__64_Vt",
                pagination_buttonNext: "pagination_pagination_buttonNext__AFEzF",
                pagination_buttonActive: "pagination_pagination_buttonActive__qiYF1"
            }
        },
        49760: e => {
            e.exports = {
                stars: "stars_stars__8n3C9",
                stars_item: "stars_stars_item__Tw6xD",
                stars_itemActive: "stars_stars_itemActive__cnT_U"
            }
        },
        61784: e => {
            e.exports = {
                button: "button-icon_button__CSNco",
                button_outlined: "button-icon_button_outlined__zlK4P",
                button_filled: "button-icon_button_filled__7Lg_v"
            }
        },
        76524: e => {
            e.exports = {
                breadcrumbs: "breadcrumbs_breadcrumbs__KcZOC",
                breadcrumbs_item: "breadcrumbs_breadcrumbs_item__wzQIG",
                breadcrumbs_itemDisabled: "breadcrumbs_breadcrumbs_itemDisabled__h0Cxn",
                breadcrumbs_itemLast: "breadcrumbs_breadcrumbs_itemLast__vorOg",
                breadcrumbs_separator: "breadcrumbs_breadcrumbs_separator__l65IK"
            }
        },
        96081: e => {
            e.exports = {
                blog: "blog-popular_blog__GFJiW",
                blog_title: "blog-popular_blog_title__l0u_K",
                blog_row: "blog-popular_blog_row__lRjlY",
                blog_category_box: "blog-popular_blog_category_box__K5ZnW",
                blog_sort: "blog-popular_blog_sort__anmMu",
                blog_blogs: "blog-popular_blog_blogs__Zp1cV",
                blog_list: "blog-popular_blog_list___uESC",
                blog_item: "blog-popular_blog_item__0Dd49",
                blog_noblogs: "blog-popular_blog_noblogs__YJkT_",
                blog_pagination: "blog-popular_blog_pagination__St8TY"
            }
        },
        98953: (e, o, l) => {
            "use strict";
            l.d(o, {
                p4: () => w,
                pI: () => M
            });
            var _ = l(37876),
                t = l(14232),
                r = l(49995),
                a = l(40235),
                s = l(73290),
                i = l(48230),
                n = l.n(i),
                b = l(89099),
                g = l(76524),
                p = l.n(g);
            let c = e => {
                let {
                    links: o,
                    className: l
                } = e, t = (0, b.useRouter)();
                return (0, _.jsx)("div", {
                    className: (0, r.A)(p().breadcrumbs, l),
                    children: o.map((e, l) => {
                        let a, s = [p().breadcrumbs_item],
                            i = e.href || "",
                            b = l === o.length - 1;
                        return e.disabled && s.push(p().breadcrumbs_itemDisabled), b && s.push(p().breadcrumbs_itemLast), b && !i && (i = t.asPath), (0, _.jsxs)(_.Fragment, {
                            children: [(0, _.jsx)(n(), {
                                href: i,
                                className: (0, r.A)(s),
                                onClick: (a = b || !i, e => {
                                    a && e.preventDefault()
                                }),
                                children: (0, _.jsx)("span", {
                                    children: e.name
                                })
                            }), !b && (0, _.jsx)("strong", {
                                className: p().breadcrumbs_separator,
                                children: "/"
                            })]
                        })
                    })
                })
            };
            var d = l(61784),
                u = l.n(d),
                h = l(85105);
            let m = e => {
                let {
                    className: o,
                    icon: l,
                    disabled: t,
                    onClick: a,
                    variant: s = "filled",
                    type: i = "button"
                } = e;
                return (0, _.jsxs)("button", {
                    className: (0, r.A)(u().button, u()["button_" + s], o),
                    type: i,
                    disabled: t,
                    onClick: a,
                    children: [(0, _.jsx)("span", {
                        children: l || (0, _.jsx)(h.A, {})
                    }), (0, _.jsx)("span", {
                        children: l || (0, _.jsx)(h.A, {})
                    })]
                })
            };
            var x = l(40114),
                j = l.n(x);
            let v = e => {
                let {
                    className: o,
                    showCount: l,
                    total: a,
                    activeIndex: s,
                    onChangeIndex: i
                } = e, n = (0, t.useMemo)(() => (e => {
                    let o = [];
                    for (let l = 1; l <= e; l++) o.push(l);
                    return o
                })(a), [a]), b = (0, t.useMemo)(() => ({
                    width: "".concat(61 * n.length, "px")
                }), []), g = (0, t.useRef)(null), p = e => {
                    let o = g.current;
                    i && e <= a && (i(e), o && (o.scrollLeft = (e - 1) * 61))
                };
                return (0, _.jsxs)("div", {
                    className: (0, r.A)(j().pagination, o),
                    children: [(0, _.jsx)("div", {
                        ref: g,
                        className: j().pagination_box,
                        style: b,
                        children: n.map(e => (0, _.jsx)("button", {
                            className: (0, r.A)(j().pagination_button, s == e && j().pagination_buttonActive),
                            onClick: p.bind(null, e),
                            children: e
                        }, e))
                    }), a > l && (0, _.jsx)(m, {
                        className: j().pagination_buttonNext,
                        onClick: p.bind(null, (s || 1) + 1),
                        disabled: s === n.length
                    })]
                })
            };
            var N = l(27888),
                A = l(9271),
                C = l.n(A);
            let w = e => {
                let {
                    header: o,
                    data: l,
                    type: i,
                    count: n = 4
                } = e, [b, g] = (0, t.useState)(null), [p, d] = (0, t.useState)(1), u = (0, s.f)(), h = e => {
                    b && b.slideTo(e - 1)
                }, m = (0, t.useMemo)(() => l.slice(0, n), [l]);
                return (0, _.jsx)("section", {
                    className: C().hero,
                    children: (0, _.jsxs)("div", {
                        className: C().hero_wrapper,
                        children: [o, (0, _.jsxs)("div", {
                            className: C().hero_content,
                            children: [(0, _.jsxs)("div", {
                                className: C().hero_box,
                                children: [(0, _.jsx)(c, {
                                    links: [{
                                        name: "Home",
                                        href: "/"
                                    }, {
                                        name: "blogs" === i ? "Blog" : "Cases"
                                    }]
                                }), (0, _.jsxs)("h1", {
                                    className: C().hero_title,
                                    children: [(0, _.jsx)("span", {
                                        children: "Our"
                                    }), " ", (0, _.jsx)("strong", {
                                        children: "blogs" === i ? "Blog" : "Cases"
                                    })]
                                }), (0, _.jsx)(v, {
                                    className: C().hero_pagination,
                                    total: m.length,
                                    showCount: 3,
                                    activeIndex: p,
                                    onChangeIndex: h
                                })]
                            }), (0, _.jsx)("div", {
                                className: C().hero_others,
                                children: (0, _.jsx)(N.RC, { ...{
                                        slidesPerView: 1,
                                        grabCursor: !0,
                                        speed: 600,
                                        slideToClickedSlide: !0
                                    },
                                    onInit: g,
                                    onSlideChange: e => d(e.activeIndex + 1),
                                    className: C().hero_swiper,
                                    children: m.map(e => (0, _.jsx)(N.qr, {
                                        className: (0, r.A)(C().hero_slide, u.current > 0 && C().hero_slideAnimation),
                                        children: (0, _.jsx)(a.PI, {
                                            type: i,
                                            data: e
                                        })
                                    }, e.id))
                                })
                            }), (0, _.jsx)(v, {
                                className: C().hero_pagination_mobile,
                                total: m.length,
                                showCount: 3,
                                activeIndex: p,
                                onChangeIndex: h
                            })]
                        })]
                    })
                })
            };
            l(71552), l(74788), l(96081), l(86404), l(37575);
            var f = l(56557),
                I = l.n(f),
                Y = l(53241),
                k = l(1730),
                q = l(49760),
                D = l.n(q);
            let B = e => {
                let {
                    rating: o
                } = e;
                return (0, _.jsx)("div", {
                    className: D().stars,
                    children: (0, _.jsx)(Y.A, {
                        repeatCount: 5,
                        wrapper: e => (0, _.jsx)(k.A, {
                            className: (0, r.A)(D().stars_item, e + 1 <= o && D().stars_itemActive),
                            url: "/img/sprite.svg#star"
                        })
                    })
                })
            };
            var E = l(19151),
                K = l.n(E);
            let M = e => {
                let {
                    createdAt: o,
                    rating: l,
                    timeToRead: t
                } = e;
                return (0, _.jsxs)("div", {
                    className: K().root,
                    children: [(0, _.jsx)("div", {
                        className: K().item,
                        children: (0, _.jsx)(B, {
                            rating: l
                        })
                    }), (0, _.jsx)("div", {
                        className: K().item,
                        children: (0, _.jsx)("p", {
                            className: K().date,
                            children: I()(o).format("MMMM DD, YYYY")
                        })
                    }), (0, _.jsx)("div", {
                        className: K().item,
                        children: (0, _.jsx)("p", {
                            className: K().read,
                            children: t
                        })
                    })]
                })
            }
        }
    }
]);