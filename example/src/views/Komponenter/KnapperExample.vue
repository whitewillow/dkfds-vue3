<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <p>
          <fds-button @click="klikEvent"> Gå til næste </fds-button>
        </p>

        <p><fds-button variant="secondary" @click="klikEvent"> Variant secondary </fds-button></p>

        <p>
          <fds-button :variant="FdsVariantEnum.tertiary" @click="klikEvent">
            Variant {{ FdsVariantEnum.tertiary }}
          </fds-button>
        </p>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <hr class="my-6" />

    <fds-preview header="Eksempel med ikon">
      <fds-preview-item>
        <p>
          <fds-button-icon @click="klikEvent" icon="refresh" variant="primary">
            Genopfrisk
          </fds-button-icon>
        </p>

        <p>
          <fds-button-icon
            @click="klikEvent"
            icon="coronavirus"
            asRightAlignedIcon
            variant="primary"
          >
            Corona Virus
          </fds-button-icon>
        </p>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code2"></pre>
      </fds-preview-code>
    </fds-preview>
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

<fds-button-icon @click="klikEvent" icon="coronavirus" asRightAlignedIcon variant="primary">
  Corona Virus
</fds-button-icon>
`;
</script>
