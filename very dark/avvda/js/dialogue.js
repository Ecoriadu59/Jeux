//////////////////////////////////////////////////////////:
//effets speciaux ajaxmi.js
///////////////////////////////////////////////////////////:

function shake(divid)
{
anni(divid, 'shack');	
}

function shakefadin(divid)
{      //document.getElementById(divid).style.display = 'none';
/////////////rustine opera
	/*
	if ((divid == "caractere")||(divid == "victoire")){
	if (document.getElementById(divid).style.opacity == 1)
			{
		document.getElementById(divid).style.opacity = 0;
				};
	}
	*/
	/////////////////:
anni(divid, 'shfad');	
}
function shakeappear(divid)
{
	/////////////rustine opera
/*	if ((divid == "caractere")||(divid == "victoire")){
	if (document.getElementById(divid).style.opacity == 0)
			{
		document.getElementById(divid).style.opacity = 1;
				};
	}
	////////////////////////////////
	*/
anni(divid, 'shapp');
}

/////apperdown///////////
function apperdown(divid)
{
	/////////////rustine opera
	if ((divid == "caractere")||(divid == "victoire")){
	if (document.getElementById(divid).style.opacity == 0)
			{
		document.getElementById(divid).style.opacity = 1;
				};
	}
	////////////////////////////////
anni(divid, 'apperdown');
}
function scaleIN(divid)
{
anni(divid, 'scaleIN');	
}


function fading(divid)
{
anni(divid, 'fad', 'at');
	
}
function apper(divid)
{
anni(divid, 'apper', 'at');
}
//fonction de pop up info///
function disap()
		{
		fading('dalert');
		}
function jalert(msg)
{
	//document.getElementById('dalert').style.visibility = 'visible';
	document.getElementById('dalert').innerHTML = msg;
	apper('dalert'); 
		
setTimeout('disap()', 4000)
}
function affichinfo(msg)
{
	document.getElementById('info').innerHTML = msg;
	apper('info')

}
function zeroinfo()
{
document.getElementById('info').innerHTML='';
}



////////////////////////////////////////////////////////////////////////////////////////


function storyspeak(dialtxt)
{
//basictxt('dirtxt', 'on', dialtxt)
basiccontent('dirtxt', dialtxt)
document.getElementById("cdmov").style.visibility = 'hidden';	
}

//effet d'apparition story et txtstory
function txtappear()
{
	if (document.getElementById('story').style.visibility == 'hidden'){
	document.getElementById('story').style.visibility = 'visible';
	anni('story', 'apper', 'at'); 
	}		
	document.getElementById('txtstory').style.visibility = 'visible';
	anni('txtstory', 'apper', 'at');
}
//appation et mise a jour du text de la div txtstory

function affichechapt(urlcontenue)
{
//var urlcontenue = null;
document.getElementById('txtstory').innerHTML = '';
basiccontent('txtstory', urlcontenue)
txtappear();
	
}

function affichechaptsuite(suite)
{
basiccontent('txtstory', suite)
}
//affiche page vvdaloader.htm dans vvda
function afficheloader(urlcontenue)
{
//var urlcontenue = null;
document.getElementById('txtstory').innerHTML = '';
document.getElementById('story').style.visibility = 'visible';
basiccontent('txtstory', urlcontenue)
anni('txtstory', 'apper', 'at');
}

//
//
//cacher la div story
function cachestory()
{
	fading('story')
	function hiddenning(){
		blocsto.innerHTML = '';
					}
	setTimeout('hiddenning()', 2900)
}

//cacher la div story
var killst = null;
function killstory(){
		document.getElementById("story").style.visibility = 'hidden';
	        document.getElementById("story").style.display = 'none';
		document.getElementById("txtstory").style.visibility = 'hidden';
	        document.getElementById("txtstory").style.display = 'none';
	if (killst != null){
		clearTimeout(killst);
		killst = null;
		
		
	}
	}


function cachechapt()
{
fading('story');
//rustine opera kill div story	

//killst = setTimeout('killstory()', 2900);
//killst
}
//cacher la div de dialogue dirdial
function cach()
{
fading('dirdial')
}
function slidedial(boolcmd)
{
document.getElementById('dirdial').style.width = Math.round(wmax / 1.09);
document.getElementById('dirdial').style.height = Math.round(hmax / 1.09);	
apper('dirdial', 2900);
if (boolcmd == 'hidden')
{
document.getElementById("cdmov").style.visibility = 'hidden';	
}
if (boolcmd != 'hidden')
{
document.getElementById("cdmov").style.visibility = 'visible';	
}
}

function cachedial()
{
	fading('dirdial');

}
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
function fadeandmove(id)
{
shakefadin(id)
}
function showforce(id, thex)
{
shakeappear(id)
var andfinish = "fadeandmove('" + id + "')";
setTimeout(andfinish, 600);
}

function fadeandmovey(id)
{
fading(id);
}

function showfire(id)
{
document.getElementById('effect').style.display = 'block';
document.getElementById('effect').style.opacity = '0.7';
document.getElementById('effect').style.visibility = 'visible'
fading('effect', 'at');
}
function showmal(themal)
{
document.getElementById('divshowmal').innerHTML = themal;
document.getElementById('divshowmal').style.display = 'block';
document.getElementById('divshowmal').style.visibility = 'visible'	
fadeandmovey('divshowmal');
}



