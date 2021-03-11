//Array
	//No.1

		let people = ["Greg", "Mary", "Devon", "James"];
		for(let i=0;i<people.length;i++)
		{
			console.log(people[i]);
		};

	//No.2
		people.forEach(function(item)
		{
			console.log(item);
		});
		
	//No.3
		people.shift(); 
		console.log(people);
	
	//No.4
		people.pop();
		console.log(people);
	
	//No.5
		people.unshift("Matt");
		console.log(people);
	
	//No.6
		people.push("Garren Axel Arie");
		console.log(people);
	
	//No.7
		for(let i=0;i<people.length;i++)
			{
				console.log(people[i]);
				if(people[i]==="Mary")
				{
					break;
				}
			}

	//No.8
		console.log(people.slice(2));

	//No.9
		let newArray = ["Greg", "Mary","Devon", "James"];
		newArray.splice(2,1,"Elizabeth","Artie");
		console.log(newArray);

	//No.10
		let withbob = people.concat("bob");
		console.log(withbob);



//Object
	let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
	};
		
		//No.1
			programming.languages.push("Go");
			console.log(programming);
		
		//No.2
			programming['difficulty'] = 7;
			console.log(programming);

		//No.3
			delete programming.jokes;
			console.log(programming);

		//No.4
			programming.isFun = true;
			console.log(programming);

		//No.5
			let newProgramming = programming.languages.map(function(item, index)
				{
					return index + "-" + item;
				});
				console.log(newProgramming);

		