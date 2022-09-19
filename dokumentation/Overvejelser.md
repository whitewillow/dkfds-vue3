# dkfds-vue3

## Project setup
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

## Udvikling
Man kan nøjes med at udvikle på root

```npm run serve```

denne spinner pt main.ts & app.ts op

Dette burde nok laves om så foldere som:

- dev_components
- dev_views
- router
  
Ikke fylder op - bruges ikke af modulet.
overvej pnpm ?



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Overvejelser
- Dansk navngivning af komponenter
- Bedre folder struktur under components
- Hjælpe klasser til bg og color - https://designsystem.dk/design/farver/
- Giver det mening at lave komponenter til layout ? - header m.m., eller er det nok med hjælpe komp. som Navigation
- Hvilke komponenter skal være ren render
- Skal route-link være en del af lib - pt bruges af `fds-nav-item-route`
- Skal vi benytte FDS JS e.g - eller lave egen
 ``` new DKFDS.Dropdown(document.getElementById('OVERFLOW-BUTTON-ID')).init();```
- Patterns https://designsystem.dk/eksempler/patterns/session-udloeber/
- 


## Udvikling faser

### Fase 1

- Størstedelen af delkomponenter laves
- Generel navngivning og struktur
- Folder struktur
- example Project gøres pænere til at kunne præsentere komponenter


### Fase 2

Dokumentation ? 
- https://histoire.dev/ ?
- Test

### Fase 3

Layout komponenter

### Fase 4

**Hjælpe klasser**
- Alle farver får en logisk opbygges hjælpe css class til color og background `https://designsystem.dk/design/farver/`

**Hjælpe metoder**
- Validering
- Fil utils
- m.m.

### Fase 5 

Cookie og evt andre manglende komponenter laves

Overvej ekstra komponenter som 
- fil drag&drop  https://codepen.io/stenvdb/pen/wvBoYQO
  ![Drag and drop eksempel](./dokumentation/drag&drop.png)

- jumbotron - se top https://designsystem.dk/
- component-preview - se hvordan input er præsenteret https://designsystem.dk/komponenter/fejlmeddelelser/
- Off-canvas
- etc.

### Fase 6

Finpudsning

### Fase 7

Vite create template e.g:
```
npm create vite@latest my-vue-app -- --template vue-ts-dkfds
```



## Layout
Forslag til hvordan layout/implementering kunne laves?

```html

<fds theme="virk/borger">
    <fds-headers>
        // Indsætter auto skip link til main
        // 2 obligatoriske headers
        // 3 valgfri
        ...
        <fds-header-1>
            // logo og logud knap (portal info)
        </fds-header-1>
        <fds-header-2>
            // titel og myndighed (solution info)
        </fds-header-2>
        <fds-header-navigation>
            // Auto gen af responsive menu
            <fds-nav-item-route
                toName="forside"
                linkTitle="Link title">
                Forside
            </fds-nav-item-route>
            <fds-nav-item-route
                toName="side2"
                linkTitle="Side 2 Link title">
                Side 2
            </fds-nav-item-route>
        <fds-header-navigation>
    </fds-headers>
    <main />
    <fds-footer>
    ...
    </fds-footer>
    <fds-cookies />
<fds>


```


## Overordnet oversigt

- [x] Accordions
- [x] Badges
- [x] Beskeder
- [ ] Brødkrumme
- [x] Cards
- [ ] Cookiemeddelelse
- [ ] Datoangivelse
- [ ] Datovælger
- [ ] Detaljer
- [x] Dropdown-menu
- [ ] Faneblade
- [x] Fejlmeddelelser
- [x] Fejlopsummering
- [x] Felter
- [ ] Footers
- [ ] Formular
- [ ] Funktionslink
- [ ] Headers
- [x] Knapper
- [ ] Modalvindue
- [ ] Notifikation
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
- [ ] Tekstområde
- [ ] Tjekboks
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
- [x] fds-error-list
- [x] fds-error-message



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

## TODO
- Header, mangler række 4 og 5 https://designsystem.dk/komponenter/headers/
- Header lidt bøvlet brug
- Gennemgå aria/a11y etc for hvert komponent
- Virk/borger tema