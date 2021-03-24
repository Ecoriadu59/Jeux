var activdistance = new Array();
var ddistance = null;
var limitechg = 0;
var weapon;
var weapondammage;
var bullet;
var activbullet;
var bulletdammage;
var inventaire = new Array();
var dammage;
var weapname = new Array('fusil','BigBigGun','barre de fer','mains nues','Glock','ShowGun');
var bulletype = '';
//bulletype variable du type de munition
var chgbonus = '';
//chgbonus : variable lie a la fonction rch(chwant); bonus de munitions;
var chgwant = '';
//chgwant : variable lie au stock munition de la fonction bulletplus moins;
//variable d'ajout de munition; en relation avec la fonction de rechargement du stock de munition
var tabstockmuni = new Array("chgf","chgfs","chgbiggun","chgbigguns", "chgbdefer","argne", "chgglockacier", "chgglockargent","chgshowacier");
// tabstockmuni : variable pour attribuer les bonne balle au bon chargeur en stock
//var chargeur = chargeur en stock 
var chargeur = new Array(0,0,0,0,0,0,0,0,0);
var chargeurname = new Array('Bullet','SilverBullet','BigGunBullet','SilverBigGunBullet','acier (inusable)','Bague acier', 'Cart.Glock Acier','Cart.Glock Argent','Cart.ShowGun Acier');
//type de metaux (allergie pour chaque munition ()
var bulletypetab = new Array('acier','argent','acier','argent','acier','acier','acier','argent','acier');
//chargeurenga = le chargeur engag� dans l'arme.
var chargeurenga = new Array(0,0,0,0,0,0,0,0,0);
var chgbonus = '';
//chargeur[0] = fusil
//chargeur[1] = fusil silver
//chargeur[2] = big big gin
//chargeur[3] = bigbig gun silver
//chargeur[4] = barre de fer
//chargeur[5] = glock
//chargeur[5] = glock argent
//chargeur[6] = showgun
var porteelimite = 0;
//variable de portee de l'arme, doit etre egal aux nombre d'argument dans activdistance - 1
//activdistance etant un tableau new array() 0 valant 1.
var activweapon = '';
//arme active.
var existarm = new Array();
//arme existante dans l'inventaire
//tableau de type de munition/arme
var typebullet = new Array('fusil','BigBigGun','barre de fer','mains nues','Glock','ShowGun');
//type de munition active utile dans la fonction selectbullet(chgwant)
var activtypebullet = "";
//l'arme est elle special?
var specialweapon = 0;




//function inerrante au fusil
function fusil()
{	
//uniquement si l'arme active est differente de l'arme nouvellement choisie (ne ser a rien ici)
if (activweapon != weapname[0]){
specialweapon = 0;
activweapon = weapname[0];
document.getElementById("activweap").innerHTML = weapname[0];
weapondammage = 8;
activdistance = new Array('1','2','4','5');
porteelimite = 3;
limitechg = 2;
activbulletname = chargeurname[0];
activbullet = chargeur[0];
engabullet = chargeurenga[0]; //balle deja engag� dans l'arme
//munition par defaut
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!il faut verifier que la munition existe avant de la montrer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if ((activbulletname != chargeurname[0])||(activbulletname != chargeurname[1]));
{chgwant = 0; selectbullet(chgwant)}
}
}
//function inerrante au big big gun
function BigBigGun()
{
if (activweapon != weapname[1]){
specialweapon = 0;
activweapon = weapname[1];
document.getElementById("activweap").innerHTML = weapname[1];
weapondammage = 12;
activdistance = new Array('3','6','9');
porteelimite = 2;
limitechg = 6;
activbulletname = chargeurname[2];
activbullet = chargeur[2];
engabullet = chargeurenga[2]; //balle deja engag� dans l'arme
//munition par defaut
if ((activbulletname != chargeurname[2])||(activbulletname != chargeurname[3]));
{chgwant = 2; selectbullet(chgwant)}
}
}

