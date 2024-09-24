function takeInput(id){
	const amount = parseFloat(document.getElementById(id).value);
	if (!isNaN(amount) && amount>0){
		alert("You have made a donation")
		return amount;
	}
	else{
		alert("Please enter a valid amount");
		return 0;
	}
}
function takeDataFromTag(id){
	return	parseFloat(document.getElementById(id).innerHTML);
}
function addDataToElement(id, amount){
	document.getElementById(id).innerHTML = takeDataFromTag(id) + amount;
	document.getElementById('net-balance').innerHTML = takeDataFromTag('net-balance')-amount + ' BDT';
	const allInput = document.getElementsByTagName('input');
	for(let i=0 ; i<allInput.length ; i++){
		document.getElementsByTagName('input')[i].value = "";
	}
}



