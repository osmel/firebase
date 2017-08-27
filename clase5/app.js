(function() {

  //Inicializar Firebase
    var config = {
      apiKey: "AIzaSyCsAmvWsIzFXc-MBYXOsx7wD94UHWRTU6U",
      authDomain: "miproyecto-21356.firebaseapp.com",
      databaseURL: "https://miproyecto-21356.firebaseio.com",
      projectId: "miproyecto-21356",
      storageBucket: "miproyecto-21356.appspot.com",
      messagingSenderId: "653347283129"
    };
    firebase.initializeApp(config);


     // Obtener Elementos
      var uploader = document.getElementById('uploader');
      var fileButton = document.getElementById('fileButton');
     
      // Vigilar selección archivo. Evento change de file(para detectar cambios de fichero)
      fileButton.addEventListener('change', function(e) {
        //Obtener archivo
        var file = e.target.files[0];
        
        // Crear un storage ref
        //hacemos referencia a  "firebase.storage()" 
        //e indicamos la estructura q queremos que tenga ref('mis_fotos/' + file.name). Q se meta en la carpeta(mis_fotos/) tal fichero
        var storageRef = firebase.storage().ref('mis_fotos/' + file.name);
        
        // Subir archivo(utilizamos metodo put para subir el archivo)
        var task = storageRef.put(file);

        // Actualizar barra progreso, en funcion de la subida de archivo (task)
        task.on('state_changed',
          function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
          },
          function error(err) {
          },
          function complete() {
          }
        )
      });


} ());