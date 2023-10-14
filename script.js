//入力したものの取得
// window.onload = function(){
//     let chat = document.querySelector("#text");
//     let sub = document.getElementById("input_chat");
//     sub.addEventListener('click', ()=>{
//         if(chat.value == ""){
//             return false;
//         }
//         console.log(chat.value);
//         // 出力
//         let output = document.querySelector("#output_chat");
//         output.innerHTML += `<div class='output_chat'><p>${chat.value}</p><div>`;
//         chat.value = "";
//     });
// };

/**
 * @key-books
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
        $("#output_chat").append(textchat.replace(/\r\n/g,'<br>'));
        $("#text").val(" ");
    }
});