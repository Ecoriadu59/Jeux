//////////////////////////////////////////////////////////////////
///////////fonction pour animation/transition css3//////////////////
/////////////////////////////////////////////////////////////////


function internani(id, type, tt){
	//id = id de la div
	//type = type de transition/animation (nom de la classe dans fx.css)
	//tt = duree ou variable affectée a l'animation
	var idani = document.getElementById(id);
		
		switch(idani.style.visibility) {
					case "hidden":
					idani.style.display = 'none'
					break;
					case "visible":
					idani.style.display = 'block'
					break;
				
			}
			
		switch(idani.style.display) {
		case 'none' :
		idani.style.visibility = 'hidden';
		break;
		case 'block' :
		idani.style.visibility = 'visible';
		break;
					}
	
		

// type est egal au nom de l'animation/transition deans fx.css
var idaniT = idani;

//changement de l'attribut visibility, display des div 
//a l'insu ou debut d'animation/transition
function stup(vs, ds){
idaniT.style.visibility = vs;
idaniT.style.display = ds;			
}
/////////////////////////////////
//mets une classe vide a l'insu de l'animation/transition
function theat(){
idaniT.className = "notrans";
//setup('off');
}
//affecte la visibilite:display a l'issu/debut de l'animation/transition
function andbefore(){	
switch(idaniT.style.visibility) {
					case "hidden":
					idaniT.style.display = 'none'
					break;
					case "visible":
					idaniT.style.display = 'block'
					break;
					}
switch(idaniT.style.display) {
		case 'none' :
		idaniT.style.visibility = 'hidden';
		break;
		case 'block' :
		idaniT.style.visibility = 'visible';
		break;
					}	
	

}
function andafter(){
						if ((type == 'fad')||(type == 'shfad')){
							idaniT.style.opacity = 0;
							stup("hidden", "none");
							};
						if ((type == 'apper')||(type == 'shapp')){
							stup("visible", "block");
							idaniT.style.opacity = 1;
							};
						if (tt != 'at'){theat();}; 
						andbefore();
			}


/////////////////////////////////
//associe une fonction a un evenement animation/transition
function listener(idaniT) {
					switch(idaniT.type) {
					case "animationstart":
					break;
					case "animationend":
					theat();
					andafter();
					break;
					case "webkitAnimationEnd":
					theat();	
					andafter();
					break;
					case "MSAnimationEnd":
					andafter();
					break;
					case "oAnimationEnd":
					theat();	
					andafter();
					break;
					case "oTransitionEnd":
					theat();
					andafter();
					case "TransitionEnd":
					theat();
					andafter();
					break;				
					case "animationiteration":
					break;
					case "AnimationIteration":
					break;
					case "oAnimationIteration":
					break;
					case "AnimationIteration":
					break;
					case "webkitAnimationIteration":
					break;
					}
				}							


	//gestion d'evenement lié aux transition/animation
function setup(val)
{
if (val == 'on'){
idaniT.addEventListener("animationend", listener, false);
idaniT.addEventListener("webkitAnimationEnd", listener, false);	
idaniT.addEventListener("oTransitionEnd", listener, false);		
idaniT.addEventListener("oAnimationEnd", listener, false);	
idaniT.addEventListener("MSAnimationEnd", listener, false);	
idaniT.addEventListener("TransitionEnd", listener, false);		
}
	
if (val=='off')
{
idaniT.removeEventListener("animationend", listener, false);
idaniT.removeEventListener("webkitAnimationEnd", listener, false);	
idaniT.removeEventListener("oTransitionEnd", listener, false);		
idaniT.removeEventListener("oAnimationEnd", listener, false);	
idaniT.removeEventListener("MSAnimationEnd", listener, false);	
idaniT.removeEventListener("AnimationEnd", listener, false);	
}
}
//vide le gestionaire d'evenement
setup('off');
andbefore();
//chargement de la transition/animation
idaniT.className = type;
//reaffect le gestionnaire d'evenenemt
setup('on');			

	//fin de function nni()
}
function anni(id, type, tt){
new internani(id, type, tt)	
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

if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
{
xhr = new window.XMLHttpRequest();
//xmlDoc = xmlhttp.responseXML.documentElement;
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
document.getElementById(div).innerHTML = txt	
	if (scpt == 'on'){	
	eval(document.getElementById(div).innerHTML)
	}
}




/*/function basictxt(div, scpt, txt)
{
document.getElementById(div).innerHTML = txt;
	if (scpt == 'on'){
		
		var activscript = document.getElementById(div).getElementsByTagName("script");
		for (var i=0; i<activscript.length; i++) {
								eval(activscript[i].innerHTML);
								}

			}
}*/