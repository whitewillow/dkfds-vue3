<template>
  <div class="hello"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'fds-test',
  props: {
    msg: String,
  },
});
</script>