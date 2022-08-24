const btns = document.querySelectorAll("button");
const inputField = document.getElementById("input-field");
const addStart = document.querySelector("#add-start");
const addEnd = document.querySelector("#add-end");
const removeFirst = document.querySelector("#remove-first");
const removeLast = document.querySelector("#remove-last");
const reverseList = document.querySelector("#reverse-list");
const guestListDiv = document.querySelector(".our-list");
const inputFrom = document.querySelector("#input-field-remove-from");
const inputTo = document.querySelector("#input-field-remove-to");
const inputCertain = document.querySelector("#input-field-add-somewhere");

let guests = [];

displayGuestList();

btns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		let inputFieldValue = inputField.value;
		let inputFieldFrom = inputFrom.value;
		let inputFieldTo = inputTo.value;
		let inputFieldCertainIndex = inputCertain.value;

		if (event.target.id == "add-start") {
			guests.unshift(inputFieldValue);
		} else if (event.target.id == "add-end") {
			guests.push(inputFieldValue);
		} else if (event.target.id == "remove-first") {
			guests.shift(inputFieldValue);
		} else if (event.target.id == "remove-last") {
			guests.pop(inputFieldValue);
		} else if (event.target.id == "reverse-list") {
			guests.reverse(inputFieldValue);
		} else if (event.target.id == "remove-from-to") {
			guests.splice(inputFieldFrom, inputFieldTo);
		} else if (event.target.id == "add-at-certain-point") {
			guests.splice(inputFieldCertainIndex, 0, inputFieldValue);
		} else if (event.target.id == "last-to-first") {
			lastItem = guests.pop();
			guests.unshift(lastItem);
		} else if (event.target.id == "first-to-last") {
			firstItem = guests.shift();
			guests.push(firstItem);
		} else if (event.target.id == "a-z") {
			guests.sort();
		} else if (event.target.id == "z-a") {
			guests.sort().reverse();
		}

		console.log(event.target.id);

		localStorage.setItem("guestNames", JSON.stringify(guests));
		displayGuestList();
	});
});

function displayGuestList() {
	guests = JSON.parse(localStorage.getItem("guestNames")) || [];

	const ourGuestList = document.querySelector("ul");
	if (ourGuestList !== null) {
		ourGuestList.remove();
	}
	const ul = document.createElement("ul");

	for (let i = 0; i < guests.length; ++i) {
		let newGuest = document.createElement("li");
		let text = document.createTextNode(guests[i]);
		newGuest.appendChild(text);
		ul.appendChild(newGuest);
	}
	guestListDiv.appendChild(ul);
}
