let elements = document.getElementsByClassName("fade");
let onScreenArr = [];
let isLoadedArr = [];



function init(){
    for(let i = 0; i < elements.length; i++){
        onScreenArr.push(isOnScreen(elements[i]));
        isLoadedArr.push(false);
    }
    updateOnScreenArr("nothing");
    for(let i = 0; i < onScreenArr.length; i++){
        if(!onScreenArr[i]){
            elements[i].style.opacity = 0.0;
        }
        else{
            elements[i].style.opacity = 1.0;
            isLoadedArr[i] = true;
        }
    }
}

function isOnScreen(element) {
	var position = element.parentElement.getBoundingClientRect();
    var height = element.offsetHeight;

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		return true;
	}

	if(position.top > -1 * height/2 && position.bottom < window.innerHeight + height/2) {
		return true;
	}
    return false;
  }

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function updateOnScreenArr(e) {
    for(let i = 0; i < elements.length; i++){
        onScreenArr[i] = isOnScreen(elements[i]);
    }
}

function animateElements(e) {
    updateOnScreenArr(e);
    for(let i = 0; i < elements.length; i++){
        if(onScreenArr[i] && !isLoadedArr[i]){
            fadeIn(elements[i]);
            isLoadedArr[i] = true;
        }
    }
}

init();
