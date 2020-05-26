// Objeto Calculadora, almacena todas las funciones requeridos para el uso de la calculadora Web
var Calculadora = {
	init: function(){
		  //variables para almacenar las teclas
		var valor1 = "0"
		var valor2 = "0"
		var operacion = ""
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
	presionarOn: function(){
		on.style="height: 60px";
		display.textContent="0";
		valor1= "0"
		valor2 = "0"
		operacion =""
	},
	presionarSign: function(){
		sign.style="height: 60px";
		if(display.textContent!="0"){
			display.textContent*=-1;
		}
	},
	presionarRaiz: function(){
		raiz.style="height: 60px";
	},

	presionarDiv: function(){
		dividido.style="height: 60px";
		valor1 = display.textContent
		operacion = "/";
		Calculadora.limpiar();	
	},


	presionarPor: function(){
		por.style="height: 60px";
		valor1 = display.textContent
		operacion = "*";
		Calculadora.limpiar();		
	},

	presionarMenos: function(){
		menos.style="height: 60px";
		valor1 = display.textContent
		operacion = "-";
		Calculadora.limpiar();
	},

	presionarMas: function(){
		mas.style="height: 98%";
		valor1 = display.textContent
		operacion = "+";
		Calculadora.limpiar();
	},

	presionarIgual: function(){
		igual.style="height: 60px";
		valor2 = display.textContent
		var resultado = 0;
		switch(operacion){
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
		console.log(String(resultado).substr(0,8))
		display.textContent = String(resultado).substr(0,8);

	},
	presionarPunto: function(){
		punto.style="height: 60px";;
		texto = display.textContent
		if(texto.indexOf(".")== -1){
			display.textContent+=".";
		}
	},
	presionarSiete: function(){
		Calculadora.presionarNumero(4, 7);
	},
	presionarOcho: function(){
		Calculadora.presionarNumero(5, 8);
	},
	presionarNueve: function(){
		Calculadora.presionarNumero(6, 9);
	},
	presionarCuatro: function(){
		Calculadora.presionarNumero(8, 4);
	},
	presionarCinco: function(){
		Calculadora.presionarNumero(9, 5);
	},
	presionarSeis: function(){
		Calculadora.presionarNumero(10, 6);
	},
	presionarUno: function(){
		Calculadora.presionarNumero(12, 1);
	},	
	presionarDos: function(){
		Calculadora.presionarNumero(13, 2);
	},
	presionarTres: function(){
		Calculadora.presionarNumero(14, 3);
	},
	presionarCero: function(){
		Calculadora.presionarNumero(15, 0);
	},	
	presionarNumero: function(id, num){
		var tecla = document.querySelectorAll('.tecla')
		tecla[id].style="height: 60px";
		if(display.textContent == ""){
			display.textContent="0"
		}
		if(display.firstChild.length < 8){
			if(display.textContent=="0"){
				display.textContent="";
			}
		display.textContent+=num;
		}
		console.log(tecla[id])
	},
	
	limpiar: function (){
		display.textContent = "";
	},
	
	
	
	soltarOn: function(){
		on.style="height: 62.91px";
	},	
	soltarSign: function(){
		sign.style="height: 62.91px";
	},
	soltarRaiz: function(){
		raiz.style="height: 62.91px";
	},
	soltarDiv: function(){
		dividido.style="height: 62.91px";
	},	
	soltarPor: function(){
		por.style="height: 62.91px";
	},
	soltarMenos: function(){
		menos.style="height: 62.91px";
	},	
	soltarMas: function(){
		mas.style="height: 100%";
	},	
	soltarIgual: function(){
		igual.style="height: 62.91px";
	},

	soltarPunto: function(){
		punto.style="height: 62.91px";
	},
	
	
	soltarSiete: function(){
		siete.style="height: 62.91px";
	},
	soltarOcho: function(){
		ocho.style="height: 62.91px";
	},
	soltarNueve: function(){
		nueve.style="height: 62.91px";
	},
	soltarCuatro: function(){
		cuatro.style="height: 62.91px";
	},
	soltarCinco: function(){
		cinco.style="height: 62.91px";
	},
	soltarSeis: function(){
		seis.style="height: 62.91px";
	},
	soltarUno: function(){
		uno.style="height: 62.91px";
	},
	soltarDos: function(){
		dos.style="height: 62.91px";
	},
	soltarTres: function(){
		tres.style="height: 62.91px";
	},
	soltarCero: function(){
		cero.style="height: 62.91px";
	}
	
}

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
