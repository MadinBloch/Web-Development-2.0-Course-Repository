// Question-9

function findFirstString(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") return `Found the first string ${arr[i]}`;
    }
  }
  const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];
  
  console.log(findFirstString(arr));