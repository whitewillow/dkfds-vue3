# FAQ

## Kan jeg bruge det i produktion?
JA - Efter version 0.4.0, vil størstedelen af KERNE (og EKSTRA) komponenterne være klar og kan bruges i produktion.
Komponenterne er lavet 1 til 1 vedr. HTML og styling som DKFDS har lavet dem. Dvs. ARIA og tilgængelig er som DKFDS forskriver.
Dertil vil der også være en række EXTRA komponenter der også er klar til produktions brug.

Se https://whitewillow.github.io/dkfds-vue3-example for komponenter der kan benyttes.

Se også https://github.com/whitewillow/dkfds-vue3/blob/main/dokumentation/WIP.md

## Hvorfor Produktionklar fra v.0.4.0 og ikke v.1.0.0. ?
Fra v.0.4 er KERNE komponenter produktionsklar. Og der forventes ingen umiddelbar ændringer til deres brug.
Det er muligt at komponenter optimeres løbende - men påvirker ikke brugen af dem.

Før vi mener vi kan kalde det v.1.0 skal de resterende komponenter laves, dvs:

**Layout komponenter**
- Headers (5 headers)
- Brødkrumme
- Footers
  
Layout komponenter er rimlig statisk og derfor ligger det sidst i udviklings processen og kan pt. løses alm vis ved brug af standard html og css

**Manglende komponent**:
- Toastbesked

**Utils/Styling (TBD)**
- Hjælpe style klasser
- Alle farver får en logisk opbygget hjælpe css class til color og background
- Div. utils (FIL, Valideringe(CVR,CPR,etc.))

**EKSTRA Komponenter**
Der vil løbende komme flere EKSTRA komponentner

**Dertil** ønsker vi at det skal være nemt at starte nyt project, ud fra en vedligeholdt template, eg.:

```npm create vite@latest my-vue-app -- --template vue-ts-dkfds```

## Hvilke komponenter er produktionsklar?
Alle komponenter der fremgår af eksempel side kan bruges.
https://whitewillow.github.io/dkfds-vue3-example

Menupunktet Boblere (ikke lavet endnu) vil indeholde experimentielle komponenter - dvs disse ville kunne opleve ændringer.
