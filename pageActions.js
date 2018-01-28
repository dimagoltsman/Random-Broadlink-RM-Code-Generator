window.onload = function() {
  showRandomCodeTab();
};

function showRandomCodeTab() {
  hideAll();
  $('#random-code-section').show();
};

function showRepeatsTab() {
  hideAll();
  $('#repeats-section').show();
};

function showLivoloTab() {
    hideAll();
    $('#livolo-section').show();
};

function hideAll() {
    $('#repeats-section').hide();
    $('#random-code-section').hide();
    $('#livolo-section').hide();
}