
function moveShow(event) {
    var show = document.getElementById("show");
    var pic = document.getElementById("pic");
    if(event.clientX >= 85 && event.clientX <= 310 &&
        event.clientY >= 85 && event.clientY <= 310
    ){
        show.style.left = event.clientX - 85 + "px";
        show.style.top = event.clientY - 85 + "px";
        pic.style.left = - event.clientX * 4 + 335 + "px";
        pic.style.top = - event.clientY * 4 + 335 + "px";
    }else{
        if(event.clientX < 85 && event.clientY >= 85 && event.clientY <= 310){
            show.style.top = event.clientY - 85 + "px";
            pic.style.top = - event.clientY * 4 + 335 + "px";
            show.style.left = 0 + "px";
            pic.style.left = 0 + "px";
        }else if(event.clientX > 310 && event.clientY >= 85 && event.clientY <= 310){
            show.style.top = event.clientY - 85 + "px";
            pic.style.top = - event.clientY * 4 + 335 + "px";
            show.style.left = 225 + "px";
            pic.style.left = - (225 + 85) * 4 + 340 + "px";
        }else if(event.clientY > 310 && event.clientX >= 85 && event.clientX <= 310){
            show.style.top = 225 + "px";
            pic.style.top = - (225 + 85) * 4 + 340 + "px";
            pic.style.left = - event.clientX * 4 + 335 + "px";
            show.style.left = event.clientX - 85 + "px";
        }else if(event.clientY < 85 && event.clientX >= 85 && event.clientX <= 310){
            show.style.top = 0 + "px";
            pic.style.top = 0 + "px";
            pic.style.left = - event.clientX * 4 + 335 + "px";
            show.style.left = event.clientX - 85 + "px";
        }
    }

}

function over(){
    var show = document.getElementById("show");
    var enlarge = document.getElementById("enlarge");
    enlarge.style.display = "block";
    show.style.display="block";
}

function out(){
    var show = document.getElementById("show");
    var enlarge = document.getElementById("enlarge");
    enlarge.style.display = "none";
    show.style.display="none";
}
