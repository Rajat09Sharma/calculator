
// alert("hello");
var displayNumber="";

for(var i=0;i<document.querySelectorAll(".key").length;i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function (){
        var innerHtml=this.textContent;
        calculator(innerHtml);
    });
}



function calculator(key){
    switch (key) {
        case "1":
            displayNumber +="1";
            onScreen(displayNumber);
            break;
    
        case "2":
            displayNumber +="2";
            onScreen(displayNumber);
            break;

        case "3":
            displayNumber += "3";
            onScreen(displayNumber);
            break;
        
        case "4":
            displayNumber +="4";
            onScreen(displayNumber);
            break;

        case "5":
            displayNumber +="5";
            onScreen(displayNumber);
            break;
        
        case "6":
            displayNumber +="6";
            onScreen(displayNumber);
            break;
            
        case "7":
            displayNumber +="7";
            onScreen(displayNumber);
            break;
        
        case "8":
            displayNumber +="8";
            onScreen(displayNumber);
            break;
            
        case "9":
            displayNumber +="9";
            onScreen(displayNumber);
            break;
            
        case "0":
            displayNumber +="0";
            onScreen(displayNumber);
            break;
            
        case "00":
            displayNumber +="00";
            onScreen(displayNumber);
            break;
            
        case "+":
            displayNumber +="+";
            onScreen(displayNumber);
            break;
            
        case "-":
            displayNumber +="-";
            onScreen(displayNumber);
            break;

        case "*":
            displayNumber +="*";
            onScreen(displayNumber);
            break;
        
        case "/":
            displayNumber +="/";
            onScreen(displayNumber);
            break;
            
        case "🔙":
            displayNumber = displayNumber.toString().slice(0,-1);
            onScreen(displayNumber);
            break;
        
        case "ans":
            displayNumber = eval(displayNumber);
            onScreen(displayNumber);
            displayNumber="";
            break;
            
        case "clear":
            displayNumber ="";
            onScreen(displayNumber);
            break;
        
        case "AC":
            displayNumber ="";
            onScreen(displayNumber);
            break;

        case "ENTER":
            displayNumber = eval(displayNumber);
            onScreen(displayNumber);
            displayNumber="";
            break;

        default:
            displayNumber ="ERROOR";
            displayNumber="";
            break;
    }
}

function onScreen(value){
document.querySelector(".display h1").textContent=value;
}