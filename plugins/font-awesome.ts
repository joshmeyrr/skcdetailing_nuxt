import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faChevronRight, faCar, faTruckPickup, faShip } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
	faGithub,
	faLinkedin,
	faTwitter,
	faFacebook,
	faArrowDown,
	faChevronRight,
	faCar, faTruckPickup, faShip
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {});
});
