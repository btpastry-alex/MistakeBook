(function () {
  const path = location.pathname;
  const alreadyOnLang = path.startsWith("/zh-Hant/") || path.startsWith("/en/") || path.startsWith("/ja/");
  if (alreadyOnLang) return;

  const lang = (navigator.language || "en").toLowerCase();

  // 你也可以把 zh-Hant/zh-TW 都導到繁中
  if (lang.startsWith("zh")) {
    location.replace("/zh-Hant/");
    return;
  }
  if (lang.startsWith("ja")) {
    location.replace("/ja/");
    return;
  }
  location.replace("/en/");
})();
