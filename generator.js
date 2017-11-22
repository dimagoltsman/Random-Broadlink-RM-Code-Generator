
var HIGH_BIT = "240d";
var LOW_BIT  = "0d24";
var BITS_ARRAY = [HIGH_BIT, LOW_BIT];
var RF433 = "b2";
var RF315 = "d7";
var FOOTER = "0c00016f00000000";
var REPEATS = "0c";
var LONG_REPEAT = "9";
var BYTES = 24;
var DATA_LENGTH = "3400";

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
  return BITS_ARRAY[Math.floor(Math.random() * 2)];
}


function generate(type){
  var code = "";
  for (i = 0; i < BYTES; i++) {
    var rand = randomPulse();
    code = code + rand;
  }

  var typePrefix = typePrefixOf(type);

  var res           = typePrefix + REPEATS      + DATA_LENGTH + code + FOOTER;
  var resWithRepeat = typePrefix + LONG_REPEAT  + DATA_LENGTH + code + FOOTER;

  return {
          regular: hexToBase64(res),
          long:    hexToBase64(resWithRepeat)
  }
}



/*
PROTOCOL:

b2 RF

0c repeats

34 00   52 bytes follow (big endian)  24 pairs + 4 for the footer

## ##       24 0d for a 1, 0d 24 for a 0

0c 00 01 6f   (Footer)


 */
