/* Objeto Calculadora, almacena todas las funciones requeridos para el uso de la calculadora Web
	Para cada boton se han definido dos eventos: 
		Al oprimir el boton se disminuye el tamaño de la imagen y se ejecuta el codigo especifico para el boton
		Al soltar el boton se regresa la imagen al tamaño original
*/
var Calculadora = {
	init: function(){
		var valor1 = "0"			// Variable que almacena el primer operando 
		var valor2 = "0"			// Variable que almacena el segundo operando
		var operacion = ""			// Variable que almacena la operacin que se va a ejecutar

		  //variables para almacenar los nombres de los botones
				
		var display = document.getElementById('display')
		var on = document.getElementById('on')
		var sign = document.getElementById('sign')
		var raiz = document.getElementById('raiz')
		var dividido = document.getElementById('dividido')
		var siete = document.getElementById('siete')
		var ocho = document.getElementById('ocho')
		var nueve = document.getElementById('nueve')
		var por = document.getElementById('por')
		var cuatro = document.getElementById('cuatro')
		var cinco = document.getElementById('cinco')
		var seis = document.getElementById('seis')
		var menos = document.getElementById('menos')
		var uno = document.getElementById('uno')
		var dos = document.getElementById('dos')
		var tres = document.getElementById('tres')
		var cero = document.getElementById('cero')
		var punto = document.getElementById('punto')
		var igual = document.getElementById('igual')
		var mas = document.getElementById('mas')

	},
	presionarOn: function(){			//Funcion ejecutada al presionar el boton ON, inicializa las variables
		on.style="height: 60px";
		display.textContent="0";
		valor1= "0"
		valor2 = "0"
		operacion =""
	},
	presionarSign: function(){			//Funcion ejecutada al presionar el boton de la operacion cambio de SIGNO
		sign.style="height: 60px";
		if(display.textContent!="0"){
			display.textContent*=-1;
		}
	},
	presionarRaiz: function(){			//Funcion ejecutada al presionar el boton de la operacionRAIZ
		raiz.style="height: 60px";
	},
	presionarDiv: function(){			//Funcion ejecutada al presionar el boton de la operacion DIVIDIDO
		dividido.style="height: 60px";
		valor1 = display.textContent
		operacion = "/";
		display.textContent = "";	
	},
	presionarPor: function(){			//Funcion ejecutada al presionar el boton de la operacion MULTIPLICACION
		por.style="height: 60px";
		valor1 = display.textContent
		operacion = "*";
		display.textContent = "";		
	},
	presionarMenos: function(){			//Funcion ejecutada al presionar el boton de la operacion RESTA
		menos.style="height: 60px";
		valor1 = display.textContent
		operacion = "-";
		display.textContent = "";
	},
	presionarMas: function(){			//Funcion ejecutada al presionar el boton de la operacion SUMA
		mas.style="height: 98%";
		valor1 = display.textContent
		operacion = "+";
		display.textContent = "";
	},
	presionarIgual: function(){			//Funcion ejecutada al presionar el boton de la operacion IGUAL
		igual.style="height: 60px";
		valor2 = display.textContent
		var resultado = 0;
		switch(operacion){				//Dependiendo la operación se ejecuta la funcion matematica seleccionada
			case "+":
			  resultado = parseFloat(valor1) + parseFloat(valor2);
			  break;
			case "-":
				resultado = parseFloat(valor1) - parseFloat(valor2);
				break;
			case "*":
			  resultado = parseFloat(valor1) * parseFloat(valor2);
			  break;
			case "/":
			  resultado = parseFloat(valor1) / parseFloat(valor2);
			  break;
		}
		display.textContent = String(resultado).substr(0,8);		// Se restringe el resultado a maximo ocho caracteres

	},
	presionarPunto: function(){			//Funcion ejecutada al presionar el boton PUNTO
		punto.style="height: 60px";;
		texto = display.textContent
		if(texto.indexOf(".")== -1){	//Si el contenido de display ya tenia un punto, no se coloca de nuevo
			display.textContent+=".";
		}
	},

// Funciones al pulsar las teclas numericas, todas ejecutan la misma funcion presionarNumero, que realiza el cambio de imagen y muestra el valor en display.
// Se envian dos valores: La posición en el Array de botones y el valor a mostar en display

	presionarNueve: function(){			//Funcion ejecutada al presionar el boton 9
		Calculadora.presionarNumero(6, 9);
	},
	presionarOcho: function(){			//Funcion ejecutada al presionar el boton 8
		Calculadora.presionarNumero(5, 8);
	},
	presionarSiete: function(){			//Funcion ejecutada al presionar el boton 7
		Calculadora.presionarNumero(4, 7);  
	},
	presionarSeis: function(){			//Funcion ejecutada al presionar el boton 6
		Calculadora.presionarNumero(10, 6);
	},
	presionarCinco: function(){			//Funcion ejecutada al presionar el boton 5
		Calculadora.presionarNumero(9, 5);
	},	
	presionarCuatro: function(){		//Funcion ejecutada al presionar el boton 4
		Calculadora.presionarNumero(8, 4);
	},
	presionarTres: function(){			//Funcion ejecutada al presionar el boton 3
		Calculadora.presionarNumero(14, 3);
	},
	presionarDos: function(){			//Funcion ejecutada al presionar el boton 2
		Calculadora.presionarNumero(13, 2);
	},
	presionarUno: function(){			//Funcion ejecutada al presionar el boton 1
		Calculadora.presionarNumero(12, 1);
	},	
	presionarCero: function(){			//Funcion ejecutada al presionar el boton 0
		Calculadora.presionarNumero(15, 0);
	},	

	presionarNumero: function(id, num){			// Funcion que cambia el tamaño de la tecla pulsada y muestra el numero en pantalla 
		var tecla = document.querySelectorAll('.tecla')  //EL primer parametro que revibe es la pocision en el Array del query selector de la clase tecla
		tecla[id].style="height: 60px";
		if(display.textContent == ""){			// Verifica si el contenido de display es vacio,  situacion que se presenta cuando se ha oprimido 
			display.textContent="0"				// antes una tecla de operacion (mas, por, menos, resta). Si es vacio coloca un cero
		}
		if(display.firstChild.length < 8){		// Si la pantalla tiene mas de ocho caracteres no se añade el numero 
			if(display.textContent=="0"){		// Si display == 0, se reemplaza el contenido por el numero asignado 
				display.textContent=num;
			}else{
				display.textContent+=num;		
			}
		}
	},
	

// Funciones que se ejecutan al soltar la tecla, vuelven a su tamaño original

	soltarOn: function(){					//Funcion ejecutada al soltar el boton ON
		on.style="height: 62.91px";
	},	
	soltarSign: function(){					//Funcion ejecutada al soltar el boton SIGNO
		sign.style="height: 62.91px";
	},
	soltarRaiz: function(){					//Funcion ejecutada al soltar el boton RAIZ
		raiz.style="height: 62.91px";
	},
	soltarDiv: function(){					//Funcion ejecutada al soltar el boton DIVIDIDO
		dividido.style="height: 62.91px";
	},	
	soltarPor: function(){					//Funcion ejecutada al soltar el boton POR
		por.style="height: 62.91px";
	},
	soltarMenos: function(){				//Funcion ejecutada al soltar el boton MENOS
		menos.style="height: 62.91px";
	},	
	soltarMas: function(){					//Funcion ejecutada al soltar el boton MAS
		mas.style="height: 100%";
	},	
	soltarIgual: function(){				//Funcion ejecutada al soltar el boton IGUAL
		igual.style="height: 62.91px";
	},

	soltarPunto: function(){				//Funcion ejecutada al soltar el boton PUNTO
		punto.style="height: 62.91px";
	},
	soltarNueve: function(){				//Funcion ejecutada al soltar el boton 9
		nueve.style="height: 62.91px";
	},
	soltarOcho: function(){					//Funcion ejecutada al soltar el boton 8
		ocho.style="height: 62.91px";
	},
	soltarSiete: function(){				//Funcion ejecutada al soltar el boton 7
		siete.style="height: 62.91px";
	},
	soltarSeis: function(){					//Funcion ejecutada al soltar el boton 6
		seis.style="height: 62.91px";
	},
	soltarCinco: function(){				//Funcion ejecutada al soltar el boton 5
		cinco.style="height: 62.91px";
	},
	soltarCuatro: function(){				//Funcion ejecutada al soltar el boton 4
		cuatro.style="height: 62.91px";
	},
	soltarTres: function(){					//Funcion ejecutada al soltar el boton 3
		tres.style="height: 62.91px";
	},
	soltarDos: function(){					//Funcion ejecutada al soltar el boton 2
		dos.style="height: 62.91px";
	},
	soltarUno: function(){					//Funcion ejecutada al soltar el boton 1
		uno.style="height: 62.91px";
	},
	soltarCero: function(){					//Funcion ejecutada al soltar el boton 0
		cero.style="height: 62.91px";
	}
	
}

