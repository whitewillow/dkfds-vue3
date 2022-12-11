<template>
  <dialog :id="`${dialogId}`" :aria-labelledby="`modal_${dialogId}_title`" ref="refDialog">
    <div class="fds-modal" :id="`modal_${dialogId}`" aria-hidden="false" aria-modal="true">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h2 class="modal-title" :id="`modal_${dialogId}_title`">
              {{ header }}
            </h2>
            <button class="modal-close function-link" v-if="closeable" @click="hideModal">
              <svg class="icon-svg" focusable="false" aria-hidden="true">
                <use xlink:href="#close"></use></svg
              >Luk
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="button button-primary" @click="handleAccept">
              {{ acceptText }}
            </button>
            <button class="button button-secondary" @click="handleCancel">
              {{ cancelText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for Modal
 * https://designsystem.dk/komponenter/modal/
 *
 * OMSKREVET til at bruge https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 *
 * Måske kigge på https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/
 * */

// måske backdrop clik
// eslint-disable-next-line max-len
// https://stackoverflow.com/questions/25864259/how-to-close-the-new-html-dialog-tag-by-clicking-on-its-backdrop

import { generateId } from "dkfds-vue3-utils";
import { computed, defineProps, ref, defineEmits, onMounted } from "vue";

const props = defineProps({
  header: {
    type: String,
  },
  id: {
    type: String,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  acceptText: {
    type: String,
    default: "Godkend",
  },
  cancelText: {
    type: String,
    default: "Annuller",
  },
});

const emit = defineEmits(["close", "accept", "cancel"]);

const refDialog = ref(null);
const dialogId = generateId(props.id);
const htmlDialog = computed(() => refDialog.value as unknown as HTMLDialogElement);

const showModal = () => {
  htmlDialog.value.showModal();
};
const hideModal = () => {
  htmlDialog.value.close();
  emit("close");
};

defineExpose({
  hideModal,
  showModal,
});

onMounted(() => {
  if (props.closeable) {
    // cancel is exposed by HTMLDialogElement
    htmlDialog.value.addEventListener("cancel", () => {
      hideModal();
    });
  }
});

const handleAccept = () => {
  emit("accept");
  hideModal();
};

const handleCancel = () => {
  hideModal();
  emit("cancel");
};
</script>
