// Function to validate LinkedIn profile URLs
function isValidLinkedInURL(url) {
    // Define the regex pattern for valid LinkedIn profile URLs
    var linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the input URL against the pattern
    if (linkedinPattern.test(url)) {
      console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
      console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
  }
  
  // Test the function with some example LinkedIn profile URLs
  isValidLinkedInURL("https://www.linkedin.com/in/johndoe123"); // Valid URL
  isValidLinkedInURL("https://www.linkedin.com/in/jane_smith"); // Valid URL
  isValidLinkedInURL("https://www.linkedin.com/in/user@name"); // Invalid URL
  isValidLinkedInURL("https://www.linkedin.com/in/short"); // Invalid URL
  isValidLinkedInURL("https://www.linkedin.com/invalid-format"); // Invalid URL



  const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];


let exchangeRate = 80;

function converttoINR(PriceinUSD){
        return PriceinUSD * exchangeRate;
}

const itemIRN = items.map((item)=>({
    ...item,
    priceINR : converttoINR(item.priceUSD)
}))

console.log(itemIRN);