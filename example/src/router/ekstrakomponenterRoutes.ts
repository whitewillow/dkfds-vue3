import { RouteRecordRaw } from 'vue-router';

function loadView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}
function loadExtraView(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/EkstraKomponenter/${view}`);
}

const ekstraKomponenterRoutes: Array<RouteRecordRaw> = [
  {
    path: '/ekstrakomponenter',
    name: 'ekstrakomponenter',
    component: loadView('EkstraKomponenterView.vue'),
    redirect: { path: '/ekstrakomponenter/forside' },
    children: [
      {
        path: 'forside',
        name: 'ekstraforside',
        component: loadExtraView('ForsideView.vue'),
      },
      {
        path: 'tekstfelt',
        name: 'ekstratekstfelt',
        component: loadExtraView('TekstFelt.vue'),
      },
      {
        path: 'formgroup',
        name: 'ekstraformgroup',
        component: loadExtraView('FormGroup.vue'),
      },
      {
        path: 'nummerfelt',
        name: 'ekstranummerfelt',
        component: loadExtraView('NummerFelt.vue'),
      },
      {
        path: 'tekstomraade',
        name: 'ekstratekstomraade',
        component: loadExtraView('TekstOmraade.vue'),
      },
      {
        path: 'radio',
        name: 'ekstraradio',
        component: loadExtraView('RadioList.vue'),
      },
      {
        path: 'dropdownmenu',
        name: 'ekstradropdownmenu',
        component: loadExtraView('DropdownMenu.vue'),
      },
      {
        path: 'tjekboksliste',
        name: 'ekstratjekboksliste',
        component: loadExtraView('TjekboksListe.vue'),
      },
      {
        path: 'knapspinner',
        name: 'ekstraknapspinner',
        component: loadExtraView('KnapSpinner.vue'),
      },
      {
        path: 'formvalidering',
        name: 'ekstraformvalidering',
        component: loadExtraView('FormValidering.vue'),
      },
      {
        path: 'venstremenu',
        name: 'ekstravenstremenu',
        component: loadExtraView('VenstreMenu.vue'),
      },

      {
        path: 'progressbar',
        name: 'ekstraprogressbar',
        component: loadExtraView('ProgressBar.vue'),
      },
    ],
  },
];

export default ekstraKomponenterRoutes;
