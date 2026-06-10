/* ARC Lab — language toggle (EN/KO) + mobile menu */
(function () {
  "use strict";
  var KEY = "arc-lang";

  function applyLang(l) {
    document.documentElement.lang = l;
    var nodes = document.querySelectorAll("[data-en]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var v = (l === "ko") ? el.getAttribute("data-ko") : el.getAttribute("data-en");
      if (v !== null) el.innerHTML = v;
    }
    var t = document.getElementById("langToggle");
    if (t) t.textContent = l.toUpperCase();
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  var initial = "en";
  var h = location.hash.replace("#", "");
  if (h === "ko" || h === "en") {
    initial = h;
  } else {
    try { initial = localStorage.getItem(KEY) || "en"; } catch (e) {}
  }
  applyLang(initial);

  var toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", function () {
    var cur = (document.documentElement.lang === "ko") ? "ko" : "en";
    applyLang(cur === "en" ? "ko" : "en");
  });

  var hamb = document.getElementById("hamb");
  var menu = document.getElementById("menu");
  if (hamb && menu) {
    hamb.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      hamb.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var links = menu.querySelectorAll("a");
    for (var j = 0; j < links.length; j++) {
      links[j].addEventListener("click", function () {
        menu.classList.remove("open");
        hamb.setAttribute("aria-expanded", "false");
      });
    }
  }
})();
