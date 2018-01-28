window.onload = function() {
  showRandomCodeTab();
};

function showRandomCodeTab() {
  $('#random-code-section').show();
  $('#repeats-section').hide();
};

function showRepeatsTab() {
  $('#random-code-section').hide();
  $('#repeats-section').show();
};