var TESTS = [
    { id: 1, fach: "Mathematik", datum: "2026-05-28",
        teststoff: "Integralrechnung, Ableitungen, Extremwertaufgaben",
        note: 2, lernzeit: null },
    { id: 2, fach: "Deutsch", datum: "2026-06-04",
        teststoff: "Interpretation lyrischer Texte, Expressionismus",
        note: null, lernzeit: null },
    { id: 3, fach: "Englisch", datum: "2026-06-11",
        teststoff: "Grammar: Conditional Clauses, Vocabulary Unit 7",
        note: null, lernzeit: null },
    { id: 4, fach: "Geschichte", datum: "2026-06-18",
        teststoff: "Nachkriegszeit, Kalter Krieg, Marshallplan",
        note: 3, lernzeit: null },
    { id: 5, fach: "Informatik", datum: "2026-06-25",
        teststoff: "Algorithmen, Sortierverfahren, Big O Notation",
        note: null, lernzeit: null }
];
function savePersistent() {
    localStorage.setItem("trackly_tests", JSON.stringify(TESTS));
}
function loadPersistent() {
    var gespeichert = localStorage.getItem("trackly_tests");
    if (gespeichert) { TESTS = JSON.parse(gespeichert); }
}
