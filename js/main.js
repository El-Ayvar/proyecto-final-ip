const btnSearch = document.querySelector("#search_btn");
const resultado = document.querySelector("#resultado");
const loader = document.querySelector("#loader");

document.getElementById("ip_input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("search_btn").click();
    }
})

const searchIp = () => {
    const ipName = document.querySelector("#ip_input").value.trim();
    const ipInfo = document.querySelector("#ip_info");

    if (!ipName) {
        ipInfo.innerHTML = `<p>Por favor ingresa una IP valida</p>`;
        return;
    }

    const apiKey = "b24e9e00a57f764a73496dcf4d24d105";
    const url = `https://iplocate.io/api/lookup/${ipName}?apikey=${apiKey}`;
    loader.classList.remove("hidden");
    resultado.innerHTML = "";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al buscar la IP");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            loader.classList.add("hidden");
            showIp(data);
        })
        .catch(error => {
            loader.classList.add("hidden");
            ipInfo.innerHTML = `<p id="mensaje_error">${error.message}</p>`;
        });
};

function showIp(ip) {
    const ipInfo = document.querySelector("#ip_info");


    ipInfo.innerHTML = `
    <main id="box_informacion">
        <h2 id="title_ip">Tu IP es: ${ip.ip.toUpperCase()}</h2>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>País:</strong> ${ip.country}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Cod, País:</strong> ${ip.country_code}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Continente:</strong> ${ip.continent}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Horario:</strong> ${ip.time_zone}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Tiene una latitud de:</strong> ${ip.latitude}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Tiene una longitud de:</strong> ${ip.longitude}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Codigo Postal:</strong> ${ip.postal_code}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Red:</strong> ${ip.network}</div>
            <div class="resuls"><img class="escopeta" src="assets/img/escopeta.png" alt="imagen de una escopeta"><strong>Ciudad:</strong> ${ip.city}</div>
    </main>
    `;
}

btnSearch.addEventListener("click", searchIp);

//const btnSearch = document.querySelector("#search-btn");
//const resultado = document.querySelector('#resultado');
//const loader = document.querySelector('#loader');
//
//const searchIp = () => {
//    const ipName = document.querySelector("#ip-input").value.trim();
//    if (!ipName) {
//        document.querySelector("#ip-info").innerHTML = `<p>Por favor ingresa una IP`;
//        return;
//    }
//
//    const Key = `b24e9e00a57f764a73496dcf4d24d105`;
//    const url = `https://iplocate.io/api/lookup/${ipName}&apikey=${Key}`;
//
//    //const response = fetch('https://iplocate.io/api/lookup/17.253.0.0?apikey=b24e9e00a57f764a73496dcf4d24d105');
//    //const url = response.json();
////
//    //console.log(url);
//        
//    fetch(url, {
//        method: "GET",
//        headers: {
//            "accept": "application/json",
//            "Authorization": "Bearer b24e9e00a57f764a73496dcf4d24d105"
//        }
//    })
//
//    .then(response => {
//        if (!response.ok) {
//            throw new Error("Error al buscar la IP");
//        }
//        return response.json();
//    })
//    .then(data => {
//        if (data.results.length === 0) {
//            throw new Error("No se encontraron resultados");
//        }
//        showIp(data.results[0]);
//    })
//    .catch(error => {
//        document.querySelector("#pelicula-info").innerHTML = `<p id="mensaje-error">${error.message}</p>`;
//    });
//};
//
//function showIp(ip) {
//
//    resultado.classList.remove('hidden');
//    loader.classList.remove('hidden');
//    resultado.innerHTML = '';
//
//    setTimeout(() => {
//        loader.classList.add('hidden');
//
//        const ipInfo = document.querySelector("ip-info")
//
//        ipInfo.innerHTML = `
//            <h2 id="title-movie">${ip.ip.toUpperCase()}</h2>
//            <main> <div> <strong>Country:</strong> ${ip.ip.toUpperCase()} </div>
//        `;
//    }, 1500);
//}
//btnSearch.addEventListener("click", searchIp);