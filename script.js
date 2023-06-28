import Adress from "../adress.js";
import Citizen from "../citizen.js";

const menuDiv = document.getElementById("menuDiv");
const menuList = document.getElementById("menuList");

let menuCounter = 0;

menuDiv.addEventListener("click", () => {
  if (menuCounter === 0) {
    menuList.style.display = "block";
    menuDiv.style.backgroundColor = "red";
    ++menuCounter;
  } else {
    menuList.style.display = "none";
    menuDiv.style.backgroundColor = "blue";
    --menuCounter;
  }
});

const main = document.createElement("main");
const footer = document.getElementById("footer");
document.body.insertBefore(main, footer);
main.id = "main";

const createButton = document.createElement("button");
createButton.textContent = "Create";
main.appendChild(createButton);
createButton.id = "createButtn";

let formCounter = 0;
const form = document.createElement("form");
main.appendChild(form);

function createForm() {
  if (formCounter === 0) {
    form.innerHTML = `
  <p>Enter name:<p/>
  <input type="text" id="citizenName" required>
  <p>Enter last name:<p/>
  <input type="text" id="citizenLastName" required>
  <p>Enter age:<p/>
  <input type="number" id="citizenAge" required>`;

    const createCitizenButtn = document.createElement("button");
    form.appendChild(createCitizenButtn);
    createCitizenButtn.type = "submit";
    createCitizenButtn.textContent = "Create Citizen";
    ++formCounter;

    createCitizenButtn.addEventListener("click", (e) => {
      e.preventDefault();
      let userName = document.getElementById("citizenName").value;
      let userLastName = document.getElementById("citizenLastName").value;
      let userAge = document.getElementById("citizenAge").value;

      const citizen1 = new Citizen(userName, userLastName, userAge);

      form.innerHTML = `
      <p>Enter country:<p/>
      <input type="text" id="citizenCountry" required>
      <p>Enter city:<p/>
      <input type="text" id="citizenCity" required>
      <p>Enter street:<p/>
      <input type="text" id="citizenStreet" required>
      <p>Enter house number:<p/>
      <input type="number" id="citizenHouseNumber" required>`;

      const registerCitizenButtn = document.createElement("button");
      form.appendChild(registerCitizenButtn);
      registerCitizenButtn.type = "submit";
      registerCitizenButtn.textContent = "Register Citizen";

      registerCitizenButtn.addEventListener("click", (e) => {
        e.preventDefault();
        let userCountry = document.getElementById("citizenCountry").value;
        let userCity = document.getElementById("citizenCity").value;
        let userStreet = document.getElementById("citizenStreet").value;
        let userHouseNum = document.getElementById("citizenHouseNumber").value;

        const address1 = new Adress(
          userCountry,
          userCity,
          userStreet,
          userHouseNum
        );
        citizen1.register(address1);

        alert("Citizen is registered");
        console.log(citizen1);
        form.innerHTML = "";
      });
    });
  } else {
    form.innerHTML = "";
    --formCounter;
  }
}

createButton.addEventListener("click", createForm);
