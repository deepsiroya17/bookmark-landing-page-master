$(document).ready(function(){

  // SlideShow in features section
  $(".slides").on("click" , "li", function(){
    $(this).siblings().removeClass("active-li");
    $(this).addClass("active-li");
    var tabId = $(this).attr("id");
    $("#" + tabId + "-tab").addClass("active").removeClass("hide");
    $("#" + tabId + "-tab").siblings().addClass("hide").removeClass("active");
  });

  // FAQ Section (SlideToggle)
  $(".question").click(function() {
    $(this).next(".answer").slideToggle( {direction: "up"} ,"slow");
    $(this).siblings().next(".answer").slideUp();                              // Shows only one Q-A at a time
    $(this).siblings().find("img").attr("src", "images/icon-arrow.svg");

    var arrowDown = "images/icon-arrow.svg";
    var arrowUp = "images/arrow-up.png";
    a = $(this).find("img");
    if ( a.attr('src') == arrowDown ) {
      a.attr('src', arrowUp);
    } else {
      a.attr('src', arrowDown);
    }

  });

  // Email Verification
  $(".red-btn").click(function(e) {
    e.preventDefault();
    checkInput();
  });

  var email = $("#email")

  function checkInput() {
    var emailValue = email.val();  // trim to remove the whitespaces
    if (emailValue === '' || !isEmail(emailValue)) {
      setError(email);
    }
  }

  function setError(input) {
    const emailForm = input.parent();
    emailForm.addClass("error");
  }

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\-\.]+)\+?([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
  }

  // Media Query Top Navbar
  $("#topNavbar").click(function() {
    if ($("#topNavbar").hasClass("navbar")) {
      $("#topNavbar").toggleClass("responsive");
    }
  });
});
