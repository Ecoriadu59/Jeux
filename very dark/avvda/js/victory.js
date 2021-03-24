//gestion des victoires
var hazid = ''
function inventhaz()
{
hazid = '';
hazid = Math.round(Math.random() * 100000);
//variable noitem defini dans 'coffreetautre' pour le ca où il n'y a plus de place dans l'inventaire pour les objet important
if (noitem[casejoueur] = 'yes'){hazid = null; };
}


var victlivetwo = '<a href="#" id="tds' + hazid + '" onclick="givmed(30); document.getElementById(' + "'tds" + hazid + "'" + ' ).style.visibility = ' + "'hidden'" + '"><img src="./vvdaimg/interfross/med.png" />Trousse 1er soin [+30]</a><br>';
var victliveone = '<a href="#"  id="tds' + hazid + '"  onclick="givmed(20); document.getElementById(' +  "'tds" + hazid + "'" + ' ).style.visibility = ' + "'hidden'" + '"><img src="./vvdaimg/interfross/med.png" />Trousse 1er soin[+20]</a><br>';
var victmoneytwo = '<a href="#"  id="mo' + hazid + '"  onclick="givmoney(20); document.getElementById(' + "'mo" + hazid  + "'" + ' ).style.visibility = ' + "'hidden'" + '">20 Dollars</a><br>';
var victmoneyone = '<a href="#"  id="mo' + hazid + '"  onclick="givmoney(10); document.getElementById(' + "'mo" + hazid + "'" + ' ).style.visibility = ' + "'hidden'" + '">10 Dollars</a><br>';
var victmaltwo = '<a href="#"  id="ma' + hazid + '"  onclick="givmas(20); document.getElementById(' + "'ma" + hazid + "'" + ' ).style.visibility = ' + "'hidden'" + '">Pierre de malefice [+20]</a><br>';
var victmalone = '<a href="#"  id="ma' + hazid + '"  onclick="givmas(40); document.getElementById(' + "'ma" + hazid + "'" + ' ).style.visibility = ' + "'hidden'" + '">Pierre de malefice [+40]</a><br>';


var victenssemble = new Array();
victenssemble[0] = victliveone;
victenssemble[1] = victliveone + victmoneyone;
victenssemble[2] = victlivetwo;
victenssemble[3] = victmoneyone + victlivetwo;
victenssemble[4] = victmoneytwo;
victenssemble[5] = victmalone + victmoneytwo;
victenssemble[6] = victmaltwo + victmoneyone;
var defa = 'Ainsi se termine votre aventure, sans gloire et dans le sang...';
var defb = 'Macabre issue que celle de votre aventure';
var defc = 'Triste, finir ainsi...';
var defd = "De vie a trepas, vous voila dans l'audela. <br>Pensez au Passeur.";
var defenssemble = new Array();
defenssemble[0] = defa;
defenssemble[1] = defa;
defenssemble[2] = defb;
defenssemble[3] = defc;
defenssemble[4] = defd;
//Butin a l'issu du combat (hazard)
var hazvict = '';
var hazdefaite ='';
var specialvictTXT = new Array();
var specialvictButin = new Array();
var specialdefaiteTXT = new Array();
//fonction a executer en ca de victoire
var specialvictfunction = new Array();
var valfunction = new Array();


function randvict()
{
var haznum = null;
if (actmalefice == 'no'){haznum = 4};
if (actmalefice != 'no'){haznum = 7};
hazvict = Math.round(Math.random() * haznum);

}
//alert(actmalefice)
function randdefaite()
{
hazdefaite = Math.round(Math.random() * 4);
}
function affichevict()
{
zeroenemi();
document.getElementById("cdmov").style.visibility = 'visible';
var blocvict = document.getElementById('victoire');
blocvict.innerHTML = "<span id='vcttitre'>Victoire</span><br></br><p>"
if (specialvictTXT[casejoueur] != undefined){
blocvict.innerHTML += specialvictTXT[casejoueur];
}
if (specialvictButin[casejoueur] != undefined){
blocvict.innerHTML += specialvictButin[casejoueur];
}
if (specialvictfunction[casejoueur] == casejoueur){
//specialvictfunction sera definit dans le fichier de niveau
var valvictfun = specialvictfunction[casejoueur];
	function victfunction(valvictfun)
	{
		if(specialvictfunction[casejoueur]  ==  casejoueur){ storyspeak(valfunction[casejoueur]) };
	}
	victfunction(specialvictfunction[casejoueur]);
document.getElementById("cdmov").style.visibility = 'visible';

}
inventhaz();
blocvict.innerHTML += victenssemble[hazvict];

blocvict.innerHTML += "</p><br></br><a href='#' onclick=fading('victoire')>Fermer</a>";
//centrer le titre de la div victoire(misere)

//blocvict.style.visibility = 'visible';
shakeappear('victoire');
}

//efface les stat enemi lorsque celui-ci perd
function zeroenemi()
{
typenemi =  '';
enemilife = '';
enemimaxlife ='';
dammagenemi = '';
eallergie = '';
forceeallergie = 0;
document.getElementById("disen").innerHTML = '';
shakefadin("caractere");
//document.getElementById("caractere").style.visibility = 'hidden';
affichenemi();
dammageplayer = 0;
affichplayer();
monster[casejoueur] = '';
 //la ou il y avait un monstre , il n'y en a plus.
document.getElementById("enemi").innerHTML = "";

}

function victoranddefeat()
{
if (typenemi != '')
{
	if ((enemilife <= 0)&&(playerlife > 0))
	{
	clearInterval(moveenemi);
	randvict(); affichevict()}
	if ((enemilife > 0)&&(playerlife <= 0))
	{
	clearInterval(moveenemi);
	randdefaite();  affichedefaite()}
	}
if (typenemi == '')
	{if (playerlife <= 0)
		{ affichedefaite()}
}
if (playerlife <= 0)
		{ affichedefaite()}
}

function affichedefaite()
{
document.getElementById("cdmov").style.visibility = 'visible';
var blocdef = document.getElementById('defaite');
blocdef.innerHTML = "Defaite<br>"
blocdef.innerHTML += specialdefaiteTXT;
blocdef.innerHTML += defenssemble[hazdefaite];
blocdef.innerHTML += "<br><a href='./avvda.htm'>Fermer</a>";
blocdef.style.visibility = 'visible';
anni('defaite','apper','at');
}
	