var inputMail;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //email format

function submit(){
    inputMail = document.getElementById("mail").value;
    if(inputMail.match(mailformat)){
        $(".end-container span").html(inputMail);
        $(".main-container").toggleClass("hide");
        $(".end-container").toggleClass("hide");
        $("input").removeClass("invalid");
        $("h5>span").addClass("hide");
    }
    else{
        $("input").addClass("invalid");
        $("h5>span").removeClass("hide");
    }
}

$("button").click(function(){
    submit();
});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        submit();
    }
})

