const casePrice = 59;

document.getElementById('btn-case-plus').addEventListener('click', function () {
    
    const productCountitiUpdate = update('case-filed', true);
 
    const newPrice = updatePrice(productCountitiUpdate,casePrice);
 
    const setNewPrice = setPrice('case-price', newPrice);
    calculateSubTotal();

}) 


document.getElementById('btn-case-minus').addEventListener('click', function () {

    const productCountitiDicrement = update('case-filed', false);
    const newPrice = updatePrice(productCountitiDicrement,casePrice);
    const setNewPrice = setPrice('case-price', newPrice);
    calculateSubTotal();

})

