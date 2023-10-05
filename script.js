//入力したものの取得
window.onload = function(){
    let chat = document.querySelector("#text");
    let sub = document.getElementById("input_chat");
    sub.addEventListener('click', ()=>{
        if(sub == null){
            return false;
        }
        console.log(chat.value);
        // 出力
        let output = document.querySelector("#output_chat");
        output.innerHTML += `<p class='output_chat'>${chat.value}</p>`;
        chat.value = "";
    });
};
