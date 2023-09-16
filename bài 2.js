const input= document.querySelector('input')
input.oninput=()=>{
    document.body.style.backgroundColor=input.value;
}

const colorBox=document.getElementsByClassName('color');
const text=document.querySelector('.copy-color textarea');
const btn=document.querySelector('button');

colorBox.addEventListener('input',function(){
    const colorVal=colorBox.value;
    text.value=colorVal;
    btn.style.background= colorVal;
})

btn.addEventListener('click',function(){
    text.select();
    document.execCommand('copy');
    setTimeout(()=>{
        window.getSelection().removeAllRanges();
    },500);
})
 