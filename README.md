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

Bedste måde at se hvad der er muligt er at køre example projektet, indtil der kommer noget rigtig dokumentation.

Dog er `example projektet` opsat som dokumentation for projektet.

<mark>MODUL ikke udgivet endnu - Kør det fulde Project setup istedet</mark>

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

- Datoangivelse
- Datovælger
- Notifikation

- Skip link
- Headers
  - Inkl at sidenavigation kan blive en del af header i mobil visning
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
- Toaster
- Datovælger
- Datoangivelse

Layout komponenter
- Header
  - Inkl at sidenavigation kan blive en del af header i mobil visning
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
- Vis dato udskriv dato pænt med evt m. tid
- Liste vis flere
- Image viewer (hover fx og modal lign visning)
- Fil drag&drop  https://codepen.io/stenvdb/pen/wvBoYQO
  ![Drag and drop eksempel](./dokumentation/drag&drop.png)

- Jumbotron - se top https://designsystem.dk/
- Off-canvas
- etc.

### Fase 7
https://designsystem.dk/design/tilgaengelighed/
npm create vite@latest my-vue-app -- --template vue-ts-dkfds

```

# Oversigt

## TODO

- fjern: router fra modul - op til bruger selv at håndtere dette
- fds-link
- fds-icon
- fds-sprogvaelger
- fds-trinindikatorer
- fds-fil-upload/list refak
- fds-typegrafy / fds-t
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
- [x] Detaljer
- [x] Dropdown-menu
- [x] Faneblade
- [x] Fejlmeddelelser
- [x] Fejlopsummering
- [x] Felter
- [ ] Footers
- [x] Formular
- [x] Funktionslink
- [ ] Headers
- [x] Knapper
- [x] Modalvindue
- [ ] Notifikation
- [x] Overflow menu
- [ ] Paginering
- [x] Radioknap
- [x] Sidenavigation
- [ ] Skip-link
- [x] Spinner
- [ ] Sprogvælger
- [x] Strukturerede lister
- [x] Søgefelt - samme som input med slot
- [x] Tilbage link
- [ ] Tabeller
- [x] Tags
- [x] Tekstområde
- [x] Tjekboks
- [x] Toggle switch
- [x] Tooltip
- [ ] Trinindikatorer
- [x] Vedhæft fil (Upload)

## Felter

- [x] fds-input
- [x] fds-textarea
- [x] fds-checkbox
- [x] fds-radio
- [x] fds-dropdown
- [x] fds-number


## Fejl og Validering
- [x] xfds-validate
- [x] fds-fejlopsummering
- [x] fds-fejlmeddelelse



## Form
Form element indholder gruppering af, label, hint, hovedelement, fejlbesked, validering
- [x] xfds-form-group
- [x] xfds-form-input
- [x] xfds-form-textarea
- [x] xfds-form-number
- [x] xfds-form-radio
- [x] xfds-form-checkboxlist
- [x] xfds-form-dropdown
- [ ] fds-form-email

## Knapper og Link
- [x] fds-button
- [x] fds-button-icon
- [x] fds-button-spinner
- [x] fds-function-link
- [ ] fds-link

## Layout - Header, Navigation og Footer


## Ikke kategoriseret endnu
- [x] fds-alert
- [x] fds-accordian
- [x] navitems
- [ ] fds-trin
- [ ] fds-modal
- [ ] fds-button-sure
- [x] xfds-progress
- [ ] fds-icon

