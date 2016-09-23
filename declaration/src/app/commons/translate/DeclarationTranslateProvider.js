var declarationTranslate = function ($translateProvider) {
  var languages = {
    fr: 'fr',
    en: 'en'
  };

  $translateProvider.translations(languages.en, {
    TITLE: 'Hello',
    ALERT: 'alerte',
    WARNING: 'Warning'
  });

  $translateProvider.translations(languages.fr, {
    TITLE: 'Bonjour',
    ALERT: 'alerte',
    WARNING: 'Attention'
  });

  $translateProvider.preferredLanguage(languages.fr);
  $translateProvider.useSanitizeValueStrategy('sanitize');
};

module.exports = declarationTranslate;
