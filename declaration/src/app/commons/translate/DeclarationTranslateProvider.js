var declarationTranslate = function ($translateProvider) {
  var languages = {
    fr: 'fr',
    en: 'en'
  };

  $translateProvider.translations(languages.en, {
    TITLE: 'Hello',
    ALERT: 'alerte',
    WARNING: 'Warning',
    TYPE_DECLARATION: 'DECLARATION TYPE'
  });

  $translateProvider.translations(languages.fr, {
    TITLE: 'Bonjour',
    ALERT: 'alerte',
    WARNING: 'Attention',
    TYPE_DECLARATION: 'TYPE DE DECLARATION',
    TITRE_PRODUIT: '1. PRODUIT',
    CODE_PRODUIT: 'Code produit',
    TITRE_POIDS_UNITAIRE: '2. POIDS UNITAIRE PAR MATERIAUX (EN GRAMMES)',
    TITRE_DECOTE: '3. DECOTE',
    TITRE_BONUS: '4. BONUS',
    BTN_SAUVEGARDER: 'Sauvegarder',
    LABEL_PAPIER_CARTON_RECYCLE: 'Papier-carton recyclé',
    LABEL_LIBELLE_PRODUIT: 'libellé du produit'
  });

  $translateProvider.preferredLanguage(languages.fr);
  // $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.useSanitizeValueStrategy(null);
};

module.exports = declarationTranslate;
