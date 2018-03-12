// function change(obj,id) {
//     var thisObj=$(obj);
//     thisObj.siblings('li').removeClass('show');
//     thisObj.addClass('show');
//     var content = $("#tap-content"+id);
//     content.show().siblings('.tap-content').hide();
//     // content.parent().siblings(".tap-content").style.display = "none";
//     // content.style.display = "block";
// };

//
// AMD
function change(obj){
    var thisObj=$(obj);
    thisObj.siblings('li').removeClass('show')
    thisObj.addClass('show');
    // console.log($(this.index));
}
$('.tap').find('li').click(function(){
    var num=$(this).index();
    $(this).parent().parent().siblings('.tap-content').hide().eq(num).show();
    //$('.tap-content').hide().eq(num).show();
    //console.log(num)
})

window.onload=function(){
    var tab1 = document.getElementsByClassName("table1");
    for(i=0;i<tab1.length;i++){
        var rows = tab1[i].getElementsByTagName("tr");
        var rows2 = tab1[i].getElementsByTagName("a");
        for(j=0;j<3;j++){
            rows[j].style.color = "red";
            rows2[j].style.color = "red";
        }
    }
}

