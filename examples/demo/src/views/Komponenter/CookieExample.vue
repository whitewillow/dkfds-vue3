<template>
  <section>
    <fds-alert variant="info" header="Under udvikling" closeable
      >Cookiemeddelelse er stadig under udvikling, mindre ændringer kan forkomme
    </fds-alert>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/cookiemeddelelse/">
      <fds-preview-item>
        <fds-cookiemeddelelse
          @accept="cookieAccept = true"
          @cancel="cookieAccept = false"
          class="example_relative"
        >
          <template #header>
            <div class="h3 mt-0 mb-3" id="cookie-message-heading">
              Fortæl os om du accepterer cookies
            </div>
          </template>
          <p class="mt-0" id="cookie-message-text">
            Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
            <a href="#"> Læs mere om vores brug af cookies. </a>
          </p>
        </fds-cookiemeddelelse>

        <fds-pre header="Cookimeddelelse" :json="{ cookieAccept }" />
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
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td><code>Fortæl os om du accepterer cookies</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slots</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>header</code></td>
              <td><code>props.header</code></td>
            </tr>
            <tr>
              <td><code>actions</code></td>
              <td>default knapper</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Events</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@accept</code></td>
              <td>Klik Ja til cookie</td>
            </tr>
            <tr>
              <td><code>@cancel</code></td>
              <td>Klik Nej til cookie</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cookieAccept = ref<boolean | null>(null);

const code = `
<fds-cookiemeddelelse @accept="cookieAccept = $event">
  <template #header>
    <div class="h3 mt-0 mb-3" id="cookie-message-heading">
      Fortæl os om du accepterer cookies
    </div>
  </template>
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> Læs mere om vores brug af cookies. </a>
  </p>
</fds-cookiemeddelelse>

// Eller

<fds-cookiemeddelelse 
  @accept="cookieAccept = true"
  @cancel="cookieAccept = false"
  header="Fortæl os om du accepterer cookies">
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> Læs mere om vores brug af cookies. </a>
  </p>
</fds-cookiemeddelelse>

// Eller egne knapper

<fds-cookiemeddelelse 
  @accept="cookieAccept = true"
  @cancel="cookieAccept = false"
  header="Fortæl os om du accepterer cookies">
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> Læs mere om vores brug af cookies. </a>
  </p>
  <template #actions>
    <fds-button
      variant="secondary">
      Accepter cookies
    </fds-button>
    <fds-button
      variant="secondary">
      Nej tak til cookies
    </fds-button>
  </template>
</fds-cookiemeddelelse>
`;
</script>

<style lang="scss" scoped>
.example_relative {
  position: relative;
  right: auto;
  bottom: auto;
  left: auto;
  top: auto;
  z-index: 1;
}
</style>
