$(".menu_item").click(function () {
    var $currentSubMenu = $(this).find(".menu_options");
    $(".menu_options").not($currentSubMenu).slideUp();
    $currentSubMenu.slideToggle();
    $(this).toggleClass("active");
});