<template>
  <div class="language-switcher">
    <div class="container">
      <ul aria-label="Vælg sprog fra listen ">
        <li v-for="(langauge, index) of value" :key="index">
          <a
            href="javascript:void(0);"
            @click="handleUpdateLang(langauge)"
            :lang="langauge.lang"
            :aria-label="langauge.ariaLabel"
            ><svg v-if="langauge.active" class="icon-svg" focusable="false" aria-hidden="true">
              <use xlink:href="#done"></use></svg
            >{{ langauge.title }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsLanguageItem } from "dkfds-vue3-utils";
import { defineProps, defineEmits, ref, PropType } from "vue";

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<FdsLanguageItem>>,
    required: true,
    default: () => [],
  },
  autoSetLang: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "lang"]);

const value = ref(props.modelValue);

const handleUpdateLang = (langauge: FdsLanguageItem) => {
  value.value = value.value.map((m) => ({ ...m, active: langauge.lang === m.lang }));
  if (props.autoSetLang) {
    document.documentElement.setAttribute("lang", langauge.lang);
  }
  emit("lang", langauge.lang);
  emit("update:modelValue", value.value);
};
</script>

<style scoped lang="scss"></style>
