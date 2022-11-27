import {addEventListenersOnForm, setUserForm, addOnClearButton} from './ad-form.js';
import {disableForm, enableForm, enableFilters} from './page.js';
import {mapLoad, setAdPins, submitClearButton} from './map.js';
import{setOnFilterChange, getFilterAds} from './filter.js';
import { renderAd } from './popup.js';
import {getData} from './api.js';
import {debounce} from './util.js';
import './avatar.js';


const RERENDER_DELAY = 500;

const getPins = () => {
  getData((ads) => {
    setAdPins(getFilterAds(ads), renderAd);
    setOnFilterChange(debounce(
      () => setAdPins(getFilterAds(ads), renderAd),
      RERENDER_DELAY,
    ));
    enableFilters();
  });
};

mapLoad(() => {
  getPins();
  disableForm();
});

enableForm();

addEventListenersOnForm();
addOnClearButton(submitClearButton, getPins);
setUserForm(submitClearButton, getPins);
