import { RouteRecordRaw } from 'vue-router';

const komponenterRoutes: Array<RouteRecordRaw> = [
  {
    path: '/komponenter',
    name: 'komponenter',
    component: () => import('@/views/KomponenterView.vue'),
    redirect: { path: '/komponenter/forside' },
    children: [
      {
        path: 'forside',
        name: 'komponentforside',
        component: () => import('@/views/Komponenter/ForsideView.vue'),
      },
      {
        path: 'komponenter',
        name: 'komponentkomponenter',
        component: () => import('@/views/Komponenter/KomponenterExample.vue'),
      },
      {
        path: 'accordions',
        name: 'komponentaccordions',
        component: () => import('@/views/Komponenter/AccordionsExample.vue'),
      },
      {
        path: 'badges',
        name: 'komponentbadges',
        component: () => import('@/views/Komponenter/BadgesExample.vue'),
      },
      {
        path: 'beskeder',
        name: 'komponentbeskeder',
        component: () => import('@/views/Komponenter/BeskederExample.vue'),
      },
      {
        path: 'broedkrumme',
        name: 'komponentbroedkrumme',
        component: () => import('@/views/Komponenter/BroedkrummeExample.vue'),
      },
      {
        path: 'cards',
        name: 'komponentcards',
        component: () => import('@/views/Komponenter/CardsExample.vue'),
      },
      {
        path: 'cookie',
        name: 'komponentcookie',
        component: () => import('@/views/Komponenter/CookieExample.vue'),
      },
      {
        path: 'datoangivelse',
        name: 'komponentdatoangivelse',
        component: () => import('@/views/Komponenter/DatoangivelseExample.vue'),
      },
      {
        path: 'datovaelger',
        name: 'komponentdatovaelger',
        component: () => import('@/views/Komponenter/DatovaelgerExample.vue'),
      },
      {
        path: 'detaljer',
        name: 'komponentdetaljer',
        component: () => import('@/views/Komponenter/DetaljerExample.vue'),
      },
      {
        path: 'dropdown',
        name: 'komponentdropdown',
        component: () => import('@/views/Komponenter/DropdownExample.vue'),
      },
      {
        path: 'faneblade',
        name: 'komponentfaneblade',
        component: () => import('@/views/Komponenter/FanebladeExample.vue'),
      },
      {
        path: 'fejlmeddelelser',
        name: 'komponentfejlmeddelelser',
        component: () => import('@/views/Komponenter/FejlmeddelelserExample.vue'),
      },
      {
        path: 'fejlopsummering',
        name: 'komponentfejlopsummering',
        component: () => import('@/views/Komponenter/FejlopsummeringExample.vue'),
      },
      {
        path: 'ikon',
        name: 'komponentikon',
        component: () => import('@/views/Komponenter/IkonExample.vue'),
      },
      {
        path: 'inputfelter',
        name: 'komponentfelter',
        component: () => import('@/views/Komponenter/InputFeltExample.vue'),
      },
      {
        path: 'footers',
        name: 'komponentfooters',
        component: () => import('@/views/Komponenter/FootersExample.vue'),
      },
      {
        path: 'formgruppe',
        name: 'komponentformgruppe',
        component: () => import('@/views/Komponenter/FormgruppeExample.vue'),
      },
      {
        path: 'formular',
        name: 'komponentformular',
        component: () => import('@/views/Komponenter/FormularExample.vue'),
      },
      {
        path: 'funktionslink',
        name: 'komponentfunktionslink',
        component: () => import('@/views/Komponenter/FunktionslinkExample.vue'),
      },
      {
        path: 'headers',
        name: 'komponentheaders',
        component: () => import('@/views/Komponenter/HeadersExample.vue'),
      },
      {
        path: 'knapper',
        name: 'komponentknapper',
        component: () => import('@/views/Komponenter/KnapperExample.vue'),
      },
      {
        path: 'modalvindue',
        name: 'komponentmodalvindue',
        component: () => import('@/views/Komponenter/ModalvindueExample.vue'),
      },
      {
        path: 'navigation',
        name: 'komponentnavigation',
        component: () => import('@/views/Komponenter/NavigationExample.vue'),
      },
      {
        path: 'notifikation',
        name: 'komponentnotifikation',
        component: () => import('@/views/Komponenter/NotifikationExample.vue'),
      },
      {
        path: 'overflow',
        name: 'komponentoverflow',
        component: () => import('@/views/Komponenter/OverflowExample.vue'),
      },
      {
        path: 'paginering',
        name: 'komponentpaginering',
        component: () => import('@/views/Komponenter/PagineringExample.vue'),
      },
      {
        path: 'radioknap',
        name: 'komponentradioknap',
        component: () => import('@/views/Komponenter/RadioknapExample.vue'),
      },
      {
        path: 'venstremenu',
        name: 'komponentvenstremenu',
        component: () => import('@/views/Komponenter/VenstremenuExample.vue'),
      },
      {
        path: 'skip',
        name: 'komponentskip',
        component: () => import('@/views/Komponenter/SkipExample.vue'),
      },
      {
        path: 'spinner',
        name: 'komponentspinner',
        component: () => import('@/views/Komponenter/SpinnerExample.vue'),
      },
      {
        path: 'sprogvaelger',
        name: 'komponentsprogvaelger',
        component: () => import('@/views/Komponenter/SprogvaelgerExample.vue'),
      },
      {
        path: 'strukturerede',
        name: 'komponentstrukturerede',
        component: () => import('@/views/Komponenter/StruktureredeExample.vue'),
      },
      {
        path: 'soegefelt',
        name: 'komponentsoegefelt',
        component: () => import('@/views/Komponenter/SoegefeltExample.vue'),
      },
      {
        path: 'tilbage',
        name: 'komponenttilbage',
        component: () => import('@/views/Komponenter/TilbageExample.vue'),
      },
      {
        path: 'tabeller',
        name: 'komponenttabeller',
        component: () => import('@/views/Komponenter/TabellerExample.vue'),
      },
      {
        path: 'tags',
        name: 'komponenttags',
        component: () => import('@/views/Komponenter/TagsExample.vue'),
      },
      {
        path: 'tekstomraade',
        name: 'komponenttekstomraade',
        component: () => import('@/views/Komponenter/TekstomraadeExample.vue'),
      },
      {
        path: 'tilbagetiltop',
        name: 'komponenttiltop',
        component: () => import('@/views/Komponenter/TilTopExample.vue'),
      },
      {
        path: 'tjekboks',
        name: 'komponenttjekboks',
        component: () => import('@/views/Komponenter/TjekboksExample.vue'),
      },
      {
        path: 'toggle',
        name: 'komponenttoggle',
        component: () => import('@/views/Komponenter/ToggleExample.vue'),
      },
      {
        path: 'tooltip',
        name: 'komponenttooltip',
        component: () => import('@/views/Komponenter/TooltipExample.vue'),
      },
      {
        path: 'trinindikatorer',
        name: 'komponenttrinindikatorer',
        component: () => import('@/views/Komponenter/TrinindikatorerExample.vue'),
      },
      {
        path: 'vedhaeft',
        name: 'komponentvedhaeft',
        component: () => import('@/views/Komponenter/VedhaeftExample.vue'),
      },
    ],
  },
];

export default komponenterRoutes;
