<template>
  <div
    class="cookie-container"
    role="complementary"
    aria-labelledby="cookie-message-heading"
    aria-describedby="cookie-message-text"
  >
    <div class="cookie-message">
      <div class="cookie-text">
        <slot name="header">
          <div
            id="cookie-message-heading"
            class="h3 mt-0 mb-3">
            {{ header }}
          </div>
        </slot>
        <slot>
          <p
            id="cookie-message-text"
            class="mt-0">
            Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data anonymiseres.
            <a href="#">
              Læs mere om vores brug af cookies.
            </a>
          </p>
        </slot>
      </div>
      <div class="cookie-actions">
        <slot name="actions">
          <ul class="inline-list">
            <li>
              <fds-button
                variant="secondary"
                @click="$emit('accept', true)">
                Accepter cookies
              </fds-button>
            </li>
            <li class="ml-4">
              <fds-button
                variant="secondary"
                @click="$emit('cancel', true)">
                Nej tak til cookies
              </fds-button>
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for cookie
 * https://designsystem.dk/kode/komponenter/cookiemeddelelse/
 *
 * */
import { defineProps } from 'vue';

defineProps({
  /**
   * Overskrift
   * */
  header: {
    type: String,
    default: 'Fortæl os om du accepterer cookies',
  },
});

defineEmits(['accept', 'cancel']);
</script>
