//saisie des codes offrande
var showcode = new Array('no123','baddog','tombstone','elmorlegacy','tobewolf','beatintheend','notend');
function enteroff(){

document.getElementById('hidcode').style.visibility = 'hidden';
document.getElementById('hidcode').innerHTML = '';

for (i=0; i <= showcode.length; i++){
if (showcode[i] != document.getElementById('subcode').value)
{showcode = 'Petit, ne joues pas avec la mort...' + i}

}


if (document.getElementById('subcode').value == 'baddog'){
showcode = "Bien, J'ai la preuve, vous avez pay� votre dim,<br>vous pouvez traverser la rive des morts et retenter<br> le "
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv2/niveau2s.htm', {evalScripts: true})" + '">2eme chapitre</a> de votre vie.<br>';
showcode +='Soyez prudent... Sinon... A bientot.';
}
if (document.getElementById('subcode').value == 'tombstone'){
showcode = "Okey, traverser la rive des morts et retenter<br> le "
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv3/niveau3s.html', {evalScripts: true})" + '">3eme chapitre</a> de votre vie.<br>';
showcode +='Prudence... Sinon... A bientot.';
}
if (document.getElementById('subcode').value == 'elmorlegacy'){
showcode = "Je vois, traverser la rive des morts et retenter<br> le "
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv4/niveau4s.html', {evalScripts: true})" + '">4eme chapitre</a> de votre vie.<br>';
showcode +='Soyez prudent... sinon... A bientot.';
}
if (document.getElementById('subcode').value == 'tobewolf'){
showcode = "Les bon comptes... Traverser la rive des morts, retenter<br> le "
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv5/niveau5s.html', {evalScripts: true})" + '">5eme chapitre</a> de votre vie.<br>';
showcode +='A bientot.';
}
if (document.getElementById('subcode').value == 'beatintheend'){
showcode = "Honnet meme dans la mort, vous pouvez traverser la rive des morts et retenter<br> le "
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv6/niveau6s.html', {evalScripts: true})" + '">6eme chapitre</a> de votre vie.<br>';
showcode +='Soyez prudent... sinon... A bientot.';
}
if (document.getElementById('subcode').value == 'cestpasfaux'){
showcode = "Perceval, c'est toi? Retournes chez artur, c'est dangereux ici... Aller!<br> "
//showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv6/niveau6s.html', {evalScripts: true})" + '">6eme chapitre</a> de votre vie.<br>';
//showcode +='Soyez prudent... sinon... A bientot.';
}
if (document.getElementById('subcode').value == 'notend'){
showcode = "Qulle est votre destination?<br> "
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv6/niveau6s.html', {evalScripts: true})" + '">6eme chapitre</a> de votre vie.<br>';
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv5/niveau5s.html', {evalScripts: true})" + '">5eme chapitre</a> de votre vie.<br>';
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv4/niveau4s.html', {evalScripts: true})" + '">4eme chapitre</a> de votre vie.<br>';
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv3/niveau3s.html', {evalScripts: true})" + '">3eme chapitre</a> de votre vie.<br>';
showcode += '<a href="#" onclick="new Ajax.Updater' + "('thelevel', './ross/niv2/niveau2s.html', {evalScripts: true})" + '">2eme chapitre</a> de votre vie.<br>';
showcode +='Soyez prudent... sinon... A bientot.';
}
document.getElementById('hidcode').innerHTML = showcode;
document.getElementById('hidcode').style.visibility = 'visible';
}



