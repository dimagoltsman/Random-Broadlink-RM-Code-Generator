
var HEX = ["240d", "0d24"];
var RF433 = "b2";
var RF315 = "d7";
var END = "0c00016f00000000";


var BYTES = 24;
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

function randomOnes(){
  return ONES[Math.floor(Math.random()*ONES.length)];
}

function randomZeros(){
  return ZEROS[Math.floor(Math.random()*ZEROS.length)];
}


function randomHexNumber(){
  return HEX[Math.floor(Math.random()*HEX.length)];
}


function generate(type){
  var code = "";
  for (i = 0; i < BYTES; i++) {
    var rand = randomHexNumber()
    code = code + rand;
  }

  var typePrefix = typePrefixOf(type);

  var res           = typePrefix + "0c"      + "3400" + code + END;
  var resWithRepeat = typePrefix + LONG_REPEAT + "3400" + code + END;

  return {
          regular: hexToBase64(res),
          long:    hexToBase64(resWithRepeat)
  }
}

