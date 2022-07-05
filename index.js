const form = document.querySelector("form");

const handleSubmit = function (event) {
  event.preventDefault();
  event.target.querySelector("#greaterThan").checked = false;
  const inputVal = event.target.querySelector("input").value;
  event.target.querySelector("#lessThan").checked = false;
  event.target.querySelector("#equalsTo").checked = false;

  if (inputVal > 2015) {
    console.log("Entered year is greater than 2015");
    event.target.querySelector("#greaterThan").checked = true;
  } else if (inputVal < 2015) {
    console.log("Entered year is less than 2015");
    event.target.querySelector("#lessThan").checked = true;
  } else {
    console.log("Entered year is 2015");
    event.target.querySelector("#equalsTo").checked = true;
  }
};

form.addEventListener("submit", handleSubmit);
