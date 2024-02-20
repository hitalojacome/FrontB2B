$(".menu_item").click(function () {
    var $currentSubMenu = $(this).find(".menu_options");
    $(".menu_options").not($currentSubMenu).slideUp();
    $(".menu_item").not($(this)).removeClass("active");
    $(".menu_vector").not($(this).find(".menu_vector")).css("transform", "none");
    $currentSubMenu.slideToggle();
    $(this).toggleClass("active");
 
    $(this).find(".menu_vector").css("transform", "");
});