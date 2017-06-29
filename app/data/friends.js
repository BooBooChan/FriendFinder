var surveyEntry = [//You need JS that will add surveyEntry items to an array so you can compare scores.
{
	"name":"Abraham";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"Moses";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"Elijah";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"Jacob";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"David";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"Bartholemew";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
},
{
	"name":"";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
}]; 
var newEntry = {
	"name":"";
	"photo":"";
	"score":[a,b,c,d,e,f,g,h,i,j]
};

var score = surveyEntry.score

//Calculate results of users' entries and arrange the poyfect match for said user
function beepBoop() {
	for(i = 0; i < score.length; i++){
	var difference = abs(score[i] - /*insert other entrants' scores here*/);
	var sumA = 0;
	var sumB = 0;
	sumA = sumA + score[i];
	sumB = sumB + score[i];
	var totalDifference = 0;
	totalDifference = totalDifference + score[i];
	//How do we compare and select the smallest totalDifference to determine the soul mate?
	if(totalDifference < /*insert total differences of remaining entrants[i]*/){
		console.log("Wonderful! We found your soul mate");
	}
	abs()//This determines the absolute value of whatever number is inserted. *wink**wink*
};
