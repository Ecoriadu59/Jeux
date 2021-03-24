//////////////////////////////////////////////////////////////////
///////////fonction pour animation/transition css3//////////////////
/////////////////////////////////////////////////////////////////
function internani(id, type, tt){
	//id = id de la div
	//type = type de transition/animation (nom de la classe dans fx.css)
	//tt = duree ou variable affectée a l'animation
	var idani = document.getElementById(id);

//changement de l'attribut visibility, display des div 
//a l'insu ou debut d'animation/transition
function stup(vs, ds){
idani.style.visibility = vs;
idani.style.display = ds;			
}
//affecte la visibilite:display au debut de l'animation/transition
//control la valeur de l'opacité
function andbefore(){	
//vide le gestionaire d'evenement
	if ((type == 'fad')||(type == 'shfad')){
							idani.className = "notrans";
							stup("visible", "block");
							
							};
	if ((type == 'apper')||(type == 'shapp')||(type == 'apperdown')||(type == 'scaleIN')){
							idani.className = "notrans";
							stup("visible", "block");
							};
							
							if (idani.className = "notrans"){
							idani.className = "";
							};							
							
	
}		
	
//affecte la visibilite:display au la fin de l'animation/transition
//control la valeur de l'opacité
function andafter(){
	
					if ((type == 'fad')||(type == 'shfad')){
						stup("hidden", "none");
					};
					if ((type == 'apper')||(type == 'shapp')||(type == 'apperdown')||(type == 'scaleIN')){
						stup("visible", "block");
					};
					if (type == 'scaleIN') {
						anni(id, 'scaleUP')
					};
	//var txtdebug = document.getElementById("caractere").style.display + document.getElementById("caractere").style.visibility + document.getElementById("caractere").style.opacity;
	//alert(txtdebug)
			}

//associe la fonction andafter() a un evenement animation/transition
function listener(idani) {
					andafter()
				}							


	//gestion d'evenement lié aux transition/animation
function setup(val)
{
if (val == 'on'){
idani.addEventListener("animationend", listener, false);
idani.addEventListener("webkitAnimationEnd", listener, false);	
idani.addEventListener("oTransitionEnd", listener, false);		
idani.addEventListener("oAnimationEnd", listener, false);	
idani.addEventListener("MSAnimationEnd", listener, false);	
idani.addEventListener("TransitionEnd", listener, false);		
}
	
if (val=='off')
{
idani.removeEventListener("animationend", listener, false);
idani.removeEventListener("webkitAnimationEnd", listener, false);	
idani.removeEventListener("oTransitionEnd", listener, false);		
idani.removeEventListener("oAnimationEnd", listener, false);	
idani.removeEventListener("MSAnimationEnd", listener, false);	
idani.removeEventListener("AnimationEnd", listener, false);	
}
}
andbefore();
//chargement de la transition/animation;
idani.className = type;
setup('on');
	//fin de function nni()
}


var dirid = [];
function anni(id, type, tt){
	if(dirid.length > 40){dirid = []}
	dirid.push(id);
	var nid = dirid[Math.round(dirid.length - 1)]
	//eviter les doublons immediat d'id dans le tableau "dirid"
	//en retirant la derniere entrée du tableau
		if (nid ==  dirid[Math.round(dirid.length - 2)]){
										dirid.pop();
										}
	internani(nid, type, tt)	
}	
	
//fonction pour une gestion des transition animation basique
function annisimple(id, type, tt)
{
if (document.getElementById(id).className != 'notrans')
{
document.getElementById(id).className = 'notrans';
}
else {document.getElementById(id).className = type;
ocument.getElementById(id).className = 'notrans';	
	}
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