import { createApp } from 'vue';
import dkfdsvue3 from 'dkfds-vue3';
import App from './App.vue';
import router from './router';
import store from './store';

import AccordionsExample from './components/AccordionsExample.vue';
import KomponenterExample from './components/KomponenterExample.vue';
import BadgesExample from './components/BadgesExample.vue';
import BeskederExample from './components/BeskederExample.vue';
import BroedkrummeExample from './components/BroedkrummeExample.vue';
import CardsExample from './components/CardsExample.vue';
import CookieExample from './components/CookieExample.vue';
import DatoangivelseExample from './components/DatoangivelseExample.vue';
import DatovaelgerExample from './components/DatovaelgerExample.vue';
import DetaljerExample from './components/DetaljerExample.vue';
import DropdownExample from './components/DropdownExample.vue';
import FanebladeExample from './components/FanebladeExample.vue';
import FejlmeddelelserExample from './components/FejlmeddelelserExample.vue';
import FejlopsummeringExample from './components/FejlopsummeringExample.vue';
import FelterExample from './components/FelterExample.vue';
import FootersExample from './components/FootersExample.vue';
import FormularExample from './components/FormularExample.vue';
import FunktionslinkExample from './components/FunktionslinkExample.vue';
import HeadersExample from './components/HeadersExample.vue';
import ModalvindueExample from './components/ModalvindueExample.vue';
import NotifikationExample from './components/NotifikationExample.vue';
import OverflowExample from './components/OverflowExample.vue';
import PagineringExample from './components/PagineringExample.vue';
import RadioknapExample from './components/RadioknapExample.vue';
import SidenavigationExample from './components/SidenavigationExample.vue';
import SpinnerExample from './components/SpinnerExample.vue';
import SprogvaelgerExample from './components/SprogvaelgerExample.vue';
import StruktureredeExample from './components/StruktureredeExample.vue';
import SkipExample from './components/SkipExample.vue';
import SoegefeltExample from './components/SoegefeltExample.vue';
import TilbageExample from './components/TilbageExample.vue';
import TabellerExample from './components/TabellerExample.vue';
import TagsExample from './components/TagsExample.vue';
import TekstomraadeExample from './components/TekstomraadeExample.vue';
import TjekboksExample from './components/TjekboksExample.vue';
import ToggleExample from './components/ToggleExample.vue';
import TooltipExample from './components/TooltipExample.vue';
import TrinindikatorerExample from './components/TrinindikatorerExample.vue';
import VedhaeftExample from './components/VedhaeftExample.vue';
import FormExample from './components/FormExample.vue';
import FilerExample from './components/FilerExample.vue';
import LinksExample from './components/LinksExample.vue';
import KnapperExample from './components/KnapperExample.vue';
import FejlsummeringExample from './components/FejlsummeringExample.vue';

import FormCheckboxlistExample from './components/extra/FormCheckboxlistExample.vue';
import FormDropdownExample from './components/extra/FormDropdownExample.vue';
import FormgroupExample from './components/extra/FormgroupExample.vue';
import FormInputExample from './components/extra/FormInputExample.vue';
import FormNumberExample from './components/extra/FormNumberExample.vue';
import FormRadioExample from './components/extra/FormRadioExample.vue';
import FormTextareaExample from './components/extra/FormTextareaExample.vue';
import FormValidateExample from './components/extra/FormValidateExample.vue';

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(dkfdsvue3 as any)
  .component('form-checkboxlist-example', FormCheckboxlistExample)
  .component('form-dropdown-example', FormDropdownExample)
  .component('form-group-example', FormgroupExample)
  .component('form-input-example', FormInputExample)
  .component('form-number-example', FormNumberExample)
  .component('form-radio-example', FormRadioExample)
  .component('form-textarea-example', FormTextareaExample)
  .component('form-validate-example', FormValidateExample)
  .component('accordions-example', AccordionsExample)
  .component('komponenter-example', KomponenterExample)
  .component('badges-example', BadgesExample)
  .component('beskeder-example', BeskederExample)
  .component('broedkrumme-example', BroedkrummeExample)
  .component('cards-example', CardsExample)
  .component('cookie-example', CookieExample)
  .component('datoangivelse-example', DatoangivelseExample)
  .component('datovaelger-example', DatovaelgerExample)
  .component('detaljer-example', DetaljerExample)
  .component('dropdown-example', DropdownExample)
  .component('faneblade-example', FanebladeExample)
  .component('fejlmeddelelser-example', FejlmeddelelserExample)
  .component('fejlopsummering-example', FejlopsummeringExample)
  .component('felter-example', FelterExample)
  .component('footers-example', FootersExample)
  .component('formular-example', FormularExample)
  .component('funktionslink-example', FunktionslinkExample)
  .component('headers-example', HeadersExample)
  .component('modalvindue-example', ModalvindueExample)
  .component('notifikation-example', NotifikationExample)
  .component('overflow-example', OverflowExample)
  .component('paginering-example', PagineringExample)
  .component('radioknap-example', RadioknapExample)
  .component('sidenavigation-example', SidenavigationExample)
  .component('spinner-example', SpinnerExample)
  .component('sprogvaelger-example', SprogvaelgerExample)
  .component('strukturerede-example', StruktureredeExample)
  .component('skip-example', SkipExample)
  .component('soegefelt-example', SoegefeltExample)
  .component('tilbage-example', TilbageExample)
  .component('tabeller-example', TabellerExample)
  .component('tags-example', TagsExample)
  .component('tekstomraade-example', TekstomraadeExample)
  .component('tjekboks-example', TjekboksExample)
  .component('toggle-example', ToggleExample)
  .component('tooltip-example', TooltipExample)
  .component('trinindikatorer-example', TrinindikatorerExample)
  .component('vedhaeft-example', VedhaeftExample)
  .component('form-example', FormExample)
  .component('filer-example', FilerExample)
  .component('links-example', LinksExample)
  .component('knapper-example', KnapperExample)
  .component('fejlsummering-example', FejlsummeringExample)
  .mount('#app');
