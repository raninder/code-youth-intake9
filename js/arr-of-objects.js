const student = [
	{ id:1,
	  name:'john'
	},
	{ id:2,
	  name:'bob'
	},
	{ id:3,
	  name:'alex'
	},
	{ id:4,
	  name:'carol'
	}

];
// student[0].id

// const student = [23,24,1,5,23,3];
for(let i=0;i<student.length;i++){
	console.log(student[i].name);
}

student.forEach((ele)=>console.log(ele.name));