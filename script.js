/**
 * @key-books
 *
 */
// $.ajax({
//     type: "method",
//     url: "url",
//     data: "data",
//     dataType: "dataType",
//     success: function (response) {
        
//     }
// });

// TODO:テーマを選んだら変わるようにする。
$(function(){
    $("#theme").hover(
        function(){
            $(".themeColorSub").show();
        },function(){
            $(".themeColorSub").hide();
        }
    )
    $("#whiteMode").click(function(){
        console.log("white mode");
        $("body").css({"background-color":"white","color":"black"});
        $("#output_chat").css({"background-color":"black"})
    });
    $("#darkMode").click(function(){
        console.log("dark mode");
        $("body").css({"background-color":"gray","color":"white"});
        $("#output_chat").css({"background-color":"aqua"});
    });


    $("#submit2").click(function(){
        let chat = $("#message").val();
        if(chat == ""){
            console.log(false);
            return false;
        }else{
            for(let i=0; i<chat.length; i++){
                // console.log(chat[i]);
                console.log(chat);
            }
            let textchat = `<div class="your_text"><p>`+chat+`</p></div>`;
            $("#output_chat").append(textchat.replace(/\n/g,'<br>'));
            $("#text").val(" ");
        }
    });
});
/**
 * @key-books
 * @param {object} e 何のボタンを押したか
 * @return {boolean}
 */
$("#input_chat").on('keyup', function(e){
    if(e.key=='Enter'||e.keyCode===13 && e.key == 'Shift'){
        return false;
    }else if(e.key=='Enter'||e.keyCode===13){
        console.log(1);
        $('#submit').trigger('click');
    }
})

/**
 * @key-books
 * @return {boolean}
 */
$("#submit").click(function () {
    console.log($("#text").val());
    let chat = $("#text").val();
    if(chat == ""){
        console.log(false);
        return false;
    }else{
        for(let i=0; i<chat.length; i++){
            // console.log(chat[i]);
            console.log(chat);
        }
        let textchat = `<div class="my_text"><p>`+chat+`</p></div>`;
        $("#output_chat").append(textchat.replace(/\n/g,'<br>'));
        $("#text").val(" ");
    }
});