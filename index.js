function startGenerate() {

  var type = $('#signal_type').val();
  var generated = generate(type);
  console.log(generated.regular);
  console.log(generated.long);

  var html = '<tr scope="row"><td>' + type + '</td><td>' + generated.regular + '</td><td>' + generated.long + '</td></tr>';

  $('#restable').append(html);
}

function calcRepeats() {
  var code = $("#usercode").val();
  var repeats = getRepeats(code);
  $("#repeats").html(repeats);
}

function generateNewRepeat() {
  var code = $("#usercode").val();
  var repeats = $("#newrepeat").val();
  var newCode = getNewCode(code, repeats);
  $("#newcode").val(newCode);
}
