const initialCoords = [3.437281, -76.521774];

const map = L.map("map").setView(initialCoords, 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const tiendas = [
  {
    nombre: "Popayán",
    coords: [2.440546, -76.605317],
    direccion: "Cra 5 # 5-51, Centro, Popayán, Cauca",
  },
  {
    nombre: "Cali",
    coords: [3.437281, -76.521774],
    direccion: "Cl. 19 #21-91 a 21-1, Cali, Valle del Cauca",
  },
  {
    nombre: "Palmira",
    coords: [3.530907, -76.296922],
    direccion: "Cl. 34 #26-2 a 26-96, Palmira, Valle del Cauca",
  },
  {
    nombre: "Ginebra",
    coords: [3.725009, -76.266778],
    direccion: "Cl. 8 #2-83 a 2-1, Ginebra, Valle del Cauca",
  },
];

const storeList = document.getElementById("store-list");
tiendas.forEach((tienda) => {
  const marker = L.marker(tienda.coords)
    .addTo(map)
    .bindPopup(`<b>${tienda.nombre}</b><br>${tienda.direccion}`);

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `<b>${tienda.nombre}</b><br>${tienda.direccion}`;
  li.addEventListener("click", () => {
    map.setView(tienda.coords, 14);
    marker.openPopup();
  });
  storeList.appendChild(li);
});
