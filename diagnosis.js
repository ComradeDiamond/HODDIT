//Symptoms list!
symptoms = [];

function CreateCondition(name, description, image, prerequisite) {
	//Creates the condition and the associated items with it that we're going to display later

	this.n = name;
	this.description = description;
	this.image = image;

	if (prerequisite != undefined)
	{
		this.prerequisite = prerequisite;
	}
}
CreateCondition.prototype.checkPrerequisite = function() {
	return (symptoms.indexOf(this.prerequisite.n) != -1);
}

//Identifies the treatment type and converts it into text
treatmentList = {
	"boringStuff": new CreateCondition("Revitalize", "Drink 8 ounces of water a day, eat a balanced diet, and get 9 hours of sleep a day.", ""),
	"quarantine": new CreateCondition("Quarantine", "Stay at home until you feel better.", ""),
	"convert": new CreateCondition("Convert", "Convert to the light side, and start worshipping the holy faith.", ""),
	"reflecc": new CreateCondition("Purify", "Believe in the holy faith of Discord Light Mode.", ""),
	"breakPhone": new CreateCondition("Abstience", "Stop being an uncultured swine.", ""),
	"withdrawalCaffiene": new CreateCondition("Withdrawal", "Stay away from coffee and any caffinated products.", ""),
	"hospital": new CreateCondition("Hospitalize", "Yeet yourself into a hospital bed", ""),
	"pray": new CreateCondition("Pray", "I actually can't treat you because there's no vaccine. On the bright side, you could try to use the \
		Antivax Holy Jewel or some natural crystal remedies. On the even brighter side, you only have a 10% chance of dying in NYC.", ""),
	"vaccine": new CreateCondition("Vaccination", "Get your vaccine history up to date.", ""),
	"IV": new CreateCondition("IV", "It is reccomended you go to a hospital and get IV bags", ""),
	"disconnect": new CreateCondition("Disconnect", "Don't engage in any electronic devices for at least 24 hours, or longer if you still don't feel better", ""),
	"ibuprofin": new CreateCondition("Ibuprofin", "Take ibuprofin every 4 hours until you feel better", ""),
	"painkiller": new CreateCondition("OTC Craze", "The disease will go away on its own, take a painkiller for better results", ""), 
	"asprin": new CreateCondition("Aspirin", "Take 2-3 asprin pills a day, seperated by around 6 hour intervals", ""),
	"surgery": new CreateCondition("Large Scale Surgery", "Arrange a surgical appointment with your doctor ASAP", ""), 
	"hotPillow": new CreateCondition("Home Treatment", "Lay down and put a bottle of hot water on your stomach - no need to make a superbug or smth", ""),
	"cook": new CreateCondition("Use Your Goddamn Stove", "Eat cooked food instead of raw sushi platters", ""),
	"cream": new CreateCondition("External Treatment", "Apply lotion or other skin calming items", "")
}

const symptomList = {
	//head
	"fever": new CreateCondition("Fever", "An unpleasant, burning feeling inside your head", ""),
	"dizziness": new CreateCondition("Dizziness", "A confused state", ""),
	"headaches": new CreateCondition("Headaches", "Annoying, throbbing feeling inside your head", ""),

	//Eyes
	"swell": new CreateCondition("Swelling", "Your eyes are swelling red", ""),
	"eyebags": new CreateCondition("Eyebags", "Your eyes feel drowsy and heavy", ""),

	//Mouth
	"nausea": new CreateCondition("Nausea", "Throwing up", ""),
	"tasteLoss": new CreateCondition("Taste Loss", "Lost of taste", ""),
	"sated": new CreateCondition("Sated", "The rare symptom of not feeling hungry", ""),
	"soreThroat": new CreateCondition("Sore Throat", "A painful feeling in the throat when swallowing", ""),

	//Body
	"fatigue": new CreateCondition("Fatigue", "Overall feeling of tiredness", ""),
	"tummyAche": new CreateCondition("TummyAche", "Abdominal Pain, might or might not go away", ""),
	"hunger": new CreateCondition("Hunger", "Constantly feeling hungry", ""),
	"chills": new CreateCondition("Chills", "Feeling irrationally cold", ""),
	"bleeding": new CreateCondition("General Bleeding", "Any trace of blood in your body", ""),
	"itching": new CreateCondition("General Itching", "Any general itching in your body", ""),

	//Legs
	"jointPain": new CreateCondition("Joint pain", "It hurts to move", ""),
	"paralysis": new CreateCondition("Paralysis", "Known as being on a carpet of spikes, your leg feels tingly for no reason", ""),

	//Arms
	"fingerPain": new CreateCondition("Finger Pain", "Pain when moving your fingers", ""),
	"veinColor": new CreateCondition("Vein Intensification", "Your veins turn abnormally blue", ""),
	"rash": new CreateCondition("Rash", "A red color on your arms", ""),
}

