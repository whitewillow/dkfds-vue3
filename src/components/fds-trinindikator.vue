<template>
  <div class="overflow-menu overflow-menu--open-right">
    <button
      class="button-overflow-menu js-dropdown"
      :id="`button_${formid}`"
      :data-js-target="`#${formid}`"
      aria-haspopup="true"
      aria-expanded="false">
      {{ header }} {{ currentStepIndex+1 }} af {{ modelValue.length }}
      <svg
        class="icon-svg"
        aria-hidden="true"
        focusable="false">
        <use :xlink:href="`#${icon}`"></use>
      </svg>
    </button>
    <div
      class="overflow-menu-inner"
      :id="formid"
      aria-hidden="true">
      <nav>
        <ul
          class="sidenav-list"
          role="menu">
          <li
            role="none"
            v-for="(item, index) of tabsList"
            :key="item.key"
            :class="[{ 'active current': item.active }, { disabled: item.disabled }]">
            <a
              :href="`${item.href ? item.href : 'javascript:void(0);'}`"
              role="menuitem"
              @click="navigate(item)">
              <span class="sidenav-number">
                {{ index + 1 + `. ` }}
              </span><span class="sidenav-title">
                {{ item.title }}
              </span>
              <span
                class="sidenav-icon"
                v-if="item.icon">

                <svg
                  class="icon-svg"
                  focusable="false"
                  aria-hidden="true"
                  tabindex="-1">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
              </span>
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
   *
   * Komponent for Trin indikator
   * https://designsystem.dk/komponenter/trin/
   *
   * */

import { Dropdown } from 'dkfds';
import { v4 as uuidv4 } from 'uuid';
import { FdsNavigationItem } from '@/model/fds.model';
import {
  defineProps, ref, defineEmits, onMounted,
} from 'vue';
import navigationService from '@/service/navigation.service';

import fdsNavigationProps from '@/props/fds-navigation.props';

const props = defineProps({
  ...fdsNavigationProps,
  header: {
    type: String,
    default: 'Trin', // TODO: overvej interpolation
  },
  id: {
    type: String,
  },
  icon: {
    type: String,
    default: 'arrow-drop-down',
  },
});

const emit = defineEmits(['update:modelValue', 'navigate']);

const formid = ref(props.id ?? uuidv4());

const currentKey = ref('');
const currentStepIndex = ref(0);
const tabsList = ref<Array<FdsNavigationItem>>(props.modelValue.filter((f) => !f.ignore));

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = navigationService.setActive(tabsList.value, item.key);
  currentStepIndex.value = tabsList.value.findIndex((i) => i.key === item.key);
  currentKey.value = item.key;

  emit('update:modelValue', tabsList.value);
  emit('navigate', currentKey.value);
};

onMounted(async () => {
  const item = navigationService.findFirstActiveItem(tabsList.value, props.navigateFirst);
  if (item) {
    navigate(item);
  }
  new Dropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>