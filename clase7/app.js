(function() {

  //Inicializar Firebase
    var config = {
      apiKey: "AIzaSyCsAmvWsIzFXc-MBYXOsx7wD94UHWRTU6U",
      authDomain: "miproyecto-21356.firebaseapp.com",
      databaseURL: "https://miproyecto-21356.firebaseio.com",
      projectId: "miproyecto-21356",
      storageBucket: "",
      messagingSenderId: "653347283129"
    };
    firebase.initializeApp(config);


    //Obtener elementos
    const preObject = document.getElementById('objeto');

    //Crear Referencias
    const dbRefObject = firebase.database().ref().child('objeto');

    // Sincronizar cambios objeto
    dbRefObject.on('value', snap => {
      preObject.innerText = JSON.stringify(snap.val(),null, 3);
    });


} ());