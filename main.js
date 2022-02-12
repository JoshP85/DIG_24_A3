new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar:true
});


// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled', $(this).scrollTop() > 1080);
//     });

// document.getElementsByTagName('nav').addEventListener("scroll", myFunction);

// function myFunction() {
//     document.getElementsByClassName('navbar').toggleClass('scrolled', (this).scrollTop() > 1080);
// }

// document.getElementById("myDIV").onscroll = function() {myFunction()};

// function myFunction() {
//   document.getElementById("demo").innerHTML = "You scrolled in div.";
// }


// window.addEventListener('scroll', function(e) {
//     document.getElementById('nav').classList[e.pageX > 1 ? 'add' : 'remove']('scrolled');
// });

window.onscroll = () => fadeNavBarBackground();

function fadeNavBarBackground() {
 if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
  document.getElementById("nav").classList.add("scrolled");
 } else {
  document.getElementById("nav").classList.remove("scrolled");
 }
}