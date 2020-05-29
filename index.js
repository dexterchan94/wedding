$(document).ready(() => {

  $(".topnav .icon").on('click', () => {
    let navElement = document.getElementById("nav");
    if (navElement.className === "topnav") {
      navElement.className += " responsive";
      $(".nav-right").slideDown();
    } else {
      $(".nav-right").slideUp(() => {
        console.log("nav closed");

        navElement.className = "topnav";
      });
    }
  })
});

