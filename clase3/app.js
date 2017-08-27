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
    const ulList = document.getElementById('lista');

    //Crear Referencias
    const dbRefObject = firebase.database().ref().child('objeto');
    const dbRefList = firebase.database().ref().child('habilidades');

    // Sincronizar cambios objeto
    dbRefObject.on('value', snap => {
      //preObject.innerText = JSON.stringify(snap.val(),null, 3);
    });

   // Sincronizar cambios objeto habilidades para lista
    dbRefList.on('child_added', snap => {
          const li = document.createElement('li');
          li.innerText = snap.val();  //el texto
          li.id = snap.key;  //la id
          ulList.append( li );
          console.log( JSON.stringify(snap.val() ) );
          //addCommentElement(postElement, snap.key, snap.val().text, snap.val().author);
    });




      dbRefList.on('child_changed', snap => {
        const cambiarLi = document.getElementById(snap.key);
           cambiarLi.innerText = snap.val();
           console.log( JSON.stringify(snap.val() ) );
        //setCommentValues(postElement, snap.key, snap.val(), snap.val());
      });

      dbRefList.on('child_removed', snap => {
        //deleteComment(postElement, data.key);
        const removerLi = document.getElementById(snap.key);
            removerLi.remove();
            console.log( JSON.stringify(snap.val() ) );
      });


} ());