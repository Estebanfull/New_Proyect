var logoLord=document.getElementById("LordImg");
var logoLordWine=document.getElementById("LordWineImg");
var lordWineFacebook=document.getElementById("lordWineFacebook");
var lordWineInstagram=document.getElementById("lordWineInstagram");
var lordWineWhatsapp=document.getElementById("lordWineWhatsapp");
var botonVinos=document.getElementById("btnVinos");
var botonCremasWhisky=document.getElementById("btnCremasWhisky");
var botonMistelas=document.getElementById("btnMistelas");
var botonZumo=document.getElementById("btnZumo");

logoLord.addEventListener("click", cargarHomeLord);
function cargarHomeLord()
{
    window.location.href="home.html";
}
logoLord.style.cursor="pointer"

logoLordWine.addEventListener("click", cargarHomeLordWine);
function cargarHomeLordWine()
{
    window.location.href="home.html";
}
logoLordWine.style.cursor="pointer"

lordWineFacebook.addEventListener("click", cargarFacebook);
function cargarFacebook()
{
    window.open("https://www.facebook.com/lordrobert.colombia", "_blank");
}
lordWineFacebook.style.cursor="pointer";

lordWineInstagram.addEventListener("click", cargarInstagram);
function cargarInstagram()
{
    window.open("https://www.instagram.com/lordwine.cop/", "_blank");
}
lordWineInstagram.style.cursor="pointer";

lordWineWhatsapp.addEventListener("click", cargarWhatsapp);
function cargarWhatsapp()
{
    window.open("https://web.whatsapp.com/", "_blank");
}
lordWineWhatsapp.style.cursor="pointer";

botonVinos.addEventListener("click", cargarVistaVinos);
function cargarVistaVinos()
{
    window.location.href = "vinos.html";
}

botonCremasWhisky.addEventListener("click", cargarVistaCremasWhisky);
function cargarVistaCremasWhisky()
{
    window.location.href="cremasWhisky.html";
}

botonMistelas.addEventListener("click", cargarVistaMistelas);
function cargarVistaMistelas()
{
    window.location.href="mistelas.html";
}

botonZumo.addEventListener("click", cargarVistaZumo);
function cargarVistaZumo()
{
    window.location.href="zumo.html"
}