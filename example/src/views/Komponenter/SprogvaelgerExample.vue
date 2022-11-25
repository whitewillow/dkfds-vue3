<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <div class="container page-container">
          <fds-sprogvaelger
            v-model="languages"
            @lang="selectedLangauge = $event"
          ></fds-sprogvaelger>
        </div>

        <fds-pre :json="{ selectedLangauge, languages }" header="Valgt sprog" />
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
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
