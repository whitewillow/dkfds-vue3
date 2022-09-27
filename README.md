# dkfds-vue3

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
  ...
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import DKFDS from 'dkfds';

DKFDS.init();

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
$font-path: '~dkfds/src/fonts/IBMPlexSans/';
$image-path: '~dkfds/src/img';
$site-image-path: '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import '../node_modules/dkfds-vue3/src/assets/main.scss';
</style>
```

## Beskrivelse

Vue 3 komponent bibliotek lavet på baggrund af https://designsystem.dk/

TODO: bedre beskrivelse

## Hvad er det Ikke

TODO: Forventningsafstemmelse information

# Example Project

Bedste måde at se hvad der er muligt er at køre example projektet, indtil der kommer noget rigtig dokumentation.

Dog er `example projektet` opsat som dokumentation for projektet.

clone /example
```
cd example
npm install
npm run serve
```



# Project setup
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


