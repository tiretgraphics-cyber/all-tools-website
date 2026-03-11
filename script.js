function calculateAge(){
let birthdate=document.getElementById("birthdate").value;
let birth=new Date(birthdate);
let age=new Date().getFullYear()-birth.getFullYear();
document.getElementById("ageResult").innerText="Age: "+age;
}

function countWords(){
let text=document.getElementById("text").value;
let words=text.trim().split(/\s+/).length;
document.getElementById("wordResult").innerText="Words: "+words;
}

function generatePassword(){
let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let pass="";
for(let i=0;i<10;i++){
pass+=chars.charAt(Math.floor(Math.random()*chars.length));
}
document.getElementById("password").innerText=pass;
}