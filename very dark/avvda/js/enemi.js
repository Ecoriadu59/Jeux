///////////////////////////////////////////////////
//variables relatives a l'enemi
/////////////////////////////////////////////////////
var enemiimg = '';
var enemilife = '';
var typenemi = '';
var dammagenemi = null;
var moveenem = null;
var enemidistance = null;
var dveloce = null;
var dam = null;
var movetype = '';
//variable de portee de l'enemi, doit etre egal aux nombre d'argument dans Enemiactivdistance - 1
//Enemiactivdistance etant un tableau new array() 0 valant 1.
var eactivdistance = '0';
var eporteelimite = '2';


///////////////////////////////////////////////////////////////////////////
//fonction relative a l'effet d'apparition de l'enemi//
function appearene()
{
document.getElementById("cdmov").style.visibility = 'hidden';	
document.getElementById("caractere").style.opacity = 0;
apperdown("caractere");
scaleIN("couloir");
	}
	

//allergie de l'enemi
var eallergie = '';
var forceeallergie = '';
//imunite
var imuni = '';

var dogimg = new Image();
dogimg.src =  './vvdaimg/animals/dog.png';
function dog()
{
imuni = '';
possiblefuite = 1;
fuitemalus = 3;
fuitemoney = 5;
enemiimg = dogimg.src;
document.getElementById("caractere").src = dogimg.src;
typenemi = 'dog';
enemilife = 75;
enemimaxlife = 75;
movetype = "linear";
dam = 1;
dveloce = 990;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','1','7');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}

var zombieimg = new Image();
zombieimg.src = './vvdaimg/cara/zomb.png';
function zombie()
{
imuni = 'conv';
possiblefuite = 1;
fuitemalus = 15;
fuitemoney = 5;
enemiimg = zombieimg.src
document.getElementById("caractere").src = zombieimg.src
typenemi = 'zombie';
enemilife = 110;
enemimaxlife = 110;
movetype = "linear";
dam = 4;
dveloce = 1110;
enemidistance = 2;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 2;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','1','7');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}


var commandoimg = new Image();
commandoimg.src = './vvdaimg/cara/commando.png';
function commando()
{
imuni = '';
possiblefuite = 0;
fuitemalus = 10;
fuitemoney = 2;
enemiimg = commandoimg.src;
document.getElementById("caractere").src = commandoimg.src;
typenemi = 'commando';
enemilife = 100;
enemimaxlife = 100;
movetype = "linear";
dam = 4;
dveloce = 1300;
enemidistance = 2;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 2;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','1','7');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}
var serpentimg = new Image();
serpentimg.src = './vvdaimg/animals/snacke.png';
function serpent()
{
imuni = '';
possiblefuite = 1;
fuitemalus = 1;
fuitemoney = 2;
enemiimg = serpentimg.src;
document.getElementById("caractere").src = serpentimg.src;
typenemi = 'snake';
enemilife = 40;
enemimaxlife = 40;
movetype = "linear";
dam = 1;
dveloce = 1100;
enemidistance = 2;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 2;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','1','7');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}
var alliimg = new Image();
alliimg.src =  './vvdaimg/animals/alli1.png';
function alligator()
{
imuni = '';
possiblefuite = 1;
fuitemalus = 5;
fuitemoney = 5;
enemiimg = alliimg.src;
document.getElementById("caractere").src = alliimg.src;
typenemi = 'alligator';
enemilife = 120;
enemimaxlife = 120;
movetype = "linear";
dam = 2;
dveloce = 3990;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','2','8');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}
var uberalliimg = new Image();
uberalliimg.src =  './vvdaimg/animals/alli1.png';
function uberalligator()
{
imuni= 'conv';
possiblefuite = 0;
fuitemalus = 7;
fuitemoney = 10;
enemiimg = uberalliimg.src;
document.getElementById("caractere").src = uberalliimg.src;
typenemi = 'Uberalligator';
enemilife = 150;
enemimaxlife = 150;
movetype = "linear";
dam = 2;
dveloce = 4500;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','2','8');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}
var johnimg = new Image();
johnimg.src =  './vvdaimg/cara/zomb.png';
function john()
{
imuni= 'conv';
possiblefuite = 0;
fuitemalus = 7;
fuitemoney = 10;
enemiimg = johnimg.src;
document.getElementById("caractere").src = johnimg.src
typenemi = 'Zombie';
enemilife = 200;
enemimaxlife = 200;
movetype = "linear";
dam = 2;
dveloce = 3900;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','2','12');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}
var ratsimg = new Image();
ratsimg.src =  './vvdaimg/animals/rats.png';
function rats()
{
imuni = '';
possiblefuite = 1;
fuitemalus = 2;
fuitemoney = 2;
enemiimg = ratsimg.src;
document.getElementById("caractere").src = ratsimg.src;
typenemi = 'rats';
enemilife = 40;
enemimaxlife = 40;
movetype = "linear";
dam = 1;
dveloce = 690;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a laquelle apparait l'enemi
eactivdistance = new Array('0','0','6');
eporteelimite = 3;
eallergie = '';
forceallergie = 0;
appearene()
}



var befimg = new Image();
befimg.src =  './vvdaimg/cara/befengdark.png';
function befeng()
{
imuni = '';
possiblefuite = 0;
fuitemalus = 20;
fuitemoney = 10;
enemiimg = befimg.src;
document.getElementById("caractere").src = befimg.src;
typenemi = 'Befeng';
enemilife = 506;
enemimaxlife = 506;
movetype = "linear";
dam = 2;
dveloce = 5990;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a l'aquelle apparait l'enemi
eactivdistance = new Array('0','3','7');
eporteelimite = 3;
eallergie = 'argent';
forceeallergie = 2;
appearene()
}


function silverdague()
{
if (playerlife > 0){
enemilife = 0;
affichechapt('./ross/niv3/rchpt3-03.html')
}
};
var befbossimg = new Image();
befbossimg.src =  './vvdaimg/cara/befeng.png';
function befengBoss()
{
imuni = 'conv'
possiblefuite = 0;
fuitemalus = 20;
fuitemoney = 10;
enemiimg = befbossimg.src;
document.getElementById("caractere").src = befbossimg.src;
typenemi = 'Befeng';
enemilife = 606;
enemimaxlife = 606;
movetype = "linear";
dam = 2;
dveloce = 5990;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a l'aquelle apparait l'enemi
eactivdistance = new Array('0','3','7');
eporteelimite = 3;
eallergie = 'argent';
forceeallergie = 2;
setTimeout('silverdague()', 10880)
appearene()
}
////////////////////////////////
function suitegoule()
{
if (playerlife > 0){
enemilife = 0;
affichechapt('./ross/niv5/rchpt5-05.html')
}
};
var goulimg = new Image();
goulimg.src =  './vvdaimg/cara/audreybad.png';
function gouleBoss()
{
imuni = 'conv'
possiblefuite = 0;
fuitemalus = 20;
fuitemoney = 10;
enemiimg = goulimg.src;
document.getElementById("caractere").src = goulimg.src;
typenemi = 'Goule';
enemilife = 1800;
enemimaxlife = 1800;
movetype = "chaotic";
dam = 2;
dveloce = 1990;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a l'aquelle apparait l'enemi
eactivdistance = new Array('0','3','4');
eporteelimite = 3;
eallergie = 'UV';
forceeallergie = 2;
setTimeout('suitegoule()', 20000)
appearene()
}
///////////////////////////////////////////////////////////////////////
function audreylast()
{
imuni = ''
possiblefuite = 0;
fuitemalus = 20;
fuitemoney = 10;
enemiimg = goulimg.src;
document.getElementById("caractere").src = goulimg.src;
typenemi = 'Goule';
enemilife = 1800;
enemimaxlife = 1800;
movetype = "chaotic";
dam = 2;
dveloce = 1990;
enemidistance = 3;
bulletdammage = 1;
dammageplayer = 0;
//dommageplayer doit retourner 0 lors d'un nouveau combat sinon le joueur gagne d'office. 
distancelimite = 3;
// distance maximal a l'aquelle apparait l'enemi
eactivdistance = ['0','3','4'];
eporteelimite = 3;
eallergie = 'UV';
forceeallergie = 2;
appearene()
}
////gestion deplacement enemie lors de combats

//variable qui definie la distance maximal a laquelle l'enemi apparait. doit etre renseigner dans les fonctions 
//qui definise l'enemi. Exemple dog()
var distancelimite = 0;
//type de deplacement de l'enemi "linear" croissant "chaotic" hasardeux
function movevalue()
{
if (movetype == "linear")
	{
	if (enemidistance <= distancelimite)	
		{ enemidistance++ };
	if (enemidistance == eval(distancelimite + 1))
		{ enemidistance  = 1 };	
	}
	
if (movetype == "chaotic")	
	{
	enemidistance = Math.round(Math.random() * distancelimite);
	if (enemidistance == 0){ enemidistance = Math.round(Math.random() * distancelimite);}	
	}
	var distanceval = null;
	if (enemidistance == 0){distanceval = 'A distance '}
	if (enemidistance == 1){distanceval = 'Proche'}
	if (enemidistance == 2){distanceval = 'Plus proche'}
	if (enemidistance == 3){distanceval = 'Trop proche!'}
document.getElementById("disen").innerHTML = distanceval ;	
}
////////////////////////////////////////////////////////////////
//fonction pour la generation des degas que l'enemi provoque.
function mkdamenemi()
{
var eddistance = 0;
var eidist = eval(enemidistance - 1);
var hazard = Math.round(Math.random() * 10);

	if (eidist <= eporteelimite){
					eddistance  = eactivdistance[eidist];
					}
	if (eidist > eporteelimite){
					eddistance  = eactivdistance[eporteelimite];
					}	


dammagenemi = Math.round(hazard * dam * eddistance);
//affichage mise a jours
damenemi();
affichenemi(); affichplayer();
}
////////////////////////////////////////////////////////////////
//fonction initialisant le deplacement de l'enemi.
//et aussi les attaques
function denemi()
{
moveenemi = setInterval("movevalue();mkdamenemi()",dveloce);
}


function dplayer(usebullet)
{
//activdistance est renseign� dans les fonction qui definissent les armes
//exemple : fusil().
//elle indique le degre d'efficacit� de l'arme suivant la distance de l'enemi.
//porteelimite = porte maximal de l'arme (est egal aux nombre d'argument max dans activdistance
//est rensign� dans les fonction qui definissent les armes
//exemple : fusil().

//pour les tableaux de type  new Array() 0 valant 1
var idist = eval(enemidistance - 1);
//idist : valeur a retourner dans le tableau activdistance suivant la distance de l'enemie
var idistmax = eval(distancelimite - 1) ;
//idistmax : valeur a retourner dans le tableau activdistance suivant la distance limite de l'enemi

	if (idist <= idistmax){
					ddistance  = activdistance[idist];
					}
	if (idist > idistmax ){
					ddistance  = activdistance[porteelimite];
					}	
// en resumer : Si idist est < ou = a la distance limite (et donc existe
//retouner la le dommage relatif a la distance de l'enemi.
//Si idist > a la distance limite de l'enemi
//retourner le dommage relatife a la distance limite de l'enemi.
// AI je été claire.
var hazard = Math.round(Math.random() * 1 + 1);

//bulletdammage est une variable de bonus de dega suivant le type de monstre
//la valeur de cette variable est a renseigner dans dog() par exemple.
	//		
			var basedammage = Math.round( ddistance * weapondammage * usebullet + bulletdammage)
			//dammageplayer 

	
//gestion de l'allergie de l'enemi
var intox = 0;
if ((eallergie == 'argent')&&( bulletype =='argent')){intox = Math.round(forceeallergie * 5); jalert('enemi intoxiqu� par ' + bulletype + ". intoxication de " + forceeallergie)}
dammageplayer = Math.round(basedammage + intox)
//si pas de munition pas de dommage
if (Nbbullet == 0){dammageplayer = 0}		
}