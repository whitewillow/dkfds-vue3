# dkfds-vue3

Med dkfds-vue3 kan du bygge responsive og ARIA tilgængelige web projekter med vue 3 og det mest populære front-end CSS bibliotek for selvbetjeningsløsninger - Det Fælles Designsystem

Med over 40 Standard komponenter og flere ekstra komponenter til at hjælpe dig med at udvikle selvbetjeningsløsninger hurtigt og effektivt.


<p align="center">
   <a href="https://www.npmjs.com/package/dkfds-vue3">
    <img src="https://flat.badgen.net/npm/v/dkfds-vue3" alt="Current version">
  </a>
  <a href="https://www.npmjs.com/package/dkfds-vue3">
    <img src="https://flat.badgen.net/npm/dt/dkfds-vue3" alt="npm downloads">
  </a>
  <a href="https://github.com/detfaellesdesignsystem/dkfds-components">
    <img src="https://flat.badgen.net/badge/dkfds/8.2.0/0059b3" alt="DKFDS version">
  </a>
  <a href="https://vuejs.org">
    <img src="https://flat.badgen.net/badge/vue.js/3.2.x/4fc08d" alt="Vue.js version">
  </a>


</p>

# Demo side



Se [DKFDS-Vue3 Demo](https://whitewillow.github.io/dkfds-vue3-example) (Stadig under udarbejdelse)


<br />
<br />

# Installation:


```
npm install -S dkfds-vue3
```

```typescript
// main.ts
import { createApp } from 'vue';
import dkfdsvue3 from 'dkfds-vue3';
import App from './App.vue';
import router from './router';

...

createApp(App)
  .use(router)
  .use(dkfdsvue3 as any)
  .mount('#app');
```

```html
// app.ts
<template>
  ...
  <fds-icon-collection />
  <!-- Sørger for at ikoner bliver indlæst -->
</template>

<style lang="scss">
  $font-path: "~dkfds/src/fonts/IBMPlexSans/";
  $image-path: "~dkfds/src/img";
  $site-image-path: "~dkfds/src/img";
  $icons-folder-path: "~dkfds/src/img/svg-icons";
  @import "../node_modules/dkfds/src/stylesheets/dkfds-virkdk";
  @import "../node_modules/dkfds-vue3/src/assets/main.scss";
</style>
```


eller se [app.vue eksempel](./dokumentation/app-vue-example.md)


For Borger DK tema brug følgende istedet for `dkfds-virkdk`
```html
@import '../node_modules/dkfds/src/stylesheets/dkfds-borgerdk.scss';
```


## Faser og Mangler:

Se [Roadmap](./dokumentation/WIP.md)

## FAQ

Se [FAQ](./dokumentation/faq.md)


## Udvikling

Hvis du vil tilføje komponenter/pull request, se da [Udviklingsguide](./dokumentation/UdviklingsGuide.md)
