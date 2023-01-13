<template>
  {{ compFormatted }}
  <table class="table table--compact">
    <thead>
      <tr>
        <th>{{ header }}</th>
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
        <td></td>
      </tr>

      <tr>
        <td><code>disabled</code></td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
        <td></td>
      </tr>
      <tr>
        <td><code>useoverlay</code></td>
        <td><code>boolean</code></td>
        <td><code>false</code></td>
        <td>Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  header: {
    type: String,
    default: '',
  },
  jsonString: {
    type: String,
    default: '',
  },
});

const compFormatted = computed(() => props.jsonString);
</script>
