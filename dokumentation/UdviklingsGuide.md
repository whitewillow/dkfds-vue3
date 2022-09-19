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

## Overhold aria og Tilgængelighed

se https://designsystem.dk/design/tilgaengelighed/

Dertil benyttes for så vidt muligt original HTML udstillet af eks. for de enkelte komponenter https://designsystem.dk/komponenter/

## Ind til benet

Komponent skal begrænses til minimum og evt deles fornuftigt op således slutbruger selv kan lave udvidelser/egne komponenter udfra disse.

eks:
```html
<fds-validate
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
</fds-validate>
```

Dertil er det op til brugeren PT. selv at sortere evt lister m.m.


## Form samling / Komponent gruppering

I kontekst med opdelte komponenter er der nogle der giver mening af samle som form komponenter som er en gruppering af flere elementer:


```html
<fds-form-input />
<fds-form-textarea />
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
<fds-form-input
    label="Adresse"
    hint="Angiv gyldig adresse"
    placeholder="HC Andersens blv. 12"
    v-model="txtAdresse"
    :validations="[hasContent, charactersMinLength(10)]"/>

<fds-form-input
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
- xxx


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
<fds-validate
    :modelValue="txtEfternavn"
    :validations="[hasContent, charactersMinLength(10)]"
    #default="{ isValid, errorMessage }">
    ...
</fds-validate>
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