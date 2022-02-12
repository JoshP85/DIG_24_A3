new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar:true
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

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })