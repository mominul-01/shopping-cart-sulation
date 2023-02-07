
function update(inputFieldId, isIncrease) {

    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const previousInputFieldNumber = parseInt(inputFieldString);

    let updateNumber;
    if (isIncrease === true) {
        updateNumber = previousInputFieldNumber + 1;
    }
    else {
        updateNumber = previousInputFieldNumber - 1;
    }

    inputField.value = updateNumber;
    return updateNumber;
}

function getElementValueById(elementId) {

    const elementIdField = document.getElementById(elementId);
    const elementIdFieldString = elementIdField.innerText;
    const previousElementIdFieldNumber = parseInt(elementIdFieldString);
    
    return previousElementIdFieldNumber;
    
}

function setPrice(elementId,newPrice) {
    
    const elementIdField = document.getElementById(elementId);
    elementIdField.innerText = newPrice;
}

function updatePrice(productCountity,price) {
    
    const pPrice = price;
    const totalPrice = pPrice * productCountity;

    return totalPrice;

}

function calculateSubTotal() {
     
    const currentPhoneTotal = getElementValueById('phone-price');
    const currentCaseTotal = getElementValueById('case-price');

    //calculate subtotal
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    setPrice('sub-total', currentSubTotal);

    //calculate tex
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setPrice('tax-amount', taxAmount);

    //calculate final price
    const finalTotal = currentSubTotal + taxAmount;
    setPrice('final-total', finalTotal);


}