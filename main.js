var victims = [];
var volunteers = [];
var numberOfVictims = parseInt(prompt("How many victims are there to help?"));

var addPeopleToList = function(listName, totalInList) {
	for(i=0; i<totalInList; i++) {
	var newName = prompt("Name number " + (i + 1) + "?")
	listName.push({ name: newName });
	listName[i]['tel'] = prompt("Enter number " + (i + 1) + "'s phone number:");
	listName[i]['street'] = prompt("Enter number " + (i + 1) + "'s street name:");
	return listName
};

function startDisasterRelief() {
	// for(i=0; i<numberOfVictims; i++) {
	// 	var victim = prompt("Name of victim " + (i + 1) + "?")
	// 	victims.push({ name: victim });
	// 	victims[i]['tel'] = prompt("Enter " + victim + "'s phone number:");
	// 	victims[i]['street'] = prompt("Enter " + victim + "'s street name:");		
	// }

	var numberOfVolunteers = parseInt(prompt("How many volunteers are there?"));

	for(i=0; i<numberOfVolunteers; i++) {
		var volunteer = prompt("Name of volunteer " + (i + 1) + "?");
		volunteers.push({ name: volunteer });
		volunteers[i]['tel'] = prompt("Enter " + volunteer + "'s phone number:");
		volunteers[i]['street'] = prompt("Enter " + volunteer + "'s street name:");
	}	
	// console.log(volunteers[0]);
	// console.log(volunteers[1]);
	// console.log(volunteers);

	alert("Thanks for helping us start Disaster Relief.\n\nThere are " 
		+ numberOfVictims + " people who need help. \nAnd, " + numberOfVolunteers + 
		" volunteers who can help.\n\nVictims:\n\t" + victims[0] + 
		"\n\nVolunteers:\n\t" + volunteers);
};
startDisasterRelief();