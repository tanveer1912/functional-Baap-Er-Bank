document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if (isNaN(newDepositAmount)) {
        alert('Please enter a valid amount');
        return
    }

    const previousDepositAmount = getTextElementValueById('deposit-amount');
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-amount', totalDepositAmount);
    const previousTotalBalance = getTextElementValueById('balance-field');
    const totalBalance = previousTotalBalance + newDepositAmount;
    setTextElementValueById('balance-field', totalBalance)
})