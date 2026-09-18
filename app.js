
const baseDeDatosClima = {
    "pereira": { temp: "21°C", estado: "Lluvioso" },
    "bogotá": { temp: "14°C", estado: "Nublado" },
    "medellín": { temp: "24°C", estado: "Soleado" },
    "cali": { temp: "28°C", estado: "Despejado" }
};


function obtenerClima(ciudad) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
           
            const ciudadBuscada = ciudad.trim().toLowerCase();
            
            if (baseDeDatosClima[ciudadBuscada]) {
                resolve(baseDeDatosClima[ciudadBuscada]);
            } else {
                reject(`Error: La ciudad "${ciudad}" no está registrada.`); 
            }
        }, 2000);
    });
}


const inputCiudad = document.getElementById('inputCiudad');
const btnConsultar = document.getElementById('btnConsultar');
const resultadoDiv = document.getElementById('resultado');

btnConsultar.addEventListener('click', () => {
    const ciudad = inputCiudad.value;

   
    if (ciudad === "") {
        resultadoDiv.innerHTML = "<span class='error'>Por favor escribe una ciudad.</span>";
        return;
    }

    
    resultadoDiv.innerHTML = "<span>Consultando... ⏳</span>";

   
    obtenerClima(ciudad)
        .then((datos) => {
            if(.) {
                
            }else {
                
            }
            resultadoDiv.innerHTML = `
                <div class="success">
                    <p><strong>Temperatura:</strong> ${datos.temp}</p>
                    <p><strong>Estado:</strong> ${datos.estado}</p>
                </div>
            `;
        })
        .catch((error) => {
            
            resultadoDiv.innerHTML = `<span class="error">${error}</span>`;
        });
});
