function canBuyBeer(age) {
  if (age >= 18 && age <= 50) return true;
  else {
    return false;
  }
}

function ageCheck(age) {
  ageInput = age;
  isOldEnough = canBuyBeer(age);
  console.log(isOldEnough);
  updateView();
}

function addAge() {
  if (ageInput === "" || ageInput === null) return;

  ages.push(ageInput);
  ageInput = "";
  console.log(ages);
  updateView();
}
