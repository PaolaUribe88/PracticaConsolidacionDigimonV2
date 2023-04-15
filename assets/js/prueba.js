function consumoDigiApi(){
    let nombreConsulta = document.getElementById('nombreProporcionado');
    
     // extraer el nombre proporcionado
     let nombreParaConsultar = document.getElementById('nombreProporcionado').value;
    
     // configuramos el endpoint a consultar concatenando el endpoint original con el nombre proporcionado
     let endpoint = 'https://digimon-api.vercel.app/api/digimon/name/'+nombreParaConsultar;
 
     // la api de digimon entrega la información en formato array ('corchetes [] ')
     fetch(endpoint)
     .then(respuestaDigimon => respuestaDigimon.json() )
     .then(dataDigimon => {
         console.log(dataDigimon);
         console.log(dataDigimon[0].name);
 
         // proceso
         // extraer los datos para enviarlos a los respectivos elementos del DOM
         let nombreRecuperado = dataDigimon[0].name;
         let nivelRecuperado = dataDigimon[0].level;
         let imagenRecuperada = dataDigimon[0].img;
 
         // identificamos los respectivos elementos del dom, para cambiar sus propiedades mediante .innerHTML para texto, y .src para imagen
         let etiquetaNombre = document.getElementById('nombreDigimon');
         etiquetaNombre.innerHTML = nombreRecuperado;
 
         
         // identificamos los respectivos elementos del dom, para cambiar sus propiedades mediante .innerHTML para texto, y .src para imagen
         let etiquetaNivel = document.getElementById('nivelDigimon');
         etiquetaNivel.innerHTML = nivelRecuperado;
 
         // identificamos los respectivos elementos del dom, para cambiar sus propiedades mediante .innerHTML para texto, y .src para imagen
         let etiquetaImagen = document.getElementById('imagenDigimon');
         etiquetaImagen.src = imagenRecuperada;
 
      });
};