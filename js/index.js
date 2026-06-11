loadPersistent();
function tagsVerbleibend(datumStr) {
var heute = new Date(); heute.setHours(0,0,0,0);
var testDatum = new Date(datumStr); testDatum.setHours(0,0,0,0);
return Math.round((testDatum - heute) / (1000 * 60 * 60 * 24));
}
function formatDatum(iso) {
var t = iso.split("-");
return t[2] + "." + t[1] + "." + t[0];
}
function renderListe() {
var liste = document.getElementById("test-liste");
var keineTst = document.getElementById("keine-tests");
var info = document.getElementById("anzahl-info");
var sortiert = TESTS.slice().sort(function(a, b) {
return a.datum < b.datum ? -1 : 1;
});
if (sortiert.length === 0) { keineTst.hidden = false; return; }
info.textContent = sortiert.length + " Test(e) eingetragen";
sortiert.forEach(function(test) {
var tage = tagsVerbleibend(test.datum);
var karte = document.createElement("a");
karte.href = "detail.html?id=" + test.id;
karte.className = "test-karte";
if (tage >= 0 && tage <= 3) karte.classList.add("bald");
if (tage < 0) karte.classList.add("vergangen");
var countdown = tage === 0 ? "HEUTE!"
: tage > 0 ? "in " + tage + " Tag(en)" : "vorbei";
var cdKlasse = tage === 0 ? "heute" : tage <= 3 && tage >= 0 ? "bald" : "";
karte.innerHTML =
'<div class="test-karte-links">' +
'<div class="test-fach">' + test.fach + '</div>' +
'<div class="test-datum">' + formatDatum(test.datum) + '</div>' +
'</div>' +
'<div class="test-countdown ' + cdKlasse + '">' + countdown + '</div>';
liste.appendChild(karte);
});
}
renderListe();
