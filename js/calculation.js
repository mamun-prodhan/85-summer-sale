let total = 0;

function clickhandler(target){

    // select item name and append in li
    const addedItemContainer = document.getElementById('selected-item');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    addedItemContainer.appendChild(li);
    
    // price calculation
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = (parseFloat(total) + parseFloat(price)).toFixed(2);
    document.getElementById('total-price').innerText = total;
    document.getElementById('total-amount').innerText = total;

    // purchase button enable
    const purchaseButton = document.getElementById('btn-purchase');
    if(total > 0){
        purchaseButton.removeAttribute('disabled');
        purchaseButton.classList.add('bg-[#E527B2]');
        purchaseButton.classList.add('hover:bg-[#ca0094]');
        purchaseButton.classList.remove('bg-[#ff94e3]');
    }

    // Apply button enable
    const applyButton = document.getElementById('btn-apply');
    if(total >= 200){
        applyButton.removeAttribute('disabled');
        applyButton.classList.add('bg-[#E527B2]');
        applyButton.classList.add('hover:bg-[#ca0094]');
        applyButton.classList.remove('bg-[#ff94e3]');
    }
}

function discountHandler(){
    // get the coupon code
    const couponCode = document.getElementById('coupon-field').value;
    // check the coupon code
    if(couponCode === 'SELL200'){
    // get the Previous total price
    const totalPrice = parseFloat(document.getElementById('total-price').innerText);
    // calculate discount
    const discount = ((totalPrice * 20)/100).toFixed(2);
    // set discount
    document.getElementById('discount-amount').innerText = discount;
    // calculate and set final total
    const finalGrandTotal = (totalPrice - discount).toFixed(2);
    document.getElementById('total-amount').innerText = finalGrandTotal;
    }
    else{
        alert('Invalid Coupon');
    }
}







    // console.log(parseFloat(taka).toFixed(2))