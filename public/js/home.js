var logoLord = document.getElementById("LordImg");
var logoLordWine = document.getElementById("LordWineImg");
var lordWineFacebook = document.getElementById("lordWineFacebook");
var lordWineInstagram = document.getElementById("lordWineInstagram");
var lordWineWhatsapp = document.getElementById("lordWineWhatsapp");
var botonVinos = document.getElementById("btnVinos");
var botonCremasWhisky = document.getElementById("btnCremasWhisky");
var botonMistelas = document.getElementById("btnMistelas");
var botonZumo = document.getElementById("btnZumo");
var botonTiendasFisicas = document.getElementById("btnTiendasFisicas");
var botonCarritoCompras = document.getElementById("btnCarritoCompras");
var botonIngreso = document.getElementById("btnIngreso");

function redirigir(ruta) {
  window.location.href = ruta;
}

logoLord.addEventListener("click", () =>
  redirigir("../moduloInicio/home.html")
);
logoLord.style.cursor = "pointer";

logoLordWine.addEventListener("click", () =>
  redirigir("../moduloInicio/home.html")
);
logoLordWine.style.cursor = "pointer";

botonTiendasFisicas.addEventListener("click", () =>
  redirigir("../moduloPuntosVenta/puntosVenta.html")
);
botonTiendasFisicas.style.cursor = "pointer";

botonCarritoCompras.addEventListener("click", () =>
  redirigir("../moduloCarritoCompras/CarritoCompras.html")
);
botonCarritoCompras.style.cursor = "pointer";

botonIngreso.addEventListener("click", () =>
  redirigir("../moduloLogin/login.html")
);
botonIngreso.style.cursor = "pointer";

lordWineFacebook.addEventListener("click", () =>
  window.open("https://www.facebook.com/lordrobert.colombia", "_blank")
);
lordWineFacebook.style.cursor = "pointer";

lordWineInstagram.addEventListener("click", () =>
  window.open("https://www.instagram.com/lordwine.cop/", "_blank")
);
lordWineInstagram.style.cursor = "pointer";

lordWineWhatsapp.addEventListener("click", () =>
  window.open("https://web.whatsapp.com/", "_blank")
);
lordWineWhatsapp.style.cursor = "pointer";

botonVinos.addEventListener("click", () =>
  redirigir("../moduloInicio/vinos.html")
);

botonCremasWhisky.addEventListener("click", () =>
  redirigir("../moduloInicio/cremasWhisky.html")
);

botonMistelas.addEventListener("click", () =>
  redirigir("../moduloInicio/mistelas.html")
);

botonZumo.addEventListener("click", () =>
  redirigir("../moduloInicio/zumo.html")
);
