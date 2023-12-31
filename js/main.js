$(document).ready(function () {
  // header_menu_list
  $(".header_menu_list").click(function () {
    $(this).siblings().find(".list").slideUp();
    $(this).find(".list").slideToggle();
  });

  // m_navbar 햄버거 메뉴
  let navbar = $(".m_navbar");
  navbar.hide();

  $(".header_m_menu").click(function () {
    navbar.slideToggle();
  });

  $(".dropDown_title").click(function () {
    $(this).siblings().find(".dropDown_list").slideUp();
    $(this).find(".dropDown_list").slideToggle();
  });

  // section_1_slide
  $(".section_1").slick({
    prevArrow: ".arrow_wrap .bi-chevron-left",
    nextArrow: ".arrow_wrap .bi-chevron-right",
    dots: true,
    appendDots: ".section_1_pager .slide_arrow .slide_pager",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
  });

  // section_4_slide
  $(".section_4 .event_slide_wrap").slick({
    prevArrow: ".event_arrow .bi-chevron-left",
    nextArrow: ".event_arrow .bi-chevron-right",
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
  });

  //section_5_txt_slide
  let imgWrap = $(".section_5_con");
  let txtWrap = $(".con_txt");

  txtWrap.hide();

  imgWrap
    .mouseenter(function () {
      txtWrap.slideUp(400);
      $(this).children(".con_txt").stop().slideDown(500);
    })
    .mouseleave(function () {
      $(this).children(".con_txt").stop().slideUp(500);
    });

  // go-to-top btn
  let topBtn = $("#top_btn");
  topBtn.hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.on("click", function () {
    $(window).scrollTop(0);
  });

  // top_btn footer에서 색상 변경
  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();
    let footerPosition = $(".footer_menu").offset().top - $(window).height();
    let sideMenuTxt = $(".side_menu_txt");

    if (scrollPosition > footerPosition) {
      topBtn.addClass("active");
      sideMenuTxt.addClass("active");
    } else {
      topBtn.removeClass("active");
      sideMenuTxt.removeClass("active");
    }
  });
});
