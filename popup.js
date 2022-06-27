
document.getElementById("checkticket").addEventListener("click", check_ticket);
function check_ticket() {
    document.getElementById("check").style.display="none"
    document.getElementById("checkresult").style.display="block"
}

document.getElementById("return_check").addEventListener("click", return_check);
function return_check() {
    document.getElementById("checkresult").style.display="none"
    document.getElementById("check").style.display="block"
    document.getElementById("showmore").style.display="block"
    document.getElementById("morepart").style.display="none"

}

document.getElementById("showmore").addEventListener("click", show_more);
function show_more() {
    document.getElementById("showmore").style.display="none"
    document.getElementById("morepart").style.display="block"
}