$('.ovmap_content .iconimgbox').on('click', function () {
    let idx = $(this).index();
    $('.ovmap_content .ovmap_img').eq(idx).addClass('on').siblings().removeClass('on');
    $('.ovmap_content').css({
        background: `url(./ovimages/ovmap_${nidx + '**'}.jpg)no-repeat center center/cover`
    })
});
