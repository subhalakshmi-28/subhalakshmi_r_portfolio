const themeBtn = document.getElementById("theme-toggle");
if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
}
if(themeBtn){
const icon = themeBtn.querySelector("i");
if(document.body.classList.contains("dark")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
}
themeBtn.addEventListener("click",()=>{
document.body.classList.toggle("dark");
if(document.body.classList.contains("dark")){
icon.classList.remove("fa-moon");
icon.classList.add("fa-sun");
localStorage.setItem("theme","dark");
}else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon");
localStorage.setItem("theme","light");
}
});
}
const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
document.querySelectorAll(".fade").forEach((el)=>{
observer.observe(el);
});
const form = document.querySelector("form");
if(form){
form.addEventListener("submit",(e)=>{
e.preventDefault();
alert("Message Sent Successfully!");
form.reset();
});
}