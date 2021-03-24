
//(id, anni, tt, fin)
function anni(id, type, tt){

/*On recupere l'element html dans le document*/
var idani = document.getElementById(id);




//fonction de fin de transition	
function andafter(){
idani.className = 'notrans';
	}		

	
//associe une fonction a un evenement animation/transition
	function listener(idani) {
					switch(idani.type) {
					case "animationstart":
					break;
					case "animationend":
					andafter();
					break;
					case "webkitAnimationEnd":
					webkitandafter();
					break;
					case "MSAnimationEnd":
					andafter();
					break;
					case "oAnimationEnd":
					andafter();
					break;
					case "oTransitionEnd":
					andafter();
					break;				
					case "animationiteration":
        
					break;
					}
				}				

//gestion evenement lié a la transition	
function setup()
{
idani.addEventListener("animationend", listener, false);
idani.addEventListener("webkitAnimationEnd", listener, false);	
idani.addEventListener("oTransitionEnd", listener, false);		
idani.addEventListener("oAnimationEnd", listener, false);	
idani.addEventListener("MSAnimationEnd", listener, false);		
}
	
	/*element on modifie sa classe css*/
//opcite initial

if ((type == 'fad')||(type == 'shfad')){
	document.getElementById(id).style.opacity = 0;
	};
if ((type == 'apper')||(type == 'shapp')){
	document.getElementById(id).style.opacity = 1;
	};

	//cherchr la classe et demarrer gestion d'evenement transition
		idani.className = type;
		setup();
	
}	
	
////////////////////////////////////////////////////////////////////////////////////////////:

///fonction ajax appel de document et activation/desactivation de javascript dans celui-ci
function adc(docpath, scpt, id)
{
xhr = null;
try 
{
   xhr = new ActiveXObject("Microsoft.XMLHTTP"); // Essayer IE 
}
catch(e)   // Echec, utiliser l'objet standard 
{
  xhr = new XMLHttpRequest();
}
xhr.open( "GET", docpath, true); 
 
 xhr.onreadystatechange  = function() 
    { 
       if(xhr.readyState  == 4)
       {
	document.getElementById(id).innerHTML = xhr.responseText; 
	       //si script, le rendre actif en faisant un eval sur sa balise
	if (scpt == 'on'){
	var activscript = document.getElementById(id).getElementsByTagName("script");
	for (var i=0; i<activscript.length; i++) {
							eval(activscript[i].innerHTML);
							}
			}
        }
    }; 

   xhr.send(null); 
  
}
///////////////////////////////////
//fonction d'insert de doc avac annimation fade 
     function fullcontent(div, Url)
        {
	if (document.getElementById(div).style.opacity == 1)
							{anni(div, 'fad', 'at');
								}
	adc(Url, 'on', div);
	var mkapper = "anni('" + div + "', 'apper'" + ", 'at')";
	setTimeout(mkapper, 2100)	
	}
	
//insert sans transition
function basiccontent(div, Url)
{
adc(Url, 'on', div);	
}


function basictxt(div, scpt, txt)
{
document.getElementById(div).innerHTML = txt;
	if (scpt == 'on'){
		var activscript = document.getElementById(div).getElementsByTagName("script");
		for (var i=0; i<activscript.length; i++) {
								eval(activscript[i].innerHTML);
								}

			}
}