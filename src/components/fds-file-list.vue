<template>
  <ul
    class="bordered-list"
    :class="{ 'border-list-dashed': $slots.default }">
    <li v-if="$slots.default">
      <div class="d-flex justify-content-between">
        <slot />
      </div>
    </li>
    <li
      v-for="(file, index) of list"
      :key="index">
      <div class="d-flex justify-content-between">
        <a
          v-if="!hideDownload"
          href="javascript:void(0);"
          @click="downloadFile(file)"
          class="function-link">
          <svg
            class="icon-svg"
            aria-hidden="true">
            <use :xlink:href="`#${fileIcon(file)}`" />
          </svg>
          {{ file.filnavn }}</a>
        <label
          for=""
          v-if="hideDownload"
          class="disabled">
          <svg
            class="icon-svg mr-3"
            focusable="false"
            aria-hidden="true">
            <use :xlink:href="`#${fileIcon(file)}`" />
          </svg>
          <template v-if="file.label">
            {{ file.label }}
          </template>
          <template v-else>
            {{ file.filnavn }}
          </template>
        </label>
        <button
          class="function-link"
          @click="deleteFile(file)"
          v-if="!hideDelete">
          <svg
            class="icon-svg"
            aria-hidden="true">
            <use xlink:href="#trash-can"></use></svg>Slet
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue';

import { FdsFileModel } from '@/model/fds.model';

const props = defineProps({
  list: {
    type: Array as PropType<Array<FdsFileModel>>,
    required: true,
    default: () => [],
  },
  icons: {
    type: Object as PropType<Record<string, string>>,
    default: () => ({
      pdf: 'file-pdf',
      image: 'file-image',
      doc: 'file-word',
      odt: 'file-word',
      xls: 'file-excel',
    }),
  },
  defaultIcon: {
    type: String,
    default: 'insert-drive-file',
  },
  hideDelete: {
    type: Boolean,
    default: false,
  },
  hideDownload: {
    type: Boolean,
    default: false,
  },

  // TODO: download prop method?
});

const emit = defineEmits(['download', 'delete']);

const keys = Object.keys(props.icons) as (keyof typeof props.icons)[];

const deleteFile = (f: FdsFileModel) => emit('delete', f);
const downloadFile = (f: FdsFileModel) => emit('download', f);

const fileIcon = (f: FdsFileModel): string => {
  const key = keys.find((k) => f.type.includes(k));
  if (key) {
    return props.icons[key];
  }
  return props.defaultIcon;
};
</script>

<style scoped lang="scss">
.border-list-dashed {
  border: 1px dashed #757575;
  border-radius: 5px;
  > li {
    padding-left: 8px;
    padding-right: 8px;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>