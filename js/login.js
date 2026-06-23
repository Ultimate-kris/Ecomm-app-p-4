let signInRadio=document.getElementById("signInBtn");
let signUpRadio=document.getElementById("signUpBtn");

let signUp=document.querySelector(".signUp");
let signIn=document.querySelector(".signIn");

signInRadio.addEventListener("change",()=>{
signIn.style.display="block"
signUp.style.display="none"
})
signUpRadio.addEventListener("change",()=>{
    signUp.style.display="block"
    signIn.style.display="none"
})

let infoSignIn=document.getElementById("infoSignIn");
let infoSignUp=document.getElementById("infoSignUp");

infoSignIn.addEventListener("click",()=>{
signIn.style.display="block"
signUp.style.display="none"
signInRadio.checked=true;
})

infoSignUp.addEventListener("click",()=>{
      signUp.style.display="block"
    signIn.style.display="none"
    signUpRadio.checked=true;
})
