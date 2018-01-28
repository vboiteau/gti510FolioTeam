import { navigatorParentLanguage, slugify } from './../../../utilities';
import en from './en';
import fr from './fr';

const projectsList = {
    fr,
    en
};

export default projectsList[navigatorParentLanguage].map(project => Object.assign(project, {
    slug: slugify(project.name)
}));
