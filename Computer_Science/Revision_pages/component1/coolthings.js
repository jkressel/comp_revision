// array to hold objects! Make all the things dynamic! (I hate hard coding!)
var element_arr = new Array();
var arrow_arr = new Array();


//Reference the canvas
var canvas = document.getElementById('von_neu');
//check if browser supports
if (canvas.getContext){
	//get the context of the canvas
var context = canvas.getContext("2d");
}

function mem(){
	context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle="black";
context.textAlign = "center";
	context.font="30px Arial" ;
		context.fillText("Memory", 200 ,100); // Title
		context.font="15px Arial";
		context.textAlign = "left";
		context.fillText("Memory is also known as RAM. From here all data", 50 ,200);
		context.fillText("and instructions are fetched into the CPU and results", 50, 220);
		context.fillText("stored. RAM is volatile, meaning that when power is", 50, 240);
		context.fillText("removed, data is erased.", 50, 260);
		element_arr.push(new rectangle(50,30, 50,300,1,"Back"));
		renderBack();
	

		
		
}
function cu(){
	
	context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle="black";
context.font="30px Arial" ;
		context.fillText("Control Unit", 200 ,100); // Title
		context.font="15px Arial";
		context.textAlign = "left";
		context.fillText("The Control Unit is responsible for coordinating", 50 ,200);
		context.fillText("the functions of the CPU, for example, controlling", 50, 220);
		context.fillText("the flow of data around the components. The CU", 50, 240);
		context.fillText("decodes instructions and decides how to act on", 50, 260);
		context.fillText("them. It carries out instructions sequentially.", 50, 280);
element_arr.push(new rectangle(50,30, 50,300,1,"Back"));
		renderBack();


}
function alu(){
	context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle="black";
context.font="20px Arial" ;
		context.fillText("Arithmetic and Logic Unit and Accumulator", 200 ,100); // Title
		context.font="15px Arial";
		context.textAlign = "left";
		context.fillText("The Arithmetic and Logic Unit carries out", 50 ,200);
		context.fillText("mathematical operations (+-*/) as well as", 50, 220);
		context.fillText("logical ones (><=). This is the foundation", 50, 240);
		context.fillText("of the CPU. The Accumulator hold input and", 50, 260);
		context.fillText("output data currently being processed. It also", 50, 280);
		context.fillText("holds the result of processes before they are", 50, 300);
		context.fillText("moved to memory", 50, 320);
element_arr.push(new rectangle(50,30, 50,350,1,"Back"));
		renderBack();

}
function inputReg(){
	context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle="black";
context.font="20px Arial" ;
		context.fillText("Input", 200 ,100); //Notice, I am compensating for the positioning of the element
context.font="15px Arial";
		context.textAlign = "left";
		context.fillText("The concept that a user or other device eg.", 50 ,200);
		context.fillText("USB, Keyboard etc. can input values for the", 50, 220);
		context.fillText("CPU to process.", 50, 240);
element_arr.push(new rectangle(50,30, 50,300,1,"Back"));
		renderBack();
		
}
function outputReg(){
	context.clearRect(0, 0, canvas.width, canvas.height);
context.fillStyle="black";
context.font="20px Arial" ;
		context.fillText("Output", 200 ,100); 
		context.font="15px Arial";
		context.textAlign = "left";
		context.fillText("After data has been processed, the result", 50 ,200);
		context.fillText("can be outputted to monitors etc.", 50, 220);
		element_arr.push(new rectangle(50,30, 50,300,1,"Back"));
		renderBack();
		


}



//object to hold to properties of the rectangles so that I can work with them and check against them
function rectangle(w,h,x,y,op,txt){
	this.width = w;
	this.height = h;
	this.x = x;
	this.y = y;
	this.op = op;
	this.txt = txt;
}
// object to hold arrow things
function arrow(fromX, fromY, toX, toY, op){
	this.fx = fromX; //start x
	this.fy = fromY; // start y
	this.tx = toX; // finish x
	this.ty = toY; //finish y
	this.op = op; // opacity

}
//creates the rectangle using a given set of parameters
function createRect(w,h,x,y,op,txt){
	var tmp_rect = rectangle;
	tmp_rect.width = w;
	tmp_rect.height = h;
	tmp_rect.x = x;
	tmp_rect.y = y;
	tmp_rect.op = op;
	tmp_rect.txt = txt;

	
}
//display the rectangle which has been created and add the text to it
function renderRect(element_arr){
	for (var i = 0; i < element_arr.length; i++) {
		context.globalAlpha = element_arr[i].op;
		context.font="10px Arial";
		context.fillStyle = 'yellow';
		context.beginPath();
		context.lineWidth="6";
		context.strokeStyle="red";
		context.rect(element_arr[i].x,element_arr[i].y,element_arr[i].width,element_arr[i].height);
		context.fillStyle = 'magenta';
		context.stroke();
		context.textAlign = "center";
		context.fillText(element_arr[i].txt, element_arr[i].x + (element_arr[i].width/2),element_arr[i].y+ (element_arr[i].height/2)); //Notice, I am compensating for the positioning of the element

	}

	}
