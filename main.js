// Fullpage js implementation and options.
new fullpage('#fullpage', {
    // No license key as i did not have a response to my enquiries, 
    // as this is an educational project I went ahead and implemented it without 
    // issue to avoid having to redo whole sections.
    licenseKey: 'YOUR KEY HERE',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar: true,
    // Disables fullpage js at widths of 800 or less
    responsiveWidth: 800,
    anchors: ['home', 'about-history', 'things-to-do', 'photo-gallery', 'getting-here'],
    menu: '#nav-ul'
});


// When at top of screen navbar will be transparent, scrolling down removes transparent property.
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


// Changes the hero image to night if the switch is clicked
const photoSwitch = document.querySelector('#selTheme');

photoSwitch.addEventListener('sl-change', () => {
    if (photoSwitch.checked === true) {
        document.querySelector('.hero').style.backgroundImage = "url('images/sublime-night.png')";
    } else {
        document.querySelector('.hero').style.backgroundImage = "url('images/bayley-clark-0v7BeBsQhCY-unsplash-widescreen.jpg')";
    }
})