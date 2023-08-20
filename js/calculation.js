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


}







    // console.log(parseFloat(taka).toFixed(2))