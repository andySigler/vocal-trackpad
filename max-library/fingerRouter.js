/*

	JS Script that converts the output of `handRouter.js` into individual
	touch/drag/release messages for each finger.

	This was writting in 2013, and should probably be rewritten for reability...

*/

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

inlets = 1;
outlets = 1;

var router;
var totalRoutes = 1;
var available = [];

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function init(){
	if(jsarguments.length>1) totalRoutes = jsarguments[1];

	outlets = totalRoutes;

	router = {};

	for(var i=0;i<totalRoutes;i++){
		available[i] = i;
	}
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function touch(fingerIndex,x,y){
	if(available.length>0 && router[fingerIndex]===undefined){
		router[fingerIndex] = {
			'output': available[0],
			'x': x,
			'y': y
		};
		available.splice(0,1);
		outlet(router[fingerIndex].output,['touch',x,y]);
	}
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function drag(fingerIndex,x,y){
	if(router[fingerIndex]!==undefined){
		router[fingerIndex].x = x;
		router[fingerIndex].y = y;
		outlet(router[fingerIndex].output,['drag',x,y]);
	}
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function release(fingerIndex,x,y){
	if(router[fingerIndex]!==undefined){
		available[available.length] = router[fingerIndex].output;
		outlet(router[fingerIndex].output,['release',x,y]);
		router[fingerIndex]=undefined;
	}
}

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

function bang(){
	for(var f in router){
		if(router[f]!==undefined){
			var outletIndex = router[f].output;
			var x = router[f].x;
			var y = router[f].y;
			outlet(outletIndex,['release',x,y]);
		}
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
