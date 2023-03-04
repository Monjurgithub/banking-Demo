document.getElementById('btn-deposit').addEventListener('click', function()
{
    const depositFeild = document.getElementById('depostFeild');
    const depositeValue = depositFeild.value;
    const deposit = parseFloat(depositeValue);






    const totaldepositeFeild = document.getElementById('total-deposit');
    const total= totaldepositeFeild.innerText;
    const totalDeposit = parseFloat(total);
    const totalDepositNew = totalDeposit+deposit;
    totaldepositeFeild.innerText = totalDepositNew;
    

    const mainBalance = document.getElementById('main-balance');
    const balanceFeild = mainBalance.innerText;
    const balance = parseFloat(balanceFeild);
    const mainbalance = balance + deposit;
    mainBalance.innerText = mainbalance;
    depositFeild.value ='';
    
    
})