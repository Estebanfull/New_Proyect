document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const usuariosValidos = {
        admin: "1234",
        Jdavid: "1112",
        Kdavid: "1113",
      };

      if (usuariosValidos[username] && usuariosValidos[username] === password) {
        alert("¡Ingreso exitoso!");
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
});
