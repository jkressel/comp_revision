//count key presses
var keydown_count = 0;
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    
    if (key == 52) {
        keydown_count++;
    }
    if (keydown_count == 5){
    	document.body.style.color = 'green';
    }
    
}