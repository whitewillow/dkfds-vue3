<template>
  <div
    class="date-picker"
    :id="`datepicker_${formid}`">
    <input
      class="form-input"
      required
      :id="formid"
      value=""
      :name="formid"
      type="text" />
  </div>
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import { datePicker } from 'dkfds';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
  },
});
const formid = ref(props.id ?? uuidv4());
onMounted(() => datePicker.on(document.body));
</script>