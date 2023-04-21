var a=0
var A=document.getElementById('E1')
var B=document.getElementById('E2')
var C=document.getElementById('E3')
var D=document.getElementById('F1')

function A1(){
    a++
    B.innerHTML=a
    if(a>0)
       B.style.color='lime'
       else
        if(a<0)
            B.style.color='red'
            else
               B.style.color='black'
    
}

function C1(){
    a--  
    B.innerHTML=a
    if(a<0)
       B.style.color='red'
       else
        if(a>0)
            B.style.color='lime'
            else 
                B.style.color='black'
              
}

function D1(){
    B.style.color='black'
    B.innerHTML=0
    a=0
}

A.addEventListener('click',A1)
C.addEventListener('click',C1)
D.addEventListener('click',D1)