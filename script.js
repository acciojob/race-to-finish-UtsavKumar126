window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const output=document.getElementById("output")
const p1=new Promise((res,rej)=>{
	const con=true;
	if(con){
		setTimeout(()=>{
			res("promise 1")
		},1000)
	}
	else rej('failed');
})
const p2=new Promise((res,rej)=>{
	const con=true;
	if(con){
		setTimeout(()=>{
			res("promise 2")
		},3000)
	}
	else rej('failed');
})
const p3=new Promise((res,rej)=>{
	const con=true;
	if(con){
		setTimeout(()=>{
			res("promise 3")
		},4000)
	}
	else rej('failed');
})
const p4=new Promise((res,rej)=>{
	const con=true;
	if(con){
		setTimeout(()=>{
			res("promise 4")
		},2000)
	}
	else rej('failed');
})
const p5=new Promise((res,rej)=>{
	const con=true;
	if(con){
		setTimeout(()=>{
			res("promise 5")
		},3000)
	}
	else rej('failed');
})
promises.push(p1)
promises.push(p2)
promises.push(p3)
promises.push(p4)
promises.push(p5)

const result=Promise.any(promises);

result.then((data)=>{
	output.innerText=data;
}).catch((err)=>{
	console.log(err);
})
