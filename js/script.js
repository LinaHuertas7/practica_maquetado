const contenedor = document.querySelector('.segunda-parte')
const contenedor2 = document.querySelector('.contenedor-remera')

listado1.forEach(mujer1 => {
    contenedor.innerHTML += `
    <div class="imagen" style="background-image: url('${mujer1.imgUrl}');">
    <a class="enlace1" href="">${mujer1.enlace}</a>
    <h2>${mujer1.title}</h2>
    <a class ="enlace2" href="">${mujer1.enlace2}</a> 
    </div>
    `
});

listado2.forEach(remera => {
    contenedor2.innerHTML += `
    <div class="remera">
    <img src='${remera.imgUrl}'>
    <h2>${remera.title}</h2>
    <p>${remera.precio}</p>
    </div>
`
});

