debugger;

var team = [
    {number:23, firstname: "Michael", lastname:"Jordan", position:"Shooting Guard"},
    {number:24, firstname: "Magic", lastname:"Johnson", position:"Point Guard"},
    {number:21, firstname: "Tim", lastname:"Duncan", position:"Small Forward"},
    {number:34, firstname: "Lebron", lastname:"James", position:"Power Forward"},
    {number:33, firstname: "shaquille", lastname:"Oneil", position:"Center"},
];


var table = "" ;
 
		for(var i in team){
			table += "<tr>";
			table += "<td>" 
					+ team[i].number +"</td>" 
					+ "<td>" + team[i].firstname + " " + team[i].lastname + "</td>" 
					+ "<td>" + team[i].position +"</td>" ;
			table += "</tr>";
		}
 
	document.getElementById("result").innerHTML = table;