// Question-6

function validate(name, email, age) {
    if (typeof name !== "string") return "name should be a string";
    if (typeof email !== "string") return "email should be a string";
    if (typeof age !== "number") return "age should be a number";
    return "validate successful!";
  }
  
  const username = "amit";
  const email = "amit.test@gmail.com";
  const age = 23;
  
  console.log(validate(username, email, age));