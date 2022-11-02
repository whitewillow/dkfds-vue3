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
<fds-radio />
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

Komponent skal begrænses til minimum og evt deles fornuftigt op således slutbruger selv kan lave udvidelser/egne komponenter udfra disse.

eks:
```html
<xfds-validate
    :modelValue="txtEfternavn"
    :validations="[hasContent, charactersMinLength(10)]"
    #default="{ isValid, errorMessage }">
    <fds-formgroup
    :is-valid="isValid"
    #default="{ formid }">
        <fds-label :id="formid">
            Efternavn
        </fds-label>
        <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
        </fds-fejlmeddelelse>
        <fds-hint>Indtast efternavn</fds-hint>
        <fds-input
            v-model="txtEfternavn"
            :id="formid" />
    </fds-formgroup>
</xfds-validate>
```

Dertil er det op til brugeren PT. selv at sortere evt lister m.m.

# Ingen ekstra npm moduler

Undgå at introducere nye moduler. Brug hvad DKFDS allerede har.

Dertil ingen vue-router - det er op til brugeren at selv håndtere dette.

Dog kan man lave tips til evt brug.

## Form samling / Komponent gruppering

I kontekst med opdelte komponenter er der nogle der giver mening af samle som form komponenter som er en gruppering af flere elementer:


```html
<xfds-form-input />
<xfds-form-textarea />
```

Dog er disse kun hjælpe komponenter der er "nice 2 have" og der fokuseret på enkeltstående komponenter først


## Props

Det er altid et dilemma med `props` navne. Men vær konsistent og vær ens på tværs af løsningen.

Hold til engelske termer - medmindre "forretningslogik" kommer i spil, benyt da danske termer (`list: Array<fejlsummering>`).

Hold dem korte og præcise.
Hvis komponenten hedder noget med `<fds-fejlsummering>` og skal bruge en liste af fejlsummeringer, bruges det genbrugelige term:

```javascript
list: Array<fejlsummering>
```

Selvfølgelig er der undtagelser, der giver en bedre kontekst med fornuftig navngivning eg `validations`:

```html
<xfds-form-input
    label="Adresse"
    hint="Angiv gyldig adresse"
    placeholder="HC Andersens blv. 12"
    v-model="txtAdresse"
    :validations="[hasContent, charactersMinLength(10)]"/>

<xfds-form-input
    label="Antal kasser"
    v-model="kasser"
    suffix="stk" />
```

**Generiske termer**

- list
- label
- hint
- placeholder
- item
- itemList

Booleans:
- isDisabled
- isReadonly
- showX, isX, hasX, canX, asX


**Undgå props** - hvis en allerede eksisterende dkfds css klasse kan løse det 

GOOD

```html
<fds-cards class="card-align-height">
```

BAD

```html
<fds-cards alignHeight>
```



## Validering

Biblioteket kommer med minimum validering.

```html
<xfds-validate
    :modelValue="txtEfternavn"
    :validations="[hasContent, charactersMinLength(10)]"
    #default="{ isValid, errorMessage }">
    ...
</xfds-validate>
```

Hvor validerings metode er `(x: string) => string | null` hvor `null` er VALID og `string` er fejlbeskeden.
Dvs ovenstående eks på metode er

```javascript
export function hasContent (x: string): string | null {
    return x !== null && x.replace(/\s+/g, '').length > 0 ? null : 'Feltet må ikke være tomt.';
}

export function charactersMinLength (length: number): (args: string) => string | null {
  return (x: string) => (x.length >= length ? null : `Feltet må ikke være kortere end ${length} tegn.`);
}
```
