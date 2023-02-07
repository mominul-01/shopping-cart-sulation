
const phonePrice = 1240;

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    
  
    const productCountitiUpdate = update('phone-input-filed', true);
 
    const newPrice = updatePrice(productCountitiUpdate,phonePrice);
 
    const setNewPrice = setPrice('phone-price', newPrice);

    calculateSubTotal();

}) 


document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const productCountitiDicrement = update('phone-input-filed', false);
    const newPrice = updatePrice(productCountitiDicrement,phonePrice);
 
    const setNewPrice = setPrice('phone-price', newPrice);
    calculateSubTotal();
})
