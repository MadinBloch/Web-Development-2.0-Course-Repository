// Question 1

function discountedValue(total, discountPercentage) {
    const discountedValue = (discountPercentage / 100) * total;
    const finalPrice = total - discountedValue;
    return `The final price after discount is: ${finalPrice}`;
  }
  let totalValue = 2000;
  let discountPercentage = 20;
  
  console.log(discountedValue(totalValue, discountPercentage));