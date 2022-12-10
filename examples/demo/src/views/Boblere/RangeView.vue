<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Range </fds-label>
          <fds-tooltip class="ml-2">
          Hjælpende <b>tekst</b>
          </fds-tooltip>
          <fds-hint>Indtast Range</fds-hint>
          <xfds-range v-model="rangeInput">
          </xfds-range>
        </fds-formgroup>

        <fds-pre header="v-model" :json="{range: rangeInput}" />
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
              <td><code>modelValue</code></td>
              <td><code>Number</code></td>
              <td><code>0</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>min</code></td>
              <td><code>Number</code></td>
              <td><code>0</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>max</code></td>
              <td><code>Number</code></td>
              <td><code>100</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>step</code></td>
              <td><code>Number</code></td>
              <td><code>1</code></td>
              <td>Granulariteten</td>
            </tr>
          </tbody>
        </table>

        <fds-alert>
          Se også <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range" target="mdn">mdn web docs for Range</a>
        </fds-alert>


      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rangeInput = ref(5);

const code = `
<xfds-range v-model="rangeInput">
`;
</script>
