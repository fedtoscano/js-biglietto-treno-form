const btn = document.querySelector("button");

//* Creo la funzione per calcolare lo sconto
function calculateDiscount(){
    //* Seleziono gli elementi del DOM
    const userKm = document.getElementById("user-km").value;
    const userAge = document.getElementById("user-age").value;
    const kmDisplay = document.getElementById("km-display")
    const ageDisplay = document.getElementById("age-display")
    const finalPriceHtml = document.getElementById('final-price');

    //* Stabilisco il prezzo iniziale
    let initialPrice = userKm * 0.267113;

    //* Calcolo lo sconto
    let discount;
    if(userAge<21){
        discount = ((initialPrice / 100) * 24.552)
    }else if (userAge>63){
        discount = ((initialPrice / 100) * 37.893);
    }else {
        discount = 0
    }
    
    //* Calcolo il prezzo finale (prezzo iniziale - sconto)
    let finalPrice = initialPrice - discount
    
    //* Aggiorno il DOM
    finalPriceHtml.innerHTML= '';
    kmDisplay.innerHTML =''
    ageDisplay.innerHTML = ''
    kmDisplay.innerHTML = userKm + 'km'
    ageDisplay.innerHTML = userAge + ' anni'
    finalPriceHtml.innerHTML = finalPrice.toFixed(2) + '&#8364;'
}

//* Applico la funzione al click
btn.addEventListener('click', calculateDiscount);


