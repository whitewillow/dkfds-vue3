<template>
  <section>
    <h2 class="mt-0">Funktionslink</h2>
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
import { FdsFileInputModel, FdsFileModel } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const klikEvent = () => window.confirm('KLIK');
</script>
