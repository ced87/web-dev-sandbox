const form = document.getElementById("add-form");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// Form Submit Event
form.addEventListener("submit", addItem);

// Delete event
itemList.addEventListener("click", removeItem);

// Filter event
filter.addEventListener("keyup", filterItems);

//
// Add Item
function addItem(event) {
  event.preventDefault();

  // Get Input Value
  const newItem = document.getElementById("item").value;

  // Create New li Element
  const li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  const deleteButton = document.createElement("button");

  // Add classes and "cross" to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.textContent = "✗";

  // Append button to li
  li.appendChild(deleteButton);

  // Append li to list
  itemList.appendChild(li);
}

// Remove Item
function removeItem(event) {
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(event) {
  // Convert to lowercase
  const text = event.target.value.toLowerCase();
  // get lis
  const items = itemList.getElementsByTagName("li");
  // convert to an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
