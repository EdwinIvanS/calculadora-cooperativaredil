
window.addEventListener("load", function () {
  let selectProduct = document.querySelector("#linea");
  let plazos = document.querySelector("#plazoS");
  let monto = document.querySelector("#visible");
  let plazo = document.querySelector("#plazo");
  let btn = document.querySelector("#btn");
  let option0 = document.createElement("option");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  let option4 = document.createElement("option");
  let option5 = document.createElement("option");
  let option6 = document.createElement("option");

  //document.querySelector("#h2").innerHTML = e.target.value;

  selectProduct.onchange = (e) => {
    if (e.target.value != "vacio" || e.target.value != "") {
      document.querySelector(".oculto").style.display = "block";
      document.querySelector("#h2").innerHTML = e.target.value;
    }
    if (e.target.value == "vacio" || e.target.value == "") {
      document.querySelector(".oculto").style.display = "none";
    }

    if (
      e.target.value == "linv" || e.target.value == "rPlus" ||
      e.target.value == "unOb" || e.target.value == "Salud" ||
      e.target.value == "Emrg" || e.target.value == "cTrabajo"
    ) {
      option0.value = " - ", option0.text = "-", plazos.add(option0);
      option1.value = "12", option1.text = "12", plazos.add(option1);
      option2.value = "24", option2.text = "24", plazos.add(option2);
      option3.value = "36", option3.text = "36", plazos.add(option3);
      option4.value = "48", option4.text = "48", plazos.add(option4);
      option5.value = "60", option5.text = "60", plazos.add(option5);
      plazos.remove(option6);
    }

    if (
      e.target.value == "Pen"
    ) {
      (option0.value = " - "), (option0.text = "-"), plazos.add(option0);
      (option1.value = "12"), (option1.text = "12"), plazos.add(option1);
      (option2.value = "24"), (option2.text = "24"), plazos.add(option2);
      (option3.value = "36"), (option3.text = "36"), plazos.add(option3);
      (option4.value = "48"), (option4.text = "48"), plazos.add(option4);
      (option5.value = "60"), (option5.text = "60"), plazos.add(option5);
      (option6.value = "72"), (option6.text = "72"), plazos.add(option6);
    }

    
  };

  monto.onchange = (e) => {
    if (e.target.value != ".oculto") {
      document.querySelector("#plazo").style.display = "block";
    }
  };

  plazo.onchange = (e) => {
    if (e.target.value != ".oculto") {      
      document.querySelector("#btn").style.display = "table-row-group";
    }        
  };

  btn.onclick = (e) => {
    document.querySelector(".calculo").style.display = "block";
  };
});
