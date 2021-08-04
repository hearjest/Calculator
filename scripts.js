const buttons=document.querySelectorAll('.button');
const screen=document.querySelector('#screen');
const equals=document.getElementById('equals').addEventListener('click',function(){
    calculate();
});
document.getElementById('clear').addEventListener('click',function(){
    clear();
});
document.getElementById('delete').addEventListener('click',function(){
    deleteThing();
});

let expression='';
let equation;
let result;

buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        if(button.textContent.charCodeAt(0)>=48&&button.textContent.charCodeAt(0)<=57){//Is a number
            expression+=Number(button.textContent);
        }else{
            if(expression.charAt(expression.length-1)!==''&&expression.charAt(expression.length-1)!==' '){//If expression is empty or there is already an operator
                expression+=` ${button.textContent} `;    
            }
        }
        screen.textContent+=button.textContent;
    })
});

function calculate(){//An array length of 0 or an even array length are invalid
    if(expression.charAt(expression.length-1)===''||expression.charAt(expression.length-1)===' '){
        return;
    }
    equation=expression.split(' ');
    result=Number(equation[0]);
    let num;
    for(let i=1;i<equation.length;i+=2){
        num=Number(equation[i+1]);
        if(equation[i]==='÷'){
            if(num!==0){
                result/=num;    
            }else{
                result=0;
            }
        }else if(equation[i]==='x'){
            result*=num;
        }else if(equation[i]==='-'){
            result-=num;
        }else if(equation[i]==='+'){
            result+=num;
        }
    }
    clear();
    screen.textContent=result;
    result='';//For when somebody presses clear before inputting
}

function clear(){
    screen.textContent='';
    expression=''+result;
    equation=[];
}

function deleteThing(){
    if(expression.charAt(expression.length-1)===' '){
        expression=expression.slice(0,expression.length-1-2);
    }else if(expression.charCodeAt(expression.length-1)>=48&&expression.charCodeAt(expression.length-1)<=57||expression.charAt(expression.length-1)==='.'){
        expression=expression.slice(0,expression.length-1);
    }
    screen.textContent=expression;
}
