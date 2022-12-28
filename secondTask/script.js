// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.If the function is passed a valid PIN string, return true, else return false.

//1 
function validatePIN (pin) {
    if((pin.length===4 || pin.length===6) && [...pin].every(el => '0123456789'.includes(el))){
      return true
    }else{
      return false
    }
}

// 2 oneliner
const validatePINo = (pin) => (pin.length===4 || pin.length===6) && [...pin].every(el => '0123456789'.includes(el)) ? true : false;
