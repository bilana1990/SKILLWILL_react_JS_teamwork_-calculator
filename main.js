document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('bill');
    const tipButtons = document.querySelectorAll('.tip_btn');
    const customTipInput = document.createElement('input');
    const numberOfPeopleInput = document.getElementById('number_of_people');
    const tipAmountDisplay = document.getElementById('tip_account');
    const totalPerPersonDisplay = document.getElementById('total_person');
    const resetButton = document.getElementById('reset_btn');

    let billValue = 0;
    let tipPercentage = 0;
    let numberOfPeople = 1;

    customTipInput.type = 'number';
    customTipInput.placeholder = 'Custom';
    customTipInput.classList.add('custom_tip_input');
    customTipInput.style.display = 'none';

    document.querySelector('.all_tips').appendChild(customTipInput);

    const calculateTip = () => {
        if (numberOfPeople <= 0) {
            numberOfPeople = 1;
        }
        
        const tipAmount = (billValue * tipPercentage) / 100;
        const total = billValue + tipAmount;
        const tipPerPerson = tipAmount / numberOfPeople;
        const totalPerPerson = total / numberOfPeople;

        tipAmountDisplay.value = `$${tipPerPerson.toFixed(2)}`;
        totalPerPersonDisplay.value = `$${totalPerPerson.toFixed(2)}`;
    };

    billInput.addEventListener('input', (e) => {
        billValue = parseFloat(e.target.value);
        calculateTip();
    });

    tipButtons.forEach(button => {
        button.addEventListener('click', () => {
            tipButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (button.textContent === 'Custom') {
                customTipInput.style.display = 'block';
                customTipInput.addEventListener('input', (e) => {
                    tipPercentage = parseFloat(e.target.value);
                    calculateTip();
                });
            } else {
                customTipInput.style.display = 'none';
                tipPercentage = parseFloat(button.textContent);
                calculateTip();
            }
        });
    });

    numberOfPeopleInput.addEventListener('input', (e) => {
        numberOfPeople = parseFloat(e.target.value);
        calculateTip();
    });

    resetButton.addEventListener('click', () => {
        billInput.value = '';
        tipButtons.forEach(btn => btn.classList.remove('active'));
        customTipInput.value = '';
        customTipInput.style.display = 'none';
        numberOfPeopleInput.value = '';
        tipAmountDisplay.value = '$0.00';
        totalPerPersonDisplay.value = '$0.00';
        billValue = 0;
        tipPercentage = 0;
        numberOfPeople = 1;
    });
});
