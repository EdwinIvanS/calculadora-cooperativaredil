window.addEventListener("load", function () {
  let selectProduct = document.querySelector("#linea");
  let monto = document.querySelector("#visible");
  let plazo = document.querySelector("#plazo");
  let btn = document.querySelector("#btn");

  selectProduct.onchange = (e) => {
    if (e.target.value != "vacio" || e.target.value != "") {
      document.querySelector(".oculto").style.display = "block";
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
