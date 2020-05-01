// Your web app's Firebase configuration
  var firebaseConfig = {
apiKey: "AIzaSyC1CIKQiiRI_vA_2vYIj09NBz-FfbAxXx8",
  authDomain: "first-web-dae8a.firebaseapp.com",
  databaseURL: "https://first-web-dae8a.firebaseio.com",
  projectId: "first-web-dae8a",
  storageBucket: "first-web-dae8a.appspot.com",
  messagingSenderId: "1086422176606",
  appId: "1:1086422176606:web:1c16c6fd9be7a3f99df5cf",
  measurementId: "G-E01B4YC4CG"

//firebase config stuff
  };


 




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
	var auth = firebase.auth();
	
	
	function signup()
       {
		
		var email = "RJ2@gmail.com";
var password = "mypassword";


           
		//alert("Signed Up");
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
alert(password);
alert(email);
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
});
		
	}
	
	
	
	function signIn()
       {
		alert("Signed In");
		//var email = document.getElementById("email");
		//var password = document.getElementById("password");
		var email = "RJ@email.com";
var password = "mypassword";

		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});

