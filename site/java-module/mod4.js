var x = "hello world";
console.log("get global:"+x);

var string="hi";
string+=" bro";
console.log(string);
console.log((5+3)/2);
var y=3, z=4;
console.log("3+4 is:")
console.log(y+z);

function order(sidedish){
	sidedish=sidedish || "whatever!";
	console.log("chicken with "+sidedish);
}

order("noodles");
order();

var company = new Object();
company.name="facebook";
company.ceo= new Object();
company.ceo.firstname="mark";
company.ceo.favcolor="blue";
console.log(company);
console.log(company.ceo.firstname);
company["stock"]=110;
console.log(company);
console.log("Price of stock is: "+company["stock"]);

// let us use object literal://
var amazon= {
	company: "amazon",
    ceo: {
    	name: "jeff",
    	business: "online retail"
    },
    stock: "300"
};
console.log(amazon);

// Lets use function//
function multiply(x,y){
	return x*y;
};

console.log(multiply(2,3));

function Circle(radius){

	this.radius=radius;
	
}
Circle.prototype.Area =
	function(){
		return Math.PI * Math.pow(this.radius,2);
	}
var myCircle= new Circle(10);
console.log(myCircle);
console.log(myCircle.Area());

// arrays:
var array = new Array();
array[0]="jack";
array[1]=2;
array[2]= function (name){
	console.log("hello "+ name);
}
array[3]={course: "html"};

console.log(array[2](array[0]));
console.log(array[1]);

var n=["a", 2, {course:"js"}, "b"];
console.log(n[2].course);

function all(){
	for(i=0; i<array.length; i++)
		{console.log("hello "+ array[i]);}
}
all();

var n2=["y","j","k"];
var obj={
	name:"y",
	course:"html/css/js",
	platform:"coursera"
};
for (var prop in obj){
	console.log(prop +":"+ obj[prop]);
}