function startDisasterRelief() {
	var victims = [];
	var volunteers = [];
	var numberOfVictims = parseInt(prompt("How many victims are there to help?"));

	for(i=0; i<numberOfVictims; i++) {
		var victim = prompt("Name of victim " + (i + 1) + "?")
		victims.push({ name: victim });
		victims[i]['tel'] = prompt("Enter " + victim + "'s phone number:");
		victims[i]['street'] = prompt("Enter " + victim + "'s street name:");		
	}
	console.log(victims[0]);
	console.log(victims[1]);
	console.log(victims);
}
startDisasterRelief();