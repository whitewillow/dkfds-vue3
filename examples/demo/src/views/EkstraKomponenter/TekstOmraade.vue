<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-validate
          :model-value="product.beskrivelse"
          :validations="[hasContent, charactersMinLength(10)]"
        >
          <xfds-form-textarea
            v-model="product.beskrivelse"
            label="Beskrivelse"
            hint="Angiv beskrivelse af produktet"
            placeholder="...Produktet er består af xxx"
          />
        </xfds-validate>

        <fds-pre
          header="v-model"
          :json="product" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeForm"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { hasContent, charactersMinLength } from 'dkfds-vue3/utils';

const product = ref({
  beskrivelse: '',
});
const codeForm = `
  <xfds-form-textarea
    label="Beskrivelse"
    hint="Angiv beskrivelse af produktet"
    placeholder="...Produktet er består af xxx"
    v-model="product.beskrivelse"

  />`;
</script>
