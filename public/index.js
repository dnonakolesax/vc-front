import {Router} from "./modules/router.js";

const navbarElement = document.querySelector('#navbar');
navbarElement.innerHTML = Handlebars.templates.navbar();
const rootElement = document.querySelector('#root');
rootElement.innerHTML = "<a id=\"plink\" href=\"/profil1\">your page</a>";
const router = new Router();
router.goTo();