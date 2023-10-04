/**
 * @key-books
 */
const output_chat = () => {
    //入力したものの取得
    let chat = document.querySelector("#text");
    console.log(chat);
    chat.addEventListener('input', function(){
        if(chat == null){
            return false;
        }
           // 出力
        let output = document.querySelector("#form1");
        output.innerHTML = chat.value;
    })

};
output_chat();