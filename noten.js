loadPersistent();
var liste = document.getElementById(noten-liste);
function formatDatum(iso) {
var t = iso.split(-);
return t[2] + . + t[1] + . + t[0];
}
function renderNoten() {
liste.innerHTML = ;
var sortiert = TESTS.slice().sort(function(a, b) {
return a.datum  b.datum -1  1;
});
sortiert.forEach(function(test) {
var karte = document.createElement(div);
karte.className = noten-karte;
var noteBadge = test.note !== null
 'span class=note-badgeNote ' + test.note + 'span'
 ;
karte.innerHTML =
'div class=noten-fach' + test.fach +   + noteBadge + 'div' +
'div class=noten-datum' + formatDatum(test.datum) + 'div' +
'div class=note-eingabe' +
'labelNote (1–5)label' +
'input type=number class=note-input min=1 max=5 step=1' +
' value=' + (test.note !== null  test.note  ) + '' +
' placeholder=1–5 data-id=' + test.id + '' +
'button class=note-speichern-btn data-id=' + test.id + '
Speichernbutton' +
'div';
liste.appendChild(karte);
});
 Event-Listener auf alle Speichern-Buttons
document.querySelectorAll(.note-speichern-btn).forEach(function(btn) {
btn.addEventListener(click, function() {
var testId = Number(btn.dataset.id);
var inp = document.querySelector('.note-input[data-id=' + testId + ']');
var wert = Number(inp.value);
if (wert  1  wert  5  isNaN(wert)) {
alert(Bitte eine Note zwischen 1 und 5 eingeben!);
return;
}
var obj = TESTS.find(function(t) { return t.id === testId; });
if (obj) { obj.note = wert; savePersistent(); renderNoten(); }
});
});
}
renderNoten();