// Listeners para los eventos cuando una tecla es pulsada ó soltada

document.getElementById('on').addEventListener("mousedown", Calculadora.presionarOn)
document.getElementById('sign').addEventListener("mousedown", Calculadora.presionarSign)
document.getElementById('raiz').addEventListener("mousedown", Calculadora.presionarRaiz)
document.getElementById('dividido').addEventListener("mousedown", Calculadora.presionarDiv)
document.getElementById('por').addEventListener("mousedown", Calculadora.presionarPor)
document.getElementById('menos').addEventListener("mousedown", Calculadora.presionarMenos)
document.getElementById('mas').addEventListener("mousedown", Calculadora.presionarMas)
document.getElementById('igual').addEventListener("mousedown", Calculadora.presionarIgual)
document.getElementById('punto').addEventListener("mousedown", Calculadora.presionarPunto)
document.getElementById('siete').addEventListener("mousedown", Calculadora.presionarSiete)
document.getElementById('ocho').addEventListener("mousedown", Calculadora.presionarOcho)
document.getElementById('nueve').addEventListener("mousedown", Calculadora.presionarNueve)
document.getElementById('cuatro').addEventListener("mousedown", Calculadora.presionarCuatro)
document.getElementById('cinco').addEventListener("mousedown", Calculadora.presionarCinco)
document.getElementById('seis').addEventListener("mousedown", Calculadora.presionarSeis)
document.getElementById('uno').addEventListener("mousedown", Calculadora.presionarUno)
document.getElementById('dos').addEventListener("mousedown", Calculadora.presionarDos)
document.getElementById('tres').addEventListener("mousedown", Calculadora.presionarTres)
document.getElementById('cero').addEventListener("mousedown", Calculadora.presionarCero)

