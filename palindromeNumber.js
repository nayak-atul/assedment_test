// Q. 1 Implement a function to check if a given string is a palindrome.

let str1 = "racecar";
function palindromeNumber(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true;
    } else {
        return false;
    }
}
 

console.log(palindromeNumber(str1));
