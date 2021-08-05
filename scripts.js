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
        let input=button.textContent;
        if(input.charCodeAt(0)<47||input.charCodeAt(0)>57||input==='÷'){
            if(input!=='.'&&operatorsNotRepeating()){//Check if operator will be placed next to a decimal or another operator
                input=` ${input} `;
            }else if(input==='.'&&(expression.charAt(expression.length-1)===''||expression.charAt(expression.length-1)===' ')){//Check if only decimal is pressed
                input='0.'
            }else if(expression.lastIndexOf('.')===expression.length-1||
            (expression.lastIndexOf('.')>-1&&expression.charCodeAt(expression.lastIndexOf('.')+1)>47)&&expression.lastIndexOf(' ')<expression.lastIndexOf('.')){
                input='';//Only one decimal per number seperated by operators
            }
        }
        expression+=input;
        screen.textContent+=input;
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
    result=result.toFixed(2);
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

function operatorsNotRepeating(){
    
    return expression.charAt(expression.length-1)!==' '&&expression.charAt(expression.length-1)!=='';
}

