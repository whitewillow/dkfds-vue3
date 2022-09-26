<template>
  <section>
    <p>
      <fds-button @click="klikEvent"> Gå til næste </fds-button>
    </p>

    <p><fds-button variant="secondary" @click="klikEvent"> Variant secondary </fds-button></p>

    <p>
      <fds-button :variant="FdsVariantEnum.tertiary" @click="klikEvent">
        Variant {{ FdsVariantEnum.tertiary }}
      </fds-button>
    </p>

    <p>
      <fds-button-spinner @click="klikEvent" icon="search" variant="secondary" spinnerText="Søger">
        Søg
      </fds-button-spinner>
      <fds-button-spinner
        icon="search"
        variant="secondary"
        :showSpinner="true"
        spinnerText="...Søger"
      >
        Søg
      </fds-button-spinner>
      <fds-button-spinner
        icon="search"
        variant="primary"
        :showSpinner="true"
        spinnerText="...Søger"
      >
        Søg
      </fds-button-spinner>
    </p>

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

    <h3>Skal de med?</h3>

    <p>
      <fds-button :variant="FdsVariantEnum.error" @click="klikEvent">
        Variant {{ FdsVariantEnum.error }}
      </fds-button>
    </p>

    <p>
      <fds-button :variant="FdsVariantEnum.info" @click="klikEvent">
        Variant {{ FdsVariantEnum.info }}
      </fds-button>
    </p>

    <p>
      <fds-button :variant="FdsVariantEnum.success" @click="klikEvent">
        Variant {{ FdsVariantEnum.success }}
      </fds-button>
    </p>

    <p>
      <fds-button :variant="FdsVariantEnum.warning" @click="klikEvent">
        Variant {{ FdsVariantEnum.warning }}
      </fds-button>
    </p>
  </section>
</template>

<script setup lang="ts">
import { FdsVariantEnum } from 'dkfds-vue3/src/model/fds.model';

// eslint-disable-next-line no-alert
const klikEvent = () => window.confirm('KLIK');
</script>
