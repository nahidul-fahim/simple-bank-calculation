// LOGIN PAGE

const submitButton = document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    
    if(email === "nahidulfahim@gmail.com" && password === "fahim123"){
        window.location.href = 'bank-page.html';
    }
    else {
        window.alert('Invalid User')
    }
})