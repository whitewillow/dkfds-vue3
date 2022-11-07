<template>
  <ul
    class="sidenav-list mb-6"
    role="menu">
    <fds-menu-item
      v-for="(item, index) of tabsList"
      :key="item.key"
      :id="item.key"
      :active="item.active"
      :disabled="item.disabled"
      :icon="item.icon"
      :hint="item.hint"
      :index="showIndex ? index : null"
      @navigate="navigate(item)">
      {{ item.title }}
      <template #content>
        <fds-venstremenu-sub
          v-if="item.active && item.children && item.children.length > 0"
          @navigate="subnavigation"
          v-model="item.children"/>
      </template>
    </fds-menu-item>
  </ul>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted, computed,
} from 'vue';
import navigationService from '@/service/navigation.service';
import fdsNavigationProps from '@/props/fds-navigation.props';

const props = defineProps({
  ...fdsNavigationProps,
});

const emit = defineEmits(['update:modelValue', 'navigate']);
const mVal = computed(() => props.modelValue ?? []);

const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationItem>>(mVal.value.filter((f) => !f.ignore));

const subnavigation = (key: string) => {
  emit('navigate', navigationService.resolveKey(key, mVal.value));
};

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = navigationService.setActive(tabsList.value, item.key);
  currentKey.value = item.key;

  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey.value);
};

onMounted(() => {
  const item = navigationService.findFirstActiveItem(tabsList.value, props.navigateFirst);
  if (item) {
    navigate(item);
  }
});
</script>

<style scoped lang="scss"></style>