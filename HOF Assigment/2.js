function generateRandom(){
    return Math.floor(Math.random() * 1000)
}

let CountDown = 3;

function countdown(){
    if(CountDown > 0){
        console.log("Time Remaining: " +CountDown + " seconds");
        CountDown--;
        setTimeout(countdown,1000)
    }else{
        let random = generateRandom();
        console.log("Generating random is",random);
    }
}
countdown();