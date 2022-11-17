

# TODO:

https://github.com/whitewillow/dkfds-vue3/issues

Mangler
- FileList

TODO:
Refak xfds inputs - split val ud
overvej om magi med fejl og validering
xfds-form-xx - fjern validering
xfds-form-val-xx - har validering
repeat code xfds input filer
Fælles watcher

# 0.3.6
WIP
- Refak af tooltip
- Refak af dropdown

Et skridt mod at løse fejlen https://github.com/whitewillow/dkfds-vue3/issues/7



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
