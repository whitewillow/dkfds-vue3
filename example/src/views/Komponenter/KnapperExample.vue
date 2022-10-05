<template>
  <section>
    <fds-component-preview header="Eksempel">
      <p>
        <fds-button @click="klikEvent"> Gå til næste </fds-button>
      </p>

      <p><fds-button variant="secondary" @click="klikEvent"> Variant secondary </fds-button></p>

      <p>
        <fds-button :variant="FdsVariantEnum.tertiary" @click="klikEvent">
          Variant {{ FdsVariantEnum.tertiary }}
        </fds-button>
      </p>

      <template #description>
        <p class="italic">Knapper med mulighed for at angive variant</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <hr class="my-8" />

    <fds-component-preview header="Eksempel med ikon">
      <p>
        <fds-button-icon @click="klikEvent" icon="refresh" variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <p>
        <fds-button-icon @click="klikEvent" icon="coronavirus" right variant="primary">
          Genopfrisk
        </fds-button-icon>
      </p>

      <template #description>
        <p class="italic">
          Knapper med ikon - ikonet kan venstre eller højre stilles - Ved brug af <code>right</code>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsVariantEnum } from 'dkfds-vue3/src/model/fds.model';

// eslint-disable-next-line no-alert
const klikEvent = () => window.confirm('KLIK');

const code = `
<fds-button @click="klikEvent"> Gå til næste </fds-button>

<fds-button variant="secondary" @click="klikEvent"> Variant secondary </fds-button>

<fds-button :variant="FdsVariantEnum.tertiary" @click="klikEvent">
  Variant {{ FdsVariantEnum.tertiary }}
</fds-button>
`;

const code2 = `
<fds-button-icon @click="klikEvent" icon="refresh" variant="primary">
  Genopfrisk
</fds-button-icon>

<fds-button-icon @click="klikEvent" icon="coronavirus" right variant="primary">
  Genopfrisk
</fds-button-icon>
`;
</script>
