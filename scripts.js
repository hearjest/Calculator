const buttons=document.querySelectorAll('.calcButton');
const screen=document.querySelector('#screen');
buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        screen.textContent+=button.textContent;
    })
})