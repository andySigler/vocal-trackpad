////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

var currentOutput;
var totalOutputs = 1;
var outputData;

inlets = 1;
outlets = totalOutputs;

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function init(){
	if(jsarguments.length>1) totalOutputs = jsarguments[1];
	
	outlets = totalOutputs;
	
	currentOutput = [];

	outputSum = [];
	for(var i=0;i<totalOutputs;i++){
		outputSum[i] = 0;
	}
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function touch(one,two,three){
	for(var i=0;i<currentOutput.length;i++){
		outlet(currentOutput[i],['touch',one,two,three]);
	}
};
function drag(one,two,three){
	for(var i=0;i<currentOutput.length;i++){
		outlet(currentOutput[i],['drag',one,two,three]);
	}
};
function release(one,two,three){
	for(var i=0;i<currentOutput.length;i++){
		outlet(currentOutput[i],['release',one,two,three]);
	}
};

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function add(newIndex){
	if(newIndex<totalOutputs && newIndex>=0){
		outputSum[newIndex]++;
		if(outputSum[newIndex]===1){
			currentOutput.push(newIndex);
		}
	}
}

function sub(newIndex){
	if(newIndex<totalOutputs && newIndex>=0){
		outputSum[newIndex]--;
		if(outputSum[newIndex]<=0){
			outputSum[newIndex]=0;
			for(var i=0;i<currentOutput.length;i++){
				if(currentOutput[i]===newIndex){
					outlet(currentOutput[i],'bang');
					currentOutput.splice(i,1);
					break;
				}
			}
		}
	}
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function bang(){
	for(var i=0;i<currentOutput.length;i++){
		outlet(currentOutput[i],'bang');
	}
	init();
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

init();

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////