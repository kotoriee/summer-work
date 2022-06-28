
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


// var check_ticket={
//     check_time:document.getElementById("fromstate").textContent,
//     fromstate:document.getElementById("fromstate").textContent,
//     tostate:document.getElementById("tostate").textContent,
//     identity:document.getElementById("fromstate").textContent
// }
var show_ticket1={
    train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket2={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket3={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket4={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket5={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket6={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket7={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket8={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket9={
     train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var show_ticket10={
    train:"",
    fromstate:"",
    tostate:"",
    fromtime:"",
    totime:"",
    time:"",
    haveticket:""
}
var buy_ticket={
    train:"",
    fromstate:"",
    tostate:"",
    time:"" ,
    ticket_person:""
}
document.getElementById("buy_button1").addEventListener("click", buy_ticket1);
function buy_ticket1() {
    buy_ticket()


}
function buy_ticket(e){
    buy_ticket.train=e.train
    buy_ticket.fromstate=e.fromstate
    buy_ticket.tostate=e.tostate
    buy_ticket.time=document.getElementById("leavedate").value
    buy_ticket.ticket_person=document.getElementById("ticket_person").value
}
function showticket1(){
    document.getElementById("train_1").textContent=show_ticket1.train
    document.getElementById("from_station1").textContent=show_ticket1.fromstate
    document.getElementById("to_station1").textContent=show_ticket1.tostate
    document.getElementById("from_time1").textContent=show_ticket1.fromtime
    document.getElementById("to_time1").textContent=show_ticket1.totime
    document.getElementById("time1").textContent=show_ticket1.time
    document.getElementById("have_ticket1").textContent=show_ticket1.haveticket
}
function showticket2(){
    document.getElementById("train_2").textContent=show_ticket2.train
    document.getElementById("from_station2").textContent=show_ticket2.fromstate
    document.getElementById("to_station2").textContent=show_ticket2.tostate
    document.getElementById("from_time2").textContent=show_ticket2.fromtime
    document.getElementById("to_time2").textContent=show_ticket2.totime
    document.getElementById("time2").textContent=show_ticket2.time
    document.getElementById("have_ticket2").textContent=show_ticket2.haveticket
}
function showticket3(){
    document.getElementById("train_3").textContent=show_ticket3.train
    document.getElementById("from_station3").textContent=show_ticket3.fromstate
    document.getElementById("to_station3").textContent=show_ticket3.tostate
    document.getElementById("from_time3").textContent=show_ticket3.fromtime
    document.getElementById("to_time3").textContent=show_ticket3.totime
    document.getElementById("time3").textContent=show_ticket3.time
    document.getElementById("have_ticket3").textContent=show_ticket3.haveticket
}
function showticket4(){
    document.getElementById("train_4").textContent=show_ticket4.train
    document.getElementById("from_station4").textContent=show_ticket4.fromstate
    document.getElementById("to_station4").textContent=show_ticket4.tostate
    document.getElementById("from_time4").textContent=show_ticket4.fromtime
    document.getElementById("to_time4").textContent=show_ticket4.totime
    document.getElementById("time4").textContent=show_ticket4.time
    document.getElementById("have_ticket4").textContent=show_ticket4.haveticket
}
function showticket5(){
    document.getElementById("train_5").textContent=show_ticket5.train
    document.getElementById("from_station5").textContent=show_ticket5.fromstate
    document.getElementById("to_station5").textContent=show_ticket5.tostate
    document.getElementById("from_time5").textContent=show_ticket5.fromtime
    document.getElementById("to_time5").textContent=show_ticket5.totime
    document.getElementById("time5").textContent=show_ticket5.time
    document.getElementById("have_ticket5").textContent=show_ticket5.haveticket
}
function showticket6(){
    document.getElementById("train_6").textContent=show_ticket6.train
    document.getElementById("from_station6").textContent=show_ticket6.fromstate
    document.getElementById("to_station6").textContent=show_ticket6.tostate
    document.getElementById("from_time6").textContent=show_ticket6.fromtime
    document.getElementById("to_time6").textContent=show_ticket6.totime
    document.getElementById("time6").textContent=show_ticket6.time
    document.getElementById("have_ticket6").textContent=show_ticket6.haveticket
}
function showticket7(){
    document.getElementById("train_7").textContent=show_ticket7.train
    document.getElementById("from_station7").textContent=show_ticket7.fromstate
    document.getElementById("to_station7").textContent=show_ticket7.tostate
    document.getElementById("from_time7").textContent=show_ticket7.fromtime
    document.getElementById("to_time7").textContent=show_ticket7.totime
    document.getElementById("time7").textContent=show_ticket7.time
    document.getElementById("have_ticket7").textContent=show_ticket7.haveticket
}
function showticket8(){
    document.getElementById("train_8").textContent=show_ticket8.train
    document.getElementById("from_station8").textContent=show_ticket8.fromstate
    document.getElementById("to_station8").textContent=show_ticket8.tostate
    document.getElementById("from_time8").textContent=show_ticket8.fromtime
    document.getElementById("to_time8").textContent=show_ticket8.totime
    document.getElementById("time8").textContent=show_ticket8.time
    document.getElementById("have_ticket8").textContent=show_ticket8.haveticket
}
function showticket9(){
    document.getElementById("train_9").textContent=show_ticket9.train
    document.getElementById("from_station9").textContent=show_ticket9.fromstate
    document.getElementById("to_station9").textContent=show_ticket9.tostate
    document.getElementById("from_time9").textContent=show_ticket9.fromtime
    document.getElementById("to_time9").textContent=show_ticket9.totime
    document.getElementById("time9").textContent=show_ticket9.time
    document.getElementById("have_ticket9").textContent=show_ticket9.haveticket
}
function showticket10(){
    document.getElementById("train_10").textContent=show_ticket10.train
    document.getElementById("from_station10").textContent=show_ticket10.fromstate
    document.getElementById("to_station10").textContent=show_ticket10.tostate
    document.getElementById("from_time10").textContent=show_ticket10.fromtime
    document.getElementById("to_time10").textContent=show_ticket10.totime
    document.getElementById("time10").textContent=show_ticket10.time
    document.getElementById("have_ticket10").textContent=show_ticket10.haveticket
}

