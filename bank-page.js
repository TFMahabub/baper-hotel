//------------------Function-----------------

//function for input value-
function getInputValueFloat(inputId){
  const inputValueText = document.getElementById(inputId);
  const inputValue = inputValueText.value;
  const inputValueFloat = parseFloat(inputValue);
  inputValueText.value = '';

  return inputValueFloat;
}

//function for displat innerText-
function getElementInnerTextFloat(displatNumTextId){
  const displayNumText = document.getElementById(displatNumTextId);
  const displayNumInner = displayNumText.innerText;
  const displayNumFloat = parseFloat(displayNumInner);

  return displayNumFloat;
}

//function for set display innerText-
function setDisplayValue(displayNumId, valueToSet){
  const displayNum = document.getElementById(displayNumId);
  displayNum.innerText = valueToSet;
}


//--------------calculation---------------
//deposit-button-
document.getElementById('deposit-button').addEventListener('click', function(){
  //set variable to input box-
  const inputValueFloat = getInputValueFloat('input-id');
  const displayInnerText = getElementInnerTextFloat('deposit-num');
  const displayMainBalance = getElementInnerTextFloat('main-balance');

  //condition for input emtey-
  if(isNaN(inputValueFloat)){
    return alert('Please Enter a number');
  }

  //calculation for sum withdraw value-
  const sumTheValue = inputValueFloat + displayInnerText;
  setDisplayValue('deposit-num', sumTheValue);

   //calculation add main balance-
  const sumDisplayValue = displayMainBalance + inputValueFloat;
  setDisplayValue('main-balance', sumDisplayValue);
})

//widthraw-button-
document.getElementById('widthraw-button').addEventListener('click', function(){
  //set variable to input box-
  const inputValueFloat = getInputValueFloat('input-field');
  const displayInnerText = getElementInnerTextFloat('widthraw-num');
  const displayMainBalance = getElementInnerTextFloat('main-balance'); 

  //condition for input emtey-
  if(isNaN(inputValueFloat)){
    return alert('Please Enter a number');
  }

  //condition for to much money widthraw-
  else if(inputValueFloat > displayMainBalance){
    return alert('Bap er Bank a ato taka nai');
  }

  //calculation for sum withdraw value-
  const sumTheValue = displayInnerText + inputValueFloat;
  setDisplayValue('widthraw-num', sumTheValue);

  //calculation remain main balance-
  const devidedDisplayMainBalance = displayMainBalance - inputValueFloat;
  setDisplayValue('main-balance', devidedDisplayMainBalance);
})