// render arrows
	function renderArrows(arr_arr){
		for (var i = 0; i < arr_arr.length; i++) { // loop through objects

			context.lineWidth = 2;
			var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(arr_arr[i].ty-arr_arr[i].fy,arr_arr[i].tx-arr_arr[i].fx);
    context.moveTo(arr_arr[i].fx, arr_arr[i].fy);
    context.lineTo(arr_arr[i].tx, arr_arr[i].ty);
    context.lineTo(arr_arr[i].tx-headlen*Math.cos(angle-Math.PI/6),arr_arr[i].ty-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(arr_arr[i].tx, arr_arr[i].ty);
    context.lineTo(arr_arr[i].tx-headlen*Math.cos(angle+Math.PI/6),arr_arr[i].ty-headlen*Math.sin(angle+Math.PI/6));
context.stroke();

		}

	}

	function renderBack(){
		context.globalAlpha = element_arr[6].op;
		context.fillStyle = 'yellow';
		context.beginPath();
		context.lineWidth="6";
		context.strokeStyle="red";
		context.rect(element_arr[6].x,element_arr[6].y,element_arr[6].width,element_arr[6].height);
		context.fillStyle = 'magenta';
		context.stroke();
		context.textAlign = "center";
		context.fillText(element_arr[6].txt, element_arr[6].x + (element_arr[6].width/2),element_arr[6].y+ (element_arr[6].height/2)); //Notice, I am compensating for the positioning of the element
		document.removeEventListener("click", getCursorPosition);
		document.addEventListener("click", getBack);

	}
	function getBack(){
document.removeEventListener("click", getBack);
returnBack();
document.addEventListener("click", getCursorPosition);

	}

	function returnBack(){
		element_arr.pop();
		context.clearRect(0, 0, canvas.width, canvas.height);
		renderRect(element_arr);
		renderArrows(arrow_arr);
		
		

	}
	

element_arr.push(new rectangle(300,100,50,50,1,"Memory"));
element_arr.push(new rectangle(120,120, 50,200,1,"Control Unit"));
element_arr.push(new rectangle(120,120, 200,200,1,"Arithmetic Logic Unit"));
element_arr.push(new rectangle(80,30, 220,270,1,"Accumulator"));
element_arr.push(new rectangle(100,30, 140,370,1,"Input"));
element_arr.push(new rectangle(100,30, 250,370,1,"Output"));
arrow_arr.push(new arrow(90, 150, 90, 200, 1));
arrow_arr.push(new arrow(130, 200, 130, 150, 1));
arrow_arr.push(new arrow(240, 150, 240, 200, 1));
arrow_arr.push(new arrow(280, 200, 280, 150, 1));
arrow_arr.push(new arrow(170, 240, 200, 240, 1));
arrow_arr.push(new arrow(200, 280, 170, 280, 1));
arrow_arr.push(new arrow(190, 370, 260, 300, 1));
arrow_arr.push(new arrow(260, 300, 300, 370, 1));
renderRect(element_arr);
renderArrows(arrow_arr);






	function getCursorPosition(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    for (i = 0; i < element_arr.length; i++){
    	var xObj = element_arr[i].x;
    	var yObj = element_arr[i].y;
    	var wObj = element_arr[i].width;
    	var hObj = element_arr[i].height;

    	if (((x >= xObj) && (x <= (wObj+xObj)))&& ((y >= yObj)&&(y <= (hObj+yObj))) ){
    		switch (i){
    			case 0:
    			mem();
    			break;
    			case 1:
    			cu();
    			break;
    			case 2:
    			alu();
    			break;
    			case 4:
    			inputReg();
    			break;
    			case 5:
    			outputReg();
    			


    		}
    	}

    }

}


document.addEventListener("click", getCursorPosition);