var statue ='';
//viobj = variable pour les objet important a memoriser dans le coffre en cas d'inventaire plein (pour qu'il ne disparaisse pas dance ce ca.
var viobj =new Array(); //a definire dans le fichier de niveau
var noitem = new Array();
function ouvert()
{
if (viobj[casejoueur] == undefined){
coffre[casejoueur] = 'ouvert';}
if (viobj[casejoueur] != undefined){
//coffre[casejoueur] = 'ouvert';
affichecoffre("justitem");
}
}
function ouvertetrg()
{
coffretrg[casejoueur] = 'ouvert';
}
//occu : variable de control de l'inventaire present dans artefact.js
var occu=null;
function affichecoffreAN()
{
//ctrlinv controle l'espace dans l'inventaire (artefact.js)	
ctrlinv()	;
if (occu >= inventmax){jalert('Inventaire artefact plein');}	
else {
if (coffretrg[casejoueur] == 'coffre'){
var anmsg = new Array();
anmsg[0] = "Pas net, j'espere qu'çà va pas m'peter a la tronche...";
anmsg[1] = "les coffres anciens, c'est comme les boites de chocolats, on sais jamais sur quoi on va tomber.";
anmsg[2] = "Crasseux et fortement douteux...";
var hazmsg = Math.round(Math.random() * 2);
var anchoice = new Array();
anchoice[0] = "affichecoffre('etrg')";
anchoice[1] = "affichepiege(); affichplayer(); fading('victoire'); ouvertetrg()";
anchoice[2] = "affichecoffre('etrg')";
anchoice[3] = "affichepiege(); affichplayer(); fading('victoire'); ouvertetrg()";
anchoice[4] = "affichecoffre('etrg')";
anchoice[5] = "affichepiege(); affichplayer(); fading('victoire'); ouvertetrg()";
anchoice[6] = "affichecoffre('etrg')";
anchoice[7] = "affichecoffre('etrg')";	
var hazchoice = Math.round(Math.random() * 8);

var bloccoffre = document.getElementById('victoire');
bloccoffre.innerHTML = "Coffre Etrange<br><br>"
bloccoffre.innerHTML += anmsg[hazmsg];
bloccoffre.innerHTML += "<br>Ouvrir ce coffre?<br>"
bloccoffre.innerHTML += "<br><a href='#' onclick= " + '"' + anchoice[hazchoice] + '"' + ">Oui</a>";
bloccoffre.innerHTML += "<br><a href='#' onclick=fading('victoire') >Non</a>";
bloccoffre.innerHTML += "<br><br><a href='#' onclick=fading('victoire')>Quitter</a>";
bloccoffre.style.visibility = 'visible';
shakeappear('victoire');

}
}
occu = null;
}



///////////////////////:
function affichecoffre(ctype)
{
//ctrlinv controle l'espace dans l'inventaire (artefact.js)	
ctrlinv()	;
if (occu >= inventmax){jalert('Inventaire artefact plein');}	
else {	
randvict();
var bloccoffre = document.getElementById('victoire');
bloccoffre.innerHTML = "Coffre<br>"
if (specialvictTXT[casejoueur] != undefined){
bloccoffre.innerHTML += specialvictTXT[casejoueur];
}
if (specialvictButin[casejoueur] != undefined){
bloccoffre.innerHTML += specialvictButin[casejoueur];
}
if (ctype == "justitem"){victenssemble[hazvict] = ''}
bloccoffre.innerHTML += victenssemble[hazvict];

if (ctype == "etrg"){

bloccoffre.innerHTML += "<br><a href='#' onclick=" + '"' + "ouvertetrg(); fading('victoire'); " + '"' + ">Fermer</a>";
}
if (ctype != "etrg"){
bloccoffre.innerHTML += "<br><a href='#' onclick=" + '"' + "ouvert(); fading('victoire'); " + '"' + ">Fermer</a>";
}
bloccoffre.style.visibility = 'visible';
shakeappear('victoire');
;

}
occu = null;
}
///////////////////////:
function ouvreporte()
{
document.getElementById("cdmov").style.visibility = 'visible';
document.getElementById("caractere").style.visibility = 'hidden';
document.getElementById('victoire').innerHTML = "";
}
function laisserfermer()
{
recule();
document.getElementById("cdmov").style.visibility = 'visible';
document.getElementById("caractere").style.visibility = 'hidden';
//document.getElementById('victoire').innerHTML = "";
fading("victoire");
}
function laisserstatue()
{
//recule();
//document.getElementById("cdmov").style.visibility = 'visible';
document.getElementById("caractere").style.visibility = 'hidden';
//document.getElementById('victoire').innerHTML = "";
fading("victoire");
}
var portetext;
function afficheporte()
{
document.getElementById("cdmov").style.visibility = 'hidden';
document.getElementById("caractere").src = './vvdaimg/coul/porte.jpg';
document.getElementById("caractere").style.visibility = 'visible';
var blocporte = document.getElementById("victoire");
blocporte.innerHTML = "Porte<br>";
blocporte.innerHTML += portetext[casejoueur];
blocporte.innerHTML += '<br><a href="#" onclick="' +  "fading('victoire');ouvreporte()" + '">Ouvrir</a>  Ou';
blocporte.innerHTML += '<a href="#" onclick="' + "fading('victoire');laisserfermer()" + '">Laissez Fermer</a><br>';
blocporte.style.visibility = 'visible';
apper('victoire');
}

