// function startDisasterRelief() {
// 	// Adds people to list - takes in the list name and total to be added
// 	// and outputs the updated list with each person as an object
// 	var addPeopleToList = function(totalInList) {
// 		var newArray = []
// 		for(i=0; i<totalInList; i++) {
// 			var newPerson = { 
// 				name: prompt("Name number " + (i + 1) + "?"),
// 				tel: prompt("Enter number " + (i + 1) + "'s phone number:"),
// 				street: prompt("Enter number " + (i + 1) + "'s street name:")
// 			}
// 			newArray.push(newPerson);
// 		}
// 		return newArray;
// 	};

// 	//Add people to the victims list
// 	var numberOfVictims = parseInt(prompt("How many victims are there to help?"));
// 	var victims = addPeopleToList(numberOfVictims);
	
// 	//Add people to the volunteers list
// 	var numberOfVolunteers = +prompt("How many volunteers are there?");
// 	var volunteers = addPeopleToList(numberOfVolunteers);

// 	//Create list of victims' names
// 	var victimsList = "";
// 	for(i=0; i < victims.length; i++) {
// 		victimsList = victimsList + "\n\t " + (i + 1) + ". " + victims[i]['name'];
// 	}

// 	//Creat list of volunteers' names
// 	var volunteersList = "";
// 	for(i=0; i < victims.length; i++) {
// 		volunteersList = volunteersList + "\n\t " + (i + 1) + ". " + volunteers[i]['name'];
// 	}

// 	alert("Thanks for helping us start Disaster Relief.\n\nThere are " 
// 		+ numberOfVictims + " people who need help. \nAnd, " + numberOfVolunteers + 
// 		" volunteers who can help.\n\nNeed Help:" + victimsList + 
// 		"\n\nOffering Help:" + volunteersList);

// };

function startDisasterRelief() {
	// Adds people to list - takes in the list name and total to be added
	// and outputs the updated list with each person as an object
	var addPeopleToList = function(morePeople) {
		var newArray = []
		while(morePeople) {
			var newPerson = { 
				name: prompt("Enter a name:"),
				tel: prompt("Enter their phone number:"),
				street: prompt("Enter their street name:")
			}
			newArray.push(newPerson);
			morePeople = confirm("Click OK to enter another person's information and Cancel to stop.")
		}
		return newArray;
	};

	//Add people to the victims list
	var victimsToEnter = confirm("Click OK if you have VICTIMS to enter and Cancel if don't have any to enter.")
	var victims = addPeopleToList(victimsToEnter);
	
	//Add people to the volunteers list
	var volunteersToEnter = confirm("Click OK if you have VOLUNTEERS to enter and Cancel if don't have any to enter.")
	var volunteers = addPeopleToList(volunteersToEnter);

	//Create list of victims' names
	var victimsList = "";
	for(i=0; i < victims.length; i++) {
		victimsList = victimsList + "\n\t " + (i + 1) + ". " + victims[i]['name'];
	}

	//Creat list of volunteers' names
	var volunteersList = "";
	for(i=0; i < victims.length; i++) {
		volunteersList = volunteersList + "\n\t " + (i + 1) + ". " + volunteers[i]['name'];
	}

	alert("Thanks for helping us start Disaster Relief.\n\nThere are " 
		+ victims.length + " people who need help. \nAnd, " + volunteers.length + 
		" volunteers who can help.\n\nNeed Help:" + victimsList + 
		"\n\nOffering Help:" + volunteersList);

	// Find named victim's street name
	var victimName = prompt("Enter the name of a person in need:");
	for(i=0; i < victims.length; i++) {
		if (victims[i]['name'] === victimName) {
			var victimStreet = victims[i]['street'];
		}
	}

	var volunteersAvailable = "";

	// Find any volunteers that match victim's street name
	for(i=0; i < volunteers.length; i++) {
		if (volunteers[i]['street'] === victimStreet) {
			volunteersAvailable = volunteersAvailable + "\n\t " + (i + 1) + ". " + 
			volunteers[i]['name'];
		}
	}

	alert("Here is a list of volunteers near by who can help:" + volunteersAvailable);
};

// startDisasterRelief();