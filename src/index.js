let elements = document.getElementsByClassName("fade");
let onScreenArr = [];
let isLoadedArr = [];

init();

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
            isLoadedArr[i] = true;
        }
    }
    document.addEventListener("scroll", animateElements);
    document.getElementById("bird-defense").addEventListener("click", (e) => {
        window.open('https://brave-bush-05135770f.azurestaticapps.net', '_blank');
    });

    document.getElementById("regression-calculator").addEventListener("click", (e) => {
        window.open("https://kind-flower-0c07f2d10.azurestaticapps.net", "_blank");
    })

    
}

function isOnScreen(element) {
	var position = element.parentElement.getBoundingClientRect();
    var height = element.offsetHeight;

	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		return true;
	}

	if(position.top > -1 * height/4 && position.bottom < window.innerHeight + height/4) {
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

