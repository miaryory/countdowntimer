function validation(){
    select("#event-input .error-message").style.display="none";
    select("#date-input .error-message").style.display="none";

    if( select("#event-input input").value.length ==  0){
        select("#event-input .error-message").style.display="block";
    }
    if( select("#date-input input").value ==  ""){
        select("#date-input .error-message").style.display="block";
    }
    else{
        startTimer();
    }
}


function startTimer(){
    let date=new Date(select("#date").value);
    //let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    select(".countdown").style.display="grid";
    select(".event-name").style.display="block";
    select(".event-name").innerText=select("#event-input input").value;
    // select(".remaining").innerText="Remaining time unitl: "+ date.getDay()+"-"+months[date.getMonth()]+"-"+date.getFullYear();
    select("form").classList.add("hide");

    let countDownDate = new Date(select("#date").value+"T"+select("#time").value).getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

        let now = new Date().getTime();
        let distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        let months=Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        let days = Math.floor(distance % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24) );
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        select(".months h1").innerText=months;
        select(".days h1").innerText=days;
        select(".hours h1").innerText=hours;
        select(".minutes h1").innerText=minutes;
        select(".seconds h1").innerText=seconds;
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);

    
}

function select(element){
    return document.querySelector(element);
}