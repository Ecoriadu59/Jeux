//taille maximum de l'inventaire(artefact)

inventmax =6;


//donne de l'argent
function givmoney(somme)
{
money += somme;
affichplayer();
}
//tableau array artfact
var objetin = new Array('', '', '','','','','','','','','','')
//utiliser clef
function useclef(type, i)
{
if (porteAtype[casejoueur] != type){
jalert('Pas la bonne clef')
}
if (porteAtype[casejoueur] == type){
	jalert('vous avez utilisé clef ' + type);
	objetin[i] = ''; 
	var bloc = "blocobj" + i
	document.getElementById(bloc).innerHTML = objetin[i]; 
porteA[casejoueur] = 'ouvert';
fading("victoire");
ouvreporte();
}
affichplayer();
}


//donne clef

function givkey(type)
{ i = 0;
	for(i = 0; i <=inventmax; i++)
	{	 
	if (objetin[i] == "") {objetin[i] = '<a href="#" onclick="javascript:useclef(' + "'" + type + "'" + ', ' + i + ');">Clef  ' + type + '</a><br>';
	var bloc = "blocobj" + i 
	document.getElementById(bloc).innerHTML = objetin[i]; break}
if (i >= inventmax){jalert('inventaire artefact plein');break}	
}

}
//donne pierre de vie
function maxlife(somme, i)
{
playermaxlife += somme;
var thelife = Math.round(playerlife + somme);
if (thelife <= playermaxlife)
{
playerlife = thelife;
}
if (thelife > playermaxlife)
{playerlife = playermaxlife}
objetin[i] = ''; 
var bloc = "blocobj" + i
document.getElementById(bloc).innerHTML = objetin[i]; 
affichplayer();
}
//donne de la vie
function givlive(somme, i)
{
var thelife = Math.round(playerlife + somme);
if (thelife <= playermaxlife)
{
playerlife = thelife;
}
if (thelife > playermaxlife)
{playerlife = playermaxlife}
objetin[i] = ''; 
var bloc = "blocobj" + i
document.getElementById(bloc).innerHTML = objetin[i]; 
affichplayer();
}

//donne du malefice
function givma(somme, i)
{
if (actmalefice != 'no'){
var thema = Math.round(malefice + somme);
if (thema <= maxmalefice)
{
malefice = thema;
}
if (thema > maxmalefice)
{malefice = maxmalefice}
objetin[i] = ''; 
var bloc = "blocobj" + i
document.getElementById(bloc).innerHTML = objetin[i]; 
affichplayer();
}
}
//donne du max malefice
function maxma(somme, i)
{
if (actmalefice != 'no'){
maxmalefice += somme;
var thema = Math.round(malefice + somme);
if (thema <= maxmalefice)
{
malefice = thema;
}
if (thema > maxmalefice)
{malefice = maxmalefice}
objetin[i] = ''; 
var bloc = "blocobj" + i
document.getElementById(bloc).innerHTML = objetin[i]; 
affichplayer();
}
}
function givmaxlife(somme)
{ i = 0;
	for(i = 0; i <=inventmax; i++)
	{	 
	if (objetin[i] == "") {objetin[i] = '<a href="#" onclick="javascript:maxlife(' + somme + ', ' + i + ');">Pierre de vie ' + somme + '</a><br>';
	var bloc = "blocobj" + i 
	document.getElementById(bloc).innerHTML = objetin[i]; break}
if (i >= inventmax){jalert('Inventaire artefact plein');break}	
}
}
///conctrole de l'inventerair relatif a la vie
function givmed(somme)
{ i = 0;
	for(i = 0; i <=inventmax; i++)
	{	 
	if (objetin[i] == "") {objetin[i] = '<a href="#" onclick="javascript:givlive(' + somme + ', ' + i + ');"><img src="./vvdaimg/interfross/med.png" />Soin :  ' + somme + '</a><br>';
	var bloc = "blocobj" + i 
	document.getElementById(bloc).innerHTML = objetin[i]; break}
if (i >= inventmax){jalert('Inventaire artefact plein');break}	
}
}


///conctrole de l'inventerair relatif au malefice
function givmas(somme)
{ i = 0;
	for(i = 0; i <=inventmax; i++)
	{	 
	if (objetin[i] == "") {objetin[i] = '<a href="#" onclick="javascript:givma(' + somme + ', ' + i + ');">Pierre1 ' + somme + '</a><br>';
	var bloc = "blocobj" + i 
	document.getElementById(bloc).innerHTML = objetin[i]; break}
if (i >= inventmax){jalert('inventaire artefact plein');break}	
}
}

///conctrole de l'inventerair relatif au malefice
function givmaxmas(somme)
{ i = 0;
	for(i = 0; i <=inventmax; i++)
	{	 
	if (objetin[i] == "") {objetin[i] = '<a href="#" onclick="javascript:maxma(' + somme + ', ' + i + ');">Pierre de malefice superieure ' + somme + '</a><br>';
	var bloc = "blocobj" + i 
	document.getElementById(bloc).innerHTML = objetin[i]; break}
if (i >= inventmax){jalert('inventaire artefact plein');break}	
}
}

function ctrlinv()
{
i = 0; occu=0;
	for(i = 0; i <=inventmax; i++)
	{	 
	if (objetin[i] != "") {occu +=1 }	

	}

}
