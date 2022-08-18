
//-------------Deposit button--------------
document.getElementById('deposit-button').addEventListener('click', function(){
  //deposit-input-value-
  const input = document.getElementById('input-id');
  inputValue = input.value;
  inputValueFloat = parseFloat(inputValue);

  //display deposit balance value-
  const depositBalance = document.getElementById('deposit-num');
  depositBalanceInner = depositBalance.innerText;
  depositBalanceFloat = parseFloat(depositBalanceInner);

  //main balance value-
  const mainBalance = document.getElementById('main-balance');
  mainBalanceInner = mainBalance.innerText;
  mainBalanceFloat = parseFloat(mainBalanceInner);

  //------------main calculation---------------
  //deposit balance-
  depositBalance.innerText = depositBalanceFloat + inputValueFloat;
  //main balance-
  mainBalance.innerText = mainBalanceFloat + inputValueFloat;

  //input value emtey-
  input.value = '';
})



//---------------//Widthraw button----------------
document.getElementById('widthraw-button').addEventListener('click', function(){
  //widthraw input value-
  const input = document.getElementById('input-field');
  inputValue = input.value;
  inputValueFloat = parseFloat(inputValue);
  
  //display widthraw balance-
  const widthrawBalance = document.getElementById('widthraw-num');
  widthrawBalanceInnerText = widthrawBalance.innerText;
  widthrawBalanceFloat = parseFloat(widthrawBalanceInnerText);
  
  //main balance value-
  const mainBalance = document.getElementById('main-balance');
  mainBalanceInner = mainBalance.innerText;
  mainBalanceFloat = parseFloat(mainBalanceInner);

  //eamty input value-
  input.value = '';

  //condition for error balance-
  if(mainBalanceFloat < inputValueFloat){
    alert('baper bank e ato taka nai');
    return;
  }

  //-------main calculation---------
  //display widthraw balance-
  widthrawBalance.innerText = inputValueFloat + widthrawBalanceFloat;

  //main balance-
  mainBalance.innerText = mainBalanceFloat - inputValue;
})