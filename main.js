//whenever this function is called an alert msg 
//"weather page is loading" will pop
//@pars element we click
function alertMsg(element){
    alert(element);
}
//when click I accept button this function makes 
//the cookie policy disappear
//@pars (id of cookie policy)
function dismiss(id){
    var cookie = document.querySelector(id);
    cookie.remove();
}
//when selecting f in select tempreature wil be shown in feh
function celTOFeh(element){
    var degreeList = document.querySelectorAll('.degree');
    if(element.value === "f"){
       for (var i=0; i<degreeList.length ;i++){
            degreeList[i].innerText=parseInt((degreeList[i].innerText)*(9/5)+32); 
       } 
    }
 
}