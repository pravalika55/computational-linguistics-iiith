function selectCorpus(sel){
			var corp_id=corp.options[corp.selectedIndex].value;
			if(corp_id=="null"){
				alert("Select a corpus");
				return false;
			}
			if(corp_id=="corp1"){
				document.getElementById("corpus").innerHTML=first;
				tabl.style.display="block";
				s=first;
				abs=first;				
			}
			if(corp_id=="corp2"){
				document.getElementById("corpus").innerHTML=second;
				tabl.style.display="block";
				s=second;
				abs=second;
			}
			if(corp_id=="corp3"){
				document.getElementById("corpus").innerHTML=third;
				tabl.style.display="block";
				s = third;
				abs = third;
			}
		}
		
function get(){
			    s = s.replace(/(^\s*)|(\s*$)/gi,"");
	            s = s.replace(/[ ]{2,}/gi," ");
	            s = s.replace(/\n /,"\n");
	            s = s.split(' ');
	            d = s.length;
	            var ed=parseInt(d);
	            var token_input=parseInt(document.getElementById("token_input").value);
	            if(ed!=token_input){
	            	document.getElementById("hel").innerHTML="<p id=\"wrong\" align=\"center\">Wrong Answer</p>";
	            }
	            else{
	            	document.getElementById("hel").innerHTML="<p id=\"right\" align=\"center\">Right Answer</p>";
	            	document.getElementById("continue").style.display="block";
	            }
	   }