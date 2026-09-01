updateView();

function updateView() {
  let ageList = "";

  for (let i = 0; i < ages.length; i++) {
    let age = ages[i];
    let message = "";

    if (canBuyBeer(age)) {
      message = "Du kan kjøpe øl! 🍺";
    } else {
      message = "Du kan ikke kjøpe øl. 😢";
    }

    ageList += /*HTML*/ `<li>Alder: ${age} - ${message}</li>`;
  }

  app.innerHTML = /*HTML*/ `
  <h1>Aldersjekk</h1>
  <input type="number" value="${ageInput}" onchange="ageCheck(this.value); addAge();" placeholder="Hvor gammel er du?" />
  <ul>${ageList}</ul>
  `;
}
