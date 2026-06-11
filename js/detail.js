loadPersistent();

var params = new URLSearchParams(window.location.search);
var id = Number(params.get("id"));
var test = TESTS.find(function(t) {
    return t.id === id;
});

function formatDatum(iso) {
    var teile = iso.split("-");
    return teile[2] + "." + teile[1] + "." + teile[0];
}

function zeigeNotendurchschnitt() {
    var mitNoten = TESTS.filter(function(t) {
        return t.note !== null;
    });

    if (mitNoten.length === 0) {
        return;
    }

    var summe = mitNoten.reduce(function(acc, t) {
        return acc + t.note;
    }, 0);
    var schnitt = (summe / mitNoten.length).toFixed(2);

    document.getElementById("durchschnitt-box").textContent =
        "Durchschnitt: " + schnitt + " (" + mitNoten.length + " benotete Test(s))";
}

if (!test) {
    document.getElementById("nicht-gefunden").hidden = false;
    document.getElementById("inhalt").hidden = true;
} else {
    document.title = test.fach + " - Trackly";
    document.getElementById("detail-fach").textContent = test.fach;
    document.getElementById("detail-datum").textContent = formatDatum(test.datum);

    zeigeNotendurchschnitt();

    var teststoffInput = document.getElementById("teststoff-input");
    teststoffInput.value = test.teststoff || "";

    document.getElementById("teststoff-speichern").addEventListener("click", function() {
        test.teststoff = teststoffInput.value.trim();
        savePersistent();

        var info = document.getElementById("gespeichert-info");
        info.hidden = false;
        setTimeout(function() {
            info.hidden = true;
        }, 2000);
    });
}
