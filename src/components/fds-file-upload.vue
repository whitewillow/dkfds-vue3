<template>
  <input
    type="file"
    :id="formid"
    :name="formid"
    @blur="onDirty"
    @change="onFileChange"
    :accept="contenttypes.join(',')"/>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

import { removeBrowserFileContentHeaders } from '@/utils/file-utils';
import { FdsFileInputModel } from '@/model/fds.model';
import getFormId from '@/composable/formId';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  contenttypes: {
    type: Array as () => Array<string>,
    default: () => ['image/png', 'image/jpg', 'image/jpeg', '.pdf', '.doc', '.docx', '.odt'],
  },
  removeContentHeaders: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['dirty', 'upload', 'error']);

const { formid } = getFormId(props.id);
const file = ref<File | null>();

const onDirty = () => emit('dirty', true);

const clearFile = () => {
  file.value = null;
};

const onFileChange = ($event: Event) => {
  onDirty();
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
    const data = props.removeContentHeaders
      ? removeBrowserFileContentHeaders(reader.result?.toString() ?? '')
      : reader.result?.toString();

    const fileObj = {
      filename: files[0].name, // test.pdf
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