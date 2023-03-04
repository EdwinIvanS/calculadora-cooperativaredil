
window.addEventListener("load", function () {
  let selectProduct = document.querySelector("#linea");
  let monto = document.querySelector("#visible");
  let plazo = document.querySelector("#plazo");
  let btn = document.querySelector("#btn");

  //document.querySelector("#h2").innerHTML = e.target.value;

  selectProduct.onchange = (e) => {

    if (e.target.value != "vacio" || e.target.value != "") {
      document.querySelector(".oculto").style.display = "block";
      document.querySelector(".oculto").focus();
      //document.querySelector("#h2").innerHTML = e.target.value;
      document.getElementById("prueba").value = e.target.value;

    }

    if (e.target.value == "vacio" || e.target.value == "") {
      document.querySelector(".oculto").style.display = "none";
    }
  };

  monto.onchange = (e) => {
    if (e.target.value != ".oculto") {
      document.querySelector("#plazo").style.display = "block";
      document.querySelector("#plazo").focus();
    }
  };

  plazo.onchange = (e) => {
    if (e.target.value != ".oculto") {
      document.querySelector("#btn").style.display = "table-row-group";
      document.querySelector("#btn").focus();
    }
  };

  btn.onclick = (e) => {
    document.querySelector(".calculo").style.display = "block";
  };
});
