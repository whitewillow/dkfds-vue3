<template>
  <section>
    <fds-component-preview header="Tekstfelter">
      <xfds-form-radio
        label="Radio form"
        :validations="[hasContent]"
        :options="radioOptions"
        v-model="product.type"
      />

      <fds-pre :json="product" />

      <template #description>
        <p class="italic">
          Komponented <code>xfds-form-radio</code> er en samling af komponenter der giver en samlet
          funktionalitet.
        </p>
        <p class="italic">Understøtter simpel validering, m.m.</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { hasContent } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';

const radioOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);

const product = ref({
  type: '',
});
const code = `
<xfds-form-radio
  label="Radio form"
  :validations="[hasContent]"
  :options="radioOptions"
  v-model="product.type"
/>

const radioOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);`;
</script>
