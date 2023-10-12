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

$("#input_chat").on('keyup', function(e){
    if(e.key=='Enter'||e.keyCode===13 && e.key == 'Shift'){
        return false;
    }else if(e.key=='Enter'||e.keyCode===13){
        console.log(1);
        $('#submit').trigger('click');
    }
})
$("#submit").click(function (e) {
    console.log(2);
    if($("#text").val == ""){
        console.log(false);
        return false;
    }else{
        console.log($("#text").val());
        $("#output_chat").html(`<div class="output_chat"><p>`+$("#text").val()+`</p></div>`);
        $("#text").val(" ");
    }
});