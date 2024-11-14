// Show More Button Functionality start here
window.readMore = function readMore(city) {
    let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
    let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);
  
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Show less"; 
        moreText.style.display = "inline";
    }
  }
  // Show More Button Functionality ends here
  
  // Accordion functionality start here
  function my_img(src) {
    $("#my-img").attr("src", src);
  }
  
  function my_img1(src) {
    $("#my-img1").attr("src", src);
  }
  
  function my_img2(src) {
    $("#my-img2").attr("src", src);
  }
  
  function my_img3(src) {
    $("#my-img3").attr("src", src);
  }
  
  function my_img4(src) {
    $("#my-img4").attr("src", src);
  }
  
  function my_img5(src) {
    $("#my-img5").attr("src", src);
  }
  
  function my_img6(src) {
    $("#my-img6").attr("src", src);
  }
  // Accordion functionality ends here
  
  ("use strict");
  !(function (t) {
    "use strict";
    t(document).ready(function () {
      t(window).scroll(function () {
        t(window).scrollTop() > t(window).height()
          ? t(".myheader").css({
              "background-color": "white",
            })
          : t(".myheader").css({
              "background-color": "transparent",
            });
      });
    }),
      t(window).bind("scroll", function () {
        t(window).scrollTop() > 200
          ? t(".myheader").addClass("sticky")
          : t(".myheader").removeClass("sticky");
      });
    var i = document.querySelectorAll(".hamburger");
    i.length > 0 &&
      (function (t, i, o) {
        if ("[object Object]" === Object.prototype.toString.call(t))
          for (var e in t)
            Object.prototype.hasOwnProperty.call(t, e) && i.call(o, t[e], e, t);
        else for (var s = 0, n = t.length; n > s; s++) i.call(o, t[s], s, t);
      })(i, function (t) {
        t.addEventListener(
          "click",
          function () {
            this.classList.toggle("is-active");
          },
          !1
        );
      }),
      t(".navbar-toggler").click(function () {
        t("#navbarNav").toggleClass("menu-show"),
          t(this).toggleClass("collapsed"),
          t("body").toggleClass("menu-open");
      }),
      jQuery(".ttm-header-search-link a").addClass("sclose"),
      jQuery(".ttm-header-search-link a").on("click", function (t) {
        jQuery(".field.searchform-s").focus(),
          jQuery(".ttm-header-search-link a").hasClass("sclose")
            ? (jQuery(".ttm-header-search-link a i")
                .removeClass("ti-search")
                .addClass("ti-close"),
              jQuery(this).removeClass("sclose").addClass("open"),
              jQuery(".ttm-search-overlay").addClass("st-show"))
            : (jQuery(this).removeClass("open").addClass("sclose"),
              jQuery(".ttm-header-search-link a i")
                .removeClass("ti-close")
                .addClass("ti-search"),
              jQuery(".ttm-search-overlay").removeClass("st-show")),
          t.preventDefault();
      }),
      t("ul li:has(ul)").addClass("has-submenu"),
      t("ul li ul").addClass("sub-menu"),
      t("ul.dropdown li").on({
        mouseover: function () {
          t(this).addClass("hover");
        },
        mouseout: function () {
          t(this).removeClass("hover");
        },
      });
    var o = t("#menu"),
      e = t("#menu-toggle-form"),
      s = t(".has-submenu > a");
    e.on("click", function (t) {
      e.toggleClass("active"), o.toggleClass("active");
    }),
      s.on("click", function (i) {
        i.preventDefault(),
          t(this).toggleClass("active").next("ul").toggleClass("active");
      }),
      t("ul li:has(ul)"),
      t(".dropdown-menu a.dropdown-toggle").on("click", function (i) {
        return (
          t(this).next().hasClass("show") ||
            t(this)
              .parents(".dropdown-menu")
              .first()
              .find(".show")
              .removeClass("show"),
          t(this).next(".dropdown-menu").toggleClass("show"),
          t(this)
            .parents("li.nav-item.dropdown.show")
            .on("hidden.bs.dropdown", function (i) {
              t(".dropdown-submenu .show").removeClass("show");
            }),
          !1
        );
      });
  })(jQuery),
    (function () {
      var t;
      $(".video-btn").click(function () {
        t = $(this).data("src");
      }),
        console.log(t),
        $("#myModal").on("shown.bs.modal", function (i) {
          $("#video").attr(
            "src",
            t + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
          );
        }),
        $("#myModal").on("hide.bs.modal", function (i) {
          $("#video").attr("src", ""); // Remove the video source.
        });
    })(),
    $("ul.photos li").hover(function () {
      $(this).toggleClass("active");
    }),
    $(function () {
      $(".setup-panel .stepwizard-step").on("click", function () {
        $(this).parent().find(".stepwizard-step.active").removeClass("active"),
          $(this).addClass("active");
      }),
        $(window).width() < 992 &&
          ($(".menu_data .bot_data_bar").css("height", $(window).height()),
          $(".menu_data .bot_data_bar> ul").css(
            "height",
            $(window).height() - 45
          ));
    }),
    $(".add_windwo_min_hight").css("min-height", $(window).height()),
    $(window).resize(function () {
      $(".add_windwo_min_hight").css("min-height", $(window).height());
    }),
    $(".add_windwo_hight").css("height", $(window).height()),
    $(window).resize(function () {
      $(".add_windwo_hight").css("height", $(window).height());
    }),
    $(".opner").click(function () {
      $(this).toggleClass("opened"),
        $(".menu").toggleClass("for_menu"),
        $(".mob_close").toggleClass("opend");
    }),
    $(".mob_close").click(function () {
      $(".opner").toggleClass("opened"),
        $(".menu").toggleClass("for_menu"),
        $(this).toggleClass("opend");
    }),
    $(window).scroll(function () {
      $(window).scrollTop() >= 100
        ? $(".menu").addClass("fixed")
        : $(".menu").removeClass("fixed");
    }),
    $(".inds_cat_set>div").hover(function () {
      $(this).toggleClass("unhover");
    }),
    jQuery(document).on("click", ".mega-dropdown", function (t) {
      t.stopPropagation();
    }),
    $(".mega-dropdown").on("show.bs.dropdown", function () {
      $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown();
    }),
    $(".mega-dropdown").on("hide.bs.dropdown", function () {
      $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp();
    }),
    (window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (t) {
        window.setTimeout(t, 1e3 / 23);
      }),
    $(function () {
      $(window).resize(function () {
        $("#playArea").attr({
          width: $("body").width(),
          height: $("body").height(),
        }),
          (width = $("body").width()),
          (height = $("body").height());
      }),
        $(window).resize();
    });
  var can,
    ctx,
    interval,
    width,
    height,
    Point = function () {
      (this._size = 0.5),
        (this._x = 0),
        (this._y = 0),
        (this._direction = 0),
        (this._velocity = 0),
        (this._distances = []),
        (this._neighboors = []),
        (this._randomization = 0),
        (this.__collection = null),
        (this._step = function (t) {
          var i =
              1 *
              this._velocity *
              ((Math.random() * this._randomization + 1) / 10),
            o = (2 * Math.random()) % 2 > 1 ? -1 : 1;
          this._direction =
            1 * this._direction + Math.random() * this._randomization * o;
          var e = (this._direction * Math.PI) / 180;
          (this._x = 1 * this._x + i * Math.cos(e) * 1),
            (this._y = 1 * this._y + i * Math.sin(e) * 1),
            this._x > width && (this._x = 0),
            this._x < 0 && (this._x = width),
            this._y > height && (this._y = 0),
            this._y < 0 && (this._y = height),
            (this.__collection = t);
        }),
        (this._computeNeighboors = function () {
          if (null != this.__collection) {
            for (
              aCollection = this.__collection, this._distances = [], i = 0;
              i < aCollection.length;
              i++
            )
              aCollection[i]._x != this._x &&
                aCollection[i]._y != this._y &&
                this._distances.push({
                  pointIndex: i,
                  pointObj: aCollection[i],
                  distance: Math.sqrt(
                    Math.pow(this._x - aCollection[i]._x, 2) +
                      Math.pow(this._y - aCollection[i]._y, 2)
                  ),
                });
            this._distances.sort(function (t, i) {
              return (
                (defaultReturn = 0),
                t.distance < i.distance && (defaultReturn = -1),
                t.distance > i.distance && (defaultReturn = 1),
                defaultReturn
              );
            }),
              (this._neighboors = this._distances.slice(0, 3));
          }
        }),
        (this.draw = function (t) {
          for (
            this._computeNeighboors(),
              t.lineWidth = 0.25,
              t.strokeStyle = "#666",
              t.beginPath(),
              i = 0;
            i < this._neighboors.length;
            i++
          )
            t.moveTo(this._x, this._y),
              t.lineTo(
                this._neighboors[i].pointObj._x,
                this._neighboors[i].pointObj._y
              ),
              (t.lineWidth = 0.1 + 5 / this._neighboors[i].distance);
          t.closePath(),
            t.stroke(),
            t.beginPath(),
            t.arc(
              this._x,
              this._y,
              this._size * this._velocity,
              0,
              2 * Math.PI,
              !1
            ),
            (t.fillStyle = "#999"),
            (t.strokeStyle = "#666"),
            (t.lineWidth = 0.5),
            t.fill(),
            t.stroke(),
            t.beginPath(),
            t.arc(this._x, this._y, this._size, 0, 2 * Math.PI, !1),
            (t.fillStyle = "#666"),
            t.fill();
        });
    },
    aPoints = [],
    numPoints = 50;
  
  function animate() {
    for (x = 0; x < numPoints; x++) aPoints[x]._step(aPoints);
    requestAnimFrame(animate), draw();
  }
  
  function draw() {
    for (
      ctx.save(), ctx.clearRect(0, 0, width, height), x = 0;
      x < numPoints;
      x++
    )
      aPoints[x].draw(ctx);
    ctx.restore();
  }
  var btn = $("#gotoTop");
  $(window).scroll(function () {
    $(window).scrollTop() > 300 ? btn.addClass("show") : btn.removeClass("show");
  }),
    btn.on("click", function (t) {
      t.preventDefault(),
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
    });
  
  // got to top
  //Get the button
  let mybutton = document.getElementById("gotoTop");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // technology navigation
  const tabs = document.querySelectorAll(".operations__tab");
  const tabsContainer = document.querySelector(".operations__tab-container");
  const tabsContent = document.querySelectorAll(".operations__content");
  tabsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".operations__tab");
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach((t) => t.classList.remove("operations__tab--active"));
    tabsContent.forEach((c) => c.classList.remove("operations__content--active"));
  
    // Activate tab
    clicked.classList.add("operations__tab--active");
  
    // Activate content area
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });
  
  
  function update_image_for_accordian(src, tag) {
      $(tag).attr('src', src)
    }