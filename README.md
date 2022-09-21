# dkfds-vue3

```
npm install [Modul ikke udgivet] -S
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

<mark>MODUL ikke udgivet endnu</mark>

clone /example
```
cd example
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

Hvis du vil tilføje komponenter/pull request, se da [Udviklingsguide](./dokumentation/UdviklingsGuide.md)


# Udvikling faser

## Fase 1

- Størstedelen af delkomponenter laves
- Generel navngivning og struktur
- Folder struktur
- example Project gøres pænere til at kunne præsentere komponenter
- Dirty event ?

### Følgende komponenter laves i en senere fase:

- Tabel - for kompleks - lav selv HTML

- Tags - ikke optimal - UI mangler tag luk funktion ?

- Datoangivelse
- Datovælger
- Overflow Menu
- Modalvindue
- Notifikation

- Skip link
- Headers
- Footers
### Følgende laves ikke

- Cookiemeddelelse - Bedst af bruge egen komponent

## Fase 2

Dokumentation via:
- https://histoire.dev/ ?
- Test
- Test Aria/A11y/Tilgængelighed - https://designsystem.dk/design/tilgaengelighed/


## Fase 3

Komponenter
- Modal
- Toaster
- Datovælger
- Datoangivelse
- Overflow Menu

Layout komponenter
- Header
- Skip link
- Footer

## Fase 4

**Hjælpe klasser**
- Alle farver får en logisk opbygges hjælpe css class til color og background `https://designsystem.dk/design/farver/`

**Hjælpe metoder**
- Validering
- Fil utils
- m.m.

## Fase 5

Finpudsning

## Fase 6 

Overvej ekstra komponenter som 
- fil drag&drop  https://codepen.io/stenvdb/pen/wvBoYQO
  ![Drag and drop eksempel](./dokumentation/drag&drop.png)

- jumbotron - se top https://designsystem.dk/
- component-preview - se hvordan input er præsenteret https://designsystem.dk/komponenter/fejlmeddelelser/
- Off-canvas
- etc.

### Fase 7
https://designsystem.dk/design/tilgaengelighed/
npm create vite@latest my-vue-app -- --template vue-ts-dkfds
```

# Oversigt

## TODO

- fds-detaljer
- fds-faneblade - se fds-sidenavigation-tabs
- fds-sidenavigation - fds-sidenavigation-tabs med :to="routelocation"
- fds-sprogvaelger
- fds-strukturerede-liste
- fds-trinindikatorer
- fds-spinner - Variationer ?
- fds-number currency!
- fds-soegefelt / <fds-input knap prop?>
- fds-tilbage-link - af-art af Funktionslink
- fds-tooltip refak - https://designsystem.dk/kode/komponenter/tooltip/
- fds-fil-upload/list refak
- fds-icon
- fds-typegrafy / fds-t
- fds-progress ?
- Overvej knapper variants ?
  
## Overordnet oversigt

- [x] Accordions
- [x] Badges
- [x] Beskeder
- [ ] Brødkrumme
- [x] Cards
- [ ] Cookiemeddelelse <mark>TBD</mark>
- [ ] Datoangivelse <mark>Overvej eget komponent</mark>
- [ ] Datovælger <mark>Overvej eget komponent</mark>
- [ ] Detaljer
- [x] Dropdown-menu
- [ ] Faneblade
- [x] Fejlmeddelelser
- [x] Fejlopsummering
- [x] Felter
- [ ] Footers
- [x] Formular
- [x] Funktionslink
- [ ] Headers
- [x] Knapper
- [ ] Modalvindue <mark>Overvej eget komponent</mark>
- [ ] Notifikation <mark>Overvej eget komponent</mark>
- [ ] Overflow menu
- [ ] Paginering
- [x] Radioknap
- [ ] Sidenavigation
- [ ] Skip-link
- [ ] Spinner
- [ ] Sprogvælger
- [ ] Strukturerede lister
- [ ] Søgefelt
- [ ] Tilbage link
- [ ] Tabeller
- [ ] Tags
- [x] Tekstområde
- [x] Tjekboks
- [x] Toggle switch
- [ ] Tooltip
- [ ] Trinindikatorer
- [x] Vedhæft fil (Upload)

## Felter

- [x] fds-input
- [x] fds-textarea
- [x] fds-checkbox
- [x] fds-radio
- [x] fds-dropdown
- [ ] fds-number currency


## Fejl og Validering
- [x] fds-validate
- [x] fds-fejlopsummering
- [x] fds-fejlmeddelelse



## Form
Form element indholder gruppering af, label, hint, hovedelement, fejlbesked, validering
- [x] fds-form-group
- [x] fds-form-input
- [x] fds-form-textarea
- [ ] fds-form-number
- [ ] fds-form-email
- [ ] fds-form-radio
- [ ] fds-form-checkbox
- [ ] fds-form-checkboxes
- [ ] fds-form-dropdown

## Knapper og Link
- [x] fds-button
- [x] fds-button-icon
- [x] fds-button-spinner
- [ ] fds-link
- [ ] fds-function-link

## Layout - Header, Navigation og Footer


## Ikke kategoriseret endnu
- [ ] fds-trin
- [x] fds-alert
- [x] fds-accordian
- [ ] fds-modal
- [ ] fds-button-sure
- [ ] fds-progress
- [ ] fds-icon
- [x] navitems

