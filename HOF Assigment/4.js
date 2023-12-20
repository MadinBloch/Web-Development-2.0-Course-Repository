// Input array of books with author, title, and publication year
var books = [
    { author: 'John Doe', title: 'Book1', year: 2005 },
    { author: 'Jane Smith', title: 'Book2', year: 2015 },
    { author: 'Bob Johnson', title: 'Book3', year: 2012 },
    // Add more books as needed
  ];
  
  // Function to filter and capitalize author names
  function filterAndCapitalize(books) {
    return books
      .filter(book => book.year >= 2010)
      .map(book => {
        return {
          author: book.author.toUpperCase(), // Capitalize author name
          title: book.title,
          year: book.year,
        };
      });
  }
  
  // Use the function to get the result
  var filteredAndCapitalizedBooks = filterAndCapitalize(books);
  
  // Display the original and filtered/capitalized books
  console.log("Original Books:", books);
  console.log("Filtered and Capitalized Books:", filteredAndCapitalizedBooks);
  