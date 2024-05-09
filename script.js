
const btn = document.querySelector("button");
const finalPriceHtml = document.getElementById('final-price');

function calculateDiscount(){

    let userKm = document.getElementById("user-km").value;
    let userAge = document.getElementById("user-age").value;
    
    let initialPrice = userKm * 0.267113;
    let discount;
    finalPriceHtml.innerHTML= '';
    
    if(userAge<21){
        discount = ((initialPrice / 100) * 24.552)
    }else if (userAge>63){
        discount = ((initialPrice / 100) * 37.893);
    }else {
        discount = 0
    }
    
    let finalPrice = initialPrice - discount
    finalPriceHtml.innerHTML = finalPrice.toFixed(2)
}

btn.addEventListener('click', calculateDiscount);

