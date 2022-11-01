<template>
  <section>
    <fds-component-preview header="Accordion gruppe">
      <fds-accordion-group #default="{ groupActive }">
        <fds-accordion-item
          :isActive="groupActive"
          header="Accordion header med hint"
          hint="Hint for header"
        >
          <p>
            {{ groupActive }}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>
        <fds-accordion-item
          :isActive="groupActive"
          header="Accordion header med hint"
          hint="Hint for header"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :isActive="groupActive"
          header="Accordion header med Success"
          variant="success"
          variant-text="Success"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :isActive="groupActive"
          header="Accordion header med advarsel"
          variant="warning"
          variant-text="Advarsel"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>

        <fds-accordion-item
          :isActive="groupActive"
          header="Accordion header med Fejl"
          variant-text="Fejl"
          variant="error"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion-item>
      </fds-accordion-group>

      <template #description>
        <p class="italic">Gruppering af Accordion, samt håndtering af varianter</p>
      </template>
      <template #code>
        <pre v-text="accGroupCode"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Single Accordions">
      <fds-accordion>
        <template #header>
          <h4 class="">Accordion med custom header</h4>
        </template>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>

      <fds-accordion header="Accordion normal header" hint="Et hint">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion>
      <template #description>
        <p class="italic">Dette eksempel viser hvordan man bruger enkeltstående accordions</p>
      </template>
      <template #code>
        <pre v-text="accSingleCode"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const accSingleCode = `
<fds-accordion>
  <template #header>
    <h4 class="">Accordion med custom header</h4>
  </template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>

<fds-accordion header="Accordion normal header" hint="Et hint">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>`;
const accGroupCode = `
<fds-component-preview header="Accordion gruppe">
<fds-accordion-group #default="{ groupActive }">
  <fds-accordion-item
    :isActive="groupActive"
    header="Accordion header med hint"
    hint="Hint for header"
  >
    <p>
      {{ groupActive }}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion-item>
  <fds-accordion-item
    :isActive="groupActive"
    header="Accordion header med hint"
    hint="Hint for header"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion-item>

  <fds-accordion-item
    :isActive="groupActive"
    header="Accordion header med Success"
    variant="success"
    variant-text="Success"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion-item>

  <fds-accordion-item
    :isActive="groupActive"
    header="Accordion header med advarsel"
    variant="warning"
    variant-text="Advarsel"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion-item>

  <fds-accordion-item
    :isActive="groupActive"
    header="Accordion header med Fejl"
    variant-text="Fejl"
    variant="error"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion-item>
</fds-accordion-group>
`;
</script>
