<template>
  <section>
    <p>
      <fds-funktionslink title="Klik for event" @click="klikEvent">
        Funktionslink
      </fds-funktionslink>
    </p>
    <div>
      <fds-funktionslink
        @click="$router.push({ name: 'about' })"
        icon="contact-support"
        title="Klik for at gå til om os"
      >
        Funktionslink med ikon - Om os
      </fds-funktionslink>
    </div>
  </section>
</template>

<script setup lang="ts">
const klikEvent = () => window.confirm('KLIK');
</script>
