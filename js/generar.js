window.requestAnimFrame =( function () {
    return  
    	window.requestAnimationFrame    	||
        window.webkitRequestAnimationFrame  ||
        window.mozRequestAnimationFrame     ||
        window.oRequestAnimationFrame       ||
        window.msRequestAnimationFrame      ||
        function (callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

let posicion=0;
var puntuacionG=100;

function principal(){
	var totalBestScoresToShow,
	player,				
	ctx,
	canvas,
	buffer,
	bufferctx;

	if (posicion==0) {
    	init();
    }else if (posicion==1) {
    	init1();		
    }else if (posicion==2) {
    	init2();
    }else if (posicion==3) {
    	init3();
    }else if (posicion==4) {
    	init4();
    }else if (posicion==5) {
    	init5();
    }else if (posicion==6) {
    	init6();
    }else if (posicion>6) {
    	if (puntuacionG>=0) {
    		alert("Ganaste, tu puntuacion es: "+puntuacionG);
    		initW();
    	}else if (puntuacionG<0){
    		alert("Ganaste, tu puntuacion es: 0");
    		initW();
    	}
    	
    }
	//aqui van a venir las variable


	function init(){
		canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
        backImg = new Image();      
        backImg.src='img/juego0.png'; 
	    backImg.onload = function() {
	    ctx.drawImage(backImg,0,0);}
	}
	function init1() {
    	canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
       	
		backImg.src='img/juego1.png'; 
       	backImg.onload = function() {
	    ctx.drawImage(backImg,0,0);
	  	}
    }

    function init2() {
    	canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
       	backImg.src='img/juego2.png'; 
	    backImg.onload = function() {
	    ctx.drawImage(backImg,0,0);
    	}
    }
	function init3(){
		canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
       	backImg.src='img/juego3.png'; 
	       	backImg.onload = function() {
	        ctx.drawImage(backImg,0,0);}
	}
	function init4() {
		canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
       	backImg.src='img/juego4.png'; 
	       	backImg.onload = function() {
	        ctx.drawImage(backImg,0,0);
	    	}
	}
	function init5() {
		canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
       	backImg.src='img/juego5.png'; 
	       	backImg.onload = function() {
	        ctx.drawImage(backImg,0,0);
	    	}
	}
	function init6() {
		canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
       	backImg.src='img/juego6.png'; 
	       	backImg.onload = function() {
	        ctx.drawImage(backImg,0,0);
	    	}
	}
	function initW() {
		canvas= document.getElementById('canvas');
		ctx=canvas.getContext('2d');
       	backImg = new Image();
		backImg.src='img/juegoW.png'; 
	       	backImg.onload = function() {
	        ctx.drawImage(backImg,0,0);
	    	}
	}
	
}
principal();

function getRandomNumber() {
		return Math.round(Math.random()*5);
}
function tirarDados(){
	carasDado = getRandomNumber();
	
	
	if (carasDado==0) {
		posicion=posicion+1;
		alert("Salió: 1");
		posicionar(posicion);
	}else if (carasDado==1) {
		posicion=posicion+2;
		alert("Salió: 2");
		posicionar(posicion);
	}else if (carasDado==2) {
		posicion=posicion+3;
		alert("Salió: 3");
		posicionar(posicion);
	}else if (carasDado==3){
		posicion=posicion+4;
		alert("Salió: 4");
		posicionar(posicion);
	}else if (carasDado==4) {
		posicion=posicion+5;
		alert("Salió: 5")		
		posicionar(posicion);
	}else if (carasDado==5) {		
		posicion=posicion+6;
		alert("Salió: 6 ")
		posicionar(posicion);
	}else{
		alert("El dado no está funcionando como debería");
	}
}
function posicionar(minijuego) {
	if (minijuego==1) {
		quizpop();
	}else if(minijuego==2){
		Operacionpop();
	}else if (minijuego==3) {
		popPPT();
	}else if (minijuego==4) {
		tetrispop();	
	}else if (minijuego==5) {
		mensaje();
	}else if (minijuego==6) {
		snakepop();
	}else if (minijuego>6) {
		principal();
	}
}

//mini juego 1-----------------------------------------------------------------------------------
function quizpop(){
			var overlay = document.getElementById('overlay'),
			popup = document.getElementById('popup');
			overlay.classList.add('active');
			popup.classList.add('active');	
			alert("Responda todas las preguntas correctamente para avanzar");
		}
function quizpopocultar(){
			var overlay = document.getElementById('overlay'),
			popup = document.getElementById('popup');
			overlay.classList.remove('active');
			popup.classList.remove('active');		
			principal();	
		}		
/* FUNCION PARa validar div1*/
function operacion1(){
	var pregunta1=quiz1.pregunta1.value;
	var pregunta2=quiz1.pregunta2.value;
	var pregunta3=quiz1.pregunta3.value;
    if(quiz1.pregunta1[0].checked==false && quiz1.pregunta1[1].checked==false && quiz1.pregunta1[2].checked==false){
        alert('No deje espacios vacios');
	    return false;
    }else if(quiz1.pregunta2[0].checked==false && quiz1.pregunta2[1].checked==false && quiz1.pregunta2[2].checked==false){
	    alert('No deje espacios vacios');
        return false;
    }else if(quiz1.pregunta3[0].checked==false && quiz1.pregunta3[1].checked==false && quiz1.pregunta3[2].checked==false){
		alert('No deje espacios vacios');
        return false;
    }else {
    	if(pregunta1!=="C"){
    		alert("Pregunta 1 esta equivocada");
    		puntuacionG=puntuacionG-10;
    		posicion=0;
    		quizpopocultar();
    		return false;	
    	}
    	else if(pregunta2!=="B"){
    		alert("Pregunta 2 esta equivocada");
    		puntuacionG=puntuacionG-10;
    		posicion=0;
    		quizpopocultar();
    		return false;	
    	}
    	else if(pregunta3!=="A"){
    		alert("Pregunta 3 esta equivocada");
    		puntuacionG=puntuacionG-10;
    		posicion=0;
    		quizpopocultar();
    		return false;	
    	}else{
    		alert("Felicidades has completado el formulario correctamente");
    		posicion=posicion;
    		quizpopocultar();
    		return false;
    		
    	}
    }
}
//mini juego 2 ----------------------------------------------

function Operacionpop(){
	var overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2');

	overlay2.classList.add('active');
	popup2.classList.add('active');
	alert("Responda todas las preguntas correctamente para avanzar");
}
function Operacionpopocultar(){
	var overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2');

	overlay2.classList.remove('active');
	popup2.classList.remove('active');
	principal();
}
/* FUNCION PARa validar div2*/
function operacion2(){
	var var1=quiz2.problema1.value;
	var var2=quiz2.problema2.value;
	var var3=quiz2.problema3.value;

	if(var1==""||var2==""||var3==""){
		alert("No deje espacios sin resolver");
		return false;
	}else if(var1.length>5||var2.length>5||var3.length>5){
		alert("Maximo numeros de 5 digitos");
		return false;
	}else if(var1<0||var2<0||var3<0||var1>99999||var2>99999||var3>99999){
		alert("Numeros positivos entre 0 o 99999");		
		return false;
	}else if(var1!=90){
		alert("Problema 1 es incorrecto");
		puntuacionG=puntuacionG-10;
		Operacionpopocultar();
		return false;
	}else if(var2!=144){
		alert("Problema 2 es incorrecto");
		puntuacionG=puntuacionG-10;
		Operacionpopocultar();
		return false;
	}else if(var3!=15){
		alert("Problema 3 es incorrecto");
		puntuacionG=puntuacionG-10;
		Operacionpopocultar();
		return false;
	}else{
		alert("Felicidades has completado el formulario correctamente");
		posicion=posicion;
		Operacionpopocultar();
		return false;
		
	}
}

/*-----------------*/
function numeros(event){
	var x = event.keyCode || event.which; 
	if(x<48||x>57){
		event.preventDefault();
	}
}

/*evita que el maestro te meta texto y te rompa el programa*/
function arrastrar(e){
    e.preventDefault();
}
function copipaste(e){
	e.preventDefault();
	alert("Acción invalida");
}

//minijuego 3------------------------------------------------------------------------------------
function popPPT(){
	var overlay = document.getElementById('PPT'),
	popup = document.getElementById('popPPT');
	overlay.classList.add('active');
	popup.classList.add('active');
	alert("Piedra, papel, tijera\nDale click a las imagenes del lado del jugador para escoger");
}
function popPPTocultar(){
	var overlay = document.getElementById('PPT'),
	popup = document.getElementById('popPPT');
	overlay.classList.remove('active');
	popup.classList.remove('active');
	principal();
}

function getRandomNumberPPT() {
	return Math.round(Math.random()*2);
}

function playerPPT(eleccion) {
	var enemigo = getRandomNumberPPT();
	EnemyPPT(enemigo);
	if (eleccion == 0) {//piedra
		if (enemigo==0) {
			alert("Empate");
		}else if (enemigo==1) {
			alert("Perdiste");
			posicion=0;		
			puntuacionG=puntuacionG-10;	
			popPPTocultar();
			return false;		
		}else if (enemigo==2) {
			alert("Ganaste");
			posicion=posicion;
			popPPTocultar();
			return true;
		}else{
			alert("Hay un error en la obtencion del numero aleatorio PPT");
		}
	}if (eleccion == 1) {//papel
		if (enemigo==0) {
			alert("Ganaste");
			posicion=posicion;
			popPPTocultar();
			return true;		
		}else if (enemigo==1) {
			alert("Empate");
									
		}else if (enemigo==2) {
			alert("Perdiste");
			posicion=0;			
			puntuacionG=puntuacionG-10;
			popPPTocultar();
			return false;
		}else{
			alert("Hay un error en la obtencion del numero aleatorio PPT");
		}
	}if (eleccion == 2) {//tijera
		if (enemigo==0) {
			alert("Perdiste");
			posicion=0;		
			puntuacionG=puntuacionG-10;
			popPPTocultar();
			return false;			
		}else if(enemigo==1){
			alert("Ganaste");
			posicion=posicion;
			popPPTocultar();
			return true;
		}else if (enemigo==2) {
			alert("Empate");					
		}
	}
}

function EnemyPPT(eleccionPPTE) {

	canvasPPTE= document.getElementById('canvasPPTE');
	ctxPPTE=canvasPPTE.getContext('2d');
    imgPPTE = new Image();
    if (eleccionPPTE==0){
    	imgPPTE.src='img/piedra.png'; 	    	
    }else if(eleccionPPTE==1){
    	imgPPTE.src='img/papel.png'; 
    }else if (eleccionPPTE==2) {
    	imgPPTE.src='img/tijera.png'; 
    }    
    imgPPTE.onload = function() {
    ctxPPTE.drawImage(imgPPTE,0,0);
   	}
}
function PPT(eleccionPPTJ){
	canvasPPTP= document.getElementById('canvasPPTP');
	ctxPPTP=canvasPPTP.getContext('2d');
    imgPPTP = new Image();
    if (eleccionPPTJ==0){
    	imgPPTP.src='img/piedra.png'; 	
    }else if(eleccionPPTJ==1){
    	imgPPTP.src='img/papel.png'; 
    }else if (eleccionPPTJ==2) {
    	imgPPTP.src='img/tijera.png'; 
    }    
    imgPPTP.onload = function() {
    ctxPPTP.drawImage(imgPPTP,0,0);
   	}
   	playerPPT(eleccionPPTJ);
}


//mini juego4-----------------------------------------------------------------------------------
function tetrispop(){
			var overlay = document.getElementById('tetris'),
			popup = document.getElementById('poptetris');

			overlay.classList.add('active');
			popup.classList.add('active');	
				
			alert("Tetris\n Una linea son 10 pt\n¡Consigue 40!!!")
			tetris();	
}
function tetrispopocultar(){
			var overlay = document.getElementById('tetris'),
			popup = document.getElementById('poptetris');

			overlay.classList.remove('active');
			popup.classList.remove('active');	
			principal();
}
function tetris() {
	const cvs = document.getElementById("canTetris");
	const ctxT = cvs.getContext("2d");
	const scoreElement = document.getElementById("score");

	const ROW = 20;
	const COL = COLUMN = 10;
	const SQ = squareSize = 20;
	const VACANT = "WHITE"; // color de un cuadro vacio 

	// dibujar un cuadro
	function drawSquare(x,y,color){
	    ctxT.fillStyle = color;
	    ctxT.fillRect(x*SQ,y*SQ,SQ,SQ);

	    ctxT.strokeStyle = "BLACK";
	    ctxT.strokeRect(x*SQ,y*SQ,SQ,SQ);
	}

	// crear el tablero

	let board = [];
	for( r = 0; r <ROW; r++){
	    board[r] = [];
	    for(c = 0; c < COL; c++){
	        board[r][c] = VACANT;
	    }
	}

	// dibujarlo 
	function drawBoard(){
	    for( r = 0; r <ROW; r++){
	        for(c = 0; c < COL; c++){
	            drawSquare(c,r,board[r][c]);
	        }
	    }
	}

	drawBoard();

	// las piezas y sus colores

	const PIECES = [
	    [Z,"#e71837"],
	    [S,"#a5d610"],
	    [T,"#fdd31d"],
	    [O,"#0e4bef"],
	    [L,"#e10dae"],
	    [I,"#2cb7b9"],
	    [J,"orange"]
	];

	// crear pieazas de forma aleatoria

	function randomPiece(){
	    let r = randomN = Math.floor(Math.random() * PIECES.length) // 0 -> 6
	    return new Piece( PIECES[r][0],PIECES[r][1]);
	}

	let p = randomPiece();



	function Piece(tetromino,color){
	    this.tetromino = tetromino;
	    this.color = color;
	    
	    this.tetrominoN = 0; 
	    this.activeTetromino = this.tetromino[this.tetrominoN];
	    
	    
	    this.x = 3;
	    this.y = -2;
	}



	Piece.prototype.fill = function(color){
	    for( r = 0; r < this.activeTetromino.length; r++){
	        for(c = 0; c < this.activeTetromino.length; c++){
	            // dibujar/iluminar cuadrados ocupados por las piezas
	            if( this.activeTetromino[r][c]){
	                drawSquare(this.x + c,this.y + r, color);
	            }
	        }
	    }
	}

	// dibujar una pieza en el tablero

	Piece.prototype.draw = function(){
	    this.fill(this.color);
	}




	Piece.prototype.unDraw = function(){
	    this.fill(VACANT);
	}


	//mover la pieza hacia abajo
	Piece.prototype.moveDown = function(){
	    if(!this.collision(0,1,this.activeTetromino)){
	        this.unDraw();
	        this.y++;
	        this.draw();
	    }else{
	        // we lock the piece and generate a new one
	        this.lock();
	        p = randomPiece();
	    }
	    
	}

	// mover la pieza a la derecha
	Piece.prototype.moveRight = function(){
	    if(!this.collision(1,0,this.activeTetromino)){
	        this.unDraw();
	        this.x++;
	        this.draw();
	    }
	}

	// mover la pieza a la izquierda
	Piece.prototype.moveLeft = function(){
	    if(!this.collision(-1,0,this.activeTetromino)){
	        this.unDraw();
	        this.x--;
	        this.draw();
	    }
	}

	// rotar la pieza
	Piece.prototype.rotate = function(){
	    let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];
	    let kick = 0;
	    
	    if(this.collision(0,0,nextPattern)){
	        if(this.x > COL/2){
	            
	            kick = -1; 
	        }else{
	            
	            kick = 1; 
	        }
	    }
	    
	    if(!this.collision(kick,0,nextPattern)){
	        this.unDraw();
	        this.x += kick;
	        this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length; 
	        this.activeTetromino = this.tetromino[this.tetrominoN];
	        this.draw();
	    }
	}

	let score = 0;

	Piece.prototype.lock = function(){
	    for( r = 0; r < this.activeTetromino.length; r++){
	        for(c = 0; c < this.activeTetromino.length; c++){

	            if( !this.activeTetromino[r][c]){
	                continue;
	            }

	            if(this.y + r < 0){
	                

	                gameOver = true;
	                break;
	            }

	            board[this.y+r][this.x+c] = this.color;
	        }
	    }

	    for(r = 0; r < ROW; r++){
	        let isRowFull = true;
	        for( c = 0; c < COL; c++){
	            isRowFull = isRowFull && (board[r][c] != VACANT);
	        }
	        if(isRowFull){

	            for( y = r; y > 1; y--){
	                for( c = 0; c < COL; c++){
	                    board[y][c] = board[y-1][c];
	                }
	            }

	            for( c = 0; c < COL; c++){
	                board[0][c] = VACANT;
	            }

	            score += 10;
	        }
	    }

	    drawBoard();
	    

	    scoreElement.innerHTML = score;
	}



	Piece.prototype.collision = function(x,y,piece){
	    for( r = 0; r < piece.length; r++){
	        for(c = 0; c < piece.length; c++){
	            
	            if(!piece[r][c]){
	                continue;
	            }
	            
	            let newX = this.x + c + x;
	            let newY = this.y + r + y;
	            
	            
	            if(newX < 0 || newX >= COL || newY >= ROW){
	                return true;
	            }
	            
	            if(newY < 0){
	                continue;
	            }
	            
	            if( board[newY][newX] != VACANT){
	                return true;
	            }
	        }
	    }
	    return false;
	}

	// controlar la pieza

	document.addEventListener("keydown",CONTROL);

	function CONTROL(event){
	    if(event.keyCode == 37){
	        p.moveLeft();
	        dropStart = Date.now();
	    }else if(event.keyCode == 38){
	        p.rotate();
	        dropStart = Date.now();
	    }else if(event.keyCode == 39){
	        p.moveRight();
	        dropStart = Date.now();
	    }else if(event.keyCode == 40){
	        p.moveDown();
	    }
	}



	let dropStart = Date.now();
	let gameOver = false;
	function drop(){
	    let now = Date.now();
	    let delta = now - dropStart;
	    if(delta > 1000){
	        p.moveDown();
	        dropStart = Date.now();
	    }
	    if( !gameOver){
	    	if (score==40) {
	    		alert("Ganaste");
	    		posicion=posicion;
	    		tetrispopocultar();
	    	}else{
	    		requestAnimationFrame(drop);	
	    	}
	        
	    }else if (gameOver==true) {
	    	alert("Perdiste");
	    	posicion=0;
	    	puntuacionG=puntuacionG-10;
	    	tetrisocultar();
	    }
	}

	drop();

}

//mini juego 5---------------------------------------------------------------------------------
function mensaje() {
	var overlay = document.getElementById('mensajem'),
	popup = document.getElementById('popmen');

	overlay.classList.add('active');
	popup.classList.add('active');
	alert("Memorama\nclickea en las imagenes")
	setTimeout(function () {
		overlay.classList.remove('active');
		popup.classList.remove('active');				
				memoramapop();	
			},10000);	

}
function memoramapop(){

			var overlay = document.getElementById('memorama'),
			popup = document.getElementById('popmemorama');

			overlay.classList.add('active');
			popup.classList.add('active');	
			
			
			memorama();			
			
			
}
function memoramapopocultar(){
			var overlay = document.getElementById('memorama'),
			popup = document.getElementById('popmemorama');

			overlay.classList.remove('active');
			popup.classList.remove('active');	
			principal();
}
function memorama() {
	
	var cont=0;
	var contg=0;
	op1="";
	op2="";

	function initM(){
		canvasM1=document.getElementById('cImgMem1');
		ctxM=canvasM1.getContext('2d');	
		backImgMem = new Image();      
	   	backImgMem.src='img/fondonegro.png'; 
	   	leonImg = new Image();
	   	leonImg.src='img/leon.jpg';
	   	backImgMem.onload = function() {
	   	ctxM.drawImage(backImgMem,0,0);}
	   	canvasM1.onclick =function() {
	   		ctxM.drawImage(leonImg,0,0);
	   		cont=cont+1;
	   		validar("leon");
	   	}

	   	canvasM2=document.getElementById('cImgMem2');
		ctxM2=canvasM2.getContext('2d');	
		backImgMem2 = new Image();      
	   	backImgMem2.src='img/fondonegro.png'; 
	   	backImgMem2.onload = function() {
	   	ctxM2.drawImage(backImgMem2,0,0);}
	   	florImg1= new Image();
	   	florImg1.src='img/flor.jpg';
	   	canvasM2.onclick=function(){
	   		ctxM2.drawImage(florImg1,0,0);
	   		cont=cont+1;
	   		validar("flor");
	   	}

	   	canvasM3=document.getElementById('cImgMem3');
		ctxM3=canvasM3.getContext('2d');	
		backImgMem3 = new Image();      
	   	backImgMem3.src='img/fondonegro.png'; 
	   	backImgMem3.onload = function() {	   	
	   	ctxM3.drawImage(backImgMem3,0,0);}
	   	vasoImg2=new Image();
	   	vasoImg2.src='img/vaso_agua.jpg';
	   	canvasM3.onclick=function(){
	   		ctxM3.drawImage(vasoImg2,0,0);
	   		cont=cont+1;
	   		validar("vaso");
	   	}

	   	canvasM4=document.getElementById('cImgMem4');
		ctxM4=canvasM4.getContext('2d');	
		backImgMem4 = new Image();      
	   	backImgMem4.src='img/fondonegro.png'; 
	   	leonImg2=new Image();
	   	leonImg2.src='img/leon.jpg';
	   	backImgMem4.onload = function() {
	   	ctxM4.drawImage(backImgMem4,0,0);}
	   	canvasM4.onclick =function() {
	   		ctxM4.drawImage(leonImg2,0,0);
	   		cont=cont+1;
	   		validar("leon");
	   	}


	   	canvasM5=document.getElementById('cImgMem5');
		ctxM5=canvasM5.getContext('2d');	
		backImgMem5 = new Image();      
	   	backImgMem5.src='img/fondonegro.png'; 
	   	backImgMem5.onload = function() {
	   	ctxM5.drawImage(backImgMem5,0,0);}
	   	florImg2=new Image();
	   	florImg2.src='img/flor.jpg';
	   	canvasM5.onclick=function(){
	   		ctxM5.drawImage(florImg2,0,0);
	   		cont=cont+1;
	   		validar("flor");
	   	}

	   	canvasM6=document.getElementById('cImgMem6');
		ctxM6=canvasM6.getContext('2d');	
		backImgMem6 = new Image();      
	   	backImgMem6.src='img/fondonegro.png'; 
	   	backImgMem6.onload = function() {
	   	ctxM6.drawImage(backImgMem6,0,0);}
	   	funcionImg1=new Image();
	   	funcionImg1.src='img/funcion.png';
	   	canvasM6.onclick=function(){
	   		ctxM6.drawImage(funcionImg1,0,0);
	   		cont=cont+1;
	   		validar("funcion");
	   	}

		canvasM7=document.getElementById('cImgMem7');
		ctxM7=canvasM7.getContext('2d');	
		backImgMem7 = new Image();      
	   	backImgMem7.src='img/fondonegro.png'; 
	   	vasoImg1=new Image();
	   	vasoImg1.src='img/vaso_agua.jpg';
	   	backImgMem7.onload = function() {
	   	ctxM7.drawImage(backImgMem7,0,0);}
	   	canvasM7.onclick=function(){
	   		ctxM7.drawImage(vasoImg1,0,0);
	   		cont=cont+1;
	   		validar("vaso");
	   	}

	   	canvasM8=document.getElementById('cImgMem8');
		ctxM8=canvasM8.getContext('2d');	
		backImgMem8 = new Image();      
	   	backImgMem8.src='img/fondonegro.png'; 
	   	backImgMem8.onload = function() {
	   	ctxM8.drawImage(backImgMem8,0,0);}	
	   	funcionImg2=new Image();
	   	funcionImg2.src='img/funcion.png';
	   	canvasM8.onclick=function(){
	   		ctxM8.drawImage(funcionImg2,0,0);
	   		cont=cont+1;
	   		validar("funcion");
	   	}   	
   }
   function validar(param) {
   		
   		if (cont==0) {
   			console.leg("uwu");
   		}else if (cont==1) {
   			op1=param;
   		}else if (cont==2) {
   			op2=param;
   			if (op1!=op2) {
   				alert("Perdiste");
   				puntuacionG=puntuacionG-10;
   				posicion=0;
   				memoramapopocultar();
   			}else if (op1==op2 && contg<4) {   				
   				contg=contg+1;
   				cont=0;      				
   			}			
   		}
   		if(contg>=4) {
   			alert("Ganaste");
   			posicion=posicion;
   			memoramapopocultar();
   		}
   }

	initM();
}
var contadorS=0;
function snakepop(){
			var overlay = document.getElementById('snake'),			
			popup = document.getElementById('snakepop');
			overlay.classList.add('active');
			popup.classList.add('active');	
			alert("Presiona culquier letra para iniciar\nCome 20 veces!!!!");
			contadorS=1;
		}
function snakepopocultar(){
			var overlay = document.getElementById('snake'),			
			popup = document.getElementById('snakepop');
			overlay.classList.remove('active');
			popup.classList.remove('active');		
			principal();				
		}	

//Variables globales
var velocidad = 80;
var tamano = 10;
var scoreS=0;

class objeto {
	constructor(){
		this.tamano = tamano;
	}
	choque(obj){
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if(difx >= 0 && difx < tamano && dify >= 0 && dify < tamano){
			return true;			
		} else {
			return false;
		}
	}
}

class Cola extends objeto {
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;
		this.siguiente = null;
	}
	dibujar(ctx){
		if(this.siguiente != null){
			this.siguiente.dibujar(ctx);
		}
		ctx.fillStyle = "#0000FF";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
	setxy(x,y){
		if(this.siguiente != null){
			this.siguiente.setxy(this.x, this.y);
		}
		this.x = x;
		this.y = y;
	}
	meter(){
		if(this.siguiente == null){
			this.siguiente = new Cola(this.x, this.y);
		} else {
			this.siguiente.meter();
		}
	}
	verSiguiente(){
		return this.siguiente;
	}
}

class Comida extends objeto {
	constructor(){
		super();
		this.x = this.generar();
		this.y = this.generar();
	}
	generar(){
		var num = (Math.floor(Math.random() * 59))*10;
		return num;
	}
	colocar(){
		this.x = this.generar();
		this.y = this.generar();
	}
	dibujar(ctx){
		ctx.fillStyle = "#FF0000";
		ctx.fillRect(this.x, this.y, this.tamano, this.tamano);
	}
}
//Objetos del juego
var cabeza = new Cola(20,20);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;
function movimiento(){
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny);
}
function controlAS(event) {
	if (contadorS==1) {
		control(event);
	}else{
		console.log("Tecla presionada")
	}
}
function control(event){
	var cod = event.keyCode;
	if(ejex){
		if(cod == 38){
			ydir = -tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
		if(cod == 40){
			ydir = tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}
	}
	if(ejey){
		if(cod == 37){
			ydir = 0;
			xdir = -tamano;
			ejey = false;
			ejex = true;
		}
		if(cod == 39){
			ydir = 0;
			xdir = tamano;
			ejey = false;
			ejex = true;
		}
	}
}

function findeJuego(){
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	cabeza = new Cola(20,20);
	comida = new Comida();
	snakepopocultar();
	
}
function choquepared(){
	if(cabeza.x < 0 || cabeza.x > 590 || cabeza.y < 0 || cabeza.y > 590){
		alert("Perdiste");
		puntuacionG=puntuacionG-10;
		posicion=0;
		findeJuego();
	}
}
function choquecuerpo(){
	var temp = null;
	try{
		temp = cabeza.verSiguiente().verSiguiente();
	}catch(err){
		temp = null;
	}
	while(temp != null){
		if(cabeza.choque(temp)){
			//fin de juego
			posicion=0;
			puntuacionG=puntuacionG-10;
			alert("Perdiste");
			findeJuego();
		} else {
			temp = temp.verSiguiente();
		}
	}
}

function dibujar(){
	var canvas = document.getElementById("canvasS");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//aquí abajo va todo el dibujo
	cabeza.dibujar(ctx);
	comida.dibujar(ctx);
}
function main(){
	choquecuerpo();
	choquepared();
	dibujar();
	movimiento();
	if(cabeza.choque(comida)){		
		comida.colocar();
		cabeza.meter();
		scoreS=scoreS+1;
	}
	if (scoreS==2) {
		alert("Ganaste");
		posicion=posicion;
		scoreS=scoreS=0;
		findeJuego();
	}
}
setInterval("main()", velocidad);

