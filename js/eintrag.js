loadPersistent();
var fachInput = document.getElementById("fach");
var datumInput = document.getElementById("datum");
var speichernBtn = document.getElementById("speichern-btn");
var fehlerBox = document.getElementById("fehler-box");
speichernBtn.addEventListener("click", function() {
var fach = fachInput.value.trim();
var datum = datumInput.value;
if (!fach || !datum) {
fehlerBox.hidden = false;
return;
}
fehlerBox.hidden = true;
var neueId = TESTS.length > 0
? Math.max.apply(null, TESTS.map(function(t) { return t.id; })) + 1
: 1;
TESTS.push({
id: neueId, fach: fach, datum: datum,
teststoff: "", note: null, lernzeit: null
});
savePersistent();
window.location.href = "index.html";
});
