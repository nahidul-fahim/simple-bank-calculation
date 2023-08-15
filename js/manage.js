// MONEY-MANAGEMENT


// DEPOSIT CALCULATION

document.getElementById('deposit-btn').addEventListener('click', function () {

    // Deposit amount from input field
    const enteredDepositAmountString = document.getElementById('deposit-enter').value;
    const enteredDepositAmount = Number(enteredDepositAmountString); // As 'enteredDepositAmountString' is an object, so I had to use 'Number()'

    // Already existing deposit amount
    const existingDepositAmountString = document.getElementById('deposit-amount');
    const existingDepositAmount = parseFloat(existingDepositAmountString.innerText);

    // Total deposit
    const totalDepositAmount = enteredDepositAmount + existingDepositAmount;

    existingDepositAmountString.innerText = totalDepositAmount;

    document.getElementById('deposit-enter').value = '';

    // Total balance calculation
    const oldBalanceString = document.getElementById('total-amount').innerText;
    const oldBalance = parseFloat(oldBalanceString);

    const newTotalBalance = oldBalance + enteredDepositAmount;

    document.getElementById('total-amount').innerText = newTotalBalance;
})



// WITHDRAW CALCULATION

document.getElementById('withdraw-btn').addEventListener('click', function () {


    // Deposit withdraw from input field
    const enteredWithdrawAmountString = document.getElementById('withdraw-enter').value;
    const enteredWithdrawAmount = Number(enteredWithdrawAmountString);

    // Already existing withdraw amount
    const existingWithdrawAmountString = document.getElementById('withdraw-amount');
    const existingWithdrawAmount = parseFloat(existingWithdrawAmountString.innerText);

    // Total withdraw
    const totalWithdrawAmount = enteredWithdrawAmount + existingWithdrawAmount;


    document.getElementById('withdraw-enter').value = '';

    // Total balance calculation
    const oldBalanceString = document.getElementById('total-amount').innerText;
    const oldBalance = parseFloat(oldBalanceString);

    // Withdraw amount > total amount
    if (enteredWithdrawAmount > oldBalance) {
        window.alert('Cannot withdraw amount more than existing amount');
        return;
    }
    
    existingWithdrawAmountString.innerText = totalWithdrawAmount;

    const newTotalBalance = oldBalance - enteredWithdrawAmount;

    document.getElementById('total-amount').innerText = newTotalBalance;
})