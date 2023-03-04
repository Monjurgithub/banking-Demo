document.getElementById('btn-withdraw').addEventListener('click', function()
{
    const withdrawFeild = document.getElementById('withdrawFeild');
    const withdraw = parseFloat(withdrawFeild.value);
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawFeild = parseFloat(totalWithdraw.innerText);

    totalWithdraw.innerText = withdraw + totalWithdrawFeild;

    const mainBalance = document.getElementById('main-balance');
    const mainbln = parseFloat(mainBalance.innerText);
    mainBalance.innerText = mainbln - withdraw;
    withdrawFeild.value ='';
    

})