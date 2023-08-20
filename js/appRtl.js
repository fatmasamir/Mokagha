$(document).ready(function(){
    $("html").attr("dir", localStorage.getItem("dir") || "ltr");
    $("html").attr("class", localStorage.getItem("lang") || "en");
    // Change Lang
    $(".navbar-btns").on("change", function () {
      if (
        $("html").attr("dir") == "rtl" ||
        localStorage.getItem("dir") == "rtl"
      ) {
        $("html").attr("class", "en");
        $("html").attr("dir", "ltr");
        localStorage.setItem("dir", "ltr");
      } else {
        $("html").attr("class",  "ar");
        $("html").attr("dir", "rtl");
        localStorage.setItem("dir", "rtl");
      }
      if (
        $("html").attr("lang") == "ar" ||
        localStorage.getItem("lang") == "ar"
      ) {
        $("html").attr("class",  "en");
        $("html").attr("lang", "en");
        localStorage.setItem("lang", "en");
      } else {
        $("html").attr("class","ar");
        $("html").attr("lang", "ar");
        localStorage.setItem("lang", "ar");
      }
    });
    $(".lang_button").click(function ()  {
      if (
        $("html").attr("dir") == "rtl" ||
        localStorage.getItem("dir") == "rtl"
      ) {
        $("html").attr("class", "en");
        $("html").attr("dir", "ltr");
        localStorage.setItem("dir", "ltr");
      } else {
        $("html").attr("class",  "ar");
        $("html").attr("dir", "rtl");
        localStorage.setItem("dir", "rtl");
      }
      if (
        $("html").attr("lang") == "ar" ||
        localStorage.getItem("lang") == "ar"
      ) {
        $("html").attr("class",  "en");
        $("html").attr("lang", "en");
        localStorage.setItem("lang", "en");
      } else {
        $("html").attr("class","ar");
        $("html").attr("lang", "ar");
        localStorage.setItem("lang", "ar");
      }
    })
  
    // Increase
     let valueDisplays = document.querySelectorAll(".num_inc");
     let interval = 3000;
    $(window).scroll(function(){
    if($(window).scrollTop() < 2000){
    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
  })
    // Smooth Scrolling
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
      $("#loading").fadeOut(1500);
      var btn_top = $("#scroll-top");
      btn_top.addClass("show");
      
      
  $('#picters_alpha').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    focusOnSelect: true,
    // navText: [
    //   "<img src='assets/arleft.svg'>",
    //   "<img src='assets/arright.svg'>",
    // ],
    rtl:true,

    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 950,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      },
    ]
  });
    
  $('#offer').slick({
    slidesToShow: 1,
    arrows:true,
    rtl:true,
  });
  $('#customerReviews').slick({
    slidesToShow: 3,
    arrows: true,
    speed: 500,
    rtl:true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });	$("#loading").fadeOut(1500);
  var btn_top = $("#scroll-top");
  btn_top.addClass("show");
  });
    // logic
    $("#CHAT_LINK").on('click', function() {
      $('.link_chat span').fadeToggle(200);
    });
  AOS.init();
  const currentRoute = window.location.pathname;
const ar=document.getElementById('ar');
const en=document.getElementById('en');
const pathArray=currentRoute.split('/')
ar.href=`/rtl/${pathArray[pathArray.length-1]}`;
en.href=`/${pathArray[pathArray.length-1]}`;