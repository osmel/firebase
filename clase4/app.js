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


      // Obtener elementos
      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');
      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
      const btnLogout = document.getElementById('btnLogout');

      // Añadir Evento "login" conectar
      btnLogin.addEventListener('click', e => {
        //Obtener email y pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();  //Nos devuelve todos los metodos de autenticacion que se necesitan
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));    //catch para el caso que de error la promesa
      });

      // Añadir evento crear Usuario
      btnSignUp.addEventListener('click', e => {
        // Obtener email y pass
        // TODO: comprobar que el email sea real
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message)); //catch para el caso que de error la promesa
      });

       // Desconectar
      btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
      });

      // Añadir un listener en tiempo real
       firebase.auth().onAuthStateChanged( firebaseUser => {
        if(firebaseUser) {  //si esta logueado firebaseUser devuelve un objeto 
          console.log('acaba de loguearse');
          console.log(firebaseUser);
          btnLogout.classList.remove('hide');
        } else {  ////si no esta logueado firebaseUser=null
          console.log('no logueado');
          btnLogout.classList.add('hide');
          console.log(firebaseUser);
        }    
      });

} ());