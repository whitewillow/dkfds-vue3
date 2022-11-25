import { computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export default function getComputedId (localId: string | undefined) {
  const autoId = localId ?? `fid_${uuidv4().replaceAll('-', '')}`;
  return computed(() => {
    return autoId;
  });
}