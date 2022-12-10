google.load("elements", "1", { packages: "transliteration" });
var control;
function onLoad() {
  var options = {
    sourceLanguage: google.elements.transliteration.LanguageCode.ENGLISH,
    destinationLanguage: [google.elements.transliteration.LanguageCode.HINDI],
    shortcutKey: "ctrl+g",
    transliterationEnabled: true,
  };
  control = new google.elements.transliteration.TransliterationControl(options);
  var elements = document.getElementsByClassName('questionHindi');
  control.makeTransliteratable(elements);
}
google.setOnLoadCallback(onLoad);

