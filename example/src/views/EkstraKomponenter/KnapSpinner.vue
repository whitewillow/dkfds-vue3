<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
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
      </fds-preview-item>
      <hr />
      <fds-preview-item>
        <p class="italic">
          Komponenten <code>xfds-button-spinner</code> viser en loader ved aktiv tilstand
        </p>
        <p class="italic">
          Det er muligt at inkludere et overlay <code>useoverlay</code> der forhinde tryk på andre
          elementer
        </p>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <hr class="my-6" />

    <fds-preview header="Varianter">
      <fds-preview-item>
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
      </fds-preview-item>
    </fds-preview>
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
