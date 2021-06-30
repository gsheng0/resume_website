let onscreen = [];
let offscreen = [];

console.log(-26 > -175)
document.addEventListener("scroll", (e) => {
    onscreen = [];
    offscreen = [];
    var allElements = document.getElementsByTagName("*");
    var allIds = [];
    for (var i = 0, n = allElements.length; i < n; ++i) {
        var el = allElements[i];
        if (el.id) { allIds.push(el.id); }
    }
    for(let i = 0; i < allIds.length; i++){
        var id = allIds[i];
        if(isOnScreen(document.getElementById(id))){
            onscreen.push(id);
        }
        else{
            offscreen.push(id);
        }
    }
});

document.addEventListener("click", (e) => {
    console.log("On Screen: " + onscreen);
    console.log("Off Screen: " + offscreen);
    isOnScreen(document.getElementById("box3"));
})

function isOnScreen(element) {
	var position = element.getBoundingClientRect();
    var height = element.offsetHeight;



	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight) {
		return true;
	}

	// checking for partial visibility
	if(position.top > -1 * height/2 && position.bottom < window.innerHeight + height/2) {
		return true;
	}
    return false;
  }