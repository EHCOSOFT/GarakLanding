$(document).ready(function () {
    var headerHeight = 60; // 특정 px 값 설정

    // 스크롤 이벤트 처리
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > headerHeight) {
            $(".header").addClass("is-write");
        } else {
            $(".header").removeClass("is-write");
        }
    });
});