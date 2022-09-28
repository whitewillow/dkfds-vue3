# dkfds-vue3

Med dkfds-vue3 kan du bygge responsive og ARIA tilgængelige web projekter med vue 3 og det mest populære front-end CSS bibliotek for selvbetjeningsløsninger - Det Fælles Designsystem

Med over 40 Standard komponenter og flere ekstra komponenter til at hjælpe dig med at udvikle selvbetjeningsløsninger hurtigt og effektivt.

TODO: mere beskrivelse

<p align="center">
   <a href="https://www.npmjs.com/package/dkfds-vue3">
    <img src="https://flat.badgen.net/npm/v/dkfds-vue3" alt="Current version">
  </a>
  <a href="https://www.npmjs.com/package/dkfds-vue3">
    <img src="https://flat.badgen.net/npm/dt/dkfds-vue3" alt="npm downloads">
  </a>
  <a href="https://github.com/detfaellesdesignsystem/dkfds-components">
    <img src="https://flat.badgen.net/badge/dkfds/8.1.0/0059b3" alt="DKFDS version">
  </a>
  <a href="https://vuejs.org">
    <img src="https://flat.badgen.net/badge/vue.js/3.2.x/4fc08d" alt="Vue.js version">
  </a>


</p>

# Brug det:

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
  <fds-icon-collection />
  <!-- Sørger for at ikoner bliver indlæst -->
  ...
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import DKFDS from "dkfds";

  DKFDS.init();

  export default defineComponent({
    name: "App",
  });
</script>

<style lang="scss">
  $font-path: "~dkfds/src/fonts/IBMPlexSans/";
  $image-path: "~dkfds/src/img";
  $site-image-path: "~dkfds/src/img";
  $icons-folder-path: "~dkfds/src/img/svg-icons";
  @import "../node_modules/dkfds/src/stylesheets/dkfds-virkdk";
  @import "../node_modules/dkfds-vue3/src/assets/main.scss";
</style>
```

# Se det / Example Project

Bedste måde at se hvad der er muligt er at køre example projektet, indtil der kommer noget rigtig dokumentation.

Dog er `example projektet` opsat som dokumentation for projektet.

clone /example

```
cd example
npm install
npm run serve
```

# Udvikling af komponenter - Project setup

```
npm install
npm run build-vite-link
```

Herefter kan man køre `example` siden:

```
cd example
npm run serve
```

Efterfølgende, under udvikling, kan man kører fra `/`

```
npm run build-vite-link
cd example
npm run serve
```

## Faser og Mangler:

Se [Work in progress](./dokumentation/WIP.md)

Hvis du vil tilføje komponenter/pull request, se da [Udviklingsguide](./dokumentation/UdviklingsGuide.md)