//function inerrante au barre de fer
function barredefer()
{
if (activweapon != weapname[2]){
specialweapon = 0;
activweapon = weapname[2];
document.getElementById("activweap").innerHTML = weapname[2];
Nbbullet = 1;
document.getElementById("bulletNb").innerHTML = Nbbullet;
weapondammage = 7;
activdistance = new Array('0','3','7');
porteelimite = 2;
limitechg = 1;
activbulletname = chargeurname[4];
activbullet = chargeur[4];
engabullet = chargeurenga[4]; //balle deja engag� dans l'arme
//munition par defaut
if ((activbulletname != chargeurname[4])||(activbulletname != chargeurname[4]));
{chgwant = 4; selectbullet(chgwant)}
}
}
//function inerrante au barre de fer
function mainsnues()
{
if (activweapon != weapname[3]){
specialweapon = 0;
activweapon = weapname[3];
document.getElementById("activweap").innerHTML = weapname[3];
weapondammage = 2;
activdistance = new Array('0','1','4');
porteelimite = 2;
limitechg = 3;
activbulletname = chargeurname[5];
activbullet = chargeur[5];
engabullet = chargeurenga[5]; //balle deja engag� dans l'arme
playerlife -= 1;
//munition par defaut
if ((activbulletname != chargeurname[5])||(activbulletname != chargeurname[5]));
{chgwant = 5; selectbullet(chgwant)}
}
}
//function inerrante au Glock
function Glock()
{
if (activweapon != weapname[4]){
specialweapon = 0;
activweapon = weapname[4];
document.getElementById("activweap").innerHTML = weapname[4];
weapondammage = 8;
activdistance = new Array('2','5','7');
porteelimite = 2;
limitechg = 6;
activbulletname = chargeurname[6];
activbullet = chargeur[6];
engabullet = chargeurenga[6]; //balle deja engag� dans l'arme
//munition par defaut
if ((activbulletname != chargeurname[6])||(activbulletname != chargeurname[7]));
{chgwant = 6; selectbullet(chgwant)}
}
}

function showgun()
{
//uniquement si l'arme active est differente de l'arme nouvellement choisie (ne ser a rien ici)
if (activweapon != weapname[5]){
specialweapon = 1;
activweapon = weapname[5];
document.getElementById("activweap").innerHTML = weapname[5];
weapondammage = 8;
activdistance = new Array('2','6','8');
porteelimite = 2;
limitechg = 2;
activbulletname = chargeurname[8];
activbullet = chargeur[8];
engabullet = chargeurenga[8]; //balle deja engag� dans l'arme
//munition par defaut
///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!il faut verifier que la munition existe avant de la montrer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if ((activbulletname != chargeurname[8])||(activbulletname != chargeurname[8]));
{chgwant = 8; selectbullet(chgwant)}
}
}





//don d'arme
var valarm;
function givarm(valarm)
{
if (valarm == 1){
if (existarm[0] != 1){
existarm[0] = 1; 
document.getElementById("blocarminv1").innerHTML += '<a href="#" onclick="javascript:fusil()">Fusil</a><br'
}
};
if (valarm == 2){
if (existarm[1] != 1){
existarm[1] = 1; 
document.getElementById("blocarminv2").innerHTML +='<a href="#" onclick="javascript:BigBigGun()">BigBigGun</a><br>'
}
};
if (valarm == 3){
if (existarm[2] != 1){
existarm[2] = 1; 
document.getElementById("blocarminv3").innerHTML +='<a href="#" onclick="javascript:barredefer()">Barre de fer</a><br>'
};
}
if (valarm == 4){
if (existarm[3] != 1){
existarm[3] = 1; 
document.getElementById("blocarminv4").innerHTML +='<a href="#" onclick="javascript:mainsnues()">Mains nues</a><br>'
};
}
if (valarm == 5){
if (existarm[4] != 1){
existarm[4] = 1; 
document.getElementById("blocarminv5").innerHTML +='<a href="#" onclick="javascript:Glock()">Glock</a><br>'
};
}
if (valarm == 6){
if (existarm[5] != 1){
existarm[5] = 1; 
document.getElementById("blocarminv6").innerHTML +='<a href="#" onclick="javascript:showgun()">ShowGun</a><br>'
};
}
}
///////////////////////////bizarre
//don munition
var valmun;
function givmun(valmun)
{}
////////////////////////////////////////////	
var imgbul ="<img src='./vvdaimg/interfross/bulletsil.png' />"	
	
