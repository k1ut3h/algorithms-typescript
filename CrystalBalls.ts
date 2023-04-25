function solve1(breaks:boolean[]):number{	
	let d = Math.floor(Math.sqrt(breaks.length));	
	for(let i=0; i<breaks.length; i+=d){
		if(breaks[i]==true){
			let j=i;
			while(breaks[j]){
				j-=1;
			}
			return j+1;
		}
	}
}

function solve2(breaks:boolean[]):number{
	for(let i=0; i<breaks.length; i++){
		if (breaks[i]==true){
			return i;
		}
	}
}

function solve3(breaks:boolean[]):number{
	const jmpAmount = Math.floor(Math.sqrt(breaks.length));

	let i = jmpAmount;
	for(; i<breaks.length;i+=jmpAmount){
		if(breaks[i]){
			break;
		}
	}

	i-=jmpAmount;

	for(let j=0; j<jmpAmount && i<breaks.length; ++j, ++i){
		if (breaks[i]){
			return i;
		}
	}

	return -1;
}

let breaks = [false,false,true,true,true,true];
console.log(solve1(breaks));
console.log(solve2(breaks));
console.log(solve3(breaks));
