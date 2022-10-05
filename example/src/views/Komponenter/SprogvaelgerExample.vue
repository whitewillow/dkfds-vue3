<template>
  <section>
    <fds-component-preview header="Eksempel">
      <div class="container page-container">
        <fds-sprogvaelger v-model="languages" @lang="selectedLangauge = $event"></fds-sprogvaelger>
      </div>

      <fds-pre :json="{ selectedLangauge, languages }" header="Valgt sprog" />

      <template #description>
        <p class="italic">
          Sprogvælgeren <code>fds-sprogvaelger</code> indsættes nederst i footeren
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
import { FdsLanguageItem } from 'dkfds-vue3/src/model/fds.model';

const selectedLangauge = ref('da');
const languages = ref<FdsLanguageItem[]>([
  {
    title: 'Dansk',
    active: true,
    lang: 'da',
    ariaLabel: 'Valgt sprog: Dansk',
  },
  {
    title: 'English',
    active: false,
    lang: 'en',
    ariaLabel: 'Selected language: English',
  },
  {
    title: 'Deutsch',
    active: false,
    lang: 'de',
    ariaLabel: 'Gewählte Sprache: Deutsch',
  },
]);

const code = `
<footer>
  <fds-sprogvaelger v-model="languages" @lang="selectedLangauge = $event" />
  ...
</footer>
`;
</script>
