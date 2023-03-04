document.getElementById('btn-submit').addEventListener('click', function()
{
    const inputField = document.getElementById('input-gmail').value;
    const passwordField = document.getElementById('input-password').value;
    if(inputField === 'monjur@gmail.com' && passwordField === 'monjur788')
    {
        window.location.href='insidebank.html';
    }
    else{
        alert('Enter a right Gmail and password')
    }
})