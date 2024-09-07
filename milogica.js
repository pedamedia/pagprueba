
let imagen;

let texto="";

const params = new URLSearchParams(window.location.search);
const nuevoTexto = params.get('texto');

// Si el parámetro "texto" existe en la URL, cambiar el valor de la variable
if (nuevoTexto) {
    texto = nuevoTexto;
}


function sendRequest() {

    // Obtener el valor del campo de texto
    const name = document.getElementById('idusuario').value;
    const password = document.getElementById('idclave').value;
    const email = document.getElementById('idcorreo').value;

    // Crear una solicitud POST al backend
    fetch('https://paginotacode-141848962847.us-central1.run.app', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ 
                                usuario: name,
                                clave: password,
                                correo: email
                            })
    }   
    ).then(response => response.json()
    ).then(data => {
        // Mostrar la respuesta del backend en el elemento con id 'response'
        //document.getElementById('idrespuesta').innerText = data;

        if (Array.isArray(data)) {
            data.forEach(item => {
                console.log('Elemento de la lista:', item);
                // Puedes hacer algo con cada `item`, como agregarlo a la interfaz de usuario
            });

            document.getElementById('idrespuesta').innerText = "Tu nombre es: "+data[0]+
                                                                "\ntu clave es;"+data[1]+
                                                                "\ntu correo es: "+data[2];
        } else {
            console.error('La respuesta no es una lista.');
        }
    }
    ).catch(error => {
        console.error('Error:', error);
    });

    
}

function agrandar(){

    imagen.style.width = "500px" ;
    imagen.style.height = "500px" ;
    
}

function empequenecer(){

    imagen.style.width = "200px" ;
    imagen.style.height = "200px" ;
}

let form;
let campo;

function prueba(a){

    console.log("SI LLEGA AL POST")

    if(a.checkValidity()){

        alert("Funcionó");
    }
}

function otro(event){

    event.preventDefault();

    alert("Registro exitoso");

    sendRequest();

}

//---------------------------------------------------------------------------------------------


function ejecutar_cargado(){

    //document.getElementById('name').value = texto;

    document.getElementById('formulario').onsubmit = otro;

    console.log("si está funcionando")
}

window.onload = ejecutar_cargado;



