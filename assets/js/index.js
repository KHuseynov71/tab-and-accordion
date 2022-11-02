$(document).ready(function(){
    const tab = $(".tab a");
    // console.log(tab);
    const content = $(".tabcontent");
    tab.filter(":first").addClass("activ");
    content.filter(":not(:first)").hide();
    tab.click(function(){
        const index = $(this).index();
        tab.removeClass("activ");
        $(this).addClass("activ");
        // console.log(this);
        content.hide().eq(index).fadeIn(500);
    })
})




// accardion
$(document).ready(function(){
    $(".item-header").click(function(){
        // console.log("salam");
    //    $(".accardion-item p").removeClass("text") 
    //    console.log(this);
        $(this).next().addClass("text");
        $(".text").slideToggle("slow");
    })
})