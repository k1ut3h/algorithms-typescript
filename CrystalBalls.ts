function crystalBalls(building:number[]):number{
	let jmpAmount = Math.floor(Math.sqrt(building.length));
	let i = 0;

	if (building[i]==1){
		return 0;
	}

	while(i<building.length){
		if(building[i]==1){
			break;
		}
		i+=jmpAmount;
	}
	i -= jmpAmount;
	for(;i<building.length; ++i){
		if(building[i]==1){
			return i;
		}
	}
	return -1;
}

function test1():void{
	if (crystalBalls([0,0,0,0,1,1,1,1,1,1,1,1])==4){
		console.log("✅test1 passed");
	} else {
		console.log("❌test1 failed");
	}
}

function test2():void{
	if (crystalBalls([0,0,0,0])==-1){
		console.log("✅test2 passed");
	} else {
		console.log("❌test2 failed");
	}
}

function test3():void{
	if (crystalBalls([0,0,0,0,0,0,0,0,1])==8){
		console.log("✅test3 passed");
	} else {
		console.log("❌test3 failed");
	}
}

function test4():void{
	if (crystalBalls([1,1,1,1,1,1,1,1,1])==0){
		console.log("✅test4 passed");
	} else {
		console.log("❌test4 failed");
	}
}

test1();
test2();
test3();
test4();
