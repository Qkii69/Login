const inputs = document.querySelectorAll("input");

function addChange(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function remChange(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addChange);
	input.addEventListener("blur", remChange);
});

var	lock = document.getElementById("lock");

function Change(){
	let input = document.getElementById("password");
	if (input.type === "password") {
        input.type = "text";
        lock.classList.remove("fa-lock");
        lock.classList.add("fa-lock-open");
    } else {
        input.type = "password";
        lock.classList.remove("fa-lock-open");
        lock.classList.add("fa-lock");
    }
}
lock.addEventListener("click", Change);