function started(){
    console.log("Download Started");
}
function update(progress){
    console.log(progress + "% completed")

}
function completed(){
    console.log("Download Completed");
}

function performDownload(fn_s, fn_u, fn_c){
    fn_s();

    for(let i = 0; i <= 100; i++){
        fn_u(i);
    }


    fn_c();
}

function personDownload(started, update, completed)