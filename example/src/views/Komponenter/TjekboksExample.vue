<template>
  <section>
    <fds-formgroup label="Vælg en checkbox">
      <fds-checkbox-list v-model="checkboxList">
        <template v-slot:[`melon`]>
          <p>Det er muligt at benytte radio til mere indhold</p>
        </template>
      </fds-checkbox-list>
    </fds-formgroup>

    <fds-pre header="v-model" :json="checkboxList" />

    <fds-formgroup label="Single Checkbox">
      <fds-checkbox v-model="oneChecked" class="mt-2"> Et valg </fds-checkbox>
      <fds-checkbox v-model="twoChecked" small> Andet valg - small </fds-checkbox>

      <fds-pre header="v-model" :json="{ oneChecked, twoChecked }" />
    </fds-formgroup>
  </section>
</template>

<script setup lang="ts">
import { FdsCheckboxItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const oneChecked = ref(false);
const twoChecked = ref(false);

const checkboxList = ref<FdsCheckboxItem[]>([
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
