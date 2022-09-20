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
              {{ index + 1 + `. ` }} {{ item.title }}
              <p
                v-if="item.help && item.help.length > 0"
                class="sidenav-information">
                {{ item.help }}
              </p>
              <span
                class="sidenav-icon"
                v-if="item.done">
                <svg
                  class="icon-svg"
                  focusable="false"
                  aria-hidden="true">
                  <use xlink:href="#done" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="col-12 col-lg-9">
      <slot v-bind:currentKey="currentKey" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationStep } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted,
} from 'vue';

const props = defineProps({
  list: {
    type: Array as () => Array<FdsNavigationStep>,
    required: true,
  },
});

const currentKey = ref('');
const tabsList = ref<Array<FdsNavigationStep>>(props.list.filter((f) => !f.ignore));
const emit = defineEmits(['navigate']);

const navigate = (item: FdsNavigationStep) => {
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