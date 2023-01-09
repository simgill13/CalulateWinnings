
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function nextNearest(value, number) {
  var remainder = value % number;
  if (remainder >= (number / 2))
    value = value - remainder + number;
  else
	value = value - remainder;
  return value;
}

function calculateWinnings() {
	var teams = parseInt(1); 
	var entryFee = parseFloat(920); 
	var payouts = parseInt(10); 
	var payoutRatio = parseInt(2); 
	var round = parseInt(1); 
	var roundError = 0; 
	
	var pot = teams * entryFee;
	
	var teamShares = new Array();
	var totalShares = 0;
	var teamWinnings = new Array();
	var totalWinnings = 0;
  var i = 0

	for (i = 1; i < payouts + 1; i++) { 
    	if (i < (payouts + 1)) {
    		teamShares[i] =  1 / (Math.pow(payoutRatio, i));
    	}
    	else {
    	}
    	totalShares += teamShares[i];
	}

	for (i = payouts; i > 0; i--) { 
    	if (i < (payouts + 1)) {
    		teamWinnings[i] = round * Math.round((pot * teamShares[i] / totalShares) / round);
    	}
    	else {
    	}
    	totalWinnings += teamWinnings[i];
    	roundError = pot - totalWinnings;
	}
	if (roundError > 0) {
		teamWinnings[1] += roundError;
    	totalWinnings += roundError;
	}



	for (i = 1; i < (payouts + 1); i++) { 
    console.log("place", i, teamShares[i], teamWinnings[i].toFixed(0))
	}
	

}

calculateWinnings()