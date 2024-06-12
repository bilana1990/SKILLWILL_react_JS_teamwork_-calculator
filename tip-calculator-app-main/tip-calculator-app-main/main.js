const billAmount = parseFloat(document.getElementById('bill').value);
const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
const numOfPeople = parseInt(document.getElementById('num-of-people').value);
const resetButton = document.querySelector('.reset');
const resultDiv = document.getElementById('result');
    


function setTip(percentage) {
    document.getElementById('tip-percentage').value = percentage;
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const numOfPeople = parseInt(document.getElementById('num-of-people').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numOfPeople) || numOfPeople <= 0) {
        document.getElementById('result').innerHTML = `<p>Please enter valid inputs.</p>`;
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100));
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numOfPeople;
    
    
    document.getElementById('result').innerHTML = `<p>Tip Amount per Person: $${(tipAmount / numOfPeople).toFixed(2)}</p><p>Total Amount per Person: $${amountPerPerson.toFixed(2)}</p>`;

}


resetButton.addEventListener("click",function(){
    resultDiv.innerHTML = '<p>Tip Amount per person: $0</p><p>Total Amount per person: $0</p>'
    document.getElementById("bill").value = ''
    document.getElementById("tip-percentage").value = ''
    document.getElementById("num-of-people").value = ''
})


