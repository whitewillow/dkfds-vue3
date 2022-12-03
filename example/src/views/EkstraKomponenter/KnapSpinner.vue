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
      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>variant</code></td>
              <td><code>'primary' | 'secondary' | 'tertiary' | 'quaternary'</code></td>
              <td><code>secondary</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>showSpinner</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>spinnerText</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td>Spinner tekst - erstatter alm tekst</td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td>
                Se standard ikone hos
                <a href="https://designsystem.dk/design/ikoner/" target="dkfds">DKFDS</a>
              </td>
            </tr>

            <tr>
              <td><code>useoverlay</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
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
