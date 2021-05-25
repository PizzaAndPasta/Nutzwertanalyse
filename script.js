var btnCalc = document.getElementById('btnCalc');
var btnReset = document.getElementById('btnReset');


btnCalc.onclick = function()
{
  var Feld11Nummer = document.getElementById('Feld11').value;
  var Feld12Nummer = document.getElementById('Feld12').value;
  var Feld14Nummer = document.getElementById('Feld14').value;
  var Feld17Nummer = document.getElementById('Feld17').value;
  var Feld18Nummer = document.getElementById('Feld18').value;
  var Feld20Nummer = document.getElementById('Feld20').value;
  var Feld23Nummer = document.getElementById('Feld23').value;
  var Feld24Nummer = document.getElementById('Feld24').value;
  var Feld26Nummer = document.getElementById('Feld26').value;

  
  var Summe1 = Feld11Nummer * Feld12Nummer;
  var Summe2 = Feld11Nummer * Feld14Nummer;
  var Summe3 = Feld17Nummer * Feld18Nummer;
  var Summe4 = Feld17Nummer * Feld20Nummer;
  var Summe5 = Feld23Nummer * Feld24Nummer;
  var Summe6 = Feld23Nummer * Feld26Nummer;
  var SummeVar1 = Summe1 + Summe3 + Summe5;
  var SummeVar2 = Summe2 + Summe4 + Summe6;
  
  
  document.getElementById('Feld13').innerHTML = Summe1; 
  document.getElementById('Feld15').innerHTML = Summe2;
  document.getElementById('Feld19').innerHTML = Summe3;
  document.getElementById('Feld21').innerHTML = Summe4;
  document.getElementById('Feld25').innerHTML = Summe5;
  document.getElementById('Feld27').innerHTML = Summe6;
  document.getElementById('Feld31').innerHTML = SummeVar1;
  document.getElementById('Feld33').innerHTML = SummeVar2;
  
}
btnReset.onclick = function() {
	document.getElementById('Feld13').innerHTML = ""; 
  document.getElementById('Feld15').innerHTML = "";
  document.getElementById('Feld19').innerHTML = "";
  document.getElementById('Feld21').innerHTML = "";
  document.getElementById('Feld25').innerHTML = "";
  document.getElementById('Feld27').innerHTML = "";
  document.getElementById('Feld31').innerHTML = "";
  document.getElementById('Feld33').innerHTML = "";
}

