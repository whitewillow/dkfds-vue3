<template>
  <ul class="bordered-list">
    <li
      v-for="(file, index) of list"
      :key="index"
      class="d-flex justify-content-between">
      <fds-funktionslink
        v-if="canDownload"
        :icon="getFileIcon(file)"
        @click="onDownloadFile(file)">
        {{ file.filename }}
      </fds-funktionslink>

      <label
        for=""
        v-if="!canDownload"
        class="disabled">
        <svg
          class="icon-svg mr-3"
          focusable="false"
          aria-hidden="true">
          <use :xlink:href="`#${getFileIcon(file)}`" />
        </svg>
        <template v-if="file.label">
          {{ file.label }}
        </template>
        <template v-else>
          {{ file.filename }}
        </template>
      </label>
      <button
        class="function-link"
        @click="onDeleteFile(file)"
        v-if="canDelete">
        <svg
          class="icon-svg"
          aria-hidden="true">
          <use xlink:href="#trash-can"></use></svg>Slet
      </button>
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
  canDelete: {
    type: Boolean,
    default: true,
  },
  canDownload: {
    type: Boolean,
    default: true,
  },

  // TODO: download prop method?
});

const emit = defineEmits(['download', 'delete']);

const keys = Object.keys(props.icons) as (keyof typeof props.icons)[];

const onDeleteFile = (f: FdsFileModel) => emit('delete', f);
const onDownloadFile = (f: FdsFileModel) => emit('download', f);

const getFileIcon = (f: FdsFileModel): string => {
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