//button-clicked-
document.getElementById('btn-submit').addEventListener('click', function(){
  //email-value-
  const emailValue = document.getElementById('email-input').value;
  //password-value-
  const passwordValue = document.getElementById('password-input').value;
  //compare-valid-information-
  if(emailValue === 'rjmahabub543@gmail.com' && passwordValue === '123456789'){
    console.log('login successfull')
  }
  else{
    console.log('please input valid information');
  }
})