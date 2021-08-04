const buttons=document.querySelectorAll('.button');
const screen=document.querySelector('#screen');
const equals=document.getElementById('equals').addEventListener('click',function(){
    calculate();
});
let expression='';
let equation;
let result;
buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        if(button.textContent.charCodeAt(0)>=48&&button.textContent.charCodeAt(0)<=57){
            expression+=Number(button.textContent);
            screen.textContent+=button.textContent;
        }else{
            if(expression.charAt(expression.length-1)!==''&&expression.charAt(expression.length-1)!==' '){
                expression+=` ${button.textContent} `;    
                screen.textContent+=button.textContent;
            }
            
        }
    })
});

function calculate(){//An array length of 0 or an even array length are invalid
    if(expression.charAt(expression.length-1)===''||expression.charAt(expression.length-1)===' '){
        return;
    }
    equation=expression.split(' ');
    result=Number(equation[0]);
    for(let i=1;i<equation.length;i+=2){
        if(equation[i]==='÷'){
            result/=Number(equation[i+1]);
        }else if(equation[i]==='x'){
            result*=Number(equation[i+1]);
        }else if(equation[i]==='-'){
            result-=Number(equation[i+1]);
        }else if(equation[i]==='+'){
            result+=Number(equation[i+1]);
        }
    }
    clear();
    screen.textContent=result;
}

function clear(){
    screen.textContent='';
    expression='';
    equation=[];
}
