


let sidemenu = document.getElementById("sidemenu");
let menubtn = document.getElementById("menu");
let closebtn = document.getElementById("xmark")
function openmenu(){
    sidemenu.style.top ="-5px"
    menubtn.style.display = "none"
    closebtn.style.display = "block"

}
function closemenu(){
    sidemenu.style.top ="-980px"
    menubtn.style.display = "block"
    closebtn.style.display = "none"
}

var typed = new Typed(".auto-type",{
    strings:["Full Stack Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})
