//button-clicked-
document.getElementById('btn-submit').addEventListener('click', function(){
  //email-value-
  const emailValue = document.getElementById('email-input').value;
  //password-value-
  const passwordValue = document.getElementById('password-input').value;
  //compare-valid-information-
  if(emailValue === 'tfmahabub@gmail.com' && passwordValue === '123456789'){
    //onclick-to another page-
    window.location.href = 'http://127.0.0.1:5500/bank-page.html';
  }
  else{
    console.log('please input valid information');
  }
})