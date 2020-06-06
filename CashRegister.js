function checkCashRegister(price, cash, cid) {
  var change;
  var newCid = [];

for (var j=0; j<9; j++){
  newCid.push(cid[j].slice())
}



var unit = [["PENNY", 0.01],["NICKEL", 0.05],["DIME", 0.1],["QUARTER", 0.25],["ONE", 1],["FIVE", 5],["TEN", 10],["TWENTY", 20],["ONE HUNDRED", 100]]

var cashRegisterInverted = cid.slice(0)
cashRegisterInverted.reverse()

var total = 0;
var change = cash - price;
change = Math.round(change*100)/100
var reversed = unit.slice(0).reverse();
var currencyAmount = 0;
var register = []
var temp = change;
var a = 0;



for (var i= 0; i<unit.length; i++){
   total += cid[i][1]
}   
                   


var tempUnit = 0;



for (var u=0; u<9; u++){
  if (temp >= reversed[u][1] && cashRegisterInverted[u][1]>0){
    
    tempUnit = Math.floor(Math.round((temp/reversed[u][1])*100)/100)*Math.round(reversed[u][1]*100)/100


    // Math.round(change*100)/100

    if (cashRegisterInverted[u][1] >= tempUnit){
    register.push([reversed[u][0],tempUnit]);
    temp = temp - tempUnit
    a = a + tempUnit;
    cashRegisterInverted[u][1] = cashRegisterInverted[u][1] - tempUnit
    }


    else if (cashRegisterInverted [u][1] < tempUnit){
      register.push([reversed[u][0],cashRegisterInverted[u][1]]);
      temp = temp - cashRegisterInverted[u][1];
      a = a + cashRegisterInverted [u][1];
      cashRegisterInverted[u][1] = 0
    }
    else if (a == change){
      break
    }
  }
}


for (var j= 0; j <9; j++){
  currencyAmount += cashRegisterInverted[j][1]/reversed[j][1]
     };



a = Math.round(a*100)/100
var status = ""

if (change == a && currencyAmount > 0){
  status = "OPEN"
  return {status:status, change:register };
}

else if (change == a && currencyAmount == 0){
  status = "CLOSED"
  return {status:status, change:newCid };
}

else if (change > a){
  status = "INSUFFICIENT_FUNDS"
  return {status:status, change:[] };
}


return Math.floor(0.04/reversed[8][1])*reversed[8][1]

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);