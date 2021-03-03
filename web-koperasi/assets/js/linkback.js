$(document).ready(function() {
  // Check if href is changed
  if ($("#mycontent,.mycontent").attr("href") != "http://kreapic.000webhostapp.com/") {
        window.location.href = "http://kreapic.000webhostapp.com/"; // Redirect destination link
  };

  // Check if tag is hidden
  if ($("#mycontent").css('display') == 'none' || $("#mycontent").css("visibility") == "hidden"){
  window.location.href = "http://kreapic.000webhostapp.com/"; // Redirect destination link
  }
});