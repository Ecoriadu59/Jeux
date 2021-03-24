////////////////////////////////////////////////////////////////////
//gestion des dommages
var showdama = ''; //montre la force du coups
function damenemi()
{
showdama = dammageplayer;
if ((imuni == 'conv')&&(noimun == '')){
							if (specialweapon != 1){
							//si l'arme utilisée n'est pas special (weapon.js)
							dammageplayer = 0
							//si imunise dommage = 0 (enemi.js)
							}
						}; 
if (dammageplayer > dammagenemi)
		{enemilife = eval(enemilife  - dammageplayer);
		
		dammageplayer = 0;
		}
if (dammageplayer <= dammagenemi)
		{playerlife = eval(playerlife  -  dammagenemi);
		
		dammageplayer = 0;
		}
victoranddefeat();

}

//affiche le stat de l'enemi
function affichenemi()
{
var erouge = '<img src="./vvdaimg/interfross/rouge.png" id="enerouge" style="vertical-align:middle"></img>';	
if (document.getElementById("cdmov").style.visibility == 'hidden'){
if ((enemiimg != '')||(enemiimg != null)||(enemiimg != 'undefined')){

document.getElementById("enemi").innerHTML = "<img src='" + enemiimg  +"' width='60px' height='40px' id='enemiimg' style='vertical-align:middle; -moz-border-radius: 0px 0px 15px 0px; border-radius: 0px 0px 15px 0px'></img>" + typenemi + " Life : " + enemilife + " / " + enemimaxlife + erouge; 
}
}
menuenemiimg();
document.getElementById("enerouge").style.width = Math.round(enemilife / enemimaxlife * wmax / 10);
document.getElementById("enerouge").style.height = Math.round(hmax / 10 / 6);	
document.getElementById("divshowdamaene").innerHTML ='';
document.getElementById("divshowdamaene").innerHTML = dammagenemi;
showforce('divshowdamaene', 20); //fonction dans dialogue.js
}
//affiche le statu du joueur
function affichplayer()
{
var rouge = '<img src="./vvdaimg/interfross/rouge.png" id="rouge"></img>';
var violet = '<img src="./vvdaimg/interfross/violet.png" id="violet"></img>';
var affichecurent = " <table border='0'><tr><td><img src='" + playerimg ;
affichecurent +=	"' id='playerimg' style='width:80px; height:60px; border:2px -moz-border-radius: 0px 15px 0px 0px; border-radius: 0px 15px 0px 0px'></img><br>" + typeplayer +"</td><td style='vertical-align:top'>" + 
  "Life : " + playerlife + " / " + playermaxlife +  " " + rouge  + "<br>";

if (actmalefice == 'yes'){affichecurent += " Malefice  : "  + maleficetype + " : "  +  malefice + " / " + maxmalefice +  " "  + violet;
};
affichecurent  += " <br>Money : " + money + "$" + "</td></tr></table>";

document.getElementById("player").innerHTML = affichecurent;

document.getElementById("rouge").style.width = Math.round(playerlife / playermaxlife * wmax / 10);
document.getElementById("rouge").style.height = Math.round(hmax / 10 / 6);
if (malefice > 0){
var violetw = Math.round(malefice / maxmalefice * wmax / 10);
var violeth = Math.round(hmax / 10 / 6);
if (violetw <= 0){violetw = 1}
if (violeth <= 0){violeth = 1}
document.getElementById("violet").style.width = violetw;
document.getElementById("violet").style.height = violeth;
}
}
//Nbbullet = max; 1 = 0;
 function affipldammage()
 {
if  (Nbbullet > 0){
if (activbulletname != '')
{
 dplayer(Nbbullet);
 damenemi();
 
 affichplayer()
 if (enemilife > 0){affichenemi()}
}
}
document.getElementById("divshowdama").innerHTML ='';
document.getElementById("divshowdama").innerHTML = showdama;
showforce('divshowdama'); //fonction dans dialogue.js
showfire('effect');
}
function affipldammageone()
 {
 if (Nbbullet >0){
if (activbulletname != '')
{
 dplayer(1);
 damenemi();
 
 affichplayer()
  if (enemilife > 0){affichenemi()}
 }
}
document.getElementById("divshowdama").innerHTML ='';
document.getElementById("divshowdama").innerHTML = showdama;
showforce('divshowdama', 20); //fonction dans dialogue.js
showfire('effect');
}
/////////////////////////////////////:
var possiblefuite = 1;
var fuitemalus = 1;
var fuitemoney = 1;
function fuire()
{
if ((possiblefuite == 1)&&(playerlife > fuitemalus))
	{
		recule();
		clearInterval(moveenemi);
		moveenemi = null;
		typenemi =  '';
		enemilife = '';
		enemimaxlife ='';
		dammagenemi = '';
		eallergie = '';
		forceeallergie = 0;
		playerlife = Math.round(playerlife - fuitemalus);
		var declaremalus  = "Dans la fuite vous perdez " + fuitemalus + " segment de vie<br>";
			if (money > fuitemoney)
			{
			money = Math.round(money - fuitemoney);
			declaremalus += "Et "  + fuitemoney + "$"; 
			};
			affichenemi();
			jalert(declaremalus);
			
			document.getElementById("disen").innerHTML = '';
			document.getElementById("caractere").style.visibility = 'hidden';
			document.getElementById("enemi").innerHTML = "";
			document.getElementById("cdmov").style.visibility = 'visible';

	}
if ((possiblefuite == 0)||(playerlife <= fuitemalus))
{jalert('Fuite impossible');};
affichplayer();
}





