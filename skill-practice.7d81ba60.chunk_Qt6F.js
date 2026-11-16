(window.webpackJsonp = window.webpackJsonp || []).push([[175], {
  1421:
  /*!*************************************************************************!*\
    !*** ./src/routes/skill-practice/helper/practice.helper.js + 1 modules ***!
    \*************************************************************************/
  /*! exports provided: getInitialState, getRandomMessage, handleSessionStorage, calculateScore, checkUserInput, getTextEntryInput, renderScoreBar, scoreHint, displayCurrentQuestion, mainQuestionDisplay, getUserAnswerString, clearXSSInputClient */
  /*! exports used: calculateScore, checkUserInput, clearXSSInputClient, displayCurrentQuestion, getInitialState, getUserAnswerString, handleSessionStorage, mainQuestionDisplay */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Link/Link.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/common/MascotConfirmPopup/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/constants/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/history.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/components/ScoreHint/ScoreHint.js because of ./src/routes/skill-practice/components/SkillPracticeHeader/SkillPracticeHeader.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/fraction-practice/FractionPractice.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/highschool-multiple-practice/HSMultiplePractice.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/highschool-single-practice/HSSinglePractice.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/matching-practice/MatchingPracticeNewVersion.js because of ./src/routes/skill-practice-tester/components/TesterQuestionRenderer/TesterQuestionRenderer.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/pick-item-sentence/PickItemSentence.js because of ./src/routes/support-student-detail/SupportStudentDetail.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/pick-item/PickItem.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/resequence-practice/ResequencePracticeNewVersion.js because of ./src/routes/skill-practice-tester/components/TesterQuestionRenderer/TesterQuestionRenderer.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/text-dropdown-practice/TextDropdownPractice.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/text-entry-practice/TextEntryPractice.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/tv-dropdown/TvDropdown.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/tv-matching-practice/TvMatchingNewVersion.js because of ./src/routes/skill-practice-tester/components/TesterQuestionRenderer/TesterQuestionRenderer.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/underline-sentence/UnderlineSentence.js because of ./src/routes/skill-practice-tester/components/TesterQuestionRenderer/TesterQuestionRenderer.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/underline/Underline.js because of ./src/routes/support-student-list/DetailSupport.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/dompurify/dist/purify.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/result-practice/PracticeResult.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/isomorphic-style-loader/lib/withStyles.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash.flowright/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-sound/lib/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
  function (e, t, n) {
    "use strict";

    n.d(t, "e", function () {
      return $;
    });
    n.d(t, "g", function () {
      return X;
    });
    n.d(t, "a", function () {
      return Y;
    });
    n.d(t, "b", function () {
      return ee;
    });
    n.d(t, "d", function () {
      return ne;
    });
    n.d(t, "h", function () {
      return oe;
    });
    n.d(t, "f", function () {
      return ie;
    });
    n.d(t, "c", function () {
      return se;
    });
    var o;
    var r;
    var i;
    var a = n(0);
    var s = n.n(a);
    var l = n(1426);
    var c = n.n(l);
    var d = n(1499);
    var u = n.n(d);
    var p = n(8);
    var f = n(1459);
    var m = n(1460);
    var h = n(1446);
    var b = n(1447);
    var g = n(1448);
    var v = n(1449);
    var x = n(1450);
    var y = n(1480);
    var w = n.n(y);
    var k = n(14);
    var _ = n.n(k);
    var S = n(9);
    var N = n.n(S);
    var O = n(21);
    function j(e) {
      return (j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function C(e, t, n, o) {
      i ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && r) {
        for (var c in r) {
          if (t[c] === undefined) {
            t[c] = r[c];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: i,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function T(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function A(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (j(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (j(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), j(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function P(e, t) {
      return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function E(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = R(e);
        if (t) {
          var r = R(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return I(this, n);
      };
    }
    function I(e, t) {
      if (t && (j(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function R(e) {
      return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var L;
    var D;
    var z = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          P(e, t);
        }
      })(s, e);
      var t;
      var n;
      var i;
      var a = E(s);
      function s() {
        T(this, s);
        return a.apply(this, arguments);
      }
      t = s;
      if (n = [{
        key: "renderResult",
        value: function () {
          if (this.props.totalQuestions > 0) {
            return o ||= C("div", {}, undefined, "Bạn đã hết số câu làm thử ở chủ điểm này.", " ", C(O.a, {
              to: "/package",
              className: "btn btn-green "
            }, undefined, "Đừng lo, bấm vào đây mua khóa học để được thực hành thỏa thích nhé"));
          } else {
            return r ||= C("h2", {}, undefined, "Câu hỏi của chủ điểm này đang được xây dựng và sẽ hoàn thành trong thời gian sớm nhất. Bạn vui lòng quay lại sau.");
          }
        }
      }, {
        key: "render",
        value: function () {
          return C("div", {}, undefined, C("div", {
            className: "row"
          }, undefined, C("div", {
            className: "col-md-12 "
          }, undefined, C("div", {
            className: "question",
            style: {
              minHeight: "400px",
              position: "relative"
            }
          }, undefined, C("div", {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }
          }, undefined, this.renderResult())))));
        }
      }]) {
        A(t.prototype, n);
      }
      if (i) {
        A(t, i);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return s;
    }(s.a.Component);
    var M = _()(N()(w.a))(z);
    var F = n(1451);
    var B = n(1452);
    var V = n(1453);
    var H = n(1454);
    var Q = n(1462);
    var q = n(273);
    var G = n(24);
    var W = n(1463);
    n(1457);
    function U(e, t, n, o) {
      D ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: D,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var $ = function (e) {
      return {
        totalScore: 0,
        totalAnswered: 0,
        trueAnswered: 0,
        showHuongdanDialog: false,
        isAnswered: false,
        isClickAnswered: false,
        lastSubmitted: new Date(),
        isExpiredPractice: false,
        showSolution: false,
        questionResult: false,
        hasError: false,
        randomMessage: "",
        explanation: "",
        shownExplain: 1,
        challengeSuccess: false,
        previousScore: null,
        previousTrue: false,
        showFeedback: false,
        wrongCount: 0,
        startTime: new Date().getTime(),
        sessionStart: "",
        currentQuestion: null,
        currentSessionId: "",
        currentPracticeResultId: "",
        isEnteredChallenge: false,
        currentUser: "",
        isSubscribe: false,
        isShowAlert: false,
        userNoAnswer: false,
        confirmPopup: null,
        isShowCompleteNotice: false,
        isShowCompleteHW: false,
        width: 0,
        isLoading: false,
        isCheckingAnswer: false,
        isFresh: true,
        userHomeworkId: "",
        notHomework: false,
        currentResult: true,
        topic: "",
        category: "",
        isNew: true,
        skillResultId: "",
        requiredSkills: [],
        fromRequiredSkills: [],
        currentAnswer: "",
        currentTime: "",
        errorMessage: "",
        hwQsDone: 0,
        homeworkQues: null,
        doneHwQues: null,
        isManual: false,
        afterManual: false,
        currentWrongId: "",
        isNeedHelp: false,
        playSound: u.a.status.STOPPED,
        audioLink: "",
        showTeacherHelp: false,
        showPopupDiamond: false,
        questionFontScale: 1,
        wrongFeedbackTitle: "",
        listWrongMsg: ["Tiếc quá, câu trả lời của bạn sai rồi...", "Bạn trả lời sai rồi, có thể bạn đã chưa đọc kĩ đề bài...", "Câu trả lời của bạn chưa chính xác..."],
        breadcrumb: [{
          key: "homepage",
          href: "/",
          title: "Trang chủ"
        }, {
          key: "skill-list",
          href: "/skill-list",
          title: "Danh sách chủ điểm"
        }, {
          key: "skill-detail",
          href: `/skill-details/${e.id}`,
          title: "Chi tiết chủ điểm"
        }, {
          key: "skill-practice",
          href: `/skill-practice/${e.id}`,
          title: "Thực hành"
        }]
      };
    };
    var X = function (e, t) {
      var n = e ? e._id : localStorage.getItem("edutechId");
      if (typeof sessionStorage != "undefined") {
        if (!sessionStorage.length) {
          localStorage.setItem("getSessionStorage", Date.now());
        }
        var o = t;
        window.addEventListener("storage", function (e) {
          if (e.key === "getSessionStorage") {
            localStorage.setItem("sessionStorage", JSON.stringify(sessionStorage));
            localStorage.removeItem("sessionStorage");
          } else if (e.key === "sessionStorage" && !sessionStorage.length) {
            var t = JSON.parse(e.newValue);
            for (var r in t) {
              sessionStorage.setItem(r, t[r]);
            }
            o.getSessionData(n, o);
          }
        });
      }
    };
    var Y = function (e, t) {
      var n = t;
      if (n < 10) {
        if (e) {
          return n + 10;
        } else if (n > 0) {
          return n - 1;
        } else {
          return n;
        }
      } else if (K(n, 9, 20)) {
        return Z(e, n, 9, 2);
      } else if (K(n, 19, 30)) {
        return Z(e, n, 8, 3);
      } else if (K(n, 29, 40)) {
        return Z(e, n, 7, 3);
      } else if (n > 39 && n < 50) {
        if (e) {
          return n + 6;
        } else {
          return n - 3;
        }
      } else {
        return J(e, n);
      }
    };
    var K = function (e, t, n) {
      return e > t && e < n;
    };
    var Z = function (e, t, n, o) {
      if (e) {
        return t + n;
      } else {
        return t - o;
      }
    };
    var J = function (e, t) {
      if (K(t, 49, 60)) {
        return Z(e, t, 5, 3);
      } else if (K(t, 59, 70)) {
        return Z(e, t, 4, 3);
      } else if (K(t, 69, 80)) {
        return Z(e, t, 3, 3);
      } else if (K(t, 79, 90)) {
        return Z(e, t, 2, 2);
      } else if (K(t, 89, 100)) {
        return Z(e, t, 1, 1);
      } else if (t === 100) {
        if (e) {
          return t;
        } else {
          return t - 1;
        }
      } else {
        return undefined;
      }
    };
    var ee = function (e, t) {
      if (t.listAnswers.length === 0) {
        return false;
      }
      if (e === p.P || e === p.vb) {
        return t.listAnswers.length;
      }
      if (e === p.Eb || e === p.Fb) {
        var n = false;
        t.listAnswers.map(function (e) {
          if (e.textInput) {
            n = true;
          }
        });
        return n;
      }
      if (e === p.Db) {
        return te(t);
      }
      if (e === p.M) {
        var o = true;
        t.listAnswers.map(function (e) {
          if (!e.rightMatching) {
            o = false;
          }
        });
        return o;
      }
      return e !== p.X && e !== p.Y || t.listAnswers.filter(function (e) {
        return e.textInput === "....";
      }).length !== t.listAnswers.length;
    };
    var te = function (e) {
      var t = false;
      e.listAnswers.map(function (e) {
        if (e.dropDownSelected) {
          t = true;
        }
      });
      return t;
    };
    var ne = function (e, t, n, o) {
      var r = t.state.currentQuestion || e;
      if (function (e) {
        return e && e.isManual && !e._id;
      }(r)) {
        return L ||= U("div", {});
      }
      if (r && r.uniqueError) {
        return U("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }
        }, undefined, U("img", {
          src: `${t.props.config.assetsDomain}/img/robotWrong.png`
        }), U("p", {
          style: {
            color: "#687187",
            marginTop: 25,
            fontSize: 18
          }
        }, undefined, r.uniqueError), U("button", {
          className: ["btn btn--thirds", n.btnAnswer].join(" "),
          onClick: function (e) {
            return G.a.push("/skill-list");
          }
        }, undefined, "Tôi đã hiểu"));
      }
      var i = function (e, t) {
        return t.state.totalAnswered > 0 && t.state.totalAnswered % 5 == 0 && !t.state.showSolution && e && !e.isSubscribe && !t.props.user;
      }(r, t);
      var a = r && !r.skillDemo && !r.isSubscribe;
      if (i || a) {
        var s = function (e, t, n) {
          var o = "Bạn đã hết thời gian học thử";
          var r = "Bạn đã hết thời gian học thử. Bạn vui lòng mua khóa học để tiếp tục học tập trên VioEdu. Nếu tài khoản đã gia hạn, vui lòng ấn F5 để tải lại trang.";
          var i = "/package";
          var a = "Mua khóa học";
          if (e) {
            o = "Phiên thực hành đã hết hạn";
            r = "Bạn vui lòng đăng nhập lại để tiếp tục học tập trên VioEdu";
            i = "/login";
            a = "Đăng nhập";
          } else if (t) {
            o = n.props.user ? "Gói môn học của bạn đã hết hạn" : "Phiên thực hành đã hết hạn";
            r = n.props.user ? "Bạn vui lòng mua khóa học để tiếp tục học tập trên VioEdu. Nếu tài khoản đã gia hạn, vui lòng ấn F5 để tải lại trang." : "Bạn vui lòng đăng nhập lại để tiếp tục học tập trên VioEdu.";
            i = n.props.user ? "/package" : "/login";
            a = n.props.user ? "Mua khóa học" : "Đăng nhập";
          }
          return {
            titlePopup: o,
            contentPopup: r,
            linkPopup: i,
            primaryLabel: a
          };
        }(i, a, t);
        var l = s.titlePopup;
        var c = s.contentPopup;
        var d = s.linkPopup;
        var u = s.primaryLabel;
        var p = t.props.config && t.props.config.assetsDomain || "https://s3.vio.edu.vn/assets";
        return U(q.a, {
          open: true,
          assetsDomain: p,
          title: l,
          message: c,
          primaryLabel: u,
          secondaryLabel: "Quay lại",
          onPrimary: function () {
            return t.goToLink(d);
          },
          onSecondary: function () {
            return t.goToLink("/skill-list");
          }
        });
      }
      if (!t.disableAwardRedirect && function (e, t) {
        return e && !e._id && t.state.totalScore > 0 || t.state.totalScore === 100;
      }(r, t)) {
        G.a.push(`/skill-award/${t.props.id}`);
      }
      if (o) {
        return o(r);
      } else {
        return oe(r, t);
      }
    };
    var oe = function (e, t) {
      if (e && !e._id) {
        return U(M, {
          score: t.state.totalScore,
          isSubscribe: e.isSubscribe,
          totalQuestions: t.state.totalAnswered,
          isCompleted: e.isCompleted
        });
      }
      var n = !!t.state.showSolution || !!t.state.isAnswered || !!t.state.confirmPopup;
      switch (e.questionType) {
        case p.M:
          return U(m.a, {
            data: e,
            onRef: t.setPracticeRef,
            grade: e.grade,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.Hb:
          return U(Q.a, {
            data: e,
            onRef: t.setPracticeRef,
            grade: e.grade,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.ib:
          return U(f.a, {
            data: e,
            onRef: t.setPracticeRef,
            grade: e.grade,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.vb:
          return U(v.a, {
            data: e,
            grade: e.grade,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.P:
          return U(x.a, {
            data: e,
            grade: e.grade,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.Eb:
          return U(h.a, {
            data: e,
            onRef: t.setPracticeRef,
            grade: e.grade,
            disabled: n,
            showSolution: !!t.state.showSolution,
            onEnterButton: function () {
              t.handleEnterButton();
            }
          }, e._id);
      }
      return re(e, t, n);
    };
    var re = function (e, t, n = false) {
      switch (e.questionType) {
        case p.Db:
          return U(b.a, {
            data: e,
            onRef: t.setPracticeRef,
            grade: e.grade,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.Fb:
          return U(g.a, {
            data: e,
            onRef: t.setPracticeRef,
            grade: e.grade,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.Jb:
          return U(V.a, {
            data: e,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.Kb:
          return U(W.a, {
            data: e,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.A:
          return U(H.a, {
            data: e,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.X:
          return U(F.a, {
            data: e,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        case p.Y:
          return U(B.a, {
            data: e,
            onRef: t.setPracticeRef,
            disabled: n,
            showSolution: !!t.state.showSolution
          }, e._id);
        default:
          return null;
      }
    };
    var ie = function (e, t) {
      if (t.questionType === p.P || t.questionType === p.vb) {
        return t.answers.filter(function (t) {
          return t._id && e.listAnswers.find(function (e) {
            return e.selectedId === t._id.toString();
          });
        }).map(function (e) {
          return e.text;
        }).join(", ");
      }
      if (t.questionType === p.Eb || t.questionType === p.Fb) {
        return e.listAnswers.map(function (e) {
          return e.textInput;
        }).join(", ");
      }
      if (t.questionType === p.Db) {
        return e.listAnswers.map(function (e) {
          return e.dropDownSelected;
        }).join(", ");
      }
      if (t.questionType === p.M) {
        var n = e.listAnswers.map(function (e) {
          return e.rightMatching;
        });
        return ae(n, t).join(", ");
      }
      if (t.questionType === p.ib) {
        var o = e.listAnswers.map(function (e) {
          return e.sequenceId;
        });
        return (o ? o.map(function (e) {
          var n = t.answers.find(function (t) {
            return t._id && t._id.toString() === e.toString();
          });
          return n && n.text;
        }) : []).join(", ");
      }
    };
    var ae = function (e, t) {
      if (e) {
        return e.map(function (e) {
          var n = t.rightMatching.find(function (t) {
            return t.id && t.id.toString() === e.toString();
          });
          return n && n.textContent;
        });
      } else {
        return [];
      }
    };
    var se = function (e) {
      if (!e) {
        return e;
      }
      var t = c.a.sanitize(e, {
        USE_PROFILES: {
          html: true
        }
      });
      if (t && (t.toLowerCase().indexOf("onerror") !== -1 || t.toLowerCase().indexOf("onfocus") !== -1) || t.toLowerCase().indexOf("onclick") !== -1 || t.toLowerCase().indexOf("ondblclick") !== -1 || t.toLowerCase().indexOf("onmouse") !== -1 || t.toLowerCase().indexOf("onwheel") !== -1 || t.toLowerCase().indexOf("onscroll") !== -1 || t.toLowerCase().indexOf("onblur") !== -1 || t.toLowerCase().indexOf("onchange") !== -1 || t.toLowerCase().indexOf("oninput") !== -1 || t.toLowerCase().indexOf("ondrag") !== -1 || t.toLowerCase().indexOf("onpaste") !== -1 || t.toLowerCase().indexOf("oncopy") !== -1 || t.toLowerCase().indexOf("onselect") !== -1 || t.toLowerCase().indexOf("onhashchange") !== -1 || t.toLowerCase().indexOf("onpagehide") !== -1 || t.toLowerCase().indexOf("onpageshow") !== -1 || t.toLowerCase().indexOf("onpopstate") !== -1 || t.toLowerCase().indexOf("onresize") !== -1 || t.toLowerCase().indexOf("onunload") !== -1 || t.toLowerCase().indexOf("onabort") !== -1 || t.toLowerCase().indexOf("oncanplay") !== -1 || t.toLowerCase().indexOf("ondurationchange") !== -1 || t.toLowerCase().indexOf("onemptied") !== -1 || t.toLowerCase().indexOf("onend") !== -1 || t.toLowerCase().indexOf("onpause") !== -1 || t.toLowerCase().indexOf("onplay") !== -1 || t.toLowerCase().indexOf("onprogress") !== -1 || t.toLowerCase().indexOf("onratechange") !== -1 || t.toLowerCase().indexOf("onseeked") !== -1 || t.toLowerCase().indexOf("onseeking") !== -1 || t.toLowerCase().indexOf("onstalled") !== -1 || t.toLowerCase().indexOf("onsuspend") !== -1 || t.toLowerCase().indexOf("ontimeupdate") !== -1 || t.toLowerCase().indexOf("onvolumechange") !== -1 || t.toLowerCase().indexOf("onwaiting") !== -1 || t.toLowerCase().indexOf("ontoggle") !== -1 || t.toLowerCase().indexOf("javascript") !== -1 || t.toLowerCase().indexOf("onload") !== -1 || t.toLowerCase().indexOf("eval(") !== -1 || t.toLowerCase().indexOf("onanimation") !== -1 || t.toLowerCase().indexOf("onafterprint") !== -1 || t.toLowerCase().indexOf("onbefore") !== -1 || t.toLowerCase().indexOf("onbegin") !== -1 || t.toLowerCase().indexOf("oncuechange") !== -1 || t.toLowerCase().indexOf("onrepeat") !== -1 || t.toLowerCase().indexOf("ontransition") !== -1 || t.toLowerCase().indexOf("onunhandledrejection") !== -1 || t.toLowerCase().indexOf("onauxclick") !== -1 || t.toLowerCase().indexOf("onform") !== -1 || t.toLowerCase().indexOf("<form") !== -1 || t.toLowerCase().indexOf("onfullscreenchange") !== -1 || t.toLowerCase().indexOf("onpointer") !== -1 || t.toLowerCase().indexOf("onsubmit") !== -1 || t.toLowerCase().indexOf("popovertarget") !== -1 || t.toLowerCase().indexOf("ontouch") !== -1 || t.toLowerCase().indexOf("onwebkit") !== -1 || t.toLowerCase().indexOf("<embed") !== -1 || t.toLowerCase().indexOf("<object") !== -1 || t.toLowerCase().indexOf("<use") !== -1 || t.toLowerCase().indexOf("onmessage") !== -1 || t.toLowerCase().indexOf("onclose") !== -1 || t.toLowerCase().indexOf("<meta") !== -1 || t.toLowerCase().indexOf(";self") !== -1 || t.toLowerCase().indexOf(";this") !== -1 || t.toLowerCase().indexOf(";top") !== -1 || t.toLowerCase().indexOf("&#x70;&#x74;") !== -1 || t.toLowerCase().indexOf("&#x72;&#x69;") !== -1 || t.toLowerCase().indexOf("&#x61;") !== -1 || t.toLowerCase().indexOf(";parent") !== -1 || t.toLowerCase().indexOf("onreset") !== -1 || t.toLowerCase().indexOf("onsearch") !== -1 || t.toLowerCase().indexOf("oncontent") !== -1 || t.toLowerCase().indexOf("oncancel") !== -1 || t.toLowerCase().indexOf("oncontext") !== -1 || t.toLowerCase().indexOf("ondrop") !== -1 || t.toLowerCase().indexOf("oninvalid") !== -1 || t.toLowerCase().indexOf("onshow") !== -1) {
        return t.replace(/</g, "").replace(/>/g, "").replace(/\u003C/g, "").replace(/\u003E/g, "").replace(/onerror/g, "").replace(/onfocus/g, "").replace("eval(", "").replace("window", "").replace(";self", "").replace(";this", "").replace(";top", "").replace(";parent", "").replace("frames", "");
      } else {
        return t;
      }
    };
  },
  1422:
  /*!****************************************!*\
    !*** ./node_modules/lodash/shuffle.js ***!
    \****************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! ./_arrayShuffle */1444);
    var r = n(/*! ./_baseShuffle */1445);
    var i = n(/*! ./isArray */49);
    e.exports = function (e) {
      return (i(e) ? o : r)(e);
    };
  },
  1423:
  /*!******************************************************************!*\
    !*** ./src/components/Question/TvMatching/tvMatching.helpers.js ***!
    \******************************************************************/
  /*! exports provided: getItemId, getRightAnswerId, normalizeRightItem, dropOrderToMatches, matchesToDropOrder */
  /*! exports used: dropOrderToMatches, getItemId, getRightAnswerId, matchesToDropOrder, normalizeRightItem */
  function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          r(Object(n), true).forEach(function (t) {
            a(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          r(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function a(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (o(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var r = n.call(e, t || "default");
            if (o(r) !== "object") {
              return r;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (o(t) === "symbol") {
          return t;
        } else {
          return String(t);
        }
      }(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    n.d(t, "b", function () {
      return s;
    });
    n.d(t, "c", function () {
      return l;
    });
    n.d(t, "e", function () {
      return c;
    });
    n.d(t, "a", function () {
      return d;
    });
    n.d(t, "d", function () {
      return u;
    });
    var s = function (e) {
      if (e) {
        if (e.id != null) {
          return String(e.id);
        } else if (e._id != null) {
          return String(e._id);
        } else {
          return null;
        }
      } else {
        return null;
      }
    };
    var l = function (e) {
      if (e) {
        return e.right_answer_id ?? (e.id != null && String(e.id) !== String(e._id) ? e.id : null);
      } else {
        return null;
      }
    };
    var c = function (e) {
      if (!e) {
        return e;
      }
      var t = l(e);
      return i(i({}, e), {}, {
        id: e._id ?? e.id,
        right_answer_id: t ?? e.right_answer_id
      });
    };
    var d = function (e) {
      if (Array.isArray(e) && e.length) {
        return e.map(function (e) {
          if (!e || !e.start || !e.end || !e.start.content || !e.end.content) {
            return null;
          }
          var t = e.start.side;
          var n = e.end.side;
          var o = s(e.start.content);
          var r = s(e.end.content);
          if (o && r) {
            if (t === "left" || n === "right" || e.end.content.right_answer_id) {
              return {
                leftId: o,
                rightId: r
              };
            } else if (t === "right" || n === "left" || e.start.content.right_answer_id) {
              return {
                leftId: r,
                rightId: o
              };
            } else {
              return {
                leftId: o,
                rightId: r
              };
            }
          } else {
            return null;
          }
        }).filter(Boolean);
      } else {
        return [];
      }
    };
    var u = function (e, t, n) {
      var o = {};
      var r = {};
      var a = {};
      var c = {};
      (t || []).forEach(function (e, t) {
        var n = s(e);
        if (n) {
          o[n] = e;
          a[n] = t;
        }
      });
      (n || []).forEach(function (e, t) {
        var n = s(e);
        if (n) {
          r[n] = e;
          c[n] = t;
        }
      });
      return (e || []).map(function (e) {
        var t = o[e.leftId];
        var n = r[e.rightId];
        if (!t || !n) {
          return null;
        }
        var s = l(n);
        var d = i(i({}, n), {}, {
          right_answer_id: s ?? n.right_answer_id
        });
        return {
          start: {
            x: 0,
            y: 0,
            content: t,
            side: "left",
            order: a[e.leftId] ?? 0
          },
          end: {
            x: 0,
            y: 0,
            content: d,
            side: "right",
            order: c[e.rightId] ?? 0
          }
        };
      }).filter(Boolean);
    };
  },
  1425:
  /*!**************************************************************!*\
    !*** ./src/components/Question/shared/dndCssZoom.helpers.js ***!
    \**************************************************************/
  /*! exports provided: getAncestorCssZoom, createCssZoomModifier, portalToBody, ZoomStyle */
  /*! exports used: ZoomStyle, getAncestorCssZoom, portalToBody */
  function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return u;
    });
    n.d(t, "c", function () {
      return p;
    });
    n.d(t, "a", function () {
      return f;
    });
    n(/*! react */0);
    var o;
    var r = n(/*! react-dom */48);
    var i = n.n(r);
    function a(e) {
      return (a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function s(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          l(Object(n), true).forEach(function (t) {
            d(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          l(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function d(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (a(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (a(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (a(t) === "symbol") {
          return t;
        } else {
          return String(t);
        }
      }(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function u(e) {
      if (typeof window == "undefined" || !e || !(e instanceof Element)) {
        return 1;
      }
      var t = 1;
      for (var n = e; n && n instanceof Element && n !== document.documentElement;) {
        var o = window.getComputedStyle(n);
        var r = o.zoom;
        if (r && r !== "normal") {
          var i = parseFloat(r);
          if (!Number.isNaN(i) && i > 0) {
            t *= i > 10 ? i / 100 : i;
          }
        }
        var a = o.getPropertyValue("--q-scale").trim();
        if (a) {
          var s = parseFloat(a);
          if (!Number.isNaN(s) && s > 0 && Math.abs(s - 1) > 0.001) {
            if (!r || r === "normal") {
              t *= s > 10 ? s / 100 : s;
            }
          }
        }
        n = n.parentElement;
      }
      if (t > 0) {
        return t;
      } else {
        return 1;
      }
    }
    function p(e) {
      if (typeof document != "undefined" && document.body) {
        return i.a.createPortal(e, document.body);
      } else {
        return e;
      }
    }
    function f(e) {
      var t = e.zoom;
      var n = e.children;
      var o = e.className;
      var r = e.style;
      return s("div", {
        className: o,
        style: c({
          zoom: t && Math.abs(t - 1) > 0.001 ? t : undefined
        }, r)
      }, undefined, n);
    }
  },
  1426:
  /*!***********************************************!*\
    !*** ./node_modules/dompurify/dist/purify.js ***!
    \***********************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    /*! @license DOMPurify 3.2.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.7/LICENSE */
    e.exports = function () {
      "use strict";

      const {
        entries: e,
        setPrototypeOf: t,
        isFrozen: n,
        getPrototypeOf: o,
        getOwnPropertyDescriptor: r
      } = Object;
      let {
        freeze: i,
        seal: a,
        create: s
      } = Object;
      let {
        apply: l,
        construct: c
      } = typeof Reflect != "undefined" && Reflect;
      i ||= function (e) {
        return e;
      };
      a ||= function (e) {
        return e;
      };
      l ||= function (e, t) {
        for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) {
          o[r - 2] = arguments[r];
        }
        return e.apply(t, o);
      };
      c ||= function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) {
          n[o - 1] = arguments[o];
        }
        return new e(...n);
      };
      const d = N(Array.prototype.forEach);
      const u = N(Array.prototype.lastIndexOf);
      const p = N(Array.prototype.pop);
      const f = N(Array.prototype.push);
      const m = N(Array.prototype.splice);
      const h = N(String.prototype.toLowerCase);
      const b = N(String.prototype.toString);
      const g = N(String.prototype.match);
      const v = N(String.prototype.replace);
      const x = N(String.prototype.indexOf);
      const y = N(String.prototype.trim);
      const w = N(Object.prototype.hasOwnProperty);
      const k = N(RegExp.prototype.test);
      S = TypeError;
      const _ = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
          t[n] = arguments[n];
        }
        return c(S, t);
      };
      var S;
      function N(e) {
        return function (t) {
          if (t instanceof RegExp) {
            t.lastIndex = 0;
          }
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
            o[r - 1] = arguments[r];
          }
          return l(e, t, o);
        };
      }
      function O(e, o, r = h) {
        if (t) {
          t(e, null);
        }
        let i = o.length;
        while (i--) {
          let t = o[i];
          if (typeof t == "string") {
            const e = r(t);
            if (e !== t) {
              if (!n(o)) {
                o[i] = e;
              }
              t = e;
            }
          }
          e[t] = true;
        }
        return e;
      }
      function j(e) {
        for (let t = 0; t < e.length; t++) {
          if (!w(e, t)) {
            e[t] = null;
          }
        }
        return e;
      }
      function C(t) {
        const n = s(null);
        for (const [o, r] of e(t)) {
          if (w(t, o)) {
            if (Array.isArray(r)) {
              n[o] = j(r);
            } else if (r && typeof r == "object" && r.constructor === Object) {
              n[o] = C(r);
            } else {
              n[o] = r;
            }
          }
        }
        return n;
      }
      function T(e, t) {
        while (e !== null) {
          const n = r(e, t);
          if (n) {
            if (n.get) {
              return N(n.get);
            }
            if (typeof n.value == "function") {
              return N(n.value);
            }
          }
          e = o(e);
        }
        return function () {
          return null;
        };
      }
      const A = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
      const P = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "slot", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
      const E = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
      const I = i(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
      const R = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
      const L = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
      const D = i(["#text"]);
      const z = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
      const M = i(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
      const F = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
      const B = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
      const V = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
      const H = a(/<%[\w\W]*|[\w\W]*%>/gm);
      const Q = a(/\$\{[\w\W]*/gm);
      const q = a(/^data-[\-\w.\u00B7-\uFFFF]+$/);
      const G = a(/^aria-[\-\w]+$/);
      const W = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
      const U = a(/^(?:\w+script|data):/i);
      const $ = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
      const X = a(/^html$/i);
      const Y = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
      var K = Object.freeze({
        __proto__: null,
        ARIA_ATTR: G,
        ATTR_WHITESPACE: $,
        CUSTOM_ELEMENT: Y,
        DATA_ATTR: q,
        DOCTYPE_NAME: X,
        ERB_EXPR: H,
        IS_ALLOWED_URI: W,
        IS_SCRIPT_OR_DATA: U,
        MUSTACHE_EXPR: V,
        TMPLIT_EXPR: Q
      });
      const Z = 1;
      const J = 3;
      const ee = 7;
      const te = 8;
      const ne = 9;
      const oe = function () {
        if (typeof window == "undefined") {
          return null;
        } else {
          return window;
        }
      };
      const re = function (e, t) {
        if (typeof e != "object" || typeof e.createPolicy != "function") {
          return null;
        }
        let n = null;
        if (t && t.hasAttribute("data-tt-policy-suffix")) {
          n = t.getAttribute("data-tt-policy-suffix");
        }
        const o = "dompurify" + (n ? "#" + n : "");
        try {
          return e.createPolicy(o, {
            createHTML: e => e,
            createScriptURL: e => e
          });
        } catch (e) {
          console.warn("TrustedTypes policy " + o + " could not be created.");
          return null;
        }
      };
      return function t(n = oe()) {
        const o = e => t(e);
        o.version = "3.2.7";
        o.removed = [];
        if (!n || !n.document || n.document.nodeType !== ne || !n.Element) {
          o.isSupported = false;
          return o;
        }
        let {
          document: r
        } = n;
        const a = r;
        const l = a.currentScript;
        const {
          DocumentFragment: c,
          HTMLTemplateElement: S,
          Node: N,
          Element: j,
          NodeFilter: V,
          NamedNodeMap: H = n.NamedNodeMap || n.MozNamedAttrMap,
          HTMLFormElement: Q,
          DOMParser: q,
          trustedTypes: G
        } = n;
        const U = j.prototype;
        const $ = T(U, "cloneNode");
        const Y = T(U, "remove");
        const ie = T(U, "nextSibling");
        const ae = T(U, "childNodes");
        const se = T(U, "parentNode");
        if (typeof S == "function") {
          const e = r.createElement("template");
          if (e.content && e.content.ownerDocument) {
            r = e.content.ownerDocument;
          }
        }
        let le;
        let ce = "";
        const {
          implementation: de,
          createNodeIterator: ue,
          createDocumentFragment: pe,
          getElementsByTagName: fe
        } = r;
        const {
          importNode: me
        } = a;
        let he = {
          afterSanitizeAttributes: [],
          afterSanitizeElements: [],
          afterSanitizeShadowDOM: [],
          beforeSanitizeAttributes: [],
          beforeSanitizeElements: [],
          beforeSanitizeShadowDOM: [],
          uponSanitizeAttribute: [],
          uponSanitizeElement: [],
          uponSanitizeShadowNode: []
        };
        o.isSupported = typeof e == "function" && typeof se == "function" && de && de.createHTMLDocument !== undefined;
        const {
          MUSTACHE_EXPR: be,
          ERB_EXPR: ge,
          TMPLIT_EXPR: ve,
          DATA_ATTR: xe,
          ARIA_ATTR: ye,
          IS_SCRIPT_OR_DATA: we,
          ATTR_WHITESPACE: ke,
          CUSTOM_ELEMENT: _e
        } = K;
        let {
          IS_ALLOWED_URI: Se
        } = K;
        let Ne = null;
        const Oe = O({}, [...A, ...P, ...E, ...R, ...D]);
        let je = null;
        const Ce = O({}, [...z, ...M, ...F, ...B]);
        let Te = Object.seal(s(null, {
          tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
          },
          attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
          },
          allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
          }
        }));
        let Ae = null;
        let Pe = null;
        let Ee = true;
        let Ie = true;
        let Re = false;
        let Le = true;
        let De = false;
        let ze = true;
        let Me = false;
        let Fe = false;
        let Be = false;
        let Ve = false;
        let He = false;
        let Qe = false;
        let qe = true;
        let Ge = false;
        const We = "user-content-";
        let Ue = true;
        let $e = false;
        let Xe = {};
        let Ye = null;
        const Ke = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
        let Ze = null;
        const Je = O({}, ["audio", "video", "img", "source", "image", "track"]);
        let et = null;
        const tt = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
        const nt = "http://www.w3.org/1998/Math/MathML";
        const ot = "http://www.w3.org/2000/svg";
        const rt = "http://www.w3.org/1999/xhtml";
        let it = rt;
        let at = false;
        let st = null;
        const lt = O({}, [nt, ot, rt], b);
        let ct = O({}, ["mi", "mo", "mn", "ms", "mtext"]);
        let dt = O({}, ["annotation-xml"]);
        const ut = O({}, ["title", "style", "font", "a", "script"]);
        let pt = null;
        const ft = ["application/xhtml+xml", "text/html"];
        const mt = "text/html";
        let ht = null;
        let bt = null;
        const gt = r.createElement("form");
        const vt = function (e) {
          return e instanceof RegExp || e instanceof Function;
        };
        const xt = function (e = {}) {
          if (!bt || bt !== e) {
            if (!e || typeof e != "object") {
              e = {};
            }
            e = C(e);
            pt = ft.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? mt : e.PARSER_MEDIA_TYPE;
            ht = pt === "application/xhtml+xml" ? b : h;
            Ne = w(e, "ALLOWED_TAGS") ? O({}, e.ALLOWED_TAGS, ht) : Oe;
            je = w(e, "ALLOWED_ATTR") ? O({}, e.ALLOWED_ATTR, ht) : Ce;
            st = w(e, "ALLOWED_NAMESPACES") ? O({}, e.ALLOWED_NAMESPACES, b) : lt;
            et = w(e, "ADD_URI_SAFE_ATTR") ? O(C(tt), e.ADD_URI_SAFE_ATTR, ht) : tt;
            Ze = w(e, "ADD_DATA_URI_TAGS") ? O(C(Je), e.ADD_DATA_URI_TAGS, ht) : Je;
            Ye = w(e, "FORBID_CONTENTS") ? O({}, e.FORBID_CONTENTS, ht) : Ke;
            Ae = w(e, "FORBID_TAGS") ? O({}, e.FORBID_TAGS, ht) : C({});
            Pe = w(e, "FORBID_ATTR") ? O({}, e.FORBID_ATTR, ht) : C({});
            Xe = !!w(e, "USE_PROFILES") && e.USE_PROFILES;
            Ee = e.ALLOW_ARIA_ATTR !== false;
            Ie = e.ALLOW_DATA_ATTR !== false;
            Re = e.ALLOW_UNKNOWN_PROTOCOLS || false;
            Le = e.ALLOW_SELF_CLOSE_IN_ATTR !== false;
            De = e.SAFE_FOR_TEMPLATES || false;
            ze = e.SAFE_FOR_XML !== false;
            Me = e.WHOLE_DOCUMENT || false;
            Ve = e.RETURN_DOM || false;
            He = e.RETURN_DOM_FRAGMENT || false;
            Qe = e.RETURN_TRUSTED_TYPE || false;
            Be = e.FORCE_BODY || false;
            qe = e.SANITIZE_DOM !== false;
            Ge = e.SANITIZE_NAMED_PROPS || false;
            Ue = e.KEEP_CONTENT !== false;
            $e = e.IN_PLACE || false;
            Se = e.ALLOWED_URI_REGEXP || W;
            it = e.NAMESPACE || rt;
            ct = e.MATHML_TEXT_INTEGRATION_POINTS || ct;
            dt = e.HTML_INTEGRATION_POINTS || dt;
            Te = e.CUSTOM_ELEMENT_HANDLING || {};
            if (e.CUSTOM_ELEMENT_HANDLING && vt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
              Te.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            }
            if (e.CUSTOM_ELEMENT_HANDLING && vt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
              Te.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            }
            if (e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean") {
              Te.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            }
            if (De) {
              Ie = false;
            }
            if (He) {
              Ve = true;
            }
            if (Xe) {
              Ne = O({}, D);
              je = [];
              if (Xe.html === true) {
                O(Ne, A);
                O(je, z);
              }
              if (Xe.svg === true) {
                O(Ne, P);
                O(je, M);
                O(je, B);
              }
              if (Xe.svgFilters === true) {
                O(Ne, E);
                O(je, M);
                O(je, B);
              }
              if (Xe.mathMl === true) {
                O(Ne, R);
                O(je, F);
                O(je, B);
              }
            }
            if (e.ADD_TAGS) {
              if (Ne === Oe) {
                Ne = C(Ne);
              }
              O(Ne, e.ADD_TAGS, ht);
            }
            if (e.ADD_ATTR) {
              if (je === Ce) {
                je = C(je);
              }
              O(je, e.ADD_ATTR, ht);
            }
            if (e.ADD_URI_SAFE_ATTR) {
              O(et, e.ADD_URI_SAFE_ATTR, ht);
            }
            if (e.FORBID_CONTENTS) {
              if (Ye === Ke) {
                Ye = C(Ye);
              }
              O(Ye, e.FORBID_CONTENTS, ht);
            }
            if (Ue) {
              Ne["#text"] = true;
            }
            if (Me) {
              O(Ne, ["html", "head", "body"]);
            }
            if (Ne.table) {
              O(Ne, ["tbody"]);
              delete Ae.tbody;
            }
            if (e.TRUSTED_TYPES_POLICY) {
              if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") {
                throw _("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
              }
              if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") {
                throw _("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
              }
              le = e.TRUSTED_TYPES_POLICY;
              ce = le.createHTML("");
            } else {
              if (le === undefined) {
                le = re(G, l);
              }
              if (le !== null && typeof ce == "string") {
                ce = le.createHTML("");
              }
            }
            if (i) {
              i(e);
            }
            bt = e;
          }
        };
        const yt = O({}, [...P, ...E, ...I]);
        const wt = O({}, [...R, ...L]);
        const kt = function (e) {
          let t = se(e);
          if (!t || !t.tagName) {
            t = {
              namespaceURI: it,
              tagName: "template"
            };
          }
          const n = h(e.tagName);
          const o = h(t.tagName);
          return !!st[e.namespaceURI] && (e.namespaceURI === ot ? t.namespaceURI === rt ? n === "svg" : t.namespaceURI === nt ? n === "svg" && (o === "annotation-xml" || ct[o]) : Boolean(yt[n]) : e.namespaceURI === nt ? t.namespaceURI === rt ? n === "math" : t.namespaceURI === ot ? n === "math" && dt[o] : Boolean(wt[n]) : e.namespaceURI === rt ? (t.namespaceURI !== ot || !!dt[o]) && (t.namespaceURI !== nt || !!ct[o]) && !wt[n] && (ut[n] || !yt[n]) : pt === "application/xhtml+xml" && !!st[e.namespaceURI]);
        };
        const _t = function (e) {
          f(o.removed, {
            element: e
          });
          try {
            se(e).removeChild(e);
          } catch (t) {
            Y(e);
          }
        };
        const St = function (e, t) {
          try {
            f(o.removed, {
              attribute: t.getAttributeNode(e),
              from: t
            });
          } catch (e) {
            f(o.removed, {
              attribute: null,
              from: t
            });
          }
          t.removeAttribute(e);
          if (e === "is") {
            if (Ve || He) {
              try {
                _t(t);
              } catch (e) {}
            } else {
              try {
                t.setAttribute(e, "");
              } catch (e) {}
            }
          }
        };
        const Nt = function (e) {
          let t = null;
          let n = null;
          if (Be) {
            e = "<remove></remove>" + e;
          } else {
            const t = g(e, /^[\r\n\t ]+/);
            n = t && t[0];
          }
          if (pt === "application/xhtml+xml" && it === rt) {
            e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>";
          }
          const o = le ? le.createHTML(e) : e;
          if (it === rt) {
            try {
              t = new q().parseFromString(o, pt);
            } catch (e) {}
          }
          if (!t || !t.documentElement) {
            t = de.createDocument(it, "template", null);
            try {
              t.documentElement.innerHTML = at ? ce : o;
            } catch (e) {}
          }
          const i = t.body || t.documentElement;
          if (e && n) {
            i.insertBefore(r.createTextNode(n), i.childNodes[0] || null);
          }
          if (it === rt) {
            return fe.call(t, Me ? "html" : "body")[0];
          } else if (Me) {
            return t.documentElement;
          } else {
            return i;
          }
        };
        const Ot = function (e) {
          return ue.call(e.ownerDocument || e, e, V.SHOW_ELEMENT | V.SHOW_COMMENT | V.SHOW_TEXT | V.SHOW_PROCESSING_INSTRUCTION | V.SHOW_CDATA_SECTION, null);
        };
        const jt = function (e) {
          return e instanceof Q && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof H) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
        };
        const Ct = function (e) {
          return typeof N == "function" && e instanceof N;
        };
        function Tt(e, t, n) {
          d(e, e => {
            e.call(o, t, n, bt);
          });
        }
        const At = function (e) {
          let t = null;
          Tt(he.beforeSanitizeElements, e, null);
          if (jt(e)) {
            _t(e);
            return true;
          }
          const n = ht(e.nodeName);
          Tt(he.uponSanitizeElement, e, {
            tagName: n,
            allowedTags: Ne
          });
          if (ze && e.hasChildNodes() && !Ct(e.firstElementChild) && k(/<[/\w!]/g, e.innerHTML) && k(/<[/\w!]/g, e.textContent)) {
            _t(e);
            return true;
          }
          if (e.nodeType === ee) {
            _t(e);
            return true;
          }
          if (ze && e.nodeType === te && k(/<[/\w]/g, e.data)) {
            _t(e);
            return true;
          }
          if (!Ne[n] || Ae[n]) {
            if (!Ae[n] && Et(n)) {
              if (Te.tagNameCheck instanceof RegExp && k(Te.tagNameCheck, n)) {
                return false;
              }
              if (Te.tagNameCheck instanceof Function && Te.tagNameCheck(n)) {
                return false;
              }
            }
            if (Ue && !Ye[n]) {
              const t = se(e) || e.parentNode;
              const n = ae(e) || e.childNodes;
              if (n && t) {
                for (let o = n.length - 1; o >= 0; --o) {
                  const r = $(n[o], true);
                  r.__removalCount = (e.__removalCount || 0) + 1;
                  t.insertBefore(r, ie(e));
                }
              }
            }
            _t(e);
            return true;
          }
          if (e instanceof j && !kt(e)) {
            _t(e);
            return true;
          } else if (n !== "noscript" && n !== "noembed" && n !== "noframes" || !k(/<\/no(script|embed|frames)/i, e.innerHTML)) {
            if (De && e.nodeType === J) {
              t = e.textContent;
              d([be, ge, ve], e => {
                t = v(t, e, " ");
              });
              if (e.textContent !== t) {
                f(o.removed, {
                  element: e.cloneNode()
                });
                e.textContent = t;
              }
            }
            Tt(he.afterSanitizeElements, e, null);
            return false;
          } else {
            _t(e);
            return true;
          }
        };
        const Pt = function (e, t, n) {
          if (qe && (t === "id" || t === "name") && (n in r || n in gt)) {
            return false;
          }
          if (Ie && !Pe[t] && k(xe, t)) ;else if (Ee && k(ye, t)) ;else if (!je[t] || Pe[t]) {
            if ((!Et(e) || (!(Te.tagNameCheck instanceof RegExp) || !k(Te.tagNameCheck, e)) && (!(Te.tagNameCheck instanceof Function) || !Te.tagNameCheck(e)) || (!(Te.attributeNameCheck instanceof RegExp) || !k(Te.attributeNameCheck, t)) && (!(Te.attributeNameCheck instanceof Function) || !Te.attributeNameCheck(t, e))) && (t !== "is" || !Te.allowCustomizedBuiltInElements || (!(Te.tagNameCheck instanceof RegExp) || !k(Te.tagNameCheck, n)) && (!(Te.tagNameCheck instanceof Function) || !Te.tagNameCheck(n)))) {
              return false;
            }
          } else if (et[t]) ;else if (k(Se, v(n, ke, ""))) ;else if (t !== "src" && t !== "xlink:href" && t !== "href" || e === "script" || x(n, "data:") !== 0 || !Ze[e]) {
            if (Re && !k(we, v(n, ke, ""))) ;else if (n) {
              return false;
            }
          }
          return true;
        };
        const Et = function (e) {
          return e !== "annotation-xml" && g(e, _e);
        };
        const It = function (e) {
          Tt(he.beforeSanitizeAttributes, e, null);
          const {
            attributes: t
          } = e;
          if (!t || jt(e)) {
            return;
          }
          const n = {
            attrName: "",
            attrValue: "",
            keepAttr: true,
            allowedAttributes: je,
            forceKeepAttr: undefined
          };
          let r = t.length;
          while (r--) {
            const i = t[r];
            const {
              name: a,
              namespaceURI: s,
              value: l
            } = i;
            const c = ht(a);
            const u = l;
            let f = a === "value" ? u : y(u);
            n.attrName = c;
            n.attrValue = f;
            n.keepAttr = true;
            n.forceKeepAttr = undefined;
            Tt(he.uponSanitizeAttribute, e, n);
            f = n.attrValue;
            if (!!Ge && (c === "id" || c === "name")) {
              St(a, e);
              f = We + f;
            }
            if (ze && k(/((--!?|])>)|<\/(style|title|textarea)/i, f)) {
              St(a, e);
              continue;
            }
            if (c === "attributename" && g(f, "href")) {
              St(a, e);
              continue;
            }
            if (n.forceKeepAttr) {
              continue;
            }
            if (!n.keepAttr) {
              St(a, e);
              continue;
            }
            if (!Le && k(/\/>/i, f)) {
              St(a, e);
              continue;
            }
            if (De) {
              d([be, ge, ve], e => {
                f = v(f, e, " ");
              });
            }
            const m = ht(e.nodeName);
            if (Pt(m, c, f)) {
              if (le && typeof G == "object" && typeof G.getAttributeType == "function") {
                if (s) ;else {
                  switch (G.getAttributeType(m, c)) {
                    case "TrustedHTML":
                      f = le.createHTML(f);
                      break;
                    case "TrustedScriptURL":
                      f = le.createScriptURL(f);
                  }
                }
              }
              if (f !== u) {
                try {
                  if (s) {
                    e.setAttributeNS(s, a, f);
                  } else {
                    e.setAttribute(a, f);
                  }
                  if (jt(e)) {
                    _t(e);
                  } else {
                    p(o.removed);
                  }
                } catch (t) {
                  St(a, e);
                }
              }
            } else {
              St(a, e);
            }
          }
          Tt(he.afterSanitizeAttributes, e, null);
        };
        const Rt = function e(t) {
          let n = null;
          const o = Ot(t);
          for (Tt(he.beforeSanitizeShadowDOM, t, null); n = o.nextNode();) {
            Tt(he.uponSanitizeShadowNode, n, null);
            At(n);
            It(n);
            if (n.content instanceof c) {
              e(n.content);
            }
          }
          Tt(he.afterSanitizeShadowDOM, t, null);
        };
        o.sanitize = function (e, t = {}) {
          let n = null;
          let r = null;
          let i = null;
          let s = null;
          at = !e;
          if (at) {
            e = "<!-->";
          }
          if (typeof e != "string" && !Ct(e)) {
            if (typeof e.toString != "function") {
              throw _("toString is not a function");
            }
            if (typeof (e = e.toString()) != "string") {
              throw _("dirty is not a string, aborting");
            }
          }
          if (!o.isSupported) {
            return e;
          }
          if (!Fe) {
            xt(t);
          }
          o.removed = [];
          if (typeof e == "string") {
            $e = false;
          }
          if ($e) {
            if (e.nodeName) {
              const t = ht(e.nodeName);
              if (!Ne[t] || Ae[t]) {
                throw _("root node is forbidden and cannot be sanitized in-place");
              }
            }
          } else if (e instanceof N) {
            n = Nt("<!---->");
            r = n.ownerDocument.importNode(e, true);
            if (r.nodeType === Z && r.nodeName === "BODY" || r.nodeName === "HTML") {
              n = r;
            } else {
              n.appendChild(r);
            }
          } else {
            if (!Ve && !De && !Me && e.indexOf("<") === -1) {
              if (le && Qe) {
                return le.createHTML(e);
              } else {
                return e;
              }
            }
            n = Nt(e);
            if (!n) {
              if (Ve) {
                return null;
              } else if (Qe) {
                return ce;
              } else {
                return "";
              }
            }
          }
          if (n && Be) {
            _t(n.firstChild);
          }
          const l = Ot($e ? e : n);
          while (i = l.nextNode()) {
            At(i);
            It(i);
            if (i.content instanceof c) {
              Rt(i.content);
            }
          }
          if ($e) {
            return e;
          }
          if (Ve) {
            if (He) {
              for (s = pe.call(n.ownerDocument); n.firstChild;) {
                s.appendChild(n.firstChild);
              }
            } else {
              s = n;
            }
            if (je.shadowroot || je.shadowrootmode) {
              s = me.call(a, s, true);
            }
            return s;
          }
          let u = Me ? n.outerHTML : n.innerHTML;
          if (Me && Ne["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && k(X, n.ownerDocument.doctype.name)) {
            u = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + u;
          }
          if (De) {
            d([be, ge, ve], e => {
              u = v(u, e, " ");
            });
          }
          if (le && Qe) {
            return le.createHTML(u);
          } else {
            return u;
          }
        };
        o.setConfig = function (e = {}) {
          xt(e);
          Fe = true;
        };
        o.clearConfig = function () {
          bt = null;
          Fe = false;
        };
        o.isValidAttribute = function (e, t, n) {
          if (!bt) {
            xt({});
          }
          const o = ht(e);
          const r = ht(t);
          return Pt(o, r, n);
        };
        o.addHook = function (e, t) {
          if (typeof t == "function") {
            f(he[e], t);
          }
        };
        o.removeHook = function (e, t) {
          if (t !== undefined) {
            const n = u(he[e], t);
            if (n === -1) {
              return undefined;
            } else {
              return m(he[e], n, 1)[0];
            }
          }
          return p(he[e]);
        };
        o.removeHooks = function (e) {
          he[e] = [];
        };
        o.removeAllHooks = function () {
          he = {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
          };
        };
        return o;
      }();
    }();
  },
  1428:
  /*!*******************************************************!*\
    !*** ./src/components/QuestionAudio/QuestionAudio.js ***!
    \*******************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var r;
    var i = n(/*! react */0);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! react-redux */15);
    var c = n(/*! react-sound */1499);
    var d = n.n(c);
    var u = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var p = n.n(u);
    var f = n(/*! ./QuestionAudio.css */1518);
    var m = n.n(f);
    function h(e) {
      return (h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function b(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (h(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (h(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), h(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function v(e, t) {
      return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function x(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = w(e);
        if (t) {
          var r = w(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return y(this, n);
      };
    }
    function y(e, t) {
      if (t && (h(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function w(e) {
      return (w = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    if (typeof window != "undefined" && typeof window.soundManager?.setup == "function") {
      window.soundManager.setup({
        debugMode: false,
        useConsole: false
      });
    }
    var k = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          v(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = x(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        (t = r.call(this)).state = {
          playSound: d.a.status.STOPPED,
          styles: {}
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "UNSAFE_componentWillReceiveProps",
        value: function (e) {
          this.setState({
            playSound: d.a.status.STOPPED
          });
        }
      }, {
        key: "playSound",
        value: function () {
          this.setState({
            playSound: d.a.status.PLAYING
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props.config.assetsDomain;
          var n = this.props.audioLink;
          if (n && typeof n == "string" && n.trim() !== "" && n.trim() !== "null" && n.trim() !== "undefined" && n.trim() !== "NaN" && (n.startsWith("http") || n.startsWith("/") || n.includes(".mp3") || n.includes(".wav") || n.includes(".m4a"))) {
            return b("div", {
              className: m.a.icon__audio_question,
              style: this.props.customStyle ? this.props.customStyle : null
            }, undefined, b("button", {
              type: "button",
              className: m.a.soundBtn,
              "aria-label": "Play audio",
              onClick: function () {
                return e.playSound();
              }
            }, undefined, b("img", {
              src: `${t}/img/2025/EN/VolumeLoud.svg`,
              alt: "Volume Icon",
              className: m.a.soundBtnIcon
            })), b(d.a, {
              playStatus: this.state.playSound,
              url: n
            }));
          } else {
            return null;
          }
        }
      }]) {
        g(t.prototype, n);
      }
      if (o) {
        g(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(i.Component);
    t.a = s()(Object(l.b)(function (e) {
      return {
        user: e.user,
        config: e.runtime.config
      };
    }, null), p()(m.a))(k);
  },
  1430:
  /*!**************************************************************!*\
    !*** ./src/routes/skill-practice/tv-dropdown/tvDropdown.css ***!
    \**************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./tvDropdown.css */1456);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1431:
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_shuffleSelf.js ***!
    \*********************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! ./_baseRandom */869);
    e.exports = function (e, t) {
      var n = -1;
      var r = e.length;
      var i = r - 1;
      for (t = t === undefined ? r : t; ++n < t;) {
        var a = o(n, i);
        var s = e[a];
        e[a] = e[n];
        e[n] = s;
      }
      e.length = t;
      return e;
    };
  },
  1432:
  /*!*************************************************************!*\
    !*** ./src/components/Question/shared/TvMatchingShared.css ***!
    \*************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./TvMatchingShared.css */1488);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1436:
  /*!**********************************************************************!*\
    !*** ./src/components/Question/shared/textDropdownSelect.helpers.js ***!
    \**********************************************************************/
  /*! exports provided: MENU_MAX_HEIGHT, textDropdownMenuStyle, textDropdownMenuContainerStyle, textDropdownWrapperStyle */
  /*! exports used: textDropdownMenuContainerStyle, textDropdownMenuStyle, textDropdownWrapperStyle */
  function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return o;
    });
    n.d(t, "a", function () {
      return r;
    });
    n.d(t, "c", function () {
      return i;
    });
    var o = {
      maxHeight: "min(60vh, 480px)",
      overflowY: "scroll",
      WebkitOverflowScrolling: "touch"
    };
    var r = {
      maxHeight: "min(60vh, 480px)"
    };
    var i = {
      display: "inline-block",
      minWidth: "120px",
      width: "max-content",
      maxWidth: "min(280px, calc(100vw - 32px))",
      verticalAlign: "middle"
    };
  },
  1437:
  /*!***********************************************!*\
    !*** ./src/components/AnswerBox/AnswerBox.js ***!
    \***********************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! ./AnswerBox.css */1470);
    var u = n.n(d);
    n(/*! ../QuestionBox/math-editor/mathquill */1503);
    function p(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function f(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return m(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return m(e, t);
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function m(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    t.a = s()(c()(u.a))(function (e) {
      var t = e.value;
      var n = e.isFocus;
      var o = e.onChange;
      var a = e.onTextEntryDone;
      var s = e.idBox;
      var l = e.questionIndex;
      var c = e.limitWidth;
      var d = e.id;
      var m = e.disabled;
      var h = f(Object(r.useState)(t || ""), 2);
      var b = h[0];
      var g = h[1];
      var v = Object(r.useRef)(null);
      Object(r.useEffect)(function () {
        if (n && !m && v.current) {
          var e;
          var t;
          var o = Date.now();
          var r = function () {
            var e = v.current;
            return !e || !!m || !!function (e) {
              if (!e || e.disabled || typeof window == "undefined") {
                return false;
              }
              var t = window.getComputedStyle(e);
              return t.visibility !== "hidden" && t.display !== "none";
            }(e) && (e.focus(), document.activeElement === e);
          };
          if (!r()) {
            e = requestAnimationFrame(function t() {
              if (!r() && !(Date.now() - o >= 800)) {
                e = requestAnimationFrame(t);
              }
            });
            t = setTimeout(r, 420);
          }
          return function () {
            if (e) {
              cancelAnimationFrame(e);
            }
            if (t) {
              clearTimeout(t);
            }
          };
        }
      }, [n, m]);
      Object(r.useEffect)(function () {
        if (t !== undefined) {
          g(t);
        }
      }, [t]);
      Object(r.useEffect)(function () {
        if (m && v.current && document.activeElement === v.current) {
          v.current.blur();
        }
      }, [m]);
      var x = c === undefined || c ? u.a.answerBox : u.a.answerBoxUnlimit;
      return p("div", {
        className: u.a.containerBox
      }, undefined, i.a.createElement("input", {
        ref: v,
        type: "text",
        autoComplete: "off",
        className: x,
        id: d,
        onChange: function (e) {
          if (!m) {
            var t = e.target.value;
            g(t);
            if (o) {
              o(t);
            }
            if (a) {
              a(s, t, l);
            }
            var n = (t.length + 1) * 8;
            if (n > 80) {
              e.target.style.width = `${n}px`;
            }
          }
        },
        disabled: !!m,
        readOnly: !!m,
        value: b
      }), p("span", {
        style: {
          display: "none"
        },
        className: d
      }));
    });
  },
  1438:
  /*!*****************************************!*\
    !*** ./src/helpers/pickItem.helpers.js ***!
    \*****************************************/
  /*! exports provided: buildPickItemChoices */
  /*! exports used: buildPickItemChoices */
  function (e, t, n) {
    "use strict";

    function o(e) {
      return function (e) {
        if (Array.isArray(e)) {
          return r(e);
        }
      }(e) || function (e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
          return Array.from(e);
        }
      }(e) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return r(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return r(e, t);
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function r(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    n.d(t, "a", function () {
      return l;
    });
    var i = /^(?:\s|&nbsp;)+|(?:\s|&nbsp;)+$/g;
    var a = function (e) {
      return function (e) {
        return String(e || "").replace(/<\/?p>/g, "");
      }(e).split("^^").map(function (e) {
        return e.replace(i, "");
      }).filter(Boolean);
    };
    var s = function (e) {
      var t = new Map();
      e.forEach(function (e, n) {
        var r = o(new Set(e));
        if (!(r.length < 2)) {
          var i = function (e) {
            return JSON.stringify(o(e).sort());
          }(r);
          if (!t.has(i)) {
            t.set(i, {
              values: r,
              indexes: []
            });
          }
          t.get(i).indexes.push(n);
        }
      });
      var n = new Map();
      t.forEach(function (e) {
        var t = e.values;
        var o = e.indexes;
        if (!(o.length < 2) && !(o.length > t.length)) {
          o.forEach(function (e, o) {
            return n.set(e, o === 0 ? t : null);
          });
        }
      });
      return n;
    };
    var l = function (e = []) {
      var t = (e || []).map(function (e) {
        return a(e && e.text);
      }).filter(function (e) {
        return e.length;
      });
      var n = s(t);
      var r = t.flatMap(function (e, t) {
        if (n.has(t)) {
          return n.get(t) || [];
        } else {
          return [e[0]];
        }
      });
      var i = new Set(r);
      var l = t.filter(function (e, t) {
        return !n.has(t);
      }).flatMap(function (e) {
        return e.slice(1);
      }).filter(function (e) {
        return !i.has(e) && (i.add(e), true);
      });
      return [].concat(o(r), o(l)).map(function (e) {
        return {
          text: e
        };
      });
    };
  },
  1439:
  /*!***************************************************************!*\
    !*** ./src/components/Question/TvMatching/TvMatchingBoard.js ***!
    \***************************************************************/
  /*! exports provided: getItemId, LINE_COLORS, buildAnswerHtml, default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! react-redux */15);
    var s = n(/*! lodash.flowright */14);
    var l = n.n(s);
    var c = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var d = n.n(c);
    var u = n(/*! dompurify */1426);
    var p = n.n(u);
    var f = n(/*! ../shared/TvMatchingShared.css */1432);
    var m = n.n(f);
    var h = n(/*! ../shared/dndCssZoom.helpers */1425);
    var b = n(/*! ./tvMatching.helpers */1423);
    function g(e) {
      return (g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function v(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function x(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          v(Object(n), true).forEach(function (t) {
            y(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          v(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function y(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (g(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (g(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (g(t) === "symbol") {
          return t;
        } else {
          return String(t);
        }
      }(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function w(e, t) {
      return O(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || S(e, t) || _();
    }
    function k(e) {
      return O(e) || function (e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
          return Array.from(e);
        }
      }(e) || S(e) || _();
    }
    function _() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function S(e, t) {
      if (e) {
        if (typeof e == "string") {
          return N(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return N(e, t);
        } else {
          return undefined;
        }
      }
    }
    function N(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    function O(e) {
      if (Array.isArray(e)) {
        return e;
      }
    }
    function j(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var C = ["#5ebc8a", "#d58750", "#7f92fa", "#fe7f2d", "#e74c3c", "#8e44ad"];
    var T = function (e) {
      return (e || "").replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/<p>&nbsp;<\/p>/g, "");
    };
    var A = function (e) {
      return p.a.sanitize(e || "", {
        USE_PROFILES: {
          html: true
        }
      });
    };
    var P = function (e, t = {}) {
      var n = t.allowImgClass;
      var o = T(e && e.textContent ? e.textContent : "");
      if (n) {
        o = o.replace(/<img/g, "<img class=\"img-responsive max_width_img\"");
      }
      return A(o);
    };
    function E(e) {
      var t = e.itemId;
      var n = e.side;
      var o = e.html;
      var r = e.nodeSrc;
      var a = e.isActive;
      var s = e.matchColor;
      var l = e.disabled;
      var c = e.setItemRef;
      var d = e.onPointerDown;
      var u = e.onPointerEnter;
      var p = e.onPointerLeave;
      var f = e.onKeySelect;
      var h = r ? j("img", {
        className: m.a.node,
        src: r,
        alt: "",
        draggable: false,
        "data-tv-node": "1"
      }) : j("span", {
        className: `${m.a.node} ${m.a.nodeFallback}`,
        "data-tv-node": "1",
        "aria-hidden": true
      });
      return i.a.createElement("div", {
        ref: function (e) {
          return c(n, t, e);
        },
        role: "button",
        tabIndex: l ? -1 : 0,
        "data-tv-side": n,
        "data-tv-id": t,
        className: [m.a.itemRow, n === "left" ? m.a.itemRowLeft : m.a.itemRowRight, a ? m.a.isActive : "", l ? m.a.disabled : ""].filter(Boolean).join(" "),
        onPointerDown: function (e) {
          if (!l) {
            d(n, t, e);
          }
        },
        onPointerEnter: function () {
          if (!l && u) {
            u(n, t);
          }
        },
        onPointerLeave: function () {
          if (!l && p) {
            p(n, t);
          }
        },
        onKeyDown: function (e) {
          if (!l && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            f(n, t);
          }
        }
      }, n === "right" ? h : null, j("div", {
        className: m.a.boxAnswer,
        style: s ? {
          borderColor: s,
          boxShadow: `0 5px 0 0 ${s}`
        } : undefined
      }, undefined, j("span", {
        className: m.a.boxAnswerText,
        dangerouslySetInnerHTML: {
          __html: o
        }
      })), n === "left" ? h : null);
    }
    function I(e, t, n) {
      if (!e) {
        return null;
      }
      var o = e.getBoundingClientRect();
      var r = Object(h.b)(e) || 1;
      return {
        x: (t - o.left) / r,
        y: (n - o.top) / r
      };
    }
    function R(e, t) {
      if (!e || !t) {
        return null;
      }
      var n = (t.querySelector("[data-tv-node]") || t).getBoundingClientRect();
      return I(e, n.left + n.width / 2, n.top + n.height / 2);
    }
    function L(e, t, n) {
      return I(e, t, n);
    }
    function D(e, t, n, o) {
      for (var r = Object.keys(e), i = null, a = 0; a < r.length; a += 1) {
        var s = r[a];
        var l = e[s];
        if (l) {
          var c = l.getBoundingClientRect();
          if (t >= c.left && t <= c.right && n >= c.top && n <= c.bottom) {
            var d = k(s.split("_"));
            var u = d[0];
            var p = {
              side: u,
              itemId: d.slice(1).join("_")
            };
            if (o && u === o) {
              return p;
            }
            i = p;
          }
        }
      }
      return i;
    }
    function z(e) {
      var t = e.leftItems;
      var n = e.rightItems;
      var o = e.matches;
      var a = e.onMatchesChange;
      var s = e.disabled;
      var l = e.resetKey;
      var c = e.assetsDomain;
      var d = Object(r.useRef)(null);
      var u = Object(r.useRef)({});
      var p = Object(r.useRef)(o || []);
      var f = Object(r.useRef)(null);
      var g = Object(r.useRef)(null);
      var v = w(Object(r.useState)([]), 2);
      var y = v[0];
      var k = v[1];
      var _ = w(Object(r.useState)(null), 2);
      var S = _[0];
      var N = _[1];
      var O = w(Object(r.useState)(null), 2);
      var T = O[0];
      var A = O[1];
      var I = w(Object(r.useState)(null), 2);
      var z = I[0];
      var M = I[1];
      var F = c ? `${c}/2026/img/IconNodeMatching.png` : "";
      var B = Object(r.useCallback)(function (e) {
        f.current = e;
        M(e);
      }, []);
      Object(r.useEffect)(function () {
        p.current = o || [];
      }, [o]);
      Object(r.useEffect)(function () {
        if (g.current && g.current.holdTimer) {
          clearTimeout(g.current.holdTimer);
        }
        f.current = null;
        M(null);
        N(null);
        A(null);
        g.current = null;
      }, [l]);
      var V = Object(r.useCallback)(function (e, t, n) {
        var o = `${e}_${t}`;
        if (n) {
          u.current[o] = n;
        } else {
          delete u.current[o];
        }
      }, []);
      var H = Object(r.useCallback)(function () {
        var e = d.current;
        if (e) {
          var t = (p.current || []).map(function (t) {
            var n = u.current[`left_${t.leftId}`];
            var o = u.current[`right_${t.rightId}`];
            var r = R(e, n);
            var i = R(e, o);
            if (r && i) {
              return {
                leftId: t.leftId,
                rightId: t.rightId,
                start: r,
                end: i
              };
            } else {
              return null;
            }
          }).filter(Boolean);
          k(t);
        } else {
          k([]);
        }
      }, []);
      var Q = Object(r.useCallback)(function () {
        (function (e) {
          if (e) {
            var t = e.querySelectorAll(`.${m.a.boxAnswer}`);
            if (t.length) {
              t.forEach(function (e) {
                e.style.height = "auto";
              });
              var n = 0;
              t.forEach(function (e) {
                n = Math.max(n, e.offsetHeight);
              });
              if (n > 0) {
                t.forEach(function (e) {
                  e.style.height = `${n}px`;
                });
              }
            }
          }
        })(d.current);
        H();
      }, [H]);
      Object(r.useLayoutEffect)(function () {
        Q();
      }, [t, n, o, Q]);
      Object(r.useEffect)(function () {
        var e = d.current;
        if (!e || typeof ResizeObserver == "undefined") {
          window.addEventListener("resize", Q);
          return function () {
            return window.removeEventListener("resize", Q);
          };
        }
        var t = new ResizeObserver(function () {
          Q();
        });
        t.observe(e);
        window.addEventListener("resize", Q);
        var n = [120, 400, 900].map(function (e) {
          return setTimeout(Q, e);
        });
        var o = Object(h.b)(e);
        var r = typeof MutationObserver != "undefined" ? new MutationObserver(function () {
          var t = Object(h.b)(e);
          if (Math.abs(t - o) > 0.001) {
            o = t;
            Q();
          }
        }) : null;
        if (r) {
          for (var i = e.parentElement, a = 0; i && a < 16;) {
            r.observe(i, {
              attributes: true,
              attributeFilter: ["style", "class"]
            });
            i = i.parentElement;
            a += 1;
          }
        }
        return function () {
          t.disconnect();
          window.removeEventListener("resize", Q);
          n.forEach(clearTimeout);
          if (r) {
            r.disconnect();
          }
        };
      }, [l, Q]);
      var q = Object(r.useCallback)(function (e) {
        p.current = e;
        if (typeof a == "function") {
          a(e);
        }
      }, [a]);
      var G = Object(r.useCallback)(function (e, t, n, o) {
        var r = e === "left" ? t : o;
        var i = e === "right" ? t : o;
        var a = (p.current || []).filter(function (e) {
          return e.leftId !== r && e.rightId !== i;
        }).concat([{
          leftId: r,
          rightId: i
        }]);
        B(null);
        A(null);
        N(null);
        q(a);
      }, [q, B]);
      var W = Object(r.useCallback)(function () {
        if (g.current && g.current.holdTimer) {
          clearTimeout(g.current.holdTimer);
        }
        g.current = null;
        N(null);
        A(null);
      }, []);
      var U = Object(r.useCallback)(function (e, t) {
        if (!s) {
          var n = f.current;
          var o = (p.current || []).find(function (n) {
            if (e === "left") {
              return n.leftId === t;
            } else {
              return n.rightId === t;
            }
          });
          if (n && n.side !== e) {
            G(n.side, n.itemId, e, t);
          } else {
            if (o) {
              var r = (p.current || []).filter(function (e) {
                return e !== o;
              });
              q(r);
            }
            B({
              side: e,
              itemId: t
            });
          }
        }
      }, [G, s, q, B]);
      var $ = Object(r.useCallback)(function (e, t) {
        var n = g.current;
        if (!n) {
          return false;
        }
        var o = n.side === "left" ? "right" : "left";
        var r = D(u.current, e, t, o);
        return !!r && r.side === o && (r.side !== n.side || r.itemId !== n.itemId) && (n.holdTimer && clearTimeout(n.holdTimer), G(n.side, n.itemId, r.side, r.itemId), g.current = null, true);
      }, [G]);
      var X = Object(r.useCallback)(function (e) {
        var t = g.current;
        if (t && t.pointerId === e.pointerId) {
          var n = e.clientX - t.startClientX;
          var o = e.clientY - t.startClientY;
          if (!t.moved && Math.hypot(n, o) >= 6) {
            t.moved = true;
          }
          t.lastClientX = e.clientX;
          t.lastClientY = e.clientY;
          if (t.lineReady) {
            var r = L(d.current, e.clientX, e.clientY);
            if (r) {
              N(function (e) {
                if (e) {
                  return x(x({}, e), {}, {
                    end: r
                  });
                } else {
                  return {
                    start: t.startPoint,
                    end: r,
                    side: t.side,
                    itemId: t.itemId
                  };
                }
              });
            }
          }
          var i = t.side === "left" ? "right" : "left";
          var a = D(u.current, e.clientX, e.clientY, i);
          if (a && a.side === i) {
            A(a);
          } else {
            A(null);
          }
        }
      }, []);
      var Y = Object(r.useCallback)(function (e) {
        var t = g.current;
        if (t && t.pointerId === e.pointerId) {
          var n = t.moved;
          var o = t.side;
          var r = t.itemId;
          var i = t.previousSelected;
          if (!$(e.clientX, e.clientY)) {
            W();
            if (n) {
              B({
                side: o,
                itemId: r
              });
            } else {
              B(i);
              U(o, r);
            }
          }
        }
      }, [W, U, B, $]);
      var K = Object(r.useCallback)(function (e) {
        var t = g.current;
        if (t && t.pointerId === e.pointerId) {
          W();
        }
      }, [W]);
      Object(r.useEffect)(function () {
        window.addEventListener("pointermove", X);
        window.addEventListener("pointerup", Y);
        window.addEventListener("pointercancel", K);
        return function () {
          window.removeEventListener("pointermove", X);
          window.removeEventListener("pointerup", Y);
          window.removeEventListener("pointercancel", K);
        };
      }, [K, X, Y]);
      var Z = Object(r.useCallback)(function (e, t, n) {
        if (!s && (n.button == null || n.button === 0)) {
          n.preventDefault();
          var o = R(d.current, u.current[`${e}_${t}`]);
          if (o) {
            if (g.current && g.current.holdTimer) {
              clearTimeout(g.current.holdTimer);
            }
            var r = n.pointerId;
            var i = setTimeout(function () {
              var n = g.current;
              if (n && n.pointerId === r) {
                n.lineReady = true;
                var i = L(d.current, n.lastClientX ?? n.startClientX, n.lastClientY ?? n.startClientY) || o;
                N({
                  start: o,
                  end: i,
                  side: e,
                  itemId: t
                });
              }
            }, 200);
            g.current = {
              side: e,
              itemId: t,
              pointerId: r,
              startClientX: n.clientX,
              startClientY: n.clientY,
              lastClientX: n.clientX,
              lastClientY: n.clientY,
              startPoint: o,
              moved: false,
              lineReady: false,
              holdTimer: i,
              previousSelected: f.current
            };
            B({
              side: e,
              itemId: t
            });
            A(null);
            N(null);
          }
        }
      }, [s, B]);
      var J = Object(r.useCallback)(function (e, t) {
        if (!s) {
          var n = f.current;
          if (n && n.side !== e) {
            A({
              side: e,
              itemId: t
            });
          }
        }
      }, [s]);
      var ee = Object(r.useCallback)(function (e, t) {
        A(function (n) {
          if (n && n.side === e && n.itemId === t) {
            return null;
          } else {
            return n;
          }
        });
      }, []);
      var te = C[(o || []).length % C.length] || "#5ebc8a";
      var ne = function (e, t) {
        return !!z && z.side === e && z.itemId === t || !!T && T.side === e && T.itemId === t;
      };
      var oe = function (e, t) {
        var n = (o || []).findIndex(function (n) {
          if (e === "left") {
            return n.leftId === t;
          } else {
            return n.rightId === t;
          }
        });
        if (n >= 0) {
          return C[n % C.length];
        } else {
          return "";
        }
      };
      return i.a.createElement("div", {
        className: `${m.a.matchQuestionContainer} ${S ? m.a.isDragging : ""}`,
        ref: d
      }, j("div", {
        className: m.a.matchQuestionBoxGroup
      }, undefined, j("div", {
        className: m.a.matchQuestionBox
      }, undefined, t.map(function (e) {
        var t = Object(b.b)(e);
        return j(E, {
          itemId: t,
          side: "left",
          html: P(e, {
            allowImgClass: true
          }),
          nodeSrc: F,
          isActive: ne("left", t),
          matchColor: oe("left", t),
          disabled: s,
          setItemRef: V,
          onPointerDown: Z,
          onPointerEnter: J,
          onPointerLeave: ee,
          onKeySelect: U
        }, `left_${t}`);
      })), j("div", {
        className: m.a.matchQuestionBox
      }, undefined, n.map(function (e) {
        var t = Object(b.b)(e);
        return j(E, {
          itemId: t,
          side: "right",
          html: P(e),
          nodeSrc: F,
          isActive: ne("right", t),
          matchColor: oe("right", t),
          disabled: s,
          setItemRef: V,
          onPointerDown: Z,
          onPointerEnter: J,
          onPointerLeave: ee,
          onKeySelect: U
        }, `right_${t}`);
      }))), j("div", {
        className: m.a.matchQuestionLine
      }, undefined, j("svg", {
        width: "100%",
        height: "100%"
      }, undefined, y.map(function (e, t) {
        return j("line", {
          className: m.a.matchLine,
          x1: e.start.x,
          y1: e.start.y,
          x2: e.end.x,
          y2: e.end.y,
          stroke: C[t % C.length]
        }, `${e.leftId}_${e.rightId}`);
      }), S && j("line", {
        className: `${m.a.matchLine} ${m.a.previewLine}`,
        x1: S.start.x,
        y1: S.start.y,
        x2: S.end.x,
        y2: S.end.y,
        stroke: te
      }))));
    }
    E.defaultProps = {
      nodeSrc: "",
      isActive: false,
      matchColor: "",
      disabled: false,
      onPointerEnter: undefined,
      onPointerLeave: undefined
    };
    z.defaultProps = {
      matches: [],
      onMatchesChange: undefined,
      disabled: false,
      resetKey: "default",
      assetsDomain: ""
    };
    t.a = l()(Object(a.b)(function (e) {
      return {
        assetsDomain: e.runtime && e.runtime.config && e.runtime.config.assetsDomain || ""
      };
    }), d()(m.a))(z);
  },
  1440:
  /*!***********************************************************************************!*\
    !*** ./src/components/Question/shared/DndAnswerChip/DndAnswerChip.js + 1 modules ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Question/shared/DndAnswerChip/DndAnswerChip.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/isomorphic-style-loader/lib/withStyles.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
  function (e, t, n) {
    "use strict";

    var o = n(0);
    var r = n.n(o);
    var i = n(9);
    var a = n.n(i);
    var s = n(1466);
    var l = n.n(s);
    var c = "(?:\\s|&nbsp;|<br\\s*/?>)";
    var d = `(?:${c}|<p[^>]*>${c}*</p>|<div[^>]*>${c}*</div>)`;
    var u = new RegExp(`^${d}+`, "i");
    var p = new RegExp(`${d}+\$`, "i");
    var f = new RegExp(`(<(?:p|div)[^>]*>)${c}+`, "gi");
    var m = new RegExp(`${c}+(</(?:p|div)>)`, "gi");
    function h(e) {
      var t;
      var n = e == null ? "" : String(e);
      do {
        t = n;
        n = n.replace(f, "$1").replace(m, "$1").replace(u, "").replace(p, "");
      } while (n !== t);
      return n;
    }
    var b;
    var g = ["active", "dragging", "disabled", "html", "className", "children", "innerRef", "asOverlay"];
    function v() {
      return (v = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) {
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              e[o] = n[o];
            }
          }
        }
        return e;
      }).apply(this, arguments);
    }
    function x(e, t, n, o) {
      b ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: b,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function y(e, t) {
      if (e == null) {
        return {};
      }
      var n;
      var o;
      var r = function (e, t) {
        if (e == null) {
          return {};
        }
        var n;
        var o;
        var r = {};
        var i = Object.keys(e);
        for (o = 0; o < i.length; o++) {
          n = i[o];
          if (!(t.indexOf(n) >= 0)) {
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) {
          n = i[o];
          if (!(t.indexOf(n) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(e, n)) {
              r[n] = e[n];
            }
          }
        }
      }
      return r;
    }
    function w(e) {
      var t = e.active;
      var n = e.dragging;
      var o = e.disabled;
      var i = e.html;
      var a = e.className;
      var s = e.children;
      var c = e.innerRef;
      var d = e.asOverlay;
      var u = y(e, g);
      var p = [l.a.chip, t ? l.a.active : l.a.inactive, n ? l.a.dragging : "", o ? l.a.disabled : "", d ? l.a.overlay : "", a].filter(Boolean).join(" ");
      return r.a.createElement("div", v({
        ref: c,
        className: p
      }, u), i != null ? x("span", {
        dangerouslySetInnerHTML: {
          __html: h(i)
        }
      }) : s);
    }
    w.defaultProps = {
      active: true,
      dragging: false,
      disabled: false,
      html: null,
      className: "",
      children: null,
      innerRef: null,
      asOverlay: false
    };
    t.a = a()(l.a)(w);
  },
  1442:
  /*!*************************************************************!*\
    !*** ./src/components/Question/shared/ResequenceShared.css ***!
    \*************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./ResequenceShared.css */1465);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1443:
  /*!************************************************!*\
    !*** ./node_modules/lodash/_isIterateeCall.js ***!
    \************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! ./eq */227);
    var r = n(/*! ./isArrayLike */171);
    var i = n(/*! ./_isIndex */202);
    var a = n(/*! ./isObject */123);
    e.exports = function (e, t, n) {
      if (!a(n)) {
        return false;
      }
      var s = typeof t;
      return !!(s == "number" ? r(n) && i(t, n.length) : s == "string" && t in n) && o(n[t], e);
    };
  },
  1444:
  /*!**********************************************!*\
    !*** ./node_modules/lodash/_arrayShuffle.js ***!
    \**********************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! ./_copyArray */868);
    var r = n(/*! ./_shuffleSelf */1431);
    e.exports = function (e) {
      return r(o(e));
    };
  },
  1445:
  /*!*********************************************!*\
    !*** ./node_modules/lodash/_baseShuffle.js ***!
    \*********************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! ./_shuffleSelf */1431);
    var r = n(/*! ./values */511);
    e.exports = function (e) {
      return o(r(e));
    };
  },
  1446:
  /*!****************************************************************************!*\
    !*** ./src/routes/skill-practice/text-entry-practice/TextEntryPractice.js ***!
    \****************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i = n(/*! react */0);
    var a = n.n(i);
    var s = n(/*! lodash.flowright */14);
    var l = n.n(s);
    var c = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var d = n.n(c);
    var u = n(/*! lodash/forEach */330);
    var p = n.n(u);
    var f = n(/*! ./textEntryPractice.css */1468);
    var m = n.n(f);
    var h = n(/*! ../../../components/AnswerBox/AnswerBox */1437);
    var b = n(/*! ../helper/practice.helper */1421);
    var g = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    function v(e) {
      return (v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function x(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function w(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          y(Object(n), true).forEach(function (t) {
            C(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          y(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, T(o.key), o);
      }
    }
    function _(e, t) {
      return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function S(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = j(e);
        if (t) {
          var r = j(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return N(this, n);
      };
    }
    function N(e, t) {
      if (t && (v(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return O(e);
    }
    function O(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function j(e) {
      return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function C(e, t, n) {
      if ((t = T(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function T(e) {
      var t = function (e, t) {
        if (v(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (v(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (v(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var A = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          _(e, t);
        }
      })(a, e);
      var t;
      var n;
      var r;
      var i = S(a);
      function a(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, a);
        C(O(t = i.call(this, e)), "handleAnswerChange", function (e, n) {
          if (!t.props.disabled) {
            t.setState(function (t) {
              return {
                answers: w(w({}, t.answers), {}, C({}, e, n))
              };
            });
          }
        });
        t.state = {
          width: 1100,
          height: 500,
          isShowLong: false,
          answers: {}
        };
        return t;
      }
      t = a;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "findIndices",
        value: function (e) {
          if (!e) {
            return [];
          }
          for (var t = e.replace(/<div class="long-text">((.|\n)*)?<\/div>/, ""), n = [], o = 0; o < t.length; o++) {
            if (t[o] === "{" && t[o + 1] === "}") {
              n.push(o);
            }
          }
          return n;
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e;
          var t = this;
          var n = (e = this.props.data.content) === null || e === undefined ? undefined : e.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          if (n) {
            return x("div", {
              className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
            }, undefined, x("div", {
              className: "long-text-toggle-btn",
              onClick: function () {
                return t.setState({
                  isShowLong: !t.state.isShowLong
                });
              }
            }, undefined, "Bấm vào đây để đọc đoạn văn", " "), (this.state.isShowLong || this.props.showSolution) && x("div", {
              dangerouslySetInnerHTML: {
                __html: n[0]
              }
            }));
          } else {
            return null;
          }
        }
      }, {
        key: "generateQuestion",
        value: function () {
          var e = this;
          if (!this.props.data.content) {
            return [];
          }
          var t = this.props.data.content.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "");
          var n = this.findIndices(t);
          var o = !!this.props.disabled;
          var r = [];
          p()(n, function (i, a) {
            if (a === 0) {
              r.push({
                type: "text",
                content: t.slice(0, i)
              });
              r.push({
                type: "input",
                content: x(h.a, {
                  isFocus: !o,
                  id: `answerbox_${a}`,
                  grade: e.props.grade,
                  value: e.state.answers[a] || "",
                  onChange: function (t) {
                    return e.handleAnswerChange(a, t);
                  },
                  disabled: o
                })
              });
            } else {
              r.push({
                type: "text",
                content: t ? t.slice(n[a - 1] + 2, i) : ""
              });
              r.push({
                type: "input",
                content: x(h.a, {
                  id: `answerbox_${a}`,
                  grade: e.props.grade,
                  value: e.state.answers[a] || "",
                  onChange: function (t) {
                    return e.handleAnswerChange(a, t);
                  },
                  disabled: o
                })
              });
            }
            r = e.handleFinalIndex(r, n, t, i, a);
          });
          return r;
        }
      }, {
        key: "handleFinalIndex",
        value: function (e, t, n, o, r) {
          if (r === t.length - 1) {
            e.push({
              type: "text",
              content: n ? n.slice(o + 2) : ""
            });
          }
          return e;
        }
      }, {
        key: "handleEnter",
        value: function () {
          if (this.props.onEnterButton) {
            this.props.onEnterButton();
          }
        }
      }, {
        key: "generateElement",
        value: function (e, t) {
          if (e.type === "input") {
            return x("div", {
              className: "display-inlineblock"
            }, t, e.content);
          } else {
            e.content = e.content ? e.content.replace(/<br \/>/g, "</span><br/><span>").replace(/<br>/g, "</span><br><span>").replace("<img", "<img class=\"img-responsive\"") : "";
            if (e.content) {
              return x("span", {
                dangerouslySetInnerHTML: {
                  __html: e.content.replace(/<p>/g, "").replace(/<p class="spe_ques">/g, "")
                }
              }, t);
            } else {
              return o ||= x("span", {});
            }
          }
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = this;
          var t = this.findIndices(this.props.data.content).map(function (t, n) {
            var o = e.state.answers[n] || "";
            return {
              sequenceId: n + 1,
              textInput: Object(b.c)(o)
            };
          });
          return {
            id: this.props.data._id,
            listAnswers: t
          };
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return x("div", {}, undefined, x("div", {
            className: "row"
          }, undefined, x("div", {
            className: "col-md-12"
          }, undefined, x("div", {
            className: `panel ${this.props.hasBorder ? "practice-question-text panel-primary " : ""}`
          }, undefined, x("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && x(g.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.generateQuestion().map(function (t, n) {
            return e.generateElement(t, n);
          }))))));
        }
      }]) {
        k(t.prototype, n);
      }
      if (r) {
        k(t, r);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(a.a.Component);
    C(A, "defaultProps", {
      hasBorder: true,
      disabled: false
    });
    t.a = l()(d()(m.a))(A);
  },
  1447:
  /*!**********************************************************************************!*\
    !*** ./src/routes/skill-practice/text-dropdown-practice/TextDropdownPractice.js ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! lodash/forEach */330);
    var u = n.n(d);
    var p = n(/*! lodash/shuffle */1422);
    var f = n.n(p);
    var m = n(/*! react-select */169);
    var h = n(/*! ./textDropdownPractice.css */1472);
    var b = n.n(h);
    var g = n(/*! ../helper/practice.helper */1421);
    var v = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var x = n(/*! ../../../components/Question/shared/textDropdownSelect.helpers */1436);
    function y(e) {
      return (y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function w(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (y(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (y(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), y(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function _(e, t) {
      return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function S(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = O(e);
        if (t) {
          var r = O(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return N(this, n);
      };
    }
    function N(e, t) {
      if (t && (y(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function O(e) {
      return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var j = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          _(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = S(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        (t = r.call(this, e)).state = {
          lstAnswersRendered: []
        };
        var n = [];
        u()(t.props.data.textDropdownAnswers, function (e, t) {
          n[t] = "";
          u()(e.list, function (e) {
            if (e.selected) {
              n[t] = e.value;
            }
          });
        });
        t.state = {
          isAnswered: false,
          isAnsweredTrue: false,
          selected: true,
          width: 1100,
          height: 500,
          droplistSelect: n,
          isShowLong: false
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return w("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, w("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? w("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "handleZeroIndex",
        value: function (e, t, n, o) {
          var r = this;
          e.push({
            type: "text",
            content: t ? t.substr(0, n) : ""
          });
          var i = this.props.data.textDropdownAnswers[o] ? f()(this.props.data.textDropdownAnswers[o].list).map(function (e) {
            return {
              value: e.text,
              label: e.text
            };
          }) : [];
          e.push({
            type: "select",
            content: w(m.a, {
              name: `droplist_${o}`,
              searchable: false,
              clearable: false,
              placeholder: "Chọn",
              options: i,
              value: this.state.droplistSelect[o] ? this.state.droplistSelect[o] : "",
              onChange: function (e) {
                var t = r.state.droplistSelect;
                t[o] = e ? e.value : "";
                r.setState({
                  selected: true,
                  droplistSelect: t
                });
              },
              optionRenderer: function (e) {
                return w("span", {
                  dangerouslySetInnerHTML: {
                    __html: Object(g.c)(e.label)
                  }
                });
              },
              valueRenderer: function (e) {
                return w("span", {
                  dangerouslySetInnerHTML: {
                    __html: Object(g.c)(e.label)
                  }
                });
              },
              menuStyle: x.b,
              menuContainerStyle: x.a,
              wrapperStyle: x.c
            })
          });
          return e;
        }
      }, {
        key: "handleOtherIndex",
        value: function (e, t, n, o, r) {
          var i = this;
          e.push({
            type: "text",
            content: t ? t.substr(n[r - 1] + 2, o - n[r - 1] - 2) : ""
          });
          var a = this.props.data.textDropdownAnswers[r] ? f()(this.props.data.textDropdownAnswers[r].list).map(function (e) {
            return {
              value: e.text,
              label: e.text
            };
          }) : [];
          e.push({
            type: "select",
            content: w(m.a, {
              name: "form-field-name",
              searchable: false,
              clearable: false,
              placeholder: "Chọn",
              options: a,
              value: this.state.droplistSelect[r] ? this.state.droplistSelect[r] : "",
              onChange: function (e) {
                var t = i.state.droplistSelect;
                t[r] = e ? e.value : "";
                i.setState({
                  selected: true,
                  droplistSelect: t
                });
              },
              optionRenderer: function (e) {
                return w("span", {
                  dangerouslySetInnerHTML: {
                    __html: Object(g.c)(e.label)
                  }
                });
              },
              valueRenderer: function (e) {
                return w("span", {
                  dangerouslySetInnerHTML: {
                    __html: Object(g.c)(e.label)
                  }
                });
              },
              menuStyle: x.b,
              menuContainerStyle: x.a,
              wrapperStyle: x.c
            })
          });
          return e;
        }
      }, {
        key: "generateQuestion",
        value: function () {
          var e = this;
          var t = this.props.data.content;
          var n = [];
          for (var o = t ? t.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/<p>(\s)*<\/p>/g, "").replace(/<\/p>(\s)*<p>/g, "</p><p>").replace(/<p>/g, "").replace(/<\/p>/g, "<br/>") : "", r = 0; r < o.length; r++) {
            if (o[r] === "{" && o[r + 1] === "}") {
              n.push(r);
            }
          }
          var i = [];
          u()(n, function (t, r) {
            i = r === 0 ? e.handleZeroIndex(i, o, t, r) : e.handleOtherIndex(i, o, n, t, r);
            if (r === n.length - 1) {
              i.push({
                type: "text",
                content: o ? o.substr(t + 2) : ""
              });
            }
          });
          return i;
        }
      }, {
        key: "generateElement",
        value: function (e, t) {
          if (e.type === "select") {
            return w("div", {
              className: "display-inlineblock-select"
            }, t, e.content);
          } else {
            return w("span", {
              className: `${t > 0 ? "display-inlinegrid-ipad" : ""}`,
              dangerouslySetInnerHTML: {
                __html: e.content ? Object(g.c)(e.content.replace("<p>", "").replace("<img", "<img class=\"img-responsive\"")) : ""
              }
            }, t);
          }
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = [];
          this.state.droplistSelect.forEach(function (t, n) {
            e.push({
              sequenceId: n + 1,
              dropDownSelected: t
            });
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return w("div", {}, undefined, w("div", {
            className: "row"
          }, undefined, w("div", {
            className: "col-md-12"
          }, undefined, w("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, w("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && w(v.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.generateQuestion().map(function (t, n) {
            return e.generateElement(t, n);
          }))))));
        }
      }]) {
        k(t.prototype, n);
      }
      if (o) {
        k(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(i.a.Component);
    t.a = s()(c()(b.a))(j);
  },
  1448:
  /*!*************************************************************************!*\
    !*** ./src/routes/skill-practice/fraction-practice/FractionPractice.js ***!
    \*************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! ./fractionPractice.css */1474);
    var u = n.n(d);
    var p = n(/*! ../../../resources/fnHelpers/fractionView.helpers */1502);
    var f = n(/*! ../../../resources/fnHelpers/textEntryQsView.helpers */122);
    var m = n(/*! ../helper/practice.helper */1421);
    var h = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    function b(e) {
      return (b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function g(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function v(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (b(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (b(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), b(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function x(e, t) {
      return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function y(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = k(e);
        if (t) {
          var r = k(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return w(this, n);
      };
    }
    function w(e, t) {
      if (t && (b(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var S = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          x(e, t);
        }
      })(a, e);
      var t;
      var n;
      var o;
      var r = y(a);
      function a(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, a);
        (t = r.call(this, e)).state = {
          width: 1100,
          height: 500,
          isShowLong: false
        };
        return t;
      }
      t = a;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
          this.syncInputDisabled();
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          if (e.disabled !== this.props.disabled) {
            this.syncInputDisabled();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "syncInputDisabled",
        value: function () {
          if (typeof document != "undefined") {
            var e = !!this.props.disabled;
            var t = this.fractionRoot;
            if (t) {
              t.querySelectorAll("input[type=\"text\"]").forEach(function (t) {
                t.disabled = e;
                t.readOnly = e;
                if (e && document.activeElement === t) {
                  t.blur();
                }
              });
            }
          }
        }
      }, {
        key: "renderText",
        value: function (e, t) {
          if (Object(f.a)("span", e)) {
            return g("span", {
              dangerouslySetInnerHTML: {
                __html: e
              }
            });
          }
          if (!Object(f.a)("{", e)) {
            return e;
          }
          var n = "fraction_" + t;
          return g("span", {
            dangerouslySetInnerHTML: {
              __html: e ? e.replace("{}", `<input id="${n}"   autoComplete="off" style="max-width: 60px; text-align: center;margin: 2px!important;border-radius: 3px!important;
      border: 1px solid #999!important;padding: 5px !important;" type="text" />`) : ""
            }
          });
        }
      }, {
        key: "generateQuestion",
        value: function (e) {
          var t = this;
          if (!e) {
            return null;
          }
          var n = Object(p.b)(e);
          var o = 0;
          return n.map(function (e, n) {
            var r = e.type;
            var i = e.content;
            if (r === "TEXT") {
              return g("span", {
                dangerouslySetInnerHTML: {
                  __html: i
                },
                className: u.a.fractionViewText
              }, `txt${n}`);
            }
            if (r === "FRACTION") {
              var a = i && Object(p.a)(i, o);
              var s = a.numerator;
              var l = a.denominator;
              var c = a.returnIndex;
              o = c;
              return g("table", {
                className: u.a.fractionViewTable
              }, n, g("tbody", {}, undefined, g("tr", {}, undefined, s && s.map(function (e, n) {
                if (e.type === "WHOLE_NUMBER") {
                  return g("td", {
                    rowSpan: 2,
                    valign: "middle",
                    className: u.a.fractionViewWhole
                  }, `${n}nbPr`, t.renderText(e.content, e.id));
                } else if (e.type === "SIGN") {
                  return g("td", {
                    rowSpan: 2,
                    valign: "middle",
                    className: u.a.fractionViewSign
                  }, `${n}signPr`, e.content);
                } else {
                  return g("td", {
                    className: u.a.fractionViewNormalTd
                  }, `${n}df`, t.renderText(e.content, e.id));
                }
              })), g("tr", {}, undefined, l && l.map(function (e, n) {
                return g("td", {
                  className: u.a.fractionViewDeno
                }, `${n}deno`, t.renderText(e.content, e.id));
              }))));
            }
          });
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = [];
          for (var t = document.getElementsByClassName("fraction_vioedu")[0].getElementsByTagName("input").length, n = [], o = 0; o < t; o++) {
            if (document.getElementsByClassName("fraction_vioedu")[0].getElementsByTagName("input")[o].getAttribute("id")) {
              n.push(document.getElementsByClassName("fraction_vioedu")[0].getElementsByTagName("input")[o].getAttribute("id"));
            }
          }
          (n = _.sortBy(n)).map(function (t, n) {
            e.push({
              sequenceId: n + 1,
              textInput: Object(m.c)(document.getElementById(t).value)
            });
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return g("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, g("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? g("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return i.a.createElement("div", {
            ref: function (t) {
              e.fractionRoot = t;
            }
          }, g("div", {
            className: "row"
          }, undefined, g("div", {
            className: "col-md-12"
          }, undefined, g("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, g("div", {
            className: "panel-body line-height-25 fraction_vioedu"
          }, undefined, this.props.data.videoUrl && g(h.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.props.data.content ? this.generateQuestion(this.props.data.content.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace("<img", "<img class=\"img-responsive\"").replace(/&nbsp;/g, " ")) : "")))));
        }
      }]) {
        v(t.prototype, n);
      }
      if (o) {
        v(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(i.a.Component);
    t.a = s()(c()(u.a))(S);
  },
  1449:
  /*!**********************************************************************************!*\
    !*** ./src/routes/skill-practice/highschool-single-practice/HSSinglePractice.js ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! lodash */152);
    var u = n.n(d);
    var p = n(/*! ./hsSinglePractice.css */1476);
    var f = n.n(p);
    var m = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var h = n(/*! ../../../resources/fnHelpers/question.helpers */1433);
    var b = n(/*! ../../../components/Question/shared/ChoiceAnswerOption */1434);
    function g(e) {
      return (g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function v(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (g(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (g(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), g(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function y(e, t) {
      return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function w(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = _(e);
        if (t) {
          var r = _(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return k(this, n);
      };
    }
    function k(e, t) {
      if (t && (g(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function _(e) {
      return (_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var S = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          y(e, t);
        }
      })(a, e);
      var t;
      var n;
      var o;
      var r = w(a);
      function a(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, a);
        (t = r.call(this, e)).state = {
          selectedValue: "",
          shuffleAnswer: [],
          answerColumnNo: 0,
          isShowLong: false
        };
        return t;
      }
      t = a;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
          if (!this.state.shuffleAnswer.length) {
            this.setState({
              shuffleAnswer: this.props.data && this.props.data.grade !== 1 ? u.a.shuffle(this.props.data.answers) : this.props.data.answers,
              answerColumnNo: this.props.data.answerColumnNo
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "onSelected",
        value: function (e) {
          this.setState({
            selectedValue: e
          });
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return v("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, v("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? v("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = [];
          if (this.state.selectedValue) {
            e.push({
              selectedId: this.state.selectedValue
            });
          }
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "getImageLayout",
        value: function () {
          return Object(b.b)(this.state.shuffleAnswer.map(function (e) {
            return e.text;
          }), Object(b.c)(this.state.shuffleAnswer.length, this.state.answerColumnNo));
        }
      }, {
        key: "renderAnswers",
        value: function (e) {
          var t = this;
          return this.state.shuffleAnswer.map(function (n, o) {
            var r = t.state.selectedValue === n._id;
            return v("div", {
              className: e.itemClass || `${Object(h.a)(t.state.shuffleAnswer, false, t.state.answerColumnNo)} ${t.props.isSubQuestion ? f.a.display_answer_subQuestion_container : ""}`
            }, o, v("div", {
              className: ` ${f.a.answerPadding}`
            }, undefined, v(b.a, {
              variant: "single",
              selected: r,
              disabled: !!t.props.disabled,
              html: n.text,
              imageSrc: e.imageSrcs[o],
              imageAlt: `Đáp án ${o + 1}`,
              name: `single-choice-${t.props.data && t.props.data._id}`,
              value: n._id,
              onClick: function () {
                return t.onSelected(n._id);
              }
            })));
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this.getImageLayout();
          return i.a.createElement("div", this.props.isSubQuestion ? {
            style: {
              width: "100%"
            }
          } : {}, v("div", {
            className: "row"
          }, undefined, v("div", {
            className: "col-md-12"
          }, undefined, v("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, this.props.data.videoUrl && v(m.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), v("div", {
            className: "panel-body",
            dangerouslySetInnerHTML: {
              __html: this.props.data.content ? this.props.data.content.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace("<img", "<img class=\"img-responsive\"") : ""
            }
          })))), v("div", {
            className: `row choice-answer-grid-2026 ${e.gridClass} ${this.props.isSubQuestion ? f.a.display_answer_subQuestion_container : ""}`
          }, undefined, this.renderAnswers(e)));
        }
      }]) {
        x(t.prototype, n);
      }
      if (o) {
        x(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(i.a.Component);
    t.a = s()(c()(f.a))(S);
  },
  1450:
  /*!**************************************************************************************!*\
    !*** ./src/routes/skill-practice/highschool-multiple-practice/HSMultiplePractice.js ***!
    \**************************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! lodash */152);
    var u = n.n(d);
    var p = n(/*! ./hsMultiplePractice.css */1478);
    var f = n.n(p);
    var m = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var h = n(/*! ../../../resources/fnHelpers/question.helpers */1433);
    var b = n(/*! ../../../components/Question/shared/ChoiceAnswerOption */1434);
    function g(e) {
      return (g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function v(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (g(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (g(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), g(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function y(e, t) {
      return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function w(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = _(e);
        if (t) {
          var r = _(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return k(this, n);
      };
    }
    function k(e, t) {
      if (t && (g(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function _(e) {
      return (_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var S = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          y(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = w(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        (t = r.call(this, e)).state = {
          selectedValues: [],
          shuffleAnswer: [],
          answerColumnNo: 0,
          isShowLong: false
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
          if (!this.state.shuffleAnswer.length) {
            this.setState({
              shuffleAnswer: this.props.data && this.props.data.grade !== 1 ? u.a.shuffle(this.props.data.answers) : this.props.data.answers,
              answerColumnNo: this.props.data.answerColumnNo
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "onSelected",
        value: function (e) {
          var t = this.state.selectedValues;
          if (t && t.includes(e)) {
            var n = t ? t.indexOf(e) : -1;
            if (n !== -1) {
              t.splice(n, 1);
            }
          } else {
            t.push(e);
          }
          this.setState({
            selectedValues: t
          });
        }
      }, {
        key: "isChecked",
        value: function (e) {
          return this.state.selectedValues && this.state.selectedValues.includes(e);
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = [];
          this.state.selectedValues.forEach(function (t) {
            if (t) {
              e.push({
                selectedId: t
              });
            }
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return v("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, v("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? v("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "getImageLayout",
        value: function () {
          return Object(b.b)(this.state.shuffleAnswer.map(function (e) {
            return e.text;
          }), this.state.answerColumnNo);
        }
      }, {
        key: "renderAnswers",
        value: function (e) {
          var t = this;
          return this.state.shuffleAnswer.map(function (n, o) {
            var r = t.isChecked(n._id);
            return v("div", {
              className: e.itemClass || Object(h.a)(t.state.shuffleAnswer, false, t.state.answerColumnNo)
            }, o, v("div", {
              className: ` ${f.a.answerPadding}`
            }, undefined, v(b.a, {
              variant: "multiple",
              selected: r,
              disabled: !!t.props.disabled,
              html: n.text,
              imageSrc: e.imageSrcs[o],
              imageAlt: `Đáp án ${o + 1}`,
              name: `multiple-choice-${t.props.data && t.props.data._id}`,
              value: n._id,
              onClick: function () {
                return t.onSelected(n._id);
              }
            })));
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this.getImageLayout();
          return v("div", {}, undefined, v("div", {
            className: "row"
          }, undefined, v("div", {
            className: "col-md-12"
          }, undefined, v("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, this.props.data.videoUrl && v(m.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), v("div", {
            className: "panel-body",
            dangerouslySetInnerHTML: {
              __html: this.props.data.content ? this.props.data.content.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace("<img", "<img class=\"img-responsive\"") : ""
            }
          })))), v("div", {
            className: `row choice-answer-grid-2026 ${e.gridClass}`
          }, undefined, this.renderAnswers(e)));
        }
      }]) {
        x(t.prototype, n);
      }
      if (o) {
        x(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(i.a.Component);
    t.a = s()(c()(f.a))(S);
  },
  1451:
  /*!*********************************************************!*\
    !*** ./src/routes/skill-practice/pick-item/PickItem.js ***!
    \*********************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i;
    var a = n(/*! react */0);
    var s = n.n(a);
    var l = n(/*! lodash.flowright */14);
    var c = n.n(l);
    var d = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var u = n.n(d);
    var p = n(/*! lodash/each */507);
    var f = n.n(p);
    var m = n(/*! lodash/shuffle */1422);
    var h = n.n(m);
    var b = n(/*! ./pickItem.css */1482);
    var g = n.n(b);
    var v = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var x = n(/*! ../../../helpers/pickItem.helpers */1438);
    function y(e) {
      return (y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function w(e) {
      return function (e) {
        if (Array.isArray(e)) {
          return k(e);
        }
      }(e) || function (e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
          return Array.from(e);
        }
      }(e) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return k(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return k(e, t);
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function k(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    function _(e, t, n, o) {
      i ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && r) {
        for (var c in r) {
          if (t[c] === undefined) {
            t[c] = r[c];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: i,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function S(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function N(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          S(Object(n), true).forEach(function (t) {
            E(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          S(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, I(o.key), o);
      }
    }
    function j(e, t) {
      return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function C(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = P(e);
        if (t) {
          var r = P(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return T(this, n);
      };
    }
    function T(e, t) {
      if (t && (y(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return A(e);
    }
    function A(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function P(e) {
      return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function E(e, t, n) {
      if ((t = I(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function I(e) {
      var t = function (e, t) {
        if (y(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (y(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (y(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var R = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          j(e, t);
        }
      })(l, e);
      var t;
      var n;
      var i;
      var a = C(l);
      function l(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, l);
        E(A(t = a.call(this, e)), "configPiContent", function (e) {
          if (!e || e && e.trim() === "") {
            return [];
          }
          var t = [];
          var n = [];
          var o = [];
          for (var r = e.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/<p>(\s)*<\/p>/g, "").replace(/<\/p>(\s)*<p>/g, "</p><p>").replace(/<p>/g, "").replace(/<\/p>/g, "<br/>"), i = 0; i < r.length; i++) {
            if (r[i] === "{" && r[i + 1] === "}") {
              t.push(i);
            }
          }
          if (t && t.length === 0) {
            n.push({
              type: "text",
              content: r
            });
          }
          f()(t, function (e, i) {
            if (i === 0) {
              n.push({
                type: "text",
                content: r.substr(0, e)
              });
              n.push({
                type: "select",
                content: "....",
                id: i + 1,
                isFilled: false
              });
              o.push(i + 1);
            } else {
              n.push({
                type: "text",
                content: r.substr(t[i - 1] + 2, e - t[i - 1] - 2)
              });
              n.push({
                type: "select",
                content: "....",
                id: i + 1,
                isFilled: false
              });
              o.push(i + 1);
            }
            if (i === t.length - 1) {
              n.push({
                type: "text",
                content: r.substr(e + 2)
              });
            }
          });
          return {
            html: n,
            answersToFill: o
          };
        });
        E(A(t), "configPiAnswers", function (e) {
          if (!e || e && e.length === 0) {
            return [];
          } else {
            return e.map(function (e) {
              var t = e.text.replace(/<p>/gi, "").replace("</p>", "");
              return N(N({}, e), {}, {
                isPicked: false,
                text: t
              });
            });
          }
        });
        E(A(t), "onClickFilled", function (e) {
          if (e.target.dataset.id) {
            t.handleRemoveAnswerNew(e.target.innerText, +e.target.dataset.id);
          }
        });
        var n = e.data;
        var o = t.configPiContent(n && n.content);
        var r = t.configPiAnswers(n && n.answers);
        var i = t.getNewContent(n && n.content);
        t.state = {
          piAnswers: t.getUniqAnswers(r),
          nextIndexToFill: o && o.answersToFill || [],
          correctAnswers: r,
          newHtml: i && i.html || "",
          isCorrect: false,
          isShowLong: false,
          answersToFill: i && i.answersToFill || [],
          filledList: []
        };
        t.contentRef = s.a.createRef();
        return t;
      }
      t = l;
      if (n = [{
        key: "getNewContent",
        value: function (e) {
          if (!e || e && e.trim() === "") {
            return "";
          }
          for (var t = e.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/<p>(\s)*<\/p>/g, "").replace(/<\/p>(\s)*<p>/g, "</p><p>"), n = [], o = "", r = 1, i = 0; i < t.length; i++) {
            if (t[i] === "{") {
              o += `<span id=${r} data-id=${r}>....</span>`;
              n.push(r);
              r += 1;
            } else {
              if (t[i] === "}") {
                continue;
              }
              o += t[i];
            }
          }
          return {
            html: o,
            answersToFill: n
          };
        }
      }, {
        key: "handleRemoveAnswerNew",
        value: function (e, t) {
          if (e !== "....") {
            var n = this.state.nextIndexToFill;
            var o = this.props.data && this.props.data.content;
            var r = this.state.piAnswers;
            r.push({
              text: e,
              isPicked: false,
              order: t
            });
            var i = this.state.filledList.filter(function (e) {
              return e.id !== t;
            });
            for (var a = o.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/<p>(\s)*<\/p>/g, "").replace(/<\/p>(\s)*<p>/g, "</p><p>"), s = "", l = 1, c = 0; c < a.length; c++) {
              if (a[c] === "{") {
                var d = i.find(function (e) {
                  return e.id === l;
                });
                s += d ? `<span id=pt_${l} data-id="${l}" style="font-weight: bold; cursor: pointer">${d.text}</span>` : `<span id=pt_${l} data-id="${l}">....</span>`;
                l += 1;
              } else {
                if (a[c] === "}") {
                  continue;
                }
                s += a[c];
              }
            }
            n.unshift(t);
            n.sort(function (e, t) {
              return e - t;
            });
            this.setState({
              nextIndexToFill: n,
              newHtml: s,
              filledList: i,
              piAnswers: r,
              isCorrect: false
            });
          }
        }
      }, {
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
          var e = this.contentRef.current;
          if (e) {
            e.addEventListener("click", this.onClickFilled);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var e = this.contentRef.current;
          if (e) {
            e.removeEventListener("click", this.onClickFilled);
          }
          this.props.onRef(undefined);
        }
      }, {
        key: "getUniqAnswers",
        value: function (e) {
          return h()(Object(x.a)(e).map(function (e) {
            return N(N({}, e), {}, {
              isPicked: false
            });
          }));
        }
      }, {
        key: "renderAnswerToPick",
        value: function () {
          var e = this;
          var t = this.state.piAnswers;
          if (!t || t && t.length === 0) {
            return o ||= _("div", {});
          } else {
            return _("div", {}, undefined, r ||= _("h5", {}, undefined, "Click vào đáp án phía dưới để tự động điền vào chỗ chấm"), t.map(function (t, n) {
              var o = t.text;
              var r = t.isPicked;
              var i = `${n}_pianswer_toPick`;
              if (r) {
                return _("span", {}, t);
              } else {
                return _("span", {
                  onClick: function () {
                    return e.handlePickAnswerNew(t, n);
                  },
                  dangerouslySetInnerHTML: {
                    __html: o
                  },
                  className: g.a.piAnswerChoice
                }, i);
              }
            }));
          }
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return _("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, _("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? _("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "getNewOnes",
        value: function (e) {
          var t = this.state.piAnswers;
          var n = [];
          f()(t, function (t, o) {
            if (t) {
              var r = t;
              if (o === e) {
                r = N(N({}, t), {}, {
                  isPicked: true
                });
              }
              n.push(r);
            }
          });
          return n;
        }
      }, {
        key: "handlePickAnswerNew",
        value: function (e, t) {
          var n = this.state.nextIndexToFill;
          var o = this.props.data && this.props.data.content;
          if (n.length !== 0) {
            if (!o) {
              return "";
            }
            for (var r = o.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/<p>(\s)*<\/p>/g, "").replace(/<\/p>(\s)*<p>/g, "</p><p>"), i = "", a = 1, s = n[0], l = this.getNewOnes(t), c = 0; c < r.length; c++) {
              if (r[c] === "{") {
                if (a === s) {
                  i += `<span id=pt_${a} data-id="${a}" style="font-weight: bold; cursor: pointer">${e.text}</span>`;
                } else {
                  var d = this.state.filledList.find(function (e) {
                    return e.id === a;
                  });
                  i += this.filledText(d, a);
                }
                a += 1;
              } else {
                if (r[c] === "}") {
                  continue;
                }
                i += r[c];
              }
            }
            n.shift();
            this.setState({
              newHtml: i,
              nextIndexToFill: n,
              piAnswers: l,
              filledList: [].concat(w(this.state.filledList), [{
                id: s,
                text: e.text
              }])
            });
          }
        }
      }, {
        key: "filledText",
        value: function (e, t) {
          if (e) {
            return `<span id=pt_${t} data-id="${t}" style="font-weight: bold; cursor: pointer">${e.text}</span>`;
          } else {
            return `<span id=pt_${t} data-id="${t}">....</span>`;
          }
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = this.contentRef.current;
          var t = this.state.answersToFill.map(function (t, n) {
            var o = e && e.querySelector(`[id="pt_${t}"]`);
            return {
              sequenceId: t,
              textInput: o && o.innerText.trim()
            };
          });
          return {
            id: this.props.data._id,
            listAnswers: t
          };
        }
      }, {
        key: "render",
        value: function () {
          return _("div", {}, undefined, _("div", {
            className: "row"
          }, undefined, _("div", {
            className: "col-md-12"
          }, undefined, _("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, _("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && _(v.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), s.a.createElement("div", {
            ref: this.contentRef,
            dangerouslySetInnerHTML: {
              __html: this.state.newHtml
            }
          }), this.renderAnswerToPick())))));
        }
      }]) {
        O(t.prototype, n);
      }
      if (i) {
        O(t, i);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return l;
    }(s.a.Component);
    t.a = c()(u()(g.a))(R);
  },
  1452:
  /*!**************************************************************************!*\
    !*** ./src/routes/skill-practice/pick-item-sentence/PickItemSentence.js ***!
    \**************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i;
    var a;
    var s = n(/*! react */0);
    var l = n.n(s);
    var c = n(/*! lodash.flowright */14);
    var d = n.n(c);
    var u = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var p = n.n(u);
    var f = n(/*! lodash/each */507);
    var m = n.n(f);
    var h = n(/*! lodash/filter */199);
    var b = n.n(h);
    var g = n(/*! lodash/shuffle */1422);
    var v = n.n(g);
    var x = n(/*! ./pickItemSentence.css */1484);
    var y = n.n(x);
    var w = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    function k(e) {
      return (k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function _(e, t, n, o) {
      a ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var s = new Array(i);
        for (var l = 0; l < i; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && r) {
        for (var c in r) {
          if (t[c] === undefined) {
            t[c] = r[c];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: a,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function S(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function N(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          S(Object(n), true).forEach(function (t) {
            E(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          S(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, I(o.key), o);
      }
    }
    function j(e, t) {
      return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function C(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = P(e);
        if (t) {
          var r = P(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return T(this, n);
      };
    }
    function T(e, t) {
      if (t && (k(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return A(e);
    }
    function A(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function P(e) {
      return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function E(e, t, n) {
      if ((t = I(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function I(e) {
      var t = function (e, t) {
        if (k(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (k(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (k(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var R = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          j(e, t);
        }
      })(l, e);
      var t;
      var n;
      var a;
      var s = C(l);
      function l(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, l);
        E(A(t = s.call(this, e)), "configPisContent", function (e, t) {
          if (!e || e && e.trim() === "") {
            return [];
          }
          var n = [];
          var o = [];
          var r = e.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "");
          n.push({
            type: "text",
            content: r
          });
          m()(t, function (e, t) {
            if (e) {
              n.push({
                type: "select",
                content: "....",
                id: t + 1,
                isFilled: false
              });
              o.push(t + 1);
            }
          });
          return {
            html: n,
            answersToFill: o
          };
        });
        E(A(t), "configPiAnswers", function (e) {
          if (!e || e && e.length === 0) {
            return [];
          } else {
            return e.map(function (e) {
              var t = e.text.replace(/<p>/gi, "").replace("</p>", "");
              return N(N({}, e), {}, {
                isPicked: false,
                text: t
              });
            });
          }
        });
        var n = e.data;
        var o = t.configPiAnswers(n && n.answers);
        var r = t.configPisContent(n && n.content, o);
        t.state = {
          piHtml: r && r.html || [],
          piAnswers: v()(o),
          nextIndexToFill: r && r.answersToFill || [],
          correctAnswers: o,
          isCorrect: false,
          isShowLong: false
        };
        return t;
      }
      t = l;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "handleRemoveAnswer",
        value: function (e, t) {
          var n = this.state.nextIndexToFill;
          var o = this.state.piAnswers;
          o.push({
            text: e.content,
            isPicked: false,
            order: t
          });
          var r = this.state.piHtml;
          var i = [];
          m()(r, function (e) {
            if (e) {
              if (e.type === "select" && e.id === t && e.isFilled) {
                i.push(N(N({}, e), {}, {
                  content: "....",
                  isFilled: false
                }));
              } else {
                i.push(e);
              }
            }
          });
          n.unshift(t);
          n.sort(function (e, t) {
            return e - t;
          });
          this.setState({
            nextIndexToFill: n,
            piHtml: i,
            piAnswers: o,
            isCorrect: false
          });
        }
      }, {
        key: "handlePickAnswer",
        value: function (e, t) {
          var n = this.state.nextIndexToFill;
          if (n.length > 0) {
            var o = this.state.piAnswers;
            var r = [];
            m()(o, function (e, n) {
              if (e) {
                var o = e;
                if (n === t) {
                  o = N(N({}, e), {}, {
                    isPicked: true
                  });
                }
                r.push(o);
              }
            });
            var i = this.state.piHtml;
            var a = this.updateNewHtml(i, n, e);
            n.shift();
            this.setState({
              piAnswers: r,
              piHtml: a,
              nextIndexToFill: n,
              isCorrect: false
            });
          }
        }
      }, {
        key: "updateNewHtml",
        value: function (e, t, n) {
          var o = [];
          m()(e, function (e) {
            if (e) {
              if (e.type !== "select" || e.id !== t[0] || e.isFilled) {
                o.push(e);
              } else {
                o.push(N(N({}, e), {}, {
                  content: `${n.text} `,
                  isFilled: true
                }));
              }
            }
          });
          return o;
        }
      }, {
        key: "renderAnswerToPick",
        value: function () {
          var e = this;
          var t = this.state.piAnswers;
          if (!t || t && t.length === 0) {
            return o ||= _("div", {});
          } else {
            return _("div", {}, undefined, r ||= _("h5", {}, undefined, "Click vào đáp án phía dưới để tự động điền vào chỗ chấm"), t.map(function (t, n) {
              var o = t.text;
              var r = t.isPicked;
              var i = `${n}_pianswer_toPick`;
              return _("span", r ? {} : {
                onClick: function () {
                  return e.handlePickAnswer(t, n);
                },
                dangerouslySetInnerHTML: {
                  __html: o
                },
                className: y.a.piAnswerChoice
              }, i);
            }));
          }
        }
      }, {
        key: "renderContent",
        value: function () {
          var e = this;
          var t = this.state.piHtml;
          if (!t || t && t.length === 0) {
            return i ||= _("div", {});
          } else {
            return t.map(function (t, n) {
              var o = t.type;
              var r = t.content;
              var i = t.id;
              var a = t.isFilled;
              var s = `${n}_piContent`;
              return _("span", o === "select" ? a ? {
                onClick: function () {
                  return e.handleRemoveAnswer(t, i);
                },
                dangerouslySetInnerHTML: {
                  __html: r
                },
                className: y.a.piAnswerChoiceChosen
              } : {
                dangerouslySetInnerHTML: {
                  __html: r
                }
              } : {
                dangerouslySetInnerHTML: {
                  __html: r.replace("<p>", "")
                }
              }, s);
            });
          }
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return _("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, _("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? _("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "checkResult",
        value: function () {
          var e;
          e = b()(this.state.piHtml, function (e) {
            return e.type === "select";
          }).map(function (e, t) {
            return {
              sequenceId: t + 1,
              textInput: e.content && e.content.trim()
            };
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "render",
        value: function () {
          return _("div", {}, undefined, _("div", {
            className: "row"
          }, undefined, _("div", {
            className: "col-md-12"
          }, undefined, _("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, _("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && _(w.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.renderContent(), this.renderAnswerToPick())))));
        }
      }]) {
        O(t.prototype, n);
      }
      if (a) {
        O(t, a);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return l;
    }(l.a.Component);
    t.a = d()(p()(y.a))(R);
  },
  1453:
  /*!**********************************************************!*\
    !*** ./src/routes/skill-practice/underline/Underline.js ***!
    \**********************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! ./underline.css */1486);
    var u = n.n(d);
    var p = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    function f(e) {
      return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function m(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, w(o.key), o);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function g(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = y(e);
        if (t) {
          var r = y(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return v(this, n);
      };
    }
    function v(e, t) {
      if (t && (f(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return x(e);
    }
    function x(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function y(e) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function w(e) {
      var t = function (e, t) {
        if (f(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (f(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (f(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var k = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          b(e, t);
        }
      })(a, e);
      var t;
      var n;
      var o;
      var r = g(a);
      function a(e) {
        var t;
        var n;
        var o;
        var s;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, a);
        t = r.call(this, e);
        n = x(t);
        s = function (e) {
          if (e.target.dataset.id) {
            e.target.classList.toggle("underline-selected");
          }
        };
        if ((o = w(o = "onClickWord")) in n) {
          Object.defineProperty(n, o, {
            value: s,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          n[o] = s;
        }
        t.state = {
          isAnswered: false,
          isAnsweredTrue: false,
          isShowLong: false
        };
        t.contentRef = i.a.createRef();
        return t;
      }
      t = a;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
          var e = this.contentRef.current;
          if (e) {
            e.addEventListener("click", this.onClickWord);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var e = this.contentRef.current;
          if (e) {
            e.removeEventListener("click", this.onClickWord);
          }
          this.props.onRef(undefined);
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return m("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, m("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn", " "), this.state.isShowLong || this.props.showSolution ? m("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "getNewId",
        value: function (e, t) {
          if (e === "." || e === "," || e === ":") {
            return t + 5;
          } else {
            return t + 1;
          }
        }
      }, {
        key: "breakCond",
        value: function (e) {
          return e.match(/\s/) || e === " " || e === "." || e === ",";
        }
      }, {
        key: "generateQuestion",
        value: function () {
          for (var e = this.props.data.content.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”"), t = "", n = false, o = false, r = 0, a = 0; a < e.length; a++) {
            if (e[a] === "<") {
              t += "</span>";
              t += e[a];
              o = false;
              n = true;
            } else if (this.breakCond(e[a])) {
              if (n) {
                t += e[a];
              } else {
                t += "</span>";
                t += e[a];
                t += `<span data-id="${r}">`;
                r = this.getNewId(e[a], r);
              }
            } else if (e[a] === ">") {
              t += e[a];
              n = false;
              o = false;
            } else if (n || o || !e[a]) {
              t += e[a];
            } else {
              t += "</span>";
              t += `<span data-id="${r}">`;
              t += e[a];
              o = true;
              r++;
            }
          }
          return i.a.createElement("div", {
            ref: this.contentRef,
            className: u.a.questionWrap,
            dangerouslySetInnerHTML: {
              __html: t.replace(/&nbsp;/g, " ")
            }
          });
        }
      }, {
        key: "checkResult",
        value: function () {
          var e;
          var t = this.contentRef.current;
          var n = t ? t.querySelectorAll(".underline-selected") : [];
          var o = "";
          var r = 0;
          var i = [];
          var a = [];
          n.forEach(function (e) {
            i.push({
              id: e.dataset.id,
              text: e.innerText
            });
          });
          if ((i = i.sort(function (e, t) {
            return e.id - t.id;
          })).length === 1) {
            a = [i[0].text.replace(/\./g, "").replace(",", "")];
          }
          for (var s = 0; s < i.length; s++) {
            if (r === 0) {
              o += i[s].text.replace(/\./g, "").replace(",", "");
            } else if (s === i.length - 1 && parseInt(i[s].id) > r + 1) {
              a.push(o);
              a.push(i[i.length - 1].text.replace(/\./g, "").replace(",", ""));
            } else if (s === i.length - 1 && parseInt(i[s].id) === r + 1) {
              o += " " + i[s].text.replace(/\./g, "").replace(",", "");
              a.push(o);
            } else if (+i[s].id === r + 1) {
              o += " " + i[s].text.replace(/\./g, "").replace(",", "");
            } else {
              a.push(o);
              o = i[s].text.replace(/\./g, "").replace(",", "");
            }
            r = parseInt(i[s].id);
          }
          e = a.map(function (e, t) {
            return {
              sequenceId: t + 1,
              textInput: e
            };
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "render",
        value: function () {
          return m("div", {}, undefined, m("div", {
            className: "row"
          }, undefined, m("div", {
            className: "col-md-12"
          }, undefined, m("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, m("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && m(p.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.generateQuestion())))));
        }
      }]) {
        h(t.prototype, n);
      }
      if (o) {
        h(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(i.a.Component);
    t.a = s()(c()(u.a))(k);
  },
  1454:
  /*!*************************************************************!*\
    !*** ./src/routes/skill-practice/tv-dropdown/TvDropdown.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! lodash/forEach */330);
    var u = n.n(d);
    var p = n(/*! ./CustomPick */1461);
    var f = n(/*! ./tvDropdown.css */1430);
    var m = n.n(f);
    var h = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    function b(e) {
      return (b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function g(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function v(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (b(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (b(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), b(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function x(e, t) {
      return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function y(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = k(e);
        if (t) {
          var r = k(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return w(this, n);
      };
    }
    function w(e, t) {
      if (t && (b(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var _ = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          x(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = y(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        t = r.call(this, e);
        var n = [];
        u()(t.props.data.textDropdownAnswers, function (e, t) {
          n[t] = "";
          u()(e.list, function (e, o) {
            if (o === 0) {
              n[t] = e.text;
            }
          });
        });
        t.state = {
          isAnswered: false,
          isAnsweredTrue: false,
          selected: true,
          droplistSelect: n,
          isShowLong: false
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.props.onRef(undefined);
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return g("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, g("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn "), this.state.isShowLong || this.props.showSolution ? g("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "generateQuestion",
        value: function () {
          var e = this;
          var t = this.props.data.content;
          var n = [];
          for (var o = t ? t.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/<p>(\s)*<\/p>/g, "").replace(/<\/p>(\s)*<p>/g, "</p><p>").replace(/<p>/g, "").replace(/<\/p>/g, "<br/>") : "", r = 0; r < o.length; r++) {
            if (o[r] === "{" && o[r + 1] === "}") {
              n.push(r);
            }
          }
          var i = [];
          u()(n, function (t, r) {
            i = r === 0 ? e.handleZeroIndex(i, o, t, r) : e.handleOtherIndex(i, o, n, t, r);
            if (r === n.length - 1) {
              i.push({
                type: "text",
                content: o ? o.substr(t + 2) : ""
              });
            }
          });
          return i;
        }
      }, {
        key: "handleZeroIndex",
        value: function (e, t, n, o) {
          var r = this;
          e.push({
            type: "text",
            content: t ? t.substr(0, n) : ""
          });
          var i = this.props.data.textDropdownAnswers[o] ? this.props.data.textDropdownAnswers[o].list.map(function (e) {
            return {
              value: e.text,
              label: e.text
            };
          }) : [];
          e.push({
            type: "select",
            content: g(p.a, {
              options: i,
              onSelected: function (e) {
                return r.selectedValue(e, o);
              }
            })
          });
          return e;
        }
      }, {
        key: "handleOtherIndex",
        value: function (e, t, n, o, r) {
          var i = this;
          e.push({
            type: "text",
            content: t ? t.substr(n[r - 1] + 2, o - n[r - 1] - 2) : ""
          });
          var a = this.props.data.textDropdownAnswers[r] ? this.props.data.textDropdownAnswers[r].list.map(function (e) {
            return {
              value: e.text,
              label: e.text
            };
          }) : [];
          e.push({
            type: "select",
            content: g(p.a, {
              options: a,
              onSelected: function (e) {
                return i.selectedValue(e, r);
              }
            })
          });
          return e;
        }
      }, {
        key: "selectedValue",
        value: function (e, t) {
          var n = JSON.parse(JSON.stringify(this.state.droplistSelect));
          n[t] = e;
          this.setState({
            droplistSelect: n
          });
        }
      }, {
        key: "generateElement",
        value: function (e, t) {
          if (e.type === "select") {
            return g("div", {
              className: m.a.tv_display_inline
            }, t, e.content);
          } else {
            return g("span", {
              className: `${t > 0 ? "display-inlinegrid-ipad" : ""}`,
              dangerouslySetInnerHTML: {
                __html: e.content ? e.content.replace("<p>", "").replace("<img", "<img class=\"img-responsive\"") : ""
              }
            }, t);
          }
        }
      }, {
        key: "checkResult",
        value: function () {
          var e = [];
          this.state.droplistSelect.forEach(function (t, n) {
            e.push({
              sequenceId: n + 1,
              dropDownSelected: t
            });
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return g("div", {}, undefined, g("div", {
            className: "row"
          }, undefined, g("div", {
            className: "col-md-12"
          }, undefined, g("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, g("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && g(h.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.generateQuestion().map(function (t, n) {
            return e.generateElement(t, n);
          }))))));
        }
      }]) {
        v(t.prototype, n);
      }
      if (o) {
        v(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(i.a.Component);
    t.a = s()(c()(m.a))(_);
  },
  1455:
  /*!******************************************************************************!*\
    !*** ./src/routes/skill-practice/resequence-practice/resequencePractice.css ***!
    \******************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./resequencePractice.css */1464);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1456:
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/tv-dropdown/tvDropdown.css ***!
    \**********************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._3Lwnv{position:relative}._3H5cP,._3Lwnv{display:inline-block}._3H5cP{padding:0;border:1px solid transparent;border-radius:6px;background:transparent;cursor:pointer;line-height:1.4;-webkit-transition:border-color .15s ease,background .15s ease,padding .15s ease,-webkit-box-shadow .15s ease;transition:border-color .15s ease,background .15s ease,padding .15s ease,-webkit-box-shadow .15s ease;-o-transition:border-color .15s ease,background .15s ease,padding .15s ease,box-shadow .15s ease;transition:border-color .15s ease,background .15s ease,padding .15s ease,box-shadow .15s ease;transition:border-color .15s ease,background .15s ease,padding .15s ease,box-shadow .15s ease,-webkit-box-shadow .15s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._3H5cP:hover{padding:2px 10px;border-color:#2f80ed;background:#eaf2ff;-webkit-box-shadow:0 0 0 2px rgba(47,128,237,.12);box-shadow:0 0 0 2px rgba(47,128,237,.12)}.HvWtt{font-weight:700;text-decoration:underline}._2M9Sl{position:absolute;top:100%;left:0;margin-top:2px;background:#fff;min-width:140px;padding:6px 0;border:1px solid #d5dbe3;border-radius:8px;-webkit-box-shadow:0 6px 20px rgba(16,24,40,.12);box-shadow:0 6px 20px rgba(16,24,40,.12);z-index:100000;list-style:none;cursor:pointer}._2M9Sl li{padding:8px 14px;list-style-type:none;color:#232735;font-size:15px;line-height:1.4;-webkit-transition:background .12s ease,color .12s ease;-o-transition:background .12s ease,color .12s ease;transition:background .12s ease,color .12s ease}._2M9Sl li+li{border-top:1px solid #eef1f5}._2M9Sl li:hover{background-color:#eaf2ff;color:#1e5cbf}._2LZ2R{background-color:#f0f6ff;color:#1e5cbf;font-weight:600}._3KcwH{display:inline-grid;color:#000}", ""]);
    t.locals = {
      error_content: "_3Lwnv",
      error_content_span: "_3H5cP",
      error_content_span_dirty: "HvWtt",
      error_container: "_2M9Sl",
      error_container_item_selected: "_2LZ2R",
      tv_display_inline: "_3KcwH"
    };
  },
  1457:
  /*!*********************************************************************!*\
    !*** ./src/routes/skill-practice/components/ScoreHint/ScoreHint.js ***!
    \*********************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    n(/*! react */0);
    var o;
    var r = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var i = n.n(r);
    var a = n(/*! ./ScoreHint.css */1491);
    var s = n.n(a);
    function l(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var c = [{
      range: "Tổng điểm < 10",
      correct: 10,
      wrong: 1
    }, {
      range: "9 < Tổng điểm < 20",
      correct: 9,
      wrong: 2
    }, {
      range: "19 < Tổng điểm < 30",
      correct: 8,
      wrong: 3
    }, {
      range: "29 < Tổng điểm < 40",
      correct: 7,
      wrong: 3
    }, {
      range: "39 < Tổng điểm < 50",
      correct: 6,
      wrong: 3
    }, {
      range: "49 < Tổng điểm < 60",
      correct: 5,
      wrong: 3
    }, {
      range: "59 < Tổng điểm < 70",
      correct: 4,
      wrong: 3
    }, {
      range: "69 < Tổng điểm < 80",
      correct: 3,
      wrong: 3
    }, {
      range: "79 < Tổng điểm < 90",
      correct: 2,
      wrong: 2
    }, {
      range: "89 < Tổng điểm < 100",
      correct: 1,
      wrong: 1
    }];
    t.a = i()(s.a)(function () {
      return l("div", {
        className: `score-hint-popup ${s.a.scoreHint} ${s.a.fontBrand}`
      }, undefined, l("div", {
        className: s.a.hintTitle
      }, undefined, "Cách tính điểm khi trả lời ", l("span", {
        className: s.a.trueScore
      }, undefined, "ĐÚNG"), " hoặc", " ", l("span", {
        className: s.a.wrongScore
      }, undefined, "SAI"), ":"), c.map(function (e) {
        return l("div", {
          className: s.a.hintRow
        }, e.range, l("strong", {
          className: s.a.hintRange
        }, undefined, e.range), l("p", {
          className: s.a.hintDetail
        }, undefined, l("span", {
          className: s.a.trueScore
        }, undefined, "ĐÚNG"), " cộng", " ", l("span", {
          className: s.a.trueScore
        }, undefined, e.correct), " điểm.", " ", l("span", {
          className: s.a.wrongScore
        }, undefined, "SAI"), " trừ", " ", l("span", {
          className: s.a.wrongScore
        }, undefined, e.wrong), " điểm."));
      }));
    });
  },
  1459:
  /*!***************************************************************************************!*\
    !*** ./src/routes/skill-practice/resequence-practice/ResequencePracticeNewVersion.js ***!
    \***************************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! react-redux */15);
    var c = n(/*! lodash */152);
    var d = n.n(c);
    var u = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var p = n.n(u);
    var f = n(/*! @dnd-kit/core */1435);
    var m = n(/*! @dnd-kit/sortable */1524);
    var h = n(/*! @dnd-kit/utilities */1511);
    var b = n(/*! @dnd-kit/modifiers */1533);
    var g = n(/*! ../../../hooks/useIsomorphicLayoutEffect */272);
    var v = n(/*! ./resequencePractice.css */1455);
    var x = n.n(v);
    var y = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var w = n(/*! ../../../components/Question/shared/ResequenceShared.css */1442);
    var k = n.n(w);
    var _ = n(/*! ../helper/practice.helper */1421);
    var S = n(/*! ../../../components/Question/shared/AnswerImageZoom */1536);
    var N = n(/*! ../../../components/Question/shared/ChoiceAnswerOption/choiceAnswerImage */1512);
    var O = n(/*! ../../../components/Question/shared/dndCssZoom.helpers */1425);
    function j(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return C(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return C(e, t);
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function C(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    function T() {
      return (T = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) {
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              e[o] = n[o];
            }
          }
        }
        return e;
      }).apply(this, arguments);
    }
    function A(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var P = function (e) {
      return `reseq_${String(e)}`;
    };
    var E = function (e) {
      return (e || "").replace("<p>", "").replace("</p>", "").replace("<p>&nbsp;</p>", "");
    };
    function I(e) {
      var t = e.id;
      var n = e.html;
      var o = e.dragIconSrc;
      var r = Object(m.d)({
        id: P(t)
      });
      var a = r.attributes;
      var s = r.listeners;
      var l = r.setNodeRef;
      var c = r.transform;
      var d = r.transition;
      var u = r.isDragging;
      var p = Object(_.c)(n);
      var f = Object(N.a)(p);
      var b = {
        transform: h.a.Transform.toString(c),
        transition: d,
        opacity: u ? 0.35 : 1,
        touchAction: "none"
      };
      return i.a.createElement("div", T({
        ref: l,
        style: b,
        className: k.a.sortableItem
      }, a, s), A("div", {
        className: `${k.a.answerChip} ${u ? k.a.answerChipDragging : ""}`
      }, undefined, A("img", {
        className: k.a.dragHandle,
        src: o,
        alt: "",
        "aria-hidden": true,
        draggable: false
      }), A("div", {
        className: k.a.answerChipContent,
        dangerouslySetInnerHTML: {
          __html: p
        }
      }), A(S.a, {
        src: f
      })));
    }
    function R(e) {
      var t = e && e.answers || [];
      return d.a.shuffle(t.filter(function (e) {
        return e && e.sequenceId;
      }));
    }
    function L(e) {
      var t = e.data;
      var n = e.onRef;
      var o = e.assetsDomain;
      var a = `${o}/2026/img/IconDragResequence.png`;
      var s = j(Object(r.useState)(function () {
        return R(t);
      }), 2);
      var l = s[0];
      var c = s[1];
      var d = j(Object(r.useState)(null), 2);
      var u = d[0];
      var p = d[1];
      var h = j(Object(r.useState)(1), 2);
      var v = h[0];
      var w = h[1];
      var C = Object(r.useRef)(l);
      var T = Object(r.useRef)(null);
      Object(r.useEffect)(function () {
        C.current = l;
      }, [l]);
      Object(r.useEffect)(function () {
        c(R(t));
        p(null);
      }, [t._id]);
      var L = Object(r.useMemo)(function () {
        var e = {};
        l.forEach(function (t) {
          if (t && t._id != null) {
            e[String(t._id)] = t;
          }
        });
        return e;
      }, [l]);
      var D = Object(r.useMemo)(function () {
        return l.map(function (e) {
          return String(e._id);
        });
      }, [l]);
      var z = Object(r.useMemo)(function () {
        return D.map(P);
      }, [D]);
      var M = Object(r.useCallback)(function () {
        var e = (C.current || []).map(function (e) {
          return {
            sequenceId: e._id
          };
        });
        return {
          id: t._id,
          listAnswers: e
        };
      }, [t._id]);
      var F = Object(r.useRef)(n);
      F.current = n;
      Object(g.a)(function () {
        if (typeof F.current == "function") {
          F.current({
            checkResult: M
          });
        }
        return function () {
          if (typeof F.current == "function") {
            F.current(undefined);
          }
        };
      }, [M]);
      var B = Object(f.r)(Object(f.q)(f.f, {
        activationConstraint: {
          distance: 6
        }
      }), Object(f.q)(f.g, {
        activationConstraint: {
          distance: 6
        }
      }));
      var V = u != null ? L[String(u)] : null;
      var H = V ? E(V.text) : "";
      return A("div", {}, undefined, A("div", {
        className: "row"
      }, undefined, A("div", {
        className: "col-md-12"
      }, undefined, A("div", {
        className: "panel panel-primary practice-question-text"
      }, undefined, A("div", {
        className: "panel-body"
      }, undefined, t.videoUrl && A(y.a, {
        url: t.videoUrl
      }), A("div", {
        className: "line-height-25",
        dangerouslySetInnerHTML: {
          __html: t.content ? Object(_.c)(t.content.replace("<img", "<img class=\"img-responsive\"")) : ""
        }
      }), A("div", {
        className: x.a.answerContent
      }, undefined, i.a.createElement("div", {
        className: k.a.listWrap,
        ref: T
      }, A(f.a, {
        sensors: B,
        collisionDetection: f.h,
        modifiers: [b.b],
        onDragStart: function (e) {
          var t;
          w(Object(O.b)(T.current));
          p((t = e.active.id, String(t).replace(/^reseq_/, "")));
        },
        onDragCancel: function () {
          p(null);
          w(1);
        },
        onDragEnd: function (e) {
          var t = e.active;
          var n = e.over;
          p(null);
          w(1);
          if (n && t.id !== n.id) {
            var o = z.indexOf(String(t.id));
            var r = z.indexOf(String(n.id));
            if (!(o < 0) && !(r < 0)) {
              c(function (e) {
                return Object(m.b)(e, o, r);
              });
            }
          }
        }
      }, undefined, A(m.a, {
        items: z,
        strategy: m.e
      }, undefined, D.map(function (e) {
        var t = L[e];
        if (t) {
          return A(I, {
            id: e,
            html: E(t.text),
            dragIconSrc: a
          }, P(e));
        } else {
          return null;
        }
      })), Object(O.c)(A(f.b, {
        dropAnimation: null,
        zIndex: 10000
      }, undefined, V ? A(O.a, {
        zoom: v
      }, undefined, A("div", {
        className: k.a.sortableItem
      }, undefined, A("div", {
        className: `${k.a.answerChip} ${k.a.dragOverlay}`
      }, undefined, A("img", {
        className: k.a.dragHandle,
        src: a,
        alt: "",
        "aria-hidden": true,
        draggable: false
      }), A("div", {
        className: k.a.answerChipContent,
        dangerouslySetInnerHTML: {
          __html: Object(_.c)(H)
        }
      }), A(S.a, {
        src: Object(N.a)(Object(_.c)(H))
      })))) : null))))))))));
    }
    L.defaultProps = {
      onRef: undefined,
      grade: undefined,
      assetsDomain: ""
    };
    t.a = s()(Object(l.b)(function (e) {
      return {
        assetsDomain: e.runtime && e.runtime.config && e.runtime.config.assetsDomain || ""
      };
    }), p()(x.a, k.a))(L);
  },
  1460:
  /*!***********************************************************************************!*\
    !*** ./src/routes/skill-practice/matching-practice/MatchingPracticeNewVersion.js ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i = n(/*! react */0);
    var a = n.n(i);
    var s = n(/*! lodash.flowright */14);
    var l = n.n(s);
    var c = n(/*! lodash */152);
    var d = n.n(c);
    var u = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var p = n.n(u);
    var f = n(/*! @dnd-kit/core */1435);
    var m = n(/*! ../../../hooks/useIsomorphicLayoutEffect */272);
    var h = n(/*! ../../../components/Question/shared/MatchingShared.css */1525);
    var b = n.n(h);
    var g = n(/*! ../../../components/Question/shared/DndAnswerChip/DndAnswerChip */1440);
    var v = n(/*! ../../../components/Question/shared/MatchingConnector/MatchingConnector */1526);
    var x = n(/*! ../../../components/Question/shared/dndCssZoom.helpers */1425);
    var y = n(/*! ../helper/practice.helper */1421);
    var w = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var k = n(/*! ../../../resources/fnHelpers/mathjax.helpers */1424);
    function _(e) {
      return (_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function S(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function N(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          S(Object(n), true).forEach(function (t) {
            O(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          S(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function O(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (_(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (_(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (_(t) === "symbol") {
          return t;
        } else {
          return String(t);
        }
      }(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function j(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return C(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return C(e, t);
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function C(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    function T(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function A() {
      return (A = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) {
            if (Object.prototype.hasOwnProperty.call(n, o)) {
              e[o] = n[o];
            }
          }
        }
        return e;
      }).apply(this, arguments);
    }
    var P = function (e) {
      return (e || "").replace("<p>", "").replace("</p>", "").replace("<p>&nbsp;</p>", "");
    };
    var E = function (e) {
      return Object(y.c)(P(e && e.textContent ? e.textContent : ""));
    };
    function I(e) {
      var t = e.answerId;
      var n = e.html;
      var o = e.disabled;
      var r = e.active;
      var i = Object(f.o)({
        id: `drag_${t}`,
        data: {
          answerId: String(t),
          type: "answer"
        },
        disabled: o
      });
      var s = i.attributes;
      var l = i.listeners;
      var c = i.setNodeRef;
      var d = i.isDragging;
      return a.a.createElement(g.a, A({
        innerRef: c,
        html: n,
        active: r,
        dragging: d,
        disabled: o,
        className: b.a.bankItem,
        style: {
          opacity: d ? 0.35 : 1
        }
      }, l, s));
    }
    function R(e) {
      var t = e.leftId;
      var n = e.children;
      var o = Object(f.p)({
        id: `des_${t}`,
        data: {
          leftId: String(t),
          type: "slot"
        }
      });
      var r = o.setNodeRef;
      var i = o.isOver;
      var s = [b.a.dropZone, i ? b.a.dropOver : ""].filter(Boolean).join(" ");
      return a.a.createElement("div", {
        ref: r,
        className: s,
        id: `des_${t}`
      }, n);
    }
    function L(e) {
      var t = e.children;
      var n = Object(f.p)({
        id: "sourceCtn",
        data: {
          type: "bank"
        }
      });
      var o = n.setNodeRef;
      var r = n.isOver;
      return a.a.createElement("div", {
        ref: o,
        id: "sourceCtn",
        className: `${b.a.answerBank} ${r ? b.a.answerBankOver : ""}`
      }, T("div", {
        className: b.a.answerListHeader
      }, undefined, "Danh sách đáp án"), T("div", {
        className: b.a.answerList
      }, undefined, t));
    }
    function D(e) {
      var t = {};
      e.forEach(function (e) {
        t[String(e.id)] = null;
      });
      return t;
    }
    function z(e) {
      var t = e.data;
      var n = e.onRef;
      var r = e.disabled;
      var s = Object(i.useMemo)(function () {
        return (t.leftMatching || []).filter(function (e) {
          return e && e.id && e.textContent;
        });
      }, [t.leftMatching]);
      var l = t.rightMatching || [];
      var c = Object(i.useMemo)(function () {
        var e = {};
        l.forEach(function (t) {
          if (t && t.id != null) {
            e[String(t.id)] = t;
          }
        });
        return e;
      }, [l]);
      var u = j(Object(i.useState)(function () {
        return D(s);
      }), 2);
      var p = u[0];
      var h = u[1];
      var _ = j(Object(i.useState)(function () {
        return d.a.shuffle(l.filter(Boolean).map(function (e) {
          return String(e.id);
        }));
      }), 2);
      var S = _[0];
      var C = _[1];
      var A = j(Object(i.useState)(null), 2);
      var z = A[0];
      var M = A[1];
      var F = Object(i.useRef)(p);
      var B = Object(i.useRef)(null);
      var V = j(Object(i.useState)(1), 2);
      var H = V[0];
      var Q = V[1];
      Object(i.useEffect)(function () {
        F.current = p;
      }, [p]);
      Object(i.useEffect)(function () {
        h(D(s));
        C(d.a.shuffle(l.filter(Boolean).map(function (e) {
          return String(e.id);
        })));
        M(null);
      }, [t._id]);
      Object(i.useEffect)(function () {
        Object(k.b)();
      }, [t._id, p, z]);
      var q = Object(i.useCallback)(function () {
        var e = F.current || {};
        var n = Object.keys(e);
        var o = [];
        n.forEach(function (t) {
          if (e[t]) {
            o.push({
              leftMatching: t,
              rightMatching: e[t]
            });
          }
        });
        if (n.length > o.length) {
          return "-1";
        } else {
          return {
            id: t._id,
            listAnswers: o
          };
        }
      }, [t._id]);
      var G = Object(i.useRef)(n);
      G.current = n;
      Object(m.a)(function () {
        if (typeof G.current == "function") {
          G.current({
            checkResult: q
          });
        }
        return function () {
          if (typeof G.current == "function") {
            G.current(undefined);
          }
        };
      }, [q]);
      var W = Object(f.r)(Object(f.q)(f.f, {
        activationConstraint: {
          distance: 6
        }
      }), Object(f.q)(f.g, {
        activationConstraint: {
          distance: 6
        }
      }));
      var U = Object(i.useMemo)(function () {
        return new Set(Object.values(p).filter(Boolean).map(String));
      }, [p]);
      var $ = Object(i.useMemo)(function () {
        return S.filter(function (e) {
          return !U.has(e) && c[e];
        });
      }, [S, U, c]);
      var X = z ? c[String(z)] : null;
      return T("div", {}, undefined, T("div", {
        className: "row"
      }, undefined, T("div", {
        className: "col-md-12"
      }, undefined, T("div", {
        className: "panel panel-primary practice-question-text"
      }, undefined, T("div", {
        className: "panel-body"
      }, undefined, t.videoUrl && T(w.a, {
        url: t.videoUrl
      }), T("div", {
        className: "line-height-25",
        dangerouslySetInnerHTML: {
          __html: Object(y.c)(t.content)
        }
      }), T(f.a, {
        sensors: W,
        collisionDetection: f.h,
        onDragStart: function (e) {
          if (!r) {
            Q(Object(x.b)(B.current));
            var t = e.active && e.active.data && e.active.data.current ? e.active.data.current.answerId : null;
            M(t);
          }
        },
        onDragCancel: function () {
          M(null);
          Q(1);
        },
        onDragEnd: function (e) {
          if (!r) {
            var t = e.active;
            var n = e.over;
            M(null);
            Q(1);
            if (t && n) {
              var o = t.data && t.data.current && t.data.current.answerId ? String(t.data.current.answerId) : String(t.id).replace(/^drag_/, "");
              if (o && c[o]) {
                h(function (e) {
                  var t = function (e, t) {
                    var n = e.data && e.data.current;
                    if (e.id === "sourceCtn" || n && n.type === "bank") {
                      return {
                        type: "bank"
                      };
                    }
                    if (n && n.type === "slot") {
                      return {
                        type: "slot",
                        leftId: String(n.leftId)
                      };
                    }
                    if (String(e.id).startsWith("des_")) {
                      return {
                        type: "slot",
                        leftId: String(e.id).replace(/^des_/, "")
                      };
                    }
                    if (n && n.type === "answer") {
                      var o = String(n.answerId);
                      var r = Object.keys(t).find(function (e) {
                        return String(t[e]) === o;
                      });
                      if (r) {
                        return {
                          type: "slot",
                          leftId: r
                        };
                      } else {
                        return {
                          type: "bank"
                        };
                      }
                    }
                    if (String(e.id).startsWith("drag_")) {
                      var i = String(e.id).replace(/^drag_/, "");
                      var a = Object.keys(t).find(function (e) {
                        return String(t[e]) === i;
                      });
                      if (a) {
                        return {
                          type: "slot",
                          leftId: a
                        };
                      } else {
                        return {
                          type: "bank"
                        };
                      }
                    }
                    return null;
                  }(n, e);
                  if (!t) {
                    return e;
                  }
                  var r = Object.keys(e).find(function (t) {
                    return String(e[t]) === o;
                  });
                  if (t.type === "bank") {
                    if (r) {
                      return N(N({}, e), {}, O({}, r, null));
                    } else {
                      return e;
                    }
                  }
                  var i = t.leftId;
                  if (!i || i === r) {
                    return e;
                  }
                  var a = N({}, e);
                  var s = a[i] || null;
                  if (r) {
                    a[r] = s;
                    a[i] = o;
                    return a;
                  } else {
                    a[i] = o;
                    return a;
                  }
                });
              }
            }
          }
        }
      }, undefined, a.a.createElement("div", {
        ref: B,
        className: b.a.matchLayout,
        style: {
          marginTop: 30
        }
      }, T("div", {
        className: b.a.matchContent
      }, undefined, T("div", {
        className: b.a.matchRows
      }, undefined, s.map(function (e, t) {
        var n = String(e.id);
        var i = p[n];
        var a = i ? c[String(i)] : null;
        return T("div", {
          className: b.a.matchRow
        }, n || t, T("div", {
          className: b.a.leftPrompt,
          dangerouslySetInnerHTML: {
            __html: Object(y.c)(P(e.textContent))
          }
        }), o ||= T(v.a, {}), T(R, {
          leftId: n
        }, undefined, a && T(I, {
          answerId: i,
          html: E(a),
          active: false,
          disabled: !!r
        })));
      }))), T("div", {
        className: b.a.matchBankCol
      }, undefined, T(L, {}, undefined, $.map(function (e) {
        var t = c[e];
        return T(I, {
          answerId: e,
          html: E(t),
          active: true,
          disabled: !!r
        }, e);
      })))), Object(x.c)(T(f.b, {
        dropAnimation: null,
        zIndex: 10000
      }, undefined, X ? T(x.a, {
        zoom: H
      }, undefined, T(g.a, {
        html: E(X),
        active: true,
        dragging: true,
        asOverlay: true,
        className: b.a.dragOverlay
      })) : null))))))));
    }
    I.defaultProps = {
      html: "",
      disabled: false,
      active: true
    };
    z.defaultProps = {
      onRef: undefined,
      grade: undefined,
      disabled: false
    };
    t.a = l()(p()(b.a))(z);
  },
  1461:
  /*!*************************************************************!*\
    !*** ./src/routes/skill-practice/tv-dropdown/CustomPick.js ***!
    \*************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var a = n.n(i);
    var s = n(/*! lodash.flowright */14);
    var l = n.n(s);
    var c = n(/*! lodash/shuffle */1422);
    var d = n.n(c);
    var u = n(/*! ./tvDropdown.css */1430);
    var p = n.n(u);
    function f(e) {
      return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function m(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, w(o.key), o);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function g(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = y(e);
        if (t) {
          var r = y(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return v(this, n);
      };
    }
    function v(e, t) {
      if (t && (f(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return x(e);
    }
    function x(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function y(e) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function w(e) {
      var t = function (e, t) {
        if (f(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (f(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (f(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    function k(e) {
      return function (e) {
        if (Array.isArray(e)) {
          return _(e);
        }
      }(e) || function (e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) {
          return Array.from(e);
        }
      }(e) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return _(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return _(e, t);
        }
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    var S = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          b(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = g(i);
      function i(e) {
        var t;
        var n;
        var o;
        var a;
        var s;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        t = r.call(this, e);
        n = x(t);
        a = function () {
          if (!t.state.showList) {
            t.setState({
              showList: true
            });
          }
        };
        if ((o = w(o = "handleMouseEnter")) in n) {
          Object.defineProperty(n, o, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          n[o] = a;
        }
        t.state = {
          currentValue: t.props.options && t.props.options[0].value,
          isDirty: false,
          showList: false,
          shuffledOptions: (s = t.props.options, s && s.length ? [s[0]].concat(k(d()(s.slice(1)))) : [])
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onSelected(this.state.currentValue);
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return m("div", {
            className: p.a.error_content
          }, undefined, m("span", {
            style: {
              fontWeight: this.state.isDirty ? "bold" : "",
              textDecoration: this.state.isDirty ? "underline" : ""
            },
            onMouseEnter: this.handleMouseEnter
          }, undefined, this.state.currentValue.replace("<p>", "").replace("</p>", "")), this.state.showList ? m("ul", {
            className: p.a.error_container
          }, undefined, (this.state.shuffledOptions || []).map(function (t) {
            return m("li", {
              onClick: function () {
                return e.setState({
                  currentValue: t.value,
                  isDirty: true,
                  showList: false
                }, function () {
                  e.props.onSelected(e.state.currentValue);
                });
              }
            }, t.value, t.value.replace("<p>", "").replace("</p>", ""));
          })) : "");
        }
      }]) {
        h(t.prototype, n);
      }
      if (o) {
        h(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(r.Component);
    t.a = l()(a()(p.a))(S);
  },
  1462:
  /*!********************************************************************************!*\
    !*** ./src/routes/skill-practice/tv-matching-practice/TvMatchingNewVersion.js ***!
    \********************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! lodash */152);
    var c = n.n(l);
    var d = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var u = n.n(d);
    var p = n(/*! dompurify */1426);
    var f = n.n(p);
    var m = n(/*! ../../../hooks/useIsomorphicLayoutEffect */272);
    var h = n(/*! ../../../components/Question/TvMatching/TvMatchingBoard */1439);
    var b = n(/*! ../../../components/Question/shared/TvMatchingShared.css */1432);
    var g = n.n(b);
    var v = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    var x = n(/*! ../../../components/Question/TvMatching/tvMatching.helpers */1423);
    function y(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function w(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return k(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return k(e, t);
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function k(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    var _ = /<div class="long-text">((.|\n)*)?<\/div>/;
    var S = function (e) {
      return f.a.sanitize(e || "", {
        USE_PROFILES: {
          html: true
        }
      });
    };
    function N(e) {
      var t = e.data;
      var n = e.onRef;
      var o = e.disabled;
      var a = e.showSolution;
      var s = t && t._id != null ? String(t._id) : "practice-tv";
      var l = w(Object(r.useState)([]), 2);
      var d = l[0];
      var u = l[1];
      var p = w(Object(r.useState)([]), 2);
      var f = p[0];
      var b = p[1];
      var k = w(Object(r.useState)([]), 2);
      var N = k[0];
      var O = k[1];
      var j = w(Object(r.useState)(false), 2);
      var C = j[0];
      var T = j[1];
      Object(r.useEffect)(function () {
        var e = c.a.shuffle((t.leftMatching || []).filter(function (e) {
          return Object(x.b)(e);
        }));
        var n = c.a.shuffle((t.rightMatching || []).filter(function (e) {
          return Object(x.b)(Object(x.e)(e));
        }).map(x.e));
        u(e);
        b(n);
        O([]);
        T(false);
      }, [s]);
      var A = i.a.useRef(N);
      Object(r.useEffect)(function () {
        A.current = N;
      }, [N]);
      var P = Object(r.useCallback)(function () {
        var e = (A.current || []).map(function (e) {
          return {
            leftMatching: e.leftId,
            rightMatching: e.rightId
          };
        });
        return {
          id: t._id,
          listAnswers: e
        };
      }, [t._id]);
      var E = i.a.useRef(n);
      E.current = n;
      Object(m.a)(function () {
        if (typeof E.current == "function") {
          E.current({
            checkResult: P
          });
        }
        return function () {
          if (typeof E.current == "function") {
            E.current(undefined);
          }
        };
      }, [P]);
      var I = t.content || "";
      var R = I.includes("class=\"long-text\"");
      var L = R ? I.match(_) : null;
      var D = S(I.replace(_, ""));
      return y("div", {}, undefined, y("div", {
        className: "row"
      }, undefined, y("div", {
        className: "col-md-12"
      }, undefined, y("div", {
        className: "panel panel-primary practice-question-text"
      }, undefined, y("div", {
        className: "panel-body"
      }, undefined, t.videoUrl && y(v.a, {
        url: t.videoUrl
      }), R && L && y("div", {
        className: `${g.a.longTextToggle}${C || a ? ` ${g.a.longTextToggleOpen}` : ""}`
      }, undefined, y("div", {
        className: g.a.longTextToggleBtn,
        onClick: function () {
          return T(function (e) {
            return !e;
          });
        },
        role: "button",
        tabIndex: 0,
        onKeyDown: function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            T(function (e) {
              return !e;
            });
          }
        }
      }, undefined, "Bấm vào đây để đọc đoạn văn"), C || a ? y("div", {
        dangerouslySetInnerHTML: {
          __html: S(L[0])
        }
      }) : null), y("div", {
        className: "line-height-25",
        dangerouslySetInnerHTML: {
          __html: D
        }
      }), y(h.a, {
        leftItems: d,
        rightItems: f,
        matches: N,
        onMatchesChange: O,
        disabled: o,
        resetKey: s
      }))))));
    }
    N.defaultProps = {
      onRef: undefined,
      disabled: false,
      showSolution: false,
      grade: undefined
    };
    t.a = s()(u()(g.a))(N);
  },
  1463:
  /*!***************************************************************************!*\
    !*** ./src/routes/skill-practice/underline-sentence/UnderlineSentence.js ***!
    \***************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! lodash.flowright */14);
    var s = n.n(a);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! ./underlineSentence.css */1489);
    var u = n.n(d);
    var p = n(/*! ../../../components/Question/shared/QuestionVideo */1420);
    function f(e) {
      return (f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function m(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function h(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, w(o.key), o);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function g(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = y(e);
        if (t) {
          var r = y(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return v(this, n);
      };
    }
    function v(e, t) {
      if (t && (f(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return x(e);
    }
    function x(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function y(e) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function w(e) {
      var t = function (e, t) {
        if (f(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (f(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (f(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var k = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          b(e, t);
        }
      })(a, e);
      var t;
      var n;
      var o;
      var r = g(a);
      function a(e) {
        var t;
        var n;
        var o;
        var s;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, a);
        t = r.call(this, e);
        n = x(t);
        s = function (e) {
          if (e.target.dataset.id) {
            var t = e.target.classList.toggle("underline-sentence");
            e.target.style.textDecoration = t ? "underline" : "";
          }
        };
        if ((o = w(o = "onClickSentence")) in n) {
          Object.defineProperty(n, o, {
            value: s,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          n[o] = s;
        }
        t.state = {
          isAnswered: false,
          isAnsweredTrue: false,
          isShowLong: false
        };
        t.contentRef = i.a.createRef();
        return t;
      }
      t = a;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this.props.onRef(this);
          var e = this.contentRef.current;
          if (e) {
            e.addEventListener("click", this.onClickSentence);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var e = this.contentRef.current;
          if (e) {
            e.removeEventListener("click", this.onClickSentence);
          }
          this.props.onRef(undefined);
        }
      }, {
        key: "renderLongText",
        value: function () {
          var e = this;
          var t = this.props.data.content.match(/<div class="long-text">((.|\n)*)?<\/div>/);
          return m("div", {
            className: `long-text-toggle${this.state.isShowLong || this.props.showSolution ? " long-text-toggle--open" : ""}`
          }, undefined, m("div", {
            className: "long-text-toggle-btn",
            onClick: function () {
              return e.setState({
                isShowLong: !e.state.isShowLong
              });
            }
          }, undefined, "Bấm vào đây để đọc đoạn văn", " "), this.state.isShowLong || this.props.showSolution ? m("div", {
            dangerouslySetInnerHTML: {
              __html: t[0]
            }
          }) : "");
        }
      }, {
        key: "getNewId",
        value: function (e, t) {
          if (e === "." || e === "…" || e === "?" || e === "!" || e === ";" || e === ":") {
            return t + 5;
          } else {
            return t + 1;
          }
        }
      }, {
        key: "breakCond",
        value: function (e) {
          return e === "." || e === "…" || e === "?" || e === "!" || e === ";" || e === ":";
        }
      }, {
        key: "generateQuestion",
        value: function () {
          for (var e = this.props.data.content.replace(/<div class="long-text">((.|\n)*)?<\/div>/, "").replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”"), t = "", n = false, o = false, r = 0, a = 0; a < e.length; a++) {
            if (e[a] === "<") {
              t += "</span>";
              t += e[a];
              o = false;
              n = true;
            } else if (this.breakCond(e[a])) {
              if (n) {
                t += e[a];
              } else {
                t += e[a];
                t += "</span>";
                r = this.getNewId(e[a], r);
                t += `<span data-id="${r}">`;
              }
            } else if (e[a] === ">") {
              t += e[a];
              n = false;
              o = false;
            } else if (n || o || !e[a]) {
              t += e[a];
            } else {
              t += "</span>";
              t += `<span data-id="${r}">`;
              t += e[a];
              o = true;
              r++;
            }
          }
          return i.a.createElement("div", {
            ref: this.contentRef,
            dangerouslySetInnerHTML: {
              __html: t.replace(/<p><\/p>/g, "")
            }
          });
        }
      }, {
        key: "checkResult",
        value: function () {
          var e;
          var t = this.contentRef.current;
          var n = t ? t.querySelectorAll(".underline-sentence") : [];
          var o = "";
          var r = 0;
          var i = [];
          var a = [];
          n.forEach(function (e) {
            i.push({
              id: e.dataset.id,
              text: e.innerText.replace(";", "").replace("…", "").replace("!", "").replace(";", "").replace(":", "")
            });
          });
          if ((i = i.sort(function (e, t) {
            return e.id - t.id;
          })).length === 1) {
            a = [i[0].text.replace(/\./g, "").replace(",", "")];
          }
          for (var s = 0; s < i.length; s++) {
            if (r === 0) {
              o += i[s].text.replace(/\./g, "").replace(",", "");
            } else if (s === i.length - 1 && parseInt(i[s].id) > r + 1) {
              a.push(o);
              a.push(i[i.length - 1].text.replace(/\./g, "").replace(",", ""));
            } else if (s === i.length - 1 && parseInt(i[s].id) === r + 1) {
              o += " " + i[s].text.replace(/\./g, "").replace(",", "");
              a.push(o);
            } else if (+i[s].id === r + 1) {
              o += " " + i[s].text.replace(/\./g, "").replace(",", "");
            } else {
              a.push(o);
              o = i[s].text.replace(/\./g, "").replace(",", "");
            }
            r = parseInt(i[s].id);
          }
          e = a.map(function (e, t) {
            return {
              sequenceId: t + 1,
              textInput: e.replace("-", "").trim()
            };
          });
          return {
            id: this.props.data._id,
            listAnswers: e
          };
        }
      }, {
        key: "render",
        value: function () {
          return m("div", {}, undefined, m("div", {
            className: "row"
          }, undefined, m("div", {
            className: "col-md-12"
          }, undefined, m("div", {
            className: "panel panel-primary practice-question-text"
          }, undefined, m("div", {
            className: "panel-body line-height-25"
          }, undefined, this.props.data.videoUrl && m(p.a, {
            url: this.props.data.videoUrl
          }), this.props.data.content && this.props.data.content.includes("class=\"long-text\"") && this.renderLongText(), this.generateQuestion())))));
        }
      }]) {
        h(t.prototype, n);
      }
      if (o) {
        h(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(i.a.Component);
    t.a = s()(c()(u.a))(k);
  },
  1464:
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/resequence-practice/resequencePractice.css ***!
    \**************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._2lhgs{background:#fff;width:auto;min-height:450px;z-index:10;padding:20px;max-width:1000px;position:relative;margin-top:30px;margin:auto}._2xdF-{min-height:100px;border:1px solid #ccc;border-radius:5px;margin-bottom:25px}._2xdF-,._3Htzt{display:-ms-flexbox;display:flex}._3Htzt{-ms-flex-pack:center;justify-content:center;margin-top:15px}._3Htzt img{max-width:100%;max-height:120px;width:auto;height:auto;-o-object-fit:contain;object-fit:contain;display:inline-block;vertical-align:middle;margin:0!important}._1NfOR:hover{background:#dcf3ca;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}._2iYqA{text-align:-webkit-center}", ""]);
    t.locals = {
      previewContainer: "_2lhgs",
      questionText: "_2xdF-",
      answerContent: "_3Htzt",
      eachAnswer: "_1NfOR",
      alignCenter: "_2iYqA"
    };
  },
  1465:
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/Question/shared/ResequenceShared.css ***!
    \*********************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--dnd-accent:#68b52a;--dnd-accent-border:#61b97e;--dnd-accent-fill:#75de98;--dnd-chip-border:#85c056;--dnd-chip-fill:#ace380;--dnd-drop-zone-bg:#e4fdd0;--dnd-slot-filled-bg:#adec7a;--dnd-dragging-bg:#d1f5b4;--dnd-chip-text:#383f56;--dnd-chip-radius-2026:16px;--dnd-chip-active-bg:#f3fcee;--dnd-chip-active-border:#6dc14c;--dnd-chip-active-shadow:#6dc14c;--dnd-chip-inactive-bg:#fff;--dnd-chip-inactive-border:#e4e7f0;--dnd-chip-inactive-shadow:#c8cedd;--dnd-bank-panel-bg:#fff;--dnd-bank-panel-border:#e4e7f0;--dnd-bank-panel-radius:16px;--dnd-bank-title-color:#383f56;--dnd-bank-item-gap:24px;--dnd-match-prompt-bg:#fff;--dnd-match-prompt-border:#e4e7f0;--dnd-match-prompt-shadow:#e4e7f0;--dnd-match-drop-border:#6dc14c;--dnd-match-line-bg:#5ebc8a;--dnd-match-row-gap:24px;--dnd-match-box-min-height:56px;--dnd-match-box-radius:16px;--dnd-drop-over-outline:#4fab1e;--dnd-drop-over-bg:#d7f5b8;--dnd-bank-over-outline:#85c056;--dnd-bank-over-bg:#f7fff0;--dnd-bank-border:#ccc;--dnd-slot-border:#969393;--dnd-header-bg:#8ec554;--dnd-header-shadow:#213b0d;--dnd-overlay-shadow:0 8px 20px rgba(31,46,76,.18);--dnd-chip-inset-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,.17);--dnd-chip-radius:8px;--dnd-chip-max-width:420px;--dnd-bank-min-height:240px;--dnd-slot-min-height:80px;--dnd-list-min-height:240px;--tv-match-box-border:#e4e7f0;--tv-match-box-active:#6dc14c;--tv-match-box-width:300px;--tv-match-box-radius:16px;--tv-match-gap:140px;--tv-match-item-gap:24px;--tv-match-line-width:12}.KG70k{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:24px;width:100%;height:auto;min-height:240px;min-height:var(--dnd-list-min-height);padding:12px 0 5px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-scroll-chaining:none;overscroll-behavior:contain}._1kmpJ,._1kmpJ *{-webkit-user-drag:none}._1kmpJ{max-width:416px;-ms-touch-action:manipulation;touch-action:manipulation}._1kmpJ,._3-vGs{width:100%;margin:0}._3-vGs{position:relative;min-width:160px;min-height:88px;padding:16px 56px;border:2px solid #e4e7f0;border:2px solid var(--dnd-chip-inactive-border);background-color:#fff;background-color:var(--dnd-chip-inactive-bg);border-radius:16px;border-radius:var(--dnd-chip-radius-2026);color:#383f56;color:var(--dnd-chip-text);font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:var(--font-variation-brand);font-size:18px;font-size:var(--q-answer-chip-font-size,18px);line-height:26px;text-shadow:none;-webkit-box-shadow:0 5px 0 0 #e4e7f0;box-shadow:0 5px 0 0 #e4e7f0;-webkit-box-shadow:0 5px 0 0 var(--dnd-chip-inactive-border);box-shadow:0 5px 0 0 var(--dnd-chip-inactive-border);text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:-webkit-grab;cursor:grab;-webkit-box-sizing:border-box;box-sizing:border-box}._2cR43{position:absolute;top:50%;left:20px;width:24px;height:24px;max-width:24px!important;max-height:24px!important;margin:0!important;padding:0!important;-o-object-fit:contain;object-fit:contain;display:block;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}._3EDkg{min-width:0;max-width:100%}._3EDkg img{max-width:100%;max-height:120px;width:auto;height:auto;-o-object-fit:contain;object-fit:contain;display:inline-block;vertical-align:middle;margin:0!important}._1YHW9{opacity:.45}._3-vGs div,._3-vGs p{margin:0!important}._3-vGs .math-tex,._3-vGs .mjx-chtml,._3-vGs mjx-container{font-size:22px!important;font-size:var(--q-math-font-size,22px)!important;font-variation-settings:normal;word-spacing:normal;line-height:0}._3mCR1{opacity:1;background-color:#f3fcee;background-color:var(--dnd-chip-active-bg);border-color:#6dc14c;border-color:var(--dnd-chip-active-border);-webkit-box-shadow:0 5px 0 0 #6dc14c,0 8px 20px rgba(31,46,76,.18);box-shadow:0 5px 0 0 #6dc14c,0 8px 20px rgba(31,46,76,.18);-webkit-box-shadow:0 5px 0 0 var(--dnd-chip-active-shadow),var(--dnd-overlay-shadow);box-shadow:0 5px 0 0 var(--dnd-chip-active-shadow),var(--dnd-overlay-shadow);cursor:-webkit-grabbing;cursor:grabbing}@media (max-width:767px){.KG70k{gap:16px}._3-vGs{min-height:72px;padding:12px 48px;font-size:16px;line-height:24px}._2cR43{left:16px}}", ""]);
    t.locals = {
      listWrap: "KG70k",
      sortableItem: "_1kmpJ",
      answerChip: "_3-vGs",
      dragHandle: "_2cR43",
      answerChipContent: "_3EDkg",
      answerChipDragging: "_1YHW9",
      dragOverlay: "_3mCR1"
    };
  },
  1466:
  /*!************************************************************************!*\
    !*** ./src/components/Question/shared/DndAnswerChip/DndAnswerChip.css ***!
    \************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../../node_modules/css-loader??ref--6-rules-2!../../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./DndAnswerChip.css */1467);
    var r = n(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1467:
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/Question/shared/DndAnswerChip/DndAnswerChip.css ***!
    \********************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--dnd-accent:#68b52a;--dnd-accent-border:#61b97e;--dnd-accent-fill:#75de98;--dnd-chip-border:#85c056;--dnd-chip-fill:#ace380;--dnd-drop-zone-bg:#e4fdd0;--dnd-slot-filled-bg:#adec7a;--dnd-dragging-bg:#d1f5b4;--dnd-chip-text:#383f56;--dnd-chip-radius-2026:16px;--dnd-chip-active-bg:#f3fcee;--dnd-chip-active-border:#6dc14c;--dnd-chip-active-shadow:#6dc14c;--dnd-chip-inactive-bg:#fff;--dnd-chip-inactive-border:#e4e7f0;--dnd-chip-inactive-shadow:#c8cedd;--dnd-bank-panel-bg:#fff;--dnd-bank-panel-border:#e4e7f0;--dnd-bank-panel-radius:16px;--dnd-bank-title-color:#383f56;--dnd-bank-item-gap:24px;--dnd-match-prompt-bg:#fff;--dnd-match-prompt-border:#e4e7f0;--dnd-match-prompt-shadow:#e4e7f0;--dnd-match-drop-border:#6dc14c;--dnd-match-line-bg:#5ebc8a;--dnd-match-row-gap:24px;--dnd-match-box-min-height:56px;--dnd-match-box-radius:16px;--dnd-drop-over-outline:#4fab1e;--dnd-drop-over-bg:#d7f5b8;--dnd-bank-over-outline:#85c056;--dnd-bank-over-bg:#f7fff0;--dnd-bank-border:#ccc;--dnd-slot-border:#969393;--dnd-header-bg:#8ec554;--dnd-header-shadow:#213b0d;--dnd-overlay-shadow:0 8px 20px rgba(31,46,76,.18);--dnd-chip-inset-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,.17);--dnd-chip-radius:8px;--dnd-chip-max-width:420px;--dnd-bank-min-height:240px;--dnd-slot-min-height:80px;--dnd-list-min-height:240px;--tv-match-box-border:#e4e7f0;--tv-match-box-active:#6dc14c;--tv-match-box-width:300px;--tv-match-box-radius:16px;--tv-match-gap:140px;--tv-match-item-gap:24px;--tv-match-line-width:12}.QVzBx{width:100%;min-height:48px;max-height:180px;padding:11px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;border-radius:16px;border-radius:var(--dnd-chip-radius-2026);border:2px solid transparent;border-style:solid;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:var(--font-variation-brand);font-size:18px;font-size:var(--q-answer-chip-font-size,18px);line-height:26px;color:#383f56;color:var(--dnd-chip-text);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:-webkit-grab;cursor:grab;-ms-touch-action:none;touch-action:none;overflow:hidden;-ms-scroll-chaining:none;overscroll-behavior:contain;-webkit-transition:background-color .15s ease,border-color .15s ease,-webkit-box-shadow .15s ease,-webkit-transform .15s ease;transition:background-color .15s ease,border-color .15s ease,-webkit-box-shadow .15s ease,-webkit-transform .15s ease;-o-transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease,transform .15s ease;transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease,transform .15s ease;transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease,transform .15s ease,-webkit-box-shadow .15s ease,-webkit-transform .15s ease}.QVzBx *{-webkit-user-drag:none}.QVzBx>span{display:block;width:100%}.QVzBx p{margin-top:0!important;margin-bottom:0!important}.QVzBx br:last-child{display:none}.QVzBx img{max-width:100%;max-height:120px;width:auto;height:auto;-o-object-fit:contain;object-fit:contain;display:inline-block;vertical-align:middle}.QVzBx .math-tex,.QVzBx .mjx-chtml,.QVzBx mjx-container{font-size:22px!important;font-size:var(--q-math-font-size,22px)!important;font-variation-settings:normal;word-spacing:normal;line-height:0}._2wxxu{background:#f3fcee;background:var(--dnd-chip-active-bg);border-color:#6dc14c;border-color:var(--dnd-chip-active-border);-webkit-box-shadow:0 5px 0 0 #6dc14c;box-shadow:0 5px 0 0 #6dc14c;-webkit-box-shadow:0 5px 0 0 var(--dnd-chip-active-shadow);box-shadow:0 5px 0 0 var(--dnd-chip-active-shadow)}.TgqYj{background:#fff;background:var(--dnd-chip-inactive-bg);border-color:#e4e7f0;border-color:var(--dnd-chip-inactive-border);-webkit-box-shadow:0 5px 0 0 #c8cedd;box-shadow:0 5px 0 0 #c8cedd;-webkit-box-shadow:0 5px 0 0 var(--dnd-chip-inactive-shadow);box-shadow:0 5px 0 0 var(--dnd-chip-inactive-shadow)}._1H7S1{cursor:-webkit-grabbing;cursor:grabbing;opacity:.95;-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);-webkit-box-shadow:0 3px 0 0 #6dc14c;box-shadow:0 3px 0 0 #6dc14c;-webkit-box-shadow:0 3px 0 0 var(--dnd-chip-active-shadow);box-shadow:0 3px 0 0 var(--dnd-chip-active-shadow)}.TgqYj._1H7S1{-webkit-box-shadow:0 3px 0 0 #c8cedd;box-shadow:0 3px 0 0 #c8cedd;-webkit-box-shadow:0 3px 0 0 var(--dnd-chip-inactive-shadow);box-shadow:0 3px 0 0 var(--dnd-chip-inactive-shadow)}.LZEWc{cursor:default;opacity:.7}._10BZ-,.LZEWc{pointer-events:none}._10BZ-{cursor:-webkit-grabbing;cursor:grabbing;-webkit-box-shadow:0 5px 0 0 #6dc14c,0 8px 20px rgba(31,46,76,.18);box-shadow:0 5px 0 0 #6dc14c,0 8px 20px rgba(31,46,76,.18);-webkit-box-shadow:0 5px 0 0 var(--dnd-chip-active-shadow),var(--dnd-overlay-shadow);box-shadow:0 5px 0 0 var(--dnd-chip-active-shadow),var(--dnd-overlay-shadow)}", ""]);
    t.locals = {
      chip: "QVzBx",
      active: "_2wxxu",
      inactive: "TgqYj",
      dragging: "_1H7S1",
      disabled: "LZEWc",
      overlay: "_10BZ-"
    };
  },
  1468:
  /*!*****************************************************************************!*\
    !*** ./src/routes/skill-practice/text-entry-practice/textEntryPractice.css ***!
    \*****************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./textEntryPractice.css */1469);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1469:
  /*!*************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/text-entry-practice/textEntryPractice.css ***!
    \*************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "", ""]);
  },
  1470:
  /*!************************************************!*\
    !*** ./src/components/AnswerBox/AnswerBox.css ***!
    \************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./AnswerBox.css */1471);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1471:
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/AnswerBox/AnswerBox.css ***!
    \********************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._1wQlZ{padding:3px;max-height:50px}._1wQlZ,._3Ukvt{width:80px;margin-bottom:-14px;display:inline-block;min-height:35px;border-radius:12px;border:1px solid #c5cee0;background:#fff;-webkit-box-shadow:none;box-shadow:none;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;overflow:hidden;text-align:center;margin-left:3px;line-height:1;margin-right:3px}._3Ukvt{padding:8px 3px 3px}._1wQlZ:focus,._3Ukvt:focus{border:1px solid #4f8f36}._34y-u{left:-100px}._2bnSx,._34y-u{position:absolute;width:320px;height:auto;border:1px solid #9e9e9e;-webkit-box-shadow:0 5px 20px #ccc;box-shadow:0 5px 20px #ccc;padding:5px;text-align:center;margin-top:20px;background:#fff;z-index:100;border-radius:5px}._2m4Y3{border:1px solid #9e9e9e;font-size:20px;width:49px;height:43px;text-align:center;margin-right:10px;margin-bottom:4px;-ms-flex-align:center;align-items:center;-webkit-box-shadow:1px 1px 2px #0b3a0b;box-shadow:1px 1px 2px #0b3a0b;cursor:pointer}._2m4Y3,._21J7F{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}._21J7F{margin-top:15px;margin-bottom:15px}._1i58h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;margin-top:-10px}button{margin-top:4px;border:1px solid #9e9e9e;background:#93ec93;padding:3px 18px;border-radius:5px;margin-left:5px}.edKvQ{cursor:pointer;text-shadow:1px 1px 1px #ccc;color:#68b52a;font-size:15px;font-weight:700}._156c5{background:#1c84c6;color:#fff}._2i7-0,._156c5{padding:6px 20px;font-weight:700;border:1px solid #9e9e9e;border-radius:4px}._2i7-0{color:#333;margin-left:10px}._2i7-0,.KGgfr{background:#fff}.KGgfr{width:300px;height:60px;margin-top:5px;padding:3px!important;border:1px solid #9e9e9e}@media (max-width:768px){._34y-u{position:fixed;width:320px;height:auto;border:1px solid #9e9e9e;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-shadow:0 5px 20px #ccc;box-shadow:0 5px 20px #ccc;padding:5px;text-align:center;margin-top:30px;background:#fff;z-index:100;border-radius:5px}}", ""]);
    t.locals = {
      answerBox: "_1wQlZ",
      answerBoxUnlimit: "_3Ukvt",
      formulaBox: "_34y-u",
      formulaBoxInExam: "_2bnSx",
      formulaButton: "_2m4Y3",
      listFormulas: "_21J7F",
      inputBox: "_1i58h",
      headerFormula: "edKvQ",
      okBtn: "_156c5",
      cancelBtn: "_2i7-0",
      mathTextbox: "KGgfr"
    };
  },
  1472:
  /*!***********************************************************************************!*\
    !*** ./src/routes/skill-practice/text-dropdown-practice/textDropdownPractice.css ***!
    \***********************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./textDropdownPractice.css */1473);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1473:
  /*!*******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/text-dropdown-practice/textDropdownPractice.css ***!
    \*******************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ".display-inlineblock-select .Select-menu-outer,.dropdown .Select-menu-outer,.matchArea .Select-menu-outer,.text-dropdown-select-root .Select-menu-outer{max-height:min(60vh,480px)!important;z-index:20}.display-inlineblock-select .Select-menu,.dropdown .Select-menu,.matchArea .Select-menu,.text-dropdown-select-root .Select-menu{max-height:min(60vh,480px)!important;overflow-y:scroll!important;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:#7a8299 #e8ebf2;background:-webkit-gradient(linear,left top,left bottom,color-stop(30%,#fff),to(hsla(0,0%,100%,0))) top,-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(70%,#fff)) bottom,-webkit-gradient(linear,left top,left bottom,from(rgba(56,63,86,.18)),to(rgba(56,63,86,0))) top,-webkit-gradient(linear,left top,left bottom,from(rgba(56,63,86,0)),to(rgba(56,63,86,.22))) bottom,#fff;background:-o-linear-gradient(#fff 30%,hsla(0,0%,100%,0)) top,-o-linear-gradient(hsla(0,0%,100%,0),#fff 70%) bottom,-o-linear-gradient(rgba(56,63,86,.18),rgba(56,63,86,0)) top,-o-linear-gradient(rgba(56,63,86,0),rgba(56,63,86,.22)) bottom,#fff;background:linear-gradient(#fff 30%,hsla(0,0%,100%,0)) top,linear-gradient(hsla(0,0%,100%,0),#fff 70%) bottom,linear-gradient(rgba(56,63,86,.18),rgba(56,63,86,0)) top,linear-gradient(rgba(56,63,86,0),rgba(56,63,86,.22)) bottom,#fff;background-repeat:no-repeat;background-size:100% 24px,100% 24px,100% 10px,100% 14px,100% 100%;background-attachment:local,local,scroll,scroll,local}.display-inlineblock-select .Select-menu::-webkit-scrollbar,.dropdown .Select-menu::-webkit-scrollbar,.matchArea .Select-menu::-webkit-scrollbar,.text-dropdown-select-root .Select-menu::-webkit-scrollbar{width:10px;-webkit-appearance:none}.display-inlineblock-select .Select-menu::-webkit-scrollbar-track,.dropdown .Select-menu::-webkit-scrollbar-track,.matchArea .Select-menu::-webkit-scrollbar-track,.text-dropdown-select-root .Select-menu::-webkit-scrollbar-track{background:#e8ebf2;border-radius:8px;margin:4px 0}.display-inlineblock-select .Select-menu::-webkit-scrollbar-thumb,.dropdown .Select-menu::-webkit-scrollbar-thumb,.matchArea .Select-menu::-webkit-scrollbar-thumb,.text-dropdown-select-root .Select-menu::-webkit-scrollbar-thumb{background:#7a8299;border-radius:8px;border:2px solid #e8ebf2;min-height:36px}.display-inlineblock-select .Select-menu::-webkit-scrollbar-thumb:active,.dropdown .Select-menu::-webkit-scrollbar-thumb:active,.matchArea .Select-menu::-webkit-scrollbar-thumb:active,.text-dropdown-select-root .Select-menu::-webkit-scrollbar-thumb:active{background:#555c73}.display-inlineblock-select .Select-option,.dropdown .Select-option,.matchArea .Select-option,.text-dropdown-select-root .Select-option{white-space:normal;word-break:break-word;line-height:1.35;padding-top:10px;padding-bottom:10px}.display-inlineblock-select,.display-inlineblock-select .Select,.dropdown .Select,.matchArea .Select,.text-dropdown-select-root,.text-dropdown-select-root .Select{vertical-align:middle}.display-inlineblock-select .Select-control,.dropdown .Select-control,.matchArea .Select-control,.text-dropdown-select-root .Select-control{height:auto!important;min-height:36px;overflow:visible!important;border:1px solid #c5cee0!important;border-radius:12px!important;background:#fff!important;-webkit-box-shadow:none!important;box-shadow:none!important}.display-inlineblock-select .Select.is-focused>.Select-control,.dropdown .Select.is-focused>.Select-control,.matchArea .Select.is-focused>.Select-control,.text-dropdown-select-root .Select.is-focused>.Select-control{border-color:#c5cee0!important;-webkit-box-shadow:none!important;box-shadow:none!important}.display-inlineblock-select .Select-multi-value-wrapper,.dropdown .Select-multi-value-wrapper,.matchArea .Select-multi-value-wrapper,.text-dropdown-select-root .Select-multi-value-wrapper{display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center;align-items:center;min-height:34px}.display-inlineblock-select .Select-placeholder,.dropdown .Select-placeholder,.matchArea .Select-placeholder,.text-dropdown-select-root .Select-placeholder{position:relative!important;inset:auto!important;display:-ms-flexbox!important;display:flex!important;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;min-height:34px;padding:6px 4px 6px 10px!important;-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.35!important}.display-inlineblock-select .Select--single .Select-input,.dropdown .Select--single .Select-input,.matchArea .Select--single .Select-input,.text-dropdown-select-root .Select--single .Select-input{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;overflow:hidden}.display-inlineblock-select .Select--single>.Select-control .Select-value,.dropdown .Select--single>.Select-control .Select-value,.matchArea .Select--single>.Select-control .Select-value,.text-dropdown-select-root .Select--single>.Select-control .Select-value{position:relative!important;inset:auto!important;display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;padding:6px 4px 6px 10px!important;line-height:1.35!important;overflow:visible!important;white-space:normal!important;-o-text-overflow:clip!important;text-overflow:clip!important}.display-inlineblock-select .Select-value-label,.dropdown .Select-value-label,.matchArea .Select-value-label,.text-dropdown-select-root .Select-value-label{display:block;width:100%;min-width:0;white-space:normal!important;overflow-wrap:anywhere;word-break:break-word}.display-inlineblock-select .Select-value-label p,.dropdown .Select-value-label p,.matchArea .Select-value-label p,.text-dropdown-select-root .Select-value-label p{margin:0!important}.display-inlineblock-select .Select-value-label img,.dropdown .Select-value-label img,.matchArea .Select-value-label img,.text-dropdown-select-root .Select-value-label img{max-width:100%!important;height:auto!important}._3ALYM{border:6px groove #83e25f}", ""]);
    t.locals = {
      border_custom: "_3ALYM"
    };
  },
  1474:
  /*!**************************************************************************!*\
    !*** ./src/routes/skill-practice/fraction-practice/fractionPractice.css ***!
    \**************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./fractionPractice.css */1475);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1475:
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/fraction-practice/fractionPractice.css ***!
    \**********************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ".J6ddr{margin-left:20px}._3yNpq{text-align:center}.s8R37{padding:5px}._1E6d8{border-bottom:1px solid}._1E6d8,._2ehE1{text-align:center}._2ehE1{padding-right:3px}._1ewBc{width:38px!important;text-align:center;margin:2px!important;border-radius:3px!important;border:1px solid #999!important;padding:5px!important}.QQjG6{line-height:1.4}._31A6r{width:38px!important;text-align:center;margin:2px;border:1px solid #ccc!important}", ""]);
    t.locals = {
      fractionViewTable: "J6ddr",
      fractionViewDeno: "_3yNpq",
      fractionViewSign: "s8R37",
      fractionViewNormalTd: "_1E6d8",
      fractionViewWhole: "_2ehE1",
      inputBox: "_1ewBc",
      fractionViewText: "QQjG6",
      textBoxMid: "_31A6r"
    };
  },
  1476:
  /*!***********************************************************************************!*\
    !*** ./src/routes/skill-practice/highschool-single-practice/hsSinglePractice.css ***!
    \***********************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./hsSinglePractice.css */1477);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1477:
  /*!*******************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/highschool-single-practice/hsSinglePractice.css ***!
    \*******************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._27IHb{padding-top:10px;padding-bottom:10px}._3IG_0{background-color:#fff;border:1px solid #e5e6e7;border-radius:1px;color:inherit;font-size:14px;font-weight:400;line-height:1;text-align:center}._28QnM{font-size:16px;padding:10px!important}._28QnM ._3JTw7{font-size:22px!important;font-size:var(--q-math-font-size,22px)!important}._28QnM img{max-width:100%!important;height:auto}._1jQ4_{border:6px groove #83e25f}._16QI2{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}._1hE9m,._16QI2{width:100%}", ""]);
    t.locals = {
      answerPadding: "_27IHb",
      input_group_addon: "_3IG_0",
      content_answer: "_28QnM",
      "math-tex": "_3JTw7",
      border_custom: "_1jQ4_",
      display_answer_subQuestion_container: "_16QI2",
      display_answer_subQuestion_item: "_1hE9m"
    };
  },
  1478:
  /*!***************************************************************************************!*\
    !*** ./src/routes/skill-practice/highschool-multiple-practice/hsMultiplePractice.css ***!
    \***************************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./hsMultiplePractice.css */1479);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1479:
  /*!***********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/highschool-multiple-practice/hsMultiplePractice.css ***!
    \***********************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._3v70D{padding-top:10px;padding-bottom:10px}._1KFG2{background-color:#fff;border:1px solid #e5e6e7;border-radius:1px;color:inherit;font-size:14px;font-weight:400;line-height:1;text-align:center}._3cr9e{font-size:16px;padding:10px!important}._3cr9e .Y8OKa{font-size:22px!important;font-size:var(--q-math-font-size,22px)!important}._3cr9e img{max-width:100%!important;height:auto}._4Mb5c{border:6px groove #83e25f}", ""]);
    t.locals = {
      answerPadding: "_3v70D",
      input_group_addon: "_1KFG2",
      content_answer: "_3cr9e",
      "math-tex": "Y8OKa",
      border_custom: "_4Mb5c"
    };
  },
  1480:
  /*!**********************************************************************!*\
    !*** ./src/routes/skill-practice/result-practice/PracticeResult.css ***!
    \**********************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./PracticeResult.css */1481);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1481:
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/result-practice/PracticeResult.css ***!
    \******************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "", ""]);
  },
  1482:
  /*!**********************************************************!*\
    !*** ./src/routes/skill-practice/pick-item/pickItem.css ***!
    \**********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./pickItem.css */1483);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1483:
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/pick-item/pickItem.css ***!
    \******************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ".wjSuo{border:1px solid #ddd;border-radius:10px;padding:5px 10px;cursor:pointer;margin-right:7px}._1Ar1s{cursor:pointer;font-weight:700}", ""]);
    t.locals = {
      piAnswerChoice: "wjSuo",
      piAnswerChoiceChosen: "_1Ar1s"
    };
  },
  1484:
  /*!***************************************************************************!*\
    !*** ./src/routes/skill-practice/pick-item-sentence/pickItemSentence.css ***!
    \***************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./pickItemSentence.css */1485);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1485:
  /*!***********************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/pick-item-sentence/pickItemSentence.css ***!
    \***********************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ".lfEkk{border:1px solid #ddd;border-radius:10px;padding:5px 10px;margin-right:7px}.lfEkk,.wBSlG{cursor:pointer}.wBSlG{font-weight:700}", ""]);
    t.locals = {
      piAnswerChoice: "lfEkk",
      piAnswerChoiceChosen: "wBSlG"
    };
  },
  1486:
  /*!***********************************************************!*\
    !*** ./src/routes/skill-practice/underline/underline.css ***!
    \***********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./underline.css */1487);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1487:
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/underline/underline.css ***!
    \*******************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._3XfCK p:last-of-type span:hover{cursor:pointer;font-weight:700}", ""]);
    t.locals = {
      questionWrap: "_3XfCK"
    };
  },
  1488:
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/Question/shared/TvMatchingShared.css ***!
    \*********************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--dnd-accent:#68b52a;--dnd-accent-border:#61b97e;--dnd-accent-fill:#75de98;--dnd-chip-border:#85c056;--dnd-chip-fill:#ace380;--dnd-drop-zone-bg:#e4fdd0;--dnd-slot-filled-bg:#adec7a;--dnd-dragging-bg:#d1f5b4;--dnd-chip-text:#383f56;--dnd-chip-radius-2026:16px;--dnd-chip-active-bg:#f3fcee;--dnd-chip-active-border:#6dc14c;--dnd-chip-active-shadow:#6dc14c;--dnd-chip-inactive-bg:#fff;--dnd-chip-inactive-border:#e4e7f0;--dnd-chip-inactive-shadow:#c8cedd;--dnd-bank-panel-bg:#fff;--dnd-bank-panel-border:#e4e7f0;--dnd-bank-panel-radius:16px;--dnd-bank-title-color:#383f56;--dnd-bank-item-gap:24px;--dnd-match-prompt-bg:#fff;--dnd-match-prompt-border:#e4e7f0;--dnd-match-prompt-shadow:#e4e7f0;--dnd-match-drop-border:#6dc14c;--dnd-match-line-bg:#5ebc8a;--dnd-match-row-gap:24px;--dnd-match-box-min-height:56px;--dnd-match-box-radius:16px;--dnd-drop-over-outline:#4fab1e;--dnd-drop-over-bg:#d7f5b8;--dnd-bank-over-outline:#85c056;--dnd-bank-over-bg:#f7fff0;--dnd-bank-border:#ccc;--dnd-slot-border:#969393;--dnd-header-bg:#8ec554;--dnd-header-shadow:#213b0d;--dnd-overlay-shadow:0 8px 20px rgba(31,46,76,.18);--dnd-chip-inset-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,.17);--dnd-chip-radius:8px;--dnd-chip-max-width:420px;--dnd-bank-min-height:240px;--dnd-slot-min-height:80px;--dnd-list-min-height:240px;--tv-match-box-border:#e4e7f0;--tv-match-box-active:#6dc14c;--tv-match-box-width:300px;--tv-match-box-radius:16px;--tv-match-gap:140px;--tv-match-item-gap:24px;--tv-match-line-width:12}._1b95X{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:300px;width:var(--tv-match-box-width);max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:1}.gn-nK{-ms-flex-pack:end;justify-content:flex-end}._28WND,.gn-nK{-ms-flex-direction:row;flex-direction:row}._28WND{-ms-flex-pack:start;justify-content:flex-start}._1pNLx{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:56px;min-height:var(--dnd-match-box-min-height,48px);max-height:180px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;padding:11px 20px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;background:var(--dnd-match-prompt-bg,#fff);border:2px solid #e4e7f0;border:2px solid var(--dnd-match-prompt-border,#e4e7f0);border-radius:16px;border-radius:var(--dnd-match-box-radius,16px);-webkit-box-shadow:0 5px 0 0 #e4e7f0;box-shadow:0 5px 0 0 #e4e7f0;-webkit-box-shadow:0 5px 0 0 var(--dnd-match-prompt-shadow,#e4e7f0);box-shadow:0 5px 0 0 var(--dnd-match-prompt-shadow,#e4e7f0);color:#383f56;color:var(--dnd-chip-text,#383f56);font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:var(--font-variation-brand);font-size:18px;font-size:var(--q-answer-chip-font-size,18px);line-height:26px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:none;touch-action:none;overflow:auto;-webkit-overflow-scrolling:touch;-ms-scroll-chaining:none;overscroll-behavior:contain;-webkit-transition:border-color .15s ease,background-color .15s ease,-webkit-box-shadow .15s ease;transition:border-color .15s ease,background-color .15s ease,-webkit-box-shadow .15s ease;-o-transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease;transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease;transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease,-webkit-box-shadow .15s ease}._1pNLx p{margin-bottom:0!important}._1t06Z{display:inline;max-width:100%;min-width:0}._1t06Z b,._1t06Z strong{display:inline;font-weight:700}._1pNLx .math-tex,._1pNLx .mjx-chtml,._1pNLx mjx-container{font-size:22px!important;font-size:var(--q-math-font-size,22px)!important;font-variation-settings:normal;word-spacing:normal;line-height:0}._1pNLx img{max-width:100%;max-height:96px;width:auto;height:auto;display:inline-block;vertical-align:middle}._1pNLx img,.dtcOa{-o-object-fit:contain;object-fit:contain;margin:0!important}.dtcOa{position:relative;z-index:1;width:26px;height:26px;-ms-flex:0 0 26px;flex:0 0 26px;display:block;padding:0!important;max-width:26px!important;max-height:26px!important;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._2qMQ7{border-radius:50%;background:#6dc14c;-webkit-box-shadow:inset 0 0 0 4px #a8e08a;box-shadow:inset 0 0 0 4px #a8e08a}.gn-nK .dtcOa{margin-left:10px!important}._28WND .dtcOa{margin-right:10px!important}._1b95X:not(._3xfFq):hover ._1pNLx,._1J6ZJ ._1pNLx,._3w6ZD ._1pNLx{border-color:#4fab1e;border-color:var(--dnd-drop-over-outline,#4fab1e);background:#d7f5b8;background:var(--dnd-drop-over-bg,#d7f5b8);-webkit-box-shadow:0 0 0 3px rgba(79,171,30,.28);box-shadow:0 0 0 3px rgba(79,171,30,.28)}._3xfFq{pointer-events:none;opacity:.85}._3xfFq,._3xfFq ._1pNLx{cursor:default}.eMpuq{position:relative;margin-top:30px}._1XfW7{width:100%}._1ATNk,._1ATNk ._1pNLx{cursor:crosshair}.Pkh9K{-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:flex-start;gap:140px;gap:var(--tv-match-gap);position:relative;z-index:1;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:100%;margin:0 auto}._3e7Ve,.Pkh9K{display:-ms-flexbox;display:flex}._3e7Ve{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch;gap:24px;gap:var(--tv-match-item-gap);-ms-flex:0 0 auto;flex:0 0 auto}._3-dhn{position:absolute;top:0;bottom:0;left:0;right:0;z-index:2;pointer-events:none}._3oBIq{fill:none;stroke-width:12;stroke-width:var(--tv-match-line-width);stroke-linecap:round}._1YKi_{stroke-dasharray:8 6;opacity:.9;pointer-events:none}._3MbTt{border:1px solid #c5cee0;border-radius:12px;padding:12px 16px;margin-bottom:12px;background:#fff;color:#2e3a59;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:var(--font-variation-brand);font-size:16px;line-height:1.5;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .15s ease,border-color .15s ease;-o-transition:background-color .15s ease,border-color .15s ease;transition:background-color .15s ease,border-color .15s ease}._288tZ{background:#f3f5fa;border-color:#c5cee0}._2f5Kj{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:12px;width:100%;cursor:pointer;padding:0;font-weight:500;color:#2e3a59;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._2f5Kj:hover{color:#2e3a59;font-weight:700}._2f5Kj:after{content:\"+\";-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;border-radius:50%;border:1px solid #c5cee0;background:#fff;color:#2e3a59;font-size:18px;font-weight:600;line-height:22px;text-align:center;-webkit-transition:background-color .15s ease,border-color .15s ease,color .15s ease;-o-transition:background-color .15s ease,border-color .15s ease,color .15s ease;transition:background-color .15s ease,border-color .15s ease,color .15s ease}._288tZ ._2f5Kj:after{content:\"\\2212\";background:#edf1f7;border-color:#c5cee0;color:#2e3a59}@media (max-width:767px){.Pkh9K{gap:48px}._1b95X{width:160px}._1pNLx{padding:8px 12px;font-size:16px;line-height:24px}}@media (max-width:480px){._1XfW7{padding-right:24px;-webkit-box-sizing:border-box;box-sizing:border-box}.Pkh9K{width:100%;gap:16px}._3e7Ve{-ms-flex:1 1;flex:1 1;min-width:0}._1b95X{width:100%}._1pNLx{padding:8px}._3oBIq{stroke-width:8}}", ""]);
    t.locals = {
      itemRow: "_1b95X",
      itemRowLeft: "gn-nK",
      itemRowRight: "_28WND",
      boxAnswer: "_1pNLx",
      boxAnswerText: "_1t06Z",
      node: "dtcOa",
      nodeFallback: "_2qMQ7",
      disabled: "_3xfFq",
      isActive: "_1J6ZJ",
      dropTarget: "_3w6ZD",
      matchQuestionContainer: "eMpuq",
      matchArea: "_1XfW7",
      isDragging: "_1ATNk",
      matchQuestionBoxGroup: "Pkh9K",
      matchQuestionBox: "_3e7Ve",
      matchQuestionLine: "_3-dhn",
      matchLine: "_3oBIq",
      previewLine: "_1YKi_",
      longTextToggle: "_3MbTt",
      longTextToggleOpen: "_288tZ",
      longTextToggleBtn: "_2f5Kj"
    };
  },
  1489:
  /*!****************************************************************************!*\
    !*** ./src/routes/skill-practice/underline-sentence/underlineSentence.css ***!
    \****************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./underlineSentence.css */1490);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1490:
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/underline-sentence/underlineSentence.css ***!
    \************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "", ""]);
  },
  1491:
  /*!**********************************************************************!*\
    !*** ./src/routes/skill-practice/components/ScoreHint/ScoreHint.css ***!
    \**********************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../../node_modules/css-loader??ref--6-rules-2!../../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./ScoreHint.css */1492);
    var r = n(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1492:
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/components/ScoreHint/ScoreHint.css ***!
    \******************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._1n6vv ._1HyVw,._1n6vv ._1RdX1{background:#fff}._2LjAN{border-bottom:1px solid #e1e1e1;margin-bottom:15px;padding-bottom:10px;height:50px}._2LjAN>h3{font-weight:700;font-size:24px;line-height:28px}._1vnQr{font-size:16px;line-height:28px;color:#798195;padding:20px 0}._2DP_a{color:#2e3a59;font-size:14px}._1lIi1{background-color:#65b446;color:#fff!important}._1lIi1,.JNnxX{white-space:inherit;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}.JNnxX{background-color:#e4e9f2;color:#8f9bb3!important}._1e2qd{background-color:#fff;color:#2e3a59!important;white-space:inherit;border:1px solid #c5cee0;font-weight:700;margin:10px;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}.UQoBB{background-color:#65b446;color:#fff!important;border-radius:20px}._1ZND9,.UQoBB{-ms-flex:1 1;flex:1 1;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;text-align:center;padding:10px}._1ZND9{background-color:#fff;color:#000!important}._1ZND9,.rsH_j{border:1px solid #ccc;border-radius:20px}.rsH_j{background-color:#f44336;text-align:center;-ms-flex:1 1;flex:1 1;color:#fff!important;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;padding:10px}._1FxYt,._2LmBl{background-color:#f3f3f4}._1n6vv{background-color:#fff;background-color:var(--white-color)}.yuH6X{border-top:0;padding:20px 0}._83ztJ{clear:both;margin-bottom:0;margin-top:0;padding:0}._1vpOt{background-color:#fff;color:inherit;padding:15px 20px 20px;border-color:#e7eaec;-o-border-image:none;border-image:none;border-style:solid solid none;border-width:1px 0;clear:both}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}._25aOe{background-color:rgba(0,0,0,.3)}._18Ovn,._25aOe{position:fixed;top:0;bottom:0;left:0;right:0;padding:50px;z-index:99999}._18Ovn{background-color:#1e1e1e}._3lEVb{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);padding:50px;z-index:2}._3c8GP{margin-top:12px}._1aLtG{margin-bottom:40px}.SKpcI{margin-bottom:50px}._3l-p3{margin-bottom:60px}._34Roa{margin-bottom:70px}.QH3x8{background-color:#65b446;padding:10px 25px;color:#fff;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.QH3x8:hover{color:#65b446;-webkit-box-shadow:none;box-shadow:none}._37SEf,.QH3x8:hover{background-color:#fff}._37SEf{padding:10px 25px;color:#2e3a59;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._3QptL{margin-bottom:16px}@media (max-width:360px){._37SEf{background-color:#fff;color:#2e3a59;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0}._37SEf,.QH3x8{padding:10px 15px;font-size:15px;font-weight:500;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.QH3x8{background-color:#65b446;color:#fff;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446}}.bMkax{font-family:Google Sans Flex,sans-serif!important;font-family:var(--font-family-brand)!important;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand)}._2bxrI{display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;top:calc(100% + 2px);z-index:10001;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:min(420px,90vw);padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;background-color:#fff;opacity:1;isolation:isolate;border:1px solid #e4e9f2;border-radius:8px;-webkit-box-shadow:0 8px 24px rgba(31,46,76,.18);box-shadow:0 8px 24px rgba(31,46,76,.18);color:#2e3a59;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:14px;line-height:1.45;pointer-events:auto}._2bxrI,._2bxrI:before{position:absolute;left:0}._2bxrI:before{content:\"\";right:0;top:-6px;height:6px}.bOA2y{margin-bottom:8px;font-weight:600;font-size:15px;line-height:1.4}._1faSs{width:100%;margin-bottom:6px}._1faSs:last-child{margin-bottom:0}.MCwPg{display:block;font-weight:700;color:#2e3a59}._3D66W{margin:2px 0 0;line-height:1.4}._35Dzi{color:#65b446;font-weight:700}._25QhY{color:#ff6b3d;font-weight:700}", ""]);
    t.locals = {
      fontBrand: "bMkax",
      white_bg: "_1n6vv",
      navbar_fixed_top: "_1HyVw",
      navbar_static_top: "_1RdX1",
      headerBox: "_2LjAN",
      labelFilter: "_1vnQr",
      textLoading: "_2DP_a",
      btnGreenNew: "_1lIi1",
      btnGrayNew: "JNnxX",
      btnWhiteNew: "_1e2qd",
      btnGreenNewFlex: "UQoBB",
      btnWhiteNewFlex: "_1ZND9",
      btnRedNewFlex: "rsH_j",
      gray_bg: "_1FxYt",
      "bg-muted": "_2LmBl",
      container: "yuH6X",
      ibox: "_83ztJ",
      ibox_content: "_1vpOt",
      backdropStyle: "_25aOe",
      backdropStyle3: "_18Ovn",
      backdropStyle2: "_3lEVb",
      root: "_3c8GP",
      "u-margin-bottom-4": "_1aLtG",
      "u-margin-bottom-5": "SKpcI",
      "u-margin-bottom-6": "_3l-p3",
      "u-margin-bottom-7": "_34Roa",
      btn_green_new: "QH3x8",
      btn_white_new: "_37SEf",
      margin_bottom_16: "_3QptL",
      scoreHint: "_2bxrI",
      hintTitle: "bOA2y",
      hintRow: "_1faSs",
      hintRange: "MCwPg",
      hintDetail: "_3D66W",
      trueScore: "_35Dzi",
      wrongScore: "_25QhY"
    };
  },
  1518:
  /*!********************************************************!*\
    !*** ./src/components/QuestionAudio/QuestionAudio.css ***!
    \********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./QuestionAudio.css */1519);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1519:
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/QuestionAudio/QuestionAudio.css ***!
    \****************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._2K8v_{display:-ms-inline-flexbox;display:inline-flex;margin-left:10px;vertical-align:middle;position:relative;top:-2px}._1_L_A,._2K8v_{-ms-flex-align:center;align-items:center}._1_L_A{background:#f3f5fa;border-radius:50%;width:48px;height:48px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;border:none;cursor:pointer;padding:0;font-size:22px}.s7bi6{width:24px;height:24px;margin:0;display:block}", ""]);
    t.locals = {
      icon__audio_question: "_2K8v_",
      soundBtn: "_1_L_A",
      soundBtnIcon: "s7bi6"
    };
  },
  1543:
  /*!***********************************************!*\
    !*** ./src/components/Error/ErrorBoundary.js ***!
    \***********************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i;
    var a = n(/*! react */0);
    var s = n(/*! react-apollo */305);
    var l = n(/*! lodash.flowright */14);
    var c = n.n(l);
    var d = n(/*! ./graphql/saveError.graphql */1549);
    var u = n.n(d);
    var p = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var f = n.n(p);
    var m = n(/*! ./style.css */1550);
    var h = n.n(m);
    function b(e) {
      return (b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function g(e, t, n, o) {
      i ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && r) {
        for (var c in r) {
          if (t[c] === undefined) {
            t[c] = r[c];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: i,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function v(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, O(o.key), o);
      }
    }
    function y(e, t) {
      return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function w(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = S(e);
        if (t) {
          var r = S(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return k(this, n);
      };
    }
    function k(e, t) {
      if (t && (b(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _(e);
    }
    function _(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function S(e) {
      return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function N(e, t, n) {
      if ((t = O(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function O(e) {
      var t = function (e, t) {
        if (b(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (b(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (b(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var j = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          y(e, t);
        }
      })(s, e);
      var t;
      var n;
      var i;
      var a = w(s);
      function s() {
        var e;
        v(this, s);
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) {
          n[o] = arguments[o];
        }
        N(_(e = a.call.apply(a, [this].concat(n))), "state", {
          hasError: false,
          errorMessage: ""
        });
        return e;
      }
      t = s;
      if (n = [{
        key: "componentDidCatch",
        value: function (e, t) {
          var n = this;
          this.setState({
            hasError: true,
            errorMessage: e
          }, function () {
            n.logError(e.toString() + t.componentStack);
          });
        }
      }, {
        key: "logError",
        value: function (e) {
          this.props.SaveErrorLog({
            variables: {
              message: e
            }
          }).then(function (e) {}).catch(function (e) {});
        }
      }, {
        key: "render",
        value: function () {
          if (this.state.hasError) {
            return g("div", {
              className: "container",
              style: {
                marginTop: "30px"
              }
            }, undefined, o ||= g("h3", {}, undefined, "Nếu chưa đăng nhập, bạn cần đăng nhập lại để làm tiếp."), g("a", {
              href: "/login",
              className: "btn btn-rounded btn-green"
            }, undefined, r ||= g("i", {
              className: "fa fa-sign-in"
            }), g("span", {
              className: h.a.span_header_top
            }, undefined, "Đăng nhập")));
          } else {
            return this.props.children;
          }
        }
      }]) {
        x(t.prototype, n);
      }
      if (i) {
        x(t, i);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return s;
    }(a.Component);
    t.a = c()(s.b, f()(h.a), Object(s.a)(u.a, {
      name: "SaveErrorLog"
    }))(j);
  },
  1549:
  /*!********************************************************!*\
    !*** ./src/components/Error/graphql/saveError.graphql ***!
    \********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "SaveError"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "message"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "SaveErrorLog"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "errorMessage"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "message"
                }
              }
            }],
            directives: []
          }]
        }
      }],
      loc: {
        start: 0,
        end: 88
      }
    };
    n.loc.source = {
      body: "mutation SaveError($message: String) {\n  SaveErrorLog(\n    errorMessage: $message\n  )\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.SaveError = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "SaveError");
  },
  1550:
  /*!****************************************!*\
    !*** ./src/components/Error/style.css ***!
    \****************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./style.css */1551);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1551:
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/Error/style.css ***!
    \************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._2icqn{font-size:12px;padding:6px;text-transform:uppercase;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;width:140px;white-space:nowrap;color:#55c579;font-weight:500;margin-top:-8px}", ""]);
    t.locals = {
      span_header_top: "_2icqn"
    };
  },
  1609:
  /*!***************************************!*\
    !*** ./node_modules/lodash/random.js ***!
    \***************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! ./_baseRandom */869);
    var r = n(/*! ./_isIterateeCall */1443);
    var i = n(/*! ./toFinite */350);
    var a = parseFloat;
    var s = Math.min;
    var l = Math.random;
    e.exports = function (e, t, n) {
      if (n && typeof n != "boolean" && r(e, t, n)) {
        t = n = undefined;
      }
      if (n === undefined) {
        if (typeof t == "boolean") {
          n = t;
          t = undefined;
        } else if (typeof e == "boolean") {
          n = e;
          e = undefined;
        }
      }
      if (e === undefined && t === undefined) {
        e = 0;
        t = 1;
      } else {
        e = i(e);
        if (t === undefined) {
          t = e;
          e = 0;
        } else {
          t = i(t);
        }
      }
      if (e > t) {
        var c = e;
        e = t;
        t = c;
      }
      if (n || e % 1 || t % 1) {
        var d = l();
        return s(e + d * (t - e + a("1e-" + ((d + "").length - 1))), t);
      }
      return o(e, t);
    };
  },
  1725:
  /*!*************************************************************!*\
    !*** ./src/components/QuestionAudio/QuestionHtmlContent.js ***!
    \*************************************************************/
  /*! exports provided: splitHtmlWithAudio, hasEmbeddedAudio, default */
  /*! exports used: default, hasEmbeddedAudio */
  function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return l;
    });
    n(/*! react */0);
    var o;
    var r = n(/*! ./ResilientHtmlAudio */1810);
    function i(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var a = /(?:<div\b[^>]*\bckeditor-html5-audio\b[^>]*>\s*)?<audio\b([^>]*)(?:\/>|>(?:\s*<\/audio>)?)(?:\s*<\/div>)?/gi;
    function s(e) {
      if (!e) {
        return "";
      }
      var t = e.match(/\bsrc\s*=\s*(["'])(.*?)\1/i);
      if (t) {
        return t[2].trim();
      } else {
        return "";
      }
    }
    function l(e) {
      return !!e && (a.lastIndex = 0, a.test(String(e)));
    }
    function c(e) {
      var t = e.html;
      var n = e.className;
      var o = e.style;
      var l = function (e) {
        var t = e == null ? "" : String(e);
        if (!t) {
          return [];
        }
        var n;
        var o = [];
        var r = 0;
        for (a.lastIndex = 0; (n = a.exec(t)) !== null;) {
          if (n.index > r) {
            o.push({
              type: "html",
              value: t.slice(r, n.index)
            });
          }
          var i = s(n[1]);
          if (i) {
            o.push({
              type: "audio",
              src: i
            });
          } else {
            o.push({
              type: "html",
              value: n[0]
            });
          }
          r = n.index + n[0].length;
        }
        if (r < t.length) {
          o.push({
            type: "html",
            value: t.slice(r)
          });
        }
        return o;
      }(t);
      if (l.some(function (e) {
        return e.type === "audio";
      })) {
        return i("div", {
          className: n,
          style: o
        }, undefined, l.map(function (e, t) {
          if (e.type === "audio") {
            return i(r.a, {
              src: e.src
            }, `audio-${t}-${e.src}`);
          } else if (e.value) {
            return i("div", {
              dangerouslySetInnerHTML: {
                __html: e.value
              }
            }, `html-${t}`);
          } else {
            return null;
          }
        }));
      } else {
        return i("div", {
          className: n,
          style: o,
          dangerouslySetInnerHTML: {
            __html: t || ""
          }
        });
      }
    }
    c.defaultProps = {
      html: "",
      className: "",
      style: undefined
    };
    t.a = c;
  },
  1767:
  /*!***********************************************************************************************!*\
    !*** ./src/routes/skill-practice/components/PracticeCorrectOverlay/PracticeCorrectOverlay.js ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    n(/*! react */0);
    var o;
    var r;
    var i = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var a = n.n(i);
    var s = n(/*! ./PracticeCorrectOverlay.css */1881);
    var l = n.n(s);
    function c(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function d(e) {
      var t = e.visible;
      var n = e.title;
      var r = e.subtitle;
      if (t) {
        return c("div", {
          className: l.a.overlay
        }, undefined, c("div", {
          className: l.a.panel
        }, undefined, c("div", {
          className: l.a.icon,
          "aria-hidden": "true"
        }, undefined, o ||= c("svg", {
          width: "64",
          height: "64",
          viewBox: "0 0 64 64",
          fill: "none"
        }, undefined, c("path", {
          d: "M18 33.5L27.5 43L46 22",
          stroke: "#fff",
          strokeWidth: "6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }))), c("div", {
          className: l.a.text
        }, undefined, c("p", {
          className: l.a.title
        }, undefined, n), c("p", {
          className: l.a.subtitle
        }, undefined, r))));
      } else {
        return null;
      }
    }
    d.defaultProps = {
      visible: false,
      title: "Chính xác",
      subtitle: "Bạn đã làm rất tốt rồi, hãy giữ vững phong độ ở các câu tiếp theo nhé!"
    };
    t.a = a()(l.a)(d);
  },
  1773:
  /*!**********************************************************!*\
    !*** ./src/components/QuestionReport/QuestionReport.css ***!
    \**********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./QuestionReport.css */1774);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1774:
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/QuestionReport/QuestionReport.css ***!
    \******************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}.pM3y4{background:#68b52a;height:61px;color:#fff;padding:17px 20px 10px}._1t6R5{font-size:10px;line-height:14px}._2msWo{font-size:16px;line-height:20px}a{text-decoration:none}._382UO{padding:20px 15px;background:#303030;height:36px;lost-utility:clearfix}.Toa2g a{display:block;line-height:32px;font-size:13px;border-radius:3px;max-width:300px}._12eP3{color:#666;background:#fff}._2KjRN{color:#fff;background:#7cd435}._3kiOm{lost-column:1/2}.Toa2g{list-style-type:none;padding:0}.Toa2g a{text-decoration:none;color:#fff}.Toa2g a i{font-size:17px;padding:10px}p{margin:0}._1ScPO{font-size:11px;color:#999}._3F1W-{font-size:18px;font-weight:700;color:#68b52a;padding-left:40px}._3XB5V{width:20px;height:100%;margin-right:20px}._2bcKj{background-color:#fff;border:3px solid #ddd;border-radius:50%;width:75px}._1fxZ9{margin:0 20px 5px 15px;padding:10px 0}._1fxZ9,.coHFb{border-bottom:1px solid #282828;color:#fff}.coHFb{margin:0!important;padding:12px!important;background-color:#8ec554}.coHFb a{font-size:16px;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;width:250px;white-space:nowrap;text-shadow:1px 1px 1px #333}._1fxZ9 a:hover{color:#77d253}", ""]);
    t.locals = {
      titleMenuLeft: "pM3y4",
      titleSub: "_1t6R5",
      titleMain: "_2msWo",
      loginBlock: "_382UO",
      ulSidebar: "Toa2g",
      btnRegisterSidebar: "_12eP3",
      btnLoginSidebar: "_2KjRN",
      btnBlock: "_3kiOm",
      titleLiSub: "_1ScPO",
      titleLiMain: "_3F1W-",
      iconSideBar: "_3XB5V",
      imageAvatar: "_2bcKj",
      liSidebar: "_1fxZ9",
      liSidebarUser: "coHFb"
    };
  },
  1775:
  /*!*************************************************!*\
    !*** ./src/components/QuestionReport/style.css ***!
    \*************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./style.css */1776);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1776:
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/QuestionReport/style.css ***!
    \*********************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._26lj4{font-family:Google Sans Flex,sans-serif!important;font-family:var(--font-family-brand)!important;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand)}._3hutq ._2jV1G,._3hutq .p2JWY{background:#fff}.xj0mW{border-bottom:1px solid #e1e1e1;margin-bottom:15px;padding-bottom:10px;height:50px}.xj0mW>h3{font-weight:700;font-size:24px;line-height:28px}._15lkA{font-size:16px;line-height:28px;color:#798195;padding:20px 0}._3QDX1{color:#2e3a59;font-size:14px}._1Vxrv{background-color:#65b446;color:#fff!important}._1Vxrv,._3fOSB{white-space:inherit;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._3fOSB{background-color:#e4e9f2;color:#8f9bb3!important}._1Z72G{background-color:#fff;color:#2e3a59!important;white-space:inherit;border:1px solid #c5cee0;font-weight:700;margin:10px;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._2AiDO{background-color:#65b446;color:#fff!important;border-radius:20px}._1axwM,._2AiDO{-ms-flex:1 1;flex:1 1;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;text-align:center;padding:10px}._1axwM{background-color:#fff;color:#000!important}._1axwM,._2ZCbG{border:1px solid #ccc;border-radius:20px}._2ZCbG{background-color:#f44336;text-align:center;-ms-flex:1 1;flex:1 1;color:#fff!important;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;padding:10px}._2XcZQ,._34bGV{background-color:#f3f3f4}._3hutq{background-color:#fff;background-color:var(--white-color)}.foXuM{border-top:0;padding:20px 0}._3Mya4{clear:both;margin-bottom:0;margin-top:0;padding:0}._3Ay63{background-color:#fff;color:inherit;padding:15px 20px 20px;border-color:#e7eaec;-o-border-image:none;border-image:none;border-style:solid solid none;border-width:1px 0;clear:both}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}._3cRoi{background-color:rgba(0,0,0,.3)}._3cRoi,._3rgB1{position:fixed;top:0;bottom:0;left:0;right:0;padding:50px;z-index:99999}._3rgB1{background-color:#1e1e1e}._2v7Q8{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);padding:50px;z-index:2}._1TtKb{margin-top:12px}._1oIWB{margin-bottom:40px}._2_JmB{margin-bottom:50px}._31-lA{margin-bottom:60px}._35TWW{margin-bottom:70px}._1Yoao{background-color:#65b446;padding:10px 25px;color:#fff;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._1Yoao:hover{background-color:#fff;color:#65b446;-webkit-box-shadow:none;box-shadow:none}._1rn_T{background-color:#fff;padding:10px 25px;color:#2e3a59;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._3YSO4{margin-bottom:16px}@media (max-width:360px){._1rn_T{background-color:#fff;color:#2e3a59;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0}._1rn_T,._1Yoao{padding:10px 15px;font-size:15px;font-weight:500;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._1Yoao{background-color:#65b446;color:#fff;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446}}._3e_sH{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(34,43,69,.4);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:999999;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:24px 16px;overflow-y:auto;-webkit-animation:_3qYPN .3s ease;animation:_3qYPN .3s ease}@-webkit-keyframes _3qYPN{0%{opacity:0}to{opacity:1}}@keyframes _3qYPN{0%{opacity:0}to{opacity:1}}.oQk78{position:relative;width:500px;max-width:92%;margin-top:66px;background:#fff;border-radius:32px;-webkit-box-shadow:0 20px 40px rgba(0,0,0,.15);box-shadow:0 20px 40px rgba(0,0,0,.15);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:visible;-webkit-animation:P9Gfg .3s cubic-bezier(.34,1.56,.64,1);animation:P9Gfg .3s cubic-bezier(.34,1.56,.64,1)}@-webkit-keyframes P9Gfg{0%{-webkit-transform:scale(.9);transform:scale(.9);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes P9Gfg{0%{-webkit-transform:scale(.9);transform:scale(.9);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}._1DV0W{position:relative;height:72px;background:-webkit-gradient(linear,left top,left bottom,color-stop(3%,#0095eb),color-stop(97%,#a6ddff));background:-o-linear-gradient(top,#0095eb 3%,#a6ddff 97%);background:linear-gradient(180deg,#0095eb 3%,#a6ddff 97%);background-size:cover;background-position:50%;background-repeat:no-repeat;border-radius:32px 32px 0 0;overflow:hidden;z-index:1}._2fouU{position:absolute;color:hsla(0,0%,100%,.4);font-family:Be Vietnam Pro,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-animation:l7xCN 4s ease-in-out infinite;animation:l7xCN 4s ease-in-out infinite}@-webkit-keyframes l7xCN{0%{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg)}50%{-webkit-transform:translateY(-8px) rotate(10deg);transform:translateY(-8px) rotate(10deg)}to{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg)}}@keyframes l7xCN{0%{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg)}50%{-webkit-transform:translateY(-8px) rotate(10deg);transform:translateY(-8px) rotate(10deg)}to{-webkit-transform:translateY(0) rotate(0deg);transform:translateY(0) rotate(0deg)}}._3OejB{top:14px;left:40px;font-size:24px;-webkit-animation-delay:0s;animation-delay:0s}.qw6gb{top:16px;right:52px;font-size:22px;-webkit-animation-delay:1s;animation-delay:1s}._3EAf_{top:40px;right:104px;font-size:20px;-webkit-animation-delay:1.5s;animation-delay:1.5s}._1Nu8S{top:38px;left:78px;font-size:20px;-webkit-animation-delay:2s;animation-delay:2s}._3Dm5X{position:absolute;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:-62px;width:157px;height:213px;pointer-events:none;z-index:2}._2U3IT{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"16\" /><feOffset dx=\"1\" dy=\"9\" result=\"offsetblur\" /><feFlood flood-color=\"rgba(0,0,0,0.12)\" /><feComposite in2=\"offsetblur\" operator=\"in\" /><feMerge><feMergeNode /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter></svg>#filter');-webkit-filter:drop-shadow(0 8px 16px rgba(0,0,0,.12));filter:drop-shadow(0 8px 16px rgba(0,0,0,.12))}._1XhhS{position:relative;z-index:3;padding:20px 32px 32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background:#fff;border-radius:0 0 32px 32px}._36Y1_{color:#383f56;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:600;font-size:20px;line-height:28px;text-align:center;margin:0 0 20px}._24pPo{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:8px;margin-bottom:20px}._2N--8{color:#13152a;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:500;font-size:16px;line-height:28px}._1oofV{color:#db320f;margin-left:4px}.zkGMv{position:relative;width:100%}.uBfLt{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:48px;padding:12px 16px;background:#fff;border:1px solid #ced4e1;border-radius:12px;-webkit-box-shadow:0 1px 1px rgba(27,36,44,.12);box-shadow:0 1px 1px rgba(27,36,44,.12);cursor:pointer;-webkit-transition:border-color .2s;-o-transition:border-color .2s;transition:border-color .2s;-webkit-box-sizing:border-box;box-sizing:border-box}.uBfLt:hover{border-color:#9aa4bd}._1nvYt{border-color:#0095eb}._3azDn{border-color:#db320f}._64Zix{font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:400;font-size:14px;line-height:24px;color:#13152a;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}._3GTow,._39yho{color:#69728c}._3GTow{-ms-flex-negative:0;flex-shrink:0;width:20px;height:20px;margin-left:8px;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;-o-transition:transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}._1PCsx{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.ZjIqK{position:absolute;top:calc(100% + 6px);left:0;right:0;background:#fff;border:1px solid #ced4e1;border-radius:12px;-webkit-box-shadow:0 8px 24px rgba(27,36,44,.16);box-shadow:0 8px 24px rgba(27,36,44,.16);padding:6px;z-index:20;max-height:260px;overflow-y:auto}._1kDBC{padding:10px 12px;border-radius:8px;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:400;font-size:14px;line-height:20px;color:#13152a;cursor:pointer;-webkit-transition:background-color .15s;-o-transition:background-color .15s;transition:background-color .15s}._1kDBC:hover{background:#f2f6fb}._1sel-{background:#e6f4ff;color:#0095eb;font-weight:500}._1k6b4{width:100%;height:144px;padding:12px 16px;background:#fff;border:1px solid #ced4e1;border-radius:12px;-webkit-box-shadow:0 1px 1px rgba(27,36,44,.12);box-shadow:0 1px 1px rgba(27,36,44,.12);font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:400;font-size:14px;line-height:21px;color:#13152a;resize:none;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:border-color .2s;-o-transition:border-color .2s;transition:border-color .2s}._1k6b4::-webkit-input-placeholder{color:#69728c}._1k6b4::-moz-placeholder{color:#69728c}._1k6b4:-ms-input-placeholder,._1k6b4::-ms-input-placeholder{color:#69728c}._1k6b4::placeholder{color:#69728c}._1k6b4:focus{border-color:#0095eb}._1nYaU{border-color:#db320f}._3yzPh{color:#db320f;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-size:13px;line-height:18px;margin-top:2px}._1Yr1C{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;gap:8px;padding:8px;background:#fbefd9;border-radius:8px;margin-bottom:20px}.eowss{-ms-flex-negative:0;flex-shrink:0;font-size:18px;color:#e0a815}._1nvLZ,.eowss{line-height:21px}._1nvLZ{color:#7e620c;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:500;font-size:14px}._80mn_{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center;width:100%}._31BGY{-ms-flex:1 0;flex:1 0;height:48px;background:#fff;border:1px solid #ced4e1;-webkit-box-shadow:0 6px 0 0 #f0f0f0;box-shadow:0 6px 0 0 #f0f0f0;border-radius:1024px;color:#383f56;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:600;font-size:16px;cursor:pointer;outline:none;-webkit-transition:background-color .2s,-webkit-transform .1s,-webkit-box-shadow .1s;transition:background-color .2s,-webkit-transform .1s,-webkit-box-shadow .1s;-o-transition:transform .1s,box-shadow .1s,background-color .2s;transition:transform .1s,box-shadow .1s,background-color .2s;transition:transform .1s,box-shadow .1s,background-color .2s,-webkit-transform .1s,-webkit-box-shadow .1s}._31BGY:hover{background:#f7f8fa}._31BGY:active{-webkit-transform:translateY(6px);-ms-transform:translateY(6px);transform:translateY(6px);-webkit-box-shadow:0 0 0 0 #f0f0f0;box-shadow:0 0 0 0 #f0f0f0}._2C0tM{-ms-flex:1 0;flex:1 0;height:48px;background:#65b446;border:3px solid hsla(93,82%,98%,.3);-webkit-box-shadow:0 5px 0 0 #4d9830;box-shadow:0 5px 0 0 #4d9830;border-radius:1024px;color:#fff;font-family:Google Sans Flex,Be Vietnam Pro,sans-serif;font-weight:600;font-size:16px;cursor:pointer;outline:none;-webkit-transition:background-color .2s,-webkit-transform .1s,-webkit-box-shadow .1s;transition:background-color .2s,-webkit-transform .1s,-webkit-box-shadow .1s;-o-transition:transform .1s,box-shadow .1s,background-color .2s;transition:transform .1s,box-shadow .1s,background-color .2s;transition:transform .1s,box-shadow .1s,background-color .2s,-webkit-transform .1s,-webkit-box-shadow .1s}._2C0tM:hover{background:#5aa13e}._2C0tM:active{-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);-webkit-box-shadow:0 0 0 0 #4d9830;box-shadow:0 0 0 0 #4d9830}.DEB6g{position:relative;z-index:3;padding:46px 32px 32px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;text-align:center;background:#fff;border-radius:0 0 32px 32px}.NG2oj{width:92px;height:92px;-o-object-fit:contain;object-fit:contain;margin-bottom:13px}._3PyaF{color:#383f56;font-weight:600;font-size:20px;line-height:28px;margin:0 0 16px}._3PyaF,.Fhi5d{font-family:Google Sans Flex,Be Vietnam Pro,sans-serif}.Fhi5d{color:#4c536b;font-weight:400;font-size:16px;line-height:24px;margin:0 0 24px}@media (max-width:768px){.oQk78{width:95%}._1XhhS{padding:20px 20px 24px}}", ""]);
    t.locals = {
      fontBrand: "_26lj4",
      white_bg: "_3hutq",
      navbar_fixed_top: "p2JWY",
      navbar_static_top: "_2jV1G",
      headerBox: "xj0mW",
      labelFilter: "_15lkA",
      textLoading: "_3QDX1",
      btnGreenNew: "_1Vxrv",
      btnGrayNew: "_3fOSB",
      btnWhiteNew: "_1Z72G",
      btnGreenNewFlex: "_2AiDO",
      btnWhiteNewFlex: "_1axwM",
      btnRedNewFlex: "_2ZCbG",
      gray_bg: "_2XcZQ",
      "bg-muted": "_34bGV",
      container: "foXuM",
      ibox: "_3Mya4",
      ibox_content: "_3Ay63",
      backdropStyle: "_3cRoi",
      backdropStyle3: "_3rgB1",
      backdropStyle2: "_2v7Q8",
      root: "_1TtKb",
      "u-margin-bottom-4": "_1oIWB",
      "u-margin-bottom-5": "_2_JmB",
      "u-margin-bottom-6": "_31-lA",
      "u-margin-bottom-7": "_35TWW",
      btn_green_new: "_1Yoao",
      btn_white_new: "_1rn_T",
      margin_bottom_16: "_3YSO4",
      overlay: "_3e_sH",
      qrFadeIn: "_3qYPN",
      modalContainer: "oQk78",
      qrScaleUp: "P9Gfg",
      header: "_1DV0W",
      mathIcon: "_2fouU",
      qrFloat: "l7xCN",
      iconPlus: "_3OejB",
      iconMultiply: "qw6gb",
      iconDivide: "_3EAf_",
      iconSqrt: "_1Nu8S",
      mascotContainer: "_3Dm5X",
      mascotImage: "_2U3IT",
      body: "_1XhhS",
      title: "_36Y1_",
      field: "_24pPo",
      label: "_2N--8",
      required: "_1oofV",
      dropdown: "zkGMv",
      dropdownBox: "uBfLt",
      dropdownBoxOpen: "_1nvYt",
      dropdownBoxError: "_3azDn",
      dropdownValue: "_64Zix",
      dropdownPlaceholder: "_39yho",
      dropdownArrow: "_3GTow",
      dropdownArrowOpen: "_1PCsx",
      dropdownMenu: "ZjIqK",
      dropdownOption: "_1kDBC",
      dropdownOptionActive: "_1sel-",
      textarea: "_1k6b4",
      textareaError: "_1nYaU",
      errorMsg: "_3yzPh",
      badge: "_1Yr1C",
      badgeIcon: "eowss",
      badgeText: "_1nvLZ",
      cta: "_80mn_",
      secondaryButton: "_31BGY",
      primaryButton: "_2C0tM",
      successBody: "DEB6g",
      successIcon: "NG2oj",
      successTitle: "_3PyaF",
      successText: "Fhi5d"
    };
  },
  1777:
  /*!************************************************************************!*\
    !*** ./src/components/QuestionReport/graphql/feedbackQuestion.graphql ***!
    \************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "FeedbackQuestionMutation"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "username"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "questionId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "typeError"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "feedbackContent"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "starScore"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "userAnswered"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "CreateFeedbackQuestion"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "username"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "username"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "questionId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "questionId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "typeError"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "typeError"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "feedbackContent"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "feedbackContent"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "starScore"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "starScore"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "userAnswered"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "userAnswered"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "_id"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 393
      }
    };
    n.loc.source = {
      body: "mutation FeedbackQuestionMutation(\n  $username: String\n  $questionId: String\n  $typeError: String\n  $feedbackContent: String\n  $starScore: Int\n  $userAnswered: String\n) {\n  CreateFeedbackQuestion(\n    username: $username\n    questionId: $questionId\n    typeError: $typeError\n    feedbackContent: $feedbackContent\n    starScore: $starScore\n    userAnswered: $userAnswered\n  ) {\n      _id\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.FeedbackQuestionMutation = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "FeedbackQuestionMutation");
  },
  1797:
  /*!*********************************************************************!*\
    !*** ./src/components/QuestionReport/QuestionReport.js + 1 modules ***!
    \*********************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/UI/ModalPortal/ModalPortal.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/common/MascotConfirmPopup/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/QuestionReport/graphql/feedbackQuestion.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/QuestionReport/QuestionReport.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/QuestionReport/style.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/isomorphic-style-loader/lib/withStyles.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash.flowright/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i = n(0);
    var a = n.n(i);
    var s = n(14);
    var l = n.n(s);
    var c = n(15);
    var d = n(9);
    var u = n.n(d);
    var p = n(1773);
    var f = n.n(p);
    var m = n(305);
    var h = n(1775);
    var b = n.n(h);
    var g = n(274);
    var v = n(1777);
    var x = n.n(v);
    var y = n(273);
    function w(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function k(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return _(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return _(e, t);
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function _(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    var S = [{
      key: "WRONG_ANSWER",
      label: "Câu hỏi/Đáp án không chính xác"
    }, {
      key: "MEDIA_ERROR",
      label: "Lỗi hình ảnh/âm thanh"
    }, {
      key: "CONTENT_DISPLAY_ERROR",
      label: "Lỗi hiển thị nội dung"
    }, {
      key: "UNCLEAR_QUESTION",
      label: "Câu hỏi khó hiểu/thiếu dữ kiện"
    }, {
      key: "OTHER",
      label: "Lý do khác"
    }];
    var N;
    var O;
    var j;
    var C = l()(Object(m.a)(x.a, {
      name: "CreateFeedbackQuestion"
    }), Object(c.b)(function (e) {
      return {
        config: e.runtime && e.runtime.config
      };
    }), u()(b.a))(function (e) {
      var t = e.username;
      var n = e.questionId;
      var r = e.userAnswered;
      var s = e.closePopup;
      var l = e.CreateFeedbackQuestion;
      var c = e.config;
      var d = c && c.assetsDomain || "";
      var u = k(Object(i.useState)(""), 2);
      var p = u[0];
      var f = u[1];
      var m = k(Object(i.useState)(""), 2);
      var h = m[0];
      var v = m[1];
      var x = k(Object(i.useState)(false), 2);
      var _ = x[0];
      var N = x[1];
      var O = k(Object(i.useState)(false), 2);
      var j = O[0];
      var C = O[1];
      var T = k(Object(i.useState)(false), 2);
      var A = T[0];
      var P = T[1];
      var E = k(Object(i.useState)(false), 2);
      var I = E[0];
      var R = E[1];
      var L = Object(i.useRef)(null);
      Object(i.useEffect)(function () {
        var e = function (e) {
          if (L.current && !L.current.contains(e.target)) {
            R(false);
          }
        };
        document.addEventListener("mousedown", e);
        return function () {
          return document.removeEventListener("mousedown", e);
        };
      }, []);
      var D;
      var z;
      var M = function (e) {
        f(e);
        C(false);
        if (e !== "OTHER") {
          P(false);
        }
        R(false);
      };
      return w(g.a, {}, undefined, w("div", {
        className: b.a.overlay
      }, undefined, w("div", {
        className: b.a.modalContainer
      }, undefined, w("div", {
        className: b.a.header,
        style: {
          backgroundImage: `url(${d}/img/assessment/header-popup-onboard.png)`
        }
      }), w("div", {
        className: b.a.mascotContainer
      }, undefined, w("img", {
        className: b.a.mascotImage,
        src: `${d}${y.b}`,
        alt: "Mascot Robot"
      })), _ ? w("div", {
        className: b.a.successBody
      }, undefined, w("img", {
        className: b.a.successIcon,
        src: `${d}/2026/img/UI2026/ic-success.svg`,
        alt: "Thành công"
      }), w("h2", {
        className: b.a.successTitle
      }, undefined, "Gửi báo lỗi câu hỏi thành công"), w("p", {
        className: b.a.successText
      }, undefined, "Cảm ơn bạn đã gửi cho VioEdu. VioEdu sẽ xem xét, đánh giá và điều chỉnh câu hỏi kịp thời nếu có lỗi xảy ra.", o ||= w("br", {}), "Cùng VioEdu xây dựng một sản phẩm học tập chất lượng bạn nhé!"), w("div", {
        className: b.a.cta
      }, undefined, w("button", {
        type: "button",
        className: b.a.secondaryButton,
        onClick: function () {
          return s();
        }
      }, undefined, "OK"))) : w("div", {
        className: b.a.body
      }, undefined, w("h2", {
        className: b.a.title
      }, undefined, "Báo lỗi câu hỏi"), w("div", {
        className: b.a.field
      }, undefined, w("span", {
        className: b.a.label
      }, undefined, "Chọn lý do báo cáo lỗi", w("span", {
        className: b.a.required
      }, undefined, "*")), a.a.createElement("div", {
        className: b.a.dropdown,
        ref: L
      }, w("div", {
        role: "button",
        tabIndex: 0,
        className: `${b.a.dropdownBox} ${I ? b.a.dropdownBoxOpen : ""} ${j ? b.a.dropdownBoxError : ""}`,
        onClick: function () {
          return R(function (e) {
            return !e;
          });
        },
        onKeyDown: function (e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            R(function (e) {
              return !e;
            });
          } else if (e.key === "Escape") {
            R(false);
          }
        }
      }, undefined, w("span", {
        className: `${b.a.dropdownValue} ${p ? "" : b.a.dropdownPlaceholder}`
      }, undefined, p ? (D = p, (z = S.find(function (e) {
        return e.key === D;
      })) ? z.label : "") : "Chọn nhóm báo cáo thích hợp"), w("i", {
        className: `fa fa-chevron-down ${b.a.dropdownArrow} ${I ? b.a.dropdownArrowOpen : ""}`
      })), I && w("div", {
        className: b.a.dropdownMenu
      }, undefined, S.map(function (e) {
        return w("div", {
          role: "option",
          "aria-selected": p === e.key,
          tabIndex: 0,
          className: `${b.a.dropdownOption} ${p === e.key ? b.a.dropdownOptionActive : ""}`,
          onClick: function () {
            return M(e.key);
          },
          onKeyDown: function (t) {
            if (t.key === "Enter" || t.key === " ") {
              t.preventDefault();
              M(e.key);
            }
          }
        }, e.key, e.label);
      }))), j && w("div", {
        className: b.a.errorMsg
      }, undefined, "Vui lòng chọn lý do báo cáo lỗi.")), w("div", {
        className: b.a.field
      }, undefined, w("label", {
        className: b.a.label,
        htmlFor: "qr-description"
      }, undefined, "Mô tả", p === "OTHER" && w("span", {
        className: b.a.required
      }, undefined, "*")), w("textarea", {
        id: "qr-description",
        className: `${b.a.textarea} ${A ? b.a.textareaError : ""}`,
        placeholder: "Nhập mô tả lỗi (Ví dụ: sai đáp án, lỗi hiển thị hình ảnh...)",
        value: h,
        onChange: function (e) {
          v(e.target.value);
          if (e.target.value.trim() !== "") {
            P(false);
          }
        }
      }), A && w("div", {
        className: b.a.errorMsg
      }, undefined, "Vui lòng nhập mô tả lỗi.")), w("div", {
        className: b.a.badge
      }, undefined, w("i", {
        className: `fa fa-lightbulb-o ${b.a.badgeIcon}`
      }), w("span", {
        className: b.a.badgeText
      }, undefined, "Nếu bạn cho rằng câu hỏi này có vấn đề, hãy cho VioEdu biết nhé. VioEdu sẽ xem xét và phản hồi sớm nhất.")), w("div", {
        className: b.a.cta
      }, undefined, w("button", {
        type: "button",
        className: b.a.secondaryButton,
        onClick: function () {
          return s();
        }
      }, undefined, "Hủy bỏ"), w("button", {
        type: "button",
        className: b.a.primaryButton,
        onClick: function () {
          if (p) {
            if (p !== "OTHER" || h.trim() !== "") {
              if (t) {
                l({
                  variables: {
                    username: t,
                    questionId: n,
                    typeError: p,
                    feedbackContent: h,
                    starScore: 0,
                    userAnswered: r
                  }
                }).then(function () {
                  N(true);
                }).catch(function () {});
              }
            } else {
              P(true);
            }
          } else {
            C(true);
          }
        }
      }, undefined, "Gửi cho VioEdu"))))));
    });
    function T(e) {
      return (T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function A(e, t, n, o) {
      j ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: j,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function P(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, z(o.key), o);
      }
    }
    function E(e, t) {
      return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function I(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = D(e);
        if (t) {
          var r = D(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return R(this, n);
      };
    }
    function R(e, t) {
      if (t && (T(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return L(e);
    }
    function L(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function D(e) {
      return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function z(e) {
      var t = function (e, t) {
        if (T(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (T(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (T(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var M;
    var F;
    var B;
    var V = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          E(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = I(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        (t = r.call(this)).state = {
          showPopup: false,
          styles: {}
        };
        t.closePopup = t.closePopup.bind(L(t));
        return t;
      }
      t = i;
      if (n = [{
        key: "showPopupItem",
        value: function () {
          this.setState({
            showPopup: true
          });
        }
      }, {
        key: "closePopup",
        value: function () {
          this.setState({
            showPopup: false
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.props;
          var n = t.user;
          var o = t.positionLink;
          var r = t.linkText;
          var i = t.questionId;
          var a = t.userAnswered;
          var s = t.customClass;
          var l = t.icon;
          if (n) {
            return A("div", {
              className: s || `${o} text-danger`
            }, undefined, A("div", {
              className: "cursor-poiter",
              onClick: function () {
                return e.showPopupItem();
              },
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }
            }, undefined, l || N || (N = A("i", {
              className: "fa fa-warning "
            })), A("span", {}, undefined, r)), this.state.showPopup && A(C, {
              username: n.username,
              questionId: i,
              closePopup: this.closePopup,
              userAnswered: a
            }));
          } else {
            return O ||= A("div", {});
          }
        }
      }]) {
        P(t.prototype, n);
      }
      if (o) {
        P(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(i.Component);
    M = V;
    B = {
      linkText: "Báo lỗi câu hỏi",
      positionLink: ""
    };
    if ((F = z(F = "defaultProps")) in M) {
      Object.defineProperty(M, F, {
        value: B,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      M[F] = B;
    }
    t.a = l()(Object(c.b)(function (e) {
      return {
        user: e.user
      };
    }, null), u()(f.a))(V);
  },
  1809:
  /*!******************************************************************************************************!*\
    !*** ./src/routes/skill-practice-tester/components/TesterFontSizeControls/TesterFontSizeControls.js ***!
    \******************************************************************************************************/
  /*! exports provided: FONT_SCALE_MIN, FONT_SCALE_MAX, FONT_SCALE_STEP, FONT_SCALE_DEFAULT, FONT_SCALE_STORAGE_KEY, clampFontScale, readStoredFontScale, default */
  /*! exports used: FONT_SCALE_DEFAULT, FONT_SCALE_STEP, FONT_SCALE_STORAGE_KEY, clampFontScale, default, readStoredFontScale */
  function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return c;
    });
    n.d(t, "a", function () {
      return d;
    });
    n.d(t, "c", function () {
      return u;
    });
    n.d(t, "d", function () {
      return p;
    });
    n.d(t, "f", function () {
      return f;
    });
    n(/*! react */0);
    var o;
    var r = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var i = n.n(r);
    var a = n(/*! ./TesterFontSizeControls.css */1950);
    var s = n.n(a);
    function l(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var c = 0.1;
    var d = 1;
    var u = "skillPracticeFontScale";
    function p(e) {
      var t = Number(e);
      if (Number.isFinite(t)) {
        return Math.min(1.3, Math.max(1, Math.round(t * 10) / 10));
      } else {
        return d;
      }
    }
    function f() {
      if (typeof window == "undefined") {
        return d;
      }
      try {
        return p(window.localStorage.getItem(u) || window.localStorage.getItem("skillPracticeTesterFontScale"));
      } catch (e) {
        return d;
      }
    }
    function m(e) {
      var t = e.scale;
      var n = e.onDecrease;
      var o = e.onIncrease;
      var r = t > 1;
      var i = t < 1.3;
      var a = `${Math.round(t * 100)}%`;
      return l("div", {
        className: s.a.controls,
        role: "group",
        "aria-label": "Chỉnh cỡ chữ câu hỏi"
      }, undefined, l("button", {
        type: "button",
        className: s.a.btn,
        onClick: n,
        disabled: !r,
        title: "Thu nhỏ chữ",
        "aria-label": "Thu nhỏ chữ"
      }, undefined, l("span", {
        className: s.a.icon,
        "aria-hidden": "true"
      }, undefined, "−")), l("span", {
        className: s.a.value,
        "aria-live": "polite",
        title: `Cỡ chữ ${a}`
      }, undefined, a), l("button", {
        type: "button",
        className: s.a.btn,
        onClick: o,
        disabled: !i,
        title: "Phóng to chữ",
        "aria-label": "Phóng to chữ"
      }, undefined, l("span", {
        className: s.a.icon,
        "aria-hidden": "true"
      }, undefined, "+")));
    }
    m.defaultProps = {
      scale: d
    };
    t.e = i()(s.a)(m);
  },
  1810:
  /*!************************************************************!*\
    !*** ./src/components/QuestionAudio/ResilientHtmlAudio.js ***!
    \************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var s = n.n(a);
    var l = n(/*! ./ResilientHtmlAudio.css */1879);
    var c = n.n(l);
    function d(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function u(e, t) {
      return function (e) {
        if (Array.isArray(e)) {
          return e;
        }
      }(e) || function (e, t) {
        var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (n != null) {
          var o;
          var r;
          var i;
          var a;
          var s = [];
          var l = true;
          var c = false;
          try {
            i = (n = n.call(e)).next;
            if (t === 0) {
              if (Object(n) !== n) {
                return;
              }
              l = false;
            } else {
              for (; !(l = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); l = true);
            }
          } catch (e) {
            c = true;
            r = e;
          } finally {
            try {
              if (!l && n.return != null && (a = n.return(), Object(a) !== a)) {
                return;
              }
            } finally {
              if (c) {
                throw r;
              }
            }
          }
          return s;
        }
      }(e, t) || function (e, t) {
        if (!e) {
          return;
        }
        if (typeof e == "string") {
          return p(e, t);
        }
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
          n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
          return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
          return p(e, t);
        }
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    function p(e, t) {
      if (t == null || t > e.length) {
        t = e.length;
      }
      for (var n = 0, o = new Array(t); n < t; n++) {
        o[n] = e[n];
      }
      return o;
    }
    function f(e) {
      var t = e.src;
      var n = Object(r.useRef)(null);
      var o = u(Object(r.useState)(0), 2);
      var a = o[0];
      var s = o[1];
      var l = u(Object(r.useState)("loading"), 2);
      var p = l[0];
      var f = l[1];
      var m = u(Object(r.useState)(""), 2);
      var h = m[0];
      var b = m[1];
      var g = function (e, t) {
        if (!e || t <= 0) {
          return e;
        }
        var n = e.indexOf("?") >= 0 ? "&" : "?";
        return `${e}${n}_retry=${t}&_t=${Date.now()}`;
      }(t, a);
      Object(r.useEffect)(function () {
        f("loading");
        b("");
        var e = n.current;
        if (e) {
          if ("disableRemotePlayback" in e) {
            e.disableRemotePlayback = true;
          }
          e.load();
        }
      }, [g]);
      var v = Object(r.useCallback)(function () {
        f("ready");
        b("");
      }, []);
      var x = Object(r.useCallback)(function () {
        var e = n.current;
        f("error");
        b(function (e) {
          if (!e) {
            return "Không tải được file âm thanh.";
          }
          switch (e.code) {
            case e.MEDIA_ERR_ABORTED:
              return "Phát âm thanh bị hủy. Hãy thử lại.";
            case e.MEDIA_ERR_NETWORK:
              return "Lỗi mạng khi tải âm thanh. Hãy thử lại.";
            case e.MEDIA_ERR_DECODE:
              return "File âm thanh bị lỗi hoặc không đọc được.";
            case e.MEDIA_ERR_SRC_NOT_SUPPORTED:
              return "Định dạng âm thanh không được hỗ trợ hoặc link không hợp lệ.";
            default:
              return "Không tải được file âm thanh.";
          }
        }(e && e.error));
      }, []);
      var y = Object(r.useCallback)(function () {
        if (!(a >= 2)) {
          s(function (e) {
            return e + 1;
          });
        }
      }, [a]);
      if (!t) {
        return null;
      }
      var w = a < 2;
      return d("div", {
        className: c.a.wrap
      }, undefined, p !== "error" ? i.a.createElement("audio", {
        key: g,
        ref: n,
        className: c.a.audio,
        controls: true,
        controlsList: "nodownload noremoteplayback",
        "x-webkit-airplay": "deny",
        preload: "metadata",
        src: g,
        onCanPlay: v,
        onLoadedData: v,
        onError: x
      }) : null, p === "error" ? d("div", {
        className: c.a.errorBox,
        role: "alert"
      }, undefined, d("div", {
        className: c.a.errorText
      }, undefined, h), d("div", {
        className: c.a.errorActions
      }, undefined, w ? d("button", {
        type: "button",
        className: c.a.retryBtn,
        onClick: y
      }, undefined, "Thử lại (", a + 1, "/", 2, ")") : d("span", {
        className: c.a.hint
      }, undefined, "Đã thử lại tối đa ", 2, " lần."))) : null);
    }
    f.defaultProps = {
      src: ""
    };
    t.a = s()(c.a)(f);
  },
  1811:
  /*!**********************************************************************!*\
    !*** ./src/routes/skill-practice/complete-notice/completeNotice.css ***!
    \**********************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./completeNotice.css */1883);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1879:
  /*!*************************************************************!*\
    !*** ./src/components/QuestionAudio/ResilientHtmlAudio.css ***!
    \*************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./ResilientHtmlAudio.css */1880);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1880:
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/QuestionAudio/ResilientHtmlAudio.css ***!
    \*********************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._3oWqQ{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:8px;margin:12px auto;max-width:100%}._3dWGX{width:min(420px,100%);max-width:100%}._1GbFu{color:#687187;font-size:13px;line-height:1.4;text-align:center}._28zIM{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:10px;width:min(420px,100%);padding:12px 14px;border:1px solid #ffc7c2;border-radius:12px;background:#fff5f4;-webkit-box-sizing:border-box;box-sizing:border-box}._13DG3{color:#c94f49;font-size:14px;font-weight:500;line-height:1.45;text-align:center}._3eqMb{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.a1lCH{min-height:36px;padding:8px 16px;border:1px solid #65b446;border-radius:100px;background:#65b446;-webkit-box-shadow:0 4px 0 #4d9830;box-shadow:0 4px 0 #4d9830;color:#fff;font-size:14px;font-weight:600;cursor:pointer}.a1lCH:active{-webkit-transform:translateY(2px);-ms-transform:translateY(2px);transform:translateY(2px);-webkit-box-shadow:0 2px 0 #4d9830;box-shadow:0 2px 0 #4d9830}", ""]);
    t.locals = {
      wrap: "_3oWqQ",
      audio: "_3dWGX",
      hint: "_1GbFu",
      errorBox: "_28zIM",
      errorText: "_13DG3",
      errorActions: "_3eqMb",
      retryBtn: "a1lCH"
    };
  },
  1881:
  /*!************************************************************************************************!*\
    !*** ./src/routes/skill-practice/components/PracticeCorrectOverlay/PracticeCorrectOverlay.css ***!
    \************************************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../../node_modules/css-loader??ref--6-rules-2!../../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./PracticeCorrectOverlay.css */1882);
    var r = n(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1882:
  /*!********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/components/PracticeCorrectOverlay/PracticeCorrectOverlay.css ***!
    \********************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._1VQOT{position:absolute;top:0;right:0;bottom:0;left:0;z-index:20;padding:24px;pointer-events:none;background:transparent}._1R4ef,._1VQOT{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box}._1R4ef{pointer-events:auto;-ms-flex-direction:column;flex-direction:column;gap:16px;width:auto;max-width:min(514px,calc(100% - 32px));min-height:auto;padding:40px 48px;background:#ddf9ce;border:12px solid #f3fcee;border-radius:32px;text-align:center;-webkit-box-shadow:0 12px 32px rgba(46,58,89,.12);box-shadow:0 12px 32px rgba(46,58,89,.12)}._3QOnh{width:120px;height:120px;border-radius:50%;background:#65b446;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;-webkit-box-shadow:0 6px 0 0 rgba(77,152,48,.35);box-shadow:0 6px 0 0 rgba(77,152,48,.35)}._1Roke,._3QOnh{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}._1Roke{-ms-flex-direction:column;flex-direction:column;gap:7px;width:100%}._3vMie{font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:20px;font-weight:600;line-height:28px;color:#383f56}._2cwsw,._3vMie{margin:0;width:100%;text-align:center}._2cwsw{font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:16px;font-weight:400;line-height:24px;color:#4c536b}@media (max-width:640px){._1VQOT{padding:16px}._1R4ef{padding:28px 20px;border-width:8px;border-radius:24px}._3QOnh{width:88px;height:88px}}", ""]);
    t.locals = {
      overlay: "_1VQOT",
      panel: "_1R4ef",
      icon: "_3QOnh",
      text: "_1Roke",
      title: "_3vMie",
      subtitle: "_2cwsw"
    };
  },
  1883:
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/complete-notice/completeNotice.css ***!
    \******************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._2mxa1{cursor:pointer;padding-top:5px;padding-left:5px;display:inline-block;width:93%}._11FO8{left:0;right:0;top:0;z-index:100;bottom:0;padding:50px}._2Fa6n,._11FO8{position:fixed;margin:auto}._2Fa6n{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#fff;-webkit-box-shadow:-1px 1px 6px 0 rgba(81,116,25,.5);box-shadow:-1px 1px 6px 0 rgba(81,116,25,.5);padding:10px;z-index:99999;border-radius:24px;width:500px;height:435px}._3s8qk{position:fixed;z-index:999999;top:0;right:0;bottom:0;left:0;-ms-flex-pack:center;justify-content:center;padding:24px 16px;overflow-y:auto;background:rgba(34,43,69,.4);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}._1Op6Q,._3s8qk{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}._1Op6Q{-ms-flex-direction:column;flex-direction:column;width:100%}._1C9XG{margin:0;color:#2e3a59;font-size:17px;font-weight:500;line-height:1.6;text-align:center}.H9i-8{background-color:#cac6c6;-webkit-box-shadow:-1px 1px 6px 0 rgba(81,116,25,.5);box-shadow:-1px 1px 6px 0 rgba(81,116,25,.5);padding:10px;border-radius:24px;width:300px;height:135px;color:#687187}.H9i-8,.JhePB{position:fixed;top:65%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin:auto;z-index:99999;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.JhePB{border:2px solid #ccc;background-color:#fff;padding:16px 20px;border-radius:24px;width:350px;text-align:center;min-height:135px;gap:12px;-webkit-box-sizing:border-box;box-sizing:border-box}._1pvc7{width:48px;height:48px;display:block;-o-object-fit:contain;object-fit:contain}._1HveE{margin:0;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:var(--font-variation-brand);font-size:14px;font-weight:500;line-height:21px;color:#2e3a59}.mRaqJ{display:inline-block;padding:5px}._3ZULt{background:-webkit-gradient(linear,left top,left bottom,from(rgba(104,181,42,.8)),to(rgba(87,163,0,.8)));background:-o-linear-gradient(top,rgba(104,181,42,.8) 0,rgba(87,163,0,.8) 100%);background:linear-gradient(180deg,rgba(104,181,42,.8) 0,rgba(87,163,0,.8));border-top-left-radius:10px;border-top-right-radius:10px;height:50px;color:#fff;margin-top:10px;padding-top:10px}._1pkg-{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:100%}._1YKhm{margin:0;color:#687187;font-weight:500}._1YKhm,.xKFLO{font-size:15px;line-height:1.4;text-align:center}.xKFLO{margin-top:6px;padding:0;border:none;background:none;color:#65b446;font-family:inherit;font-weight:700;cursor:pointer}.xKFLO:focus,.xKFLO:hover{color:#4d9830}.h2bYp{display:block;width:360px;max-width:100%;height:auto;margin:0 0 20px;border-radius:12px;-o-object-fit:cover;object-fit:cover}@media (max-width:560px){._3s8qk{padding:20px 12px}._1C9XG{font-size:15px}}", ""]);
    t.locals = {
      skill_text: "_2mxa1",
      backdropStyle: "_11FO8",
      backdropStyleInner: "_2Fa6n",
      helpOverlay: "_3s8qk",
      helpContent: "_1Op6Q",
      helpMessage: "_1C9XG",
      loadingStyleInner: "H9i-8",
      loadingStyleInnerNew: "JhePB",
      questionLoadingImg: "_1pvc7",
      questionLoadingText: "_1HveE",
      skill_link_text: "mRaqJ",
      skill_box_header: "_3ZULt",
      missionFooter: "_1pkg-",
      orText: "_1YKhm",
      missionContinueLink: "xKFLO",
      helpThumbnail: "h2bYp"
    };
  },
  1946:
  /*!****************************************************!*\
    !*** ./src/components/common/UpdateGrade/index.js ***!
    \****************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i;
    var a;
    var s = n(/*! react */0);
    var l = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var c = n.n(l);
    var d = n(/*! ./style.css */1947);
    var u = n.n(d);
    var p = n(/*! react-apollo */305);
    var f = n(/*! react-redux */15);
    var m = n(/*! lodash */152);
    var h = n(/*! ../../Link/Link */21);
    function b(e) {
      return (b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function g(e, t, n, o) {
      a ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var s = new Array(i);
        for (var l = 0; l < i; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && r) {
        for (var c in r) {
          if (t[c] === undefined) {
            t[c] = r[c];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: a,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function v(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function x(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (b(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (b(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), b(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function y(e, t) {
      return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function w(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = _(e);
        if (t) {
          var r = _(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return k(this, n);
      };
    }
    function k(e, t) {
      if (t && (b(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function _(e) {
      return (_ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var S = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          y(e, t);
        }
      })(l, e);
      var t;
      var n;
      var a;
      var s = w(l);
      function l() {
        v(this, l);
        return s.apply(this, arguments);
      }
      t = l;
      if (n = [{
        key: "render",
        value: function () {
          var e = this.props;
          var t = e.content;
          var n = e.offBtnBack;
          return g("div", {
            class: "main"
          }, undefined, g("div", {
            className: `col-xs-12 ${u.a.box}`
          }, undefined, o ||= g("img", {
            src: "https://s3.vio.edu.vn/robot_confirm_two_1677641177563.png",
            alt: "vioedu_img",
            width: 175
          }), g("h4", {
            className: u.a.title
          }, undefined, "Thông báo"), t ? g("span", {
            className: u.a.subTitle
          }, undefined, t) : g("span", {
            className: u.a.subTitle
          }, undefined, "Hệ thống VioEdu sẽ mở bán chính thức 2 môn Tiếng Việt và Toán Tiếng Anh vào ngày ", r ||= g("b", {}, undefined, "6/3/2023"), ". Cùng chờ đón!"), !n && g(h.a, {
            to: "/"
          }, undefined, g("div", {
            className: u.a.button
          }, undefined, i ||= g("h4", {}, undefined, "Quay về trang chủ")))));
        }
      }]) {
        x(t.prototype, n);
      }
      if (a) {
        x(t, a);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return l;
    }(s.Component);
    t.a = Object(m.flowRight)(c()(u.a), p.b, Object(f.b)(function (e) {
      return {
        config: e.runtime.config
      };
    }, null))(S);
  },
  1947:
  /*!*****************************************************!*\
    !*** ./src/components/common/UpdateGrade/style.css ***!
    \*****************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./style.css */1948);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1948:
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/common/UpdateGrade/style.css ***!
    \*************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._2STW2{font-family:Google Sans Flex,sans-serif!important;font-family:var(--font-family-brand)!important;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand)}._3w3H2 ._2-o6K,._3w3H2 ._3zUc6{background:#fff}._3WN-e{border-bottom:1px solid #e1e1e1;margin-bottom:15px;padding-bottom:10px;height:50px}._3WN-e>h3{font-weight:700;font-size:24px;line-height:28px}._2KSMo{font-size:16px;line-height:28px;color:#798195;padding:20px 0}._199Eh{color:#2e3a59;font-size:14px}._2t3OB{background-color:#65b446;color:#fff!important}._1dv_o,._2t3OB{white-space:inherit;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._1dv_o{background-color:#e4e9f2;color:#8f9bb3!important}._1klsI{background-color:#fff;color:#2e3a59!important;white-space:inherit;border:1px solid #c5cee0;font-weight:700;margin:10px;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._1Y06a{background-color:#65b446;color:#fff!important;border-radius:20px}._1J7y2,._1Y06a{-ms-flex:1 1;flex:1 1;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;text-align:center;padding:10px}._1J7y2{background-color:#fff;color:#000!important}._1J7y2,._1lji2{border:1px solid #ccc;border-radius:20px}._1lji2{background-color:#f44336;text-align:center;-ms-flex:1 1;flex:1 1;color:#fff!important;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;padding:10px}._1aaf-,._2hY1R{background-color:#f3f3f4}._3w3H2{background-color:#fff;background-color:var(--white-color)}._2h3PX{border-top:0;padding:20px 0}._1xwv0{clear:both;margin-bottom:0;margin-top:0;padding:0}._1V1Yl{background-color:#fff;color:inherit;padding:15px 20px 20px;border-color:#e7eaec;-o-border-image:none;border-image:none;border-style:solid solid none;border-width:1px 0;clear:both}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}._1uTuG{background-color:rgba(0,0,0,.3)}._1uTuG,._2mRVl{position:fixed;top:0;bottom:0;left:0;right:0;padding:50px;z-index:99999}._2mRVl{background-color:#1e1e1e}._1Hn1d{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);padding:50px;z-index:2}._1wdr6{margin-top:12px}.JIukn{margin-bottom:40px}._22yUd{margin-bottom:50px}._1Dvy2{margin-bottom:60px}.oomnn{margin-bottom:70px}._17ic4{background-color:#65b446;padding:10px 25px;color:#fff;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._17ic4:hover{background-color:#fff;color:#65b446;-webkit-box-shadow:none;box-shadow:none}._36CmV{background-color:#fff;padding:10px 25px;color:#2e3a59;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2UjBz{margin-bottom:16px}@media (max-width:360px){._36CmV{background-color:#fff;color:#2e3a59;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0}._17ic4,._36CmV{padding:10px 15px;font-size:15px;font-weight:500;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._17ic4{background-color:#65b446;color:#fff;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446}}._245Df{font-weight:700;font-size:20px;line-height:28px;margin-top:10px}._1a7aK,._245Df{color:#2e3a59;font-family:Vietnam Pro!important}._1a7aK{font-weight:400;font-size:16px;line-height:24px}._1UE_Y{background-color:#fff;height:400px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:16px}._3WzRo{background:#fff;font-family:Vietnam Pro!important;color:#2e3a59}._3WzRo,._3WzRo:hover{-ms-flex-align:center;align-items:center;border:1px solid #c5cee0;-webkit-box-shadow:0 6px 0 #f0f0f0;box-shadow:0 6px 0 #f0f0f0;border-radius:100px;height:48px;width:180px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;margin-top:10px;cursor:pointer}._3WzRo:hover{background:#65b446;font-weight:700;color:#fff}", ""]);
    t.locals = {
      fontBrand: "_2STW2",
      white_bg: "_3w3H2",
      navbar_fixed_top: "_2-o6K",
      navbar_static_top: "_3zUc6",
      headerBox: "_3WN-e",
      labelFilter: "_2KSMo",
      textLoading: "_199Eh",
      btnGreenNew: "_2t3OB",
      btnGrayNew: "_1dv_o",
      btnWhiteNew: "_1klsI",
      btnGreenNewFlex: "_1Y06a",
      btnWhiteNewFlex: "_1J7y2",
      btnRedNewFlex: "_1lji2",
      gray_bg: "_1aaf-",
      "bg-muted": "_2hY1R",
      container: "_2h3PX",
      ibox: "_1xwv0",
      ibox_content: "_1V1Yl",
      backdropStyle: "_1uTuG",
      backdropStyle3: "_2mRVl",
      backdropStyle2: "_1Hn1d",
      root: "_1wdr6",
      "u-margin-bottom-4": "JIukn",
      "u-margin-bottom-5": "_22yUd",
      "u-margin-bottom-6": "_1Dvy2",
      "u-margin-bottom-7": "oomnn",
      btn_green_new: "_17ic4",
      btn_white_new: "_36CmV",
      margin_bottom_16: "_2UjBz",
      title: "_245Df",
      subTitle: "_1a7aK",
      box: "_1UE_Y",
      button: "_3WzRo"
    };
  },
  1949:
  /*!******************************************************************!*\
    !*** ./src/routes/skill-practice/helper/groupQuestion.helper.js ***!
    \******************************************************************/
  /*! exports provided: isGroupQuestion, isStandaloneSubQuestion, readPracticeResult, createSubRefStore, readGroupAnswer, isGroupAnswerFilled, getGroupAnswerText, runInSequence, toSubResultMap, buildGroupExplanation */
  /*! exports used: buildGroupExplanation, createSubRefStore, getGroupAnswerText, isGroupAnswerFilled, isGroupQuestion, isStandaloneSubQuestion, readGroupAnswer, readPracticeResult, runInSequence, toSubResultMap */
  function (e, t, n) {
    "use strict";

    n.d(t, "e", function () {
      return l;
    });
    n.d(t, "f", function () {
      return c;
    });
    n.d(t, "h", function () {
      return d;
    });
    n.d(t, "b", function () {
      return u;
    });
    n.d(t, "g", function () {
      return p;
    });
    n.d(t, "d", function () {
      return f;
    });
    n.d(t, "c", function () {
      return m;
    });
    n.d(t, "i", function () {
      return h;
    });
    n.d(t, "j", function () {
      return b;
    });
    n.d(t, "a", function () {
      return g;
    });
    var o = n(/*! ../../../constants */8);
    function r(e) {
      return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (t) {
          o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          });
        }
        n.push.apply(n, o);
      }
      return n;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] ?? {};
        if (t % 2) {
          i(Object(n), true).forEach(function (t) {
            s(e, t, n[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          i(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
      return e;
    }
    function s(e, t, n) {
      if ((t = function (e) {
        var t = function (e, t) {
          if (r(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (r(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (r(t) === "symbol") {
          return t;
        } else {
          return String(t);
        }
      }(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    var l = function (e) {
      return !!e && e.questionType === o.F && Array.isArray(e.subQuestions) && e.subQuestions.length > 0;
    };
    var c = function (e) {
      return !!e && !!e._id && !!e.isSubQuestion && (!!e.mainQuestionContent || !!e.mainQuestionAudioUrl) && !l(e);
    };
    var d = function (e) {
      if (!e || typeof e.checkResult != "function") {
        return null;
      }
      var t = e.checkResult();
      if (parseInt(t, 10) === -1) {
        return null;
      } else {
        return t;
      }
    };
    var u = function () {
      var e = {};
      var t = {};
      return {
        getSetter: function (n) {
          t[n] ||= function (t) {
            e[n] = t;
          };
          return t[n];
        },
        get: function (t) {
          return e[t];
        }
      };
    };
    var p = function (e, t) {
      var n = e.subQuestions.map(function (e) {
        var n = d(t(e._id));
        if (n) {
          return a(a({}, n), {}, {
            id: e._id
          });
        } else {
          return null;
        }
      });
      if (n.some(function (e) {
        return !e;
      })) {
        return null;
      } else {
        return {
          id: e._id,
          listAnswers: [],
          subAnswers: n
        };
      }
    };
    var f = function (e, t, n) {
      return t.subAnswers.every(function (t, o) {
        return !!n(e.subQuestions[o].questionType, t);
      });
    };
    var m = function (e, t, n) {
      return e.subQuestions.map(function (e, o) {
        return n(t.subAnswers[o], e) || "";
      }).join("; ");
    };
    var h = function (e, t) {
      return e.reduce(function (e, n) {
        return e.then(function () {
          return t(n);
        });
      }, Promise.resolve());
    };
    var b = function (e = []) {
      return (e || []).reduce(function (e, t) {
        return a(a({}, e), {}, s({}, t.id, !!t.result));
      }, {});
    };
    var g = function (e, t = [], n = 1, o = []) {
      var r = function (e) {
        return (e || []).map(function (e) {
          return e.text || "";
        }).join("");
      };
      var i = e.subQuestions.map(function (e, o) {
        var i = (t || []).find(function (t) {
          return t && t.id === e._id;
        });
        if (!i || i.result) {
          return "";
        } else {
          return `<p><b>Câu ${n + o}:</b></p>${r(i.explain)}`;
        }
      }).join("");
      var a = r(o) + i;
      if (a) {
        return [{
          text: a
        }];
      } else {
        return [];
      }
    };
  },
  1950:
  /*!*******************************************************************************************************!*\
    !*** ./src/routes/skill-practice-tester/components/TesterFontSizeControls/TesterFontSizeControls.css ***!
    \*******************************************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../../node_modules/css-loader??ref--6-rules-2!../../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./TesterFontSizeControls.css */1951);
    var r = n(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  1951:
  /*!***************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice-tester/components/TesterFontSizeControls/TesterFontSizeControls.css ***!
    \***************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._1jXLW{gap:8px;-ms-flex-negative:0;flex-shrink:0}._1jXLW,.f6UDB{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.f6UDB{width:40px;height:40px;-ms-flex-pack:center;justify-content:center;padding:0;border:1px solid #e4e9f2;border-radius:50%;background:#f3f5fa;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.06);box-shadow:0 1px 2px rgba(0,0,0,.06);color:#222b45;cursor:pointer;outline:none;line-height:1}.f6UDB:hover:not(:disabled){background:#e9edf5}.f6UDB:disabled{opacity:.45;cursor:not-allowed}._3xuCG{min-width:44px;text-align:center;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:13px;line-height:20px;color:#4c536b}._2p3JV,._3xuCG{font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._2p3JV{font-size:22px;line-height:1}", ""]);
    t.locals = {
      controls: "_1jXLW",
      btn: "f6UDB",
      value: "_3xuCG",
      icon: "_2p3JV"
    };
  },
  2152:
  /*!*********************************************************!*\
    !*** ./src/routes/skill-practice/SkillPracticePage.css ***!
    \*********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../node_modules/css-loader??ref--6-rules-2!../../../node_modules/postcss-loader/lib??ref--6-rules-3!./SkillPracticePage.css */2199);
    var r = n(/*! ../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  2153:
  /*!********************************************!*\
    !*** ./src/actions/companion/companion.js ***!
    \********************************************/
  /*! exports provided: updateEmotionAction, updateStatusMissionAction, getUserCompanionInfo */
  /*! exports used: getUserCompanionInfo, updateEmotionAction, updateStatusMissionAction */
  function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return m;
    });
    n.d(t, "c", function () {
      return h;
    });
    n.d(t, "a", function () {
      return b;
    });
    var o = n(/*! ./action-type */399);
    var r = n(/*! ./updateEmotion.graphql */2209);
    var i = n.n(r);
    var a = n(/*! ./updateStatusMissionCompanion.graphql */2210);
    var s = n.n(a);
    var l = n(/*! ./getUserCompanionInformationQ.graphql */2211);
    var c = n.n(l);
    function d(e) {
      return (d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function u() {
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      u = function () {
        return e;
      };
      var e = {};
      var t = Object.prototype;
      var n = t.hasOwnProperty;
      var o = Object.defineProperty || function (e, t, n) {
        e[t] = n.value;
      };
      var r = typeof Symbol == "function" ? Symbol : {};
      var i = r.iterator || "@@iterator";
      var a = r.asyncIterator || "@@asyncIterator";
      var s = r.toStringTag || "@@toStringTag";
      function l(e, t, n) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return e[t];
      }
      try {
        l({}, "");
      } catch (e) {
        l = function (e, t, n) {
          return e[t] = n;
        };
      }
      function c(e, t, n, r) {
        var i = t && t.prototype instanceof m ? t : m;
        var a = Object.create(i.prototype);
        var s = new j(r || []);
        o(a, "_invoke", {
          value: _(e, n, s)
        });
        return a;
      }
      function p(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      e.wrap = c;
      var f = {};
      function m() {}
      function h() {}
      function b() {}
      var g = {};
      l(g, i, function () {
        return this;
      });
      var v = Object.getPrototypeOf;
      var x = v && v(v(C([])));
      if (x && x !== t && n.call(x, i)) {
        g = x;
      }
      var y = b.prototype = m.prototype = Object.create(g);
      function w(e) {
        ["next", "throw", "return"].forEach(function (t) {
          l(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function k(e, t) {
        var r;
        o(this, "_invoke", {
          value: function (o, i) {
            function a() {
              return new t(function (r, a) {
                (function o(r, i, a, s) {
                  var l = p(e[r], e, i);
                  if (l.type !== "throw") {
                    var c = l.arg;
                    var u = c.value;
                    if (u && d(u) == "object" && n.call(u, "__await")) {
                      return t.resolve(u.__await).then(function (e) {
                        o("next", e, a, s);
                      }, function (e) {
                        o("throw", e, a, s);
                      });
                    } else {
                      return t.resolve(u).then(function (e) {
                        c.value = e;
                        a(c);
                      }, function (e) {
                        return o("throw", e, a, s);
                      });
                    }
                  }
                  s(l.arg);
                })(o, i, r, a);
              });
            }
            return r = r ? r.then(a, a) : a();
          }
        });
      }
      function _(e, t, n) {
        var o = "suspendedStart";
        return function (r, i) {
          if (o === "executing") {
            throw new Error("Generator is already running");
          }
          if (o === "completed") {
            if (r === "throw") {
              throw i;
            }
            return T();
          }
          n.method = r;
          n.arg = i;
          while (true) {
            var a = n.delegate;
            if (a) {
              var s = S(a, n);
              if (s) {
                if (s === f) {
                  continue;
                }
                return s;
              }
            }
            if (n.method === "next") {
              n.sent = n._sent = n.arg;
            } else if (n.method === "throw") {
              if (o === "suspendedStart") {
                o = "completed";
                throw n.arg;
              }
              n.dispatchException(n.arg);
            } else if (n.method === "return") {
              n.abrupt("return", n.arg);
            }
            o = "executing";
            var l = p(e, t, n);
            if (l.type === "normal") {
              o = n.done ? "completed" : "suspendedYield";
              if (l.arg === f) {
                continue;
              }
              return {
                value: l.arg,
                done: n.done
              };
            }
            if (l.type === "throw") {
              o = "completed";
              n.method = "throw";
              n.arg = l.arg;
            }
          }
        };
      }
      function S(e, t) {
        var n = t.method;
        var o = e.iterator[n];
        if (o === undefined) {
          t.delegate = null;
          if (n !== "throw" || !e.iterator.return || !(t.method = "return", t.arg = undefined, S(e, t), t.method === "throw")) {
            if (n !== "return") {
              t.method = "throw";
              t.arg = new TypeError("The iterator does not provide a '" + n + "' method");
            }
          }
          return f;
        }
        var r = p(o, e.iterator, t.arg);
        if (r.type === "throw") {
          t.method = "throw";
          t.arg = r.arg;
          t.delegate = null;
          return f;
        }
        var i = r.arg;
        if (i) {
          if (i.done) {
            t[e.resultName] = i.value;
            t.next = e.nextLoc;
            if (t.method !== "return") {
              t.method = "next";
              t.arg = undefined;
            }
            t.delegate = null;
            return f;
          } else {
            return i;
          }
        } else {
          t.method = "throw";
          t.arg = new TypeError("iterator result is not an object");
          t.delegate = null;
          return f;
        }
      }
      function N(e) {
        var t = {
          tryLoc: e[0]
        };
        if (1 in e) {
          t.catchLoc = e[1];
        }
        if (2 in e) {
          t.finallyLoc = e[2];
          t.afterLoc = e[3];
        }
        this.tryEntries.push(t);
      }
      function O(e) {
        var t = e.completion || {};
        t.type = "normal";
        delete t.arg;
        e.completion = t;
      }
      function j(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }];
        e.forEach(N, this);
        this.reset(true);
      }
      function C(e) {
        if (e) {
          var t = e[i];
          if (t) {
            return t.call(e);
          }
          if (typeof e.next == "function") {
            return e;
          }
          if (!isNaN(e.length)) {
            var o = -1;
            var r = function t() {
              while (++o < e.length) {
                if (n.call(e, o)) {
                  t.value = e[o];
                  t.done = false;
                  return t;
                }
              }
              t.value = undefined;
              t.done = true;
              return t;
            };
            return r.next = r;
          }
        }
        return {
          next: T
        };
      }
      function T() {
        return {
          value: undefined,
          done: true
        };
      }
      h.prototype = b;
      o(y, "constructor", {
        value: b,
        configurable: true
      });
      o(b, "constructor", {
        value: h,
        configurable: true
      });
      h.displayName = l(b, s, "GeneratorFunction");
      e.isGeneratorFunction = function (e) {
        var t = typeof e == "function" && e.constructor;
        return !!t && (t === h || (t.displayName || t.name) === "GeneratorFunction");
      };
      e.mark = function (e) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(e, b);
        } else {
          e.__proto__ = b;
          l(e, s, "GeneratorFunction");
        }
        e.prototype = Object.create(y);
        return e;
      };
      e.awrap = function (e) {
        return {
          __await: e
        };
      };
      w(k.prototype);
      l(k.prototype, a, function () {
        return this;
      });
      e.AsyncIterator = k;
      e.async = function (t, n, o, r, i = Promise) {
        var a = new k(c(t, n, o, r), i);
        if (e.isGeneratorFunction(n)) {
          return a;
        } else {
          return a.next().then(function (e) {
            if (e.done) {
              return e.value;
            } else {
              return a.next();
            }
          });
        }
      };
      w(y);
      l(y, s, "Generator");
      l(y, i, function () {
        return this;
      });
      l(y, "toString", function () {
        return "[object Generator]";
      });
      e.keys = function (e) {
        var t = Object(e);
        var n = [];
        for (var o in t) {
          n.push(o);
        }
        n.reverse();
        return function e() {
          while (n.length) {
            var o = n.pop();
            if (o in t) {
              e.value = o;
              e.done = false;
              return e;
            }
          }
          e.done = true;
          return e;
        };
      };
      e.values = C;
      j.prototype = {
        constructor: j,
        reset: function (e) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined;
          this.tryEntries.forEach(O);
          if (!e) {
            for (var t in this) {
              if (t.charAt(0) === "t" && n.call(this, t) && !isNaN(+t.slice(1))) {
                this[t] = undefined;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var e = this.tryEntries[0].completion;
          if (e.type === "throw") {
            throw e.arg;
          }
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) {
            throw e;
          }
          var t = this;
          function o(n, o) {
            a.type = "throw";
            a.arg = e;
            t.next = n;
            if (o) {
              t.method = "next";
              t.arg = undefined;
            }
            return !!o;
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var i = this.tryEntries[r];
            var a = i.completion;
            if (i.tryLoc === "root") {
              return o("end");
            }
            if (i.tryLoc <= this.prev) {
              var s = n.call(i, "catchLoc");
              var l = n.call(i, "finallyLoc");
              if (s && l) {
                if (this.prev < i.catchLoc) {
                  return o(i.catchLoc, true);
                }
                if (this.prev < i.finallyLoc) {
                  return o(i.finallyLoc);
                }
              } else if (s) {
                if (this.prev < i.catchLoc) {
                  return o(i.catchLoc, true);
                }
              } else {
                if (!l) {
                  throw new Error("try statement without catch or finally");
                }
                if (this.prev < i.finallyLoc) {
                  return o(i.finallyLoc);
                }
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var r = this.tryEntries[o];
            if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
              var i = r;
              break;
            }
          }
          if (i && (e === "break" || e === "continue") && i.tryLoc <= t && t <= i.finallyLoc) {
            i = null;
          }
          var a = i ? i.completion : {};
          a.type = e;
          a.arg = t;
          if (i) {
            this.method = "next";
            this.next = i.finallyLoc;
            return f;
          } else {
            return this.complete(a);
          }
        },
        complete: function (e, t) {
          if (e.type === "throw") {
            throw e.arg;
          }
          if (e.type === "break" || e.type === "continue") {
            this.next = e.arg;
          } else if (e.type === "return") {
            this.rval = this.arg = e.arg;
            this.method = "return";
            this.next = "end";
          } else if (e.type === "normal" && t) {
            this.next = t;
          }
          return f;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) {
              this.complete(n.completion, n.afterLoc);
              O(n);
              return f;
            }
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var o = n.completion;
              if (o.type === "throw") {
                var r = o.arg;
                O(n);
              }
              return r;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (e, t, n) {
          this.delegate = {
            iterator: C(e),
            resultName: t,
            nextLoc: n
          };
          if (this.method === "next") {
            this.arg = undefined;
          }
          return f;
        }
      };
      return e;
    }
    function p(e, t, n, o, r, i, a) {
      try {
        var s = e[i](a);
        var l = s.value;
      } catch (e) {
        n(e);
        return;
      }
      if (s.done) {
        t(l);
      } else {
        Promise.resolve(l).then(o, r);
      }
    }
    function f(e) {
      return function () {
        var t = this;
        var n = arguments;
        return new Promise(function (o, r) {
          var i = e.apply(t, n);
          function a(e) {
            p(i, o, r, a, s, "next", e);
          }
          function s(e) {
            p(i, o, r, a, s, "throw", e);
          }
          a(undefined);
        });
      };
    }
    function m(e, t) {
      return function () {
        var n = f(u().mark(function n(r, a, s) {
          var l;
          var c;
          var d;
          return u().wrap(function (n) {
            while (true) {
              switch (n.prev = n.next) {
                case 0:
                  l = s.client;
                  r({
                    type: o.e,
                    payload: {}
                  });
                  n.prev = 2;
                  n.next = 5;
                  return l.mutate({
                    mutation: i.a,
                    variables: {
                      emotionStep: e,
                      emotionLink: t || ""
                    }
                  });
                case 5:
                  c = n.sent;
                  d = c.data;
                  r(d ? {
                    type: o.f,
                    payload: {
                      companion: d.updateEmotion
                    }
                  } : {
                    type: o.d,
                    payload: {}
                  });
                  n.next = 14;
                  break;
                case 10:
                  n.prev = 10;
                  n.t0 = n.catch(2);
                  r({
                    type: o.d,
                    payload: {
                      error: n.t0
                    }
                  });
                  return n.abrupt("return", false);
                case 14:
                  return n.abrupt("return", true);
                case 15:
                case "end":
                  return n.stop();
              }
            }
          }, n, null, [[2, 10]]);
        }));
        return function (e, t, o) {
          return n.apply(this, arguments);
        };
      }();
    }
    function h(e) {
      return function () {
        var t = f(u().mark(function t(n, r, i) {
          var a;
          var l;
          var c;
          return u().wrap(function (t) {
            while (true) {
              switch (t.prev = t.next) {
                case 0:
                  a = i.client;
                  n({
                    type: o.h,
                    payload: {}
                  });
                  t.prev = 2;
                  t.next = 5;
                  return a.mutate({
                    mutation: s.a,
                    variables: {
                      missionType: e
                    }
                  });
                case 5:
                  l = t.sent;
                  c = l.data;
                  n(c ? {
                    type: o.i,
                    payload: {
                      companion: c.updateStatusMissionCompanion
                    }
                  } : {
                    type: o.g,
                    payload: {}
                  });
                  t.next = 14;
                  break;
                case 10:
                  t.prev = 10;
                  t.t0 = t.catch(2);
                  n({
                    type: o.g,
                    payload: {
                      error: t.t0
                    }
                  });
                  return t.abrupt("return", false);
                case 14:
                  return t.abrupt("return", true);
                case 15:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[2, 10]]);
        }));
        return function (e, n, o) {
          return t.apply(this, arguments);
        };
      }();
    }
    function b() {
      return function () {
        var e = f(u().mark(function e(t, n, r) {
          var i;
          var a;
          var s;
          return u().wrap(function (e) {
            while (true) {
              switch (e.prev = e.next) {
                case 0:
                  i = r.client;
                  t({
                    type: o.b,
                    payload: {}
                  });
                  e.prev = 2;
                  e.next = 5;
                  return i.query({
                    query: c.a,
                    fetchPolicy: "network-only"
                  });
                case 5:
                  a = e.sent;
                  if (s = a.data) {
                    e.next = 11;
                    break;
                  }
                  t({
                    type: o.a,
                    payload: {}
                  });
                  e.next = 13;
                  break;
                case 11:
                  t({
                    type: o.c,
                    payload: {
                      companion: s.getUserCompanionInformation
                    }
                  });
                  return e.abrupt("return", s.getUserCompanionInformation);
                case 13:
                  e.next = 19;
                  break;
                case 15:
                  e.prev = 15;
                  e.t0 = e.catch(2);
                  t({
                    type: o.a,
                    payload: {
                      error: e.t0
                    }
                  });
                  return e.abrupt("return", false);
                case 19:
                  return e.abrupt("return", true);
                case 20:
                case "end":
                  return e.stop();
              }
            }
          }, e, null, [[2, 15]]);
        }));
        return function (t, n, o) {
          return e.apply(this, arguments);
        };
      }();
    }
  },
  2199:
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/SkillPracticePage.css ***!
    \*****************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._14TZ0{font-family:Google Sans Flex,sans-serif!important;font-family:var(--font-family-brand)!important;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand)}.nXJAj ._2RXIe,.nXJAj ._3mmNG{background:#fff}._23jJP{border-bottom:1px solid #e1e1e1;margin-bottom:15px;padding-bottom:10px;height:50px}._23jJP>h3{font-weight:700;font-size:24px;line-height:28px}._3s1-e{font-size:16px;line-height:28px;color:#798195;padding:20px 0}._1kl9S{color:#2e3a59;font-size:14px}._3Mj3p{background-color:#65b446;color:#fff!important}._2yeTx,._3Mj3p{white-space:inherit;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._2yeTx{background-color:#e4e9f2;color:#8f9bb3!important}.Tr0t9{background-color:#fff;color:#2e3a59!important;white-space:inherit;border:1px solid #c5cee0;font-weight:700;margin:10px;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._10Apl{background-color:#65b446;color:#fff!important;border-radius:20px}._1aoTd,._10Apl{-ms-flex:1 1;flex:1 1;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;text-align:center;padding:10px}._1aoTd{background-color:#fff;color:#000!important}._1aoTd,._1piuF{border:1px solid #ccc;border-radius:20px}._1piuF{background-color:#f44336;text-align:center;-ms-flex:1 1;flex:1 1;color:#fff!important;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;padding:10px}._2AJVZ,._2TAYp{background-color:#f3f3f4}.nXJAj{background-color:#fff;background-color:var(--white-color)}.V7gkw{border-top:0;padding:20px 0}._1DfyT{clear:both;margin-bottom:0;margin-top:0;padding:0}._2-w8V{background-color:#fff;color:inherit;padding:15px 20px 20px;border-color:#e7eaec;-o-border-image:none;border-image:none;border-style:solid solid none;border-width:1px 0;clear:both}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}._32eX5{background-color:rgba(0,0,0,.3)}._1OfZd,._32eX5{position:fixed;top:0;bottom:0;left:0;right:0;padding:50px;z-index:99999}._1OfZd{background-color:#1e1e1e}.O0x1E{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);padding:50px;z-index:2}._1KdxN{margin-top:12px}._3hC4c{margin-bottom:40px}.fXTVc{margin-bottom:50px}._2Vehq{margin-bottom:60px}._2x0wL{margin-bottom:70px}._2jYHZ{background-color:#65b446;padding:10px 25px;color:#fff;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2jYHZ:hover{background-color:#fff;color:#65b446;-webkit-box-shadow:none;box-shadow:none}._3P_Bx{background-color:#fff;padding:10px 25px;color:#2e3a59;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2DRhU{margin-bottom:16px}@media (max-width:360px){._3P_Bx{background-color:#fff;color:#2e3a59;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0}._2jYHZ,._3P_Bx{padding:10px 15px;font-size:15px;font-weight:500;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2jYHZ{background-color:#65b446;color:#fff;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446}}.userAnswered{pointer-events:none}.userAnswered input,.userAnswered select,.userAnswered textarea{pointer-events:none;cursor:not-allowed}._2LRyJ{position:fixed;z-index:100000000;width:300px;border:4px solid #777;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;height:130px;-ms-flex-pack:center;justify-content:center;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);top:450px;border-radius:10px}._154sU{position:relative;border-radius:100px;height:50px;width:230px;font-size:19px;font-weight:700;color:#fff!important;background:#65b446;-webkit-box-shadow:0 6px 0 #4d9830;box-shadow:0 6px 0 #4d9830;text-shadow:1px 1px 1px #000;margin-bottom:0;margin-top:8px}._154sU:hover{color:#fff!important;text-shadow:1px 1px 1px #000!important;-webkit-transition:background-color .4s;-o-transition:background-color .4s;transition:background-color .4s}._154sU.axfbW,._154sU.axfbW:active,._154sU.axfbW:focus,._154sU.axfbW:hover{display:-ms-inline-flexbox!important;display:inline-flex!important;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;line-height:1;padding:0 24px!important;text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.axfbW{width:auto;min-width:230px;max-width:100%;cursor:wait;opacity:1;background:#fff!important;border:2px solid #b3b3b3!important;color:#2e3a59!important;-webkit-box-shadow:none!important;box-shadow:none!important}._3XRHw{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:10px;white-space:nowrap;margin:0;line-height:1}._3XpEU{width:26px;height:26px;-o-object-fit:contain;object-fit:contain;display:block;-ms-flex-negative:0;flex-shrink:0;margin:0}._2s_bq{font-size:16px;line-height:1;color:#2e3a59;text-shadow:none!important}._1BZmq{border-radius:5px;right:0;background-color:#fff;color:#000;border-bottom:4px solid #b3b3b3;border-right:2px solid #b3b3b3}._1BZmq:hover{background-color:#eee!important}._1mv-J{width:30px;height:30px}._3vXko{height:40px;margin-top:-10px}._t4w8{height:25px;display:inline-block;margin-top:-5px;margin-left:10px}._2Kp4A{cursor:pointer;text-align:right;font-size:14px;padding-bottom:5px;color:#337ab7}._3xUn5{background-color:#a4d96b;white-space:inherit;border-bottom:4px solid #74b46d;text-shadow:1px 1px 1px #000;border-right:2px solid #74b46d}._3xUn5,._3xUn5:hover{color:#fff!important}._5rXTu{padding-right:20px;margin-right:20px}._39YnD{border-radius:5px;margin-top:30px;margin-bottom:0;background-image:url(\"https://s3.vio.edu.vn/assets/img/scoreBarPractice-full.png\");background-repeat:no-repeat;width:503px;height:31px}.rgnRv:hover{z-index:10000}.rgnRv:hover>._1C8t2{display:-ms-flexbox;display:flex;position:absolute;z-index:10001;top:75px}._1C8t2{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:baseline;align-items:baseline;background:#fff;background-color:#fff;opacity:1;isolation:isolate;padding:12px 16px;border-radius:8px;border:1px solid #e4e9f2;-webkit-box-shadow:0 8px 24px rgba(31,46,76,.18);box-shadow:0 8px 24px rgba(31,46,76,.18);line-height:30px;display:none;position:absolute;font-size:16px;color:#2e3a59;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:min(420px,90vw);-webkit-box-sizing:border-box;box-sizing:border-box}._3k3Cv{overflow:visible}._1N8us,._3k3Cv{position:relative}._1N8us{min-height:300px;padding:12px 12px 10px!important}._19db1{padding:12px 12px 24px}.Ksiay{margin-bottom:0;text-align:center}.u8c9_{-ms-flex-pack:justify;justify-content:space-between;min-height:40px;margin:4px 0 0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}._2r2a5,.u8c9_{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:12px}._2r2a5{min-width:0;-ms-flex:1 1;flex:1 1}._32e9b{-ms-flex-negative:0;flex-shrink:0;color:#2e3a59;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:16px;font-weight:700;line-height:1.4}._1BLaX{zoom:1;zoom:var(--q-scale,1);margin-top:8px;overflow:visible;position:relative;z-index:2}._1BLaX .panel,._1BLaX .panel-question-bank{margin-top:0!important;padding-left:0!important;padding-right:0!important}._1BLaX>.row{margin-top:0!important;margin-left:0!important;margin-right:0!important}._1BLaX>.row>[class*=col-]{padding-left:0!important;padding-right:0!important}._1BLaX .panel-question-bank{margin-top:0!important;padding-top:0}._1BLaX .panel-body,._1BLaX .practice-question-text{padding-top:0!important;padding-left:0!important;padding-right:0!important;font-size:18px!important;font-size:var(--q-prose-font-size,18px)!important;line-height:2!important}._1BLaX .Select-menu-outer{z-index:20}._1BLaX .box-text-stype-one,._1BLaX .box-text-stype-two,._1BLaX .control-answer-ckeditor,._1BLaX .form-control-answer-ckeditor{min-width:0;max-width:100%;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}._1BLaX .input-group{width:100%;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}._1BLaX .box-text-stype-one img,._1BLaX .box-text-stype-two img,._1BLaX .cke_textarea_inline img,._1BLaX .control-answer-ckeditor img,._1BLaX .form-control-answer-ckeditor img{max-width:100%!important;height:auto!important}._1N8us ._1BLaX img{margin-top:10px;margin-bottom:10px}._1BLaX .math-tex,._1BLaX .mjx-chtml,._1BLaX mjx-container,._1XNNH .math-tex,._1XNNH .mjx-chtml,._1XNNH mjx-container,._2dihd .math-tex,._2dihd .mjx-chtml,._2dihd mjx-container,._32EjS .math-tex,._32EjS .mjx-chtml,._32EjS mjx-container{font-size:20px!important;font-size:var(--q-math-font-size,22px)!important;line-height:0!important;font-variation-settings:normal!important;word-spacing:normal!important}._1BLaX .math-tex *,._1BLaX .mjx-chtml *,._1BLaX mjx-container *,._1XNNH .math-tex *,._1XNNH .mjx-chtml *,._1XNNH mjx-container *,._2dihd .math-tex *,._2dihd .mjx-chtml *,._2dihd mjx-container *,._32EjS .math-tex *,._32EjS .mjx-chtml *,._32EjS mjx-container *{font-variation-settings:normal!important;word-spacing:normal!important}@supports not (zoom:1){._1BLaX{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform:scale(var(--q-scale,1));-ms-transform:scale(var(--q-scale,1));transform:scale(var(--q-scale,1));-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:100%;width:calc(100%/var(--q-scale, 1))}}._8fJXg._17YFX{display:none}._8fJXg{z-index:10;display:block}._3GwkC{width:50%;-ms-flex-pack:center!important;justify-content:center!important}._1bhJ9{width:40px;height:40px;cursor:pointer;margin-right:4px}.ujiVw{width:200px;font-size:18px;line-height:1.3;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-clamp:2;word-break:break-word;cursor:pointer}@media (max-width:850px){._5rXTu{margin-left:10px;margin-top:10px;padding-left:10px;padding-right:0!important;margin-right:0!important}._5rXTu h3{font-size:12px!important}._5rXTu:first-child{border:none!important}._1C8t2{width:100%;left:0}}@media (max-width:768px){._2Kp4A{display:inherit;position:fixed;bottom:110px;right:-112px;border:1px solid #ddd;z-index:106;padding:5px;border-top-left-radius:5px;border-bottom-left-radius:5px;background:#fff;color:#a4a4a4}._2Kp4A,._2Kp4A:hover{-webkit-transition:right .5s;-o-transition:right .5s;transition:right .5s}._2Kp4A:hover{right:-3px}._2Kp4A i{font-size:20px}._3vXko{height:15px!important}._3vXko,._t4w8{margin-top:-5px;margin-right:3px}._t4w8{height:15px;display:inline-block;margin-left:1px}}.ZpmD_{background:#fff;border:1px solid #fcc9ac;border-radius:12px 12px 24px 24px;margin-top:15px;margin-bottom:20px;overflow:hidden}._2YVRr{background:#fbefd9;padding:8px 16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:14px;font-weight:600;color:#7e620c;min-height:40px;height:auto;-webkit-box-sizing:border-box;box-sizing:border-box}._2YVRr,._3yoLK{-ms-flex-align:center;align-items:center;gap:8px}._3yoLK{display:-ms-inline-flexbox;display:inline-flex;min-width:0}._2dihd{zoom:1;zoom:var(--q-scale,1)}@supports not (zoom:1){._2dihd{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform:scale(var(--q-scale,1));-ms-transform:scale(var(--q-scale,1));transform:scale(var(--q-scale,1));-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;width:100%;width:calc(100%/var(--q-scale, 1))}}._32EjS{padding:16px 20px;color:#2e3a59}._1XNNH,._32EjS{font-size:18px;font-size:var(--q-prose-font-size,18px);line-height:2}._1XNNH{margin-bottom:10px}._2dihd img,._32EjS img{margin-top:10px;margin-bottom:10px}._30ob1{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:16px;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px}._30ob1,._31bVE{-ms-flex-align:center;align-items:center}._31bVE{background:#65b446;color:#fff!important;border:3px solid hsla(93,82%,98%,.3);-webkit-box-shadow:0 5px 0 0 #4d9830;box-shadow:0 5px 0 0 #4d9830;border-radius:100px;height:48px;min-width:198px;padding:0 32px;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:16px;font-weight:600;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;outline:none;text-shadow:none!important}._31bVE:hover{background:#5aa53e;color:#fff!important}._31bVE:disabled{cursor:wait;opacity:.65;pointer-events:none}._1GWmy{background:#fff;border:1px solid #c5cee0;-webkit-box-shadow:0 5px 0 0 #d5d9e2;box-shadow:0 5px 0 0 #d5d9e2;border-radius:100px;height:48px;min-width:198px;padding:0 32px;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:16px;font-weight:600;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;outline:none;text-shadow:none!important;position:relative}._1GWmy,._1GWmy:hover{color:#2e3a59!important}._1GWmy:hover{background:#f7f9fc}._1GWmy:active{-webkit-transform:translateY(3px);-ms-transform:translateY(3px);transform:translateY(3px);-webkit-box-shadow:0 2px 0 0 #d5d9e2;box-shadow:0 2px 0 0 #d5d9e2}._2oyOy{background:#fceee6;border-radius:24px;padding:0 16px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;color:#383f56!important;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:16px;font-weight:600;line-height:24px;-webkit-transition:background-color .2s;-o-transition:background-color .2s;transition:background-color .2s}._2oyOy:hover{background:#fadecf}._2oyOy>div{display:-ms-inline-flexbox!important;display:inline-flex!important;-ms-flex-align:center;align-items:center;gap:8px!important;color:inherit;font:inherit}._2oyOy>div>span{color:#383f56;font-size:16px;font-weight:600;line-height:24px;white-space:nowrap}._2NIXQ{display:block;width:24px;height:24px;margin:0;padding:0;border:none;-o-object-fit:contain;object-fit:contain;-ms-flex-negative:0;flex-shrink:0}._3vA5g{background:#fff;border:1px solid #d0d2fa;border-radius:12px 12px 24px 24px;margin-bottom:20px;overflow:visible}._1zqdG{background:#f0f0fb;padding:8px 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:14px;font-weight:600;color:#1349b0;height:40px}._1Voc0{padding:16px 20px;font-size:16px;color:#2e3a59}._1Voc0 .box--practice{background:transparent!important;border:none!important;-webkit-box-shadow:none!important;box-shadow:none!important;padding:0!important;margin:0!important}._2fzie{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;gap:16px;margin-top:15px;margin-bottom:20px;width:100%}._1HBlj{width:100px;height:100px;-ms-flex-negative:0;flex-shrink:0;-o-object-fit:contain;object-fit:contain}._1ahqM{position:relative;background:#fff;border-radius:24px;padding:20px 28px;-ms-flex:1 1;flex:1 1;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.06);box-shadow:0 4px 16px rgba(0,0,0,.06)}._1ahqM:before{content:\"\";position:absolute;top:24px;left:-12px;width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:14px solid #fff}", ""]);
    t.locals = {
      fontBrand: "_14TZ0",
      white_bg: "nXJAj",
      navbar_fixed_top: "_2RXIe",
      navbar_static_top: "_3mmNG",
      headerBox: "_23jJP",
      labelFilter: "_3s1-e",
      textLoading: "_1kl9S",
      btnGreenNew: "_3Mj3p",
      btnGrayNew: "_2yeTx",
      btnWhiteNew: "Tr0t9",
      btnGreenNewFlex: "_10Apl",
      btnWhiteNewFlex: "_1aoTd",
      btnRedNewFlex: "_1piuF",
      gray_bg: "_2TAYp",
      "bg-muted": "_2AJVZ",
      container: "V7gkw",
      ibox: "_1DfyT",
      ibox_content: "_2-w8V",
      backdropStyle: "_32eX5",
      backdropStyle3: "_1OfZd",
      backdropStyle2: "O0x1E",
      root: "_1KdxN",
      "u-margin-bottom-4": "_3hC4c",
      "u-margin-bottom-5": "fXTVc",
      "u-margin-bottom-6": "_2Vehq",
      "u-margin-bottom-7": "_2x0wL",
      btn_green_new: "_2jYHZ",
      btn_white_new: "_3P_Bx",
      margin_bottom_16: "_2DRhU",
      expriedPractice: "_2LRyJ",
      btnAnswer: "_154sU",
      btnAnswerChecking: "axfbW",
      btnAnswerCheckingContent: "_3XRHw",
      btnAnswerCheckingLoadingImg: "_3XpEU",
      btnAnswerCheckingText: "_2s_bq",
      btnFeedback: "_1BZmq",
      size30: "_1mv-J",
      iconPractice: "_3vXko",
      iconPracticeDiamond: "_t4w8",
      feedBackButtonInMobile: "_2Kp4A",
      btn_dahieu: "_3xUn5",
      info_practice: "_5rXTu",
      ve_scoreBarPractice_full: "_39YnD",
      score_area: "rgnRv",
      score_hint: "_1C8t2",
      questionCard: "_3k3Cv",
      practiceContent: "_1N8us",
      practiceAnswerActions: "_19db1",
      practiceAnswerBtnWrap: "Ksiay",
      questionToolbar: "u8c9_",
      toolbarLeft: "_2r2a5",
      questionToolbarTitle: "_32e9b",
      questionScaled: "_1BLaX",
      solutionScaled: "_2dihd",
      solutionBody: "_32EjS",
      solutionExplainText: "_1XNNH",
      challenge_success: "_8fJXg",
      msg_hidden: "_17YFX",
      btn_Modal: "_3GwkC",
      backIcon: "_1bhJ9",
      skillName: "ujiVw",
      solutionCard: "ZpmD_",
      solutionHeader: "_2YVRr",
      solutionHeaderLeft: "_3yoLK",
      solutionFooter: "_30ob1",
      btnDaHieu: "_31bVE",
      btnXemTiep: "_1GWmy",
      reportBtnWrapper: "_2oyOy",
      reportBtnIcon: "_2NIXQ",
      userAnswerCard: "_3vA5g",
      userAnswerHeader: "_1zqdG",
      userAnswerBody: "_1Voc0",
      robotTooltipWrapper: "_2fzie",
      robotImage: "_1HBlj",
      robotTooltip: "_1ahqM"
    };
  },
  2200:
  /*!***********************************************************!*\
    !*** ./src/components/Question/shared/LongTextToggle.css ***!
    \***********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./LongTextToggle.css */2201);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  2201:
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/components/Question/shared/LongTextToggle.css ***!
    \*******************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ".long-text-toggle{border:1px solid #c5cee0;border-radius:12px;padding:12px 16px;margin:12px;background:#fff;color:#2e3a59;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:var(--font-variation-brand);font-size:16px;line-height:1.5;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .15s ease,border-color .15s ease;-o-transition:background-color .15s ease,border-color .15s ease;transition:background-color .15s ease,border-color .15s ease}.long-text-toggle--open{background:#f3f5fa;border-color:#c5cee0}.long-text-toggle-btn{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:12px;width:100%;cursor:pointer;font-weight:500;color:#2e3a59;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.long-text-toggle-btn:hover{color:#2e3a59;font-weight:700}.long-text-toggle-btn:after{content:\"+\";-ms-flex-negative:0;flex-shrink:0;width:24px;height:24px;border-radius:50%;border:1px solid #c5cee0;background:#fff;color:#2e3a59;font-size:18px;font-weight:600;line-height:22px;text-align:center;-webkit-transition:background-color .15s ease,border-color .15s ease,color .15s ease;-o-transition:background-color .15s ease,border-color .15s ease,color .15s ease;transition:background-color .15s ease,border-color .15s ease,color .15s ease}.long-text-toggle--open .long-text-toggle-btn:after{content:\"\\2212\";background:#edf1f7;border-color:#c5cee0;color:#2e3a59}", ""]);
  },
  2202:
  /*!*******************************************************************!*\
    !*** ./src/routes/skill-practice/practice-timer/PracticeTimer.js ***!
    \*******************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i;
    var a;
    var s;
    var l;
    var c;
    var d;
    var u;
    var p;
    var f;
    var m = n(/*! react */0);
    var h = n.n(m);
    var b = n(/*! ./practiceTimer.css */2203);
    var g = n.n(b);
    var v = n(/*! lodash.flowright */14);
    var x = n.n(v);
    var y = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var w = n.n(y);
    var k = n(/*! react-redux */15);
    function _(e) {
      return (_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function S(e, t, n, o) {
      p ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: p,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function N(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (_(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (_(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), _(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function O(e, t) {
      return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function j(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = T(e);
        if (t) {
          var r = T(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return C(this, n);
      };
    }
    function C(e, t) {
      if (t && (_(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function T(e) {
      return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var A = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          O(e, t);
        }
      })(h, e);
      var t;
      var n;
      var p;
      var m = j(h);
      function h(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, h);
        (t = m.call(this, e)).state = {
          currentHour: "00",
          currentMinute: "00",
          currentSecond: "00",
          startTime: new Date()
        };
        return t;
      }
      t = h;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          this._isMounted = true;
          this.updateTime();
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this._isMounted = false;
        }
      }, {
        key: "condUpdateTime",
        value: function () {
          return this.props.data && this.props.data._id && this._isMounted && this.props.score < 100 && !this.props.expired && !this.props.isStop;
        }
      }, {
        key: "updateTime",
        value: function () {
          var e = this;
          var t = parseInt((new Date() - this.state.startTime) / 1000);
          t -= this.state.currentMinute * 60;
          var n = this.state.currentHour;
          var o = this.state.currentMinute;
          if (t > 59) {
            t = 0;
            o = parseInt(this.state.currentMinute) + 1;
          }
          if (o > 59) {
            o = 0;
            n = parseInt(this.state.currentHour) + 1;
          }
          if (this.condUpdateTime()) {
            this.setState({
              currentHour: n < 10 ? `0${parseInt(n)}` : n,
              currentMinute: o < 10 ? `0${parseInt(o)}` : o,
              currentSecond: t < 10 ? `0${parseInt(t)}` : t
            });
          }
          f = setTimeout(function () {
            return e.updateTime();
          }, 1000);
          if (!this._isMounted) {
            clearTimeout(f);
          }
        }
      }, {
        key: "render",
        value: function () {
          return S("div", {
            className: g.a.timerShell
          }, undefined, S("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            style: {
              flexShrink: 0
            }
          }, undefined, o ||= S("circle", {
            cx: "16",
            cy: "16",
            r: "13.5",
            fill: "#ffffff",
            stroke: "#FFA800",
            strokeWidth: "3.5"
          }), r ||= S("line", {
            x1: "16",
            y1: "6",
            x2: "16",
            y2: "7.5",
            stroke: "#94A3B8",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), i ||= S("line", {
            x1: "16",
            y1: "24.5",
            x2: "16",
            y2: "26",
            stroke: "#94A3B8",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), a ||= S("line", {
            x1: "6",
            y1: "16",
            x2: "7.5",
            y2: "16",
            stroke: "#94A3B8",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), s ||= S("line", {
            x1: "24.5",
            y1: "16",
            x2: "26",
            y2: "16",
            stroke: "#94A3B8",
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }), l ||= S("line", {
            x1: "16",
            y1: "16",
            x2: "11",
            y2: "11",
            stroke: "#2E3A59",
            strokeWidth: "2.8",
            strokeLinecap: "round"
          }), c ||= S("line", {
            x1: "16",
            y1: "16",
            x2: "21.5",
            y2: "11",
            stroke: "#2E3A59",
            strokeWidth: "2.8",
            strokeLinecap: "round"
          }), d ||= S("line", {
            x1: "16",
            y1: "16",
            x2: "9.5",
            y2: "22.5",
            stroke: "#FF4D4F",
            strokeWidth: "2",
            strokeLinecap: "round"
          }), u ||= S("circle", {
            cx: "16",
            cy: "16",
            r: "1.5",
            fill: "#2E3A59"
          })), S("span", {
            className: g.a.timerValue
          }, undefined, `${this.state.currentHour}:${this.state.currentMinute}:${this.state.currentSecond}`));
        }
      }]) {
        N(t.prototype, n);
      }
      if (p) {
        N(t, p);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return h;
    }(h.a.Component);
    t.a = x()(Object(k.b)(function (e) {
      return {
        config: e.runtime.config
      };
    }), w()(g.a))(A);
  },
  2203:
  /*!********************************************************************!*\
    !*** ./src/routes/skill-practice/practice-timer/practiceTimer.css ***!
    \********************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./practiceTimer.css */2204);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  2204:
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/practice-timer/practiceTimer.css ***!
    \****************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._1OM5g{height:40px;margin-top:-3px;margin-right:3px}._52PcN{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:10px;background:#fff;border:1px dashed #c5cee0;border-radius:100px;padding:4px 14px 4px 6px;height:40px;width:148px;min-width:148px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0}._1gGeM{font-size:18px;font-weight:700;color:#2e3a59;font-family:Google Sans Flex,sans-serif;line-height:1;width:86px;min-width:86px;font-variant-numeric:tabular-nums;-webkit-font-feature-settings:\"tnum\" 1;font-feature-settings:\"tnum\" 1;letter-spacing:0;display:inline-block;text-align:left;white-space:nowrap}@media (max-width:768px){._1OM5g{height:15px!important;margin-top:0}}", ""]);
    t.locals = {
      iconTimer: "_1OM5g",
      timerShell: "_52PcN",
      timerValue: "_1gGeM"
    };
  },
  2205:
  /*!***********************************************************************************!*\
    !*** ./src/routes/skill-practice/components/PracticeSolution/PracticeSolution.js ***!
    \***********************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    n(/*! react */0);
    var o;
    var r;
    var i = n(/*! lodash.flowright */14);
    var a = n.n(i);
    var s = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var l = n.n(s);
    var c = n(/*! react-redux */15);
    var d = n(/*! ../../../../components/QuestionReport/QuestionReport */1797);
    var u = n(/*! ../../../skill-practice-tester/components/TesterFontSizeControls/TesterFontSizeControls */1809);
    var p = n(/*! ../../SkillPracticePage.css */2152);
    var f = n.n(p);
    function m(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var h = function (e) {
      var t = e.showSolution;
      var n = e.isLoadingNextQuestion;
      var r = e.currentAnswer;
      var i = e.explanation;
      var a = e.shownExplain;
      var s = e.currentQuestion;
      var l = e.getNextQuestion;
      var c = e.onShowNextExplain;
      var p = e.config;
      var h = e.fontScale;
      var b = e.onDecreaseFont;
      var g = e.onIncreaseFont;
      if (!t) {
        return null;
      }
      var v;
      var x = p && p.assetsDomain || "";
      var y = s && s._id ? s._id : "";
      var w = typeof b == "function" && typeof g == "function";
      var k = i && i[0] && i[0].text && i[0].text.replace(/&nbsp;/g, " ").replace(/(\s){2,}/g, "").replace(/<p>/g, "").replace(/<\/p>/g, "<br />").replace(/<img/g, "<img class=\"img-responsive\"");
      return m("div", {}, undefined, m("div", {
        className: f.a && f.a.solutionCard ? f.a.solutionCard : "panel panel-primary panel-question margin-bottom-20 margin-top-10"
      }, undefined, m("div", {
        className: f.a && f.a.solutionHeader ? f.a.solutionHeader : "panel-heading heading-giaithich"
      }, undefined, m("div", {
        className: f.a.solutionHeaderLeft
      }, undefined, m("img", {
        src: `${x}/2026/img/UI2026/ic-yellow-light.png`,
        width: 20,
        height: 20,
        alt: "Giải thích"
      }), "\xA0", o ||= m("span", {}, undefined, "Giải thích")), w && m(u.e, {
        scale: h,
        onDecrease: b,
        onIncrease: g
      })), m("div", {
        className: f.a && f.a.solutionBody ? f.a.solutionBody : "panel-body body-giaithich"
      }, undefined, m("div", {
        className: w ? f.a.solutionScaled : undefined,
        style: w ? {
          "--q-scale": h,
          zoom: h
        } : undefined
      }, undefined, m("div", {
        className: f.a.solutionExplainText,
        dangerouslySetInnerHTML: {
          __html: k
        }
      }), (v = i) && Array.isArray(v) ? v.filter(function (e, t) {
        return t > 0;
      }).map(function (e, t) {
        return m("div", {
          dangerouslySetInnerHTML: {
            __html: e && e.text && e.text.replace(/(\s){2,}/g, "").replace(/<p>/g, "").replace(/&nbsp;/g, " ").replace(/<\/p>/g, "<br />").replace(/<img/g, "<img class=\"img-responsive\"")
          },
          style: {
            marginBottom: "10px",
            fontSize: "16px",
            display: a > t + 1 ? "block" : "none"
          }
        }, e._id || e.id || t);
      }) : null), m("div", {
        className: f.a && f.a.solutionFooter ? f.a.solutionFooter : "",
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
          flexWrap: "wrap",
          gap: "12px"
        }
      }, undefined, m("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }
      }, undefined, m("button", {
        type: "button",
        className: f.a && f.a.btnDaHieu ? f.a.btnDaHieu : ["btn btn--thirds", f.a && f.a.btnAnswer].join(" "),
        onClick: l,
        disabled: n,
        "aria-busy": n
      }, undefined, "Đã hiểu"), i && i.length > 1 && a < i.length && m("button", {
        type: "button",
        className: f.a && f.a.btnXemTiep ? f.a.btnXemTiep : `btn ${f.a && f.a.btn_dahieu}`,
        onClick: c
      }, undefined, "Xem tiếp")), m(d.a, {
        customClass: f.a && f.a.reportBtnWrapper ? f.a.reportBtnWrapper : "pull-right text-danger",
        icon: m("img", {
          src: `${x}/2026/img/IconWarningPR.png`,
          alt: "",
          className: f.a.reportBtnIcon
        }),
        questionId: y,
        userAnswered: r
      })))));
    };
    h.defaultProps = {
      fontScale: 1,
      onDecreaseFont: null,
      onIncreaseFont: null,
      isLoadingNextQuestion: false
    };
    t.a = a()(Object(c.b)(function (e) {
      return {
        config: e.runtime && e.runtime.config
      };
    }, {}), l()(f.a))(h);
  },
  2206:
  /*!*****************************************************************************!*\
    !*** ./src/routes/skill-practice/components/GroupQuestion/GroupQuestion.js ***!
    \*****************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    n(/*! react */0);
    var o;
    var r = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var i = n.n(r);
    var a = n(/*! ../../../../components/QuestionAudio/QuestionAudio */1428);
    var s = n(/*! ../../../../components/QuestionAudio/QuestionHtmlContent */1725);
    var l = n(/*! ../../../../components/Question/shared/QuestionVideo */1420);
    var c = n(/*! ./GroupQuestion.css */2207);
    var d = n.n(c);
    function u(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var p = {
      display: "flex",
      color: "#0080e2"
    };
    var f = function (e) {
      var t = e.question;
      var n = e.startNo;
      var o = e.subResults;
      var r = e.renderSubQuestion;
      return u("div", {
        className: d.a.groupQuestion
      }, undefined, t.videoUrl && u(l.a, {
        url: t.videoUrl
      }), u(s.a, {
        className: d.a.groupMainContent,
        html: t.content
      }), t.subQuestions.map(function (e, t) {
        var i = o ? o[e._id] : undefined;
        return u("div", {
          className: d.a.subQuestion
        }, e._id, u("div", {
          className: d.a.subQuestionTitle
        }, undefined, u("span", {}, undefined, "Câu ", n + t), e.audioContent && u(a.a, {
          audioLink: e.audioContent,
          customStyle: p
        }, e._id), typeof i == "boolean" && u("span", {
          className: i ? d.a.subResultCorrect : d.a.subResultWrong
        }, undefined, i ? "Đúng" : "Sai")), u("div", {
          className: d.a.subQuestionBody
        }, undefined, r(e)));
      }));
    };
    f.defaultProps = {
      startNo: 1,
      subResults: null
    };
    t.a = i()(d.a)(f);
  },
  2207:
  /*!******************************************************************************!*\
    !*** ./src/routes/skill-practice/components/GroupQuestion/GroupQuestion.css ***!
    \******************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../../node_modules/css-loader??ref--6-rules-2!../../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./GroupQuestion.css */2208);
    var r = n(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  2208:
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/components/GroupQuestion/GroupQuestion.css ***!
    \**************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, "._3_IES{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}._3rJ9C{padding:12px 16px;font-size:18px;font-size:var(--q-prose-font-size,18px);line-height:1.8;color:#2e3a59}._3rJ9C img{max-width:100%;height:auto}._2cLRI{padding-top:12px;border-top:1px dashed #d4d9e4}._2xv4j{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:12px;margin-bottom:4px;color:#2e3a59;font-size:16px;font-weight:700}._8u4d4,._13aqq{padding:2px 10px;border-radius:999px;font-size:13px;font-weight:600;color:#fff}._8u4d4{background-color:#2e9e5b}._13aqq{background-color:#d93f3f}._2ydpr{width:100%}._2ydpr>.row{margin-top:0!important;margin-left:0!important;margin-right:0!important}._2ydpr>.row>[class*=col-]{padding-left:0!important;padding-right:0!important}", ""]);
    t.locals = {
      groupQuestion: "_3_IES",
      groupMainContent: "_3rJ9C",
      subQuestion: "_2cLRI",
      subQuestionTitle: "_2xv4j",
      subResultCorrect: "_8u4d4",
      subResultWrong: "_13aqq",
      subQuestionBody: "_2ydpr"
    };
  },
  2209:
  /*!*****************************************************!*\
    !*** ./src/actions/companion/updateEmotion.graphql ***!
    \*****************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "updateEmotion"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "emotionStep"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "emotionLink"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "updateEmotion"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "emotionStep"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "emotionStep"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "emotionLink"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "emotionLink"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "nickname"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "spineId"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionIconImage"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionshipPoint"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionshipLevel"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionshipLevelTitle"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "currentEmotion"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 298
      }
    };
    n.loc.source = {
      body: "mutation updateEmotion(\n$emotionStep: Int,\n$emotionLink: String\n) {\n  updateEmotion(\n    emotionStep: $emotionStep,\n    emotionLink: $emotionLink\n  ){\n    nickname\n    spineId\n    companionIconImage\n    companionshipPoint\n    companionshipLevel\n    companionshipLevelTitle\n    currentEmotion\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.updateEmotion = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "updateEmotion");
  },
  2210:
  /*!********************************************************************!*\
    !*** ./src/actions/companion/updateStatusMissionCompanion.graphql ***!
    \********************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "updateStatusMissionCompanion"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "missionType"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "updateStatusMissionCompanion"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "missionType"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "missionType"
                }
              }
            }],
            directives: []
          }]
        }
      }],
      loc: {
        start: 0,
        end: 132
      }
    };
    n.loc.source = {
      body: "mutation updateStatusMissionCompanion(\n$missionType: String\n) {\n  updateStatusMissionCompanion(\n    missionType: $missionType\n  )\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.updateStatusMissionCompanion = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "updateStatusMissionCompanion");
  },
  2211:
  /*!********************************************************************!*\
    !*** ./src/actions/companion/getUserCompanionInformationQ.graphql ***!
    \********************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "query",
        name: {
          kind: "Name",
          value: "getUserCompanionInformationQ"
        },
        variableDefinitions: [],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "getUserCompanionInformation"
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "nickname"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "spineId"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionIconImage"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionshipPoint"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionshipLevel"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "companionshipLevelTitle"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "currentEmotion"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "levelBadge"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "currentEmotionLine"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "currentEmotionFace"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 277
      }
    };
    n.loc.source = {
      body: "query getUserCompanionInformationQ {\n  getUserCompanionInformation {\n    nickname\n    spineId\n    companionIconImage\n    companionshipPoint\n    companionshipLevel\n    companionshipLevelTitle\n    currentEmotion\n    levelBadge\n    currentEmotionLine\n    currentEmotionFace\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.getUserCompanionInformationQ = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "getUserCompanionInformationQ");
  },
  2212:
  /*!************************************!*\
    !*** ./src/constants/companion.js ***!
    \************************************/
  /*! exports provided: DEFAULT_GAME_VERSION, LIMIT_RECORD_10, MS_TIME, VUI_LV, KUN_LV, BUON_LV, ONE_DAY_TIME, FIVE_MINUTES, HAFT_DAY, MIN_TIME_GAP, LONG_DAYS, LEARN_SKILL, PRACTICE, LEARN_VIDEO, GO_ARENA, GO_VIOLLYMPIC, NUMBER_QUESTDAILY, INIT_SKIN, DATA_ACTION, NEW, DONE, RECEIVED, DIAMOND_FULL_DAILY, TYPE_MISSION */
  /*! exports used: DEFAULT_GAME_VERSION, TYPE_MISSION */
  function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    n.d(t, "b", function () {
      return r;
    });
    var o = "v14062023_v2";
    var r = {
      LOGIN_COMPANION: "LOGIN_COMPANION",
      PRACTICE_VIDEO: "PRACTICE_VIDEO",
      PRACTICE_70: "PRACTICE_70",
      PRACTICE_80: "PRACTICE_80",
      PRACTICE_90: "PRACTICE_90",
      PRACTICE_100: "PRACTICE_100",
      EXAM: "EXAM",
      ARENA: "ARENA",
      COMPANION_CHANGE: "COMPANION_CHANGE",
      LINK: "LINK"
    };
  },
  2213:
  /*!**********************************************!*\
    !*** ./src/routes/skill-practice/Loading.js ***!
    \**********************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    n(/*! react */0);
    var o;
    var r = n(/*! react-redux */15);
    var i = n(/*! lodash.flowright */14);
    var a = n.n(i);
    var s = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var l = n.n(s);
    var c = n(/*! ../../components/Hoc/withAlert */99);
    var d = n(/*! ./complete-notice/completeNotice.css */1811);
    var u = n.n(d);
    function p(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    t.a = a()(Object(r.b)(function (e) {
      return {
        config: e.runtime && e.runtime.config
      };
    }), Object(c.a)(), l()(u.a))(function (e) {
      var t = e.config;
      var n = t && t.assetsDomain || "https://s3.vio.edu.vn/assets";
      var o = `${n}/img/2025/ai/viogpt-loading.gif`;
      return p("div", {}, undefined, p("div", {
        className: u.a.backdropStyle
      }), p("div", {
        className: u.a.loadingStyleInnerNew
      }, undefined, p("img", {
        src: o,
        alt: "loading",
        className: u.a.questionLoadingImg
      }), p("p", {
        className: u.a.questionLoadingText
      }, undefined, "Đang lấy thông tin câu hỏi. Vui lòng đợi giây lát")));
    });
  },
  2561:
  /*!***************************************************************************!*\
    !*** ./src/routes/skill-practice/graphql/practiceSessionMutation.graphql ***!
    \***************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "PracticeSessionMutation"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "updateId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "sessionName"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "CreatePracticeSession"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "updateId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "updateId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "sessionName"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "sessionName"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "_id"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "startTime"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "sessionName"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 216
      }
    };
    n.loc.source = {
      body: "mutation PracticeSessionMutation(\n  $updateId: String\n  $sessionName: String\n) {\n  CreatePracticeSession(\n    updateId: $updateId\n    sessionName: $sessionName\n  ) {\n      _id\n      startTime\n      sessionName\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.PracticeSessionMutation = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "PracticeSessionMutation");
  },
  2562:
  /*!**************************************************************************!*\
    !*** ./src/routes/skill-practice/graphql/practiceResultMutation.graphql ***!
    \**************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "PracticeResultMutation"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "updateId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skill"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "topic"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "category"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "subject"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillName"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "totalScore"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "wrongCount"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "session"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "sessionStart"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "questionId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "answer"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "AnswerInput"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "userHomeworkId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillResultId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "requiredSkills"
            }
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "isNew"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "currentTime"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "fromMobile"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "CreatePracticeResult"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "updateId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "updateId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skill"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skill"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "topic"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "topic"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "category"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "category"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "subject"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "subject"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillName"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillName"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "totalScore"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "totalScore"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "wrongCount"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "wrongCount"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "session"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "session"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "sessionStart"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "sessionStart"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "questionId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "questionId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "answer"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "answer"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "userHomeworkId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "userHomeworkId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillResultId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillResultId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "requiredSkills"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "requiredSkills"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "isNew"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "isNew"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "currentTime"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "currentTime"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fromMobile"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "fromMobile"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "_id"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "firstSkillResult"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 963
      }
    };
    n.loc.source = {
      body: "mutation PracticeResultMutation(\n  $updateId: String\n  $skill: String\n  $topic: String,\n  $category: String,\n  $subject: String\n  $skillName: String\n  $totalScore: Int\n  $wrongCount: Int\n  $session: String\n  $sessionStart: String\n  $questionId: String\n  $answer: AnswerInput\n  $userHomeworkId: String\n  $skillResultId: String\n  $requiredSkills: [String]\n  $isNew: Boolean\n  $currentTime: String\n  $fromMobile: Boolean\n) {\n  CreatePracticeResult(\n    updateId: $updateId\n    skill: $skill\n    topic: $topic\n    category: $category\n    subject: $subject\n    skillName: $skillName\n    totalScore: $totalScore\n    wrongCount: $wrongCount\n    session: $session\n    sessionStart: $sessionStart\n    questionId: $questionId\n    answer: $answer\n    userHomeworkId: $userHomeworkId\n    skillResultId: $skillResultId\n    requiredSkills: $requiredSkills\n    isNew: $isNew\n    currentTime: $currentTime\n    fromMobile: $fromMobile\n  ) {\n      _id\n      firstSkillResult\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.PracticeResultMutation = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "PracticeResultMutation");
  },
  2563:
  /*!**************************************************************************************!*\
    !*** ./src/routes/skill-practice/graphql/completeUserFinancePracticeMission.graphql ***!
    \**************************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "CompleteUserFinancePracticeMission"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "token"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "completeUserFinancePracticeMission"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "token"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "token"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillId"
                }
              }
            }],
            directives: []
          }]
        }
      }],
      loc: {
        start: 0,
        end: 152
      }
    };
    n.loc.source = {
      body: "mutation CompleteUserFinancePracticeMission($token: String, $skillId: String) {\n  completeUserFinancePracticeMission(token: $token, skillId: $skillId)\n}",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.CompleteUserFinancePracticeMission = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "CompleteUserFinancePracticeMission");
  },
  2564:
  /*!*****************************************************************************************!*\
    !*** ./src/routes/skill-practice/components/SkillPracticeHeader/SkillPracticeHeader.js ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    n(/*! react */0);
    var o;
    var r;
    var i;
    var a = n(/*! react-redux */15);
    var s = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var l = n.n(s);
    var c = n(/*! ../../../../history */24);
    var d = n(/*! ./SkillPracticeHeader.css */2565);
    var u = n.n(d);
    var p = n(/*! ../../practice-timer/PracticeTimer */2202);
    var f = n(/*! ../ScoreHint/ScoreHint */1457);
    function m(e, t, n, o) {
      i ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && r) {
        for (var c in r) {
          if (t[c] === undefined) {
            t[c] = r[c];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: i,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var h = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    t.a = Object(a.b)(function (e) {
      return {
        config: e.runtime.config
      };
    })(l()(u.a)(function (e) {
      var t = e.currentQuestion;
      var n = e.totalScore;
      var i = e.trueAnswered;
      var a = e.totalAnswered;
      var s = e.isExpiredPractice;
      var l = e.isDone;
      var d = e.config;
      var b = e.scoreLabel;
      var g = e.showScoreHint;
      var v = g === undefined || g;
      var x = d && d.assetsDomain || "";
      var y = n || 0;
      return m("div", {
        className: `white-bg notShowBoxInfo ${u.a.headerWrapper}`
      }, undefined, m("div", {
        className: u.a.headerContainer
      }, undefined, m("div", {
        className: u.a.headerLeft
      }, undefined, m("button", {
        type: "button",
        className: u.a.btnBack,
        onClick: function () {
          return c.a.push("/skill-list");
        },
        title: "Quay lại"
      }, undefined, o ||= m("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none"
      }, undefined, m("path", {
        d: "M16 21L7 12L16 3",
        stroke: "#212121",
        strokeWidth: "3",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }))), m("div", {
        className: u.a.skillTitleWrapper
      }, undefined, m("img", {
        src: `${x}/2026/img/UI2026/star_practice_skillname.png`,
        alt: "",
        className: u.a.starIcon
      }), m("div", {
        className: `skill-name ${u.a.skillNameText}`,
        title: t && t.skillName
      }, undefined, t && t.skillName))), m("div", {
        className: u.a.score_area
      }, undefined, m("div", {
        className: u.a.segmentsContainer
      }, undefined, h.map(function (e, t) {
        var n = y >= e;
        var o = function (e, t) {
          var n = (e - (t - 10)) / 10;
          return Math.max(0, Math.min(1, n)) * 100;
        }(y, e);
        var r = t === 8;
        var s = t === 9;
        var l = t === 6 || t === 7 || r || s;
        var c = n;
        return m("div", {
          className: u.a.segmentCol
        }, e, m("div", {
          className: u.a.topSlot
        }, undefined, l && m("div", {
          className: u.a.diamondWrapper
        }, undefined, m("img", {
          src: `${x}${c ? "/icon/diamondPass.png" : "/icon/diamondComing.png"}`,
          onError: function (e) {
            if (c) {
              e.target.src = `${x}/img/diamond.png`;
            }
          },
          alt: "Diamond",
          className: c ? u.a.diamondImg : u.a.diamondComingImg
        }), s && m("div", {
          className: u.a.badgeBonus
        }, undefined, "6"))), m("div", {
          className: u.a.pillSegment
        }, undefined, m("div", {
          className: u.a.pillFill,
          style: {
            width: `${o}%`
          }
        })), m("div", {
          className: u.a.bottomSlot
        }, undefined, r && m("div", {
          className: u.a.statBadge
        }, undefined, m("img", {
          src: `${x}/icon/correctPractice.png`,
          alt: "Correct",
          className: u.a.statIcon
        }), m("span", {}, undefined, i || 0)), s && m("div", {
          className: u.a.statBadge
        }, undefined, m("img", {
          src: `${x}/icon/wrongPractice.png`,
          alt: "Wrong",
          className: u.a.statIcon
        }), m("span", {}, undefined, (a || 0) - (i || 0)))));
      }), m("div", {
        className: u.a.trophyCol
      }, undefined, m("div", {
        className: u.a.trophyTopSpacer
      }), m("div", {
        className: u.a.trophySlot
      }, undefined, m("img", {
        src: `${x}/icon/practiceCup.png`,
        alt: "Trophy Cup",
        className: u.a.trophyImg,
        style: {
          opacity: y >= 100 ? 1 : 0.7
        }
      })), m("div", {
        className: u.a.trophyBottomSpacer
      })), m("div", {
        className: u.a.scoreTextWrapper
      }, undefined, m("span", {
        className: u.a.scoreText
      }, undefined, b || `${y}/100`), v && (r ||= m(f.a, {}))))), m("div", {
        className: u.a.timerRight
      }, undefined, m(p.a, {
        data: t,
        score: n,
        expired: s,
        isStop: l
      }))));
    }));
  },
  2565:
  /*!******************************************************************************************!*\
    !*** ./src/routes/skill-practice/components/SkillPracticeHeader/SkillPracticeHeader.css ***!
    \******************************************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../../node_modules/css-loader??ref--6-rules-2!../../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./SkillPracticeHeader.css */2566);
    var r = n(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  2566:
  /*!**************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/components/SkillPracticeHeader/SkillPracticeHeader.css ***!
    \**************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._2dZfg{font-family:Google Sans Flex,sans-serif!important;font-family:var(--font-family-brand)!important;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand)}._2Oluq ._27NDZ,._2Oluq .wkX_L{background:#fff}.OcGF8{border-bottom:1px solid #e1e1e1;margin-bottom:15px;padding-bottom:10px;height:50px}.OcGF8>h3{font-weight:700;font-size:24px;line-height:28px}._1iS2w{font-size:16px;line-height:28px;color:#798195;padding:20px 0}.dig90{color:#2e3a59;font-size:14px}._1Mziq{background-color:#65b446;color:#fff!important}._1Mziq,.ZXCdd{white-space:inherit;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}.ZXCdd{background-color:#e4e9f2;color:#8f9bb3!important}._35s__{background-color:#fff;color:#2e3a59!important;white-space:inherit;border:1px solid #c5cee0;font-weight:700;margin:10px;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}.eMalV{background-color:#65b446;color:#fff!important;border-radius:20px}._2eOs3,.eMalV{-ms-flex:1 1;flex:1 1;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;text-align:center;padding:10px}._2eOs3{background-color:#fff;color:#000!important}._1NNF_,._2eOs3{border:1px solid #ccc;border-radius:20px}._1NNF_{background-color:#f44336;text-align:center;-ms-flex:1 1;flex:1 1;color:#fff!important;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;padding:10px}._3ZBwc,._23DjW{background-color:#f3f3f4}._2Oluq{background-color:#fff;background-color:var(--white-color)}._3Rs2l{border-top:0;padding:20px 0}._2iJjo{clear:both;margin-bottom:0;margin-top:0;padding:0}._3NQ_d{background-color:#fff;color:inherit;padding:15px 20px 20px;border-color:#e7eaec;-o-border-image:none;border-image:none;border-style:solid solid none;border-width:1px 0;clear:both}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}._27WFN{background-color:rgba(0,0,0,.3)}._1HwUL,._27WFN{position:fixed;top:0;bottom:0;left:0;right:0;padding:50px;z-index:99999}._1HwUL{background-color:#1e1e1e}._2yGTH{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);padding:50px;z-index:2}.iLoa2{margin-top:12px}.xIXW0{margin-bottom:40px}._3uDSx{margin-bottom:50px}._2UDwf{margin-bottom:60px}._3wn7D{margin-bottom:70px}._2wGGo{background-color:#65b446;padding:10px 25px;color:#fff;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2wGGo:hover{color:#65b446;-webkit-box-shadow:none;box-shadow:none}._2wGGo:hover,.fcbXp{background-color:#fff}.fcbXp{padding:10px 25px;color:#2e3a59;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2ZZWr{margin-bottom:16px}@media (max-width:360px){.fcbXp{background-color:#fff;color:#2e3a59;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0}._2wGGo,.fcbXp{padding:10px 15px;font-size:15px;font-weight:500;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2wGGo{background-color:#65b446;color:#fff;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446}}._2Lak0{background-color:#fff;border-bottom:1px solid #f0f2f5;margin-bottom:20px;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.04);box-shadow:0 2px 8px rgba(0,0,0,.04);margin-left:0;margin-right:0;z-index:20}._1BBor,._2Lak0{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;overflow:visible}._1BBor{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);-webkit-column-gap:12px;-moz-column-gap:12px;column-gap:12px;-ms-flex-align:center;align-items:center;height:90px;padding:0 24px}._1Tl2B{gap:14px;min-width:0;z-index:2}._1Tl2B,.KMnuX{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.KMnuX{width:40px;height:40px;background-color:#fff;border:1px solid #e4e9f2;border-radius:8px;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.05);box-shadow:0 2px 4px rgba(0,0,0,.05);-ms-flex-negative:0;flex-shrink:0;padding:0;outline:none;line-height:0}._1pVpr{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:10px;min-width:0;max-width:80%;overflow:hidden}._1Z8DV{-ms-flex:0 0 40px;flex:0 0 40px;width:40px;height:40px;-o-object-fit:contain;object-fit:contain}.lve5c{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:16px;font-weight:600;color:#1b242c;line-height:1.35;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;max-height:2.7em;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:normal}._1MIz2{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;position:relative;justify-self:center;cursor:pointer;z-index:1}._1MIz2:hover{z-index:10000}.HCFVQ{position:absolute;left:0;bottom:0;min-height:22px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;z-index:2;padding-bottom:2px}._1MIz2:hover .HCFVQ,.HCFVQ:hover{z-index:10001}._1MIz2:hover .HCFVQ .score-hint-popup,.HCFVQ:hover .score-hint-popup{display:-ms-flexbox;display:flex}._1rlNE{font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:14px;font-weight:700;color:#383f56;white-space:nowrap}._1ZsoA{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;gap:6px;position:relative}._3F-UI{width:36px}._1LiVu,._3F-UI{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}._1LiVu{height:26px;-ms-flex-pack:end;justify-content:flex-end;margin-bottom:2px}._3lWMr{position:relative}._2F8Th,._3lWMr{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}._2F8Th{position:absolute;top:-5px;right:-7px;background:#f59e0b;color:#fff;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:10px;font-weight:700;border-radius:50%;width:15px;height:15px;border:1.5px solid #fff;line-height:1;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.15);box-shadow:0 1px 3px rgba(0,0,0,.15)}.ezMTH{width:20px}.ezMTH,.vjy-S{height:18px;-o-object-fit:contain;object-fit:contain}.vjy-S{width:18px;opacity:.6}.tIOns{width:36px;height:10px;background-color:#e2e8f0;overflow:hidden}._2zFmx,.tIOns{border-radius:5px}._2zFmx{height:100%;min-width:0;background-color:#65b446;-webkit-transition:width .3s ease;-o-transition:width .3s ease;transition:width .3s ease}._3fUaU{height:22px;margin-top:6px;-ms-flex-pack:center;justify-content:center}._3fUaU,._3Q7Rv{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}._3Q7Rv{gap:4px;font-family:Google Sans Flex,sans-serif;font-family:var(--font-family-brand),Be Vietnam Pro,sans-serif;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand);font-size:13px;font-weight:700;color:#2e3a59;white-space:nowrap}._2OBmO{width:18px;height:18px;-o-object-fit:contain;object-fit:contain}.M17SP{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-left:4px}._2CcgB{height:26px;margin-bottom:2px}._10WlS{height:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}._3JKzW{width:24px;height:24px;-o-object-fit:contain;object-fit:contain}._3wD29{height:22px;margin-top:6px}.xG2kx{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;justify-self:end;z-index:2;-ms-flex-negative:0;flex-shrink:0;width:148px;min-width:148px;-ms-flex-pack:end;justify-content:flex-end}@media (max-width:1100px){._1pVpr{width:220px;min-width:0}._1Z8DV{display:none}}", ""]);
    t.locals = {
      fontBrand: "_2dZfg",
      white_bg: "_2Oluq",
      navbar_fixed_top: "wkX_L",
      navbar_static_top: "_27NDZ",
      headerBox: "OcGF8",
      labelFilter: "_1iS2w",
      textLoading: "dig90",
      btnGreenNew: "_1Mziq",
      btnGrayNew: "ZXCdd",
      btnWhiteNew: "_35s__",
      btnGreenNewFlex: "eMalV",
      btnWhiteNewFlex: "_2eOs3",
      btnRedNewFlex: "_1NNF_",
      gray_bg: "_23DjW",
      "bg-muted": "_3ZBwc",
      container: "_3Rs2l",
      ibox: "_2iJjo",
      ibox_content: "_3NQ_d",
      backdropStyle: "_27WFN",
      backdropStyle3: "_1HwUL",
      backdropStyle2: "_2yGTH",
      root: "iLoa2",
      "u-margin-bottom-4": "xIXW0",
      "u-margin-bottom-5": "_3uDSx",
      "u-margin-bottom-6": "_2UDwf",
      "u-margin-bottom-7": "_3wn7D",
      btn_green_new: "_2wGGo",
      btn_white_new: "fcbXp",
      margin_bottom_16: "_2ZZWr",
      headerWrapper: "_2Lak0",
      headerContainer: "_1BBor",
      headerLeft: "_1Tl2B",
      btnBack: "KMnuX",
      skillTitleWrapper: "_1pVpr",
      starIcon: "_1Z8DV",
      skillNameText: "lve5c",
      score_area: "_1MIz2",
      scoreTextWrapper: "HCFVQ",
      scoreText: "_1rlNE",
      segmentsContainer: "_1ZsoA",
      segmentCol: "_3F-UI",
      topSlot: "_1LiVu",
      diamondWrapper: "_3lWMr",
      badgeBonus: "_2F8Th",
      diamondImg: "ezMTH",
      diamondComingImg: "vjy-S",
      pillSegment: "tIOns",
      pillFill: "_2zFmx",
      bottomSlot: "_3fUaU",
      statBadge: "_3Q7Rv",
      statIcon: "_2OBmO",
      trophyCol: "M17SP",
      trophyTopSpacer: "_2CcgB",
      trophySlot: "_10WlS",
      trophyImg: "_3JKzW",
      trophyBottomSpacer: "_3wD29",
      timerRight: "xG2kx"
    };
  },
  2567:
  /*!********************************************************!*\
    !*** ./src/routes/skill-practice/graphql/test.graphql ***!
    \********************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "query",
        name: {
          kind: "Name",
          value: "GetQuestionResultQuery"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "userAnswered"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "PracticeAnswerType"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "subAnswers"
            }
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PracticeAnswerType"
              }
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "user"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "permission"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "getQuestionResultQuery"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "userAnswered"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "userAnswered"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "subAnswers"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "subAnswers"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "user"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "user"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "permission"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "permission"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "result"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "explain"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "text"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "order"
                    },
                    arguments: [],
                    directives: []
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "subResults"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "id"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "result"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "explain"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "text"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "order"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }]
                }
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 478
      }
    };
    n.loc.source = {
      body: "query GetQuestionResultQuery ($userAnswered: PracticeAnswerType, $subAnswers: [PracticeAnswerType], $skillId: String, $user: String, $permission: Boolean){\n  getQuestionResultQuery (userAnswered: $userAnswered, subAnswers: $subAnswers, skillId: $skillId, user: $user, permission: $permission ) {\n      result\n      explain {\n        text\n        order\n      }\n      subResults {\n        id\n        result\n        explain {\n          text\n          order\n        }\n      }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.GetQuestionResultQuery = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "GetQuestionResultQuery");
  },
  2568:
  /*!*****************************************************************************************!*\
    !*** ./src/routes/skill-practice/components/MainQuestionContext/MainQuestionContext.js ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r = n(/*! react */0);
    var i = n.n(r);
    var a = n(/*! ../../../../components/QuestionAudio/QuestionAudio */1428);
    var s = n(/*! ../../../../components/QuestionAudio/QuestionHtmlContent */1725);
    function l(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    var c = {
      display: "flex",
      color: "#0080e2"
    };
    var d = function (e) {
      var t = e.questionId;
      var n = e.content;
      var o = e.audioUrl;
      var r = e.contentClassName;
      return l(i.a.Fragment, {}, undefined, o && l(a.a, {
        audioLink: o,
        customStyle: c
      }, t), n && l(s.a, {
        className: r,
        html: n
      }));
    };
    d.defaultProps = {
      questionId: "",
      content: "",
      audioUrl: "",
      contentClassName: ""
    };
    t.a = d;
  },
  2569:
  /*!*********************************************************************!*\
    !*** ./src/routes/skill-practice/complete-notice/CompleteNotice.js ***!
    \*********************************************************************/
  /*! exports provided: default */
  /*! exports used: default */
  function (e, t, n) {
    "use strict";

    var o;
    var r;
    var i = n(/*! react */0);
    var a = n.n(i);
    var s = n(/*! ./completeNotice.css */1811);
    var l = n.n(s);
    var c = n(/*! lodash.flowright */14);
    var d = n.n(c);
    var u = n(/*! isomorphic-style-loader/lib/withStyles */9);
    var p = n.n(u);
    var f = n(/*! ../../../components/common/MascotConfirmPopup */273);
    var m = n(/*! ../../../history */24);
    function h(e) {
      return (h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function b(e, t, n, o) {
      r ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = o;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: r,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function g(e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function v(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (h(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (h(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), h(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function x(e, t) {
      return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function y(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = k(e);
        if (t) {
          var r = k(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return w(this, n);
      };
    }
    function w(e, t) {
      if (t && (h(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var _ = "https://s3.vio.edu.vn/assets/img/standardImg.png";
    var S = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          x(e, t);
        }
      })(a, e);
      var t;
      var n;
      var r;
      var i = y(a);
      function a() {
        g(this, a);
        return i.apply(this, arguments);
      }
      t = a;
      if (n = [{
        key: "getCompleteMessage",
        value: function () {
          if (this.props.isManual) {
            return "Chúc mừng bạn đã hoàn thành bài tập về nhà cho chủ điểm này";
          } else if (this.props.isDoneHomework || this.props.userHomeworkId !== "") {
            return "Chúc mừng bạn đã hoàn thành bài tập về nhà cho chủ điểm này. Bạn có muốn tiếp tục luyện tập các câu hỏi khác trong chủ điểm này không?";
          } else {
            return "Chúc mừng bạn đã thành thạo chủ điểm này. Bạn có muốn tiếp tục để nâng cao điểm số và có được nhiều kim cương hơn không?";
          }
        }
      }, {
        key: "renderExpiredScreen",
        value: function () {
          var e = this;
          return b(f.a, {
            open: true,
            assetsDomain: this.props.assetsDomain,
            title: "Xin lỗi",
            message: "Lần thực hành này của bạn đã hết thời gian",
            secondaryLabel: "Tôi đã hiểu",
            primaryLabel: "Thực hành lại",
            onSecondary: function () {
              return m.a.push("/skill-list");
            },
            onPrimary: function () {
              return e.props.reTry();
            }
          });
        }
      }, {
        key: "renderHelpScreen",
        value: function () {
          var e = this;
          var t = this.props.skillThumbnail || _;
          return b(f.c, {
            assetsDomain: this.props.assetsDomain,
            title: "Bạn đang gặp khó trong luyện tập?",
            primaryLabel: "Xem video",
            secondaryLabel: "Bỏ qua",
            onPrimary: function () {
              return m.a.push(`/skill-details/${e.props.skillId}`);
            },
            onSecondary: function () {
              return e.props.isContinue();
            }
          }, undefined, b("div", {
            className: l.a.helpContent
          }, undefined, b("img", {
            src: t,
            alt: "Video lý thuyết",
            className: l.a.helpThumbnail,
            onError: function (e) {
              if (e && e.currentTarget && e.currentTarget.src !== _) {
                e.currentTarget.src = _;
              }
            }
          }), b("p", {
            className: l.a.helpMessage
          }, undefined, "Bạn đang gặp khó khăn trong việc luyện tập? ", o ||= b("br", {}), "Bạn nên xem lại video lý thuyết trước khi tiếp tục luyện tập")));
        }
      }, {
        key: "renderCompleteScreen",
        value: function () {
          var e = this;
          return b(f.a, {
            open: true,
            assetsDomain: this.props.assetsDomain,
            title: "Chúc mừng bạn",
            message: this.getCompleteMessage(),
            secondaryLabel: this.props.isManual ? "Không, tôi đủ rồi" : "Không, tôi có đủ rồi",
            primaryLabel: "Tiếp tục nâng cao",
            onSecondary: function () {
              return m.a.push("/skill-list");
            },
            onPrimary: function () {
              return e.props.isContinue();
            },
            footer: this.props.isManual ? null : b("div", {
              className: l.a.missionFooter
            }, undefined, b("p", {
              className: l.a.orText
            }, undefined, "Hoặc bạn có thể"), b("button", {
              type: "button",
              className: l.a.missionContinueLink,
              onClick: function () {
                return m.a.push("/student-missions");
              }
            }, undefined, "Tiếp tục luyện tập theo nhiệm vụ"))
          });
        }
      }, {
        key: "render",
        value: function () {
          if (this.props.isExpired) {
            return this.renderExpiredScreen();
          } else if (this.props.isNeedHelp) {
            return b("div", {
              className: l.a.helpOverlay
            }, undefined, this.renderHelpScreen());
          } else {
            return this.renderCompleteScreen();
          }
        }
      }]) {
        v(t.prototype, n);
      }
      if (r) {
        v(t, r);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(a.a.Component);
    t.a = d()(p()(l.a))(S);
  },
  2570:
  /*!****************************************************************!*\
    !*** ./src/routes/skill-practice/graphql/getSkillInfo.graphql ***!
    \****************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "query",
        name: {
          kind: "Name",
          value: "getSkillInfo"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "getSkillInfo"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillId"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isCompleted"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 98
      }
    };
    n.loc.source = {
      body: "query getSkillInfo($skillId: String) {\n  getSkillInfo(skillId: $skillId) {\n    isCompleted,\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.getSkillInfo = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "getSkillInfo");
  },
  3458:
  /*!************************************************************!*\
    !*** ./src/routes/skill-practice/graphql/question.graphql ***!
    \************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "query",
        name: {
          kind: "Name",
          value: "PracticeQuestionQuery"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "user"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "score"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "permission"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "previousScore"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "grade"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "isTester"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "userHomeworkId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "fromSchool"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "notHomework"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "skillResultId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "totalQues"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "hwQsDone"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "homeworkQues"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "doneHwQues"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Int"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "currentWrongId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "isManual"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "afterManual"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Boolean"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "tokenId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "getPracticeQuestionBySkillId"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "user"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "user"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "score"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "score"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "permission"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "permission"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "previousScore"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "previousScore"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "grade"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "grade"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "isTester"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "isTester"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "userHomeworkId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "userHomeworkId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "fromSchool"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "fromSchool"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "notHomework"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "notHomework"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "skillResultId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "skillResultId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "totalQues"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "totalQues"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "hwQsDone"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "hwQsDone"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "homeworkQues"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "homeworkQues"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "doneHwQues"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "doneHwQues"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "currentWrongId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "currentWrongId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "isManual"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "isManual"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "afterManual"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "afterManual"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "tokenId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "tokenId"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "_id"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "skillName"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "thumbnails"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "grade"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "subject"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "content"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "depthOfKnowledge"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "questionType"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "answerColumnNo"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "answers"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "_id"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "text"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "order"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "sequenceId"
                    },
                    arguments: [],
                    directives: []
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "leftMatching"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "id"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "textContent"
                    },
                    arguments: [],
                    directives: []
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "rightMatching"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "id"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "textContent"
                    },
                    arguments: [],
                    directives: []
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "textDropdownAnswers"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "order"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "list"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "text"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "totalPart"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "colorPart"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "drawContent"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "startPoint"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "i"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "j"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "endPoint"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "i"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "j"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isQuotaSkill"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "drawHint"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "startPoint"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "i"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "j"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "endPoint"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "i"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "j"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }]
                }
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isQuotaDay"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isCompleted"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isSubscribe"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isManual"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "topic"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "category"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "previousScore"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "userHomeworkId"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "notHomework"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "skillResultId"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "audioContent"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "audioExplain"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "videoUrl"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "requiredSkills"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "hwQsDone"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "homeworkQues"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "doneHwQues"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "skillDemo"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isPrevent"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "uniqueError"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "isSubQuestion"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "mainQuestionContent"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "mainQuestionAudioUrl"
                },
                arguments: [],
                directives: []
              }, {
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "subQuestions"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [{
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "_id"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "grade"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "content"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "questionType"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "answerColumnNo"
                    },
                    arguments: [],
                    directives: []
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "answers"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "_id"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "text"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "order"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "sequenceId"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "leftMatching"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "id"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "textContent"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "rightMatching"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "id"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "textContent"
                        },
                        arguments: [],
                        directives: []
                      }]
                    }
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "textDropdownAnswers"
                    },
                    arguments: [],
                    directives: [],
                    selectionSet: {
                      kind: "SelectionSet",
                      selections: [{
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "order"
                        },
                        arguments: [],
                        directives: []
                      }, {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "list"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{
                            kind: "Field",
                            name: {
                              kind: "Name",
                              value: "text"
                            },
                            arguments: [],
                            directives: []
                          }]
                        }
                      }]
                    }
                  }, {
                    kind: "Field",
                    name: {
                      kind: "Name",
                      value: "audioContent"
                    },
                    arguments: [],
                    directives: []
                  }]
                }
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 2493
      }
    };
    n.loc.source = {
      body: "query PracticeQuestionQuery (\n    $skillId: String,\n    $user: String,\n    $score: Int,\n    $permission: String,\n    $previousScore: Int,\n    $grade: Int,\n    $isTester: Boolean,\n    $userHomeworkId: String,\n    $fromSchool: Boolean,\n    $notHomework: Boolean,\n    $skillResultId: String,\n    $totalQues: Int,\n    $hwQsDone: Int,\n    $homeworkQues: Int,\n    $doneHwQues: Int,\n    $currentWrongId: String,\n    $isManual: Boolean\n    $afterManual: Boolean,\n    $tokenId: String\n  ){\n  getPracticeQuestionBySkillId (\n    skillId: $skillId,\n    user: $user,\n    score: $score,\n    permission: $permission,\n    previousScore: $previousScore,\n    grade: $grade,\n    isTester: $isTester,\n    userHomeworkId: $userHomeworkId,\n    fromSchool: $fromSchool,\n    notHomework: $notHomework,\n    skillResultId: $skillResultId,\n    totalQues: $totalQues,\n    hwQsDone: $hwQsDone,\n    homeworkQues: $homeworkQues,\n    doneHwQues: $doneHwQues,\n    currentWrongId: $currentWrongId,\n    isManual: $isManual\n    afterManual: $afterManual\n    tokenId: $tokenId\n  ) {\n    _id\n    skillName\n    thumbnails\n    grade\n    subject\n    content\n    depthOfKnowledge\n    questionType\n    answerColumnNo\n    answers{\n      _id\n      text\n      order\n      sequenceId\n    }\n    leftMatching{\n        id\n        textContent\n    }\n    rightMatching{\n        id\n        textContent\n    }\n    textDropdownAnswers{\n      order\n      list{\n        text\n      }\n    }\n    totalPart\n    colorPart\n    drawContent{\n      startPoint{\n        i\n        j\n      }\n      endPoint{\n        i\n        j\n      }\n    }\n    isQuotaSkill\n    drawHint{\n      startPoint{\n        i\n        j\n      }\n      endPoint{\n        i\n        j\n      }\n    }\n    isQuotaDay\n    isCompleted\n    isSubscribe\n    isManual\n    topic\n    category\n    previousScore\n    userHomeworkId\n    notHomework\n    skillResultId\n    audioContent\n    audioExplain\n    videoUrl\n    requiredSkills\n    hwQsDone\n    homeworkQues\n    doneHwQues\n    skillDemo\n    isPrevent\n    uniqueError\n    isSubQuestion\n    mainQuestionContent\n    mainQuestionAudioUrl\n    subQuestions {\n      _id\n      grade\n      content\n      questionType\n      answerColumnNo\n      answers {\n        _id\n        text\n        order\n        sequenceId\n      }\n      leftMatching {\n        id\n        textContent\n      }\n      rightMatching {\n        id\n        textContent\n      }\n      textDropdownAnswers {\n        order\n        list {\n          text\n        }\n      }\n      audioContent\n    }\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.PracticeQuestionQuery = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "PracticeQuestionQuery");
  },
  3459:
  /*!************************************************************!*\
    !*** ./src/routes/skill-practice/challenge-zone/style.css ***!
    \************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    var o = n(/*! !../../../../node_modules/css-loader??ref--6-rules-2!../../../../node_modules/postcss-loader/lib??ref--6-rules-3!./style.css */3460);
    var r = n(/*! ../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */31);
    if (typeof o == "string") {
      o = [[e.i, o, ""]];
    }
    e.exports = o.locals || {};
    e.exports._getContent = function () {
      return o;
    };
    e.exports._getCss = function () {
      return o.toString();
    };
    e.exports._insertCss = function (e) {
      return r(o, e);
    };
  },
  3460:
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader??ref--6-rules-2!./node_modules/postcss-loader/lib??ref--6-rules-3!./src/routes/skill-practice/challenge-zone/style.css ***!
    \********************************************************************************************************************************************************/
  /*! no static exports found */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t, n) {
    (t = e.exports = n(/*! ../../../../node_modules/css-loader/lib/css-base.js */30)(false)).push([e.i, ":root{--font-family-base:\"Segoe UI\",\"HelveticaNeue-Light\",sans-serif;--font-family-brand:\"Google Sans Flex\",sans-serif;--font-variation-brand:\"slnt\" 0,\"ROND\" 100;--q-prose-font-size:18px;--q-math-font-size:20px;--q-answer-chip-font-size:18px;--max-content-width:1000px;--screen-xs-min:480px;--screen-sm-min:768px;--screen-md-min:992px;--screen-lg-min:1200px;--white-color:#fff;--sidebar-color:#1ab394;--sidebar-color-active:#10886f;--left-menu-color:#85c056;--left-menu-hover-color:#85c056;--left-menu-color-lv-second:#293846;--left-menu-link-color:#a7b1c2}._334tK{font-family:Google Sans Flex,sans-serif!important;font-family:var(--font-family-brand)!important;font-variation-settings:\"slnt\" 0,\"ROND\" 100;font-variation-settings:var(--font-variation-brand)}._1Mc1K ._26Zd0,._1Mc1K .CR_2y{background:#fff}._2TjS3{border-bottom:1px solid #e1e1e1;margin-bottom:15px;padding-bottom:10px;height:50px}._2TjS3>h3{font-weight:700;font-size:24px;line-height:28px}._3h6RJ{font-size:16px;line-height:28px;color:#798195;padding:20px 0}.RrIwT{color:#2e3a59;font-size:14px}._3SgBI{background-color:#65b446;color:#fff!important}._3SgBI,.hDetK{white-space:inherit;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}.hDetK{background-color:#e4e9f2;color:#8f9bb3!important}._1pYxd{background-color:#fff;color:#2e3a59!important;white-space:inherit;border:1px solid #c5cee0;font-weight:700;margin:10px;border-radius:20px;font-size:16px;min-width:130px;max-width:180px;padding:10px}._1iCcQ{background-color:#65b446;color:#fff!important;border-radius:20px}._1iCcQ,._1O4Kq{-ms-flex:1 1;flex:1 1;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;text-align:center;padding:10px}._1O4Kq{background-color:#fff;color:#000!important}._1O4Kq,._3YyXh{border:1px solid #ccc;border-radius:20px}._3YyXh{background-color:#f44336;text-align:center;-ms-flex:1 1;flex:1 1;color:#fff!important;white-space:inherit;font-size:16px;min-width:130px;max-width:180px;padding:10px}._1u6U4,._1vrzC{background-color:#f3f3f4}._1Mc1K{background-color:#fff;background-color:var(--white-color)}._2EPNB{border-top:0;padding:20px 0}._3OXZH{clear:both;margin-bottom:0;margin-top:0;padding:0}._2g4Ze{background-color:#fff;color:inherit;padding:15px 20px 20px;border-color:#e7eaec;-o-border-image:none;border-image:none;border-style:solid solid none;border-width:1px 0;clear:both}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}._3WtsE{top:0;bottom:0;background-color:rgba(0,0,0,.3);z-index:99999}._3h8cH{background-color:#1e1e1e;z-index:99999}._1_rfN,._3h8cH{position:fixed;top:0;bottom:0;left:0;right:0;padding:50px}._1_rfN{background-color:rgba(0,0,0,.3);z-index:2}._33Q1f{margin-top:12px}._193cc{margin-bottom:40px}.aHvno{margin-bottom:50px}._o6Ge{margin-bottom:60px}.gNzjG{margin-bottom:70px}._3-OC3{background-color:#65b446;padding:10px 25px;color:#fff;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._3-OC3:hover{background-color:#fff;color:#65b446;-webkit-box-shadow:none;box-shadow:none}._3X3EX{background-color:#fff;padding:10px 25px;color:#2e3a59;font-size:16px;font-weight:500;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._2WDVV{margin-bottom:16px}@media (max-width:360px){._3X3EX{background-color:#fff;color:#2e3a59;border-radius:100px;-webkit-box-shadow:0 3px 0 #c5cee0;box-shadow:0 3px 0 #c5cee0;border:1px solid #c5cee0}._3-OC3,._3X3EX{padding:10px 15px;font-size:15px;font-weight:500;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}._3-OC3{background-color:#65b446;color:#fff;border-radius:100px;-webkit-box-shadow:0 3px 0 #4d9830;box-shadow:0 3px 0 #4d9830;border:1px solid #65b446}}._3WtsE{background-color:#000;opacity:.5;padding:50px}.-bFNQ,._3WtsE{position:fixed;left:0;right:0;margin:auto}.-bFNQ{top:20px;bottom:20px;background-color:#fff;padding:10px;z-index:99999;border-radius:24px;height:380px;width:400px}.-bFNQ h4{font-size:40px;line-height:60px;color:#7fad00;position:relative}", ""]);
    t.locals = {
      fontBrand: "_334tK",
      white_bg: "_1Mc1K",
      navbar_fixed_top: "CR_2y",
      navbar_static_top: "_26Zd0",
      headerBox: "_2TjS3",
      labelFilter: "_3h6RJ",
      textLoading: "RrIwT",
      btnGreenNew: "_3SgBI",
      btnGrayNew: "hDetK",
      btnWhiteNew: "_1pYxd",
      btnGreenNewFlex: "_1iCcQ",
      btnWhiteNewFlex: "_1O4Kq",
      btnRedNewFlex: "_3YyXh",
      gray_bg: "_1vrzC",
      "bg-muted": "_1u6U4",
      container: "_2EPNB",
      ibox: "_3OXZH",
      ibox_content: "_2g4Ze",
      backdropStyle: "_3WtsE",
      backdropStyle3: "_3h8cH",
      backdropStyle2: "_1_rfN",
      root: "_33Q1f",
      "u-margin-bottom-4": "_193cc",
      "u-margin-bottom-5": "aHvno",
      "u-margin-bottom-6": "_o6Ge",
      "u-margin-bottom-7": "gNzjG",
      btn_green_new: "_3-OC3",
      btn_white_new: "_3X3EX",
      margin_bottom_16: "_2WDVV",
      backdropStyleInner: "-bFNQ"
    };
  },
  3461:
  /*!***************************************************************!*\
    !*** ./src/routes/skill-practice/graphql/mathSupport.graphql ***!
    \***************************************************************/
  /*! no static exports found */
  /*! exports used: default */
  /*! ModuleConcatenation bailout: Module is not an ECMAScript module */
  function (e, t) {
    var n = {
      kind: "Document",
      definitions: [{
        kind: "OperationDefinition",
        operation: "mutation",
        name: {
          kind: "Name",
          value: "MathSupportMutation"
        },
        variableDefinitions: [{
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "questionId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }, {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: {
              kind: "Name",
              value: "userHomeworkId"
            }
          },
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String"
            }
          }
        }],
        directives: [],
        selectionSet: {
          kind: "SelectionSet",
          selections: [{
            kind: "Field",
            name: {
              kind: "Name",
              value: "mathSupport"
            },
            arguments: [{
              kind: "Argument",
              name: {
                kind: "Name",
                value: "questionId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "questionId"
                }
              }
            }, {
              kind: "Argument",
              name: {
                kind: "Name",
                value: "userHomeworkId"
              },
              value: {
                kind: "Variable",
                name: {
                  kind: "Name",
                  value: "userHomeworkId"
                }
              }
            }],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "Field",
                name: {
                  kind: "Name",
                  value: "supportId"
                },
                arguments: [],
                directives: []
              }]
            }
          }]
        }
      }],
      loc: {
        start: 0,
        end: 189
      }
    };
    n.loc.source = {
      body: "mutation MathSupportMutation(\n  $questionId: String\n  $userHomeworkId: String\n) {\n  mathSupport(\n    questionId: $questionId\n    userHomeworkId: $userHomeworkId\n  ) {\n      supportId\n  }\n}\n",
      name: "GraphQL request",
      locationOffset: {
        line: 1,
        column: 1
      }
    };
    var o = {};
    function r(e, t) {
      for (var n = 0; n < e.definitions.length; n++) {
        var o = e.definitions[n];
        if (o.name && o.name.value == t) {
          return o;
        }
      }
    }
    n.definitions.forEach(function (e) {
      if (e.name) {
        var t = new Set();
        (function e(t, n) {
          if (t.kind === "FragmentSpread") {
            n.add(t.name.value);
          } else if (t.kind === "VariableDefinition") {
            var o = t.type;
            if (o.kind === "NamedType") {
              n.add(o.name.value);
            }
          }
          if (t.selectionSet) {
            t.selectionSet.selections.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.variableDefinitions) {
            t.variableDefinitions.forEach(function (t) {
              e(t, n);
            });
          }
          if (t.definitions) {
            t.definitions.forEach(function (t) {
              e(t, n);
            });
          }
        })(e, t);
        o[e.name.value] = t;
      }
    });
    e.exports = n;
    e.exports.MathSupportMutation = function (e, t) {
      var n = {
        kind: e.kind,
        definitions: [r(e, t)]
      };
      if (e.hasOwnProperty("loc")) {
        n.loc = e.loc;
      }
      var i = o[t] || new Set();
      var a = new Set();
      var s = new Set();
      for (i.forEach(function (e) {
        s.add(e);
      }); s.size > 0;) {
        var l = s;
        s = new Set();
        l.forEach(function (e) {
          if (!a.has(e)) {
            a.add(e);
            (o[e] || new Set()).forEach(function (e) {
              s.add(e);
            });
          }
        });
      }
      a.forEach(function (t) {
        var o = r(e, t);
        if (o) {
          n.definitions.push(o);
        }
      });
      return n;
    }(n, "MathSupportMutation");
  },
  4542:
  /*!********************************************************!*\
    !*** ./src/routes/skill-practice/index.js + 4 modules ***!
    \********************************************************/
  /*! exports provided: default */
  /*! all exports used */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/actions/companion/companion.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Error/ErrorBoundary.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Hoc/withAlert.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Layout/Layout.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Link/Link.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/QuestionAudio/QuestionAudio.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/common/MascotConfirmPopup/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/common/UpdateGrade/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/constants/companion.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/constants/divolte_event.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/constants/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/helpers/learningTracker/learningTracker.storage.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/history.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/resources/fnHelpers/DivolteCollecter.helpers.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/resources/fnHelpers/ga4Tracking.helpers.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice-tester/components/TesterFontSizeControls/TesterFontSizeControls.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/Loading.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/complete-notice/CompleteNotice.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/components/GroupQuestion/GroupQuestion.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/components/MainQuestionContext/MainQuestionContext.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/components/PracticeCorrectOverlay/PracticeCorrectOverlay.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/components/PracticeSolution/PracticeSolution.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/components/SkillPracticeHeader/SkillPracticeHeader.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/helper/groupQuestion.helper.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/helper/practice.helper.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/completeUserFinancePracticeMission.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/getSkillInfo.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/mathSupport.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/practiceResultMutation.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/practiceSessionMutation.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/question.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/graphql/test.graphql (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/components/Question/shared/LongTextToggle.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/SkillPracticePage.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/challenge-zone/style.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./src/routes/skill-practice/complete-notice/completeNotice.css (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/isomorphic-style-loader/lib/withStyles.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash.flowright/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/lodash/random.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-ga4/dist/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-redux/es/index.js */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-scroll/modules/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react-sound/lib/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/react/index.js (<- Module is not an ECMAScript module) */
  /*! ModuleConcatenation bailout: Cannot concat with ./node_modules/uuid/v1.js (<- Module is not an ECMAScript module) */
  function (e, t, n) {
    "use strict";

    n.r(t);
    var o;
    var r = n(0);
    var i = n.n(r);
    var a = n(506);
    var s = n(15);
    var l = n(305);
    var c = n(14);
    var d = n.n(c);
    var u = n(535);
    var p = n.n(u);
    var f = n(1609);
    var m = n.n(f);
    var h = n(1499);
    var b = n.n(h);
    var g = n(9);
    var v = n.n(g);
    var x = n(592);
    var y = n(273);
    var w = n(24);
    var k = n(2152);
    var _ = n.n(k);
    var S = n(2200);
    var N = n.n(S);
    var O = n(3458);
    var j = n.n(O);
    var C = n(2561);
    var T = n.n(C);
    var A = n(2562);
    var P = n.n(A);
    var E = n(2563);
    var I = n.n(E);
    var R = n(2564);
    var L = n(3459);
    var D = n.n(L);
    var z = n.p + "b7d70cfb.gif";
    function M(e) {
      return (M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function F(e, t, n, r) {
      o ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var i = e && e.defaultProps;
      var a = arguments.length - 3;
      if (!t && a !== 0) {
        t = {
          children: undefined
        };
      }
      if (a === 1) {
        t.children = r;
      } else if (a > 1) {
        var s = new Array(a);
        for (var l = 0; l < a; l++) {
          s[l] = arguments[l + 3];
        }
        t.children = s;
      }
      if (t && i) {
        for (var c in i) {
          if (t[c] === undefined) {
            t[c] = i[c];
          }
        }
      } else {
        t ||= i || {};
      }
      return {
        $$typeof: o,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function B(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (M(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (M(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), M(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function V(e, t) {
      return (V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function H(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = q(e);
        if (t) {
          var r = q(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return Q(this, n);
      };
    }
    function Q(e, t) {
      if (t && (M(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function q(e) {
      return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var G;
    var W;
    var U = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          V(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = H(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        (t = r.call(this, e)).state = {
          countDownValue: 3
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "componentDidMount",
        value: function () {
          var e = this;
          var t = setInterval(function () {
            e.setState({
              countDownValue: e.state.countDownValue - 1
            });
            if (e.state.countDownValue === 0) {
              clearInterval(t);
            }
          }, 1000);
        }
      }, {
        key: "render",
        value: function () {
          return F("div", {}, `cz${new Date()}`, F("div", {
            className: D.a.backdropStyle
          }), F("div", {
            className: D.a.backdropStyleInner
          }, undefined, F("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }
          }, undefined, F("p", {
            style: {
              fontSize: 24,
              color: "#2E3A59",
              marginTop: 50,
              fontWeight: "bold"
            }
          }, undefined, "Bạn thật xuất sắc"), F("p", {
            style: {
              fontSize: 18,
              color: "#687187",
              marginTop: 10,
              marginBottom: 30
            }
          }, undefined, "Bạn đã chuẩn bị về đích chưa?"), F("img", {
            src: z,
            style: {
              width: 135
            }
          }))));
        }
      }]) {
        B(t.prototype, n);
      }
      if (o) {
        B(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(r.Component);
    var $ = d()(v()(D.a))(U);
    var X = n(2567);
    var Y = n.n(X);
    var K = n(21);
    var Z = n(1428);
    var J = n(99);
    var ee = n(1421);
    var te = n(1949);
    var ne = n(2205);
    var oe = n(2206);
    var re = n(2568);
    var ie = n(1767);
    var ae = n(1809);
    var se = n(515);
    var le = n(516);
    var ce = n(2569);
    var de = n(1811);
    var ue = n.n(de);
    var pe = n(3461);
    var fe = n.n(pe);
    function me(e) {
      return (me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function he(e, t, n, o) {
      W ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: W,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function be(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, (r = o.key, i = undefined, i = function (e, t) {
          if (me(e) !== "object" || e === null) {
            return e;
          }
          var n = e[Symbol.toPrimitive];
          if (n !== undefined) {
            var o = n.call(e, t || "default");
            if (me(o) !== "object") {
              return o;
            }
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(r, "string"), me(i) === "symbol" ? i : String(i)), o);
      }
      var r;
      var i;
    }
    function ge(e, t) {
      return (ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function ve(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = ye(e);
        if (t) {
          var r = ye(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return xe(this, n);
      };
    }
    function xe(e, t) {
      if (t && (me(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return function (e) {
        if (e === undefined) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return e;
      }(e);
    }
    function ye(e) {
      return (ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var we;
    var ke;
    var _e;
    var Se;
    var Ne;
    var Oe;
    var je = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          ge(e, t);
        }
      })(i, e);
      var t;
      var n;
      var o;
      var r = ve(i);
      function i(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, i);
        (t = r.call(this, e)).state = {
          isShowAlert: false
        };
        return t;
      }
      t = i;
      if (n = [{
        key: "sendSupport",
        value: function () {
          var e = this;
          this.props.mathSupport({
            variables: {
              questionId: this.props.questionId,
              userHomeworkId: this.props.userHomeworkId
            }
          }).then(function (t) {
            e.setState({
              isShowAlert: true
            }, function () {
              setTimeout(function () {
                e.props.onClose();
              }, 1000);
            });
          }).catch(function (e) {});
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          return he("div", {}, undefined, he("div", {
            className: ue.a.backdropStyle
          }), he("div", {
            className: ue.a.backdropStyleInner
          }, undefined, this.state.isShowAlert ? he("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%"
            }
          }, undefined, he("div", {
            style: {
              background: "#3BAB60",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 26,
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }
          }, undefined, "✓"), he("p", {
            style: {
              color: "#2E3A59"
            }
          }, undefined, "Đã nhờ hỗ trợ thành công."), he("p", {
            style: {
              color: "#2E3A59"
            }
          }, undefined, "Thầy/cô sẽ phản hồi bạn trong thời gian sớm nhất")) : he("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "100%"
            }
          }, undefined, G ||= he("img", {
            src: "https://s3.vio.edu.vn/assets/img/update_2023/ic-delete.png"
          }), he("p", {
            style: {
              fontSize: 20,
              color: "#2E3A59",
              fontWeight: 600,
              width: 240,
              textAlign: "center",
              marginTop: 5
            }
          }, undefined, "Bạn có muốn nhờ thầy/cô trợ giúp câu hỏi này"), he("p", {
            style: {
              fontSize: 15,
              color: "#2E3A59",
              width: 240,
              textAlign: "center"
            }
          }, undefined, "Bạn có chắc chắn muốn gửi yêu cầu hỗ trợ cho thầy/cô?"), he("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              marginTop: 15,
              marginBottom: 15
            }
          }, undefined, he("button", {
            className: ue.a.btnStop,
            onClick: function () {
              return e.props.onClose();
            }
          }, undefined, "Bỏ qua"), he("button", {
            className: ue.a.btnContinue,
            onClick: function () {
              return e.sendSupport();
            }
          }, undefined, "Nhờ hỗ trợ")))));
        }
      }]) {
        be(t.prototype, n);
      }
      if (o) {
        be(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return i;
    }(i.a.Component);
    var Ce = d()(Object(l.a)(fe.a, {
      name: "mathSupport"
    }), Object(J.a)(), v()(ue.a))(je);
    var Te = n(2570);
    var Ae = n.n(Te);
    var Pe = n(1946);
    var Ee = n(2153);
    var Ie = n(8);
    var Re = n(2212);
    var Le = n(2213);
    var De = n(86);
    var ze = n.n(De);
    var Me = n(231);
    var Fe = n(94);
    var Be = ["subAnswers"];
    function Ve(e) {
      return (Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
        return typeof e;
      } : function (e) {
        if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
          return "symbol";
        } else {
          return typeof e;
        }
      })(e);
    }
    function He(e, t, n, o) {
      Oe ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: Oe,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    function Qe(e, t) {
      if (e == null) {
        return {};
      }
      var n;
      var o;
      var r = function (e, t) {
        if (e == null) {
          return {};
        }
        var n;
        var o;
        var r = {};
        var i = Object.keys(e);
        for (o = 0; o < i.length; o++) {
          n = i[o];
          if (!(t.indexOf(n) >= 0)) {
            r[n] = e[n];
          }
        }
        return r;
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) {
          n = i[o];
          if (!(t.indexOf(n) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(e, n)) {
              r[n] = e[n];
            }
          }
        }
      }
      return r;
    }
    function qe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || false;
        o.configurable = true;
        if ("value" in o) {
          o.writable = true;
        }
        Object.defineProperty(e, Ke(o.key), o);
      }
    }
    function Ge(e, t) {
      return (Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
    }
    function We(e) {
      var t = function () {
        if (typeof Reflect == "undefined" || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if (typeof Proxy == "function") {
          return true;
        }
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }();
      return function () {
        var n;
        var o = Xe(e);
        if (t) {
          var r = Xe(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else {
          n = o.apply(this, arguments);
        }
        return Ue(this, n);
      };
    }
    function Ue(e, t) {
      if (t && (Ve(t) === "object" || typeof t == "function")) {
        return t;
      }
      if (t !== undefined) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return $e(e);
    }
    function $e(e) {
      if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }
    function Xe(e) {
      return (Xe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function Ye(e, t, n) {
      if ((t = Ke(t)) in e) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        e[t] = n;
      }
      return e;
    }
    function Ke(e) {
      var t = function (e, t) {
        if (Ve(e) !== "object" || e === null) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var o = n.call(e, t || "default");
          if (Ve(o) !== "object") {
            return o;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string");
      if (Ve(t) === "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
    var Ze;
    var Je = [70, 80, 90, 100];
    var et = {
      backgroundColor: "#f55555",
      borderBottom: "4px solid #e81b1b",
      textShadow: "1px 1px 1px black",
      borderRight: "2px solid #e81b1b"
    };
    var tt = function (e) {
      (function (e, t) {
        if (typeof t != "function" && t !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(e, "prototype", {
          writable: false
        });
        if (t) {
          Ge(e, t);
        }
      })(a, e);
      var t;
      var n;
      var o;
      var r = We(a);
      function a(e) {
        var t;
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, a);
        Ye($e(t = r.call(this, e)), "updateStatusMissionCompanion", function (e) {
          if (e === 100) {
            t.props.updateEmotionAction(Ie.o);
            t.props.updateStatusMissionAction(Re.b.PRACTICE_100);
          } else if (e >= 90) {
            t.props.updateStatusMissionAction(Re.b.PRACTICE_90);
          } else if (e >= 80) {
            t.props.updateStatusMissionAction(Re.b.PRACTICE_80);
          } else if (e >= 70) {
            t.props.updateStatusMissionAction(Re.b.PRACTICE_70);
          }
        });
        Ye($e(t), "updateStatusMissionFinance", function (e) {
          if (t.props.id && e >= 3) {
            var n = `mission_finance_${t.props.id}`;
            if (localStorage.getItem(n) === "NEW" || sessionStorage.getItem(n) === "NEW") {
              localStorage.setItem(n, "DONE");
              sessionStorage.setItem(n, "DONE");
              t.props.client.mutate({
                mutation: I.a,
                variables: {
                  skillId: t.props.id
                }
              });
            }
          }
        });
        Ye($e(t), "decreaseQuestionFont", function () {
          t.updateQuestionFontScale(t.state.questionFontScale - ae.b);
        });
        Ye($e(t), "increaseQuestionFont", function () {
          t.updateQuestionFontScale(t.state.questionFontScale + ae.b);
        });
        Ye($e(t), "continuePractice", function () {
          t.setState({
            isShowCompleteNotice: true,
            isShowCompleteHW: true,
            isNeedHelp: false,
            afterManual: true,
            currentPracticeResultId: ""
          }, function () {
            if (t.state.afterManual) {
              t.getNextQuestion();
            }
          });
        });
        Ye($e(t), "skipHelp", function () {
          t.setState({
            isNeedHelp: false,
            lastSubmitted: new Date()
          });
        });
        Ye($e(t), "reTryPractice", function () {
          t.setState({
            isShowCompleteNotice: true,
            isShowCompleteHW: true,
            isNeedHelp: false,
            isExpiredPractice: false,
            currentPracticeResultId: "",
            skillResultId: "",
            lastSubmitted: new Date()
          });
        });
        t.state = Object(ee.e)(e);
        t.closeHelpDialog = t.closeHelpDialog.bind($e(t));
        t.openHelpDialog = t.openHelpDialog.bind($e(t));
        t.answerOrNextQuestion = t.answerOrNextQuestion.bind($e(t));
        t.setPracticeRef = t.setPracticeRef.bind($e(t));
        t.subRefStore = Object(te.b)();
        t.renderGroupQuestion = t.renderGroupQuestion.bind($e(t));
        t.renderSubQuestionWithMain = t.renderSubQuestionWithMain.bind($e(t));
        t.practiceStartedAt = Date.now();
        t.attemptsByQuestionId = {};
        t.trackedMilestoneTiers = {};
        t.doneScreenTracked = false;
        return t;
      }
      t = a;
      if (n = [{
        key: "setPracticeRef",
        value: function (e) {
          this.practice = e;
        }
      }, {
        key: "readCurrentAnswer",
        value: function () {
          var e = this.state.currentQuestion;
          if (Object(te.e)(e)) {
            return Object(te.g)(e, this.subRefStore.get);
          } else {
            return Object(te.h)(this.practice);
          }
        }
      }, {
        key: "goToLink",
        value: function (e) {
          w.a.push(e);
        }
      }, {
        key: "getNextQuestion",
        value: function () {
          var e = this;
          if (!this.state.isLoading) {
            this.setState({
              isLoading: true
            });
            if (localStorage && !localStorage.getItem("edutechId")) {
              localStorage.setItem("edutechId", `edutechId${p()()}`);
            }
            var t = this.props.user ? this.props.user._id : localStorage && localStorage.getItem("edutechId") || "edutechId";
            var n = this.getSkillExpiredDate();
            var o = this.props.user && this.props.user.isTester;
            this.props.client.query({
              query: j.a,
              variables: {
                skillId: this.props.id,
                user: t,
                score: this.state.totalScore,
                permission: n,
                grade: this.props.user ? this.props.user.grade : null,
                previousScore: this.state.previousScore,
                isTester: o,
                userHomeworkId: this.state.userHomeworkId,
                fromSchool: false,
                notHomework: this.state.notHomework,
                skillResultId: this.state.skillResultId,
                totalQues: this.state.totalAnswered,
                currentTime: this.state.currentTime,
                hwQsDone: this.state.hwQsDone,
                homeworkQues: this.state.homeworkQues,
                doneHwQues: this.state.doneHwQues,
                currentWrongId: this.state.currentWrongId,
                isManual: this.state.isManual,
                afterManual: this.state.afterManual,
                tokenId: localStorage && localStorage.getItem("edutechId")
              },
              fetchPolicy: "network-only"
            }).then(function (n) {
              var o = n.data.getPracticeQuestionBySkillId;
              document.title = o && `Toán lớp ${o.grade || ""} - ${o.skillName || ""}`;
              if (o && o.skillName && !e._skillNameTracked) {
                e._skillNameTracked = true;
                Object(Fe.i)("/skill-practice", String(e.props.id), o.skillName);
              }
              e.setState({
                isAnswered: false,
                isClickAnswered: false,
                showSolution: false,
                userNoAnswer: false,
                currentQuestion: o,
                currentUser: t,
                currentResult: true,
                totalScore: e.state.isFresh ? o.previousScore : e.state.totalScore,
                topic: o.topic,
                category: o.category,
                previousScore: o.previousScore,
                isSubscribe: o.isSubscribe,
                isManual: o.isManual,
                userHomeworkId: e.state.userHomeworkId || o.userHomeworkId,
                notHomework: o.notHomework,
                skillResultId: o.skillResultId || e.state.skillResultId,
                fromRequiredSkills: o.requiredSkills,
                currentTime: new Date(),
                hwQsDone: o.hwQsDone,
                homeworkQues: o.homeworkQues,
                doneHwQues: o.doneHwQues,
                isPrevent: o.isPrevent,
                playSound: b.a.status.STOPPED,
                isLoading: false,
                wrongFeedbackTitle: "",
                shownExplain: 1,
                subResults: null
              });
              if (o && o._id) {
                Object(Me.A)(e.props.id, o._id, e.state.totalAnswered + 1);
              }
            }).catch(function (t) {
              e.setState({
                hasError: true,
                errorMessage: t.message.replace("GraphQL error:", ""),
                isLoading: false
              });
            });
          }
        }
      }, {
        key: "getTotalScore",
        value: function (e) {
          if (e > 100) {
            return 100;
          } else {
            return e;
          }
        }
      }, {
        key: "checkChallengeSuccess",
        value: function (e, t) {
          return e > 89 && !this.state.isEnteredChallenge && t;
        }
      }, {
        key: "getUserId",
        value: function () {
          if (this.props.user) {
            return this.props.user._id;
          } else {
            return localStorage && localStorage.getItem("edutechId") || "edutechId";
          }
        }
      }, {
        key: "setLocalStorage",
        value: function () {
          if (localStorage && !localStorage.getItem("edutechId")) {
            localStorage.setItem("edutechId", `edutechId${p()()}`);
          }
        }
      }, {
        key: "answerQuestion",
        value: function (e) {
          var t = this;
          this.setState({
            isCheckingAnswer: true
          });
          this.setLocalStorage();
          var n = this.getUserId();
          var o = this.state.currentQuestion;
          var r = Object(te.e)(o);
          var i = r ? Object(te.c)(o, e, ee.f) : Object(ee.f)(e, o);
          var a = e.subAnswers;
          var s = Qe(e, Be);
          this.props.client.query({
            query: Y.a,
            variables: {
              userAnswered: s,
              subAnswers: a,
              skillId: this.props.id,
              user: n,
              permission: this.state.isSubscribe
            },
            fetchPolicy: "network-only"
          }).then(function (n) {
            var a = n.data.getQuestionResultQuery;
            var s = a.result;
            var l = a.subResults;
            var c = a.explain;
            var d = r ? Object(te.a)(o, l, 1, c) : c;
            var u = t.getAnswerSteps(r && l && l.length ? l : [{
              id: e.id,
              result: s
            }]);
            var p = u[u.length - 1];
            var f = p.score;
            if (u.some(function (e) {
              return !e.result && e.wrongCount === 3;
            })) {
              var h = `skill-practice/${t.props.id}`;
              t.props.updateEmotionAction(-Ie.o, h);
            }
            t.updateStatusMissionCompanion(f);
            t.trackAnswerSubmitted(s, f);
            var g = u.filter(function (e) {
              return e.result;
            }).length;
            var v = t.state.trueAnswered + g;
            t.updateStatusMissionFinance(v);
            var y = !s && t.state.listWrongMsg && t.state.listWrongMsg.length ? t.state.listWrongMsg[m()(0, t.state.listWrongMsg.length - 1)] : "";
            t.setState({
              totalScore: t.getTotalScore(f),
              showSolution: !s,
              explanation: d,
              subResults: r ? Object(te.j)(l) : null,
              wrongCount: p.wrongCount,
              trueAnswered: v,
              totalAnswered: t.state.totalAnswered + u.length,
              previousTrue: s,
              currentResult: s,
              previousScore: f,
              isEnteredChallenge: f > 89,
              lastSubmitted: new Date(),
              isShowAlert: false,
              isAnswered: true,
              challengeSuccess: t.checkChallengeSuccess(f, s),
              currentAnswer: i,
              isNew: t.state.totalAnswered < 1,
              isFresh: false,
              homeworkQues: t.state.homeworkQues + 1,
              homeworkScore: f,
              doneHwQues: t.state.doneHwQues,
              doneHwScore: t.state.doneHwScore,
              currentWrongId: t.getCurrentWrongId(s),
              playSound: b.a.status.PLAYING,
              audioLink: t.getAudioLink(s),
              wrongFeedbackTitle: y,
              isCheckingAnswer: false
            }, function () {
              if (!s && typeof document != "undefined" && document.activeElement) {
                var e = document.activeElement;
                if (e && typeof e.blur == "function") {
                  e.blur();
                }
              }
              var n = setTimeout(function () {
                t.setState({
                  challengeSuccess: false
                });
                clearTimeout(n);
              }, 3200);
            });
            if (t.saveDBCond()) {
              if (r) {
                t.saveGroupAnswers(e, u, s, f);
              } else {
                if (t.nextCond(f, s)) {
                  t.actionAfterTrue(f, s);
                }
                t.saveAndUpdateSession(e, s, f);
              }
            } else if (s) {
              t.actionAfterTrue(f, s);
            }
            if (!s) {
              x.animateScroll.scrollToTop({
                duration: 0,
                smooth: true
              });
            }
          }).catch(function () {
            t.setState({
              isCheckingAnswer: false
            });
          });
        }
      }, {
        key: "getAnswerSteps",
        value: function (e) {
          var t = this.state.totalScore;
          var n = this.state.wrongCount;
          return e.map(function (e) {
            var o = e.id;
            var r = e.result;
            return {
              id: o,
              result: !!r,
              score: t = Object(ee.a)(!!r, t) || 0,
              wrongCount: n = r ? 0 : n + 1
            };
          });
        }
      }, {
        key: "saveGroupAnswers",
        value: function (e, t, n, o) {
          var r = this;
          var i = new Map(e.subAnswers.map(function (e) {
            return [e.id, e];
          }));
          Object(te.i)(t.filter(function (e) {
            return i.has(e.id);
          }), function (e) {
            return r.saveAndUpdateSession(i.get(e.id), e.result, e.score, {
              wrongCount: e.wrongCount,
              advance: false
            });
          }).then(function () {
            if (r.shouldAdvanceAfterCorrect(o, n)) {
              r.actionAfterTrue(o, n);
            }
          });
        }
      }, {
        key: "trackAnswerSubmitted",
        value: function (e, t) {
          var n = this.state.currentQuestion && this.state.currentQuestion._id;
          if (n) {
            this.attemptsByQuestionId[n] = (this.attemptsByQuestionId[n] || 0) + 1;
            Object(Me.z)({
              topicId: this.props.id,
              questionId: n,
              isCorrect: !!e,
              attemptNumber: this.attemptsByQuestionId[n]
            });
          }
          var o = t >= 100 ? 100 : t >= 70 ? 70 : 0;
          if (o && !this.trackedMilestoneTiers[o]) {
            this.trackedMilestoneTiers[o] = true;
            Object(Me.H)(this.props.id, t);
          }
          if (t >= 100 && !this.doneScreenTracked) {
            this.doneScreenTracked = true;
            Object(Me.G)({
              topicId: this.props.id,
              totalAttempts: this.state.totalAnswered + 1,
              timeToComplete: Math.round((Date.now() - this.practiceStartedAt) / 1000),
              rewardsEarned: Je.filter(function (e) {
                return t >= e;
              }).length
            });
          }
        }
      }, {
        key: "getCurrentWrongId",
        value: function (e) {
          if (e) {
            return "";
          } else {
            return this.state.currentQuestion._id;
          }
        }
      }, {
        key: "getAudioLink",
        value: function (e) {
          var t = this.props.config && this.props.config.assetsDomain;
          return `${t}${e ? "/game/audio/right_answer.mp3" : "/game/audio/wrong_answer.mp3"}`;
        }
      }, {
        key: "shouldAdvanceAfterCorrect",
        value: function (e, t) {
          var n = this.state.isEnteredChallenge ? e > 89 : e < 90;
          return !!t && n;
        }
      }, {
        key: "nextCond",
        value: function (e, t) {
          return this.shouldAdvanceAfterCorrect(e, t) && this.state.currentSessionId && this.state.currentPracticeResultId;
        }
      }, {
        key: "saveDBCond",
        value: function () {
          var e = this.props.user && this.props.user.userType !== "PARENT" && this.props.user.userType !== "TEACHER" && this.props.user.userType !== "PRINCIPAL";
          return this.state.isSubscribe && e && !this.props.user.isTester;
        }
      }, {
        key: "checkBeforeAnswer",
        value: function (e, t) {
          var n = this;
          if (!this.state.confirmPopup) {
            this.setState({
              isShowAlert: false
            }, function () {
              Object(se.a)(le.t, n.props.user, {
                questionId: n.state.currentQuestion._id
              });
              var t = n.state.currentQuestion;
              var o = n.readCurrentAnswer();
              if (!o) {
                n.props.showAlertWarning("Hệ thống chưa ghi nhận đầy đủ câu trả lời. Hãy bấm trả lời lại");
                return false;
              }
              if ((Object(te.e)(t) ? Object(te.d)(t, o, ee.b) : Object(ee.b)(e, o)) || n.state.isShowAlert) {
                if (!n.state.isShowAlert && !n.state.isClickAnswered) {
                  n.setState({
                    isClickAnswered: true
                  }, function () {
                    n.answerQuestion(o);
                  });
                }
              } else {
                n.setState({
                  isShowAlert: true,
                  userNoAnswer: true,
                  confirmPopup: {
                    title: "Xác nhận nộp bài",
                    message: "Bạn chưa chọn hoặc nhập câu trả lời. Bạn có chắc muốn tiếp tục nộp bài hay không?",
                    primaryLabel: "Tiếp tục nộp bài",
                    secondaryLabel: "Quay lại trả lời",
                    onPrimary: function () {
                      n.answerQuestion(n.readCurrentAnswer() || o);
                    },
                    onSecondary: function () {
                      n.setState({
                        isAnswered: false,
                        isShowAlert: false
                      });
                    }
                  }
                }, function () {
                  if (typeof document != "undefined" && document.activeElement) {
                    try {
                      document.activeElement.blur();
                    } catch (e) {}
                  }
                });
              }
            });
          }
        }
      }, {
        key: "handleEnterButton",
        value: function () {
          var e = this.readCurrentAnswer();
          if (e) {
            if (!this.state.isShowAlert) {
              if (this.state.isAnswered) {
                if (this.state.showSolution) {
                  this.getNextQuestion();
                }
              } else {
                this.answerQuestion(e);
              }
            }
          }
        }
      }, {
        key: "saveAndUpdateSession",
        value: function (e, t, n, o) {
          var r = this;
          return this.props.CreatePracticeSession({
            variables: {
              updateId: this.state.currentSessionId,
              sessionName: `${this.props.user._id}${Date.now()}`
            }
          }).then(function (i) {
            if (r.state.currentSessionId === "") {
              return new Promise(function (e) {
                r.setState({
                  currentSessionId: i.data.CreatePracticeSession._id,
                  sessionStart: i.data.CreatePracticeSession.startTime
                }, e);
              }).then(function () {
                return r.saveAndUpdatePracticeResult(e, t, n, o);
              });
            } else if (r.state.currentSessionId) {
              return r.saveAndUpdatePracticeResult(e, t, n, o);
            } else {
              return undefined;
            }
          }).catch(function (e) {});
        }
      }, {
        key: "saveAndUpdatePracticeResult",
        value: function (e, t, n) {
          var o = this;
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var i = r.wrongCount;
          var a = i === undefined ? this.state.wrongCount : i;
          var s = r.advance;
          var l = s === undefined || s;
          var c = {
            result: t,
            userAnswered: e.listAnswers
          };
          var d = this.state.currentTime ? Math.ceil((new Date() - this.state.currentTime) / 1000) : 0;
          return this.props.CreatePracticeResult({
            variables: {
              updateId: this.state.currentPracticeResultId,
              totalScore: n,
              skill: this.props.id,
              topic: this.state.topic,
              category: this.state.category,
              subject: this.state.currentQuestion.subject,
              skillName: this.state.currentQuestion.skillName,
              session: this.state.currentSessionId,
              sessionStart: this.state.sessionStart,
              wrongCount: a,
              questionId: e.id,
              answer: c,
              userHomeworkId: this.state.userHomeworkId,
              skillResultId: this.state.skillResultId,
              requiredSkills: this.state.requiredSkills,
              isNew: !this.state.currentPracticeResultId,
              currentTime: d,
              fromMobile: false
            }
          }).then(function (e) {
            if (o.state.currentPracticeResultId === "") {
              return new Promise(function (r) {
                o.setState({
                  currentPracticeResultId: e.data.CreatePracticeResult._id,
                  skillResultId: e.data.CreatePracticeResult.firstSkillResult
                }, function () {
                  if (l && o.shouldAdvanceAfterCorrect(n, t)) {
                    o.actionAfterTrue(n, t);
                  }
                  r();
                });
              });
            }
          }).catch(function (e) {});
        }
      }, {
        key: "actionAfterTrue",
        value: function (e, t) {
          var n = this;
          if (e < 100) {
            this.setState({
              questionResult: t
            }, function () {
              var e = setTimeout(function () {
                n.setState({
                  questionResult: false
                });
                n.getNextQuestion();
                clearTimeout(e);
              }, 1800);
            });
          }
        }
      }, {
        key: "checkAction",
        value: function () {
          var e = this;
          var t = new Date();
          var n = parseInt((t - this.state.lastSubmitted) / 1000);
          Ze = setTimeout(function () {
            return e.checkAction();
          }, 1000);
          if (!this.state.isNeedHelp && n === 300) {
            this.setState({
              isNeedHelp: true
            });
          }
          if (!this.state.isExpiredPractice && n > 1199) {
            this.setState({
              isExpiredPractice: true
            });
            var o = {
              totalScore: 0,
              sessionId: "",
              trueAnswered: 0,
              currentSkill: this.props.id,
              totalAnswered: 0,
              practiceResultId: "",
              skillResultId: "",
              sessionStart: ""
            };
            if (typeof sessionStorage != "undefined") {
              sessionStorage.setItem(this.state.currentUser, JSON.stringify(o));
            }
          }
          if (!this._isMounted) {
            clearTimeout(Ze);
          }
        }
      }, {
        key: "getSkillExpiredDate",
        value: function () {
          if (!this.props.user || this.props.user && !this.props.user.permissions) {
            return null;
          } else {
            return this.props.user && this.props.user.permissions;
          }
        }
      }, {
        key: "showFirstWrongMsg",
        value: function (e, t) {
          var n = !e && this.state.showSolution && t._id;
          var o = this.state.userNoAnswer ? "Bạn không biết câu trả lời ? Hãy xem giải thích để có thể trả lời câu hỏi này nhé." : this.state.wrongFeedbackTitle || "Bạn trả lời sai rồi, có thể bạn đã chưa đọc kĩ đề bài...";
          return n && He("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }
          }, undefined, He("div", {
            style: {
              color: "#383F56",
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "26px"
            }
          }, undefined, o), !this.state.userNoAnswer && He("div", {
            style: {
              color: "#4C536B",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "24px"
            }
          }, undefined, "Hãy cùng xem giải thích, sau đó thử lại nhé"));
        }
      }, {
        key: "showSecondWrongMsg",
        value: function (e, t) {
          return this.state.showSolution && !e && this.state.wrongCount > 2 && t._id && He("div", {
            style: {
              color: "#E53E3E",
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "4px"
            }
          }, undefined, "Bạn đã trả lời sai ", this.state.wrongCount, " câu liên tiếp...");
        }
      }, {
        key: "showThirdWrongMsg",
        value: function (e, t) {
          var n = this.state.wrongCount > 2 && this.state.totalScore < 50 && t._id;
          return this.state.showSolution && !e && n && He("div", {
            style: {
              color: "#E53E3E",
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "4px"
            }
          }, undefined, "Chủ điểm này của bạn chưa tốt, cần cố gắng thêm.", this.state.wrongCount > 5 && He(K.a, {
            to: `/skill-details/${this.props.id}`
          }, undefined, " ", "Bạn muốn học lại lý thuyết ? ", we ||= He("i", {
            className: "fa fa-dop"
          })));
        }
      }, {
        key: "showWrongMessage",
        value: function () {
          var e = this.state.currentQuestion;
          var t = this.state.isShowAlert;
          return He("div", {
            className: ""
          }, undefined, this.showFirstWrongMsg(t, e), this.showSecondWrongMsg(t, e), this.showThirdWrongMsg(t, e));
        }
      }, {
        key: "showScore",
        value: function () {
          return He("span", {
            className: "box--summary__result font-montserrat--bold"
          }, undefined, He("span", {
            className: this.state.showSolution ? "" : "grow-score"
          }, undefined, this.state.totalScore, " / 100"));
        }
      }, {
        key: "answerOrNextQuestion",
        value: function (e) {
          if (e.keyCode === 13 && this.state.currentQuestion && !this.state.isShowAlert && this.state.currentQuestion._id) {
            if (this.state.isAnswered || this.state.isShowAlert) {
              if (!this.state.isShowAlert) {
                this.getNextQuestion();
              }
            } else {
              this.checkBeforeAnswer(this.state.currentQuestion.questionType, e);
            }
          }
        }
      }, {
        key: "componentDidMount",
        value: function () {
          var e = this;
          ze.a.event({
            category: "skill",
            action: "skill_practice",
            label: "Skill practice",
            value: 1
          });
          Object(ee.g)(this.props.user, this);
          this.getNextQuestion();
          this._isMounted = true;
          this.checkAction();
          this.setState({
            questionFontScale: Object(ae.f)()
          });
          if (typeof window != "undefined") {
            window.addEventListener("keydown", this.answerOrNextQuestion, true);
          }
          this.props.client.query({
            query: Ae.a,
            variables: {
              skillId: this.props.id
            },
            fetchPolicy: "network-only"
          }).then(function (t) {
            if (t && t.data.getSkillInfo && t.data.getSkillInfo.isCompleted) {
              e.props.showAlertCustomPopup({
                show: true,
                showRobot: true,
                showIconClose: true,
                title: "Kỹ năng này bạn đã hoàn thành",
                message: "Bạn sẽ không được cộng kim cương cho lần thực hành này. Tuy nhiên bạn vẫn có thể ôn tập để lấy kiến thức",
                btnPrimary: "Tiếp tục thực hành"
              });
            }
          });
        }
      }, {
        key: "updateQuestionFontScale",
        value: function (e) {
          var t = Object(ae.d)(e);
          this.setState({
            questionFontScale: t
          });
          if (typeof window != "undefined") {
            try {
              window.localStorage.setItem(ae.c, String(t));
            } catch (e) {}
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          if (typeof window != "undefined") {
            window.removeEventListener("keydown", this.answerOrNextQuestion, true);
          }
          this._isMounted = false;
          clearTimeout(undefined);
        }
      }, {
        key: "closeHelpDialog",
        value: function () {
          this.setState({
            showHuongdanDialog: false
          });
        }
      }, {
        key: "openHelpDialog",
        value: function () {
          this.setState({
            showHuongdanDialog: true
          });
        }
      }, {
        key: "openFeedbackQuestion",
        value: function () {
          Object(se.a)(le.u, this.props.user, {
            questionId: this.state.currentQuestion && this.state.currentQuestion._id
          });
          Object(Me.B)(this.state.currentQuestion && this.state.currentQuestion._id);
          this.setState({
            showFeedback: true
          });
        }
      }, {
        key: "closeFeedbackQuestion",
        value: function () {
          this.setState({
            showFeedback: false
          });
        }
      }, {
        key: "renderMoreExplain",
        value: function (e) {
          var t = this;
          return e.filter(function (e, t) {
            return t > 0;
          }).map(function (e, n) {
            return He("div", {
              dangerouslySetInnerHTML: {
                __html: e && e.text && e.text.replace(/(\s){2,}/g, "").replace(/<p>/g, "").replace(/&nbsp;/g, " ").replace(/<\/p>/g, "<br />").replace(/<img/g, "<img class=\"img-responsive\"")
              },
              style: {
                marginBottom: "10px",
                fontSize: "16px",
                display: t.state.shownExplain > n + 1 ? "block" : "none"
              }
            }, e);
          });
        }
      }, {
        key: "clickAnswerButton",
        value: function (e, t) {
          t.preventDefault();
          if (this.state.showSolution) {
            this.getNextQuestion();
          } else {
            this.checkBeforeAnswer(e, t);
          }
        }
      }, {
        key: "renderQuestionAudio",
        value: function () {
          var e = this.state.totalAnswered % 5 == 0 && !this.props.user && this.state.totalAnswered > 0;
          return this.state.currentQuestion && this.state.currentQuestion.audioContent && !e && !this.state.showSolution && He(Z.a, {
            audioLink: this.state.currentQuestion ? this.state.currentQuestion.audioContent : "",
            customStyle: {
              display: "flex",
              color: "#0080e2"
            }
          }, this.state.currentQuestion && this.state.currentQuestion._id ? this.state.currentQuestion._id : "");
        }
      }, {
        key: "renderQuestionToolbar",
        value: function () {
          var e = this.state.trueAnswered || 0;
          var t = e + ((this.state.totalAnswered || 0) - e);
          var n = this.state.showSolution || this.state.isAnswered ? Math.max(1, t) : t + 1;
          return He("div", {
            className: _.a.questionToolbar
          }, undefined, He("div", {
            className: _.a.toolbarLeft
          }, undefined, He("div", {
            className: _.a.questionToolbarTitle
          }, undefined, "Câu hỏi số ", n), this.renderQuestionAudio()), He(ae.e, {
            scale: this.state.questionFontScale || ae.a,
            onDecrease: this.decreaseQuestionFont,
            onIncrease: this.increaseQuestionFont
          }));
        }
      }, {
        key: "getAnswerBtnCond",
        value: function (e, t) {
          var n = this.state.showSolution || e && !e.skillDemo && !e.isSubscribe;
          var o = this.state.totalAnswered % 5 == 0 && this.state.totalAnswered > 0 && e && !e.isSubscribe;
          return t || n || o && !this.props.user;
        }
      }, {
        key: "renderAnswerBtn",
        value: function (e, t) {
          var n = this;
          var o = this.getAnswerBtnCond(e, t);
          var r = this.state;
          var i = r.isCheckingAnswer;
          var a = r.showSolution;
          var s = i && !a;
          var l = this.props.config && this.props.config.assetsDomain || "https://s3.vio.edu.vn/assets";
          var c = `${l}/img/2025/ai/viogpt-loading.gif`;
          return !o && He("div", {
            className: "",
            style: {
              position: "relative"
            }
          }, undefined, He("div", {
            className: _.a.practiceAnswerBtnWrap
          }, undefined, !this.state.hasError && He("button", {
            className: ["btn btn--thirds", _.a.btnAnswer, s ? _.a.btnAnswerChecking : ""].join(" "),
            onClick: function (t) {
              return n.clickAnswerButton(e.questionType, t);
            },
            style: a ? et : {},
            disabled: this.state.isAnswered || a || s ? "disabled" : ""
          }, undefined, s ? He("span", {
            className: _.a.btnAnswerCheckingContent
          }, undefined, He("img", {
            src: c,
            alt: "loading",
            className: _.a.btnAnswerCheckingLoadingImg
          }), He("span", {
            className: _.a.btnAnswerCheckingText
          }, undefined, "Đang kiểm tra câu trả lời")) : He("span", {}, undefined, ke ||= He("i", {
            className: "fa fa-check",
            "aria-hidden": "true"
          }), " ", a ? "Đã hiểu" : "Trả lời"))));
        }
      }, {
        key: "renderTroubleHelp",
        value: function () {
          var e = this;
          return (this.state.wrongCount > 4 || this.state.isNeedHelp) && this.state.totalAnswered % 5 != 0 && this.state.totalAnswered > 0 && He("div", {
            style: {
              borderTop: "1px solid #EDF1F7",
              padding: "13px 20px",
              marginRight: -15,
              marginLeft: -15,
              marginTop: 20
            }
          }, undefined, He("span", {
            style: {
              color: "#2E3A59"
            }
          }, undefined, "Bạn đang gặp khó? "), He("span", {
            style: {
              color: "#55C57A",
              fontWeight: "bold",
              cursor: "pointer"
            },
            onClick: function () {
              return w.a.push(`/skill-details/${e.props.id}`);
            }
          }, undefined, "Xem lại video lý thuyết"));
        }
      }, {
        key: "homeworkCond",
        value: function () {
          return this.state.doneHwQues <= this.state.homeworkQues && this.state.doneHwQues > 0 && this.state.userHomeworkId && !this.state.isShowCompleteHW;
        }
      }, {
        key: "showCompleteCond",
        value: function () {
          var e = this.state.totalScore > 69 && this.props.user && this.props.user.userOrigin !== "SCHOOL" && !this.state.isShowCompleteNotice;
          var t = this.homeworkCond();
          var n = this.state.isNeedHelp || this.state.currentQuestion && !this.state.currentQuestion._id && this.state.currentQuestion.isManual;
          return e || t || n;
        }
      }, {
        key: "renderCompletePopup",
        value: function () {
          var e = this;
          return (this.showCompleteCond() || this.state.isExpiredPractice) && He(ce.a, {
            skillId: this.props.id,
            assetsDomain: this.props.config && this.props.config.assetsDomain || "https://s3.vio.edu.vn/assets",
            skillThumbnail: (e.state.currentQuestion && Array.isArray(e.state.currentQuestion.thumbnails) ? e.state.currentQuestion.thumbnails : []).find(function (e) {
              return e && String(e).trim();
            }) || "",
            isDoneHomework: this.state.doneHwQues <= this.state.homeworkQues && this.state.doneHwQues > 0 && this.state.userHomeworkId && !this.state.isManual,
            userHomeworkId: this.state.userHomeworkId,
            isManual: this.state.isManual,
            reTry: this.reTryPractice,
            isContinue: this.state.isNeedHelp ? this.skipHelp : this.continuePractice,
            isExpired: this.state.isExpiredPractice,
            isNeedHelp: this.state.isNeedHelp
          }, "cn_");
        }
      }, {
        key: "renderConfirmPopup",
        value: function () {
          var e = this;
          var t = this.state.confirmPopup;
          if (!t) {
            return null;
          }
          var n = this.props.config && this.props.config.assetsDomain || "https://s3.vio.edu.vn/assets";
          var o = function (t) {
            return function () {
              e.setState({
                confirmPopup: null
              }, function () {
                if (typeof t == "function") {
                  t();
                }
              });
            };
          };
          return He(y.a, {
            open: true,
            assetsDomain: n,
            title: t.title,
            message: t.message,
            primaryLabel: t.primaryLabel,
            secondaryLabel: t.secondaryLabel,
            onPrimary: o(t.onPrimary),
            onSecondary: o(t.onSecondary)
          });
        }
      }, {
        key: "renderCorrectOverlay",
        value: function () {
          return He(ie.a, {
            visible: !!this.state.questionResult
          });
        }
      }, {
        key: "renderMainContent",
        value: function () {
          var e = this;
          var t = this.state.questionFontScale || ae.a;
          return He("div", {
            className: "box box--practice "
          }, undefined, He("div", {
            className: `box--practice__content no-box-mobile ${_.a.practiceContent}`
          }, undefined, this.renderQuestionToolbar(), this.state.challengeSuccess && He("div", {
            className: _.a.challenge_success
          }, undefined, He($, {}, `countdown${new Date()}`)), this.state.currentQuestion && this.state.currentQuestion.userHomeworkId && He("div", {
            style: {
              color: "#798195",
              display: "flex",
              fontWeight: 500,
              justifyContent: "flex-end",
              padding: 10,
              fontSize: 14,
              cursor: "pointer"
            },
            onClick: function () {
              return e.setState({
                showTeacherHelp: true
              });
            }
          }, undefined, "Bạn gặp khó khăn, hỏi thầy cô"), He("div", {
            className: `${_.a.questionScaled} no-box-mobile ${this.state.currentQuestion && (this.state.isAnswered || this.state.showSolution || this.state.confirmPopup) ? "userAnswered" : ""}`,
            style: {
              "--q-scale": t,
              zoom: t
            }
          }, undefined, this.state.currentQuestion && Object(ee.d)(this.state.currentQuestion, this, _.a, this.getQuestionRenderer(this.state.currentQuestion)))));
        }
      }, {
        key: "getQuestionRenderer",
        value: function (e) {
          if (Object(te.e)(e)) {
            return this.renderGroupQuestion;
          } else if (Object(te.f)(e)) {
            return this.renderSubQuestionWithMain;
          } else {
            return undefined;
          }
        }
      }, {
        key: "renderSubQuestionWithMain",
        value: function (e) {
          return He(i.a.Fragment, {}, undefined, He(re.a, {
            questionId: e._id,
            content: e.mainQuestionContent,
            audioUrl: e.mainQuestionAudioUrl,
            contentClassName: "panel-body"
          }), Object(ee.h)(e, this));
        }
      }, {
        key: "renderGroupQuestion",
        value: function (e) {
          var t = this;
          return He(oe.a, {
            question: e,
            subResults: this.state.subResults,
            renderSubQuestion: function (e) {
              return Object(ee.h)(e, {
                props: t.props,
                state: t.state,
                setPracticeRef: t.subRefStore.getSetter(e._id),
                handleEnterButton: function () {
                  return t.handleEnterButton();
                }
              });
            }
          });
        }
      }, {
        key: "renderTeacherHelp",
        value: function (e) {
          var t = this;
          return this.state.showTeacherHelp && He(Ce, {
            onClose: function () {
              return t.setState({
                showTeacherHelp: false
              });
            },
            questionId: e && e._id,
            userHomeworkId: e && e.userHomeworkId
          });
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          var t = this.state.currentQuestion;
          var n = this.props.config.assetsDomain;
          var o = t && !t._id || this.state.totalScore === 100;
          var r = this.state.errorMessage;
          `${n}/icon/diamondPass.png`;
          `${n}/icon/diamondComing.png`;
          return He("div", {
            className: ""
          }, undefined, He("div", {}, undefined, He("div", {}, undefined, He("div", {}, undefined, He(R.a, {
            currentQuestion: t,
            totalScore: this.state.totalScore,
            trueAnswered: this.state.trueAnswered,
            totalAnswered: this.state.totalAnswered,
            isExpiredPractice: this.state.isExpiredPractice,
            isDone: o
          }), He("div", {
            className: "container",
            style: {
              margin: "auto"
            }
          }, undefined, He("div", {
            className: "row"
          }, undefined, this.state.showSolution && He("div", {
            className: _.a && _.a.robotTooltipWrapper ? _.a.robotTooltipWrapper : "col-md-12 margin-top-10"
          }, undefined, He("img", {
            src: `${n}/img/robotWrong.png`,
            className: _.a && _.a.robotImage ? _.a.robotImage : "",
            alt: "Robot"
          }), He("div", {
            className: _.a && _.a.robotTooltip ? _.a.robotTooltip : "white-bg"
          }, undefined, this.showWrongMessage())), He(b.a, {
            playStatus: this.state.playSound,
            url: this.state.audioLink,
            onFinishedPlaying: function () {
              e.setState({
                playSound: b.a.status.STOPPED
              });
            }
          }, this.state.currentQuestion && this.state.currentQuestion._id), this.state.hasError && (r.includes("ErrorCode: 301") ? _e ||= He("div", {
            className: "margin-top-20"
          }, undefined, He(Pe.a, {})) : He("h4", {
            className: "col-md-12 margin-top-10 text-danger text-center clearfix"
          }, undefined, r)), He("div", {
            className: `col-md-12 white-bg clearfix ${_.a.questionCard}`,
            style: {
              borderRadius: 20,
              marginTop: 20
            }
          }, undefined, this.renderCorrectOverlay(), He(ne.a, {
            showSolution: this.state.showSolution,
            isLoadingNextQuestion: this.state.isLoading,
            currentAnswer: this.state.currentAnswer,
            explanation: this.state.explanation,
            shownExplain: this.state.shownExplain,
            currentQuestion: t,
            getNextQuestion: function () {
              return e.getNextQuestion();
            },
            onShowNextExplain: function () {
              return e.setState({
                shownExplain: e.state.shownExplain + 1
              });
            },
            fontScale: this.state.questionFontScale || ae.a,
            onDecreaseFont: this.decreaseQuestionFont,
            onIncreaseFont: this.increaseQuestionFont
          }), He("div", {
            className: this.state.showSolution && _.a && _.a.userAnswerCard ? _.a.userAnswerCard : ""
          }, undefined, this.state.showSolution && He("div", {
            className: _.a && _.a.userAnswerHeader ? _.a.userAnswerHeader : "panel-heading"
          }, undefined, He("img", {
            src: `${n}/2026/img/UI2026/ic-blue-light.png`,
            width: 20,
            height: 20,
            alt: "Đáp án của bạn"
          }), "\xA0", Se ||= He("span", {}, undefined, "Đáp án của bạn")), He("div", {
            className: this.state.showSolution && _.a && _.a.userAnswerBody ? _.a.userAnswerBody : ""
          }, undefined, this.renderMainContent())), He("div", {
            className: _.a.practiceAnswerActions
          }, undefined, this.renderAnswerBtn(t, o)), this.renderTeacherHelp(t), this.renderCompletePopup(), this.renderConfirmPopup(), this.renderTroubleHelp())))), this.state.isLoading && (Ne ||= He(Le.a, {})))));
        }
      }]) {
        qe(t.prototype, n);
      }
      if (o) {
        qe(t, o);
      }
      Object.defineProperty(t, "prototype", {
        writable: false
      });
      return a;
    }(i.a.Component);
    var nt;
    var ot = d()(l.b, Object(l.a)(T.a, {
      name: "CreatePracticeSession"
    }), Object(l.a)(P.a, {
      name: "CreatePracticeResult"
    }), Object(s.b)(function (e) {
      var t = e.runtime.config;
      return {
        user: e.user,
        config: t
      };
    }, {
      updateEmotionAction: Ee.b,
      updateStatusMissionAction: Ee.c
    }), Object(J.a)(), v()(_.a, N.a))(tt);
    var rt = n(1543);
    function it(e, t, n, o) {
      nt ||= typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
      var r = e && e.defaultProps;
      var i = arguments.length - 3;
      if (!t && i !== 0) {
        t = {
          children: undefined
        };
      }
      if (i === 1) {
        t.children = o;
      } else if (i > 1) {
        var a = new Array(i);
        for (var s = 0; s < i; s++) {
          a[s] = arguments[s + 3];
        }
        t.children = a;
      }
      if (t && r) {
        for (var l in r) {
          if (t[l] === undefined) {
            t[l] = r[l];
          }
        }
      } else {
        t ||= r || {};
      }
      return {
        $$typeof: nt,
        type: e,
        key: n === undefined ? null : "" + n,
        ref: null,
        props: t,
        _owner: null
      };
    }
    t.default = function (e) {
      var t = e.params.skillId;
      return {
        title: "Làm toán trực tuyến",
        chunks: ["skill-practice"],
        component: it(a.a, {
          canChat: false,
          showMenu: false,
          showMenuTwo: false,
          showMenuBottom: false,
          showExpiredPackage: false
        }, undefined, it(rt.a, {}, undefined, it(ot, {
          id: t,
          title: "Skill Practice"
        })))
      };
    };
  }
}]);
// zkIa@kr~R~%Yf[lnnAyQ^Wy98%0I^W8KgO8A2pirWvo+-l$K~3
