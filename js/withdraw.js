document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid amount');
        return
    }

    const previousWithdrawAmount = getTextElementValueById('withdraw-amount');
    const previousTotalBalance = getTextElementValueById('balance-field');

    if (newWithdrawAmount > previousTotalBalance) {
        alert('Not enough Balance');
        return
    }

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-amount', totalWithdrawAmount);

    const totalBalance = previousTotalBalance - newWithdrawAmount;
    setTextElementValueById('balance-field', totalBalance);
})