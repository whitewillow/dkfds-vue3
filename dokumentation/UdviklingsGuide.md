
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

# Udviklingsguide


Kort beskrivelse af overvejelser for udvikling af komponenter


## Komponent navngivning

Som udgangspunkt prøves at bruge navnet fra 
https://designsystem.dk/komponenter/ dvs.:

```fds-[dansk navn]```

eg:

```html
<fds-accordian />
<fds-detaljer />
<fds-funktionslink />
<fds-tjekboks /> // TODO: ? duplicate name?
```
undtagelser:
```html
<fds-input />
<fds-label />
<fds-textarea />
<fds-checkbox />
<fds-dropdown />
<xfds-radio />
```

## Ekstra funktionalitet:
Standard komponenter burde allerede være lavet, så hovedfokus vil være at udvikle ekstra funktionalitet.

Ektra komponenter navngives med `xfds`:
```html
<xfds-validate />
<xfds-progressbar />
<xfds-form-input />
```

Ekstra komponenter placeres under `src/components/extra/` og angives `src/main_plugin.ts`


## Overhold aria og Tilgængelighed

se https://designsystem.dk/design/tilgaengelighed/

Dertil benyttes for så vidt muligt original HTML udstillet af eks. for de enkelte komponenter https://designsystem.dk/komponenter/

Og hvis muligt og det giver mening, DKFDS egen javascript - dkfds-vue3 har typedefinitions for DKFDS

## Ind til benet

Komponent skal begrænses til minimum og evt deles fornuftigt op således slutbruger selv kan lave udvidelser/egne komponenter udfra disse

## Form samling / Komponent gruppering

I kontekst med opdelte komponenter er der nogle der giver mening af samle som form komponenter som er en gruppering af flere elementer:


```html
<xfds-form-input />
<xfds-form-textarea />
```

Nedestående er et eks: på kerne komponenter der er samlet til et Ekstra komponent

eks:
```html
<fds-formgroup >
    <fds-label>Efternavn</fds-label>
    <fds-tooltip class="ml-2">
        Hjælpende <b>tekst</b>
    </fds-tooltip>
    <fds-fejlmeddelelse />
    <fds-hint>Indtast efternavn</fds-hint>
    <fds-input v-model="txtEfternavn"/>
</fds-formgroup>
```

Er det samme som

```html
<xfds-form-input
    label="Efternavn"
    hint="Indtast efternavn"
    tooltip="Input tooltip"
    v-model="txtEfternavn"/>
```


# Lister
Hvis du benytter lister, så vær opmærksom på at det er op til brugeren PT. selv at sortere evt lister m.m.

# Nye interfaces/modeller
TODO


# Ingen ekstra npm moduler

Undgå at introducere nye moduler. Brug hvad DKFDS allerede har. Eller lav egen script.

Dertil ingen vue-router - det er op til brugeren at selv håndtere dette.

Dog kan man lave tips til evt brug.



## Props

Det er altid et dilemma med `props` navne. Men vær konsistent og vær ens på tværs af løsningen.

Prøv at skue til hvordan HTML attributter er navngivet - kort og præcis.


## Mere på vej

Denne guide er stadig under udvikling. - Men lav et Pull Request og vi kigger på det.