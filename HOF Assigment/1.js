
function ReverseString(str) {
    return str.split('').reverse().join('');
}

let input = "Harsh"

function Deplayed() {
    let revered = ReverseString(input);
    console.log("String Reverse :", revered);
}

setTimeout(Deplayed, 2000)
// console.log(Deplayed);


