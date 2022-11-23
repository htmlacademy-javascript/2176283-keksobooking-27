import { renderAd } from './popup.js';
import {disableForm, enableForm, enableFilters} from './page.js';
import {eventListenersOfForm, setUserForm} from './ad-form.js';
import {mapLoad, setAdPins} from './map.js';
import {getData} from './api.js';
const NUMBER_OF_ADS = 10;
mapLoad(() => {
  disableForm();
});

getData((ads) => {
  setAdPins(ads.slice(0, NUMBER_OF_ADS), renderAd);
  enableFilters();
});

enableForm();

eventListenersOfForm();

setUserForm();
