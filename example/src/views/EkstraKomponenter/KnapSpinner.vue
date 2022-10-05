<template>
  <section>
    <fds-component-preview header="Eksempel">
      <xfds-button-spinner
        @click="handleButtonEvent"
        icon="send"
        variant="secondary"
        spinnerText="Sender"
        :showSpinner="showSpinner"
        useoverlay
      >
        Send
      </xfds-button-spinner>

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-button-spinner</code> viser en loader ved aktiv tilstand
        </p>
        <p class="italic">
          Det er muligt at inkludere et overlay <code>useoverlay</code> der forhinde tryk på andre
          elementer
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <hr class="my-8" />

    <fds-component-preview header="Eksempel">
      <div class="row">
        <div class="col">
          <xfds-button-spinner icon="search" variant="primary" spinnerText="Søger">
            Søg
          </xfds-button-spinner>
          <xfds-button-spinner icon="search" variant="secondary" spinnerText="Søger">
            Søg
          </xfds-button-spinner>
          <xfds-button-spinner icon="search" variant="tertiary" spinnerText="Søger">
            Søg
          </xfds-button-spinner>
        </div>
      </div>

      <div class="row">
        <div class="col mt-4">
          <xfds-button-spinner
            icon="search"
            variant="primary"
            :showSpinner="true"
            spinnerText="...Søger"
          >
            Søg
          </xfds-button-spinner>
          <xfds-button-spinner
            icon="search"
            variant="secondary"
            :showSpinner="true"
            spinnerText="...Søger"
          >
            Søg
          </xfds-button-spinner>
          <xfds-button-spinner
            icon="search"
            variant="tertiary"
            :showSpinner="true"
            spinnerText="...Søger"
          >
            Søg
          </xfds-button-spinner>
        </div>
      </div>

      <template #description>
        <p class="italic">Andre ekspempler</p>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showSpinner = ref(false);

const handleButtonEvent = () => {
  showSpinner.value = true;
  setTimeout(() => {
    showSpinner.value = false;
  }, 2000);
};

const code = `
<xfds-button-spinner
  @click="handleButtonEvent"
  icon="send"
  variant="secondary"
  spinnerText="Sender"
  :showSpinner="showSpinner"
>
  Send
</xfds-button-spinner>
  `;
</script>
