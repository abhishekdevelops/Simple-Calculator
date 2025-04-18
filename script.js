const input=document.getElementById("number");
const equalBtn=document.getElementById("equal");

const addBtn=document.getElementById("add");
const subBtn=document.getElementById("sub");
const multiBtn=document.getElementById("multi");
const divBtn=document.getElementById("div");

let firstNum=null;
let operator=null;

addBtn.addEventListener("click",() => {
firstNum=parseFloat(input.value);
operator="+";
input.value="";
})

subBtn.addEventListener("click",() => {
    firstNum=parseFloat(input.value);
    operator="-";
    input.value="";
    })

    multiBtn.addEventListener("click",() => {
        firstNum=parseFloat(input.value);
        operator="*";
        input.value="";
        })

        divBtn.addEventListener("click",() => {
            firstNum=parseFloat(input.value);
            operator="/";
            input.value="";
            })       
            equalBtn.addEventListener("click", () => {
                const secondNum = parseFloat(input.value);
                let result = 0;
              
                if (firstNum !== null && !isNaN(secondNum)) {
                  if (operator === "+") {
                    result = firstNum + secondNum;
                  } else if (operator === "-") {
                    result = firstNum - secondNum;
                  } else if (operator === "*") {
                    result = firstNum * secondNum;
                  } else if (operator === "/") {
                    result = firstNum / secondNum;
                  }
              
                  input.value = `${firstNum} ${operator} ${secondNum} = ${result}`;
  } else {
    input.value = "Error";
  }
              });
              

            