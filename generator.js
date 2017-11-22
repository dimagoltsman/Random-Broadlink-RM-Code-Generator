
var HEX = ["240d", "0d24"];
var RF433 = "b2";
var RF315 = "d7";
var FOOTER = "0c00016f00000000";


var BITS = 24;
var LONG_REPEAT = "9";

function typePrefixOf(type){
  if(type === "RF433"){
    return RF433;
  }else if(type === "RF315"){
    return RF315;
  }else{
    throw new Error("Unsupported transmission type.");
  }
}


function randomPulse(){
  return HEX[Math.floor(Math.random()*HEX.length)];
}


function generate(type){
  var code = "";
  for (i = 0; i < BITS; i++) {
    var rand = randomPulse();
    code = code + rand;
  }

  var typePrefix = typePrefixOf(type);

  var res           = typePrefix + "0c"      + "3400" + code + FOOTER;
  var resWithRepeat = typePrefix + LONG_REPEAT + "3400" + code + FOOTER;

  return {
          regular: hexToBase64(res),
          long:    hexToBase64(resWithRepeat)
  }
}

