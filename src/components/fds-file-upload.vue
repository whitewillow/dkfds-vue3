<template>
  <div
    class="form-group file-input"
    :class="{ 'form-error': $slots.fejl }">
    <label
      class="form-label"
      for="fileinput"
      v-if="header">
      {{ header }}
    </label>
    <div
      class="form-hint"
      v-if="hint">
      {{ hint }}
    </div>
    <span
      class="form-error-message mb-3"
      id="fileinput-error">
      <span class="sr-only">
        Fejl:
      </span>
      <slot name="fejl" />
    </span>

    <input
      type="file"
      id="fileinput"
      name="file"
      @blur="emitDirty"
      @change="onFileChange"
      aria-describedby="fileinput"
      :accept="contenttypes.join(',')"
      :disabled="disabled"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

import { removeBrowserFileContentHeaders } from '@/utils/file-utils';
import { FdsFileInputModel } from '@/model/fds.model';

const props = defineProps({
  header: {
    type: String,
    default: 'Vedhæft fil',
  },
  hint: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },

  contenttypes: {
    type: Array as () => Array<string>,
    default: () => ['image/png', 'image/jpg', 'image/jpeg', '.pdf', '.doc', '.docx', '.odt'],
  },
});

const file = ref<File | null>();

const emit = defineEmits(['dirty', 'upload', 'error']);

const emitDirty = () => emit('dirty', true);

const clearFile = () => {
  file.value = null;
};

const onFileChange = ($event: Event) => {
  emitDirty();
  const target = $event.target as HTMLInputElement;

  const { files } = target;
  if (!files || files.length === 0) {
    return;
  }

  // TODO: håndtere flere filer - pt kun den første
  [file.value] = files;

  const reader = new FileReader();
  reader.readAsDataURL(file.value);
  reader.onload = async () => {
    const data = removeBrowserFileContentHeaders(reader.result?.toString() || '');

    const fileObj = {
      filnavn: files[0].name, // test.pdf
      type: files[0].type, // application/pdf
      size: files[0].size,
      data,
    } as FdsFileInputModel;

    try {
      emit('upload', fileObj);
    } catch (error) {
      console.error(error);
      emit('error', error);
    }
    clearFile();
  };
};
</script>

<style scoped lang="scss"></style>