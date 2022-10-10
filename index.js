let sidemenu = document.getElementById("sidemenu");
let menubtn = document.getElementById("menu");
function openmenu(){
    sidemenu.style.right ="130px"
    menubtn.style.display = "none"

}
function closemenu(){
    sidemenu.style.right ="-130px"
    menubtn.style.display = "block"
}