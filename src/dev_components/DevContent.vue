<template>
  <div class="home">
    <fds-toast-container />
    <div class="container pb-6">
      <h1>Home</h1>
      <div>
        <h2>Eksempel på advanceret brug</h2>
        <xfds-formgroup #default="{ formid }">
          <fds-label :id="formid">
            Fornavn
          </fds-label>
          <fds-tooltip
            class="ml-2"
            text="Hjælpende <b>tekst</b>" />
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-input
            v-model="txtFornavn"
            :id="formid"></fds-input>
        </xfds-formgroup>

        <xfds-validate
          :modelValue="txtEfternavn"
          :validations="[hasContent, charactersMinLength(10)]"
          #default="{ isValid, errorMessage }">
          <xfds-formgroup
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
              :id="formid"></fds-input>
          </xfds-formgroup>
        </xfds-validate>

        <xfds-validate
          :modelValue="noBeloeb"
          :validations="[numberMax(500)]"
          #default="{ isValid, errorMessage }">
          <xfds-formgroup
            :is-valid="isValid"
            #default="{ formid }">
            <fds-label :id="formid">
              Beløb i kr.
            </fds-label>
            <fds-fejlmeddelelse v-if="!isValid">
              {{ errorMessage }}
            </fds-fejlmeddelelse>
            <fds-hint>Indtast efternavn</fds-hint>
            <fds-input-number
              v-model="noBeloeb"
              suffix="kr."
              :id="formid"></fds-input-number>
          </xfds-formgroup>
        </xfds-validate>
      </div>

      <hr class="my-6" />

      <div>
        <h2>Eksempel på Form komponent (simpel brug)</h2>

        <xfds-form-input
          label="Adresse"
          hint="Angiv gyldig adresse"
          tooltip="Input tooltip"
          v-model="txtAdresse"
          :validations="[hasContent, charactersMinLength(10)]"/>

        <xfds-form-input-number
          label="Antal kasser"
          v-model="kasser"
          prefix="stk" />

        <xfds-form-input-number
          label="Antal kasser"
          v-model="kasser"
          suffix="stk"
          :validations="[numberMin(2)]"/>

        <xfds-form-input
          label="Mobil nr."
          :modelValue="txtMobil"
          disabled />

        <xfds-form-input
          label="Mobil nr."
          v-model="txtMobil"
          input-type="tel"
          autocomplete="tel" />

        <xfds-form-textarea
          label="Tekst område"
          v-model="txtBeskrivelse"
          :validations="[hasContent, charactersMinLength(10)]"/>

        <xfds-form-checkbox-list
          label="Checkbox form"
          :validations="[arrayHasItems]"
          v-model="checkboxListForm"/>

        <xfds-form-dropdown
          label="Dropdown form"
          :validations="[hasContent]"
          :options="dropdownOptions"
          v-model="dropdownValForm">
        </xfds-form-dropdown>

        <xfds-form-radio
          label="Radio form"
          :validations="[hasContent]"
          :options="radioOptions"
          v-model="radioValForm">
        </xfds-form-radio>

        <fds-pre :json="{ radioValForm }" />

        <fds-pre :json="{ dropdownValForm }" />

        <hr />

        <h2>Tekstfelt med knap</h2>

        <xfds-formgroup #default="{ formid }">
          <fds-input
            v-model="txtSearch"
            placeholder="Søg efter..."
            :id="formid">
            <template #button>
              <button class="button button-search">
                <svg
                  class="icon-svg m-0"
                  aria-hidden="true">
                  <use xlink:href="#search"></use></svg><span class="sr-only">
                  Søg
                </span>
              </button>
            </template>
          </fds-input>
        </xfds-formgroup>

        <xfds-formgroup #default="{ formid }">
          <fds-input
            v-model="txtSearch"
            placeholder="Søg efter..."
            :id="formid">
            <template #button>
              <button class="button button-search">
                Søg
              </button>
            </template>
          </fds-input>
        </xfds-formgroup>

        <hr />

        <h2>Valg</h2>

        <xfds-formgroup
          label="Vælg en checkbox"
          #default="{ formid }">
          <fds-checkbox-list
            v-model="checkboxList"
            :id="formid">
            <template v-slot:[`melon`]>
              <p>Det er muligt at benytte radio til mere indhold</p>
            </template>
          </fds-checkbox-list>
        </xfds-formgroup>

        <fds-pre :json="checkboxList" />

        <xfds-formgroup label="Single Checkbox">
          <fds-checkbox
            v-model="twoChecked"
            class="mt-2">
            Andet valg
          </fds-checkbox>
          <fds-checkbox
            v-model="twoChecked"
            small>
            Andet valg - small
          </fds-checkbox>
        </xfds-formgroup>

        <xfds-formgroup>
          <fds-label>Vælg radio</fds-label>

          <fds-radio
            :list="radioOptions"
            v-model="radioVal">
            <template #hint>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </template>
            <template v-slot:[`melon`]>
              <p>Det er muligt at benytte radio til mere indhold</p>
            </template>
          </fds-radio>
        </xfds-formgroup>

        <fds-pre :json="{ radioVal }" />

        <xfds-formgroup>
          <fds-label>Vælg radio toggle</fds-label>

          <fds-radio-toggle v-model="toggleRadio">
            <template #hint>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </template>
            <template v-slot:[`true`]>
              <p>Det er muligt at benytte radio til mere indhold</p>
            </template>
          </fds-radio-toggle>
        </xfds-formgroup>
        <fds-pre :json="{ toggleRadio }" />

        <xfds-formgroup>
          <fds-dropdown
            :options="dropdownOptions"
            v-model="dropdownVal" />
        </xfds-formgroup>
        <fds-pre :json="{ dropdownVal }" />

        <fds-toggle-switch v-model="toggleswitch" />
        <fds-pre :json="{ toggleswitch }" />
      </div>

      <hr class="my-6" />

      <p>{{ txtFornavn }}</p>
      <p>{{ txtEfternavn }}</p>
      <p>{{ txtAdresse }}</p>
      <p>{{ txtMobil }}</p>
      <p>{{ txtBeskrivelse }}</p>
      <p>{{ oneChecked }}</p>
      <p>{{ twoChecked }}</p>
      <p>{{ radioVal }}</p>
      <p>{{ dropdownVal }}</p>

      <hr />

      <h2>Accordions</h2>

      <fds-accordion-group #default="{ groupcollapse }">
        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med hint"
          hint="Hint for header">
          <p>
            {{ groupcollapse }}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>
        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med hint"
          hint="Hint for header">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med Success"
          variant="success"
          variant-text="Success">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med advarsel"
          variant="warning"
          variant-text="Advarsel">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :collapsed="groupcollapse"
          header="Accordion header med Fejl"
          variant-text="Fejl"
          variant="error">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>
      </fds-accordion-group>

      <h3>Single Accordions</h3>

      <fds-accordion>
        <template #header>
          <h4 class="">
            Accordion med custom header
          </h4>
        </template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <fds-accordion
        header="Accordion normal header"
        hint="Et hint">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <hr />

      <h2>Component preview</h2>

      <fds-component-preview header="Eksempel">
        <xfds-validate
          :modelValue="txtEfternavn"
          :validations="[hasContent, charactersMinLength(10)]"
          #default="{ isValid, errorMessage }">
          <xfds-formgroup
            :is-valid="isValid"
            #default="{ formid }">
            <fds-label :id="formid">
              Efternavn
            </fds-label>
            <fds-tooltip
              class="ml-2"
              text="Hjælpende <b>tekst</b>" />
            <fds-hint>Indtast efternavn</fds-hint>
            <fds-fejlmeddelelse v-if="!isValid">
              {{ errorMessage }}
            </fds-fejlmeddelelse>

            <fds-input
              v-model="txtEfternavn"
              :id="formid"></fds-input>
          </xfds-formgroup>
        </xfds-validate>
        <template #description>
          <p class="italic">
            Dette eksempel viser hvordan man kan sammenkæde enkeltstående komponenter til en samlet
            "komponent" der validere input for et tekstfelt.
          </p>
          <p class="italic">
            Alle komponenter kan bruges enkeltstående - dvs du kunne eksempelvis udbytte
            <code>xfds-validate</code> til egen komponent
          </p>
          <p class="italic">
            Følgende komponenter er i brug:
          </p>
          <ul>
            <li><code>xfds-validate</code></li>
            <li><code>xfds-formgroup</code></li>
            <li><code>fds-label</code></li>
            <li><code>fds-fejlmeddelelse</code></li>
            <li><code>fds-hint</code></li>
            <li><code>fds-input</code></li>
            <li><code>fds-tooltip</code></li>
          </ul>
        </template>
        <template #code>
          <pre v-text="codeExample" />
        </template>
      </fds-component-preview>

      <hr />
      <h2>Filer</h2>

      <fds-file-upload @upload="fileInput = $event"></fds-file-upload>
      <fds-pre
        header="Upload event JSON"
        :json="fileInput" />

      <label class="form-label">
        Vedhæftet filer
      </label>

      <fds-file-list
        :list="filListe"
        @download="filToDownload = $event"
        @delete="filToDelete = $event">
      </fds-file-list>

      <p>Eller med embedded header</p>

      <fds-file-list
        :list="filListe"
        @download="filToDownload = $event"
        @delete="filToDelete = $event">
        <label class="form-label">
          Vedhæftet filer
        </label>
      </fds-file-list>

      <fds-pre
        header="Download JSON"
        :json="filToDownload" />
      <fds-pre
        header="Delete JSON"
        :json="filToDelete" />

      <hr />
      <h3>Typography</h3>
      <p>
        <fds-badge class="mr-4">
          Normal
        </fds-badge>
        <fds-badge class="badge-small">
          small
        </fds-badge>
      </p>
      <p>
        <fds-badge
          class="mr-4"
          variant="success">
          success
        </fds-badge>
        <fds-badge
          class="mx-4"
          variant="info">
          success
        </fds-badge>
        <fds-badge
          class="mx-4"
          variant="warning">
          warning
        </fds-badge>
        <fds-badge
          class="mx-4"
          variant="error">
          error
        </fds-badge>
      </p>

      <hr />
      <h2>Links</h2>

      <p>
        <fds-funktionslink
          title="Klik for event"
          @click="klikEvent">
          Funktionslink
        </fds-funktionslink>
      </p>
      <div>
        <fds-funktionslink
          @click="klikEvent"
          icon="contact-support"
          title="Klik for at gå til om os">
          Funktionslink med ikon - Om os
        </fds-funktionslink>
      </div>

      <hr />
      <h2>Detaljer</h2>
      <fds-detaljer header="Mine detaljer">
        <p>
          Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero. Integer euismod augue
          leo.
        </p>
        <p>
          Morbi faucibus nunc tortor, condimentum vulputate urna sollicitudin non. Nam commodo nulla
          metus. Phasellus varius eu dolor nec ultricies. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris ac leo finibus, blandit velit nec, consequat est. Nulla facilisi.
        </p>
      </fds-detaljer>

      <hr />
      <h2>Trinindikator</h2>

      <p>Afventer</p>
      <fds-trinindikator></fds-trinindikator>
      <hr />

      <h2>Tilbage link</h2>
      <fds-tilbage-link @click="klikEvent" />
      <br />
      <fds-tilbage-link @click="klikEvent">
        Egen tekst
      </fds-tilbage-link>

      <hr />
      <h3>Spinner</h3>

      <div class="row">
        <div class="col">
          <fds-spinner></fds-spinner>
        </div>
      </div>

      <h4>Eller med tekst</h4>
      <div class="col">
        <fds-spinner>Arbejder</fds-spinner>
      </div>
      <div class="col">
        <p class="form-label d-flex justify-content-start">
          <span>Super</span>
          <fds-spinner class="spinner spinner-small d-inline-flex ml-4"></fds-spinner>
        </p>
      </div>

      <hr />
      <h3>Ikoner</h3>

      <i class="icon icon-coronavirus"></i>

      <i class="icon icon-alert-outline"></i>

      <hr />

      <h2>Side tabs</h2>

      <h3>Manuel sidenavigation</h3>
      <div class="row">
        <div class="col-4">
          <fds-sidenavigation
            v-model="manuelSideNavList"
            @navigate="manuelSideNavKey = $event" />
        </div>
        <div class="col">
          <fds-pre :json="{ currentKey: manuelSideNavKey }" />
          <fds-pre :json="manuelSideNavList" />
        </div>
      </div>

      <hr class="my-6" />
      <h3>Sidenavigation automatiseret</h3>
      <fds-sidenavigation-list
        v-model="sideTabs"
        showIndex>
        <template
          v-slot:[tab.key]
          v-for="tab of sideTabs"
          :key="tab.key">
          <h2>{{ tab.title }}</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
      </fds-sidenavigation-list>

      <hr class="my-6" />

      <h3
        id="cheeseapple"
        name="cheeseapple">
        Sidenavigation automatiseret
      </h3>
      <fds-sidenavigation-list v-model="sideTabs">
        <template v-slot:[`suppe`]>
          <h2>Suppe</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
        <template v-slot:[`dessert`]>
          <h2>Dessert</h2>
          <p>
            Autogeneret faner ud fra liste, hvor man kan lave tilhørende template refereret med
            "key"

            <fds-pre>
              {{`${`<template v-slot:[\`dessert\`]> Mit Indhold </template>
              `}`}}
            </fds-pre>
          </p>
        </template>
        <template v-slot:[`kod`]>
          <h2>Kød</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
        <template v-slot:[`fisk`]>
          <h2>Fisk</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
      </fds-sidenavigation-list>
      <hr class="my-6" />

      <h2>Faneblade</h2>

      <h3>Faneblade - Manuel</h3>
      <fds-faneblade>
        <fds-faneblad-item
          header="Fane 1"
          :active="true"
          @click="fanebladManueltId = $event"
          id="1">
          <h2>Fane 1</h2>
          <p>Manuel styret faneblade</p>
        </fds-faneblad-item>

        <fds-faneblad-item
          header="Fane 2"
          @click="fanebladManueltId = $event"
          id="2">
          <h2>Fane 1</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </fds-faneblad-item>
      </fds-faneblade>

      <fds-pre :json="{ fanebladManueltId }" />

      <hr class="my-6" />
      <h3>Faneblade - automatiseret</h3>

      <fds-faneblade-list :list="faneBlade">
        <template v-slot:[`suppe`]>
          <h2>Suppe</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
        <template v-slot:[`dessert`]>
          <h2>Dessert</h2>
          <p>
            Autogeneret faner ud fra liste, hvor man kan lave tilhørende template refereret med
            "key"

            <fds-pre>
              {{`${`<template v-slot:[\`dessert\`]> Mit Indhold </template>
              `}`}}
            </fds-pre>
          </p>
        </template>
        <template v-slot:[`kod`]>
          <h2>Kød</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
        <template v-slot:[`fisk`]>
          <h2>Fisk</h2>
          <p>
            Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
            dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
            pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
            semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
            velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
          </p>
        </template>
      </fds-faneblade-list>
      <hr class="my-6" />

      <h2>Cards</h2>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card
            overskrift="Overskrift"
            subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">
                Sekundærknap
              </button>
            </template>
          </fds-card>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card
            overskrift="Overskrift"
            class="card-align-height">
            <template #content>
              <div class="align-text-center bg-info-light p-6">
                <h2 class="h5 mb-5">
                  Lorem ipsum fordeling
                </h2>
                <div class="mt-3 row">
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="80%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100">
                      <rect
                        width="50"
                        height="100"
                        fill="#eefafa" />
                      <rect
                        y="20"
                        width="50"
                        height="80"
                        fill="#0868AC" /></svg><span class="small-text mt-2 bold d-block">
                      København
                    </span>
                  </div>
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="36%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100">
                      <rect
                        width="50"
                        height="100"
                        fill="#eefafa" />
                      <rect
                        y="64"
                        width="50"
                        height="36"
                        fill="#0868AC" /></svg><span class="small-text mt-2 bold d-block">
                      Hele landet
                    </span>
                  </div>
                </div>
              </div>
            </template>
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
          </fds-card>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card class="card-align-height">
            <template #custom>
              <div class="card-content">
                <!-- Alt i denne div er blot et eksempel. Visse klasser er ikke en del af FDS. -->
                <div class="row bg-success-light p-6">
                  <div class="col-12 align-text-left">
                    <h2 class="h3 mb-0">
                      3 ofte stillede spørgsmål
                    </h2>
                    <ul class="mt-0 noindent-list">
                      <li>In viverra faucibus lorem?</li>
                      <li>Phasellus posuere neque?</li>
                      <li>Nullam quis nunc dui?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-header">
                <h2 class="header-title">
                  Header
                </h2>
                <p class="sub-header">
                  Understøttende tekst
                </p>
              </div>

              <div class="card-footer card-action">
                <div class="action-buttons">
                  <button class="button button-secondary">
                    Sekundærknap
                  </button><button class="button button-tertiary">
                    Tertiærknap
                  </button>
                </div>
                <div class="action-links">
                  <ul class="nobullet-list">
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="default link state">Et link til et sted i løsningen</a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="icon-link">Et link til et sted uden for løsningen<svg
                        class="icon-svg"
                        aria-hidden="true"
                        focusable="false"
                        tabindex="-1">
                        <use xlink:href="#open-in-new"></use></svg></a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </fds-card>
        </div>
      </div>
      <hr class="my-8" />

      <h2>Toast</h2>

      <fds-toast />

      <hr class="my-8" />

      <h2>Modal</h2>

      <fds-modal
        :show="showModal"
        header="Min Modal"
        focusId="modalButton"
        @close="showModal = false">
        <p>Eksempel på et modal vindue</p>
        <p>
          Det er muligt at skifte tekster på nedestående knapper <code>okTekst, annullerTekst</code>
        </p>
        <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>
      </fds-modal>
      <fds-pre :json="{ showModal }" />

      <fds-button
        @click="showModal = !showModal"
        id="modalButton">
        Vis Modal
      </fds-button>

      <h3>Custom footer</h3>
      <fds-modal
        :show="showModalCustomFooter"
        header="Egen footer modal"
        focusId="showModalCustomFooter"
        @close="showModalCustomFooter = false">
        <p>Eksempel på et modal vindue</p>
        <p>
          Det er muligt at skifte tekster på nedestående knapper <code>okTekst, annullerTekst</code>
        </p>
        <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>
        <template #footer>
          <fds-button
            id="showModalCustomFooter"
            variant="error">
            Godkend
          </fds-button>
          <fds-button
            variant="secondary"
            @click="showModalCustomFooter = !showModalCustomFooter"
            id="showModalCustomFooter">
            Nej takker
          </fds-button>
        </template>
      </fds-modal>
      <fds-pre :json="{ showModalCustomFooter }" />
      <fds-button
        @click="showModalCustomFooter = !showModalCustomFooter"
        id="showModalCustomFooter">
        Vis Footer Modal
      </fds-button>

      <hr class="my-8" />

      <h2>Strukturerede lister</h2>

      <div class="w-percent-60">
        <fds-strukturerede-liste header="Navn">
          Kirsten Mønster Jensen
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="E-mail">
          kirstenjensen@eksempel.dk
        </fds-strukturerede-liste>
      </div>

      <h4>med rediger</h4>

      <div class="w-percent-60">
        <fds-strukturerede-liste header="Navn">
          Kirsten Mønster Jensen
          <template #button>
            <a href="#">
              Redigér<span class="sr-only">
                Kirsten Mønster Jensen
              </span>
            </a>
          </template>
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="E-mail">
          kirstenjensen@eksempel.dk
          <template #button>
            <a href="#">
              Redigér<span class="sr-only">
                Kirsten Mønster Jensen
              </span>
            </a>
          </template>
        </fds-strukturerede-liste>
      </div>
      <hr class="my-8" />

      <h2>Overflow menu</h2>
      <div class="row">
        <div class="col">
          <fds-overflow-menu header="Overflow menu eks">
            <ul class="overflow-list">
              <li><button>Option 1</button></li>
              <li><button>Option 2</button></li>
              <li><a href="#">
                Option 3 as link
              </a></li>
              <li><button>Option 4 is longer text</button></li>
            </ul>
          </fds-overflow-menu>
        </div>
      </div>
      <div class="row">
        <div class="col mt-8">
          <fds-overflow-menu
            header="Overflow menu eks"
            class="overflow-menu--open-left"
            icon="arrow-drop-down">
            <ul class="overflow-list">
              <li><button>Option 1</button></li>
              <li><button>Option 2</button></li>
              <li><a href="#">
                Option 3 as link
              </a></li>
              <li><button>Option 4 is longer text</button></li>
            </ul>
          </fds-overflow-menu>
        </div>
      </div>

      <hr class="my-8" />

      <h2>Datoer</h2>

      <fds-dato-angivelse />
      <p class="form-hint">
        Kun MOCK - ikke lavet endnu
      </p>

      <hr class="my-8" />

      <h2>Progress</h2>

      <xfds-form-input-number
        label="Angiv progress"
        v-model="progress"
        suffix="%" />

      <xfds-progressbar
        :procent="progress"
        :showProgress="false"
        style="height: 2px"
        variant="primary">
      </xfds-progressbar>

      <xfds-progressbar
        :procent="progress"
        variant="primary">
      </xfds-progressbar>

      <xfds-progressbar
        :procent="progress"
        style="height: 50px"
        variant="primary">
      </xfds-progressbar>

      <xfds-progressbar
        :procent="progress"
        variant="info">
      </xfds-progressbar>

      <xfds-progressbar
        :procent="progress"
        variant="success">
        På vej mod success - {{ progress }}%
      </xfds-progressbar>

      <xfds-progressbar
        :procent="progress"
        variant="warning">
      </xfds-progressbar>

      <xfds-progressbar
        :procent="progress"
        variant="error">
      </xfds-progressbar>

      <hr class="my-8" />

      <fds-alert
        level="warning"
        header="Overskrift"
        class="w-percent-lg-80"
        closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
      </fds-alert>

      <fds-fejlopsummering
        class="w-percent-lg-80"
        :list="fejlOpsummering"></fds-fejlopsummering>

      <p>
        <fds-button @click="klikEvent">
          Gå til næste
        </fds-button>
      </p>

      <p><fds-button
        variant="secondary"
        @click="klikEvent">
        Variant secondary
      </fds-button></p>

      <p>
        <fds-button
          :variant="FdsVariantEnum.tertiary"
          @click="klikEvent">
          Variant {{ FdsVariantEnum.tertiary }}
        </fds-button>
      </p>

      <p>
        <fds-button-spinner
          @click="klikEvent"
          icon="search"
          variant="secondary"
          spinnerText="Søger">
          Søg
        </fds-button-spinner>
        <fds-button-spinner
          icon="search"
          variant="secondary"
          :showSpinner="true"
          spinnerText="...Søger">
          Søg
        </fds-button-spinner>
        <fds-button-spinner
          icon="search"
          variant="primary"
          :showSpinner="true"
          spinnerText="...Søger">
          Søg
        </fds-button-spinner>
      </p>

      <p>
        <fds-button-icon
          @click="klikEvent"
          icon="refresh"
          variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <p>
        <fds-button-icon
          @click="klikEvent"
          icon="coronavirus"
          right
          variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <h3>Skal de med?</h3>

      <p>
        <fds-button
          :variant="FdsVariantEnum.error"
          @click="klikEvent">
          Variant {{ FdsVariantEnum.error }}
        </fds-button>
      </p>

      <p>
        <fds-button
          :variant="FdsVariantEnum.info"
          @click="klikEvent">
          Variant {{ FdsVariantEnum.info }}
        </fds-button>
      </p>

      <p>
        <fds-button
          :variant="FdsVariantEnum.success"
          @click="klikEvent">
          Variant {{ FdsVariantEnum.success }}
        </fds-button>
      </p>

      <p id="bottom">
        <fds-button
          :variant="FdsVariantEnum.warning"
          @click="klikEvent">
          Variant {{ FdsVariantEnum.warning }}
        </fds-button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import {
  FdsErrorListItem,
  FdsOptionItem,
  FdsVariantEnum,
  FdsCheckboxItem,
  FdsFileInputModel,
  FdsFileModel,
  FdsNavigationItem,
  FdsTabItem,
} from '@/model/fds.model';
import {
  arrayHasItems,
  charactersMinLength,
  hasContent,
  numberMax,
  numberMin,
} from '@/utils/validate-utils';

const showToast = ref(false);
const showModal = ref(false);
const showModalCustomFooter = ref(false);
const progress = ref(46);
const fileInput = ref<FdsFileInputModel | null>(null);
const txtFornavn = ref('');
const txtSearch = ref('');
const txtEfternavn = ref('');
const noBeloeb = ref(0);
const txtAdresse = ref('');
const kasser = ref(0);
const txtMobil = ref('23232323');
const txtBeskrivelse = ref('');
const oneChecked = ref(false);
const twoChecked = ref(false);
const radioVal = ref('');
const radioValForm = ref('');
const toggleswitch = ref(false);
const toggleRadio = ref(null);
const radioOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);
const checkboxList = ref<FdsCheckboxItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);
const checkboxListForm = ref<FdsCheckboxItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);
const dropdownValForm = ref('');
const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);

const fejlOpsummering = ref<FdsErrorListItem[]>([
  {
    anchor: 'anchor',
    text: 'Datoen for udløbsdato på dit pas bør inkludere årstal',
  },
  {
    anchor: 'anchor',
    text: 'Indtast postnummer - fx 4000',
  },
]);

const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filnavn: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filnavn: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filnavn: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filnavn: 'KodeFil.json',
    type: 'json',
  },
]);
const filToDownload = ref<FdsFileModel | null>(null);
const filToDelete = ref<FdsFileModel | null>(null);
const klikEvent = () => window.confirm('KLIK');

const manuelSideNavKey = '';
const manuelSideNavList = ref<Array<FdsNavigationItem>>([
  {
    key: 'suppe',
    title: 'Supper',
    hint: '',
    icon: 'done',
  },
  {
    key: 'dessert',
    title: 'Dessert',
    hint: 'Hjælpetekst',
    children: [
      {
        key: 'bananasplit',
        title: 'Bananasplit',
        hint: '',
      },
      {
        key: 'cheesecake',
        title: 'Cheesecake',
        hint: '',
        children: [
          {
            key: 'cheesechili',
            title: 'Cheese Chili',
            hint: '',
          },
          {
            key: 'cheeseapple',
            title: 'Cheese Apple',
            href: '#cheeseapple',
            hint: '',
          },
        ],
      },
    ],
  },
  {
    key: 'kod',
    title: 'Kød',
    hint: '',
    children: [
      {
        key: 'chicken',
        title: 'Chicken',
        hint: '',
      },
      {
        key: 'beef',
        title: 'Beef',
        hint: '',
      },
    ],
  },
  {
    key: 'fisk',
    title: 'Fisk',
    hint: '',
    disabled: true,
  },
] as unknown as FdsNavigationItem[]);

const sideTabs = ref<FdsNavigationItem[]>([
  {
    key: 'suppe',
    title: 'Supper',
    hint: '',
    icon: 'done',
  },
  {
    key: 'dessert',
    title: 'Dessert',
    hint: 'Hjælpetekst',
    icon: 'home',

    active: true,
  },
  {
    key: 'kod',
    title: 'Kød',
    hint: '',
  },
  {
    key: 'fisk',
    title: 'Fisk',
    hint: '',
    disabled: true,
  },
] as unknown as FdsNavigationItem[]);

const fanebladManueltId = ref('');
const faneBlade: FdsTabItem[] = [
  {
    key: 'suppe',
    title: 'Supper',
  },
  {
    key: 'dessert',
    title: 'Dessert',
    active: true,
  },
  {
    key: 'kod',
    title: 'Kød',
  },
  {
    key: 'fisk',
    title: 'Fisk',
    disabled: true,
  },
] as unknown as FdsTabItem[];

const codeExample = `
<xfds-validate
  :modelValue="txtEfternavn"
  :validations="[hasContent, charactersMinLength(10)]"
  #default="{ isValid, errorMessage }">
  <xfds-formgroup
    :is-valid="isValid"
    #default="{ formid }">
    <fds-label :id="formid">
      Efternavn
    </fds-label>
    <fds-tooltip
      class="ml-2"
      text="Hjælpende <b>tekst</b>" />
    <fds-hint>Indtast efternavn</fds-hint>
    <fds-fejlmeddelelse v-if="!isValid">
      {{ errorMessage }}
    </fds-fejlmeddelelse>
    <fds-input
      v-model="txtEfternavn"
      :id="formid"></fds-input>
  </xfds-formgroup>
</xfds-validate>`;
</script>
<style lang="scss" scoped></style>