document.getElementById('on').addEventListener("mouseup", Calculadora.soltarOn)
document.getElementById('sign').addEventListener("mouseup", Calculadora.soltarSign)
document.getElementById('raiz').addEventListener("mouseup", Calculadora.soltarRaiz)
document.getElementById('dividido').addEventListener("mouseup", Calculadora.soltarDiv)
document.getElementById('por').addEventListener("mouseup", Calculadora.soltarPor)
document.getElementById('menos').addEventListener("mouseup", Calculadora.soltarMenos)
document.getElementById('mas').addEventListener("mouseup", Calculadora.soltarMas)
document.getElementById('igual').addEventListener("mouseup", Calculadora.soltarIgual)
document.getElementById('punto').addEventListener("mouseup", Calculadora.soltarPunto)
document.getElementById('siete').addEventListener("mouseup", Calculadora.soltarSiete)
document.getElementById('ocho').addEventListener("mouseup", Calculadora.soltarOcho)
document.getElementById('nueve').addEventListener("mouseup", Calculadora.soltarNueve)
document.getElementById('cuatro').addEventListener("mouseup", Calculadora.soltarCuatro)
document.getElementById('cinco').addEventListener("mouseup", Calculadora.soltarCinco)
document.getElementById('seis').addEventListener("mouseup", Calculadora.soltarSeis)
document.getElementById('uno').addEventListener("mouseup", Calculadora.soltarUno)
document.getElementById('dos').addEventListener("mouseup", Calculadora.soltarDos)
document.getElementById('tres').addEventListener("mouseup", Calculadora.soltarTres)
document.getElementById('cero').addEventListener("mouseup", Calculadora.soltarCero)
