$(document).ready(function(){
    $("#btn1").click(function(){
        $("#para1").slideToggle()
    })

    $('#btn2').click(function(){
        $("#para2").slideToggle()
    })
    
    $("#btn3").click(function(){
        $("#para3").slideToggle()
    })
})

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
btn1.addEventListener("click",function(){
    if(btn1.innerHTML=="+"){
        btn1.innerHTML="-"
    }
 else{
     btn1.innerHTML="+"
 }
 })
btn2.addEventListener("click",function(){
    if(btn2.innerHTML=="+"){
        btn2.innerHTML="-"
    }

    else{
        btn2.innerHTML="+"
    }
}) 

btn3.addEventListener("click",function(){
    if(btn3.innerHTML=="+"){
        btn3.innerHTML="-"
    }
    else{
        btn3.innerHTML="+"
    }
})


