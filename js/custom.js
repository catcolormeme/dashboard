

window.addEventListener('load', () => {

    $("#showSideMenu").click(() => {
      $("#menu").removeClass("menu-hide");
      $("#menu").addClass("menu-open");
    })
    
    $("#hideSideMenu").click(() => {
        $("#menu").removeClass("menu-open");
        $("#menu").addClass("menu-hide");
    })


    $(".btn-close").click(() => {

        $("#connectModal").css("display","none");

    })

    $("#showLightMode").click(() => {

        $("#showLightMode").css("display","none");
        $("#showDarkMode").css("display","block");
        
        $("#body").removeClass("dark-layout");

    })

    $("#showDarkMode").click(() => {

        $("#showDarkMode").css("display","none");
        $("#showLightMode").css("display","block");
        
        $("#body").addClass("dark-layout");

    })

})



