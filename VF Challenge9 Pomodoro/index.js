
	var minutes = 00; 
	var secondes = 00;
	var interval = 0; 


		function affichage(nb) { // fonction pour intégrer un 0 aux chiffres < 10
		    if (nb < 10) {
		        nb = "0"+nb;
		    }
		    return nb;
		}

$(document).ready(function () {
	
	$("#recup5").click(function(){ // au clic sur le bouton 5 minutes on affiche : 05:00 dans le navigateur
			 minutes=5;
			 secondes=0;
			 $("#secondes").html(affichage(secondes)); 
			 $("#minutes").html(affichage(minutes)); 
	 });

	$("#travail25").click(function(){ // au clic sur le bouton 25 minutes on affiche : 25:00 dans le navigateur
			 minutes=25;
			 secondes=0;
			 $("#secondes").html(affichage(secondes)); 
			 $("#minutes").html(affichage(minutes)); 
	 });

	$("#start").click(function(){  // si les mn sont différentes de 0, alors on diminue de 1 la valeur des minutes et on lance le décompte des secondes 
		   	if(minutes!=0){
		   		minutes--;
		   		secondes=60;
		   	  interval=setInterval(function(){  	
				secondes--;

				if(secondes<0){   // si seconde<0 alors on passe à 59 secondes 
			   		minutes--;
			   		secondes=59;
		   		}

		   		if (minutes == 0) {   // si minutes == 0 et si secondes == 0 alors on arrête le décompte et on affiche une alerte
	         		if (secondes == 0) { 
 			             clearInterval(interval); 
 			             secondes=0;         
 			            console.log(secondes); 
			             minutes=0;       
			             console.log(minutes);
			             alert("Temps écoulé!!!"); 
		    		}
			   	}

				$("#secondes").html(affichage(secondes)); 
				$("#minutes").html(affichage(minutes)); 
								
			  }, 1000); //on exécute ce code toutes les secondes
		   	}
	});
	

	$("#reset").click(function(){   // au clic sur reset on arrete le décompte et on affiche 00:00
 			clearInterval(interval);	
 			 minutes=0;
			 secondes=0;
			 $("#secondes").html(affichage(secondes)); // on affiche les secondes
			 $("#minutes").html(affichage(minutes)); // on affiche les minutes
	 });

	
	$("#pause").click(function(){ // au clic sur le bouton pause on arrête le décompte
	 	    	clearInterval(interval); // on arrete le setInterval
	 	     $("#secondes").html(affichage(secondes)); // on affiche les secondes
			 $("#minutes").html(affichage(minutes)); // on affiche les minutes
 	});


 });



			

















