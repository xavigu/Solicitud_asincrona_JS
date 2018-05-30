//Peticion al subreddit TheSilphRoad

var req = new XMLHttpRequest();
req.open('GET', 'https://www.reddit.com/r/TheSilphRoad/.json', true);

function respuestaHTTP (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        var arrayRespuesta = JSON.parse(req.responseText);
        var datosRespuesta = arrayRespuesta["data"]["children"];
        var contador = 1;
        for (var i = 0; i < datosRespuesta.length; i++) {
          var title = datosRespuesta[i]["data"]["title"];
          if (title.indexOf("Alola") != -1){  //Busca en los titulos la palabra que corresponda y si es asi los muestra
              var divTitulares = document.getElementById("titulares");
              var parrafoNuevo = document.createElement("p");
              var textoParrafoNuevo = document.createTextNode("Titulo "+contador+ " : " +datosRespuesta[i]["data"]["title"]);
              contador++;
              parrafoNuevo.appendChild(textoParrafoNuevo);//Sobre el elemento nuevo añadimos el contenido del nodo nuevo
              divTitulares.appendChild(parrafoNuevo);
         }
        }
        //console.log(datosRespuesta);
      }
      //console.log(datosRespuesta);
    else
      console.log("Petición erronea");
   }
};

req.onreadystatechange = respuestaHTTP;
req.send(null);

