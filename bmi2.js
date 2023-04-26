
$("#b1").click(function(){
    let s="";
    const W = Number(document.querySelector('#i1').value)
    const H = Number(document.querySelector('#i2').value)
    let x = (W/(H*H))*10000;
    let R = x.toFixed(1)
    // R = Math.round(R * 10) / 10 ;
    // ale("YOUR BMI IS : "+R);
    // console.log(R);
    if (R<=18.5){

        alert("BMI = " + R+"    HEALTH STATUS : UNDERWEIGHT");
    }
    else if(R>18.5 && R<=24.9){
        
        alert("BMI = "+R+"      HEALTH STATUS : NORMAL");
    
    }
    
    else if(R>=25 && R<=29.9){
        
        alert("BMI = " + R+"    HEALTH STATUS : OVERWEIGHT");
        
    }
    else if(R>=30){
        alert("BMI = " + R+"    HEALTH STATUS : OBESITY");
        
    }
    else{
        alert("INVALID ENTRY!");
    }
    
    
});
function click1(){
    $("#b2").text("YOUR BMI IS : "+R);
    $("#b2").css("color","red");
    
}