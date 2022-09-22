<template>
  <div class="row">
    <aside class="col-12 col-lg-3 sidebar-col">
      <nav>
        <fds-sidenavigation
          :showIndex="showIndex"
          v-model="tabsList"
          @navigate="navigate" />
      </nav>
    </aside>

    <div class="col-12 col-lg-9">
      {{ currentKey }}
      <slot :name="currentKey" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted, watch,
} from 'vue';

const props = defineProps({
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
    required: true,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
});

const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationItem>>(props.modelValue);
const emit = defineEmits(['update:modelValue', 'navigate']);

const navigate = (key: string) => {
  currentKey.value = key;

  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey.value);
};
</script>

<style scoped lang="scss"></style>