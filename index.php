<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Monopoly</title>
	<link rel="stylesheet" type="text/css" href="css/estilos.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600|Open+Sans" rel="stylesheet"> 
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		
	<meta name="description" content="">
	<meta name="author" content="satur">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	
</head>
<body onkeydown="controlAS(event);">	
	<div id="contenedor">
		<div id="izquierda">Has click en el boton "tirar dados" para empezar
		<div id="derecha">
			<br>
			<div id="arriba">
				<canvas id="canvas" width="710" height="410">Tu navegador no soporta HTML5</canvas>
			</div>
			<div id="abajo">
				<button onclick="tirarDados()">TirarDados</button><br><br>				
			</div>
	</div>
	<div class="overlay" id="overlay">
			<div class="popup" id="popup">
				<h3>ADIVINANZAS</h3>
				<h4>Responde correctamente las siguientes acertijos:</h4>

				<form method="get" name="quiz1">

					<div class="contenedor-inputs">
						 <legend>¿Qué cosa es, que a su paso el hierro oxida, el acero se rompe y la carne se pudre?:</legend>
					 
						 	<label>El agua</label>
						 	<input class="cajas" type="radio" name="pregunta1" id="agua" value="A"/>
						 	<br><br>
						 	<label>La muerte</label>
						 	<input class="cajas" type="radio" name="pregunta1" id="muerte" value="B"/>
						 	<br><br>
						 	<label>El tiempo</label>
						 	<input class="cajas" type="radio" name="pregunta1" id="tiempo" value="C"/>
						 	<br>
						 	<br>
						 <legend>¿Qué cosa es, que la hacen cantando, la compran llorando y la usan sin saber?:</legend>
						 
						 	<label>El corazon</label>
						 	<input class="cajas" type="radio" name="pregunta2" id="corazon" value="A"/>
						 	<br><br>
						 	<label>Un ataud</label>
						 	<input class="cajas" type="radio" name="pregunta2" id="ataud" value="B"/>
						 	<br><br>
						 	<label>Un seguro de vidas</label>
						 	<input class="cajas" type="radio" name="pregunta2" id="seguro" value="C"/>
						 	<br>
						 	<br>
						 	 <legend>Va de pared a pared, pero siempre está mojada.:</legend><br>
						 	<label>La lengua</label>
						 	<input class="cajas" type="radio" name="pregunta3" id="lengua" value="A"/>
						 	<br><br>
						 	<label>Una brocha</label>
						 	<input class="cajas" type="radio" name="pregunta3" id="brocha" value="B"/>
						 	<br><br>
						 	<label>Una mosca</label>
						 	<input class="cajas" type="radio" name="pregunta3" id="mosca" value="C"/>

					</div>	
					<br>				
					<input type="submit" class="btn-submit" value="enviar" onclick="return operacion1()" name="">
				</form>
				
			</div>
		</div>
		<div class="overlay" id="overlay2">
			<div class="popup" id="popup2">

				<h3>MATEMATICAS!!!!</h3>
				<form method="get" name="quiz2">
					<div class="contenedor-inputs">
						<p class="yes">SI</p>
						   <p>A+A=40</p>
						   <p>B+A=30</p>
						   <p>B+C=80</p>
						   <label>C+A= <input type="text" class="entrada" name="problema1" placeholder="?" 
						   	onkeypress="numeros(event)" maxlength="5"
						   	onPaste="copipaste(event)" ondrag="arrastrar(event)" ondragenter="arrastrar(event)" ondragstart="arrastrar(event)" 
						   	ondrop="arrastrar(event)"></label>
						<p class="yes">SI </p>
						   <p>1=6</p>
						   <p>2=12</p>
						   <p>3=36</p>
						   <label>4= <input type="text" class="entrada" name="problema2" placeholder="?"
						   	onkeypress="numeros(event)" maxlength="5"
						   	onPaste="copipaste(event)" ondrag="arrastrar(event)" ondragenter="arrastrar(event)" ondragstart="arrastrar(event)" 
						   	ondrop="arrastrar(event)"></label>
						<p class="yes">SI</p>
						   <label class="keke">3+3x3+3= <input type="text" class="entrada" name="problema3" placeholder="?"
						   	onkeypress="numeros(event)" maxlength="5"
						   	onPaste="copipaste(event)" ondrag="arrastrar(event)" ondragenter="arrastrar(event)" ondragstart="arrastrar(event)" 
						   	ondrop="arrastrar(event)"> </label>
					</div>					
					<input type="submit" class="btn-submit" value="enviar" onclick="return operacion2()" name="">
				</form>		
			</div>	
		</div>
		<div class="overlay" id="PPT">
			<div class="popup" id="popPPT">
				<form method="get" name="FPPT">
					<table>
						<tr>
							<td>Contrincante</td>
							<td></td>
							<td></td>
							<td>Jugador</td>	
						</tr>
						<tr>
							<td><img src="img/papel.png" ></td>
							<td>Eleccion del enemigo</td>
							<td>Eleccion del jugador</td>
							<td><img src="img/papel.png"onclick="PPT(1)"></td>
						</tr>
						<tr>
							<td><img src="img/piedra.png" ></td>
							<td id="eleccionPPPT"><canvas id="canvasPPTE" width="110"></canvas></td>
							<td id="eleecionEPPT"><canvas id="canvasPPTP" width="110"></canvas></td>
							<td><img src="img/piedra.png"onclick="PPT(0)"></td>
							
						</tr>
						<tr>
							<td><img src="img/tijera.png"></td>
							<td></td>
							<td></td>
							<td><img src="img/tijera.png" onclick="PPT(2)"></td>
						</tr>
					</table>

				</form>
			</div>
		</div>
	</div>
	<div class="overlay" id="tetris">
		<div class="popup" id="poptetris">
        	<canvas id="canTetris" width="200" height="400"></canvas>
        </div>        
        Score : <div class="popup" id="score">0</div>    	
    </div>
    <div class="overlay" id="memorama">
    	<div class="popup" id="popmemorama">
    		<table border="1">
		<tr>
			<td style="width: 150px;"><canvas id="cImgMem1" style="width: 150px;"></canvas></td>
			<td style="width: 150px;"><canvas id="cImgMem2"style="width: 150px;"></canvas></td>
			<td style="width: 150px;"><canvas id="cImgMem3"style="width: 150px;"></canvas></td>
			<td style="width: 150px;"><canvas id="cImgMem4"style="width: 150px;"></canvas></td>
		</tr>
		<tr>
			<td style="width: 150px;"><canvas id="cImgMem5" style="width: 150px;"></canvas></td>
			<td style="width: 150px;"><canvas id="cImgMem6"style="width: 150px;"></canvas></td>
			<td style="width: 150px;"><canvas id="cImgMem7"style="width: 150px;"></canvas></td>
			<td style="width: 150px;"><canvas id="cImgMem8"style="width: 150px;"></canvas></td>
		</tr>
	</table>
    	</div>
    	
    </div>
    <div class="overlay" id="mensajem">
    		<div class="popup" id=popmen>
    			<table>
    			<tr>
    				<td>leon,flor,vaso,leon,flor,funcion,vaso,funcion</td>
    			</tr>
    		</table> 
    		</div>
    		
    	</div>

    <div class="overlay" id="snake">
    	<div class="popup" id="snakepop">    	
		<canvas id="canvasS" width="600" height="600" ></canvas>
    		
    	</div>
    </div>

    
    <script src="js/piezas.js"></script>
	<script type="text/javascript" src="js/generar.js"></script>	
</body>
</html>
