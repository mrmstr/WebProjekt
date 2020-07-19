function addElem()
{
	const task = prompt("Wprowadź imię i nazwisko piłkarza!");
	if (!task) display=none;
	let newElement = document.createElement('div');
	document.getElementById("newPlayer").appendChild(newElement);
	newElement.id = "newp";
	newElement.innerHTML = task + '<div id="edit" onclick="editEl()">Edytuj</div><div id="delete" onclick="delElem()">Usuń</div>';
}

function delElem()
{
	let delElement = newPlayer.removeChild(newp);	
}

function editEl()
{
	const edited = prompt("Edytuj swoje zadanie...");
	if (!edited) display=none;
	var next = document.getElementById("newp").innerHTML; 
  	var init = next.replace(next, edited);
  	document.getElementById("newp").innerHTML = init+'<div id="edit" onclick="editEl()">Edytuj</div><div id="delete" onclick="delElem()">Usuń</div>';
}