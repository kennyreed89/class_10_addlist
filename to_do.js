let id = 0; // allows button to be incrumented
document.getElementById("add").onclick = () => {
  //event lisener for click
  let createdDate = new Date(); //for new added dates
  let table = document.getElementById("list"); //so table can be selected
  let row = table.insertRow(1); // row starts at 0, this row is created when nessicary fields are completed
  row.setAttribute(`id`, `item-${id}`); //attribute for button
  row.insertCell(0).innerHTML = document.getElementById("new-task").value;
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${
    createdDate.getMonth() + 1
  }-${createdDate.getDate()}`; //gets data entered and adds to cell
  row.insertCell(2).innerHTML = document.getElementById("new-start-date").value; //gets data entered and adds to cell
  row.insertCell(3).innerHTML = document.getElementById("new-end-date").value; //gets data entered and adds to cell
  let actions = row.insertCell(4);
  actions.appendChild(deleteButton(id++)); //buton is is added in every row created
  document.getElementById("new-task").value = "";
};

function deleteButton(id) {
  // function for delete button
  let btn = document.createElement("button");
  btn.className = "btn btn-primary"; //bootstrap button
  btn.id = id; //buton id = 0 (see top of page)
  btn.innerHTML = "Delete"; // text for button
  btn.onclick = () => {
    //listening for click
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete); // removes row (see line 14)
  };

  return btn; //returns button for reuse
}
