import { ref } from "vue";
import { uuid } from "./../utils";

export default function generateId(localId: string | undefined) {
  const autoId = localId ?? `fid_${uuid().replaceAll("-", "")}`;
  return ref(autoId);
}
