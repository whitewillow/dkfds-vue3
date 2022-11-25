

# TODO:

https://github.com/whitewillow/dkfds-vue3/issues



# 0.3.10

Efter fælles gennemgang med teamet, er der enighed om refak kerne komponenter, for at give konsistenc og ensartethed
- fds-alert - prop navne
- fds-badge - prop navne
- fds-accordian - prop navne
- fds-card-group - grupper cards
- div boolean prop navne rettet til at lige html attr: eg. disabled/active/expanded/selected 
- fds-fejlopsummering, fjernet list - ikke gennemtænkt og ikke kerne funktion
- fjernet fds-trinindikator
- Tilføjet fds-trinindikator-group med tilhørende fds-trinindikator-item
- Tilføjet xfds-trinindikator, der tager imod liste af trin

Fjernet 
- xfds-faneblade - ikke gennemtænkt nok - fds-faneblade er dækkende
- 


# 0.3.9

- overflow - klik udenfor, lukkede ikke menu
- oprydning


# 0.3.8

- fds-cookiemeddelelse

Simpel cookiemeddelelse, giver kun styling for cookiemeddelelsen, ikke den tekniske implementering af cookiemeddelelsen.

Du skal selv tilpasse indholdet i meddelelsen, så den overholder gældende lovgivning og stemmer overens med din løsnings specifikke anvendelse af cookies.


```
<fds-cookiemeddelelse 
  @accepter="cookieAccept = $event"
  header="Fortæl os om du accepterer cookies">
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> Læs mere om vores brug af cookies. </a>
  </p>
</fds-cookiemeddelelse>
```

# 0.3.7

- Refak af xfds-validate
- Refak af xfds form komponenter

Validering er udskilt fra xfds form komponenter, dvs den skal kaldes seperat:

```
<xfds-validate :modelValue="user.adress" :validations="[hasContent, charactersMinLength(10)]">
  <xfds-form-input
    label="Adresse"
    hint="Angiv gyldig adresse"
    tooltip="Input tooltip"
    input-type="street-address"
    autocomplete="street-address"
    placeholder="e.g: Jarlsvej 23"
    v-model="user.adress"
  />
</xfds-validate>

// eller

<xfds-validate :modelValue="user.name" :validations="[hasContent, charactersMinLength(10)]">
  <fds-input v-model="user.name" />
</xfds-validate>
```

Som udgangspunkt vil xfds-validate selv prøve at lytte på `input|select` `blur` og begynde at validere herefter, man kan også slå dette fra `useAutoDirty=false` og selv angive `dirty`.




# 0.3.6

- Refak af tooltip
- Refak af dropdown
- Ændret installations process.

Ovenstående løser fejl med brug af rent Vite project. https://github.com/whitewillow/dkfds-vue3/issues/7

Dvs. det er nu muligt at oprette et nyt projekt:

```
npm create vue@3
```
Og gennemføre alm. installation process for DKFDS-Vue3


# 0.3.5
Extra komponenter tilføjet
- xfds-form-group

Refak Extra komponenter, gør nu brug af xfds-form-group
- xfds-form-checkbox-list
- xfds-form-dropdown
- xfds-form-input-number
- xfds-form-input
- xfds-form-radio
- xfds-form-textera

```html
 <xfds-form-group label="Bil mærke" hint="Angiv et mærke" tooltip="Hjælp i tooltip">
  <fds-input v-model="maerke" /> // hvilkårlig input
</xfds-form-group>
```


# 0.3.4
Core komponenter rettet
- fds-menu
- fds-trin - benytter nu også fds-menu

Extra komponenter tilføjet
- xfds-menu

Simplificering af brugen af menu (se eksempel project for mere):

```html
 <fds-menu>
  <fds-menu-item icon="done" id="alpha" @navigate="idClickedExample = $event">
    Alpha
  </fds-menu-item>
  <fds-menu-item id="beta" @navigate="idClickedExample = $event" active>
    Beta
  </fds-menu-item>
</fds-menu>
```

# 0.3.3
Refak - https://github.com/whitewillow/dkfds-vue3/issues/13

Core komponenter rettet
- checkbox
- dropdown
- formgroup auto id på underliggende elementer
- form label - forId påkrævet
- form input - id ikke påkrævet, genererer selv id, hvis ikke formgroup giver et
- fejlopsummering

Extra komponenter tilføjet
- xfds-checkbox
- xfds-dropdown
- xfds-faneblade

Eksempel project
- Diverse justeringer for at matche ovenstående ændringer
- Udvidet fds-formgroup beskrivelse

Kraftig simplificering af form brugen.
Eksempel:

```html
<fds-formgroup> // udstiller ID
  <fds-label> Fornavn </fds-label> // fanger udstillet og sætter selv "for" attr
  <fds-tooltip class="ml-2">
    Hjælpende <b>tekst</b>
  </fds-tooltip>
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-input v-model="txtFornavn" /> // fanger udstillet ID
  <fds-input-limit
    :modelValue="txtFornavn"
    :limit="10" />
</fds-formgroup>
```

# 0.3.1

- Refak props
- Opdateret Example projekt
- opdateret til DKFDS 8.2.0

# 0.2.3

- fds-paginering tilføjet
- Eksempelside paginering
- Opdateret Datovælger
- Opdateret Datoangivelse


# 0.2.3

- fds-paginering tilføjet
- Eksempelside paginering
- Opdateret Datovælger
- Opdateret Datoangivelse

# 0.2.2

- Knap med spinner omdøbt til xfds-button-spinner
- fds-alert luk knap fejl rettet
- fds-sprogvaelger tilføjet
- xfds-formgroup omdøbt til fds-formgroup - er et standard komponent
- Eksempelside opdateret med Form gruppe
- Eksempelside opdateret med Navigation
- Eksempelside opdateret med Radioknap
- Eksempelside opdateret med Skip link
- Eksempelside opdateret med Sprogvælger
- Eksempelside opdateret med Brødkrumme
- Eksempelside opdateret med Tooltip
- Eksempelside opdateret med ToggleSwitch
- Eksempelside opdateret med Tjekboks
- Diverse oprydning


# 0.2.0

- Brug fds-overflow-menu i primary nav (top menu)
- Demo side oprettet i github
- Datoangivelse WIP
- Datovælger WIP



# 0.1.7

- Trin indikator
- fds-ventremenu-list omdøbt til fds-ventremenu-side
- fds-funktionslink - fjernet asLink mulighed - op til bruger selv at udvide evt styling
- fds-input-limit
- fds-link WIP
- DKFDS 8.1.0 rettelser
  - fds-input-limit - Karakterbegrænsning, nyt i dkfds 8.1.0
  - Sidenavigation omdøbt til venstremenu
