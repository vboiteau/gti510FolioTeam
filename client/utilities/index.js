const navigatorParentLanguage = navigator.language.split('-')[0];

const slugify = text => text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

export {
    navigatorParentLanguage,
    slugify
};
