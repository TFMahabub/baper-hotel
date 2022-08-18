//=========== Deposit =============
document.getElementById('deposit-button').addEventListener('click', function(){
  //deposit input-
  const inputText = document.getElementById('input-id');
        inputValueText = inputText.value;
        inputValueFloat = parseFloat(inputValueText);
  
  //Deposit number text-
  const depositNumberText = document.getElementById('deposit-num');
        depositNumber = depositNumberText.innerText;
        depositNumberFloat = parseFloat(depositNumber);
        
  //sum the deposit value-
  depositNumberText.innerText = depositNumberFloat + inputValueFloat;

  //main balance calculaton-
  const mainBalanceText = document.getElementById('main-balance');
        mainBalanceInner = mainBalanceText.innerText;
        mainBalanceFloat = parseFloat(mainBalanceInner);

  //sum main balance value-
  mainBalanceText.innerText = mainBalanceFloat + inputValueFloat;

  //to emety input field-
  inputText.value = '';
})




//=========== Widthraw-button =============
document.getElementById('widthraw-btn').addEventListener('click', function(){
  //input-value-
  const inputText = document.getElementById('input-field');
        inputValueString = inputText.value;
        inputValueFloat = parseFloat(inputValueString);
        
  //widthraw num change-
  const widthrawNumbertText = document.getElementById('widthraw-num');
        widthrawNumber = widthrawNumbertText.innerText;
        widthrawNumbertFloat = parseFloat(widthrawNumber);

  
  //main balance calculaton-
  const mainBalanceText = document.getElementById('main-balance');
        mainBalanceInner = mainBalanceText.innerText;
        mainBalanceFloat = parseFloat(mainBalanceInner);

  //eamty input value-
  inputText.value = '';

    //alert for hieghest num from main balance-
    if(inputValueFloat > mainBalanceFloat){
      alert('baper bank a ato taka nai');
      return;
    }      

  //sum widthraw numtext-
  widthrawNumbertText.innerText = inputValueFloat + widthrawNumbertFloat;

  //main balance calculation-
  mainBalanceText.innerText = mainBalanceFloat - inputValueFloat;

})
