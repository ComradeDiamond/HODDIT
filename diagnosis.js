//Symptoms list!
symptoms = [];

function Condition(name, description, image, prerequisite) {
	//Creates the condition and the associated items with it that we're going to display later

	this.n = name;
	this.description = description;
	this.image = `Images/${image}.jpg`;

	if (prerequisite != undefined)
	{
		this.prerequisite = prerequisite;
	}
}
Condition.prototype.checkPrerequisite = function() {
	return (symptoms.indexOf(this.prerequisite.n) != -1);
}

//Identifies the treatment type and converts it into text
treatmentList = {
	"boringStuff": new Condition("Revitalize", "Drink 8 ounces of water a day, eat a balanced diet, and get 9 hours of sleep a day.", "water"),
	"quarantine": new Condition("Quarantine", "Stay at home until you feel better.", "quarantine"),
	"convert": new Condition("Convert", "Convert to the light side, and start worshipping the holy faith.", "convert"),
	"reflecc": new Condition("Purify", "Believe in the holy faith of Discord Light Mode.", "holyWater"),
	"breakPhone": new Condition("Abstience", "Stop being an uncultured swine.", "smosh"),
	"withdrawalCaffiene": new Condition("Withdrawal", "Stay away from coffee and any caffinated products.", "destroyStarbucks"),
	"hospital": new Condition("Hospitalize", "Yeet yourself into a hospital bed", "bed"),
	"pray": new Condition("Pray", "I actually can't treat you because there's no vaccine. On the bright side, you could try to use the \
		Antivax Holy Jewel or some natural crystal remedies. On the even brighter side, you only have a 8% chance of dying in NYC according to tech bot", "pray"),
	"vaccine": new Condition("Vaccination", "Get your vaccine history up to date.", "vaccine"),
	"IV": new Condition("IV", "It is reccomended you go to a hospital and get IV bags", "dripBar"),
	"disconnect": new Condition("Disconnect", "Don't engage in any electronic devices for at least 24 hours, or longer if you still don't feel better", "noWifi"),
	"ibuprofin": new Condition("Ibuprofin", "Take ibuprofin every 4 hours until you feel better", "ibp"),
	"painkiller": new Condition("OTC Craze", "The disease will go away on its own, take a painkiller for better results", "pills"), 
	"asprin": new Condition("Aspirin", "Take 2-3 asprin pills a day, seperated by around 6 hour intervals", "aspirin"),
	"surgery": new Condition("Large Scale Surgery", "Arrange a surgical appointment with your doctor ASAP", "surgeon"), 
	"hotPillow": new Condition("Home Treatment", "Lay down and put a bottle of hot water on your stomach - no need to make a superbug or smth", "hotBottle3"),
	"cook": new Condition("Use Your Goddamn Stove", "Eat cooked food instead of raw sushi platters", "itsRAW"),
	"cream": new Condition("External Treatment", "Apply lotion or other skin calming items, as often as you need. Avoid swallowing.", "dove")
}

const symptomList = {
	//head
	"fever": new Condition("Fever", "An unpleasant, burning feeling inside your head", ""),
	"dizziness": new Condition("Dizziness", "A confused state", ""),
	"headaches": new Condition("Headaches", "Annoying, throbbing feeling inside your head", ""),

	//Eyes
	"swell": new Condition("Swelling", "Your eyes are swelling red", ""),
	"eyebags": new Condition("Eyebags", "Your eyes feel drowsy and heavy", ""),

	//Mouth
	"nausea": new Condition("Nausea", "Throwing up", ""),
	"tasteLoss": new Condition("Taste Loss", "Lost of taste", ""),
	"sated": new Condition("Sated", "The rare symptom of not feeling hungry", ""),
	"soreThroat": new Condition("Sore Throat", "A painful feeling in the throat when swallowing", ""),

	//Body
	"fatigue": new Condition("Fatigue", "Overall feeling of tiredness", ""),
	"tummyAche": new Condition("TummyAche", "Abdominal Pain, might or might not go away", ""),
	"chills": new Condition("Chills", "Feeling irrationally cold", ""),
	"bleeding": new Condition("General Bleeding", "Any trace of blood in your body", ""),
	"itching": new Condition("General Itching", "Any general itching in your body", ""),

	//Legs
	"jointPain": new Condition("Joint pain", "It hurts to move", ""),
	"paralysis": new Condition("Paralysis", "Known as being on a carpet of spikes, your leg feels tingly for no reason", ""),

	//Arms
	"fingerPain": new Condition("Finger Pain", "Pain when moving your fingers", ""),
	"veinColor": new Condition("Vein Intensification", "Your veins turn abnormally blue", ""),
	"rash": new Condition("Rash", "A red color on your arms", ""),
}

