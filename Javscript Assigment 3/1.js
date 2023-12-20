const cars = {
    make:"Toyota",
    model : "Camry",
    year : 2022
}

function displayCarProperties(car){
    for (let property in cars) {
       console.log(`${property}:${car[property]}`);
    }
}
displayCarProperties(cars);