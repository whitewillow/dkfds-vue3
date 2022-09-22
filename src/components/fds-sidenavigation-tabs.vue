<template>
  <div class="row">
    <aside class="col-12 col-lg-3 sidebar-col">
      <nav>
        <ul
          class="sidenav-list mb-6"
          role="menu">
          <li
            v-for="(item, index) of tabsList"
            :key="item.key"
            :class="[{ 'active current': item.active }, { disabled: item.disabled }]">
            <a
              href="javascript:void(0);"
              class="d-block menuitem hand"
              @click="navigate(item)">
              <span v-if="showIndex">
                {{ index + 1 + `. ` }}
              </span>
              {{ item.title }}
              <p
                v-if="item.hint && item.hint.length > 0"
                class="sidenav-information">
                {{ item.hint }}
              </p>
              <span
                class="sidenav-icon"
                v-if="item.icon">
                <svg
                  class="icon-svg"
                  focusable="false"
                  aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="col-12 col-lg-9">
      <slot :name="currentKey" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted,
} from 'vue';

const props = defineProps({
  list: {
    type: Array as () => Array<FdsNavigationItem>,
    required: true,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
});

const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationItem>>(props.list.filter((f) => !f.ignore));
const emit = defineEmits(['navigate']);

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }
  tabsList.value = tabsList.value.map((f) => ({ ...f, active: f.key === item.key }));
  currentKey.value = item.key;
  emit('navigate', currentKey);
};

onMounted(() => {
  const firstActive = tabsList.value.find((f) => !f.disabled && f.active);
  const first = firstActive ?? tabsList.value.find((f) => !f.disabled);
  if (first) {
    navigate(first);
  }
});
</script>

<style scoped lang="scss"></style>