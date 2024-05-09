
const btn = document.querySelector("button");
const finalPriceHtml = document.getElementById('final-price');

function calculateDiscount(){

    const userKm = document.getElementById("user-km").value;
    const userAge = document.getElementById("user-age").value;

    const kmDisplay = document.getElementById("km-display")
    const ageDisplay = document.getElementById("age-display")


    let initialPrice = userKm * 0.267113;
    let discount;

    finalPriceHtml.innerHTML= '';
    kmDisplay.innerHTML =''
    ageDisplay.innerHTML = ''
    
    if(userAge<21){
        discount = ((initialPrice / 100) * 24.552)
    }else if (userAge>63){
        discount = ((initialPrice / 100) * 37.893);
    }else {
        discount = 0
    }
    
    let finalPrice = initialPrice - discount

    kmDisplay.innerHTML = userKm + 'km'
    ageDisplay.innerHTML = userAge + ' anni'
    finalPriceHtml.innerHTML = finalPrice.toFixed(2) + '&#8364;'

}

btn.addEventListener('click', calculateDiscount);


