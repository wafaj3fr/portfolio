'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 *  HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active");
    }
});

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");
const reveal = function(){
  for (let i = 0, len = revealElements.length; i < len; i++){
    if(revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2){
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++){
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const sendEmail = () => {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "wafaagaafar@gmail.com",
    Password : "C47B4B69EE2826FBD7372563600A0E92D73C",
    To : 'wafaagaafar@gmail.com',
    From: 'wafaagaafar@gmail.com',
    ReplyFrom : document.getElementById("email").value,
    Subject : "New contact form enquiry",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message sent successfully")
);
}