//donne malefice
function givmal(somme)
{
if (somme == 1){ malefice += 1}
if (somme == 2){ malefice += 10}
if (somme == 3){ malefice+= 20}
if (malefice >= maxmalefice){malefice = maxmalefice};
affichplayer();
}
//restoration auto de la gauge de malefice
function restormal()
{
if (malefice < maxmalefice)
{givmal(1)};
}
var intermal = null;
//activ le malefice
function actmaleficenow()
{
actmalefice = 'yes';
}
//lancer lycanthropie
function lycanthro()
{
playerlife += 80;
playermaxlife += 80;
maleficetype = 'Lycantropie';
allergie = 'argent';
forceallergie = 2;
}
function malstart()
{
intermal  = setInterval('restormal()', 1500);
intermal
}
function malstop()
{
clearInterval(intermal);
intermal = null;
affichplayer()
}
// pour que les monstre imunisé par les arme ne le soi pas par les malefices
var noimun  = '' ;
//variable de description des malefices
var maldescri  = '';
function rageloup()
{
noimun = 'conv';
if (malefice < 30){jalert("pas assez de malefice");}
if (malefice >= 30){
if (playerlife <= Math.round(playermaxlife - 65))
{
if(enemilife > 0){
playerlife += 65;
}
}
dammageplayer = 65;
damenemi();
showdama = 65;
document.getElementById("divshowdama").innerHTML ='';
document.getElementById("divshowdama").innerHTML = showdama;
showforce('divshowdama', 20); //fonction dans dialogue.js
showmal('Rage de Loup');
malefice = malefice - 30;
affichplayer()
affichenemi()
 }
 //remets l'imunité a 0;
 noimun = '';
 }
 function coupsdegriffes()
{
noimun = 'conv';
if (malefice < 7){jalert("pas assez de malefice");}
if (malefice >= 7){

dammageplayer = 40;
damenemi();
showdama = 40;
document.getElementById("divshowdama").innerHTML ='';
document.getElementById("divshowdama").innerHTML = showdama;
showforce('divshowdama', 20); //fonction dans dialogue.js
showmal('Coups de Griffes');
malefice = malefice - 7;
affichplayer()
affichenemi()
 }
 //remets l'imunité a 0;
 noimun = '';
 }
 
 function faimdeloup()
{
noimun = 'conv';
if (malefice < 40){jalert("pas assez de malefice");}
if (malefice >= 40){
if (playerlife <= eval(playermaxlife - 90))
{
if(enemilife > 0){
playerlife += 90;
}
}
dammageplayer = 90;
damenemi();
showdama =  90;
document.getElementById("divshowdama").innerHTML ='';
document.getElementById("divshowdama").innerHTML = showdama;
showforce('divshowdama', 20); //fonction dans dialogue.js
showmal('Faim de Loup');
 malefice = malefice - 40;
affichplayer()
affichenemi()
 }
 //remets l'imunité a 0;
 noimun = '';
 }
 
 
 
//tableau array malefice
var malinv = new Array('','','','')
var malinva = new Array('','','','')
//donne sort malefice
function givmaltype(type)
{ i = 0;
var funtype = null;
var funname = null;
var imgmaltype = null;
if (type == 'ragedeloup'){funtype = 'rageloup()'; funname = 'Rage de loup'; maldescri = 'Face au danger, la b&ecirc;te qui ai en moi <br>se mets dans un &eacute;tat de trans meurtriere<br> N&eacute;ss&eacute;ecite 30 degres de mal&eacute;fice.'; imgmaltype = './vvdaimg/interfross/rdl.png';}
if (type == 'coupsdegriffes'){funtype = 'coupsdegriffes()'; funname = 'Coups de griffes'; maldescri = 'Des griffes aux bouts<br>de mes doigts,<br> &Ccedil;&aring; va faire mal!<br> N&eacute;ss&eacute;ecite 7 degres de mal&eacute;fice.'; imgmaltype = './vvdaimg/interfross/cdg.png';}	
if (type == 'faimdeloup'){funtype = 'faimdeloup()'; funname = 'Faim de loup'; maldescri = 'Faim de loup<br>Un petit creu,<br> &Ccedil;&aring; va faire saigner!<br> N&eacute;ss&eacute;ecite 40 degres de mal&eacute;fice.'; imgmaltype = './vvdaimg/interfross/fdl.png'; }		
	
	for(i = 0; i <3; i++)
	{
//<td class='tdmninvimg'><a href = "#" onclick="moveindex(0); lastval = 0"><img src='./vvdaimg/interfross/bullet.png' border='0' id="bullet" onmouseover="affichinfo('Armes et munitions.') " onmouseout="zeroinfo()" /></a></td>
var bld =	'<td class="tdmninvimg"><a href="#" onclick="javascript:' + funtype +  ';">' +
							
							"<img src='" + imgmaltype + "' border='0' onmouseover=" + '"affichinfo(' + "'" + funname + "')" + ' " onmouseout="zeroinfo()" />' + '<td></a><br>' ;
var bldmax =	'<a href="#" onclick="javascript:' + funtype +  ';">' +
							
							funname + '</a><br>'  +						
	maldescri ;						
							
	if ((malinv[i] == "")||(malinv[i] == bldmax) ){malinva[i] = bld; malinv[i] = bldmax;
							
	var bloc = "blocmalef" + i ;
	var blocacces = "blocmalef" + i  + "a";
	document.getElementById(bloc).innerHTML = malinv[i]; 
	document.getElementById(blocacces).innerHTML = "<table border='0'><tr>" + malinva[i] + "</tr></table>"; 
	break}

if (i > 2){jalert('inventaire malefice plein'); break}	
}

}
function melinvMAJ()
{
if (malefice >= 15){givmaltype('coupsdegriffes()')};
if (malefice >= 50){givmaltype('ragedeloup()')};
if (malefice >= 40){givmaltype('faimdeloup()')};
}
