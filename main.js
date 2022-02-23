new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar: true,
    responsiveWidth: 800,
    anchors: ['home', 'photo-gallery', 'about-history', 'things-to-do', 'accomodation', 'getting-here'],
    menu: '#nav-ul'
});

window.onscroll = () => fadeNavBarBackground();

function fadeNavBarBackground() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").classList.add("scrolled");
        document.getElementById("brand").classList.add("scrolled");
    } else {
        document.getElementById("nav").classList.remove("scrolled");
        document.getElementById("brand").classList.remove("scrolled");
    }
}