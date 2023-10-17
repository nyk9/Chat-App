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
        let textchat = `<div class="output_chat"><p>`+chat+`</p></div>`;
        $("#output_chat").append(textchat.replace(/\n/g,'<br>'));
        $("#text").val(" ");
    }
});