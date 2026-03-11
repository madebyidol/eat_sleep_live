$( init );

/* Move Header element back to top of page */
function init() {

    let offerBanner = document.querySelector('#shopify-section-offer-banner');
    let siteHeader = document.querySelector('#site-header');

    offerBanner.after(siteHeader);

}

/* Add margin to <main> to offset fixed header height
function resizeHeader() {
    var headerHeight = $("header").outerHeight();
    var windowHeight = $(window).outerHeight();
    var contentHeight = windowHeight - headerHeight;
    console.log(contentHeight);
    $('main').css('margin-top', headerHeight);
    $('.hero-video-section').css('height', contentHeight);
};
$(window).on({
    resize: resizeHeader
});
*/