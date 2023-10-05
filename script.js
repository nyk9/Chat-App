//入力したものの取得
let chat = document.querySelector("#text");
let sub = document.getElementById("form2");
sub.addEventListener('submit', ()=>{
    if(sub == null){
        return false;
    }
    console.log(chat.value);
    // 出力
    let output = document.querySelector(".output_chat");
    output.innerHTML = "<div class='output_chat'><p>"+chat.value+"</p></div>";
    // return chat.value;
});