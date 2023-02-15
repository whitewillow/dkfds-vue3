import { RouteRecordRaw } from 'vue-router';

const ekstraKomponenterRoutes: Array<RouteRecordRaw> = [
  {
    path: '/ekstrakomponenter',
    name: 'ekstrakomponenter',
    component: () => import('@/views/EkstraKomponenterView.vue'),
    redirect: { path: '/ekstrakomponenter/forside' },
    children: [
      {
        path: 'forside',
        name: 'ekstraforside',
        component: () => import('@/views/EkstraKomponenter/ForsideView.vue'),
      },
      {
        path: 'tekstfelt',
        name: 'ekstratekstfelt',
        component: () => import('@/views/EkstraKomponenter/TekstFelt.vue'),
      },
      {
        path: 'formgroup',
        name: 'ekstraformgroup',
        component: () => import('@/views/EkstraKomponenter/FormGroup.vue'),
      },
      {
        path: 'fil-liste',
        name: 'ekstrafilliste',
        component: () => import('@/views/EkstraKomponenter/FilListe.vue'),
      },
      {
        path: 'nummerfelt',
        name: 'ekstranummerfelt',
        component: () => import('@/views/EkstraKomponenter/NummerFelt.vue'),
      },
      {
        path: 'tekstomraade',
        name: 'ekstratekstomraade',
        component: () => import('@/views/EkstraKomponenter/TekstOmraade.vue'),
      },
      {
        path: 'radio',
        name: 'ekstraradio',
        component: () => import('@/views/EkstraKomponenter/RadioList.vue'),
      },
      {
        path: 'radioknap',
        name: 'ekstraradioknap',
        component: () => import('@/views/EkstraKomponenter/RadioKnap.vue'),
      },

      {
        path: 'dropdownmenu',
        name: 'ekstradropdownmenu',
        component: () => import('@/views/EkstraKomponenter/DropdownMenu.vue'),
      },
      {
        path: 'tjekboksliste',
        name: 'ekstratjekboksliste',
        component: () => import('@/views/EkstraKomponenter/TjekboksListe.vue'),
      },
      {
        path: 'knapspinner',
        name: 'ekstraknapspinner',
        component: () => import('@/views/EkstraKomponenter/KnapSpinner.vue'),
      },
      {
        path: 'formvalidering',
        name: 'ekstraformvalidering',
        component: () => import('@/views/EkstraKomponenter/FormValidering.vue'),
      },
      {
        path: 'venstremenu',
        name: 'ekstravenstremenu',
        component: () => import('@/views/EkstraKomponenter/VenstreMenu.vue'),
      },

      {
        path: 'progressbar',
        name: 'ekstraprogressbar',
        component: () => import('@/views/EkstraKomponenter/ProgressBar.vue'),
      },
      {
        path: 'trinindikator',
        name: 'ekstratrinindikator',
        component: () => import('@/views/EkstraKomponenter/Trinindikatorer.vue'),
      },
    ],
  },
];

export default ekstraKomponenterRoutes;
