//入力したものの取得
window.onload = function(){
    let chat = document.querySelector("#text");
    let sub = document.getElementById("input_chat");
    sub.addEventListener('click', ()=>{
        if(chat.value == ""){
            return false;
        }
        console.log(chat.value);
        // 出力
        let output = document.querySelector("#output_chat");
        output.innerHTML += `<div class='output_chat'><p>${chat.value}</p><div>`;
        chat.value = "";
    });
};

