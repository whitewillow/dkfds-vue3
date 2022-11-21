<template>
  <section>
    <fds-alert variant="info" header="Under udvikling" canClose
      >Cookiemeddelelse er stadig under udvikling, mindre ændringer kan forkomme
    </fds-alert>
    <fds-component-preview header="Eksempel">
      <fds-cookiemeddelelse @accepter="cookieAccept = $event" class="example_relative">
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

      <template #description>
        <p class="italic">
          Koden indsættes under body og før header. Gør man brug af skip link, skal skip-link
          indsættes efter cookiemeddelelsen.
        </p>
        <p class="italic">
          Bemærk at DKFDS-Vue3 på nuværende tidspunkt kun leverer HTML og CSS til denne komponent.
          Funktionaliteten skal man derfor selv håndtere.
        </p>
        <p class="italic">
          Læs mere på designsystem for vejledning:
          <a href="https://designsystem.dk/komponenter/cookiemeddelelse/">Cookiemeddelelse</a>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cookieAccept = ref<boolean | null>(null);

const code = `
<fds-cookiemeddelelse @accepter="cookieAccept = $event">
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
  @accepter="cookieAccept = $event"
  header="Fortæl os om du accepterer cookies">
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> Læs mere om vores brug af cookies. </a>
  </p>
</fds-cookiemeddelelse>

// Eller egne knapper

<fds-cookiemeddelelse 
  @accepter="cookieAccept = $event"
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
