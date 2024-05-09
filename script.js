let userKm = document.querySelector("input#user-km");
let userAge = document.querySelector("input#user-age");

let initialPrice = userKm * 0.267113;

if(userAge<21){
    let discount = ((initialPrice / 100) * 24.552);
    let finalPrice = (initialPrice - discount).toFixed(2);
    console.log(`Vuoi percorrere ${userKm}km. Il prezzo di listino è ${initialPrice}€. Il tuo sconto è ${discount}€, quindi il prezzo totale è di ${finalPrice}€`);
} else if(userAge>63){
        let discount = ((initialPrice / 100) * 37.893);
        let finalPrice = (initialPrice - discount).toFixed(2);
        console.log(`Vuoi percorrere ${userKm}km. Il prezzo di listino è ${initialPrice}€. Il tuo sconto è ${discount}€, quindi il prezzo totale è di ${finalPrice}€`);
        } else {
            console.log(`Vuoi percorrere ${userKm}km. Non hai diritto ad alcuno sconto, quindi il prezzo totale è di ${initialPrice}€`);
        }
