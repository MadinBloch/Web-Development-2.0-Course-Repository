// Input object with items and prices in USD
var pricesInUSD = {
    item1: 20,
    item2: 35,
    item3: 50,
    // Add more items as needed
  };
  
  // Exchange rate: 1 USD = 80 INR
  var exchangeRate = 80;
  
  // Function to convert USD to INR
  function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with prices in INR
  var pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, price]) => [item, convertToINR(price)])
  );
  
  // Display the original and converted prices
  console.log("Original Prices in USD:", pricesInUSD);
  console.log("Converted Prices in INR:", pricesInINR);
  