////////////////////////////////////////
//function rechargement du stock de munition
var valrechg = 10;
function rch(chgbonus)
{
chargeur[chgbonus] = Math.round(chargeur[chgbonus] + valrechg);
document.getElementById(tabstockmuni[chgbonus]).innerHTML = '<li><a href="#" onclick="javascript:chgwant =' + chgbonus + '; selectbullet(chgwant);bulletype = bulletypetab[chgwant]">' + imgbul + chargeurname[chgbonus] +  " : " + chargeur[chgbonus] ;
document.getElementById(tabstockmuni[chgbonus]).innerHTML += '</a>';
}

//fonction de selection des cartouche
//selection cartouches

function selectbullet(chgwant)
{
//verifier que l'arme est active

if (activweapon == ""){jalert("Pas d'arme active!")}
//verifi que l'arme existe
if ((activweapon != "")&& (existarm[0] ||existarm[1]||existarm[2]||existarm[3]||existarm[4]||existarm[5]) == 1 )
{
//defini le type de munition
if ((chgwant == 0) || (chgwant ==1)){activtypebullet = typebullet[0]};
if ((chgwant == 2) || (chgwant ==3)){activtypebullet = typebullet[1]};
if ((chgwant == 4) || (chgwant ==4)) {activtypebullet = typebullet[2]};
if ((chgwant == 5) || (chgwant ==5)) {activtypebullet = typebullet[3]};
if ((chgwant == 6) || (chgwant ==7)) {activtypebullet = typebullet[4]};
if ((chgwant == 8) || (chgwant ==8)) {activtypebullet = typebullet[5]};
if (activtypebullet == activweapon){
	var chgact = tabstockmuni[chgwant];
	activbulletname = chargeurname[chgwant];
	activbullet = chargeur[chgwant];
	document.getElementById("bulletselect").innerHTML = chargeurname[chgwant];
	Nbbullet = chargeurenga[chgwant] ; 
	
	document.getElementById("bulletNb").innerHTML = " " + Nbbullet;
	 chargeurname[chgwant] + " : " + chargeur[chgwant] 
	 document.getElementById(chgact).innerHTML = '<li><a href="#" onclick="javascript:chgwant =' + chgwant + '; selectbullet(chgwant); bulletype = bulletypetab[' + chgwant + ']">' + imgbul + chargeurname[chgwant] +  " : " + chargeur[chgwant] ;
	document.getElementById(chgact).innerHTML += '</a>';
	}
	//alert(chgwant + " -" + activtypebullet + "-  " + activweapon)
	//verifie la compatibilit� de l'arme avec les munitions
if (activtypebullet != activweapon){jalert("Munition incompatible avec l'arme")}	
}
}
//fonction pour moins de munition dans le chargeur de l'arme active
function bulletmoins()
{
var chgact = tabstockmuni[chgwant];
	if ((activbulletname == chargeurname[chgwant])
		&& (chargeur[chgwant] >= 0))
	{
		if (Nbbullet > 0)
		{
		Nbbullet = Nbbullet -1;
		
		chargeur[chgwant]  = chargeur[chgwant] + 1;
		
		chargeurenga[chgwant] = Nbbullet;
		document.getElementById("bulletNb").innerHTML = " " + Nbbullet;
		document.getElementById(chgact).innerHTML =  '<li><a href="#" onclick="javascript:chgwant =' + chgwant + '; selectbullet(chgwant); bulletype = bulletypetab[' + chgwant + ']">' + chargeurname[chgwant] +  " : " + chargeur[chgwant] ;
	       document.getElementById(chgact).innerHTML += '</a>';
		}	
	if (chargeur[chgwant]  == chargeur[4]){}
		} 
	}

