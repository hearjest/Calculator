const buttons=document.querySelectorAll('.button');
const screen=document.querySelector('#screen');
const equals=document.getElementById('equals').addEventListener('click',function(){
    calculate();
});
let expression=[];
buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        screen.textContent+=button.textContent;
        if(button.textContent.charCodeAt(0)>=48&&button.textContent.charCodeAt(0)<=57){
            expression+=Number(button.textContent);
        }else{
            expression+=` ${button.textContent} `;
        }
    })
});

function calculate(){//An array length of 0 or an even array length means
    console.log(expression.split(' '));
}

function clear(){
    screen.textContent='';
    expression=[];
}
