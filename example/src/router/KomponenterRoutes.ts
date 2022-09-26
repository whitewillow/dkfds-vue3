import { RouteRecordRaw } from 'vue-router';

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}
function loadExtraView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/Komponenter/${view}`);
}

const komponenterRoutes: Array<RouteRecordRaw> = [
  {
    path: '/komponenter',
    name: 'komponenter',
    component: loadView('KomponenterView.vue'),
    redirect: { path: '/komponenter/forside' },
    children: [
      {
        path: 'forside',
        name: 'komponentforside',
        component: loadExtraView('ForsideView.vue'),
      },
      {
        path: 'komponenter',
        name: 'komponentkomponenter',
        component: loadExtraView('KomponenterExample.vue'),
      },
      {
        path: 'accordions',
        name: 'komponentaccordions',
        component: loadExtraView('AccordionsExample.vue'),
      },
      {
        path: 'badges',
        name: 'komponentbadges',
        component: loadExtraView('BadgesExample.vue'),
      },
      {
        path: 'beskeder',
        name: 'komponentbeskeder',
        component: loadExtraView('BeskederExample.vue'),
      },
      {
        path: 'broedkrumme',
        name: 'komponentbroedkrumme',
        component: loadExtraView('BroedkrummeExample.vue'),
      },
      {
        path: 'cards',
        name: 'komponentcards',
        component: loadExtraView('CardsExample.vue'),
      },
      {
        path: 'cookie',
        name: 'komponentcookie',
        component: loadExtraView('CookieExample.vue'),
      },
      {
        path: 'datoangivelse',
        name: 'komponentdatoangivelse',
        component: loadExtraView('DatoangivelseExample.vue'),
      },
      {
        path: 'datovaelger',
        name: 'komponentdatovaelger',
        component: loadExtraView('DatovaelgerExample.vue'),
      },
      {
        path: 'detaljer',
        name: 'komponentdetaljer',
        component: loadExtraView('DetaljerExample.vue'),
      },
      {
        path: 'dropdown',
        name: 'komponentdropdown',
        component: loadExtraView('DropdownExample.vue'),
      },
      {
        path: 'faneblade',
        name: 'komponentfaneblade',
        component: loadExtraView('FanebladeExample.vue'),
      },
      {
        path: 'fejlmeddelelser',
        name: 'komponentfejlmeddelelser',
        component: loadExtraView('FejlmeddelelserExample.vue'),
      },
      {
        path: 'fejlopsummering',
        name: 'komponentfejlopsummering',
        component: loadExtraView('FejlopsummeringExample.vue'),
      },
      {
        path: 'felter',
        name: 'komponentfelter',
        component: loadExtraView('FelterExample.vue'),
      },
      {
        path: 'footers',
        name: 'komponentfooters',
        component: loadExtraView('FootersExample.vue'),
      },
      {
        path: 'formular',
        name: 'komponentformular',
        component: loadExtraView('FormularExample.vue'),
      },
      {
        path: 'funktionslink',
        name: 'komponentfunktionslink',
        component: loadExtraView('FunktionslinkExample.vue'),
      },
      {
        path: 'headers',
        name: 'komponentheaders',
        component: loadExtraView('HeadersExample.vue'),
      },
      {
        path: 'knapper',
        name: 'komponentknapper',
        component: loadExtraView('KnapperExample.vue'),
      },
      {
        path: 'modalvindue',
        name: 'komponentmodalvindue',
        component: loadExtraView('ModalvindueExample.vue'),
      },
      {
        path: 'notifikation',
        name: 'komponentnotifikation',
        component: loadExtraView('NotifikationExample.vue'),
      },
      {
        path: 'overflow',
        name: 'komponentoverflow',
        component: loadExtraView('OverflowExample.vue'),
      },
      {
        path: 'paginering',
        name: 'komponentpaginering',
        component: loadExtraView('PagineringExample.vue'),
      },
      {
        path: 'radioknap',
        name: 'komponentradioknap',
        component: loadExtraView('RadioknapExample.vue'),
      },
      {
        path: 'sidenavigation',
        name: 'komponentsidenavigation',
        component: loadExtraView('SidenavigationExample.vue'),
      },
      {
        path: 'skip',
        name: 'komponentskip',
        component: loadExtraView('SkipExample.vue'),
      },
      {
        path: 'spinner',
        name: 'komponentspinner',
        component: loadExtraView('SpinnerExample.vue'),
      },
      {
        path: 'sprogvaelger',
        name: 'komponentsprogvaelger',
        component: loadExtraView('SprogvaelgerExample.vue'),
      },
      {
        path: 'strukturerede',
        name: 'komponentstrukturerede',
        component: loadExtraView('StruktureredeExample.vue'),
      },
      {
        path: 'soegefelt',
        name: 'komponentsoegefelt',
        component: loadExtraView('SoegefeltExample.vue'),
      },
      {
        path: 'tilbage',
        name: 'komponenttilbage',
        component: loadExtraView('TilbageExample.vue'),
      },
      {
        path: 'tabeller',
        name: 'komponenttabeller',
        component: loadExtraView('TabellerExample.vue'),
      },
      {
        path: 'tags',
        name: 'komponenttags',
        component: loadExtraView('TagsExample.vue'),
      },
      {
        path: 'tekstomraade',
        name: 'komponenttekstomraade',
        component: loadExtraView('TekstomraadeExample.vue'),
      },
      {
        path: 'tjekboks',
        name: 'komponenttjekboks',
        component: loadExtraView('TjekboksExample.vue'),
      },
      {
        path: 'toggle',
        name: 'komponenttoggle',
        component: loadExtraView('ToggleExample.vue'),
      },
      {
        path: 'tooltip',
        name: 'komponenttooltip',
        component: loadExtraView('TooltipExample.vue'),
      },
      {
        path: 'trinindikatorer',
        name: 'komponenttrinindikatorer',
        component: loadExtraView('TrinindikatorerExample.vue'),
      },
      {
        path: 'vedhaeft',
        name: 'komponentvedhaeft',
        component: loadExtraView('VedhaeftExample.vue'),
      },
    ],
  },
];

export default komponenterRoutes;