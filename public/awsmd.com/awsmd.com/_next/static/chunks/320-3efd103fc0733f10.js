(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [320],
  {
    208: (e) => {
      e.exports = {
        slider_controls: "blog-controls_slider_controls__OCywF",
        slider_controlsDark: "blog-controls_slider_controlsDark___UCrW",
        slider_btnPrev: "blog-controls_slider_btnPrev__TPeJf",
        slider_btnNext: "blog-controls_slider_btnNext__n0AMi",
        slider_pagination: "blog-controls_slider_pagination__2dBTC",
      };
    },
    1730: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => r,
      });
      var i = s(37876);
      s(14232);
      let r = (e) => {
        let { url: t, className: s, style: r } = e;
        return (0, i.jsx)("svg", {
          className: s,
          style: r,
          children: (0, i.jsx)("use", {
            href: t,
          }),
        });
      };
    },
    2419: (e) => {
      e.exports = {
        card: "blog-card_card__tWAUk",
        card_image: "blog-card_card_image__GzaG0",
        card_created: "blog-card_card_created__iILkU",
        card_title: "blog-card_card_title__ube9z",
        card_content: "blog-card_card_content__BaBvZ",
      };
    },
    2618: (e) => {
      e.exports = {
        video: "portfolio-video_video___rhtB",
      };
    },
    2754: (e, t, s) => {
      "use strict";
      s.d(t, {
        m: () => a,
      });
      var i = s(14232);
      s(91408).Ik({});
      let r = function (e, t) {
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = !1;
        if (!t.validationSchema) return;
        let r = {},
          a = s || !!t.validateEmptyField;
        try {
          t.validationSchema.validateSync(e, {
            abortEarly: !1,
          });
        } catch (e) {
          for (let { path: t, message: s, value: n } of e.inner)
            (a || "" !== n) && ((r[t] = s), (i = !0));
        }
        return {
          errors: r,
          hasErrors: i,
        };
      };

      function a(e) {
        let {
            data: t,
            setErrors: s,
            setFields: a,
            setFieldError: n,
            setFieldValue: l,
            setSubmitted: o,
            setSubmitting: c,
            resetFields: _,
          } = (function (e) {
            let [t, s] = (0, i.useState)({
                errors: {},
                values: e.initialValues,
                isSubmitting: !1,
                submitted: !1,
              }),
              r = (e, t) => {
                s((s) => ({ ...s, [e]: t }));
              },
              a = function (e) {
                let s =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                r("values", { ...(s ? {} : t.values), ...e });
              },
              n = (0, i.useCallback)(() => {
                a(JSON.parse(JSON.stringify(e.initialValues)));
              }, [e.initialValues]);
            return {
              setErrors: function (e) {
                let s =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                r("errors", { ...(s ? {} : t.errors), ...e });
              },
              setFields: a,
              changeData: r,
              data: t,
              resetFields: n,
              setSubmitting: (e) => {
                r("isSubmitting", e);
              },
              setSubmitted: (e) => {
                r("submitted", e);
              },
              setFieldError: function (e, s) {
                r("errors", { ...t.errors, [e]: s });
              },
              setFieldValue: function (e, s) {
                r("values", { ...t.values, [e]: s });
              },
            };
          })(e),
          d = (0, i.useCallback)(() => {
            let e = {};
            for (let [s, i] of Object.entries(t.values)) e[s] = i;
            return e;
          }, [t.values]),
          u = (0, i.useCallback)(
            function () {
              let i =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                { errors: a, hasErrors: n } = r(t.values, e, i);
              return (s(a, i), n);
            },
            [t.values, t.errors, e.validationSchema, e.validateEmptyField],
          ),
          m = async (i) => {
            if ((null == i || i.preventDefault(), e.validateOnSubmit)) {
              let { errors: a } = r(t.values, e, !0);
              s(a, !0);
              let n = Object.keys(a);
              if (n.length) {
                if (i) {
                  let e = i.target.elements[n[0]];
                  e &&
                    setTimeout(() => {
                      let t =
                        window.pageYOffset +
                        e.getBoundingClientRect().top -
                        window.innerHeight / 2;
                      window.scrollTo({
                        top: t,
                        behavior: "smooth",
                      });
                    }, 300);
                }
                return;
              }
            }
            c(!0);
            let a = e.onSubmit(
              t.values,
              {
                clearValues: d,
              },
              i,
            );
            a &&
            "function" == typeof (null == a ? void 0 : a.then) &&
            "function" == typeof (null == a ? void 0 : a.finally)
              ? a.then(() => o(!0)).finally(() => c(!1))
              : (o(!0), c(!1));
          };
        return {
          setFields: a,
          setErrors: s,
          setFieldValue: (t, s) => {
            (l(t, s), e.validateOnChange && u(), n(t, void 0));
          },
          setFieldError: n,
          handleChange: (s) => {
            let { name: i, value: r } = s.target;
            if (i in t.values) {
              if (
                (l(i, r),
                e.validateOnChange && u(),
                !e.clearErrorOnChange || !t.errors[i])
              )
                return;
              n(i, void 0);
            }
          },
          handleSubmit: m,
          handleBlur: (t) => {
            e.validateOnBlur && u();
          },
          reset: _,
          ...t,
        };
      }
    },
    2942: (e) => {
      e.exports = {
        reviews_wrapper: "reviews-slider_reviews_wrapper__88QxJ",
        reviews_item: "reviews-slider_reviews_item__PvoX5",
        enter: "reviews-slider_enter__PVRKg",
        enterActive: "reviews-slider_enterActive__Kn8DQ",
        exit: "reviews-slider_exit__jkz7c",
        exitActive: "reviews-slider_exitActive__ngtDa",
      };
    },
    3574: (e) => {
      e.exports = {
        portfolio: "portfolio_portfolio__rTluk",
        portfolio_head: "portfolio_portfolio_head__JnOMp",
        portfolio_list: "portfolio_portfolio_list__062x6",
        portfolio_head_right: "portfolio_portfolio_head_right__Ine_O",
        portfolio_head_fillText: "portfolio_portfolio_head_fillText__LsO7B",
        portfolio_head_title: "portfolio_portfolio_head_title__WnjzS",
        portfolio_head_controls: "portfolio_portfolio_head_controls__7PkBc",
        portfolio_mobile_checkBtn: "portfolio_portfolio_mobile_checkBtn__nLRLe",
        portfolio_head_checkBtn: "portfolio_portfolio_head_checkBtn__PbGtA",
        portfolio_head_scheduleBtn:
          "portfolio_portfolio_head_scheduleBtn__J941_",
      };
    },
    6043: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/logo.952bb248.svg",
        height: 30,
        width: 35,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    6943: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/intel.0d9f9c40.svg",
        height: 25,
        width: 61,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    8340: (e, t, s) => {
      "use strict";
      s.d(t, {
        AR: () => a,
        cQ: () => r,
        ql: () => i,
        z4: () => n,
      });
      let i = (e) => (Math.PI / 180) * e,
        r = () => {
          let e = window.pageYOffset,
            t = window.pageXOffset || document.documentElement.scrollLeft,
            s = document.documentElement.getBoundingClientRect(),
            i = document.documentElement.scrollHeight,
            r = e / (i - window.innerHeight);
          return {
            scrollTop: e,
            scrollLeft: t,
            scrollBarWidth: window.innerWidth - s.width,
            windowWidth: s.width,
            windowHeight: window.innerHeight,
            scrollProgress: r,
            documentHeight: i,
          };
        },
        a = (e) => {
          let t = document.querySelector(e);
          if (!t) return;
          let { fromPage: s } = n(t);
          window.scrollTo({
            top: s.top,
            behavior: "auto",
          });
        },
        n = (e) => {
          let { scrollTop: t, scrollLeft: s } = r(),
            i = e.getBoundingClientRect();
          return {
            fromPage: {
              top: i.top + t,
              bottom: i.top + t + i.height,
              left: i.left + s,
              right: i.left + i.width + s,
            },
            fromWindow: {
              top: i.top,
              bottom: i.top + i.height,
              left: i.left,
              right: i.left + i.height,
            },
            height: i.height,
            width: i.width,
          };
        };
    },
    8356: (e) => {
      e.exports = {
        line: "dev-line_line__aWpS_",
        line_svg: "dev-line_line_svg__lTEBS",
      };
    },
    8657: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/voldis.21ec3317.png",
        height: 34,
        width: 100,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEUbAAIcAAMbAAIcAAIbAAMaAAAbAAMcAAAAAACoES83AAAACXRSTlNbnzKxTiFzEgKkqX95AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNgYmFlYmJg52BgZGQGQSYGBhYGBjYGNlYAA7IAQ7p6IsQAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    8975: (e) => {
      e.exports = {
        menu: "menu_menu__XFZRs",
        menu_left: "menu_menu_left__kHQLR",
        menu_expand: "menu_menu_expand__dWm8x",
        menu_logoBtn: "menu_menu_logoBtn__HdKEJ",
        menu_mobile_logo: "menu_menu_mobile_logo__KL6VL",
        menu_logo: "menu_menu_logo__3JLzN",
        menu_clutch: "menu_menu_clutch__cTCxR",
        menu_text: "menu_menu_text__RIQzS",
        menu_header: "menu_menu_header__11xYS",
        menu_header_title: "menu_menu_header_title__lvi_H",
        menu_header_clientBtn: "menu_menu_header_clientBtn__SGNSE",
        menu_designrush: "menu_menu_designrush__gguQj",
        menu_content: "menu_menu_content__p9RjY",
        menu_content_left: "menu_menu_content_left__namsq",
        menu_content_link: "menu_menu_content_link__d2DOf",
        menu_content_right: "menu_menu_content_right__psiaT",
        menu_socials: "menu_menu_socials__llpxq",
        menu_socials_email: "menu_menu_socials_email__3Wz6n",
        menu_socials_link: "menu_menu_socials_link__DWAUg",
        menu_row: "menu_menu_row__5jyoj",
        menu_copy: "menu_menu_copy__icvFm",
        menu_copy_copyright: "menu_menu_copy_copyright__QMa8y",
        menu_socialsExtra: "menu_menu_socialsExtra__6zN0p",
        menu_socialsExtra_link: "menu_menu_socialsExtra_link__Sc2EP",
        menu_header_closeBtn: "menu_menu_header_closeBtn__T5HEB",
        enter: "menu_enter__9sDGv",
        enterActive: "menu_enterActive__0o7Bd",
        exit: "menu_exit__icWp4",
        exitActive: "menu_exitActive__BnoYg",
      };
    },
    12640: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/logo-light.2bdafc69.svg",
        height: 21,
        width: 25,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    13459: (e) => {
      e.exports = {
        contents: "blog-table-contents_contents__iCWMF",
        contents_title: "blog-table-contents_contents_title__uWGq3",
        contents_btn: "blog-table-contents_contents_btn__aaCrO",
      };
    },
    13508: (e) => {
      e.exports = {
        typing: "typing_typing__3R3VF",
        opacityAnimation: "typing_opacityAnimation__fh7e7",
      };
    },
    14504: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/statefarm.91373514.svg",
        height: 17,
        width: 116,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    16723: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => f,
      });
      var i = s(37876),
        r = s(14232),
        a = s(49741),
        n = s(49995),
        l = s(12640),
        o = s(6043),
        c = s(80562),
        _ = s(84594),
        d = s(93250),
        u = s.n(d);
      let m = (e) => {
        let { classNameLogo: t, dark: s } = e,
          [a, d] = (0, r.useState)(!1),
          m = (0, c.L)(() => d(!1)),
          h = r.useRef(null);
        return (0, i.jsxs)("div", {
          className: u().root,
          ref: m,
          children: [
            (0, i.jsxs)("button", {
              className: (0, n.A)(u().logo, s && u().logo_dark, t),
              onClick: () => d(!a),
              children: [
                (0, i.jsx)("img", {
                  className: u().logo_icon,
                  src: s ? o.A.src : l.A.src,
                  alt: "logo",
                }),
                (0, i.jsx)("span", {
                  className: u().logo_text,
                  children: "Awsmd",
                }),
              ],
            }),
            (0, i.jsx)(_.A, {
              classNames: u(),
              in: a,
              timeout: 400,
              nodeRef: h,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: (0, i.jsxs)("div", {
                className: u().menu,
                ref: h,
                children: [
                  (0, i.jsx)("a", {
                    className: u().menu_item,
                    href: "/",
                    children: (0, i.jsx)("span", {
                      children: "Home",
                    }),
                  }),
                  (0, i.jsx)("a", {
                    className: u().menu_item,
                    href: "/blog",
                    children: (0, i.jsx)("span", {
                      children: "Blog",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var h = s(8340),
        p = s(93952),
        g = s(26999),
        v = s.n(g);
      let x = [
          {
            name: "About Us",
            href: p.vi.About,
          },
          {
            name: "Cases",
            href: p.vi.Portfolio,
          },
          {
            name: "Reviews",
            href: p.vi.Reviews,
          },
          {
            name: "Contact Us",
            href: "contact-us",
          },
        ],
        f = (e) => {
          let { isDark: t = !1, isDarkNav: s = !1, navigation: r } = e,
            { toggleForm: l } = (0, a.w0)(),
            o = (e) => {
              "contact-us" === e ? l() : (0, h.AR)("#".concat(e));
            };
          return (0, i.jsxs)("header", {
            className: v().header,
            children: [
              (0, i.jsx)("div", {
                className: v().header_logo,
                children: (0, i.jsx)(m, {
                  dark: t,
                }),
              }),
              (0, i.jsx)("div", {
                className: (0, n.A)(v().header_nav, s && v().header_navDark),
                children: (r || x).map((e) =>
                  (0, i.jsx)("button", {
                    className: v().header_nav_item,
                    onClick: o.bind(null, e.href),
                    children: (0, i.jsxs)("span", {
                      children: [
                        (0, i.jsx)("span", {
                          children: e.name,
                        }),
                        (0, i.jsx)("span", {
                          children: e.name,
                        }),
                      ],
                    }),
                  }),
                ),
              }),
              (0, i.jsx)("div", {
                className: v().header_flex,
              }),
            ],
          });
        };
    },
    16957: (e, t, s) => {
      "use strict";
      s.d(t, {
        z: () => p,
      });
      var i = s(37876),
        r = s(14232),
        a = s(73351),
        n = s(84594),
        l = s(19875);
      let o = (e) =>
          (0, i.jsx)("svg", {
            ...e,
            viewBox: "0 0 27 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M1 9.5H26M26 9.5L18 1.5M26 9.5L18 17.5",
              "data-stroke": !0,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
        c = (e) =>
          (0, i.jsxs)("svg", {
            ...e,
            viewBox: "0 0 64 56",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M29.2149 20.1929C29.2149 24.4096 28.4559 28.4576 26.9379 32.3369C25.4199 36.3849 23.6489 39.6739 21.6249 42.2039C19.7696 44.7339 17.6612 47.0952 15.2999 49.2879C12.9386 51.4806 11.1676 52.9986 9.98691 53.8419C8.80624 54.6852 7.96291 55.1912 7.45691 55.3599L1.38491 49.0349L4.67391 45.4929C6.02324 43.8062 7.70991 41.1076 9.73391 37.3969C12.0952 33.5176 13.1072 30.2286 12.7699 27.5299C9.39657 27.0239 6.52924 25.5059 4.16791 22.9759C1.97524 20.2772 0.878906 17.1569 0.878906 13.6149C0.878906 10.0729 2.14391 7.03691 4.67391 4.50691C7.37257 1.97691 10.6616 0.711914 14.5409 0.711914C18.7576 0.711914 22.2152 2.4829 24.9139 6.0249C27.7812 9.5669 29.2149 14.2896 29.2149 20.1929Z",
                "data-fill": !0,
              }),
              (0, i.jsx)("path", {
                d: "M63.9431 20.1929C63.9431 24.4096 63.1841 28.4576 61.6661 32.3369C60.1481 36.3849 58.3771 39.6739 56.3531 42.2039C54.4978 44.7339 52.3894 47.0952 50.0281 49.2879C47.6668 51.4806 45.8958 52.9986 44.7151 53.8419C43.5344 54.6852 42.6911 55.1912 42.1851 55.3599L36.1131 49.0349L39.4021 45.4929C40.7514 43.8062 42.4381 41.1076 44.4621 37.3969C46.8234 33.5176 47.8354 30.2286 47.4981 27.5299C44.1248 27.0239 41.2574 25.5059 38.8961 22.9759C36.7034 20.2772 35.6071 17.1569 35.6071 13.6149C35.6071 10.0729 36.8721 7.03691 39.4021 4.50691C42.1008 1.97691 45.3898 0.711914 49.2691 0.711914C53.4858 0.711914 56.9434 2.4829 59.6421 6.0249C62.5094 9.5669 63.9431 14.2896 63.9431 20.1929Z",
                "data-fill": !0,
              }),
            ],
          });
      var _ = s(64802),
        d = s.n(_);
      let u = r.forwardRef((e, t) => {
        let { review: s, isBeginning: r, isEnd: a, onNext: n, onPrev: _ } = e;
        return (0, i.jsxs)("div", {
          className: d().reviews_block,
          ref: t,
          children: [
            (0, i.jsx)(c, {
              className: d().reviews_blockquote,
              "data-class": "svg",
            }),
            (0, i.jsxs)("div", {
              className: d().reviews_content,
              children: [
                (0, i.jsx)("p", {
                  className: d().reviews_review,
                  "data-class": "title",
                  "data-animation-hide": !0,
                  children: s.review,
                }),
                (0, i.jsxs)("div", {
                  className: d().reviews_row,
                  children: [
                    (0, i.jsxs)("div", {
                      className: d().reviews_client,
                      "data-animation-hide": !0,
                      children: [
                        (0, i.jsx)("img", {
                          src: (0, l.X)(s.author_avatar.url),
                          alt: "client image",
                          className: d().reviews_client_img,
                        }),
                        (0, i.jsxs)("div", {
                          className: d().reviews_client_column,
                          children: [
                            (0, i.jsx)("h3", {
                              className: d().reviews_client_name,
                              children: s.author_name,
                            }),
                            (0, i.jsx)("p", {
                              className: d().reviews_client_proff,
                              children: s.author_position,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      className: d().reviews_company,
                      "data-animation-hide": !0,
                      children: s.author_company,
                    }),
                    (0, i.jsxs)("div", {
                      className: d().reviews_controls,
                      children: [
                        (0, i.jsx)("button", {
                          className: d().reviews_controls_prevBtn,
                          onClick: _,
                          disabled: r,
                          children: (0, i.jsx)(o, {}),
                        }),
                        (0, i.jsx)("button", {
                          className: d().reviews_controls_nextBtn,
                          onClick: n,
                          disabled: a,
                          children: (0, i.jsx)(o, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      var m = s(2942),
        h = s.n(m);
      let p = (e) => {
        let { reviews: t } = e,
          [s, l] = (0, r.useState)(t),
          [o, c] = (0, r.useState)(0),
          _ = r.useRef(null),
          d = (0, r.useMemo)(() => s[o], [s, o]),
          m = (0, r.useMemo)(() => s.filter((e, t) => t !== o), [o, s]);
        return d
          ? (0, i.jsx)("div", {
              className: h().reviews,
              children: (0, i.jsxs)("ul", {
                className: h().reviews_wrapper,
                children: [
                  (0, i.jsx)("li", {
                    className: h().reviews_item,
                    children: (0, i.jsx)(a.A, {
                      children: (0, i.jsx)(
                        n.A,
                        {
                          timeout: 500,
                          classNames: h(),
                          mountOnEnter: !0,
                          unmountOnExit: !0,
                          nodeRef: _,
                          in: !0,
                          children: (0, i.jsx)(u, {
                            ref: _,
                            isBeginning: 0 === o,
                            isEnd: o === s.length - 1,
                            review: d,
                            onPrev: () => {
                              o > 0 && c(o - 1);
                            },
                            onNext: () => {
                              o < s.length - 1 && c(o + 1);
                            },
                          }),
                        },
                        d.id,
                      ),
                    }),
                  }),
                  m.map((e) =>
                    (0, i.jsx)(
                      "li",
                      {
                        className: h().reviews_item,
                        children: (0, i.jsx)(u, {
                          isBeginning: !0,
                          isEnd: !0,
                          review: e,
                        }),
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
            })
          : null;
      };
    },
    17220: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => o,
      });
      var i = s(37876),
        r = s(14232),
        a = s(49995),
        n = s(54796),
        l = s.n(n);
      let o = (e) => {
        let { className: t, text: s } = e,
          n = (0, r.useRef)(null);
        return (0, i.jsx)("div", {
          className: (0, a.A)(l().text, t),
          ref: n,
          children: (0, i.jsx)("p", {
            children: s,
          }),
        });
      };
    },
    17788: (e) => {
      e.exports = {
        modal: "none_modal__SWeNZ",
        modal_window: "none_modal_window__KQBlG",
      };
    },
    18110: (e) => {
      e.exports = {
        portfolio_list_item: "portfolio-works_portfolio_list_item__hu8_r",
        portfolio_list_col: "portfolio-works_portfolio_list_col__8wzEm",
        portfolio_list: "portfolio-works_portfolio_list__JIK9V",
      };
    },
    18455: (e, t, s) => {
      "use strict";
      s.d(t, {
        cG: () => i,
        U5: () => p,
        t: () => h,
      });
      let i = () => [
        {
          webm: "/media/about/volchek-color.mp4",
          title: "+300",
          text: "We have successfully completed a total of 300+ projects",
        },
        {
          webm: "/media/about/pruzina-color.mp4",
          title: "100K",
          text: "We’ve gathered dozens of reviews from the clients and + 100k reviews from their users",
        },
        {
          webm: "/media/about/time-color.mp4",
          title: "+10",
          text: "Years of experience",
        },
        {
          webm: "/media/about/ball-color.mp4",
          title: "+280",
          text: "Team members all over the world",
        },
      ];
      var r = s(6943),
        a = s(26299),
        n = s(53085),
        l = s(27478),
        o = s(87612),
        c = s(87657),
        _ = s(26894),
        d = s(14504),
        u = s(85274),
        m = s(8657);
      let h = () => [
          a.A.src,
          n.A.src,
          l.A.src,
          o.A.src,
          c.A.src,
          r.A.src,
          _.A.src,
          d.A.src,
          u.A.src,
          m.A.src,
        ],
        p = () => [
          {
            size: "100%",
            disabled: !0,
            words: [],
            text: {
              bold: "Solid Strategy",
              paragraph:
                "Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights",
            },
          },
          {
            size: "85.4%",
            words: [
              {
                label: "A/B Testing",
                degree: 150,
              },
              {
                label: "Growth",
                degree: 225,
                main: !0,
              },
              {
                label: "Experiments",
                degree: 265,
              },
              {
                label: "Optimization",
                degree: 300,
              },
            ],
            text: {
              bold: "Using agile data analysis",
              paragraph:
                "Using agile data analysis supported by data science, our process has proven to deliver constant business growth",
            },
          },
          {
            size: "68.14%",
            words: [
              {
                label: "Development",
                degree: 140,
              },
              {
                label: "Visual Design",
                degree: 175,
              },
              {
                label: "Insights",
                degree: 225,
                main: !0,
              },
              {
                label: "User Experience",
                degree: 265,
              },
              {
                label: "Innovations",
                degree: 290,
              },
            ],
            text: {
              bold: "Ideas have to be manifested,",
              paragraph:
                "Ideas have to be manifested, tested and proven to work. Continued experiments are one of our key drivers",
            },
          },
          {
            size: "42%",
            words: [
              {
                label: "Product",
                degree: 45,
                main: !0,
              },
              {
                label: "Data Science",
                degree: 130,
              },
              {
                label: "UX Research",
                degree: 205,
              },
              {
                label: "UX Strategy",
                degree: 270,
              },
            ],
            text: {
              bold: "Solid Strategy",
              paragraph:
                "Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights",
            },
          },
        ];
    },
    18944: (e) => {
      e.exports = {
        slider: "blog-slider_slider__sX3Wf",
        slider_swiper: "blog-slider_slider_swiper__6it41",
        slider_item: "blog-slider_slider_item__XUTU4",
        slider_image: "blog-slider_slider_image__HrtTM",
        slider_content: "blog-slider_slider_content__Z8mgt",
        slider_title: "blog-slider_slider_title__X_cmv",
        slider_text: "blog-slider_slider_text__79Crt",
        slider_row: "blog-slider_slider_row__p_EAS",
        slider_viewBtn: "blog-slider_slider_viewBtn__pKaKg",
      };
    },
    19183: (e) => {
      e.exports = {
        modal: "side_modal__Lb8V1",
        modal_window: "side_modal_window__nqgt8",
        enter: "side_enter__Lm9lX",
        enterActive: "side_enterActive__clt6Q",
        exit: "side_exit__hVyIC",
        exitActive: "side_exitActive__bFW8n",
      };
    },
    19875: (e, t, s) => {
      "use strict";
      s.d(t, {
        X: () => i,
        d: () => r,
      });
      let i = (e) => "https://api.awsmd.com" + e,
        r = (e) => {
          let t = "image";
          return e
            ? (/^(video)\/.+/i.test(e.mime) && (t = "video"),
              /^(image)\/.+/i.test(e.mime) && (t = "image"),
              {
                url: "https://api.awsmd.com" + e.url,
                type: t,
              })
            : {
                url: "",
                type: t,
              };
        };
    },
    21871: (e) => {
      e.exports = {
        service: "services-item_service__PQmRI",
        service_img: "services-item_service_img__w1TdE",
        scaler: "services-item_scaler__3To9A",
        service_shadow: "services-item_service_shadow__fEEy4",
        service_container: "services-item_service_container__Dx0k0",
        service_title: "services-item_service_title__a8ZZn",
        service_text: "services-item_service_text__LncZ8",
        service_tags: "services-item_service_tags__p_OYM",
        service_tags_item: "services-item_service_tags_item__bh3Dt",
      };
    },
    23542: (e) => {
      e.exports = {
        focused: "focused_focused__dq2V9",
        focused_text: "focused_focused_text__xjujt",
        focused_list: "focused_focused_list__Jq0fG",
        focused_item: "focused_focused_item__ZDDqs",
        moving: "focused_moving__qVlC4",
      };
    },
    24654: (e) => {
      e.exports = {
        video: "dev-video_video__oxf1k",
      };
    },
    25240: (e) => {
      e.exports = {
        marquee: "marquee_marquee__ZFB97",
        marquee_up: "marquee_marquee_up__wBE2e",
        marquee_wrapper: "marquee_marquee_wrapper__OPxaX",
        marquee_down: "marquee_marquee_down__up6Td",
        marquee_item: "marquee_marquee_item__kBXsQ",
        marquee_repeater: "marquee_marquee_repeater__Yd3f3",
        toUp: "marquee_toUp__6Ea8E",
        toDown: "marquee_toDown__e4esN",
        toLeft: "marquee_toLeft__5KWlF",
        toRight: "marquee_toRight__MlZ3a",
      };
    },
    26170: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => o,
      });
      var i = s(37876),
        r = s(49995);
      s(14232);
      var a = s(57794),
        n = s(49182),
        l = s.n(n);
      let o = (e) => {
        let {
          className: t,
          text: s,
          icon: n = "arrow",
          theme: o = "light",
          type: c = "button",
          disabled: _,
          onClick: d,
        } = e;
        return (0, i.jsxs)("button", {
          className: (0, r.A)(
            l().button,
            l()["button_".concat(o)],
            l()["button_".concat(n)],
            t,
          ),
          type: c,
          onClick: d,
          disabled: _,
          children: [
            (0, i.jsxs)("span", {
              className: l().button_text,
              "data-class": "text",
              children: [
                (0, i.jsx)("span", {
                  children: s,
                }),
                (0, i.jsx)("span", {
                  children: s,
                }),
              ],
            }),
            (0, i.jsxs)("span", {
              className: l().button_icon,
              "data-class": "icon",
              children: [
                (0, i.jsx)("span", {
                  className: l().button_circle,
                  "data-circle": !0,
                }),
                (0, i.jsx)(a.H, {
                  className: l().button_icon_arrow,
                  "data-class": "arrow-2",
                }),
                (0, i.jsx)("span", {
                  className: l().button_svgs,
                  "data-class": "arrow",
                  children: (0, i.jsx)(a.H, {}),
                }),
                "dot" === n &&
                  (0, i.jsx)("span", {
                    className: l().button_icon_dot,
                    "data-class": "dot",
                  }),
              ],
            }),
          ],
        });
      };
    },
    26299: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/uber.391ab754.svg",
        height: 22,
        width: 61,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    26463: (e) => {
      e.exports = {
        socials: "blog-socials_socials__hYMbC",
        socials_box: "blog-socials_socials_box__AN20B",
        socials_item: "blog-socials_socials_item__cfaTs",
      };
    },
    26894: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/new-balance.9bcd089f.svg",
        height: 41,
        width: 73,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    26999: (e) => {
      e.exports = {
        header: "header_header__bp5X_",
        header_container: "header_header_container__aDAOQ",
        header_logo: "header_header_logo__ghx19",
        header_flex: "header_header_flex__uQxOS",
        header_nav: "header_header_nav__SZeKH",
        header_navDark: "header_header_navDark__ahLjc",
        header_nav_item: "header_header_nav_item__DiFi1",
        becomeClient: "header_becomeClient__7ydjR",
      };
    },
    27478: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/gofundme.d15a4c9e.svg",
        height: 35,
        width: 115,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    27756: (e, t, s) => {
      "use strict";
      s.d(t, {
        p: () => c,
      });
      var i = s(37876),
        r = s(14232);
      let a = [
        "autoHeight",
        "className",
        "classNameInput",
        "classNameField",
        "title",
        "error",
        "component",
        "controls",
        "head",
      ];
      var n = s(49995),
        l = s(94700),
        o = s.n(l);
      let c = function (e) {
        let {
            component: t = "input",
            controls: s,
            head: l,
            title: c,
            error: _,
          } = e,
          d = (function (e) {
            let t = {};
            for (let s in e) {
              let i = e[s];
              a.includes(s) || (t[s] = i);
            }
            return t;
          })(e),
          u = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (!u.current || "textarea" !== e.component || !e.autoHeight)
              return;
            let t = u.current;
            ((t.style.height = ""), (t.style.height = t.scrollHeight + "px"));
          }),
          (0, i.jsxs)("div", {
            "data-error": !!_,
            className: (function (e, t) {
              let { className: s, error: i } = e,
                r = [];
              return (
                t && r.push((0, n.A)(t)),
                s && r.push((0, n.A)(s)),
                i && r.push(o().input__error),
                r.join(" ")
              );
            })(e, o().input),
            children: [
              (l || c) &&
                (0, i.jsxs)("header", {
                  className: o().input_head,
                  "data-class": "head",
                  children: [
                    (0, i.jsx)("h3", {
                      className: o().input_title,
                      "data-class": "title",
                      children: c,
                    }),
                    l,
                  ],
                }),
              (0, i.jsxs)("div", {
                className: (function (e, t) {
                  let {
                      value: s,
                      disabled: i,
                      classNameField: r,
                      component: a = "input",
                    } = e,
                    l = [o()["input_field__".concat(a)]];
                  return (
                    t && l.push((0, n.A)(t)),
                    r && l.push((0, n.A)(r)),
                    "" !== s && l.push(o().input_field__filled),
                    i && l.push(o().input_field__disabled),
                    l.join(" ")
                  );
                })(e, o().input_field),
                "data-class": "field",
                onClick: () => {
                  u.current && u.current.focus();
                },
                children: [
                  (0, i.jsx)(t || "input", {
                    ...d,
                    ref: u,
                    className: (function (e, t) {
                      let { classNameInput: s } = e,
                        i = [];
                      return (
                        t && i.push((0, n.A)(t)),
                        s && i.push((0, n.A)(s)),
                        i.join(" ")
                      );
                    })(e, o().input_input),
                    "data-class": "input",
                  }),
                  s,
                ],
              }),
              _ &&
                (0, i.jsx)("p", {
                  className: o().input_error,
                  "data-class": "error",
                  children: _,
                }),
            ],
          })
        );
      };
    },
    29647: (e) => {
      e.exports = {
        category_wrapper: "blog-category_category_wrapper__ST_uv",
        category_list: "blog-category_category_list__cZLq1",
        category_item: "blog-category_category_item__aLycd",
        category_itemActive: "blog-category_category_itemActive__xhhy1",
      };
    },
    31399: (e) => {
      e.exports = {
        modal: "default_modal__9MfcS",
        modal_window: "default_modal_window__F8Ku5",
        enter: "default_enter__WGPXg",
        enterActive: "default_enterActive__tECFV",
        exit: "default_exit___EBe3",
        exitActive: "default_exitActive__jhuUF",
      };
    },
    31947: (e, t, s) => {
      "use strict";
      s.d(t, {
        M: () => g,
        y: () => o,
      });
      var i = s(37876);
      s(14232);
      var r = s(49741),
        a = s(91040),
        n = s(91408);
      let l = "Required field",
        o = n.Ik({
          email: n.Yj().required(l).email("Incorrect email"),
          nameOrCompany: n.Yj().required(l),
          about: n.Yj().required(l),
        });
      var c = s(89099),
        _ = s(3422),
        d = s(2754),
        u = s(26170),
        m = s(27756),
        h = s(78789),
        p = s.n(h);
      let g = (e) => {
        let { extraTags: t } = e,
          { toggleForm: s, setSubmitted: n } = (0, r.w0)(),
          { formActive: l } = (0, r.A1)(),
          h = (0, c.useRouter)(),
          {
            values: g,
            errors: v,
            handleChange: x,
            setFieldValue: f,
            handleSubmit: b,
            isSubmitting: w,
          } = (0, d.m)({
            initialValues: {
              nameOrCompany: "",
              email: "",
              interestedIn: (("boolean" == typeof l ? {} : l).tags || []).map(
                (e) => ({
                  value: e,
                  label: e,
                }),
              ),
              about: "",
              extraTags: t || [],
            },
            validationSchema: o,
            validateOnSubmit: !0,
            async onSubmit(e, t, i) {
              let r,
                { clearValues: l } = t;
              null == i || i.preventDefault();
              let o = l(),
                { referral: c } = (0, _.parseCookies)(),
                d =
                  ((r = {
                    ...o,
                    referral: c,
                    interestedIn: o.interestedIn.map((e) => e.label),
                  }),
                  encodeURIComponent(
                    "Запрос с сайта [Awsmd]:\n\n" +
                      "<b>Имя & Компания:</b> ".concat(
                        r.nameOrCompany || "Не указано",
                        "\n",
                      ) +
                      "<b>Email:</b> ".concat(r.email || "Не указано", "\n") +
                      "<b>Заинтересован в:</b> ".concat(
                        (r.interestedIn || []).join(", ") || "Не указано",
                        "\n",
                      ) +
                      "<b>О себе:</b> ".concat(r.about || "Не указано", "\n") +
                      (r.referral
                        ? "<b>Реферал:</b> ".concat(r.referral, "\n\n")
                        : "\n") +
                      "#awsmd".concat(
                        r.extraTags
                          ? " ".concat(
                              r.extraTags.map((e) => "#".concat(e)).join(", "),
                            )
                          : "",
                      ),
                  ));
              await a.A.post(
                "https://api.telegram.org/bot"
                  .concat(
                    "992156607:AAGUXoR5gG_OzNVc7e-XcP2ctBw-KohkfHM",
                    "/sendMessage?parse_mode=HTML&chat_id=",
                  )
                  .concat("-1001343507692", "&text=")
                  .concat(d),
              )
                .then(() => {
                  (s(!1), n(!0), h.push("/thanks"));
                })
                .catch(console.log);
            },
          });
        return (0, i.jsxs)("div", {
          className: p().client,
          children: [
            (0, i.jsx)("button", {
              className: p().client_cross,
              onClick: s.bind(null, !1),
            }),
            (0, i.jsx)("h2", {
              className: p().client_title,
              children: "Hey! Tell us all the things",
            }),
            (0, i.jsxs)("form", {
              className: p().client_form,
              onSubmit: b,
              children: [
                (0, i.jsxs)("div", {
                  className: p().client_row,
                  children: [
                    (0, i.jsx)("div", {
                      className: p().client_col,
                      children: (0, i.jsx)(m.p, {
                        value: g.nameOrCompany,
                        onChange: x,
                        title: "Name & Company",
                        name: "nameOrCompany",
                        placeholder: "John from Apple",
                        error: v.nameOrCompany,
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: p().client_col,
                      children: (0, i.jsx)(m.p, {
                        value: g.email,
                        onChange: x,
                        title: "Your Email",
                        name: "email",
                        placeholder: "john@apple.com",
                        error: v.email,
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(m.p, {
                  value: g.about,
                  onChange: x,
                  className: p().client_about,
                  classNameField: p().client_about_field,
                  autoHeight: !0,
                  component: "textarea",
                  name: "about",
                  title: "Tell us more about your project",
                  placeholder: "Something about your great idea",
                  error: v.about,
                }),
                (0, i.jsxs)("div", {
                  className: p().client_controls,
                  children: [
                    (0, i.jsxs)("p", {
                      className: p().client_controls_mail,
                      children: [
                        "Our Email",
                        " ",
                        (0, i.jsx)("a", {
                          href: "mailto:info@awsmd.com",
                          children: (0, i.jsx)("u", {
                            children: "info@awsmd.com",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(u.A, {
                      className: p().client_controls_submit,
                      disabled: w,
                      onClick: () => {},
                      text: "Submit the request",
                      type: "submit",
                      theme: "dark",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    32973: (e) => {
      e.exports = {
        button: "hero-scroll-button_button__tiTEa",
        pulse: "hero-scroll-button_pulse__NDois",
        button_arrow_1: "hero-scroll-button_button_arrow_1__tnEtl",
        button_arrow_2: "hero-scroll-button_button_arrow_2__wF5o0",
      };
    },
    33252: (e, t, s) => {
      "use strict";
      s.d(t, {
        H: () => o,
      });
      var i = s(37876),
        r = s(49995);
      s(14232);
      let a = (e) =>
        (0, i.jsx)("svg", {
          ...e,
          viewBox: "0 0 8 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            d: "M7 1L2 6L7 11",
            "data-stroke": !0,
            strokeWidth: "2",
            strokeLinecap: "round",
          }),
        });
      var n = s(208),
        l = s.n(n);
      let o = (e) => {
        let { id: t, dark: s, onNext: n, onPrev: o } = e;
        return (0, i.jsxs)("div", {
          className: (0, r.A)(
            l().slider_controls,
            s && l().slider_controlsDark,
          ),
          children: [
            (0, i.jsx)("button", {
              className: l().slider_btnPrev,
              onClick: o,
              children: (0, i.jsx)(a, {}),
            }),
            (0, i.jsx)("ul", {
              id: t,
              className: "".concat(l().slider_pagination, " blog-pagination"),
            }),
            (0, i.jsx)("button", {
              className: l().slider_btnNext,
              onClick: n,
              children: (0, i.jsx)(a, {}),
            }),
          ],
        });
      };
    },
    36091: (e) => {
      e.exports = {
        card: "blog-card-offer_card__5C1K2",
        card_linkBtn: "blog-card-offer_card_linkBtn__dhhCx",
        card_rounded: "blog-card-offer_card_rounded__xM_ZM",
        card_container: "blog-card-offer_card_container__h9Opx",
        card_image: "blog-card-offer_card_image__7GgUj",
        card_content: "blog-card-offer_card_content__ufkPd",
        card_created: "blog-card-offer_card_created__kHGM3",
        card_title: "blog-card-offer_card_title__2QXUv",
        card_description: "blog-card-offer_card_description__Bf9Jt",
      };
    },
    36267: (e) => {
      e.exports = {
        button: "menu-button_button__hHosa",
        button_invert: "menu-button_button_invert__z0_kg",
        button_block: "menu-button_button_block__I7CmA",
        buttonActive: "menu-button_buttonActive__EMO_Y",
      };
    },
    36814: (e, t, s) => {
      "use strict";
      s.d(t, {
        I: () => y,
        X: () => p,
      });
      var i = s(37876);
      s(21312);
      var r = s(14232),
        a = s(90378),
        n = s(69291),
        l = s.n(n);
      let o = (e) => {
        let { webm: t, title: s, text: r } = e;
        return (0, i.jsxs)("div", {
          className: l().card,
          children: [
            (0, i.jsx)("video", {
              className: l().card_webm,
              playsInline: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, i.jsx)("source", {
                src: t,
                type: "video/mp4",
              }),
            }),
            (0, i.jsxs)("div", {
              className: l().card_container,
              children: [
                (0, i.jsx)("h3", {
                  className: l().card_title,
                  children: s,
                }),
                (0, i.jsx)("p", {
                  className: l().card_text,
                  children: r,
                }),
              ],
            }),
          ],
        });
      };
      var c = s(76168),
        _ = s(18455),
        d = s(73019),
        u = s(58777),
        m = s.n(u);
      let h = (0, _.t)(),
        p = (e) => {
          let { isMobileDisabledMarquee: t } = e,
            [s, a] = (0, r.useState)(0),
            n = () => a(window.innerWidth);
          return (
            (0, r.useEffect)(() => {
              let e = setTimeout(n, 300);
              return () => clearTimeout(e);
            }, []),
            (0, r.useEffect)(
              () => (
                window.addEventListener("resize", n),
                () => window.removeEventListener("resize", n)
              ),
            ),
            (0, i.jsxs)("div", {
              className: m().logos,
              children: [
                (!t || (t && s > 768)) &&
                  (0, i.jsx)(d.A, {
                    direction: "left",
                    duration: 15e3,
                    children: (0, i.jsx)("ul", {
                      className: m().logos_list,
                      children: h.map((e, t) =>
                        (0, i.jsx)(
                          "li",
                          {
                            className: m().logo_list_item,
                            children: (0, i.jsx)("img", {
                              src: e,
                              alt: "logo",
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  }),
                t &&
                  s <= 768 &&
                  (0, i.jsx)("ul", {
                    className: ""
                      .concat(m().logos_list, " ")
                      .concat(m().logos_listDefault),
                    children: h.map((e, t) =>
                      (0, i.jsx)(
                        "li",
                        {
                          className: m().logo_list_item,
                          children: (0, i.jsx)("img", {
                            src: e,
                            alt: "logo",
                          }),
                        },
                        t,
                      ),
                    ),
                  }),
              ],
            })
          );
        };
      var g = s(49741),
        v = s(89099),
        x = s(26170),
        f = s(66407),
        b = s(23748),
        w = s(27888),
        j = s(92352),
        A = s.n(j);
      let N = (0, _.cG)(),
        k = (0, _.U5)(),
        y = () => {
          let { toggleForm: e } = (0, g.w0)(),
            [t, s] = (0, r.useState)(null);
          (0, v.useRouter)();
          let n = {
              slidesPerView: 1,
              effect: "fade",
              fadeEffect: {
                crossFade: !0,
              },
              allowTouchMove: !1,
              speed: 400,
              modules: [b._R],
            },
            l = (e) => {
              t && t.slideTo(e);
            };
          return (0, i.jsxs)("section", {
            className: A().about,
            id: a.v.About,
            children: [
              (0, i.jsxs)("div", {
                className: "container",
                children: [
                  (0, i.jsx)(f.A, {
                    index: "02",
                    title: "About Us",
                  }),
                  (0, i.jsxs)("div", {
                    className: A().about_head,
                    children: [
                      (0, i.jsx)("h2", {
                        className: A().about_head_title,
                        children: "We Strive to Innovate",
                      }),
                      (0, i.jsx)(x.A, {
                        className: A().about_head_btn,
                        onClick: () => e(),
                        text: "Become a Client",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: A().about_content,
                    children: [
                      (0, i.jsxs)("div", {
                        className: A().about_content_left,
                        children: [
                          (0, i.jsx)(w.RC, {
                            ...n,
                            onInit: s,
                            className: A().about_swiper,
                            children: k.map((e) =>
                              (0, i.jsx)(
                                w.qr,
                                {
                                  className: A().about_swiper_slide,
                                  children: (0, i.jsx)("p", {
                                    className: A().about_fillText,
                                    "data-text": e.text.bold,
                                    children: e.text.paragraph,
                                  }),
                                },
                                e.size,
                              ),
                            ),
                          }),
                          (0, i.jsx)("h3", {
                            className: A().about_list_title,
                            children: "Some Number About Us",
                          }),
                          (0, i.jsx)("ul", {
                            className: A().about_list,
                            children: N.map((e) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  className: A().about_list_item,
                                  children: (0, i.jsx)(o, { ...e }),
                                },
                                e.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: A().about_content_right,
                        children: (0, i.jsx)(c.M, {
                          circles: k,
                          onCircleHover: l,
                          onCircleLeave: () => {
                            l(0);
                          },
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(p, {}),
            ],
          });
        };
    },
    40235: (e, t, s) => {
      "use strict";
      s.d(t, {
        Zj: () => j,
        PI: () => v,
        N9: () => S,
        rb: () => C,
        wG: () => p,
        fY: () => g,
      });
      var i = s(37876),
        r = s(14232),
        a = s(56557),
        n = s.n(a),
        l = s(48230),
        o = s.n(l),
        c = s(85105),
        _ = s(36091),
        d = s.n(_),
        u = s(86143),
        m = s(19875);
      let h = function (e) {
          let t = "";
          for (let s of e)
            t += (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "-";
              return e[0]
                .replace(/\u0401/g, "YO")
                .replace(/\u0419/g, "I")
                .replace(/\u0426/g, "TS")
                .replace(/\u0423/g, "U")
                .replace(/\u041A/g, "K")
                .replace(/\u0415/g, "E")
                .replace(/\u041D/g, "N")
                .replace(/\u0413/g, "G")
                .replace(/\u0428/g, "SH")
                .replace(/\u0429/g, "SCH")
                .replace(/\u0417/g, "Z")
                .replace(/\u0425/g, "H")
                .replace(/\u042A/g, "")
                .replace(/\u0451/g, "yo")
                .replace(/\u0439/g, "i")
                .replace(/\u0446/g, "ts")
                .replace(/\u0443/g, "u")
                .replace(/\u043A/g, "k")
                .replace(/\u0435/g, "e")
                .replace(/\u043D/g, "n")
                .replace(/\u0433/g, "g")
                .replace(/\u0448/g, "sh")
                .replace(/\u0449/g, "sch")
                .replace(/\u0437/g, "z")
                .replace(/\u0445/g, "h")
                .replace(/\u044A/g, "'")
                .replace(/\u0424/g, "F")
                .replace(/\u042B/g, "I")
                .replace(/\u0412/g, "V")
                .replace(/\u0410/g, "a")
                .replace(/\u041F/g, "P")
                .replace(/\u0420/g, "R")
                .replace(/\u041E/g, "O")
                .replace(/\u041B/g, "L")
                .replace(/\u0414/g, "D")
                .replace(/\u0416/g, "ZH")
                .replace(/\u042D/g, "E")
                .replace(/\u0444/g, "f")
                .replace(/\u044B/g, "i")
                .replace(/\u0432/g, "v")
                .replace(/\u0430/g, "a")
                .replace(/\u043F/g, "p")
                .replace(/\u0440/g, "r")
                .replace(/\u043E/g, "o")
                .replace(/\u043B/g, "l")
                .replace(/\u0434/g, "d")
                .replace(/\u0436/g, "zh")
                .replace(/\u044D/g, "e")
                .replace(/\u042F/g, "Ya")
                .replace(/\u0427/g, "CH")
                .replace(/\u0421/g, "S")
                .replace(/\u041C/g, "M")
                .replace(/\u0418/g, "I")
                .replace(/\u0422/g, "T")
                .replace(/\u042C/g, "'")
                .replace(/\u0411/g, "B")
                .replace(/\u042E/g, "YU")
                .replace(/\u044F/g, "ya")
                .replace(/\u0447/g, "ch")
                .replace(/\u0441/g, "s")
                .replace(/\u043C/g, "m")
                .replace(/\u0438/g, "i")
                .replace(/\u0442/g, "t")
                .replace(/\u044C/g, "'")
                .replace(/\u0431/g, "b")
                .replace(/\u044E/g, "yu")
                .replace(/\W/, t);
            })(s);
          return t.replace(/[-]+/g, "-");
        },
        p = (e) => "/blog/".concat(e.id, "-").concat(h(e.title)),
        g = (e, t) => {
          let s = e
            .reduce((e, t) => e + t.description, "")
            .replace(/^\s*?(!\[.*\]\(.*\))|([#]+)|([*]+)/gi, "");
          return !t || s.length <= t ? s : s.slice(0, t) + "...";
        },
        v = (e) => {
          let { type: t, data: s } = e,
            r = "blogs" === t ? (0, m.d)(s.image).url : s.img,
            a = "blogs" === t ? g(s.content) : s.description;
          return (0, i.jsxs)("div", {
            className: d().card,
            children: [
              (0, i.jsx)("div", {
                className: d().card_rounded,
              }),
              (0, i.jsxs)("div", {
                className: d().card_container,
                children: [
                  "blogs" === t &&
                    (0, i.jsx)(o(), {
                      href: p(s),
                      className: d().card_linkBtn,
                      children: (0, i.jsx)(c.A, {}),
                    }),
                  "cases" === t &&
                    (0, i.jsx)("a", {
                      className: d().card_linkBtn,
                      href: s.url,
                      target: "_blank",
                      children: (0, i.jsx)(c.A, {}),
                    }),
                  (0, i.jsx)("div", {
                    className: d().card_image,
                    children: (0, i.jsx)(u.A, {
                      loader: () => r,
                      src: r,
                      alt: "image",
                      fill: !0,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: d().card_content,
                    children: [
                      "blogs" === t &&
                        (0, i.jsx)("h4", {
                          className: d().card_created,
                          children: n()(s.createdAt).format("MMMM DD, YYYY"),
                        }),
                      (0, i.jsx)("h3", {
                        className: d().card_title,
                        children: s.title,
                      }),
                      a &&
                        (0, i.jsx)("div", {
                          className: d().card_description,
                          children: (0, i.jsx)("p", {
                            children: a.slice(0, 100),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      (s(74788), s(29647), s(89099));
      var x = s(54587),
        f = s.n(x),
        b = s(2419),
        w = s.n(b);
      let j = (e) => {
        var t;
        let { data: s, shallow: r = !1, type: a } = e,
          l =
            "blogs" === a
              ? null == (t = (0, m.d)(s.image))
                ? void 0
                : t.url
              : s.img,
          c = "blogs" === a ? g(s.content) : s.description;
        return "blogs" === a
          ? (0, i.jsxs)(o(), {
              href: p(s),
              className: w().card,
              shallow: r,
              children: [
                (0, i.jsx)("div", {
                  className: w().card_image,
                  children: (0, i.jsx)(f(), {
                    loader: () => l,
                    src: l,
                    alt: "picture",
                    fill: !0,
                  }),
                }),
                (0, i.jsx)("h4", {
                  className: w().card_created,
                  children: n()(s.createdAt).format("MMMM DD,YYYY"),
                }),
                (0, i.jsx)("h3", {
                  className: w().card_title,
                  children: s.title,
                }),
                c &&
                  (0, i.jsx)("div", {
                    className: w().card_content,
                    children: (0, i.jsx)("p", {
                      children: c,
                    }),
                  }),
              ],
            })
          : (0, i.jsxs)("a", {
              className: w().card,
              href: s.url,
              target: "_blank",
              children: [
                (0, i.jsx)("div", {
                  className: w().card_image,
                  children: (0, i.jsx)(f(), {
                    src: l,
                    alt: "picture",
                    fill: !0,
                  }),
                }),
                (0, i.jsx)("h3", {
                  className: w().card_title,
                  children: s.title,
                }),
                c &&
                  (0, i.jsx)("div", {
                    className: w().card_content,
                    children: (0, i.jsx)("p", {
                      children: c,
                    }),
                  }),
              ],
            });
      };
      (s(7963), s(33404), s(80293));
      var A = s(86404),
        N = s(8340),
        k = s(13459),
        y = s.n(k);
      let C = (e) => {
        let { content: t } = e,
          s = (0, A.C)();
        return (
          (0, r.useEffect)(() => {
            s();
          }, []),
          (0, i.jsxs)("div", {
            className: y().contents,
            children: [
              (0, i.jsx)("h2", {
                className: y().contents_title,
                children: "Table of contents",
              }),
              t.length > 0 &&
                (0, i.jsx)(i.Fragment, {
                  children: t.map((e) =>
                    e.id
                      ? (0, i.jsx)(
                          "a",
                          {
                            href: "#" + e.id,
                            onClick: ((e) => (t) => {
                              (t.preventDefault(),
                                (0, N.AR)("#".concat(e)),
                                history.pushState(null, "", "#".concat(e)));
                            })(e.id),
                            className: y().contents_btn,
                            children: e.title,
                          },
                          e.id,
                        )
                      : null,
                  ),
                }),
              0 === t.length &&
                (0, i.jsx)(i.Fragment, {
                  children: "...",
                }),
            ],
          })
        );
      };
      var E = s(49995),
        L = s(1730),
        M = s(26463),
        B = s.n(M);
      let S = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("div", {
          className: (0, E.A)(B().socials, t),
          children: (0, i.jsxs)("div", {
            className: B().socials_box,
            "data-class": "socials-box",
            children: [
              (0, i.jsx)("a", {
                className: B().socials_item,
                href: "https://dribbble.com/awsmd",
                target: "_blank",
                children: (0, i.jsx)(L.A, {
                  url: "/img/sprite.svg#dribbble",
                }),
              }),
              (0, i.jsx)("a", {
                className: B().socials_item,
                href: "https://clutch.co/profile/awsmd",
                target: "_blank",
                children: (0, i.jsx)(L.A, {
                  url: "/img/sprite.svg#clutch",
                }),
              }),
              (0, i.jsx)("a", {
                className: B().socials_item,
                href: "https://www.behance.net/awsmd",
                target: "_blank",
                children: (0, i.jsx)(L.A, {
                  url: "/img/sprite.svg#behance",
                }),
              }),
            ],
          }),
        });
      };
    },
    40397: (e) => {
      e.exports = {
        root: "hero-clutch_root__N3q6u",
        wrapper: "hero-clutch_wrapper__uGlfY",
        box: "hero-clutch_box__VoqDg",
        box_clutch: "hero-clutch_box_clutch__Y7F9Y",
        box_star: "hero-clutch_box_star__9GLdo",
        box_rating: "hero-clutch_box_rating__Qr9cA",
        label: "hero-clutch_label__en7bX",
        text: "hero-clutch_text__KCDh0",
      };
    },
    42634: () => {},
    43375: (e) => {
      e.exports = {
        circle: "about-circle_circle__0EHtI",
        circle_pointMain: "about-circle_circle_pointMain__3zIYl",
        pulse2: "about-circle_pulse2__c5yA7",
        circle_point: "about-circle_circle_point__Us3Ru",
        circleActive: "about-circle_circleActive__LBZXo",
        pulse: "about-circle_pulse__vns7U",
      };
    },
    44278: (e) => {
      e.exports = {
        root: "choose-language_root__0jm_7",
        button: "choose-language_button__7gw5y",
        list: "choose-language_list__Z3mqM",
        list_item: "choose-language_list_item__Gizd2",
      };
    },
    44911: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/top_flutter.230bcf2f.png",
        height: 246,
        width: 228,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAMFBMVEU7UVqosbNXa3DL0tTc4OLBx8pMaXG9w8Wnr7Hm6uuiqqykrK/u8fL9/v5ecHdueoEniJ89AAAADHRSTlP9eQz+/d0A3GD8YGCpHOWiAAAACXBIWXMAACE4AAAhOAFFljFgAAAAN0lEQVR4nC3LWw7AIAhFwaOAj5aL+9+tadL5H0Zvs/XBisyMhcndZUBV8alzANP2LeOZqYyX/10s4AFvnJzYNAAAAABJRU5ErkJggg==",
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    45267: (e) => {
      e.exports = {
        root: "hero-video_root__rF717",
        play_iframe: "hero-video_play_iframe___n6ux",
        main_iframe: "hero-video_main_iframe__aZ14K",
        root_playBtn: "hero-video_root_playBtn___iOLO",
        root_playBtn_deactivate: "hero-video_root_playBtn_deactivate__d42Im",
        root_playBtn_click: "hero-video_root_playBtn_click__G1wfI",
        rotateClickIcon: "hero-video_rotateClickIcon__CGcmr",
        root_video: "hero-video_root_video__XoMF3",
      };
    },
    48362: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/arrow-45.392a5d80.svg",
        height: 11,
        width: 11,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    49182: (e) => {
      e.exports = {
        button: "button_button__aZ_6A",
        button_text: "button_button_text__yxufZ",
        button_icon: "button_button_icon__mgDpM",
        button_circle: "button_button_circle__94IGi",
        button_icon_dot: "button_button_icon_dot__QKe2H",
        button_svgs: "button_button_svgs__XrFT4",
        button_icon_arrow: "button_button_icon_arrow__sBRHC",
        button_dot: "button_button_dot__Eph0j",
        button_light: "button_button_light__M6d2_",
        button_arrow: "button_button_arrow__F1hNQ",
        button_dark: "button_button_dark__mFnzv",
      };
    },
    53085: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/oracle.f6c579b2.svg",
        height: 17,
        width: 126,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    53241: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => a,
      });
      var i = s(37876),
        r = s(14232);
      let a = (e) => {
        let { children: t, repeatCount: s, wrapper: a } = e,
          n = Array.from({
            length: s,
          }).map((e, t) => t);
        return (0, i.jsx)(i.Fragment, {
          children: n.map((e) =>
            (0, i.jsxs)(
              r.Fragment,
              {
                children: [a && a(e), !a && t],
              },
              e,
            ),
          ),
        });
      };
    },
    53841: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/top_design.bc3e4f98.png",
        height: 252,
        width: 231,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAOVBMVEVJV1/FzM8xSFG+xcjg5OalrrD09vdAVV66wcOnrrGosbHN09XCyMrAxsikrbDp7O1eb3b+/v51goiaC9CWAAAAD3RSTlME/f39/G/+/dVXcP3X13Fp0eQmAAAACXBIWXMAACE4AAAhOAFFljFgAAAAOklEQVR4nBXLUQ7AIAjA0OqYgG4Dvf9hF76avKTAbR/gb0Q8TtuyZF+oZqb26jnaaUOk3C1GmFPfhB87DgHDnjOI7gAAAABJRU5ErkJggg==",
        blurWidth: 7,
        blurHeight: 8,
      };
    },
    54796: (e) => {
      e.exports = {
        text: "fill-text_text__mO2i_",
        text_over: "fill-text_text_over__0ejU_",
      };
    },
    54949: (e) => {
      e.exports = {
        back: "hero-background_back__4MnO3",
        canvas: "hero-background_canvas__gDmnd",
        video: "hero-background_video__O3B9N",
        back_image: "hero-background_back_image__QFo7Z",
        back_children: "hero-background_back_children__LcnwD",
      };
    },
    55709: (e) => {
      e.exports = {
        point: "about-circle-point_point__QSQD7",
        pointMain: "about-circle-point_pointMain__Ub44Y",
      };
    },
    56025: (e) => {
      e.exports = {
        reviews: "reviews_reviews__4tujv",
        reviews_container: "reviews_reviews_container__m4e05",
        reviews_left: "reviews_reviews_left__MinhT",
        reviews_text: "reviews_reviews_text__my9B6",
        reviews_archivements: "reviews_reviews_archivements__d_4_4",
        reviews_archivements_item: "reviews_reviews_archivements_item__9adoO",
        reviews_right: "reviews_reviews_right__TWz4z",
      };
    },
    56254: (e) => {
      e.exports = {
        blog: "blog_blog__5QrIE",
        suptitle: "blog_suptitle__DIm27",
        blog_background: "blog_blog_background__WdR_r",
        blog_container: "blog_blog_container__EXXO_",
        blog_row: "blog_blog_row__RzT89",
        blog_title: "blog_blog_title__ZOh8G",
        blog_input: "blog_blog_input__aMc8q",
        blog_input_field: "blog_blog_input_field__8D80m",
        blog_input_arrow: "blog_blog_input_arrow__Atzo_",
        blog_blogs: "blog_blog_blogs__5cqnR",
      };
    },
    57222: (e) => {
      e.exports = {
        media: "dev-media_media__rjGrk",
        media_preview: "dev-media_media_preview__gac3v",
      };
    },
    57794: (e, t, s) => {
      "use strict";
      s.d(t, {
        H: () => r,
      });
      var i = s(37876);
      s(14232);
      let r = (e) =>
        (0, i.jsx)("svg", {
          ...e,
          viewBox: "0 0 14 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            d: "M0 6H12M12 6L7 1M12 6L7 11",
            "data-stroke": !0,
            strokeWidth: "1.5",
          }),
        });
    },
    58777: (e) => {
      e.exports = {
        logos: "about-partners_logos__aGmdx",
        logos_list: "about-partners_logos_list__XXIat",
        logos_listDefault: "about-partners_logos_listDefault__R5iq3",
        logo_list_item: "about-partners_logo_list_item__mZGsI",
      };
    },
    62796: (e) => {
      e.exports = {
        item: "portfolio-item_item__iw_3C",
        item_gradient: "portfolio-item_item_gradient__nkpb_",
        item_image: "portfolio-item_item_image__FYejF",
        item_linkBtn: "portfolio-item_item_linkBtn__sStvs",
        item_info: "portfolio-item_item_info__KFT_6",
        item_labels_brand: "portfolio-item_item_labels_brand__bnKDi",
        item_labels_type: "portfolio-item_item_labels_type__otio2",
        item_expand: "portfolio-item_item_expand__BoIQW",
        item_title: "portfolio-item_item_title__Ddlbj",
        item_subtitle: "portfolio-item_item_subtitle__vKq0q",
      };
    },
    63569: (e) => {
      e.exports = {
        title: "hero-title_title__2pRRz",
        title_create: "hero-title_title_create__3kJAZ",
        title_awesome: "hero-title_title_awesome__4Eh3v",
        title_slider: "hero-title_title_slider__5hIV3",
        title_typing: "hero-title_title_typing__9fWtR",
        title_text: "hero-title_title_text__JEYyc",
        title_slide: "hero-title_title_slide__9toK8",
      };
    },
    64111: (e) => {
      e.exports = {
        fixed: "main-layout_fixed__C_o__",
        main: "main-layout_main__3rK1r",
        main_menu: "main-layout_main_menu__u4VZb",
      };
    },
    64802: (e) => {
      e.exports = {
        reviews_block: "reviews-block_reviews_block__NRVmE",
        reviews_blockquote: "reviews-block_reviews_blockquote__pRrYT",
        reviews_content: "reviews-block_reviews_content__h3RlP",
        reviews_review: "reviews-block_reviews_review__a02ZG",
        reviews_row: "reviews-block_reviews_row__ZvyRC",
        reviews_client: "reviews-block_reviews_client__yksVw",
        reviews_client_img: "reviews-block_reviews_client_img__2FeKE",
        reviews_client_column: "reviews-block_reviews_client_column__b94ok",
        reviews_client_name: "reviews-block_reviews_client_name__8hXST",
        reviews_client_proff: "reviews-block_reviews_client_proff__pKXNo",
        reviews_company: "reviews-block_reviews_company___hGdn",
        reviews_controls: "reviews-block_reviews_controls__Or1ks",
        reviews_controls_prevBtn:
          "reviews-block_reviews_controls_prevBtn__q_oCj",
        reviews_controls_nextBtn:
          "reviews-block_reviews_controls_nextBtn__QYew9",
        reviews_slide: "reviews-block_reviews_slide__nC_C_",
        reviews_swiper: "reviews-block_reviews_swiper__8tLs3",
      };
    },
    66320: (e) => {
      e.exports = {
        title: "title_title___3dKt",
      };
    },
    66407: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => l,
      });
      var i = s(37876),
        r = s(49995);
      s(14232);
      var a = s(66320),
        n = s.n(a);
      let l = (e) => {
        let { index: t, title: s, className: a } = e;
        return (0, i.jsxs)("h3", {
          className: (0, r.A)(n().title, a),
          children: [t, " — ", s],
        });
      };
    },
    66639: (e) => {
      e.exports = {
        fixed: "hero-sticky_fixed__ZuNHj",
        fixedInvert: "hero-sticky_fixedInvert__5QLdd",
        menuBtn: "hero-sticky_menuBtn__a2I5H",
        becomeClient: "hero-sticky_becomeClient__Hph4c",
      };
    },
    66690: (e) => {
      e.exports = {
        screens: "dev-screens_screens__pjAOM",
        screens_list: "dev-screens_screens_list__BiiTu",
        screens_item: "dev-screens_screens_item__7a__O",
        screens_logo: "dev-screens_screens_logo__dgfZA",
      };
    },
    69291: (e) => {
      e.exports = {
        card: "about-card_card__lHD1X",
        card_webm: "about-card_card_webm__71N60",
        card_container: "about-card_card_container__jEZJ6",
        card_title: "about-card_card_title__E5QW0",
        card_text: "about-card_card_text__559FE",
      };
    },
    71552: (e, t, s) => {
      "use strict";
      s.d(t, {
        bG: () => n,
      });
      var i = s(79434),
        r = s(30915),
        a = s.n(r);
      let n = {
        async find() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = a().stringify({
              ...e,
              page: e.page || 1,
              limit: e.limit || 12,
              skip: e.skip ? e.skip.join(",") : void 0,
            });
          try {
            let e = await i.K.get("/blogs".concat(t ? "?" + t : ""));
            return null == e ? void 0 : e.data;
          } catch (e) {
            console.log("err", e);
          }
        },
        async findById(e) {
          try {
            let { data: t } = await i.K.get("/blogs/".concat(e));
            return t;
          } catch (e) {
            console.log("err", e);
          }
        },
        async findCategory() {
          try {
            let { data: e } = await i.K.get("/blog-categories");
            return e;
          } catch (e) {
            console.log(e);
          }
        },
      };
    },
    73019: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => d,
      });
      var i = s(37876),
        r = s(14232),
        a = s(96941),
        n = s(71705),
        l = s(49995),
        o = s(25240),
        c = s.n(o),
        _ = s(40625);
      let d = (e) => {
        let {
            children: t,
            direction: s = "down",
            duration: o = 5e3,
            scaler: d = 2,
            className: u,
          } = e,
          [m, h] = (0, r.useState)(1),
          p = (0, r.useRef)(null),
          g = (0, r.useRef)([]),
          v = (0, r.useRef)(null),
          [x, f] = (0, r.useState)(window.innerWidth),
          { ref: b, inView: w } = _.Wx(),
          j = () => {
            v.current && v.current.pause().kill();
          },
          A = () => {
            a.os.set(g.current, {
              x: 0,
            });
          },
          N = () => {
            var e;
            let t = p.current;
            if (!t) return;
            let i = t.children[0];
            if (!i) return;
            let r = null == (e = t.parentElement) ? void 0 : e.parentElement;
            if (!r) return;
            let a = Math.min(d, 5),
              n = r.offsetWidth * a,
              l = r.offsetHeight * a;
            if ("up" === s || "down" === s) {
              if (t.offsetHeight >= l) return;
              h(Math.max(1, Math.ceil(Math.ceil(l / i.offsetHeight) / 2)));
              return;
            }
            if ("left" === s || "right" === s) {
              if (t.offsetWidth >= n) return;
              h(Math.max(1, Math.ceil(Math.ceil(n / i.offsetWidth) / 2)));
              return;
            }
          },
          k = () => {
            j();
            let e = p.current;
            if (!e) return;
            let t = Array.from(e.children);
            if (!t.length) return;
            let i = t[0],
              r = i.clientWidth;
            (i.clientHeight,
              A(),
              (v.current = a.os["right" === s ? "from" : "to"](
                g.current,
                o / 1e3,
                {
                  repeat: -1,
                  x: "-" + r,
                  ease: n.WG.easeNone,
                },
              )));
          },
          y = () => {
            window.innerWidth !== x && f(window.innerWidth);
          };
        return (
          (0, r.useEffect)(
            () => (
              window.addEventListener("resize", y),
              () => window.removeEventListener("resize", y)
            ),
          ),
          (0, r.useEffect)(() => {
            N();
          }, [s, d]),
          (0, r.useEffect)(() => {
            w ? k() : j();
          }, [w]),
          (0, r.useEffect)(() => {
            (N(), A(), w && k());
          }, [x]),
          (0, r.useEffect)(() => () => j(), []),
          (0, i.jsx)("div", {
            ref: b,
            className: (0, l.A)(c().marquee, c()["marquee_".concat(s)], u),
            children: (0, i.jsx)("div", {
              ref: p,
              className: c().marquee_wrapper,
              children: ["first_line", "second_line"].map((e, s) =>
                (0, i.jsx)(
                  "div",
                  {
                    className: c().marquee_item,
                    ref: (e) => {
                      g.current[s] = e;
                    },
                    children: Array.from({
                      length: m,
                    }).map((e, s) =>
                      (0, i.jsx)(
                        "div",
                        {
                          className: c().marquee_repeater,
                          children: t,
                        },
                        s,
                      ),
                    ),
                  },
                  s,
                ),
              ),
            }),
          })
        );
      };
    },
    73290: (e, t, s) => {
      "use strict";
      s.d(t, {
        f: () => r,
      });
      var i = s(14232);
      let r = () => {
        let e = (0, i.useRef)(0);
        return (
          (0, i.useEffect)(() => {
            e.current++;
          }),
          e
        );
      };
    },
    74788: (e, t, s) => {
      "use strict";
      s(89099);
    },
    76009: (e) => {
      e.exports = {
        services: "services_services__6fE9H",
        services_subtext: "services_services_subtext__Fi5ij",
        services_list: "services_services_list__t3JEd",
        services_list_item: "services_services_list_item__MAD4_",
      };
    },
    76168: (e, t, s) => {
      "use strict";
      s.d(t, {
        M: () => f,
      });
      var i = s(37876),
        r = s(14232),
        a = s(8340);
      let n = function (e, t) {
          let s =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = (0, a.ql)(e),
            n = t * Math.sin(r),
            l = t * Math.cos(r);
          return {
            x: s ? t - n : n,
            y: i ? t - l : l,
          };
        },
        l = (e, t) => {
          let s = {
            width: 0,
            height: 0,
            radius: 0,
            parentWidth: 0,
            parentHeight: 0,
            parentRadius: 0,
          };
          if (!e.parentElement) return s;
          let { width: i, height: r } = (0, a.z4)(e.parentElement);
          return (
            (s.parentRadius = i / 2),
            (s.parentWidth = i),
            (s.parentHeight = r),
            (s.width = (t / 100) * i),
            (s.height = (t / 100) * r),
            (s.radius = s.width / 2),
            s
          );
        };
      var o = s(92627),
        c = s(88728),
        _ = s(49995),
        d = s(55709),
        u = s.n(d);
      let m = (e) => {
        let {
            point: t,
            className: s,
            centerDegree: a,
            onAnimationAdd: c,
            onAnimationRemove: d,
          } = e,
          m = (0, r.useRef)(null),
          h = (e) => {
            if (!m.current) return;
            let t = m.current,
              s = l(t, 100),
              i = n(e, s.radius, !0, !0),
              r = (i.y / s.parentHeight) * 100,
              a = (i.x / s.parentWidth) * 100;
            (0, o.AH)(t, {
              top: r + "%",
              right: a + "%",
            });
          },
          p = (e) => {
            let s = t.degree - a;
            h(a + s * e);
          };
        return (
          (0, r.useEffect)(() => (h(a), c(p), () => d(p)), [t]),
          (0, i.jsx)("p", {
            className: (0, _.A)(u().point, t.main && u().pointMain, s),
            ref: m,
            "data-label": t.label,
            "data-point": !!t.main,
          })
        );
      };
      var h = s(43375),
        p = s.n(h);
      let g = (e) => {
        let {
            circle: t,
            activeCircle: s,
            className: a,
            percent: d,
            disabled: u,
            aos: h,
            onHover: g,
            onLeave: v,
          } = e,
          {
            controller: x,
            add: f,
            remove: b,
          } = (() => {
            let e = (0, r.useRef)([]),
              t = (0, r.useRef)(
                new c.Hx({
                  duration: 500,
                  draw(t) {
                    e.current.forEach((e) => e(t));
                  },
                }),
              ),
              s = () => {
                window.innerWidth <= 768 && t.current.forward();
              };
            return (
              (0, r.useEffect)(
                () => (
                  window.addEventListener("resize", s),
                  () => window.removeEventListener("resize", s)
                ),
              ),
              (0, r.useEffect)(() => {
                s();
              }, []),
              {
                controller: t.current,
                add: (t) => {
                  e.current.push(t);
                },
                remove: (t) => {
                  e.current = e.current.filter((e) => e !== t);
                },
              }
            );
          })(),
          { circleRef: w } = ((e) => {
            let t = (0, r.useRef)(null),
              s = (0, r.useRef)(null);
            return (
              (0, r.useLayoutEffect)(() => {
                if (!t.current) return;
                let i = l(t.current, e),
                  r = n(45, i.parentRadius, !0, !0),
                  a = n(45, i.radius, !0, !0),
                  c = {
                    x: ((r.x - a.x) / i.parentWidth) * 100,
                    y: ((r.y - a.y) / i.parentHeight) * 100,
                  },
                  _ = (i.width / i.parentWidth) * 100;
                ((0, o.AH)(t.current, {
                  width: _ + "%",
                  height: _ + "%",
                  top: c.y + "%",
                  right: c.x + "%",
                }),
                  (s.current = i));
              }, [e]),
              {
                circleRef: t,
              }
            );
          })(parseFloat(d));
        return (
          (0, r.useEffect)(() => {
            s && x.forward();
          }, [s]),
          (0, i.jsx)("div", {
            ref: w,
            className: (0, _.A)(
              p().circle,
              u && p().circle_disabled,
              s === t && p().circleActive,
              h && p().circleAos,
              a,
            ),
            onMouseEnter: () => {
              (x.forward(), !u && g && g());
            },
            onMouseLeave: () => {
              !u && v && v();
            },
            "data-circle": !0,
            children: (t.words || []).map((e) => {
              var s;
              return (0, i.jsx)(
                m,
                {
                  onAnimationAdd: f,
                  onAnimationRemove: b,
                  className: (0, _.A)(
                    p().circle_point,
                    e.main && p().circle_pointMain,
                  ),
                  point: e,
                  centerDegree:
                    (null == (s = (t.words || []).find((e) => e.main))
                      ? void 0
                      : s.degree) || 0,
                },
                e.label,
              );
            }),
          })
        );
      };
      var v = s(94213),
        x = s.n(v);
      let f = (e) => {
        let {
            circles: t,
            aos: s,
            activeIndex: a,
            onCircleHover: n,
            onCircleLeave: l,
          } = e,
          o = (0, r.useRef)(null);
        return (0, i.jsx)("div", {
          className: (0, _.A)(x().circle),
          ref: o,
          children: (0, i.jsx)("div", {
            className: x().box,
            children: t.map((e, r) =>
              (0, i.jsx)(
                g,
                {
                  className: x().item,
                  percent: e.size,
                  disabled: e.disabled,
                  circle: e,
                  activeCircle: s && -1 !== a ? t[a] : null,
                  onHover: () => (null == n ? void 0 : n(r)),
                  onLeave: l,
                  aos: s,
                },
                e.size,
              ),
            ),
          }),
        });
      };
    },
    78750: (e, t, s) => {
      "use strict";
      s.d(t, {
        K: () => i,
      });
      let i = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = [],
          s = Object.assign(
            {
              triggerClass: "animation",
              defaultClass: "",
              activeClass: "active",
              triggerOnce: !0,
              offset: 0,
              onUpdate: () => {},
            },
            e,
          ),
          i = {
            destroy() {
              (window.removeEventListener("scroll", a),
                s.defaultClass &&
                  t.forEach((e) => e.classList.remove(s.defaultClass)));
            },
          },
          r = (e) =>
            "number" == typeof e
              ? e
              : e.includes("%")
                ? window.innerHeight * (parseFloat(e) / 100)
                : parseFloat(e) || 0,
          a = () => {
            for (let e of t) {
              let t = e.getBoundingClientRect().top + window.pageYOffset;
              t <=
                window.pageYOffset +
                  window.innerHeight -
                  r(e.dataset.aosOffset || s.offset) &&
                (e.classList.add(s.activeClass), s.onUpdate(i, !0));
            }
          },
          n = Array.from(document.querySelectorAll(".".concat(s.triggerClass)));
        return (
          t.push(...n),
          s.defaultClass && t.forEach((e) => e.classList.add(s.defaultClass)),
          a(),
          window.addEventListener("scroll", a),
          i
        );
      };
    },
    78789: (e) => {
      e.exports = {
        client: "client-form_client__zsjN5",
        client_cross: "client-form_client_cross__8ZXCT",
        client_title: "client-form_client_title__CdMlw",
        client_form: "client-form_client_form__jnobj",
        client_row: "client-form_client_row__KdD6U",
        client_col: "client-form_client_col__UNPCR",
        client_hobby: "client-form_client_hobby__6Palr",
        client_about: "client-form_client_about__7_0_n",
        client_about_field: "client-form_client_about_field__4yqZ3",
        client_controls: "client-form_client_controls__q6I43",
        client_controls_mail: "client-form_client_controls_mail__3ggKl",
        client_controls_submit: "client-form_client_controls_submit__c4OE5",
      };
    },
    79434: (e, t, s) => {
      "use strict";
      s.d(t, {
        D: () => a,
        K: () => n,
      });
      var i = s(91040),
        r = s(65364);
      let a = i.A.create({
          baseURL: r.env.NEXT_PUBLIC_BOT_URL,
        }),
        n = i.A.create({
          baseURL: "https://api.awsmd.com/api",
          withCredentials: !0,
        });
    },
    80293: (e) => {
      e.exports = {
        title: "blog-content_title__bdvGU",
        titleSec: "blog-content_titleSec__b0Yb_",
        description: "blog-content_description__bC3lj",
        image: "blog-content_image__drYUk",
      };
    },
    80562: (e, t, s) => {
      "use strict";
      s.d(t, {
        L: () => r,
      });
      var i = s(14232);
      let r = function (e) {
        let t = (0, i.useRef)(null),
          s = (s) => {
            t.current &&
              2 !== s.button &&
              (s.composedPath().includes(t.current) || e());
          };
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener("mousedown", s),
              () => window.removeEventListener("mousedown", s)
            ),
          ),
          t
        );
      };
    },
    81216: (e) => {
      e.exports = {
        clutch: "menu-clutch_clutch__j7Fhs",
        clutch_icon: "menu-clutch_clutch_icon__nCbXZ",
        clutch_col: "menu-clutch_clutch_col__KyHQ2",
        clutch_stars: "menu-clutch_clutch_stars__JiIF_",
        clutch_text: "menu-clutch_clutch_text__1pFDA",
      };
    },
    85105: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => r,
      });
      var i = s(37876);
      s(14232);
      let r = (e) =>
        (0, i.jsx)("svg", {
          ...e,
          viewBox: "0 0 26 25",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            d: "M1.87441 12.1793H24.4068M24.4068 12.1793L13.1406 23.4455M24.4068 12.1793L13.1406 0.913086",
            "data-stroke": !0,
            strokeWidth: "1.8209",
            strokeLinecap: "round",
          }),
        });
    },
    85274: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/crosslead.2cd4c2e3.png",
        height: 37,
        width: 113,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEUUFBQUFBRMaXEZGRkUFBQTExMWFhYVFRW0khruAAAACHRSTlMSaQAFSjMihMBUADgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAdSURBVHicY2ACA2YGEGBjYGBlYGBlYWFkZGdkBgACewA1E7ekZAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    86143: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => l,
      });
      var i = s(37876),
        r = s(14232),
        a = s(54587),
        n = s.n(a);
      let l = r.forwardRef((e, t) => {
        let { src: s, quality: r = 90, isWebp: a = !0, ...l } = e,
          o = "".concat(s, "?q=").concat(r) + (a ? "&fm=webp" : "");
        return (0, i.jsx)(n(), { ...l, ref: t, src: o });
      });
    },
    86404: (e, t, s) => {
      "use strict";
      s.d(t, {
        C: () => r,
      });
      var i = s(14232);
      let r = () => {
        let [e, t] = (0, i.useState)(1);
        return () => t((e) => e + 1);
      };
    },
    87612: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/nutanix.76cbb1b9.svg",
        height: 16,
        width: 120,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    87657: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
      });
      let i = {
        src: "/_next/static/media/upside.3fc33722.svg",
        height: 31,
        width: 85,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    88249: (e) => {
      e.exports = {
        banner: "banner_banner__ZW5Te",
        banner_container: "banner_banner_container__rPstf",
        banner_display: "banner_banner_display__79tyY",
        banner_title: "banner_banner_title__UKeo3",
        banner_marquee: "banner_banner_marquee__XK98s",
        banner_marquee_block: "banner_banner_marquee_block___LF_T",
      };
    },
    88728: (e, t, s) => {
      "use strict";
      s.d(t, {
        Hx: () => n,
        GS: () => i,
      });
      let i = {
          easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
          easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
          easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
          easeInOutSide: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInOutQuint: (e) =>
            e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeOutQuart: (e) =>
            e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          linear: (e) => e,
        },
        r = () => ({
          duration: 1e3,
          ease: i.linear,
          onComplete: () => {},
          onCompleteReverse: () => {},
          draw: (e) => {},
        }),
        a = function () {
          var e;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            s = r();
          for (let i in ((s.duration =
            void 0 !== t.duration
              ? Math.max(
                  1,
                  "number" == typeof (e = t.duration)
                    ? e
                    : /(ms)$/.test(e)
                      ? parseFloat(e) / 1e3
                      : /(s)$/.test(e)
                        ? 1e3 * parseFloat(e)
                        : /(m)$/.test(e)
                          ? 1e3 * parseFloat(e) * 60
                          : parseFloat(e),
                )
              : s.duration),
          t))
            "duration" !== i && (s[i] = t[i]);
          return s;
        };
      class n {
        forward() {
          ((this.mode.reverse = !1), this.stop(), this.animate());
        }
        pause() {
          this.stop();
        }
        reverse() {
          ((this.mode.loop = !1), (this.mode.reverse = !0));
        }
        loop() {
          ((this.mode.reverse = !1), (this.mode.loop = !0));
        }
        reset() {
          (this.stop(),
            (this.mode.loop = !1),
            (this.mode.reverse = !1),
            (this.completed = !1),
            (this.progress = 0));
        }
        stop() {
          -1 !== this.raf && (cancelAnimationFrame(this.raf), (this.raf = -1));
        }
        animate() {
          let { mode: e, config: t } = this,
            s = performance.now();
          this.completed = !1;
          let i = (e) => {
            let r = (e - s) / t.duration;
            r > 1 && (r = 1);
            let a = t.ease(r);
            ((this.progress = a),
              t.draw(a),
              r < 1
                ? ((this.raf = requestAnimationFrame(i)), (this.completed = !0))
                : t.onComplete());
          };
          this.raf = requestAnimationFrame(i);
        }
        get isCompleted() {
          return this.completed;
        }
        constructor(e) {
          ((this.completed = !1),
            (this.raf = -1),
            (this.progress = 0),
            (this.config = r()),
            (this.mode = {
              reverse: !1,
              loop: !1,
            }),
            (this.config = a(e)));
        }
      }
    },
    90378: (e, t, s) => {
      "use strict";
      s.d(t, {
        v: () => i,
      });
      var i = (function (e) {
        return (
          (e.Home = "hero"),
          (e.Services = "services"),
          (e.About = "about"),
          (e.Development = "development"),
          (e.Portfolio = "portfolio"),
          (e.Banner = "banner"),
          (e.Blog = "blog"),
          (e.Reviews = "reviews"),
          e
        );
      })({});
    },
    92352: (e) => {
      e.exports = {
        about: "about_about__XlgJl",
        about_head: "about_about_head__4ZGI9",
        about_head_title: "about_about_head_title__zA_xo",
        about_content: "about_about_content__H2qJ9",
        about_content_left: "about_about_content_left__6bbCk",
        about_content_right: "about_about_content_right__Jr2SE",
        about_fillText: "about_about_fillText__DBoU3",
        about_list_title: "about_about_list_title__eaHUj",
        about_list: "about_about_list__bNvFa",
        about_list_item: "about_about_list_item__wnM0G",
        about_circle: "about_about_circle__1Dotl",
        about_circle_box: "about_about_circle_box___aJwZ",
        about_circle_item: "about_about_circle_item__6_qf8",
        about_head_btn: "about_about_head_btn__IwLFZ",
      };
    },
    92627: (e, t, s) => {
      "use strict";

      function i(e, t) {
        Object.assign(e.style, t);
      }
      s.d(t, {
        AH: () => i,
        Vn: () => r,
      });
      let r = (e) => {
        if (
          (i(document.documentElement, {
            overflow: "",
            paddingRight: "",
          }),
          !e)
        ) {
          let e =
            window.innerWidth -
            document.body.getBoundingClientRect().width +
            "px";
          i(document.documentElement, {
            overflow: "hidden",
            paddingRight: e,
          });
        }
      };
    },
    93250: (e) => {
      e.exports = {
        root: "home-link_root__D9gb_",
        logo: "home-link_logo__oWtLD",
        logo_dark: "home-link_logo_dark__K8IlT",
        logo_text: "home-link_logo_text__T3Tis",
        logo_icon: "home-link_logo_icon__C3LLf",
        menu: "home-link_menu__tLFSA",
        menu_item: "home-link_menu_item__I_CMO",
        menu_itemActive: "home-link_menu_itemActive__aL0Ow",
        enter: "home-link_enter__L_MLt",
        enterActive: "home-link_enterActive__DFnf1",
        exit: "home-link_exit__JTz_V",
        exitActive: "home-link_exitActive__FnDJW",
      };
    },
    93952: (e, t, s) => {
      "use strict";
      s.d(t, {
        Im: () => er.I,
        mm: () => er.X,
        lZ: () => eK,
        dO: () => tn,
        oG: () => eL,
        qX: () => Z,
        lq: () => U,
        ru: () => eP,
        S3: () => eV,
        Kf: () => tu,
        vi: () => a.v,
        xC: () => ei,
      });
      var i = s(37876),
        r = s(14232),
        a = s(90378),
        n = s(54949),
        l = s.n(n);
      let o = (e) => {
        let { children: t } = e;
        return (0, i.jsxs)("div", {
          className: l().back,
          children: [
            (0, i.jsx)("video", {
              className: l().video,
              poster: "/img/hero_poster.jpg",
              src: "/media/hero.mp4",
              loop: !0,
              muted: !0,
              autoPlay: !0,
              playsInline: !0,
            }),
            (0, i.jsx)("div", {
              className: l().back_children,
              children: t,
            }),
          ],
        });
      };
      var c = s(1730),
        _ = s(40397),
        d = s.n(_);
      let u = () =>
          (0, i.jsx)("a", {
            className: d().root,
            target: "_blank",
            href: "https://clutch.co/profile/awsmd",
            children: (0, i.jsxs)("div", {
              className: d().wrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: d().box,
                  children: [
                    (0, i.jsx)(c.A, {
                      className: d().box_clutch,
                      url: "/img/sprite.svg#clutch",
                    }),
                    [1, 2, 3, 4, 5].map((e) =>
                      (0, i.jsx)(
                        c.A,
                        {
                          className: d().box_star,
                          url: "/img/sprite.svg#star",
                        },
                        e,
                      ),
                    ),
                    (0, i.jsx)("p", {
                      className: d().box_rating,
                      children: "4.9",
                    }),
                  ],
                }),
                (0, i.jsx)("p", {
                  className: d().label,
                  children: "Gold verified",
                }),
                (0, i.jsx)("p", {
                  className: d().text,
                  children: "Our Customers love to work with us, 40 Reviews",
                }),
              ],
            }),
          }),
        m = (e) =>
          (0, i.jsx)("svg", {
            ...e,
            viewBox: "0 0 16 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174",
              "data-stroke": !0,
              strokeWidth: "1.5",
            }),
          });
      var h = s(49995),
        p = s(32973),
        g = s.n(p),
        v = s(8340);
      let x = (e) => {
        let { className: t } = e;
        return (0, i.jsx)("button", {
          className: (0, h.A)(g().button, t),
          onClick: () => {
            (0, v.AR)("#".concat(a.v.Services));
          },
          children: (0, i.jsxs)("div", {
            className: g().button_arrow,
            children: [
              (0, i.jsx)(m, {
                className: g().button_arrow_1,
              }),
              (0, i.jsx)(m, {
                className: g().button_arrow_2,
              }),
            ],
          }),
        });
      };
      var f = s(40625),
        b = s(73351),
        w = s(46809);
      let j = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return '<span class="'.concat(
          e.concat(["caret-animation"]).join(" "),
          '" />',
        );
      };
      class A {
        get textLength() {
          return this.text.length;
        }
        constructor(e, t, { keepCaret: s = !1 } = {}) {
          var i = this;
          ((this.text = e),
            (this.element = t),
            (this.options = {
              keepCaret: !1,
            }),
            (this.start = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              ((i.options.keepCaret = t),
                (i.duration = e),
                (i.direction = 1),
                (i.progress = 0),
                i.play());
            }),
            (this.reverse = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              ((i.options.keepCaret = t),
                (i.duration = e),
                (i.direction = -1),
                (i.progress = 0),
                i.play());
            }),
            (this.play = () => {
              ((this.isRunning = !0),
                (this.time = performance.now()),
                (this.requestId = requestAnimationFrame(this.animate)));
            }),
            (this.stop = () => {
              ((this.isRunning = !1),
                this.requestId &&
                  (cancelAnimationFrame(this.requestId),
                  (this.requestId = null)));
            }),
            (this.draw = () => {
              let e = Math.floor(this.textLength * this.progress),
                t = this.text.substring(
                  0,
                  -1 === this.direction ? this.textLength - e : e,
                );
              e < this.textLength
                ? (this.element.innerHTML = t + j(["caret-animation--stopped"]))
                : (this.element.innerHTML = this.options.keepCaret
                    ? t + j()
                    : t || "&nbsp;");
            }),
            (this.animate = (e) => {
              let t = e - this.time;
              ((this.progress = Math.max(0, Math.min(t / this.duration, 1))),
                this.draw(),
                this.progress >= 1 &&
                  ((this.progress = 1), (this.isRunning = !1)),
                (this.requestId = this.isRunning
                  ? requestAnimationFrame(this.animate)
                  : null));
            }),
            (this.duration = 1e3),
            (this.progress = 0),
            (this.direction = 1),
            (this.isRunning = !1),
            (this.requestId = null),
            (this.time = performance.now()),
            (this.element.innerHTML = j()),
            (this.options = {
              keepCaret: s || !1,
            }));
        }
      }
      var N = s(13508),
        k = s.n(N);
      let y = (e) => {
        let { controller: t, text: s, className: a } = e,
          n = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            n.current && Object.assign(t, new A(s, n.current));
          }, [s]),
          (0, i.jsx)("div", {
            className: (0, h.A)(k().typing, a),
            ref: n,
            children: s,
          })
        );
      };
      var C = s(63569),
        E = s.n(C),
        L = s(49741),
        M = s(89099);
      let B = ["Design", "Branding", "Development"],
        S = (e) => {
          var t, s;
          let { mainTitle: a = "We create", text: n = B } = e,
            l = (0, M.useRouter)(),
            { introPlayed: o } = (0, L.A1)(),
            { ref: c, inView: _ } = f.Wx(),
            [d, u] = (0, r.useState)(
              ((e) => {
                switch (null == e ? void 0 : e.toLowerCase()) {
                  case "branding":
                    return 1;
                  case "mobile_clutch":
                    return 2;
                  default:
                    return 0;
                }
              })(
                (null == (t = l.query.ref) ? void 0 : t.toString()) ||
                  (null == (s = l.query.utm_source) ? void 0 : s.toString()),
              ),
            ),
            m = (0, r.useRef)({
              start: function (e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              },
              reverse: function (e) {
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              },
              stop: () => {},
            });
          return (
            (0, r.useEffect)(() => {
              if (_ && o) {
                let e = setTimeout(
                  () => void u((e) => (e + 1 >= B.length ? 0 : e + 1)),
                  2200,
                );
                return () => clearTimeout(e);
              }
            }, [d, _, o]),
            (0, r.useEffect)(() => {
              m.current.start(0, !0);
            }, []),
            (0, i.jsxs)("div", {
              className: E().title,
              ref: c,
              children: [
                (0, i.jsx)("h1", {
                  className: E().title_create,
                  children: a,
                }),
                (0, i.jsxs)("p", {
                  className: E().title_awesome,
                  children: [
                    (0, i.jsx)(x, {}),
                    (0, i.jsx)("i", {
                      children: "A",
                    }),
                    "wesome",
                  ],
                }),
                !Array.isArray(n) &&
                  (0, i.jsx)("p", {
                    className: E().title_text,
                    children: n,
                  }),
                Array.isArray(n) &&
                  (0, i.jsx)(b.A, {
                    children: (0, i.jsx)(
                      w.Ay,
                      {
                        timeout: 500,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        in: !0,
                        onEntering: () => {
                          m.current.start(500, !0);
                        },
                        onExit: () => {
                          m.current.reverse(500, !0);
                        },
                        children: (0, i.jsx)(y, {
                          text: n[d],
                          controller: m.current,
                          className: E().title_typing,
                        }),
                      },
                      n[d],
                    ),
                  }),
              ],
            })
          );
        };
      var R = s(66563),
        O = s(45267),
        H = s.n(O);
      let F = {
          src: "/_next/static/media/click-to-play.5ca0164c.png",
        },
        D = {
          src: "/_next/static/media/play.74b390f7.svg",
        },
        q = (e) => {
          let { src: t } = e,
            [s, a] = (0, r.useState)(!1),
            n = (0, r.useRef)(void 0),
            l = (0, r.useRef)(null),
            o = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              if (o.current) {
                let e = new R.A(o.current, {
                  autopause: !1,
                  background: !1,
                });
                return (
                  (n.current = e),
                  () => {
                    e.destroy();
                  }
                );
              }
            }, []),
            (0, i.jsxs)("div", {
              className: H().root,
              children: [
                (0, i.jsx)("iframe", {
                  ref: o,
                  className: H().play_iframe,
                  title: "AWSMD Showreel",
                  src: "https://player.vimeo.com/video/823892274?h=fc36315143?controls=true&autoplay=false&loop=true&transparent=true&autopause=false&muted=false&playsinline=false&muted=1&quality=720p",
                  width: "640",
                  height: "480",
                  allow:
                    "autoplay; fullscreen; picture-in-picture; encrypted-media",
                  allowFullScreen: !0,
                  style: {
                    opacity: +!!s,
                  },
                }),
                !s &&
                  (0, i.jsx)("iframe", {
                    title: "AWSMD Showreel",
                    className: H().main_iframe,
                    ref: l,
                    src: "https://player.vimeo.com/video/823892274?h=fc36315143?autoplay=1&loop=1&muted=1&autopause=0&background=1&color=ffffff&controls=2&portrait=0&quality=720p",
                    width: "640",
                    height: "480",
                    allow:
                      "autoplay; fullscreen; picture-in-picture; encrypted-media",
                    allowFullScreen: !0,
                  }),
                (0, i.jsxs)("button", {
                  className: (0, h.A)(
                    H().root_playBtn,
                    s && H().root_playBtn_deactivate,
                  ),
                  onClick: () => {
                    var e;
                    (a(!s), null == (e = n.current) || e.play());
                  },
                  children: [
                    (0, i.jsx)("img", {
                      src: D.src,
                      className: H().root_playBtn_icon,
                      alt: "play icon",
                    }),
                    (0, i.jsx)("img", {
                      src: F.src,
                      className: H().root_playBtn_click,
                      alt: "click icon",
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var I = s(94903),
        T = s.n(I);
      let W = [
          {
            name: "Home",
            href: a.v.Home,
          },
          {
            name: "Our Services",
            href: a.v.Services,
          },
          {
            name: "About Us",
            href: a.v.About,
          },
          {
            name: "Portfolio",
            href: a.v.Portfolio,
          },
          {
            name: "Reviews",
            href: a.v.Reviews,
          },
          {
            name: "Contact Us",
            href: "form",
          },
        ],
        U = (e) => {
          let { header: t, text: s, mainTitle: r, navigation: n } = e,
            { toggleForm: l } = (0, L.w0)();
          return (0, i.jsx)("section", {
            className: T().hero,
            id: a.v.Home,
            children: (0, i.jsxs)(o, {
              children: [
                t,
                (0, i.jsxs)("div", {
                  className: T().hero_content,
                  children: [
                    (0, i.jsxs)("div", {
                      className: T().hero_left,
                      children: [
                        (0, i.jsx)(S, {
                          mainTitle: r,
                          text: s,
                        }),
                        (0, i.jsxs)("div", {
                          className: T().hero_mobile_scroll,
                          children: [
                            (0, i.jsx)(x, {
                              className: T().hero_mobile_scrollBtn,
                            }),
                            (0, i.jsx)("div", {
                              className: T().hero_mobile_scrollText,
                            }),
                          ],
                        }),
                        (0, i.jsx)(u, {}),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: T().hero_right,
                      children: [
                        (0, i.jsx)("nav", {
                          className: T().hero_nav,
                          children: (n || W).map((e) =>
                            (0, i.jsx)(
                              "button",
                              {
                                className: T().hero_nav_item,
                                onClick: () =>
                                  ((e) => {
                                    "form" === e
                                      ? l()
                                      : (0, v.AR)("#".concat(e));
                                  })(e.href),
                                children: e.name,
                              },
                              e.href,
                            ),
                          ),
                        }),
                        (0, i.jsx)(q, {
                          src: "/video-placeholder.mp4",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var G = s(73019),
        V = s(23542),
        P = s.n(V);
      let Z = (e) => {
        let { text: t = "Data driven user focused value based" } = e;
        return (0, i.jsx)("section", {
          className: P().focused,
          children: (0, i.jsx)(G.A, {
            className: P().focused_marquee,
            duration: 2e4,
            direction: "left",
            children: (0, i.jsx)("p", {
              className: P().focused_text,
              children: t,
            }),
          }),
        });
      };
      var X = s(54587),
        Y = s.n(X),
        z = s(21871),
        K = s.n(z);
      let Q = (e) => {
        let {
            href: t,
            anchor: s,
            className: a,
            image: n,
            color: l,
            title: o,
            text: c,
            tags: _,
          } = e,
          [d, u] = (0, r.useState)(t);
        return (
          (0, r.useEffect)(() => {
            t.replace(/((\/)|(#\.+))$/, "") === window.location.href
              ? u(s)
              : u(t);
          }, []),
          (0, i.jsxs)("a", {
            href: d,
            className: (0, h.A)(K().service, a),
            style: {
              backgroundColor: l,
            },
            onClick: (e) => {
              d.startsWith("#") && (e.preventDefault(), (0, v.AR)(d));
            },
            children: [
              (0, i.jsx)(Y(), {
                className: "".concat(K().service_img, " cls-img"),
                src: "".concat(n, "?q=90&fm=webp"),
                alt: "background",
                fill: !0,
              }),
              (0, i.jsxs)("div", {
                className: K().service_container,
                children: [
                  (0, i.jsx)("h2", {
                    className: K().service_title,
                    children: o.split("&nbsp;").map((e) =>
                      (0, i.jsxs)(i.Fragment, {
                        children: [e, " ", (0, i.jsx)("br", {})],
                      }),
                    ),
                  }),
                  (0, i.jsx)("p", {
                    className: K().service_text,
                    "data-text": !0,
                    children: c,
                  }),
                  (0, i.jsx)("ul", {
                    className: K().service_tags,
                    children: _.map((e) =>
                      (0, i.jsx)(
                        "li",
                        {
                          className: K().service_tags_item,
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var J = s(17220),
        $ = s(66407),
        ee = s(76009),
        et = s.n(ee);
      let es = [
          {
            id: 1,
            href: "/mobile-development",
            image: "/_next/static/media/mob-dev.7de784d3.png",
            blurImage: "/_next/static/media/bg-mob-dev.1ac8a566.png",
            color: "#E4E3DF",
            title: "Mobile App Development",
            text: "Many years of expertise in mobile development \nallow us to design architecture and create \nbespoke native applications for Apple iOS and \nGoogle Android.",
            tags: ["Swift", "React Native", "FlutterJS", "Kotlin"],
            anchor: "#technologies",
          },
          {
            id: 2,
            href: "https://www.subscription.awsmd.com/",
            image: "/_next/static/media/design-solutions.70e9fb71.png",
            blurImage: "/_next/static/media/bg-design-solutions.5cf01568.png",
            color: "#F1AE86",
            title: "Solid Design Solutions",
            text: "We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.",
            tags: [
              "Figma",
              "Adobe AfterEffects",
              "Adobe Illustrator",
              "Blender",
              "Cinema 4D",
            ],
            anchor: "#",
          },
          {
            id: 3,
            href: "/web-development",
            image: "/_next/static/media/web-dev.8513f485.png",
            blurImage: "/_next/static/media/bg-web-dev.0dc4f123.png",
            color: "#90A6D0",
            title: "Web &nbsp; Development",
            text: "Our adaptive design components are built using perfectly structured and readable code. We make sure that the development solutions are well-optimized and work flawlessly across devices and browsers.",
            tags: ["ReactJS", "VueJS", "NodeJS", "Webflow"],
            anchor: "#",
          },
        ],
        ei = () =>
          (0, i.jsx)("section", {
            className: et().services,
            id: a.v.Services,
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)($.A, {
                  index: "01",
                  title: "Our Services",
                }),
                (0, i.jsx)(J.A, {
                  className: et().services_subtext,
                  text: "As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.",
                }),
                (0, i.jsx)("ul", {
                  className: (0, h.A)(et().services_list),
                  children: es.map((e) =>
                    (0, i.jsx)(
                      "li",
                      {
                        className: et().services_list_item,
                        children: (0, i.jsx)(Q, { ...e }),
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
          });
      var er = s(36814),
        ea = s(94946),
        en = s.n(ea);
      let el = () => {
        let { toggleForm: e } = (0, L.w0)();
        return (0, i.jsxs)("div", {
          className: en().dev_content,
          children: [
            (0, i.jsxs)("h2", {
              className: en().dev_title,
              children: [
                (0, i.jsxs)("span", {
                  className: en().dev_title_sd,
                  children: ["{SMART}", " DEVELOPMENT"],
                }),
                (0, i.jsx)("span", {
                  className: en().dev_title_stars,
                  children: "**",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: en().dev_bottom,
              children: [
                (0, i.jsx)("p", {
                  className: en().dev_text,
                  children:
                    "Making your business outstanding is a science. We take it (a) seriously and (b) creatively.",
                }),
                (0, i.jsxs)("div", {
                  className: en().dev_controls,
                  children: [
                    (0, i.jsx)("button", {
                      className: en().dev_btn_white,
                      onClick: () => {
                        window.open("https://dribbble.com/awsmd");
                      },
                      children: "Check Our Portfolio",
                    }),
                    (0, i.jsx)("button", {
                      className: en().dev_btn_gray,
                      onClick: () => e(),
                      children: "Get In Touch",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var eo = s(88728),
        ec = s(8356),
        e_ = s.n(ec);
      let ed = () => {
        let e = (0, r.useRef)(null),
          { ref: t, inView: s } = f.Wx({
            triggerOnce: !0,
            rootMargin: "-50%",
          });
        return (
          (0, r.useEffect)(() => {
            if (!e.current) return;
            let t = e.current.children[0],
              i = t.getTotalLength();
            ((t.style.strokeDasharray = "0 ".concat(i)),
              s &&
                (() => {
                  if (!e.current) return;
                  let t = e.current.children[0],
                    s = e.current ? e.current.children[0].getTotalLength() : 0;
                  new eo.Hx({
                    duration: 3e3,
                    ease: eo.GS.easeOutSine,
                    draw: (e) => {
                      let i = s * e;
                      t.style.strokeDasharray = "".concat(i, " ").concat(s - i);
                    },
                  }).forward();
                })());
          }, [s]),
          (0, i.jsx)("div", {
            className: e_().line,
            ref: t,
            children: (0, i.jsx)("svg", {
              ref: e,
              className: e_().line_svg,
              viewBox: "0 0 1728 1101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, i.jsx)("path", {
                d: "M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1",
              }),
            }),
          })
        );
      };
      var eu = s(86143),
        em = s(57222),
        eh = s.n(em);
      let ep = (e) => {
        let { data: t } = e;
        return t.preview
          ? (0, i.jsx)("div", {
              className: eh().media,
              children: (0, i.jsx)(eu.A, {
                className: eh().media_preview,
                src: t.preview,
                alt: "media",
                quality: 95,
                priority: !0,
                fill: !0,
              }),
            })
          : (0, i.jsx)("div", {
              className: eh().media,
            });
      };

      function eg(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        if (e.length <= s) return [e];
        let i = [];
        for (let r = 0; r < e.length; r += t)
          if (r % t == 0) {
            let a = eg(e.slice(r, r + t), s, s);
            i.push(...a);
          } else i.push([e[r]]);
        return i;
      }
      var ev = s(66690),
        ex = s.n(ev);
      let ef = eg(
          [
            {
              preview: "/_next/static/media/screen1-1.a20752cf.jpg",
              logo: "/_next/static/media/intel.768939ad.svg",
            },
            {
              preview: "/_next/static/media/screen1-2.8514041a.jpg",
            },
            {
              preview: null,
            },
            {
              preview: "/_next/static/media/screen1-3.d005e2e1.jpg",
            },
            {
              preview: "/_next/static/media/screen1-4.9ed6c77e.jpg",
            },
            {
              preview: "/_next/static/media/screen2-1.63042a32.jpg",
            },
            {
              preview: "/_next/static/media/screen2-2.7428647f.jpg",
            },
            {
              preview: null,
            },
            {
              preview: "/_next/static/media/screen2-3.2ba450f4.jpg",
              logo: "/_next/static/media/new-balance.fc21131b.svg",
            },
            {
              preview: "/_next/static/media/screen2-4.58d52734.jpg",
            },
            {
              preview: "/_next/static/media/screen3-1.81b62506.jpg",
            },
            {
              preview: "/_next/static/media/screen3-2.3fa7d9a6.jpg",
              logo: "/_next/static/media/uber.179d41ef.svg",
            },
            {
              preview: null,
            },
            {
              preview: "/_next/static/media/screen3-3.9717ddf8.jpg",
            },
            {
              preview: "/_next/static/media/screen3-4.e936e9bf.jpg",
            },
          ],
          5,
          5,
        ),
        eb = () =>
          (0, i.jsx)("div", {
            className: ex().screens,
            children: ef.map((e, t) =>
              (0, i.jsx)(
                "ul",
                {
                  className: ex().screens_list,
                  children: e.map((e, t) =>
                    (0, i.jsxs)(
                      "li",
                      {
                        className: ex().screens_item,
                        children: [
                          (0, i.jsx)(ep, {
                            data: e,
                          }),
                          e.logo &&
                            (0, i.jsx)("div", {
                              className: ex().screens_logo,
                              children: (0, i.jsx)("img", {
                                src: e.logo,
                                alt: "logo",
                              }),
                            }),
                        ],
                      },
                      t,
                    ),
                  ),
                },
                t,
              ),
            ),
          });
      var ew = s(94209),
        ej = s.n(ew);
      let eA = {
          src: "/_next/static/media/hand.509eef57.png",
        },
        eN = {
          src: "/_next/static/media/phone-01.9afcffea.png",
        },
        ek = {
          src: "/_next/static/media/phone-02.cbcae9b6.png",
        };
      var ey = s(24654),
        eC = s.n(ey);
      let eE = () => {
          let e = (0, r.useRef)(null),
            { ref: t, inView: s } = f.Wx({
              triggerOnce: !0,
            });
          return (
            (0, r.useEffect)(() => {
              s && e.current && e.current.play();
            }, [s]),
            (0, i.jsx)("div", {
              className: eC().video,
              ref: t,
              children: (0, i.jsx)("video", {
                ref: e,
                src: "/media/development/phone.mp4",
                playsInline: !0,
                autoPlay: !0,
                muted: !0,
                loop: !0,
              }),
            })
          );
        },
        eL = () =>
          (0, i.jsxs)("section", {
            className: ej().dev,
            id: a.v.Development,
            children: [
              (0, i.jsx)(ed, {}),
              (0, i.jsxs)("div", {
                className: ej().contentbox,
                children: [
                  (0, i.jsx)(G.A, {
                    className: ej().dev_marquee,
                    direction: "right",
                    duration: 2e4,
                    children: (0, i.jsx)("p", {
                      className: ej().dev_marquee_text,
                      children: "Data driven user focused value based",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "container ".concat(ej().dev_container),
                    children: (0, i.jsx)(el, {}),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: ej().dev_phones,
                children: [
                  (0, i.jsx)(eu.A, {
                    className: ej().dev_phones_left,
                    src: eN.src,
                    alt: "phone-left",
                    priority: !0,
                    fill: !0,
                  }),
                  (0, i.jsx)(eu.A, {
                    className: ej().dev_phones_right,
                    src: ek.src,
                    alt: "phone-right",
                    priority: !0,
                    fill: !0,
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: ej().dev_screens,
                children: [
                  (0, i.jsx)("div", {
                    className: ej().dev_screens_wrapper,
                    children: (0, i.jsx)(eb, {}),
                  }),
                  (0, i.jsx)("div", {
                    className: ej().dev_hand_wrapper,
                    children: (0, i.jsxs)("div", {
                      className: ej().dev_hand,
                      children: [
                        (0, i.jsx)(eu.A, {
                          className: ej().dev_hand_image,
                          src: eA.src,
                          alt: "hand",
                          priority: !0,
                          fill: !0,
                        }),
                        (0, i.jsx)(eE, {}),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
      var eM = s(26170),
        eB = s(3574),
        eS = s.n(eB);
      let eR = (0, r.createContext)({
          instance: {
            current: void 0,
          },
          cancelRaf: () => {},
        }),
        eO = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1,
            { ref: t, inView: s } = f.Wx(),
            i = (0, r.useRef)(null);
          (() => {
            let { instance: e } = (0, r.useContext)(eR);
            return e.current;
          })();
          let a = (0, r.useRef)({
              offset: 150,
            }),
            n = () => {
              a.current = {
                ...a.current,
                offset: window.innerWidth <= 900 ? 75 : 150,
              };
            },
            l = () => {
              if (!i.current) return;
              let t = i.current,
                s = t.parentElement;
              if (!s) return;
              if (window.innerWidth < 768) {
                t.style.transform = "translate3d(0px, 0px, 0px)";
                return;
              }
              let r = s.getBoundingClientRect().top + s.offsetHeight / 2,
                n = s.offsetHeight + s.offsetHeight / 2,
                l = (r - window.innerHeight / 2) / n;
              (l > 1 && (l = 1), l < -1 && (l = -1));
              let o = a.current.offset * l;
              t.style.transform = "translate3d(0px, ".concat(o * e, "px, 0px)");
            };
          return (
            (0, r.useEffect)(
              () => (
                window.addEventListener("resize", n),
                () => window.removeEventListener("resize", n)
              ),
            ),
            (0, r.useEffect)(() => {
              if (s)
                return (
                  window.addEventListener("scroll", l),
                  () => window.removeEventListener("scroll", l)
                );
            }, [s]),
            (0, r.useEffect)(() => {
              l();
            }, []),
            {
              ref: t,
              parallaxRef: i,
            }
          );
        };
      var eH = s(2618),
        eF = s.n(eH);
      let eD = r.forwardRef((e, t) => {
          let { className: s, src: r, objectPosition: a } = e;
          return (0, i.jsx)("div", {
            className: (0, h.A)(eF().video, s),
            ref: t,
            children: (0, i.jsx)("video", {
              style: {
                objectPosition: a,
              },
              src: r,
              autoPlay: !0,
              loop: !0,
              playsInline: !0,
              muted: !0,
            }),
          });
        }),
        eq = (e) =>
          (0, i.jsx)("svg", {
            ...e,
            viewBox: "0 0 19 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M0.09375 6.229H17.4467M17.4467 6.229L12.4467 1.229M17.4467 6.229L12.4467 11.229",
              "data-stroke": !0,
            }),
          });
      var eI = s(62796),
        eT = s.n(eI);
      let eW = (e) => {
        let { data: t, forward: s = 1 } = e,
          { ref: r, parallaxRef: a } = eO(s),
          n = /\.(mp4)|(webm)$/.test(t.img) ? "video" : "image";
        return (0, i.jsxs)("div", {
          className: eT().item,
          ref: r,
          children: [
            (0, i.jsxs)("div", {
              className: eT().item_image,
              children: [
                "image" === n &&
                  (0, i.jsx)(eu.A, {
                    loader: () => t.img,
                    src: t.img,
                    alt: "",
                    fill: !0,
                  }),
                "video" === n &&
                  (0, i.jsx)(eD, {
                    objectPosition: t.objectPosition,
                    src: t.img,
                  }),
              ],
            }),
            (0, i.jsx)("span", {
              className: eT().item_gradient,
            }),
            (0, i.jsxs)("div", {
              className: eT().item_info,
              children: [
                (0, i.jsxs)("div", {
                  className: eT().item_expand,
                  children: [
                    (0, i.jsx)("h3", {
                      className: eT().item_title,
                      children: t.title,
                    }),
                    t.description &&
                      (0, i.jsx)("p", {
                        className: eT().item_subtitle,
                        children: t.description,
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: eT().item_linkBtn,
                  children: (0, i.jsx)(eq, {}),
                }),
              ],
            }),
          ],
        });
      };
      var eU = s(18110),
        eG = s.n(eU);
      let eV = (e) => {
          let { className: t, data: s } = e,
            a = (0, r.useMemo)(() => eg(s, 6, 2), [s]);
          return (0, i.jsx)("ul", {
            className: (0, h.A)(eG().portfolio_list, t),
            children: a.map((e, t) =>
              (0, i.jsx)(
                "li",
                {
                  className: eG().portfolio_list_item,
                  children: e.map((e, s) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: eG().portfolio_list_col,
                        children: (0, i.jsx)(eW, {
                          data: e,
                          forward: (s + t) % 2 ? 1 : -1,
                        }),
                      },
                      s,
                    ),
                  ),
                },
                t,
              ),
            ),
          });
        },
        eP = (e) => {
          let { portfolios: t } = e,
            { toggleForm: s } = (0, L.w0)();
          return (0, i.jsx)("section", {
            className: eS().portfolio,
            id: a.v.Portfolio,
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsxs)("header", {
                  className: eS().portfolio_head,
                  children: [
                    (0, i.jsxs)("div", {
                      className: eS().portfolio_head_left,
                      children: [
                        (0, i.jsx)($.A, {
                          index: "03",
                          title: "Our Portfolio",
                        }),
                        (0, i.jsx)(J.A, {
                          className: eS().portfolio_head_fillText,
                          text: "Our user-centered design encourages productivity and boosts revenue.",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: eS().portfolio_head_right,
                      children: [
                        (0, i.jsx)("h2", {
                          className: eS().portfolio_head_title,
                          children: "We don't do cookie-cutter solutions",
                        }),
                        (0, i.jsx)("div", {
                          className: eS().portfolio_head_controls,
                          children: (0, i.jsx)("button", {
                            className: eS().portfolio_head_scheduleBtn,
                            onClick: () => s(),
                            children: "Schedule Meeting",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(eV, {
                  className: eS().portfolio_list,
                  data: t,
                }),
                (0, i.jsx)(eM.A, {
                  className: eS().portfolio_mobile_checkBtn,
                  onClick: () => window.open("https://dribbble.com/awsmd"),
                  text: "Check Full Portfolio",
                  theme: "dark",
                  icon: "dot",
                }),
              ],
            }),
          });
        };
      var eZ = s(88249),
        eX = s.n(eZ);
      let eY = {
          src: "/_next/static/media/texture-1.e7b6d3a7.jpg",
        },
        ez = {
          src: "/_next/static/media/texture-2.42807562.jpg",
        },
        eK = () =>
          (0, i.jsx)("section", {
            className: eX().banner,
            id: a.v.Banner,
            children: (0, i.jsx)("div", {
              className: "container ".concat(eX().banner_container),
              children: (0, i.jsxs)("div", {
                className: eX().banner_display,
                "data-class": "container",
                children: [
                  (0, i.jsx)(G.A, {
                    className: eX().banner_marquee,
                    direction: "right",
                    duration: 2e4,
                    children: (0, i.jsxs)("span", {
                      className: eX().banner_marquee_block,
                      children: [
                        (0, i.jsx)("span", {}),
                        (0, i.jsx)("span", {}),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("h2", {
                    className: eX().banner_title,
                    "data-class": "title",
                    children: [
                      (0, i.jsx)("span", {
                        children: "Numbers don't lie",
                      }),
                      (0, i.jsxs)("span", {
                        children: [
                          "so we use Data ",
                          (0, i.jsx)("img", {
                            src: eY.src,
                            alt: "texture",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("img", {
                            src: ez.src,
                            alt: "texture",
                          }),
                          " Science to drive",
                        ],
                      }),
                      (0, i.jsx)("span", {
                        children: "calculated growth",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        eQ = {
          src: "/_next/static/media/img-01.683b1647.jpg",
        },
        eJ = {
          src: "/_next/static/media/img-02.92e698aa.jpg",
        };
      var e$ = s(33252),
        e0 = s(40235),
        e1 = s(48230),
        e2 = s.n(e1),
        e4 = s(19875),
        e9 = s(23748),
        e3 = s(27888),
        e7 = s(18944),
        e6 = s.n(e7);
      (eQ.src, eJ.src, eQ.src, eJ.src);
      let e5 = (e) => {
        let { data: t, type: s } = e,
          [a, n] = (0, r.useState)(null),
          l = (0, r.useMemo)(() => t.length, [t]),
          o = {
            modules: [e9.dK],
            grabCursor: !0,
            slidesPerView: "auto",
            loop: l > 3,
            pagination: {
              el: ".blog-pagination",
              clickable: !0,
              renderBullet: (e, t) =>
                '<li class="'.concat(
                  (0, h.A)("blog-pagination-bullet", t),
                  '"></li>',
                ),
            },
            breakpoints: {
              566: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
                centeredSlides: l > 3,
              },
            },
          };
        return (0, i.jsxs)("div", {
          className: e6().slider,
          children: [
            (0, i.jsxs)(e3.RC, {
              onInit: n,
              ...o,
              className: e6().slider_swiper,
              children: [
                "blogs" === s &&
                  t.map((e) => {
                    let t = (0, e4.d)(e.image).url;
                    return (0, i.jsx)(
                      e3.qr,
                      {
                        className: e6().slider_item,
                        children: (0, i.jsxs)("a", {
                          href: (0, e0.wG)(e),
                          children: [
                            (0, i.jsx)(eu.A, {
                              className: e6().slider_image,
                              loader: () => t,
                              src: t,
                              alt: "blog image",
                              fill: !0,
                            }),
                            (0, i.jsxs)("div", {
                              className: e6().slider_content,
                              children: [
                                (0, i.jsx)("h3", {
                                  className: e6().slider_title,
                                  children: e.title,
                                }),
                                (0, i.jsx)("p", {
                                  className: e6().slider_text,
                                  children: (0, e0.fY)(e.content),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.id,
                    );
                  }),
                "cases" === s &&
                  t.map((e) =>
                    (0, i.jsx)(
                      e3.qr,
                      {
                        className: e6().slider_item,
                        children: (0, i.jsxs)("a", {
                          href: e.url,
                          children: [
                            (0, i.jsx)(eu.A, {
                              className: e6().slider_image,
                              src: e.img,
                              alt: "blog image",
                              fill: !0,
                            }),
                            (0, i.jsxs)("div", {
                              className: e6().slider_content,
                              children: [
                                (0, i.jsx)("h3", {
                                  className: e6().slider_title,
                                  children: e.title,
                                }),
                                (0, i.jsx)("p", {
                                  className: e6().slider_text,
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
              ],
            }),
            (0, i.jsxs)("div", {
              className: e6().slider_row,
              children: [
                (0, i.jsx)(e$.H, {
                  onPrev: () => (null == a ? void 0 : a.slidePrev()),
                  onNext: () => (null == a ? void 0 : a.slideNext()),
                }),
                (0, i.jsx)(e2(), {
                  href: "blogs" === s ? "/blog" : "/cases",
                  className: e6().slider_viewBtn,
                  children: "blogs" === s ? "View Our Blog" : "View All Cases",
                }),
              ],
            }),
          ],
        });
      };
      var e8 = s(71552),
        te = s(73290),
        tt = s(94438),
        ts = s(27756),
        ti = s(56254),
        tr = s.n(ti),
        ta = s(48362);
      let tn = (e) => {
        let {
            suptitle: t = "05 — Our Blog",
            title: s = "Latest activities",
            searchPlaceholder: a = "Search articles...",
            ...n
          } = e,
          [l, o] = (0, r.useState)(n.data),
          c = (0, te.f)(),
          {
            value: _,
            handleValue: d,
            isTyping: u,
            clearValue: m,
          } = ((e) => {
            var t;
            let [s, i, { setStateValue: a }] = (0, tt.a)({
                value:
                  null != (t = null == e ? void 0 : e.defaultValue) ? t : "",
                isTyping: !1,
              }),
              n = (0, r.useRef)(null);
            return {
              ...s,
              handleValue: (t) => {
                (a("value", t),
                  (null == e ? void 0 : e.unblockTimeout) &&
                    (n.current && clearTimeout(n.current),
                    a("isTyping", !0),
                    (n.current = setTimeout(() => {
                      (a("isTyping", !1), clearTimeout(n.current));
                    }, e.unblockTimeout))));
              },
              clearValue: s.value.trim(),
            };
          })({
            defaultValue: "",
            unblockTimeout: 400,
          }),
          h = async () => {
            if ("blogs" === n.type) {
              let e = await e8.bG.find({
                search: m,
              });
              (null == e ? void 0 : e.results.length) && o(e.results);
            } else
              o(
                n.data.filter(
                  (e) => e.title.includes(m) || e.description.includes(m),
                ),
              );
          };
        return (
          (0, r.useEffect)(() => {
            !u && c.current && h();
          }, [u, _]),
          (0, i.jsxs)("section", {
            className: "blog ".concat(tr().blog),
            children: [
              (0, i.jsxs)("div", {
                className: tr().blog_background,
                children: [
                  (0, i.jsx)("span", {}),
                  (0, i.jsx)("span", {}),
                  (0, i.jsx)("span", {}),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "container ".concat(tr().blog_container),
                children: [
                  (0, i.jsx)("h3", {
                    className: tr().suptitle,
                    children: t,
                  }),
                  (0, i.jsxs)("div", {
                    className: tr().blog_row,
                    children: [
                      (0, i.jsx)("h2", {
                        className: tr().blog_title,
                        children: s,
                      }),
                      (0, i.jsx)(ts.p, {
                        className: tr().blog_input,
                        classNameField: tr().blog_input_field,
                        value: _,
                        onChange: (e) => d(e.target.value),
                        controls: (0, i.jsx)("button", {
                          className: tr().blog_input_arrow,
                          children: (0, i.jsx)("img", {
                            src: ta.A.src,
                            alt: "arrow",
                          }),
                        }),
                        placeholder: a,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: tr().blog_blogs,
                    children: (0, r.createElement)(e5, { ...n, key: l.length }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var tl = s(16957),
        to = s(56025),
        tc = s.n(to),
        t_ = s(53841),
        td = s(44911);
      let tu = (e) => {
        let { reviews: t, index: s = "06" } = e;
        return (0, i.jsx)("section", {
          className: tc().reviews,
          id: a.v.Reviews,
          children: (0, i.jsxs)("div", {
            className: "container ".concat(tc().reviews_container),
            children: [
              (0, i.jsxs)("div", {
                className: tc().reviews_left,
                children: [
                  (0, i.jsx)($.A, {
                    index: s,
                    title: "What Our Clients Say",
                  }),
                  (0, i.jsx)("p", {
                    className: tc().reviews_text,
                    children:
                      "We supply clients across the entire globe with improved network connections.",
                  }),
                  (0, i.jsxs)("ul", {
                    className: tc().reviews_archivements,
                    children: [
                      (0, i.jsx)("li", {
                        className: tc().reviews_archivements_item,
                        children: (0, i.jsx)("img", {
                          src: t_.A.src,
                          alt: "archivement",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: tc().reviews_archivements_item,
                        children: (0, i.jsx)("img", {
                          src: td.A.src,
                          alt: "archivement",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: tc().reviews_right,
                children: (0, i.jsx)(tl.z, {
                  reviews: t,
                }),
              }),
            ],
          }),
        });
      };
    },
    94209: (e) => {
      e.exports = {
        dev: "development_dev__ZUMqF",
        contentbox: "development_contentbox__UjoNa",
        dev_container: "development_dev_container__GvCfx",
        dev_phones: "development_dev_phones__imyxO",
        dev_phones_left: "development_dev_phones_left__bMCN4",
        float: "development_float__BW2Xy",
        dev_phones_right: "development_dev_phones_right__HDoTA",
        dev_marquee: "development_dev_marquee__bRhyK",
        dev_marquee_text: "development_dev_marquee_text__oxpfZ",
        dev_hand: "development_dev_hand__CESVA",
        dev_hand_wrapper: "development_dev_hand_wrapper__ho2uK",
        dev_hand_image: "development_dev_hand_image__G9lS_",
        dev_screens: "development_dev_screens__CsH88",
        dev_screens_wrapper: "development_dev_screens_wrapper__6yBxK",
      };
    },
    94213: (e) => {
      e.exports = {
        circle: "about-graph_circle__oCxRN",
        circle_start: "about-graph_circle_start__vpzLI",
        circle_half: "about-graph_circle_half__uhGpu",
        circle_complete: "about-graph_circle_complete__SS1Ae",
        box: "about-graph_box__kOXeL",
        item: "about-graph_item__P4WQV",
        circleTablet: "about-graph_circleTablet__8fCo3",
      };
    },
    94592: (e) => {
      e.exports = {
        toast: "menu-toast_toast__26zqt",
        toast_container: "menu-toast_toast_container__qbWmh",
        toast_mark: "menu-toast_toast_mark__5n91M",
        toast_text: "menu-toast_toast_text__r3vgJ",
        toast_closeBtn: "menu-toast_toast_closeBtn__ZpibE",
        enter: "menu-toast_enter__bcQhL",
        enterActive: "menu-toast_enterActive__i_53E",
        exit: "menu-toast_exit___t6TP",
        exitActive: "menu-toast_exitActive__MABkP",
      };
    },
    94700: (e) => {
      e.exports = {
        input: "input_input__QldSr",
        input_head: "input_input_head__k3gOX",
        input_title: "input_input_title__4Gy5G",
        input_field: "input_input_field__e0_9K",
        input_input: "input_input_input__lh80_",
        input_error: "input_input_error___Uu_r",
        input__error: "input_input__error__UQNHG",
        input_field__disabled: "input_input_field__disabled__f7fX6",
        input_field__textarea: "input_input_field__textarea__QdBSv",
      };
    },
    94707: (e) => {
      e.exports = {
        animation: "intro-animation_animation__W5TVd",
        animation_background: "intro-animation_animation_background__MTLq3",
        animation_background_blue:
          "intro-animation_animation_background_blue__2bdLz",
        animation_background_red:
          "intro-animation_animation_background_red__TqfNI",
        animation_background_yellow:
          "intro-animation_animation_background_yellow__G2p3S",
        animation_circle: "intro-animation_animation_circle__qTHlO",
        animation_circle_blue: "intro-animation_animation_circle_blue__s2vLB",
        animation_circle_red: "intro-animation_animation_circle_red__NFBwb",
        animation_circle_yellow:
          "intro-animation_animation_circle_yellow__43kqD",
        animation_circle_inner: "intro-animation_animation_circle_inner__1Ega7",
        central_circle: "intro-animation_central_circle__s80ua",
        stage_1: "intro-animation_stage_1__7atN2",
        stage_2: "intro-animation_stage_2__U2cd9",
        stage_3: "intro-animation_stage_3__iIDR0",
        stage_4: "intro-animation_stage_4__XV4kS",
        stage_5: "intro-animation_stage_5__ATyW1",
        central_circleAnim: "intro-animation_central_circleAnim__xch_5",
      };
    },
    94903: (e) => {
      e.exports = {
        hero: "hero_hero__g4i5s",
        hero_content: "hero_hero_content__Ay_OJ",
        hero_left: "hero_hero_left__vy0aP",
        hero_row: "hero_hero_row__UDnIf",
        hero_row_latest: "hero_hero_row_latest__S5QJX",
        hero_row_date: "hero_hero_row_date__JCkgQ",
        hero_row_text: "hero_hero_row_text__eEIf2",
        hero_nav: "hero_hero_nav__Caply",
        hero_nav_item: "hero_hero_nav_item__NENu1",
        hero_mobile_text: "hero_hero_mobile_text__Qo1z4",
        hero_mobile_scroll: "hero_hero_mobile_scroll__F1kmx",
        hero_mobile_scrollBtn: "hero_hero_mobile_scrollBtn__dTflI",
        hero_mobile_scrollText: "hero_hero_mobile_scrollText__2sQQc",
      };
    },
    94946: (e) => {
      e.exports = {
        dev_content: "dev-content_dev_content__EguIn",
        dev_title: "dev-content_dev_title__nwp5r",
        dev_title_sd: "dev-content_dev_title_sd__B29dd",
        dev_title_stars: "dev-content_dev_title_stars__qdKOg",
        dev_bottom: "dev-content_dev_bottom__wIerq",
        dev_text: "dev-content_dev_text__3EkeN",
        dev_controls: "dev-content_dev_controls__wP5T_",
        dev_btn_white: "dev-content_dev_btn_white__xEXo0",
        dev_btn_gray: "dev-content_dev_btn_gray__6rVLp",
      };
    },
    98427: (e) => {
      e.exports = {
        intro: "intro_intro__ZyBc8",
        intro_wrapper: "intro_intro_wrapper__SdSPA",
        intro_top: "intro_intro_top__67CZt",
        intro_bottom: "intro_intro_bottom__aI_0c",
        intro_socials: "intro_intro_socials__s3hQe",
        intro_socials_title: "intro_intro_socials_title__CXwcc",
        intro_socials_item: "intro_intro_socials_item__arsLm",
        intro_logo: "intro_intro_logo__GF8pc",
        intro_indicator: "intro_intro_indicator__4oTdC",
        intro_year: "intro_intro_year__abE2R",
        exit: "intro_exit__Dsnrd",
        exitActive: "intro_exitActive__v_UnJ",
      };
    },
    99975: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => ej,
      });
      var i = s(37876),
        r = s(14232),
        a = s(49741),
        n = s(16760),
        l = s(49995),
        o = s(31947),
        c = s(96941),
        _ = s(67600),
        d = s(30720),
        u = s(77328),
        m = s.n(u),
        h = s(78750),
        p = s(98477),
        g = s(84594),
        v = s(92627),
        x = s(31399),
        f = s.n(x),
        b = s(19183),
        w = s.n(b),
        j = s(17788),
        A = s.n(j);
      let N = (e) => {
        let {
            id: t,
            active: s,
            closeModal: a,
            element: n,
            className: o,
            animation: c,
            timeout: _,
            effect: d = "default",
            scroll: u = !0,
          } = e,
          m = (0, r.useRef)(!1),
          h = (0, r.useRef)(null),
          x = (0, r.useMemo)(
            () =>
              ((e) => {
                switch (e) {
                  case "side":
                    return w();
                  case "none":
                    return A();
                  default:
                    return f();
                }
              })(d),
            [d],
          ),
          b = (e) => {
            u || (0, v.Vn)(e);
          };
        ((0, r.useEffect)(() => {
          (m.current && s && b(!1), (m.current = !0));
        }, [s]),
          (0, r.useEffect)(
            () => () => {
              b(!0);
            },
            [],
          ));
        let j = document.body,
          N = (0, i.jsx)(g.A, {
            timeout: void 0 === _ ? 350 : _,
            in: s,
            classNames: c || x,
            mountOnEnter: !0,
            unmountOnExit: !0,
            onExited: b.bind(null, !0),
            nodeRef: h,
            children: (0, i.jsx)("div", {
              "data-class": "modal",
              "data-scroll-prevent": !0,
              className: (0, l.A)(x.modal, o),
              onMouseDown: (e) => {
                2 !== e.button && e.target === e.currentTarget && a();
              },
              ref: h,
              id: t,
              children: (0, i.jsx)("div", {
                className: x.modal_window,
                children: n,
              }),
            }),
          });
        return j ? (0, p.createPortal)(N, j) : null;
      };
      var k = s(8340),
        y = s(36267),
        C = s.n(y);
      let E = (e) => {
        let { className: t } = e,
          [s, n] = (0, r.useState)(!1),
          { menuActive: o } = (0, a.A1)(),
          { toggleMenu: c } = (0, a.w0)(),
          _ = () => {
            let { scrollTop: e, windowHeight: t } = (0, k.cQ)();
            n(e >= t);
          };
        return (
          (0, r.useEffect)(
            () => (
              window.addEventListener("scroll", _),
              () => window.removeEventListener("scroll", _)
            ),
          ),
          (0, i.jsx)("button", {
            className: (0, l.A)(
              C().button,
              s && C().button_invert,
              o && C().buttonActive,
              t,
            ),
            onClick: () => c(),
            children: (0, i.jsxs)("div", {
              className: C().button_block,
              children: [
                (0, i.jsx)("span", {}),
                (0, i.jsx)("span", {}),
                (0, i.jsx)("span", {}),
              ],
            }),
          })
        );
      };
      var L = s(1730),
        M = s(66639),
        B = s.n(M),
        S = s(80562),
        R = s(44278),
        O = s.n(R);
      let H = [
          {
            code: "CN",
            redirect: "https://cn.awsmd.com?redirect=true",
          },
          {
            code: "EN",
            redirect: "https://awsmd.com?redirect=true",
          },
        ],
        F = () => {
          let [e, t] = (0, r.useState)(!1),
            s = (0, S.L)(() => t(!1)),
            a = (0, r.useMemo)(() => H.find((e) => "EN" === e.code), []);
          return (0, i.jsxs)("div", {
            className: O().root,
            ref: s,
            children: [
              (0, i.jsxs)("button", {
                className: O().button,
                onClick: () => t(!e),
                "data-lang-button": !0,
                children: [
                  (0, i.jsx)("span", {
                    children: a.code,
                  }),
                  (0, i.jsx)(L.A, {
                    style: {
                      transform: e ? "scaleY(-1)" : "",
                    },
                    url: "/img/sprite.svg#arrow-down-small",
                  }),
                ],
              }),
              e &&
                (0, i.jsx)("ul", {
                  className: O().list,
                  children: H.filter((e) => "EN" !== e.code).map((e) =>
                    (0, i.jsx)(
                      "li",
                      {
                        className: O().list_item,
                        children: (0, i.jsx)("a", {
                          href: e.redirect,
                          children: e.code,
                        }),
                      },
                      e.code,
                    ),
                  ),
                }),
            ],
          });
        },
        D = (e) => {
          let { offClient: t, offMenu: s, classNameMenu: n, dark: o } = e,
            [c, _] = (0, r.useState)(!1),
            { toggleForm: d } = (0, a.w0)(),
            u = () => {
              let { scrollTop: e, windowHeight: t } = (0, k.cQ)();
              _(e >= t);
            };
          return (
            (0, r.useEffect)(
              () => (
                window.addEventListener("scroll", u),
                () => window.removeEventListener("scroll", u)
              ),
            ),
            (0, i.jsxs)("div", {
              className: (0, l.A)(B().fixed, (c || o) && B().fixedInvert),
              children: [
                !t &&
                  (0, i.jsxs)("button", {
                    className: B().becomeClient,
                    onClick: () => d(),
                    children: [
                      (0, i.jsx)(L.A, {
                        url: "/img/sprite.svg#plus",
                      }),
                      (0, i.jsxs)("span", {
                        children: [
                          (0, i.jsx)("span", {
                            children: "Become a Client",
                          }),
                          (0, i.jsx)("span", {
                            children: "Become a Client",
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, i.jsx)("div", {
                  className: B().lang,
                  children: (0, i.jsx)(F, {}),
                }),
                !s &&
                  (0, i.jsx)(E, {
                    className: (0, l.A)(n, B().menuBtn),
                  }),
              ],
            })
          );
        };
      var q = s(94707),
        I = s.n(q);
      let T = (e) => {
        let { stage: t } = e,
          s = Array.from({
            length: t,
          }).map((e, t) => I()["stage_".concat(t + 1)]);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)("div", {
              className: (0, l.A)(I().animation, s),
              children: [
                (0, i.jsxs)("div", {
                  className: I().animation_background,
                  children: [
                    (0, i.jsx)("div", {
                      className: I().animation_background_blue,
                    }),
                    (0, i.jsx)("div", {
                      className: I().animation_background_red,
                    }),
                    (0, i.jsx)("div", {
                      className: I().animation_background_yellow,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: I().animation_circle,
                  children: [
                    (0, i.jsx)("div", {
                      className: I().animation_circle_blue,
                    }),
                    (0, i.jsx)("div", {
                      className: I().animation_circle_red,
                    }),
                    (0, i.jsx)("div", {
                      className: I().animation_circle_yellow,
                    }),
                    (0, i.jsx)("div", {
                      className: I().animation_circle_inner,
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: (0, l.A)(
                I().central_circle,
                5 === t && I().central_circleAnim,
              ),
            }),
          ],
        });
      };
      var W = s(91040),
        U = s(56557),
        G = s.n(U),
        V = (function (e) {
          return (
            (e.Dribbble = "https://dribbble.com/awsmd"),
            (e.Instagram = "https://www.instagram.com/awsmd_com"),
            (e.LinkedIn = " https://www.linkedin.com/company/awsmd"),
            e
          );
        })({}),
        P = s(88728),
        Z = s(98427),
        X = s.n(Z);
      let Y = {
          src: "/_next/static/media/logo-colored.5fefaecc.svg",
        },
        z = () => {
          let { setIntroPlayed: e } = (0, a.w0)(),
            [t] = (0, r.useState)(Object.entries(V)),
            [s, n] = (0, r.useState)(0),
            [l, o] = (0, r.useState)(!1),
            [c, _] = (0, r.useState)(!1),
            d = r.useRef(null),
            u = async () => {
              (await W.A.get("/fonts/PlusJakartaSans-Bold.woff2"),
                await W.A.get("/fonts/PlusJakartaSans-Regular.woff2"),
                await W.A.get("/fonts/PlusJakartaSans-Medium.woff2"),
                _(!0));
            };
          return (
            (0, r.useEffect)(() => {
              (0, v.Vn)(l);
            }, [l]),
            (0, r.useEffect)(() => {
              c &&
                ((0, v.Vn)(!1),
                new P.Hx({
                  ease: P.GS.easeInOutSide,
                  duration: 7e3,
                  draw: (e) => n(Math.max(0, 100 * e)),
                  onComplete: () => o(!0),
                }).forward(),
                window.scrollTo({
                  top: 0,
                }));
            }, [c]),
            (0, r.useEffect)(() => {
              u();
            }, []),
            (0, i.jsx)(g.A, {
              in: !l,
              timeout: 1500,
              classNames: X(),
              onExited: e,
              nodeRef: d,
              unmountOnExit: !0,
              mountOnEnter: !0,
              children: (0, i.jsxs)("div", {
                className: X().intro,
                ref: d,
                children: [
                  (0, i.jsx)(T, {
                    stage: ((e) => {
                      switch (!0) {
                        case e > 99:
                          return 5;
                        case e > 67:
                          return 4;
                        case e > 40:
                          return 3;
                        case e > 32:
                          return 2;
                        case e > 7:
                          return 1;
                        default:
                          return 0;
                      }
                    })(s),
                  }),
                  c &&
                    (0, i.jsxs)("div", {
                      className: X().intro_wrapper,
                      children: [
                        (0, i.jsxs)("div", {
                          className: X().intro_top,
                          children: [
                            (0, i.jsxs)("div", {
                              className: X().intro_logo,
                              children: [
                                (0, i.jsx)("img", {
                                  src: Y.src,
                                  alt: "logo",
                                }),
                                (0, i.jsx)("span", {
                                  children: "AWSMD.COM",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("nav", {
                              className: X().intro_socials,
                              children: [
                                (0, i.jsx)("h3", {
                                  className: X().intro_socials_title,
                                  children: "Stay In Touch",
                                }),
                                t.map((e) => {
                                  let [t, s] = e;
                                  return (0, i.jsx)("a", {
                                    className: X().intro_socials_item,
                                    href: s,
                                    target: "_blank",
                                    children: (0, i.jsx)("span", {
                                      children: t,
                                    }),
                                  });
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: X().intro_bottom,
                          children: [
                            (0, i.jsxs)("h1", {
                              className: X().intro_indicator,
                              children: [s.toFixed(0), "%"],
                            }),
                            (0, i.jsxs)("p", {
                              className: X().intro_year,
                              children: ["\xa9 ", G()().format("YYYY")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        },
        K = (e) =>
          (0, i.jsx)("svg", {
            ...e,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M8.41 7.00019L12.71 2.71019C12.8983 2.52188 13.0041 2.26649 13.0041 2.00019C13.0041 1.73388 12.8983 1.47849 12.71 1.29019C12.5217 1.10188 12.2663 0.996094 12 0.996094C11.7337 0.996094 11.4783 1.10188 11.29 1.29019L7 5.59019L2.71 1.29019C2.5217 1.10188 2.2663 0.996094 2 0.996094C1.7337 0.996094 1.4783 1.10188 1.29 1.29019C1.1017 1.47849 0.995908 1.73388 0.995908 2.00019C0.995908 2.26649 1.1017 2.52188 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41019L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z",
              "data-fill": !0,
            }),
          }),
        Q = (e) =>
          (0, i.jsx)("svg", {
            ...e,
            viewBox: "0 0 6 6",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M0.520508 2.99849L2.17134 4.64932L5.47884 1.34766",
              "data-stroke": !0,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          });
      var J = s(94592),
        $ = s.n(J);
      let ee = (e) => {
        let { active: t, onClose: s } = e,
          a = r.useRef(null);
        return (0, i.jsx)(g.A, {
          classNames: $(),
          timeout: 350,
          in: t,
          nodeRef: a,
          mountOnEnter: !0,
          unmountOnExit: !0,
          children: (0, i.jsx)("div", {
            className: $().toast,
            ref: a,
            children: (0, i.jsxs)("div", {
              className: $().toast_container,
              children: [
                (0, i.jsx)("div", {
                  className: $().toast_mark,
                  children: (0, i.jsx)(Q, {}),
                }),
                (0, i.jsx)("p", {
                  className: $().toast_text,
                  children: "Email copied to the clipboard.",
                }),
                (0, i.jsx)("button", {
                  className: $().toast_closeBtn,
                  onClick: s,
                  children: (0, i.jsx)(K, {}),
                }),
              ],
            }),
          }),
        });
      };
      var et = s(89099);
      let es = (e) =>
          (0, i.jsxs)("svg", {
            ...e,
            viewBox: "0 0 6 6",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M4.25 3.35V4.1C4.25 5.1 3.85 5.5 2.85 5.5H1.9C0.9 5.5 0.5 5.1 0.5 4.1V3.15C0.5 2.15 0.9 1.75 1.9 1.75H2.65",
                "data-stroke": !0,
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M4.24844 3.35H3.44844C2.84844 3.35 2.64844 3.15 2.64844 2.55V1.75L4.24844 3.35Z",
                "data-stroke": !0,
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M2.89844 0.5H3.89844",
                "data-stroke": !0,
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M1.75 1.25C1.75 0.835 2.085 0.5 2.5 0.5H3.155",
                "data-stroke": !0,
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M5.49937 2V3.5475C5.49937 3.935 5.18437 4.25 4.79688 4.25",
                "data-stroke": !0,
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, i.jsx)("path", {
                d: "M5.5 2H4.75C4.1875 2 4 1.8125 4 1.25V0.5L5.5 2Z",
                "data-stroke": !0,
                strokeWidth: "0.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          }),
        ei = (e) =>
          (0, i.jsxs)("svg", {
            ...e,
            viewBox: "0 0 64 54",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsx)("path", {
                d: "M29.1331 4.33625C30.2458 2.40903 33.0275 2.40903 34.1402 4.33626L43.3041 20.2086C44.4168 22.1358 43.0259 24.5449 40.8006 24.5449H22.4728C20.2474 24.5449 18.8565 22.1358 19.9692 20.2086L29.1331 4.33625Z",
                "data-fill": "top",
              }),
              (0, i.jsx)("path", {
                d: "M7.82907 40.9516L0.875632 52.5406C0.49027 53.1829 0.952913 54 1.70192 54H10.9087C11.2472 54 11.5608 53.8224 11.735 53.5322L21.2147 37.7326C21.6001 37.0903 21.1374 36.2732 20.3884 36.2732H16.092C12.7072 36.2732 9.57054 38.0491 7.82907 40.9516Z",
                "data-fill": "left",
              }),
              (0, i.jsx)("path", {
                d: "M32.4429 36.7281L27.3684 44.8915C26.9693 45.5334 27.4309 46.3639 28.1867 46.3639H46.348C46.6938 46.3639 47.013 46.5491 47.1846 46.8494L50.9932 53.5145C51.1648 53.8147 51.4841 54 51.8299 54H62.0914C62.8452 54 63.3072 53.1734 62.9121 52.5314L55.7291 40.8591C53.9753 38.0092 50.8686 36.2732 47.5224 36.2732H33.2613C32.9282 36.2732 32.6188 36.4452 32.4429 36.7281Z",
                "data-fill": "right",
              }),
            ],
          });
      var er = s(93952),
        ea = s(8975),
        en = s.n(ea);
      let el = {
          src: "/_next/static/media/clutch.d6c60aad.svg",
        },
        eo = {
          src: "/_next/static/media/dribbble.b3f2ef61.svg",
        },
        ec = {
          src: "/_next/static/media/designrush-icon.e8a02a34.svg",
        },
        e_ = (e) =>
          (0, i.jsxs)("svg", {
            ...e,
            viewBox: "0 0 30 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, i.jsxs)("g", {
                "clip-path": "url(#clip0_974_242)",
                children: [
                  (0, i.jsx)("path", {
                    d: "M23.0075 22.6909C21.4075 24.1455 19.2257 25.0182 16.8984 25.0182C11.6621 25.0182 7.88026 21.2364 7.88026 16C7.88026 10.7636 11.6621 7.12727 16.8984 7.12727C19.2257 7.12727 21.4075 7.85455 23.0075 9.30909L24.1712 10.3273L29.1166 5.38182L27.8075 4.21818C25.0439 1.45455 21.1166 0 16.8984 0C7.58935 0 0.898438 6.69091 0.898438 15.8545C0.898438 25.0182 7.7348 32 16.8984 32C21.1166 32 25.0439 30.5455 27.953 27.7818L29.1166 26.6182L24.1712 21.6727L23.0075 22.6909Z",
                    fill: "white",
                  }),
                  (0, i.jsx)("path", {
                    d: "M16.6045 21.3816C19.5768 21.3816 21.9863 18.972 21.9863 15.9997C21.9863 13.0274 19.5768 10.6179 16.6045 10.6179C13.6322 10.6179 11.2227 13.0274 11.2227 15.9997C11.2227 18.972 13.6322 21.3816 16.6045 21.3816Z",
                    fill: "white",
                    fillOpacity: "0.5",
                  }),
                ],
              }),
              (0, i.jsx)("defs", {
                children: (0, i.jsx)("clipPath", {
                  id: "clip0_974_242",
                  children: (0, i.jsx)("rect", {
                    width: "28.3636",
                    height: "32",
                    fill: "white",
                    transform: "translate(0.898438)",
                  }),
                }),
              }),
            ],
          }),
        ed = (e) =>
          (0, i.jsx)("svg", {
            ...e,
            viewBox: "0 0 11 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, i.jsx)("path", {
              d: "M6.43538 0.787337L7.40177 2.72012C7.53199 2.98742 7.88154 3.24101 8.17625 3.29584L9.92398 3.5837C11.0412 3.76876 11.3016 4.57751 10.4997 5.38626L9.13579 6.75017C8.90961 6.97635 8.77939 7.42185 8.85478 7.74398L9.24545 9.43002C9.55387 10.7597 8.84107 11.2806 7.66907 10.5815L6.031 9.60822C5.73629 9.43002 5.24281 9.43002 4.9481 9.60822L3.31003 10.5815C2.13802 11.2737 1.42522 10.7597 1.73365 9.43002L2.12432 7.74398C2.186 7.415 2.05578 6.9695 1.8296 6.74332L0.465686 5.37941C-0.336212 4.57751 -0.0757666 3.76876 1.04141 3.57685L2.78914 3.28899C3.08385 3.24101 3.4334 2.98056 3.56362 2.71326L4.53001 0.780483C5.05776 -0.2613 5.90763 -0.2613 6.43538 0.787337Z",
              fill: "white",
            }),
          });
      var eu = s(53241),
        em = s(81216),
        eh = s.n(em);
      let ep = () =>
          (0, i.jsxs)("div", {
            className: eh().clutch,
            children: [
              (0, i.jsx)(e_, {
                className: eh().clutch_icon,
              }),
              (0, i.jsxs)("div", {
                className: eh().clutch_col,
                children: [
                  (0, i.jsx)("div", {
                    className: eh().clutch_stars,
                    children: (0, i.jsx)(eu.A, {
                      repeatCount: 5,
                      children: (0, i.jsx)(ed, {}),
                    }),
                  }),
                  (0, i.jsx)("p", {
                    className: eh().clutch_text,
                    children: "Gold verified, 40 reviews",
                  }),
                ],
              }),
            ],
          }),
        eg = [
          {
            name: "Home",
            href: er.vi.Home,
          },
          {
            name: "Our Services",
            href: er.vi.Services,
          },
          {
            name: "About Us",
            href: er.vi.About,
          },
          {
            name: "Portfolio",
            href: er.vi.Portfolio,
          },
          {
            name: "Reviews",
            href: er.vi.Reviews,
          },
          {
            name: "Contact Us",
            href: "form",
          },
        ],
        ev = (e) => {
          let { menuNav: t } = e,
            { toggleMenu: s, toggleForm: n } = (0, a.w0)(),
            [l, o] = (0, r.useState)(!1);
          return (
            (0, et.useRouter)(),
            (0, r.useEffect)(() => {
              if (l) {
                let e = setTimeout(() => o(!1), 3e3);
                return () => clearTimeout(e);
              }
            }, [l]),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("menu", {
                  className: en().menu,
                  children: [
                    (0, i.jsxs)("div", {
                      className: en().menu_left,
                      children: [
                        (0, i.jsx)("button", {
                          className: en().menu_logoBtn,
                          onClick: () => {
                            window.location.reload();
                          },
                          children: (0, i.jsx)(ei, {
                            className: en().menu_logo,
                          }),
                        }),
                        (0, i.jsx)("a", {
                          className: en().menu_clutch,
                          target: "_blank",
                          href: "https://clutch.co/profile/awsmd",
                          children: (0, i.jsx)(ep, {}),
                        }),
                        (0, i.jsx)("p", {
                          className: en().menu_text,
                          children: "Awesome design for awesome businesses",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: en().menu_expand,
                      children: [
                        (0, i.jsxs)("header", {
                          className: en().menu_header,
                          children: [
                            (0, i.jsx)(ei, {
                              className: en().menu_mobile_logo,
                            }),
                            (0, i.jsx)("h4", {
                              className: en().menu_header_title,
                              children: "Navigation",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().menu_content,
                          children: [
                            (0, i.jsx)("div", {
                              className: en().menu_content_left,
                              children: (t || eg).map((e, t) =>
                                (0, i.jsx)(
                                  "button",
                                  {
                                    className: en().menu_content_link,
                                    onClick: () =>
                                      ((e) => {
                                        if ("form" === e) return void n();
                                        ((0, k.AR)("#".concat(e)), s(!1));
                                      })(e.href),
                                    children: (0, i.jsx)("span", {
                                      "data-index": (t + 1)
                                        .toString()
                                        .padStart(2, "0"),
                                      children: e.name,
                                    }),
                                  },
                                  e.name,
                                ),
                              ),
                            }),
                            (0, i.jsxs)("div", {
                              className: en().menu_content_right,
                              children: [
                                (0, i.jsxs)("div", {
                                  className: en().menu_socials,
                                  children: [
                                    (0, i.jsx)("a", {
                                      href: "https://t.me/awsmd_design",
                                      target: "_blank",
                                      className: en().menu_socials_link,
                                      children: "Telegram",
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: en().menu_socials_email,
                                      children: [
                                        (0, i.jsx)("a", {
                                          href: "mailto:info@awsmd.com",
                                          target: "_blank",
                                          children: "info@awsmd.com",
                                        }),
                                        (0, i.jsx)("button", {
                                          onClick: () => {
                                            (navigator.clipboard.writeText(
                                              "info@awsmd.com",
                                            ),
                                              o(!0));
                                          },
                                          children: (0, i.jsx)(es, {}),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: en().menu_row,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: en().menu_copy,
                                      children: [
                                        (0, i.jsx)("p", {
                                          className: en().menu_copy_policy,
                                          children: "Privacy Policy & Cookies",
                                        }),
                                        (0, i.jsxs)("p", {
                                          className: en().menu_copy_copyright,
                                          children: [
                                            "\xa9 Awsmd ",
                                            G()().format("YYYY"),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: en().menu_socialsExtra,
                                      children: [
                                        (0, i.jsx)("a", {
                                          target: "_blank",
                                          href: "https://www.designrush.com/agency/profile/awsmd",
                                          className:
                                            en().menu_socialsExtra_link,
                                          children: (0, i.jsx)("img", {
                                            src: ec.src,
                                            alt: "designrush",
                                            title: "DesignRush",
                                          }),
                                        }),
                                        (0, i.jsx)("a", {
                                          href: "https://dribbble.com/awsmd",
                                          target: "_blank",
                                          className:
                                            en().menu_socialsExtra_link,
                                          children: (0, i.jsx)("img", {
                                            src: eo.src,
                                            alt: "clutch",
                                          }),
                                        }),
                                        (0, i.jsx)("a", {
                                          href: "https://clutch.co/profile/awsmd",
                                          target: "_blank",
                                          className:
                                            en().menu_socialsExtra_link,
                                          children: (0, i.jsx)("img", {
                                            src: el.src,
                                            alt: "dribbble",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, i.jsx)("div", {
                                      className: en().menu_clutch,
                                      children: (0, i.jsx)(ep, {}),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(ee, {
                  active: l,
                  onClose: () => o(!1),
                }),
              ],
            })
          );
        };
      var ex = s(64111),
        ef = s.n(ex);
      d.A.registerGSAP(c.Ay);
      let eb = "Awsmd - a data-driven UX and design agency in San Francisco",
        ew =
          "Using data-science and best UX design and product design practices we deliver measurable business results and solutions that meet user needs and company goals",
        ej = (e) => {
          let {
              dark: t,
              title: s,
              description: c,
              keywords: u,
              className: p,
              children: g,
              offIntro: v,
              offMenu: x,
              offClient: f,
              classNames: b = {},
              meta: w = {},
              menuNav: j,
              formTags: A,
            } = e,
            {
              formActive: k,
              menuActive: y,
              introPlayed: C,
              formSubmitted: E,
            } = (0, a.A1)(),
            { toggleMenu: L, toggleForm: M } = (0, a.w0)(),
            { boxRef: B } = (0, n.t)();
          return (
            (0, r.useEffect)(() => {
              let e = (0, h.K)({
                activeClass: "animate",
                triggerOnce: !0,
                offset: "20%",
              });
              return () => e.destroy();
            }),
            (0, r.useEffect)(() => {
              let e = new d.A({});
              return () => e.destroy();
            }, []),
            (0, i.jsxs)("div", {
              className: ef().box,
              ref: B,
              children: [
                !v && !C && (0, i.jsx)(z, {}),
                (0, i.jsx)(D, {
                  dark: t,
                  offMenu: x,
                  offClient: f,
                  classNameMenu: b.menu,
                }),
                (0, i.jsxs)("div", {
                  className: (0, l.A)(ef().main, p),
                  children: [
                    (0, i.jsxs)(m(), {
                      children: [
                        (0, i.jsx)("title", {
                          children:
                            s ||
                            "ScratchDev | Creative Design and Development Agency",
                        }),
                        (0, i.jsx)("link", {
                          rel: "shortcut icon",
                          type: "image/png",
                          href: "/favicon.png",
                        }),
                        (0, i.jsx)("meta", {
                          name: "description",
                          content: c || ew,
                        }),
                        w.image &&
                          (0, i.jsx)("meta", {
                            property: "og:image",
                            content: w.image,
                          }),
                        w.image &&
                          (0, i.jsx)("meta", {
                            property: "twitter:image",
                            content: w.image,
                          }),
                        (0, i.jsx)("meta", {
                          property: "og:title",
                          content: w.title || eb,
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:description",
                          content: w.description || ew,
                        }),
                        (0, i.jsx)("meta", {
                          property: "twitter:title",
                          content: w.title || eb,
                        }),
                        (0, i.jsx)("meta", {
                          property: "twitter:description",
                          content: w.description || ew,
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:url",
                          content: "https://awsmd.com" + (w.url || ""),
                        }),
                        (0, i.jsx)("meta", {
                          name: "viewport",
                          content: "width=device-width, initial-scale=1",
                        }),
                        (0, i.jsx)("link", {
                          rel: "canonical",
                          href: "https://awsmd.com",
                        }),
                        (0, i.jsx)("meta", {
                          property: "og:type",
                          content: "business.business",
                        }),
                        (0, i.jsx)("meta", {
                          name: "keywords",
                          content:
                            u ||
                            "Agency, Design, QClay, UI/UX, UI, UX, Figma, Development, Web, Front-end, Back-End, Mobile, Flutter",
                        }),
                        (0, i.jsx)("script", {
                          async: !0,
                          src: "https://www.googletagmanager.com/gtag/js?id=G-63B4K8GZVX",
                        }),
                        (0, i.jsx)("script", {
                          dangerouslySetInnerHTML: {
                            __html:
                              "\n                                window.dataLayer = window.dataLayer || [];\n                                function gtag(){dataLayer.push(arguments);}\n                                gtag('js', new Date());\n\n                                gtag('config', 'G-63B4K8GZVX');\n                            ",
                          },
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/PlusJakartaSans-Regular.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/PlusJakartaSans-Medium.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/PlusJakartaSans-SemiBold.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/PlusJakartaSans-Bold.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Inter-Regular.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Inter-Medium.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Inter-SemiBold.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Inter-Bold.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Fontspring-DEMO-freigeist-conregular.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Fontspring-DEMO-freigeist-conbold.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                        (0, i.jsx)("link", {
                          rel: "preload",
                          href: "/fonts/Fontspring-DEMO-freigeist-conbolditalic.woff2",
                          as: "font",
                          type: "font/woff2",
                          crossOrigin: "anonymous",
                        }),
                      ],
                    }),
                    (0, i.jsx)(_.FH, {
                      options: {
                        duration: 2,
                        wheelMultiplier: 1.3,
                      },
                      root: !0,
                      children: g,
                    }),
                  ],
                }),
                (0, i.jsx)(N, {
                  active: k && !E,
                  closeModal: M.bind(null, !1),
                  scroll: y,
                  element: (0, i.jsx)(o.M, {
                    extraTags: A,
                  }),
                  effect: "side",
                }),
                (0, i.jsx)(N, {
                  className: ef().main_menu,
                  active: y,
                  closeModal: L.bind(null, !1),
                  animation: {
                    enter: en().enter,
                    enterActive: en().enterActive,
                    exit: en().exit,
                    exitActive: en().exitActive,
                  },
                  scroll: !1,
                  timeout: 1e3,
                  element: (0, i.jsx)(ev, {
                    menuNav: j,
                  }),
                  effect: "none",
                }),
              ],
            })
          );
        };
    },
  },
]);
