function nextPalindrome(number) {
    if(typeof number == 'number'){
      number = number.toString();
    }
    let splittedArray = number.split('');
    // Case 1 when all the numbers are like 9
    if(isAll9(splittedArray)){
      console.log(+number + 2);
    } else {
      findNextPalindrome(splittedArray);
      }
    }
    
     function isAll9(array) {
     for(let i = array.length-1; i >= 0 ; i--){
       return array[i] != 9 ? false : true;
     }
    }
    
    function findNextPalindrome(array){
      
    }
    
    let nextPalindromeIs = nextPalindrome(9999999);