//Unrevealed items - adding them here because js is getting weird and wants this to initialize before I refer to itself
symptomList.bleedingHand = new CreateCondition("Hand Bleeding", "A sore in your hand, or bleeding in your hands", "", symptomList.bleeding);
symptomList.bleedingHead = new CreateCondition("Head Bleeding", "Your head is covered in blood", "", symptomList.bleeding);
symptomList.itchingEyes = new CreateCondition("Itching Eyes", "Eyes twitching and you can't resist rubbing them", "", symptomList.itching);
symptomList.itchingHands = new CreateCondition("Itching Hands", "Your hands feel like they are going to go insane", "", symptomList.itching);
symptomList.hadMeat =  new CreateCondition("Ate Meat or Fish", "You just had meat or fish", "", symptomList.nausea);
symptomList.cough = new CreateCondition("Coughed", "Choking on air and then expelling it", "", symptomList.soreThroat); //Unlocks via sore throat
symptomList.troubleBreathing = new CreateCondition("Tight Lungs", "You have trouble breathing", "", symptomList.soreThroat);
symptomList.bonePain = new CreateCondition("Bone Pain", "Your bones hurt no matter what and swell", "", symptomList.jointPain);
symptomList.migrane = new CreateCondition("Migrane", "Extreme sensitivity to light", "", symptomList.dizziness); //Unlocks via dizziness
symptomList.eyePain = new CreateCondition("Eye Pain","Your eyes hurt when looking at anything light","", symptomList.dizziness);

//Here so we can loop add the elements later
const symptomHead = [symptomList.fever, symptomList.dizziness, symptomList.headaches, symptomList.bleedingHead];
const symptomEyes = [symptomList.swell, symptomList.eyebags, symptomList.itchingEyes, symptomList.migrane, symptomList.eyePain, symptomList.itchingEyes];
const symptomMouth = [
	symptomList.nausea, symptomList.tasteLoss, symptomList.sated, symptomList.soreThroat, symptomList.hadMeat, symptomList.cough, symptomList.troubleBreathing
];
const symptomBody = [symptomList.fatigue, symptomList.tummyAche, symptomList.hunger, symptomList.chills, symptomList.bleeding, symptomList.itching];
const symptomLegs = [symptomList.bonePain, symptomList.jointPain, symptomList.paralysis];
const symptomArms = [symptomList.itchingHands, symptomList.bleedingHand, symptomList.fingerPain, symptomList.veinColor, symptomList.rash];

function CreateDisease(diseaseName, diseaseSymptoms, diseaseTreatments) { 
//Creates a new PlagueINC disease that will rampage the world and ruin 2020 even more

	this.name = diseaseName;
	this.symptoms = diseaseSymptoms;
	this.treatment = diseaseTreatments;
}
CreateDisease.prototype.relevance = function() {
	let numMatch = 0;

	for (var i in symptoms)
	{
		if (this.symptoms.indexOf(syptoms[i] != -1)) //Hey look, red white and blue in sublime text!
		{
			numMatch++
		}
	}
	return numMatch;
}

//Creates the diseases with their official names
COVID = new CreateDisease("COVID-19", [symptomList.fever.n, symptomList.chills.n, symptomList.fatigue.n, symptomList.troubleBreathing.n, symptomList.veinColor.n] 
	,[treatmentList.IV, treatmentList.hospital, treatmentList.pray, treatmentList.boringStuff, treatmentList.quarantine]);
flu = new CreateDisease("Influenza", [symptomList.fever.n, symptomList.chills.n, symptomList.fatigue.n, symptomList.soreThroat.n], 
	[treatmentList.boringStuff, treatmentList.quarantine, treatmentList.ibuprofin, treatmentList.vaccine]);
staph = new CreateDisease("Staphylococcus Aureus", [symptomList.rash, symptomList.bleedingHand, symptomList.itchingHands], [treatmentList.cream]);
ecoli = new CreateDisease("Escherichia Coli", [symptomList.nausea.n, symptomList.tummyAche.n, symptomList.hadMeat.n], 
	[treatmentList.cook, treatmentList.asprin, treatmentList.hotPillow]);
pneumonia = new CreateDisease("Pneumonia", [symptomList.soreThroat.n, symptomList.fever.n, symptomList.headaches.n, symptomList.cough.n], 
	[treatmentList.hospital, treatmentList.boringStuff, treatmentList.IV]);
boneBreak = new CreateDisease("Broken Bones", [symptomList.jointPain.n, symptomList.bonePain.n, symptomList.fingerPain.n], 
	[treatmentList.surgery, treatmentList.hospital]);
concussion = new CreateCondition("Concussion", [symptomList.bleedingHead.n], [treatmentList.surgery]);
meNoSleep = new CreateCondition("General Headache", [symptomList.headaches.n, symptomList.dizziness.n, symptomList.swell.n], 
	[treatmentList.disconnect, treatmentList.boringStuff, treatmentList.withdrawalCaffiene]);
darkMode = new CreateCondition("Dark Mode User", [symptomList.headaches.n, symptomList.dizziness.n, symptomList.migrane.n, ], 
	[treatmentList.convert, treatmentList.reflecc, treatmentList.breakPhone]);

const diseaseList = [COVID, flu, staph, ecoli, pneumonia, boneBreak, concussion, meNoSleep, darkMode];

function interactionCheck() { //Checks to see which thing has the highest percent of match rate
	if (symptoms == 0)
	{
		alert("You're healthy");
		return;
	}

	let topGuessPercent = 0;
	let topGuess = "none";

	for (var i in diseaseList)
	{
		if ((diseaseList[i].relevance/diseaseList[i].symptoms.length) > topGuessPercent)
		{
			topGuess = diseaseList[i];
		}
	}
	displayGuess(topGuess);
}