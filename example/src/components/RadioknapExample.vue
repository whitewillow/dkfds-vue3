<template>
  <section>
    <fds-formgroup>
      <fds-label>Vælg radio</fds-label>

      <fds-radio header="Pick one" :list="radioOptions" v-model="radioVal">
        <template #hint> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
        <template v-slot:[`melon`]>
          <p>Det er muligt at benytte radio til mere indhold</p>
        </template>
      </fds-radio>
    </fds-formgroup>

    <fds-formgroup>
      <fds-label>Vælg radio toggle</fds-label>

      <fds-radio-toggle v-model="toggleRadio">
        <template #hint> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
        <template v-slot:[`true`]>
          <p>Det er muligt at benytte radio til mere indhold</p>
        </template>
      </fds-radio-toggle>
    </fds-formgroup>

    <fds-pre :json="{ radioVal, toggleRadio }" />
  </section>
</template>

<script setup lang="ts">
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const radioVal = ref('');

const toggleRadio = ref(null);
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
]);
</script>
