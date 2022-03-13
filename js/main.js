/* Amogus */
// sus

let myImage = document.querySelector("img");

myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");

	if (mySrc === "images/amogus-drip.png") {
		myImage.setAttribute("src", "images/amogus-red.png");
	} else if (mySrc === "images/amogus-red.png") {
		myImage.setAttribute("src", "images/amogus-sus.png");
	} else {
		myImage.setAttribute("src", "images/amogus-drip.png");
	}
};

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt("Please enter your name.");

	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);

		myHeading.innerHTML = "Amogus, " + myName;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");

	myHeading.innerHTML = "Amogus, " + storedName;
}

myButton.onclick = function () {
	setUserName();
};
