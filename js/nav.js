var NAV_PUNKTE = [
    { label: "Übersicht", icon: "ti-home", href: "index.html" },
    { label: "Eintragen", icon: "ti-plus", href: "eintrag.html" },
    { label: "Noten", icon: "ti-chart-bar", href: "noten.html" },
];
function getAktiveSeite() {
    var s = window.location.pathname.split("/").pop();
    return s || "index.html";
}
function navEinfuegen() {
    var nav = document.createElement("nav");
    nav.id = "main-nav";
    nav.setAttribute("aria-label", "Hauptnavigation");
    var aktive = getAktiveSeite();
    NAV_PUNKTE.forEach(function(p) {
        var a = document.createElement("a");
        a.href = p.href; a.className = "nav-item";
        if (aktive === p.href) {
            a.classList.add("aktiv");
            a.setAttribute("aria-current", "page");
        }
        a.innerHTML = '<i class="ti ' + p.icon + '" aria-hidden="true"></i>'
            + '<span>' + p.label + '</span>';
        nav.appendChild(a);
    });
    document.body.appendChild(nav);
}
document.addEventListener("DOMContentLoaded", navEinfuegen);