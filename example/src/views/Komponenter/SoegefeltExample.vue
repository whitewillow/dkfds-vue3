<template>
  <section>
    <fds-component-preview header="Søg knap">
      <fds-formgroup>
        <fds-label id="searchtxt">Input med knap ikon</fds-label>
        <fds-input v-model="txtSearch" placeholder="Søg efter..." id="searchtxt">
          <template #button>
            <button class="button button-search">
              <svg class="icon-svg m-0" aria-hidden="true">
                <use xlink:href="#search"></use></svg
              ><span class="sr-only"> Søg </span>
            </button>
          </template>
        </fds-input>
      </fds-formgroup>

      <fds-formgroup>
        <fds-label id="searchbtn">Input med knap tekst</fds-label>
        <fds-input v-model="txtSearch" placeholder="Søg efter..." id="searchbtn">
          <template #button>
            <button class="button button-search">Søg</button>
          </template>
        </fds-input>
      </fds-formgroup>
      <template #description>
        <p class="italic">Det er muligt at tilknytte knap med ikon eller tekst til et inputfelt.</p>
      </template>
      <template #code>
        <pre v-text="codeInputKnap"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const txtSearch = ref('');
const codeInputKnap = `
<fds-input v-model="txtSearch" placeholder="Søg efter..." id="search">
  <template #button>
    <button class="button button-search">
      <svg class="icon-svg m-0" aria-hidden="true">
        <use xlink:href="#search"></use></svg
      ><span class="sr-only"> Søg </span>
    </button>
  </template>
</fds-input>

<fds-input v-model="txtSearch" placeholder="Søg efter..." id="searchbtn">
  <template #button>
    <button class="button button-search">Søg</button>
  </template>
</fds-input>
`;
</script>
