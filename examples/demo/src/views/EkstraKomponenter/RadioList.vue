<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-form-radio
          label="Radio form"
          :validations="[hasContent]"
          :options="radioOptions"
          v-model="product.type"
        />

        <fds-pre header="v-model for radio" :json="product" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { FdsOptionItem, hasContent } from "dkfds-vue3-utils";
import { ref } from "vue";

const radioOptions = ref<FdsOptionItem[]>([
  {
    title: "Banan",
    value: "banan",
  },
  {
    title: "Melon",
    value: "melon",
  },
  {
    title: "Æble",
    value: "æble",
  },
  {
    title: "Tomat",
    value: "tomat",
    disabled: true,
  },
]);

const product = ref({
  type: "",
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
