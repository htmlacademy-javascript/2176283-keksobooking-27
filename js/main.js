import { renderAd } from './popup.js';
import {disableForm, enableForm, enableFilters} from './page.js';
import {eventListenersOfForm, setUserForm} from './ad-form.js';
import {mapLoad, setAdPins} from './map.js';
import {getData} from './api.js';

mapLoad(() => {
  disableForm();
});

getData((ads) => {
  setAdPins(ads.slice(5, 15), renderAd);
  enableFilters();
});

enableForm();

eventListenersOfForm();

setUserForm();
