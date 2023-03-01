let user = {
	id:1,
	name:'John',
	// display: function(){ return "Hello bob"}
	display: function(){ console.log("Hello",this.name)},
	displayName: function(name){ console.log(name)}
}
console.log(user.id, user.name);
user.display();
user.displayName('Alex');
user.gender="male";
