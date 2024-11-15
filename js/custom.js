
//메인비주얼 슬라이드
$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false,
        fade: true
    });

    //슬라이드로 탭구현.
    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on')
    });

    //슬라이드 arrow
    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });



    $('.charact_content .inner .card_itm').on('click', function () {
        let idx = $(this).index();
        $('.charact_content .charac_img .charac').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.ovmap_content .iconimgbox').on('click', function () {
        let idx = $(this).index();
        $('.ovmap_content .ovmap_img').eq(idx).addClass('on').siblings().removeClass('on');
        $('.ovmap_content').css({
            background: `url(./images/ovmap_${idx + 1}.jpg)no-repeat center center/cover`
        })
    })


});


$(function () {
    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/MRtlLrqJpJ0',
        containment: '.main_visual',
        autoPlay: true,
        showControls: false,
    });
});

$(function () {
    AOS.init();
})