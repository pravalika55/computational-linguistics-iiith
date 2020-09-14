var A1 =["Damon ate lunch before evening",
"some students like to study in the night",
"John and Mary went to church",
"John went to church after eating",
"did he go to market"]


var B1=[["Damon ate lunch before evening",
"before evening Damon ate  Lunch",
"Damon before evening  ate Lunch"],

["people like to watch movies in the night",
"in the night people  movies like to watch"],

[" lakshmi and alekhya went to temple",
" alekhya and lakshmi  to  went church"],

["stefen went to mysticfalls after fighting",
"after fighting stefen went to mysticfalls",
"stefen after fighting went to mystic falls"],
["did he go to market",
"he did go to market"]]

var A2=["राम और श्याम बाजार गयें",
"राम सोया और श्याम भी",
"हमने दरवाज़े को हरे रंग से पोत दिया। "]


var B2=[["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"],

["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"],

["हमने दरवाज़े को हरे रंग से पोत दिया",
"दरवाज़े हमने हरे  रंग   पोत को दिया "]]




 
function reform()
{
  for(i=0;i<array1.length;i++)
  {
    if(document.getElementById('button'+i).style.visibility=="hidden")
        {
                document.getElementById ('button'+i).style.visibility="visible";
        }
    
        document.getElementById ("four").innerHTML=""

        document.getElementById ("five").innerHTML=""

        document.getElementById ("r1").innerHTML=""

        document.getElementById ("r2").innerHTML=""

        document.getElementById ("eight").innerHTML = "Get Correct Sentence"

        document.getElementById ("six").style.visibility="hidden";
        
        document.getElementById ("seven").style.visibility="hidden";

        document.getElementById ("eight").style.visibility="hidden";
}
}
function lang1()
{   
    total=0

        document.getElementById ("three").innerHTML=""

        document.getElementById ("four").innerHTML=""

        document.getElementById ("five").innerHTML=""

        document.getElementById ("r1").innerHTML=""

        document.getElementById ("r2").innerHTML=""

        document.getElementById ("eight").innerHTML = "Get Correct Sentence"

        document.getElementById ("six").style.visibility="hidden";

        document.getElementById ("seven").style.visibility="hidden";

        document.getElementById ("eight").style.visibility="hidden";

	if(document.getElementById("English").selected)
	{
		Sent = A1;
		d=5;
		crt=B1;
	}
	else if(document.getElementById("Hindi").selected)
	{
		Sent = A2;
		d=3;
		crt=B2;
	}
	else
	{
		document.getElementById("one").innerHTML=""

		document.getElementById("two").innerHTML=""

		document.getElementById("three").innerHTML=""

		return;
	}



	let body = document.getElementsByTagName("p")[3];

	document.getElementById("one").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words";

	document.getElementById("two").innerHTML="(select the buttons in proper order)";
	
	rand1=Math.floor(Math.random()*d);


	rand2=crt[rand1][0];

    array1=rand2.split(" ");
	
	for(i=0;i<array1.length;i++)
    {
	j=Math.floor(Math.random()*array1.length)

	temp=array1[i];

	array1[i]=array1[j]

    array1[j]=temp;
    }
	
for(i=0;i<array1.length;i++)
{
  let button = document.createElement("button");

  button.id='button'+i;

  button.innerHTML = array1[i]

  body.appendChild(button);   

    button.addEventListener ("click", function()
	{
	document.getElementById("four").innerHTML=

	"Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";

    document.getElementById("five").innerHTML+=this.innerHTML+" ";

    this.style.visibility="hidden";

    total=total+1;

    if (total>0 ) 
     {
     	document.getElementById("six").style.visibility="visible";
     }
	 
    var strorg=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');

    strarr=strorg.split(" ")

    if(array1.length==strarr.length)

     {
     	document.getElementById("seven").style.visibility="visible";
     }
});
}
}
function check()
{

  var strobt=String(document.getElementById("five").innerHTML).replace(/\s+$/, '');
  
  var break_flag=0;
  
  
  for(i=0;i<d;i++)
  {
	  
	document.getElementById("r2").innerHTML=""

	document.getElementById("eight").innerHTML = "Get Correct Sentence"
	
	document.getElementById("eight").style.visibility="hidden";

	  for(j=0;j<crt[i].length;j++){

		  if(strobt==crt[i][j]){

			  document.getElementById("r1").innerHTML=

			  "<span style='color:green;font-size:30px'>Right answer!!!</span>"

			  break_flag=1;

			  break;
		  }
	  }
	  if(break_flag==1)
	  {
		  break;
	  }
		  
  }
  
  if(break_flag==0)
  {
	   document.getElementById("r1").innerHTML=

	   "<span style='color:red;font-size:30px'>Wrong answer!!!</span>"

	   document.getElementById("eight").style.visibility="";
  }
	  
  }
  
  function toggle()
  {
	  var correct="";
	  
	  if(document.getElementById("eight").innerHTML == "Get Correct Sentence"){
		  
		  for(i=0;i<d;i++){

			  if(rand2==crt[i][0]){

				  for(j=0;j<crt[i].length;j++){

					correct += crt[i][j]+"<br>";

				  }
				  document.getElementById("r2").innerHTML=correct;

				  document.getElementById("eight").innerHTML="Hide the correct Sentence";

				  break;
				}
			}
		}
	  else if(document.getElementById("eight").innerHTML == "Hide the correct Sentence"){

		  document.getElementById("r2").innerHTML="";
		  
		  document.getElementById("eight").innerHTML="Get Answers";

	  }
	  else if(document.getElementById("eight").innerHTML == "Get Answers"){

		  for(i=0;i<d;i++){

			  if(rand2 == crt[i][0]){

				  for(j=0;j<crt[i].length;j++){

					correct += crt[i][j]+"<br>";

				  }

				  document.getElementById("r2").innerHTML=correct;

				  document.getElementById("eight").innerHTML="Hide the correct Sentence";

				  break;
				}
			}
	  }
  }