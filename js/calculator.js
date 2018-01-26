window.onload = function () { 
var screen; // refer to the result HTML div element tag (store the math question string or result value)
var output; // for calculating the question string, eg "1x2+2 "
var limit; // limit for calculator input to 16
var zero; // for zero button click processing
var period; // for period button click processing
var operator; //for handling operator click


screen = document.getElementById("result"); // screen variable represent the variable id result
screen.innerHTML = "";
ouput ="";

var elem = document.querySelectorAll(".num"); // get all element for this class. Also no need to create .num in css
var len = elem.length;

for(var i=0; i< len; i++){                             // add event
    elem[i].addEventListener("click", function() {           // 3 events ;as third event no need so put false
        num = this.value;                                   // get the button value of the button click
        output = screen.innerHTML += num;                  // eg if press 7, will be treated as text, will store as ouput, adding no 
        limit = output.length;

        if (limit > 16) {
            alert("You have exceeded the max no of input allowed.");
        }
    }, false);

} 
    var elemZero = document.querySelector(".zero");      // must include a .
        elemZero.addEventListener("click", function() {
            zero = this.value;

                if (screen.innerHTML === "") {
                    screen.innerHTML= zero;
                    output = screen.innerHTML;              //ouput = screen.innerHTML= zero;

                } else if (screen.innerHTML=== ouput) {
                        screen.innerHTML= screen.innerHTML + zero;
                        output = screen.innerHTML;        //ouput = screen.innerHTML += zero;
                }
        }, false);


        document.querySelector(".period").addEventListener("click", function() {
            period = this.value;

            if (screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("0.");
                output = screen.innerHTML;         //ouput = screen.innerHTML = screen.innerHTML.concat("0");
            } else if (screen.innerHTML === output) {
                screen.innerHTML = screen.innerHTML + period;
                ouput = screen.innerHTML;
            }
        }, false);

        document.querySelector("#delete").addEventListener("click", function() {
            screen.innerHTML = "";
            ouput ="";
        }, false);

       var elemOperator = document.querySelectorAll(".operator");
       var len2 = elemOperator.length;

       for(var i= 0; i < len2; i++) {
           elemOperator[i].addEventListener("click", function() {
            operate = this.value;

            if (screen.innerHTML === "") {
                screen.innerHTML = screen.innerHTML.concat("");
            } else if (ouput) {
                screen.innerHTML = screen.innerHTML.concat(operate);
                output = screen.innerHTML;
            }
            },false);
       }
        
        document.querySelector("#eqn-bg").addEventListener("click", function() {
            if (screen.innerHTML ===""){
                screen.innerHTML ="";
                ouput = "";
            } else if (screen.innerHTML === output) {
                screen.innerHTML = eval(output);

            }
        }, false);
}