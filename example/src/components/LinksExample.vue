<template>
  <section>
    <h2 class="mt-0">Links</h2>
    <p>
      <fds-funktionslink title="Klik for event" @click="klikEvent">
        Funktionslink
      </fds-funktionslink>
    </p>
    <div>
      <fds-funktionslink
        :to="{ name: 'about' }"
        icon="contact-support"
        title="Klik for at gå til om os"
      >
        Funktionslink med ikon - Om os
      </fds-funktionslink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { charactersMinLength, hasContent } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsOptionItem, FdsRadioItem, FdsCheckboxItem } from 'dkfds-vue3/src/model/fds.model';

const klikEvent = () => window.confirm('KLIK');
</script>
