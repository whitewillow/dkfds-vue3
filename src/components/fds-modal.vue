<template>
  <teleport to="body">
    <div
      v-if="showModal"
      class="fds-modal"
      :id="id"
      aria-hidden="false"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-id-1-title">
      <div class="modal-content">
        <div class="modal-header">
          <h2
            class="modal-title"
            id="modal-title">
            {{ header }}
          </h2>
          <button
            class="modal-close function-link"
            v-if="canClose"
            @click="hideModal"
            data-modal-close>
            <svg
              class="icon-svg"
              focusable="false"
              aria-hidden="true">
              <use xlink:href="#close"></use></svg>Luk
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="button button-primary"
              @click="handleOk">
              {{ okTekst }}
            </button>
            <button
              class="button button-secondary"
              data-modal-close=""
              @click="hideModal">
              {{ annullerTekst }}
            </button>
          </slot>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="modal-backdrop"
      id="modal-backdrop"></div>
  </teleport>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for Modal
 * https://designsystem.dk/komponenter/modal/
 *
 * */
import {
  defineProps, ref, watch, defineEmits,
} from 'vue';

const props = defineProps({
  header: {
    type: String,
  },
  id: {
    type: String,
  },
  show: {
    type: Boolean,
    default: false,
  },
  canClose: {
    type: Boolean,
    default: true,
  },
  okTekst: {
    type: String,
    default: 'Ok',
  },
  annullerTekst: {
    type: String,
    default: 'Annuller',
  },
  focusId: {
    type: String,
  },
});

const emit = defineEmits(['update:modelValue', 'close', 'ok']);

const showModal = ref(false);

const hideModal = () => {
  showModal.value = false;
  emit('close');
  if (!props.focusId) {
    return;
  }
  const focusElement = document.getElementById(props.focusId);
  if (focusElement) {
    focusElement.focus();
  }
};

// TODO: able to click bacdrop or esc to close
// const handleBackdropClick = () => {
//   if (props.canClose) {
//     hideModal();
//   }
// };
const handleOk = () => {
  emit('ok');
};

watch(
  () => props.show,
  () => {
    showModal.value = props.show;
  },
);
</script>