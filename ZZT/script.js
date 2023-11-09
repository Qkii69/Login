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

const locks = document.getElementsByClassName("lock");
const passwords = document.getElementsByClassName("passwords");

function change(event) {
	const lockIndex = Array.from(locks).indexOf(event.target);
	const input = passwords[lockIndex];
	if(input.type === "password"){
		input.type = "text";
		event.target.classList.remove("fa-lock");
		event.target.classList.add("fa-lock-open");
	}
	else{
		input.type = "password";
		event.target.classList.remove("fa-lock-open");
		event.target.classList.add("fa-lock");
	}
}

Array.from(locks).forEach(element => {
	element.addEventListener("click", change);
});

const slide = document.getElementById("slide");
const page = document.getElementsByClassName("signPage")[0];
const lcard = document.getElementsByClassName("loginCard")[0];
const scard = document.getElementsByClassName("signCard")[0];
const screen = document.getElementsByClassName("screenS")[0];

clear = () =>{
	screen.classList.add('animacja');
	page.classList.add('animacja');
	setTimeout(()=>{
		lcard.classList.remove('nic');
		lcard.classList.add('animacja');
	}, 700);
	setTimeout(()=>{
		lcard.classList.remove('nic');
		lcard.classList.add('animacja');
		scard.classList.add('nic');
	}, 1400)
};
slide.addEventListener("click", clear);