//fonction pour plus de munition dans le chargeur de l'arme active
function bulletplus()
{
var chgact = tabstockmuni[chgwant];

if ((activbulletname == chargeurname[chgwant])
	&& (Nbbullet < limitechg)
        && (chargeur[chgwant] > 0))
	{
	Nbbullet += 1;
	
		chargeur[chgwant]  = chargeur[chgwant] - 1;
		
		chargeurenga[chgwant] = Nbbullet;
		document.getElementById("bulletNb").innerHTML = " " + Nbbullet;
		document.getElementById(chgact).innerHTML = '<li><a href="#" onclick="javascript:chgwant =' + chgwant + '; selectbullet(chgwant); bulletype[' + chgwant + ']">' + chargeurname[chgwant] +  " : " + chargeur[chgwant] ;
	       document.getElementById(chgact).innerHTML += '</a>';
	}
	}
	
	
function bulletmax()
{
var chgact = tabstockmuni[chgwant];
var ajoutmax = eval(limitechg - chargeurenga[chgwant])
if ((activbulletname == chargeurname[chgwant])
	&& (Nbbullet < limitechg)){
        	if (chargeur[chgwant] >= ajoutmax)
		{	
		ajoutmax = eval(limitechg - chargeurenga[chgwant])	
		}
		if (chargeur[chgwant] < ajoutmax)
		{
		ajoutmax = chargeur[chgwant];
		}
		Nbbullet += ajoutmax;
		
			chargeur[chgwant]  = chargeur[chgwant] - ajoutmax;
			
			chargeurenga[chgwant] = Nbbullet;
			document.getElementById("bulletNb").innerHTML = " " + Nbbullet;
			document.getElementById(chgact).innerHTML = '<li><a href="#" onclick="javascript:chgwant =' + chgwant + '; selectbullet(chgwant); bulletype[' + chgwant + ']">' + chargeurname[chgwant] +  " : " + chargeur[chgwant] ;
	       		document.getElementById(chgact).innerHTML += '</a>';
	
	}
	}

//vider son chargeur
function zerochgenga()
{
if (chargeurenga[chgwant] > 0){
Nbbullet = 0;
// barre de fer acier innusable
if (activweapon == weapname[2]){Nbbullet = 1}
		chargeurenga[chgwant] = Nbbullet;
		document.getElementById("bulletNb").innerHTML = "" + Nbbullet;

}
}
//un tire simple de une balle
function onechgenga()
{
if (chargeurenga[chgwant] > 0){
Nbbullet = Math.round(Nbbullet - 1)
//barre de fer acier inusable
if (activweapon == weapname[2]){Nbbullet = 1}
		chargeurenga[chgwant] = Nbbullet;
		document.getElementById("bulletNb").innerHTML = '' + Nbbullet;
		
}
}
///fonction de vidage d'inventaire arme
function emptyweap()
{
existarm[0] = 0; document.getElementById("blocarminv1").innerHTML  = '';
existarm[1] = 0; document.getElementById("blocarminv2").innerHTML  = '';
existarm[2] = 0; document.getElementById("blocarminv3").innerHTML  = '';
existarm[3] = 0; document.getElementById("blocarminv4").innerHTML  = '';
existarm[4] = 0; document.getElementById("blocarminv5").innerHTML  = '';
existarm[5] = 0; document.getElementById("blocarminv6").innerHTML  = '';
}
