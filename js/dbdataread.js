// Get a reference to the database service
var database = firebase.database();
const muyBajo = document.getElementById("muyBajo");
const bajo = document.getElementById("Bajo");
const medio = document.getElementById("Medio");
const alto = document.getElementById("Alto");

const mainContainer = document.getElementById("main-container");

var uref = database.ref("users");
uref.on("value", function (snapshot) {
  snapshot.forEach(function (childSnapshot) {
    var childData = childSnapshot.val();
    console.log(childData);

    var card = document.createElement("div");
    card.setAttribute("class", "o-card");

    var userTitle = document.createElement("h2");
    userTitle.setAttribute("class", "o-username");
    userTitle.setAttribute("id", "usertitle");

    var nivelMuyBajo = document.createElement("h4");
    nivelMuyBajo.setAttribute("class", "o-data-text");
    nivelMuyBajo.setAttribute("id", "muyBajo");

    var nivelBajo = document.createElement("h4");
    nivelBajo.setAttribute("class", "o-data-text");
    nivelBajo.setAttribute("id", "Bajo");

    var nivelMedio = document.createElement("h4");
    nivelMedio.setAttribute("class", "o-data-text");
    nivelMedio.setAttribute("id", "Medio");

    var nivelAlto = document.createElement("h4");
    nivelAlto.setAttribute("class", "o-data-text");
    nivelAlto.setAttribute("id", "Alto");

    card.appendChild(userTitle);
    card.appendChild(nivelMuyBajo);
    card.appendChild(nivelBajo);
    card.appendChild(nivelMedio);
    card.appendChild(nivelAlto);

    mainContainer.appendChild(card);

    userTitle.innerHTML = childData.correo;
    nivelMuyBajo.innerHTML = `<strong>Nivel muy bajo:</strong> <br> ${childData.dados}`;
    nivelBajo.innerHTML = `<strong>Nivel bajo:</strong> <br> ${childData.turno}`;
    nivelMedio.innerHTML = `<strong>Nivel medio:</strong> <br> ${childData.lupa}`;
    nivelAlto.innerHTML = `<strong>Nivel alto:</strong> <br> ${childData.pista}`;
  });
});
