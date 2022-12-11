<template>
  <div class="overflow-menu overflow-menu--open-right">
    <button
      class="button-overflow-menu js-dropdown"
      :id="`button_${formid}`"
      :data-js-target="`#${formid}`"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {{ header }} {{ currentStepIndex + 1 }} af {{ mVal.length }}
      <svg class="icon-svg" aria-hidden="true" focusable="false">
        <use :xlink:href="`#${icon}`"></use>
      </svg>
    </button>
    <div class="overflow-menu-inner" :id="formid" aria-hidden="true">
      <nav>
        <fds-menu>
          <fds-menu-item
            role="none"
            v-for="(item, index) of tabsList"
            :class="[{ disabled: item.disabled }]"
            :key="item.key"
            :id="item.key"
            :active="item.active"
            :icon="item.icon"
            :hint="item.hint"
            :href="item.href"
            :index="index + 1"
            @navigate="navigate(item)"
          >
            {{ item.title }}
          </fds-menu-item>
        </fds-menu>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Ekstra Komponent for Trin indikator (se også fds-trinindikator)
 * Generer selv trin ud fra liste
 * https://designsystem.dk/komponenter/trin/
 *
 * */

import { FdsNavigationItem } from "dkfds-vue3-utils";
import { defineProps, ref, defineEmits, onMounted, computed } from "vue";
import navigationService from "./../service/navigation.service";

import { formId, dropdown } from "dkfds-vue3-utils";

const props = defineProps({
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
    default: () => [],
    required: true,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  navigateFirst: {
    type: Boolean,
    default: false,
  },
  header: {
    type: String,
    default: "Trin", // TODO: overvej interpolation
  },
  id: {
    type: String,
  },
  icon: {
    type: String,
    default: "arrow-drop-down",
  },
});

const emit = defineEmits(["update:modelValue", "navigate"]);

const { formid } = formId(props.id, true);

const mVal = computed(() => props.modelValue ?? []);
const currentKey = ref("");
const tabsList = ref<Array<FdsNavigationItem>>(mVal.value.filter((f) => !f.ignore));
const currentStepIndex = ref(0);

const navigate = (item: FdsNavigationItem) => {
  if (item.disabled) {
    return;
  }

  tabsList.value = navigationService.setActive(tabsList.value, item.key);
  currentKey.value = item.key;
  currentStepIndex.value = tabsList.value.findIndex((i) => i.key === item.key);

  emit("update:modelValue", tabsList.value);
  emit("navigate", currentKey.value);
};

onMounted(async () => {
  const item = navigationService.findFirstActiveItem(tabsList.value, props.navigateFirst);
  if (item) {
    navigate(item);
  }
  new dropdown(document.getElementById(`button_${formid.value}`)).init();
});
</script>
