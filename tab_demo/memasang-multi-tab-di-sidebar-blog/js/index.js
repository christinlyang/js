$(function() {
  $("#select-tab li:first").addClass("selected");
  $("#sidebar-main > div").hide();
  $("#sidebar-main > div:first").show();
  $("#select-tab a").click(function() {
    $("#select-tab li").removeClass("selected");
    $(this).parent().addClass("selected");
    var a = $(this).attr("href");
    $("#sidebar-main > div:visible").hide();
    $(a).show();
    return false
  })
});