// Function to check if a given URL is valid
function isValidURL(url) {
    // Define the regex pattern for valid URLs
    var urlPattern = /^(http:\/\/|https:\/\/)[\w\d!@#$%^&*()_+-=<>?./:;,'"]+[.][a-zA-Z]+$/;
  
    // Test the input URL against the pattern
    if (urlPattern.test(url)) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is not valid.");
    }
  }
  
  // Test the function with some example URLs
  isValidURL("http://www.example.com"); // Valid URL
  isValidURL("https://sub.domain.com"); // Valid URL
  isValidURL("ftp://invalid-url"); // Invalid URL
  