//Unrevealed items - adding them here because js is getting weird and wants this to initialize before I refer to itself
symptomList.bleedingHand = new Condition("Hand Bleeding", "A sore in your hand, or bleeding in your hands", "", symptomList.bleeding);
symptomList.bleedingHead = new Condition("Head Bleeding", "Your head is covered in blood", "", symptomList.bleeding);
symptomList.itchingEyes = new Condition("Itching Eyes", "Eyes twitching and you can't resist rubbing them", "", symptomList.itching);
symptomList.itchingHands = new Condition("Itching Hands", "Your hands feel like they are going to go insane", "", symptomList.itching);
symptomList.hadMeat =  new Condition("Ate Meat or Fish", "You just had meat or fish", "", symptomList.nausea);
symptomList.cough = new Condition("Coughed", "Choking on air and then expelling it", "", symptomList.soreThroat); //Unlocks via sore throat
symptomList.troubleBreathing = new Condition("Tight Lungs", "You have trouble breathing", "", symptomList.soreThroat);
symptomList.bonePain = new Condition("Bone Pain", "Your bones hurt no matter what and swell", "", symptomList.jointPain);
symptomList.migrane = new Condition("Migrane", "Extreme sensitivity to light", "", symptomList.dizziness); //Unlocks via dizziness
symptomList.eyePain = new Condition("Eye Pain","Your eyes hurt when looking at anything light","", symptomList.dizziness);

//Here so we can loop add the elements later
//We need the JSON instead of plugging it all in here because that's how we're going to display the items later and use it in Disease
const symptomHead = [symptomList.fever, symptomList.dizziness, symptomList.headaches, symptomList.bleedingHead];
const symptomEyes = [symptomList.swell, symptomList.eyebags, symptomList.itchingEyes, symptomList.migrane, symptomList.eyePain, symptomList.itchingEyes];
const symptomMouth = [
	symptomList.nausea, symptomList.tasteLoss, symptomList.sated, symptomList.soreThroat, symptomList.hadMeat, symptomList.cough, symptomList.troubleBreathing
];
const symptomBody = [symptomList.fatigue, symptomList.tummyAche, symptomList.chills, symptomList.bleeding, symptomList.itching];
const symptomLegs = [symptomList.bonePain, symptomList.jointPain, symptomList.paralysis];
const symptomArms = [symptomList.itchingHands, symptomList.bleedingHand, symptomList.fingerPain, symptomList.veinColor, symptomList.rash];

function Disease(diseaseName, diseaseSymptoms, diseaseTreatments) { 
//Creates a new PlagueINC disease that will rampage the world and ruin 2020 even more

	this.name = diseaseName;
	this.symptoms = diseaseSymptoms;
	this.treatment = diseaseTreatments;
}
Disease.prototype.relevance = function() {
	let numMatch = 0;

	for (var i in symptoms)
	{
		if (this.symptoms.indexOf(symptoms[i]) != -1) //Hey look, red white and blue in sublime text!
		{
			numMatch++
		}
	}
	return numMatch;
}

//Creates the diseases with their official names
COVID = new Disease("COVID-19", [symptomList.fever.n, symptomList.chills.n, symptomList.fatigue.n, symptomList.troubleBreathing.n, symptomList.veinColor.n] 
	,[treatmentList.IV, treatmentList.hospital, treatmentList.pray, treatmentList.boringStuff, treatmentList.quarantine]);
flu = new Disease("Influenza", [symptomList.fever.n, symptomList.chills.n, symptomList.fatigue.n, symptomList.soreThroat.n], 
	[treatmentList.boringStuff, treatmentList.quarantine, treatmentList.ibuprofin, treatmentList.vaccine]);
staph = new Disease("Staphylococcus Aureus", [symptomList.rash.n, symptomList.bleedingHand.n, symptomList.itchingHands.n], [treatmentList.cream]);
ecoli = new Disease("Escherichia Coli", [symptomList.nausea.n, symptomList.tummyAche.n, symptomList.hadMeat.n], 
	[treatmentList.cook, treatmentList.asprin, treatmentList.hotPillow]);
pneumonia = new Disease("Pneumonia", [symptomList.soreThroat.n, symptomList.fever.n, symptomList.headaches.n, symptomList.cough.n], 
	[treatmentList.hospital, treatmentList.boringStuff, treatmentList.IV]);
boneBreak = new Disease("Broken Bones", [symptomList.jointPain.n, symptomList.bonePain.n, symptomList.fingerPain.n], 
	[treatmentList.surgery, treatmentList.hospital]);
concussion = new Disease("Concussion", [symptomList.bleedingHead.n], [treatmentList.surgery]);
meNoSleep = new Disease("General Headache", [symptomList.headaches.n, symptomList.dizziness.n, symptomList.swell.n], 
	[treatmentList.disconnect, treatmentList.boringStuff, treatmentList.withdrawalCaffiene]);
darkMode = new Disease("Dark Mode User", [symptomList.headaches.n, symptomList.dizziness.n, symptomList.migrane.n, symptomList.eyePain], 
	[treatmentList.convert, treatmentList.reflecc, treatmentList.breakPhone]);

const diseaseList = [COVID, flu, staph, ecoli, pneumonia, boneBreak, concussion, meNoSleep, darkMode];

function processTopGuess() { //Checks to see which thing has the highest percent of match rate and shows it
	if (symptoms == 0)
	{
		alert("You're healthy");
		return;
	}

	let topGuessPercent = 0;
	let topGuess = "none";

	for (var i in diseaseList)
	{
		let tempGuessPercent = (diseaseList[i].relevance()/diseaseList[i].symptoms.length);

		if (tempGuessPercent > topGuessPercent)
		{
			topGuess = diseaseList[i];
			topGuessPercent = tempGuessPercent;
		}
	}
	displayGuess(topGuess);
}