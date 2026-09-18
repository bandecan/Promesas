// 1. Base de datos simulada
const baseDeDatosClima = {
    "pereira": { temp: "21°C", estado: "Lluvioso" },
    "bogotá": { temp: "14°C", estado: "Nublado" },
    "medellín": { temp: "24°C", estado: "Soleado" },
    "cali": { temp: "28°C", estado: "Despejado" }
};

// 2. Lógica de la Promise simulando la API
function obtenerClima(ciudad) {
    return new Promise((resolve, reject) => {
        // Simulamos el retraso de la red de 2 segundos (2000 ms)
        setTimeout(() => {
            // Normalizamos el texto ingresado (minúsculas y sin espacios extra)
            const ciudadBuscada = ciudad.trim().toLowerCase();
            
            if (baseDeDatosClima[ciudadBuscada]) {
                resolve(baseDeDatosClima[ciudadBuscada]); // Promesa cumplida
            } else {
                reject(`Error: La ciudad "${ciudad}" no está registrada.`); // Promesa rechazada
            }
        }, 2000);
    });
}

// 3. Interacción con la interfaz (DOM)
const inputCiudad = document.getElementById('inputCiudad');
const btnConsultar = document.getElementById('btnConsultar');
const resultadoDiv = document.getElementById('resultado');

btnConsultar.addEventListener('click', () => {
    const ciudad = inputCiudad.value;

    // Validación si el campo está vacío
    if (ciudad === "") {
        resultadoDiv.innerHTML = "<span class='error'>Por favor escribe una ciudad.</span>";
        return;
    }

    // Muestra el estado de carga
    resultadoDiv.innerHTML = "<span>Consultando... ⏳</span>";

    // Consumo de la Promise
    obtenerClima(ciudad)
        .then((datos) => {
            // Se ejecuta si se llama a resolve()
            resultadoDiv.innerHTML = `
                <div class="success">
                    <p><strong>Temperatura:</strong> ${datos.temp}</p>
                    <p><strong>Estado:</strong> ${datos.estado}</p>
                </div>
            `;
        })
        .catch((error) => {
            // Se ejecuta si se llama a reject()
            resultadoDiv.innerHTML = `<span class="error">${error}</span>`;
        });
});