function afficheporteA(type)
{
document.getElementById("cdmov").style.visibility = 'hidden';
document.getElementById("caractere").src = './vvdaimg/porteA.png';
document.getElementById("caractere").style.visibility = 'visible';
var blocporte = document.getElementById("victoire");
blocporte.innerHTML = "Porte<br>"
blocporte.innerHTML += 'Nessecite une Clef ' + type;
blocporte.innerHTML +=  '<br><a href="#" onclick="' + "fading('victoire');laisserfermer()" + '">Laissez Fermer</a><br>';
blocporte.style.visibility = 'visible';
apper('victoire');
}
/////////////////////////////////////////////////////////////////////
//variable et fonction offrande                                              /////////
/////////////////////////////////////////////////////////////////////
function afficheoffrande()
{
//document.getElementById("cdmov").style.visibility = 'hidden';
document.getElementById("caractere").src = './vvdaimg/statue.png';
document.getElementById("caractere").style.visibility = 'visible';
var blocporte = document.getElementById("victoire");
blocporte.innerHTML = "Offrande<br>"
blocporte.innerHTML += 'Une statue macabre, La figure populaire de la mort, la grande faucheuse.<br>'
blocporte.innerHTML += 'Elle tend la main, semble demander une offrande...<br>'
blocporte.innerHTML += '<br><a href="#" onclick="givstatue(' + offrandesomme + ')"' + '>' +'Donner [' + offrandesomme + '$]</a> Ou '
blocporte.innerHTML += '<a href="#" onclick="fading(' + "'" + 'victoire' + "'" + ');laisserstatue()"' + '>Laissez la statue</a>  ';
blocporte.style.visibility = 'visible';
apper('victoire');
}
function givstatue(offrandesomme)
{ 
if (offrandesomme > money){
laisserstatue(); jalert('Pas assez de "Money"')}
if (offrandesomme <= money){
money = money - offrandesomme;
affichplayer();
document.getElementById("caractere").src = './vvdaimg/statue.png';
document.getElementById("caractere").style.visibility = 'visible';
var blocporte = document.getElementById("victoire");
blocporte.innerHTML = "Offrande<br>"
blocporte.innerHTML += "La main de la grande faucheuse se ferme sous l'offrande,<br>une voix, un murmur lugubre s'eleve de la bouche de la statue." + '<br>'
blocporte.innerHTML +=  '"' + levelcode + '"'+', dit-elle...<br>'
blocporte.innerHTML += '<a href="#" onclick="fading(' + "'" + 'victoire' + "'" + ');laisserstatue()"' + '>Laissez la statue</a>  ';
blocporte.style.visibility = 'visible';
}
}

//affichage des pieges
function affichepiegeM()
{
var blocdef = document.getElementById('defaite');
blocdef.innerHTML = "Piege Mortel<br>"
if (specialdefaiteTXT != undefined){
	blocdef.innerHTML += specialdefaiteTXT;};
if (defenssemble[casejoueur] != undefined){blocdef.innerHTML += defenssemble[casejoueur];};	
blocdef.innerHTML += '<br><a href="#" onclick="'  + "document.getElementById('defaite').style.visibility = 'hidden'" + '">Fermer</a>';
blocdef.style.visibility = 'visible'
}
function affichepiege()
{
var blocdef = document.getElementById('victoire');
blocdef.innerHTML = "Piege<br>"
if (specialdefaiteTXT != undefined){
	blocdef.innerHTML += specialdefaiteTXT;};
if (defenssemble[casejoueur] != undefined){blocdef.innerHTML += defenssemble[casejoueur];};	
playerlife -= 10;
affichplayer();

if (coffretrg[casejoueur] = 'coffre'){
blocdef.innerHTML += '<br><a href="#" onclick="'  + "ouvertetrg(); document.getElementById('victoire').style.visibility = 'hidden';victoranddefeat();" + '">Fermer</a>';	
}
if (coffretrg[casejoueur] != 'coffre'){
blocdef.innerHTML += '<br><a href="#" onclick="'  + "document.getElementById('victoire').style.visibility = 'hidden';victoranddefeat();" + '">Fermer</a>';
}
blocdef.style.visibility = 'visible'
shakeappear('victoire');	
}