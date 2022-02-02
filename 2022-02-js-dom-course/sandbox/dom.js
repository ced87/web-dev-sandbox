// EXAMINE THE DOCUMENT OBJECT /////////////////////////

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//
//
// getElementById //////////////////////////////////////
// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// console.log(headerTitle);

// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>Hello</h3>";

// header.style.borderBottom = "3px solid black";

//
//
// getElementsByClassName ///////////////////////////////
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "HELLO 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (let index = 0; index < items.length; index++) {
//   const element = items[index];
//   element.style.backgroundColor = "#f4f4f4";
// }

//
//
// getElementsByTagName //////////////////////////////////
// const li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "HELLO 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let index = 0; index < li.length; index++) {
//   const element = li[index];
//   element.style.backgroundColor = "yellow";
// }

//
//
// querySelector ///////////////////////////////////////
// const header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// const input = document.querySelector("input");
// input.value = "Hello World";

// const submit = document.querySelector("input[type='submit']");
// submit.value = "SEND";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

//
//
// querySelectorAll //////////////////////////////////////
// const titles = document.querySelectorAll(".title");

// console.log(titles);

// titles[0].textContent = "Hello!!!";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");

// for (let index = 0; index < odd.length; index++) {
//   const oddElement = odd[index];
//   const evenElement = even[index];
//   oddElement.style.backgroundColor = "#EDFF9B";
//   evenElement.style.backgroundColor = "#9EFFA6";
// }

//
//
// TRAVESRING THE DOM ////////////////////////////////////
// const itemList = document.querySelector("#items");

// parentNode ////////
//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);

// parentElement /////////
//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);

// childNodes ////////////
//
// console.log(itemList.childNodes);

// children /////////////
//
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// firstChild ///////////
//
// console.log(itemList.firstChild);

// firstElementChild ///////////
//
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "HELLO ONE!";

// lastElementChild ///////////
//
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "HELLO FIVE!";

//nextSibling ////////////
//
// console.log(itemList.nextSibling);

//nextElementSibling ////////////
//
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.textContent = "TEST";

//previousElementSibling ////////////
//
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//
//
// createElement ///////////////////////////////////////////////////////
// // create a div
// const newDiv = document.createElement("div");

// // add class name
// newDiv.className = "hello-class";

// // add id
// newDiv.id = "hello-id";

// // add attribute
// newDiv.setAttribute("title", "Hello Div");

// // create text node
// const newDivText = document.createTextNode("Hello World!");

// // add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

//
//
// eventListener ///////////////////////////////////////////////////////
// const button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //   console.log("Button Clicked!");
//   //   document.getElementById("header-title").textContent = "Changed";
//   //   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   //   console.log(e);

//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);

// Variables for testing
const output = document.getElementById("output");
const button = document.getElementById("button");
const box = document.getElementById("box");
const itemInput = document.querySelector("input[type='text']");
const form = document.querySelector("form");
const select = document.querySelector("select");

//   output.innerHTML = "<h4>" + e.target.id + "</h4>";

//   // console.log(e.type);

//   // console.log(e.clientX, e.clientY);
//   // console.log(e.offsetX, e.offsetY);

//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
// }

//
//

//
//
// MOUSE ///////////////////////
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

//
//
// KEYBOARD ////////////////////////////
// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

//
//
// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

//
//
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

//
//
// itemInput.addEventListener("input", runEvent);

//
//
// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

//
//
form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);

  // output.innerHTML =
  //   "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + "</h3>";

  // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";
  // document.body.style.backgroundColor =
  //   "rgb(" + e.offsetX + "," + e.offsetY + ", 40)";

  // console.log(e.target.value);
  // output.innerHTML = "<h3>" + e.target.value + "</h3>";
}
