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
            elements[i].style.opacity = 1.0;
            isLoadedArr[i] = true;
        }
    }

    document.getElementById("profile").addEventListener("click", (e) => {
        window.open("https://docs.google.com/document/d/1oEUiJ2iou16cQjcO3YQ03l6oovUQv9vQ-lxXlYSG_wY/edit?usp=sharing", "_blank")
    })

    document.getElementById("home-nav").addEventListener("click", (e) => {
        var elmnt = document.getElementById("home-anchor");
        elmnt.scrollIntoView({behavior: "smooth", block: "start"});
    })

    document.getElementById("projects-nav").addEventListener("click", (e) => {
        var elmnt = document.getElementById("projects-anchor");
        elmnt.scrollIntoView({behavior: "smooth", block: "start"});
    });

    document.getElementById("about-nav").addEventListener("click", (e) => {
        var elmnt = document.getElementById("about-anchor");
        elmnt.scrollIntoView({behavior: "smooth", block: "start"});
    });

    document.getElementById("contact-nav").addEventListener("click", (e) => {
        var elmnt = document.getElementById("contact");
        elmnt.scrollIntoView({behavior: "smooth", block: "start"});
    });

    document.addEventListener("scroll", animateElements);
    document.getElementById("bird-defense").addEventListener("click", (e) => {
        window.open('http://bird.gsheng.me', '_blank');
    });

    document.getElementById("regression-calculator").addEventListener("click", (e) => {
        window.open("http://regression.gsheng.me", "_blank");
    });

    document.getElementById("music-theory").addEventListener("click", (e) => {
        window.open("https://github.com/gsheng0/Music", "_blank");
    });

    document.getElementById("minesweeper").addEventListener("click", (e) => {
        window.open("https://github.com/gsheng0/Minesweeper", "_blank");
    });
    
    document.getElementById("doubly-linked-list").addEventListener("click", (e) => {
        window.open("https://github.com/gsheng0/DoublyLinkedList", "_blank");
    });

    document.getElementById("data-display").addEventListener("click", (e) => {
        window.open("https://github.com/gsheng0/JSON-Data-Displayer", "_blank");
    });

    document.getElementById("2drts").addEventListener("click", (e) => {
        window.open("https://github.com/gsheng0/Basic-RTS", "_blank");
    });

    document.getElementById("knowledge-base").addEventListener("click", (e) => {
        window.open("https://github.com/gsheng0/knowledge_base", "_blank");
    })
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

