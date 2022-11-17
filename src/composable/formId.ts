import { computed, inject, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export default function getFormId (localId: string | undefined, autogenId = false) {
  const injFormid = ref(inject('formid', null) ?? localId);
  const autoId = `fid_${uuidv4().replaceAll('-', '')}`;
  const formid = computed(() => {
    if (!injFormid.value && !autogenId) {
      throw Error('Form id is not set. Did you forget formgroup');
    }
    return injFormid?.value ?? autoId;
  });
  return { formid };
}