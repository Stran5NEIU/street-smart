//resource link: https://www.w3schools.com/jquery/default.asp

$("#worker-chat, #guest-chat, #question1,#question2,#question3,#question4").hide();
$("#cafe-chat,#guest1-chat,#cafe1,#cafe2,#cafe3,#cafe4").hide();
$("#decoy-chat,#person-chat,#chat1,#chat2,#chat3,#chat4").hide();



$("#supermarket-worker").click(function(){
    $("#guest-chat").show();
    $("#question1").show();
    $("#worker-chat").show();
});

$("#question1").click(function(){
    $("#question1").hide();
    $("#question2").show();
});

$("#question2").click(function(){
    $("#question3").show();
    $("#question2").hide();
});

$("#question3").click(function(){
    $("#question4").show();
    $("#question3").hide();
});

$("#question4").click(function(){
    $("#guest-chat").hide();
    $("#question4").hide();
    $("#worker-chat").hide();
});


$("#cafe-start").click(function(){
    $("#guest1-chat").show();
    $("#cafe-chat").show();
    $("#cafe-start").hide
    $("#cafe1").show();
});

$("#cafe1").click(function(){
    $("#cafe1").hide();
    $("#cafe2").show();
});

$("#cafe2").click(function(){
    $("#cafe3").show();
    $("#cafe2").hide();
});

$("#cafe3").click(function(){
    $("#cafe4").show();
    $("#cafe3").hide();
});

$("#cafe4").click(function(){
    $("#guest1-chat").hide();
    $("#cafe4").hide();
    $("#cafe-chat").hide();
});

$("#cafe4").click(function(){
    $("#guest1-chat").hide();
    $("#cafe4").hide();
    $("#cafe-chat").hide();
});

$("#decoy").click(function(){
    $("#decoy-chat").show();
    $("#chat1").show();
});

$("#chat1").click(function(){
    $("#chat2").show();
    $("#person-chat").show();
});

$("#chat2").click(function(){
    $("#chat3").show();
    $("#chat1").hide();
    
});

$("#chat3").click(function(){
    $("#chat4").show();
    $("#chat3").hide();
    $("#decoy-chat").hide();
    $("#chat2").hide();
    $('#thug').toggle("slide:right");
});

