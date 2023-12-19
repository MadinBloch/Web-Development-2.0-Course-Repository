// Question-4

function ticketPrice(numberOfChild, numberOfAdults, numberOfSeniors) {
    return numberOfChild * 100 + numberOfAdults * 150 + numberOfSeniors * 120;
  }
  let childs = 2;
  let adults = 1;
  let seniors = 1;
  console.log(
    `The total ticket price is ${ticketPrice(childs, adults, seniors)}`
  );