<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-funktionslink title="Klik for event" @click="handleFunkClick">
        Funktionslink
      </fds-funktionslink>
      <fds-pre :json="{ funktionsLinkClick }" />

      <template #description>
        <p class="italic">
          <code>fds-funktionslink</code>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Som link">
      <fds-funktionslink
        @click="$router.push({ name: 'about' })"
        icon="contact-support"
        title="Klik for at gå til om os"
      >
        Funktionslink med ikon - Om os
      </fds-funktionslink>

      <template #description>
        <p class="italic">
          <code>fds-funktionslink</code> det er også muligt at overskrive <code>href</code> med egen
          sti
        </p>
      </template>
      <template #code>
        <pre v-text="code2"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const funktionsLinkClick = ref(0);
const handleFunkClick = () => {
  funktionsLinkClick.value += 1;
};

const code = `
<fds-funktionslink title="Klik for event" @click="handleFunkClick">
  Funktionslink
</fds-funktionslink>
`;

const code2 = `
<fds-funktionslink
  @click="$router.push({ name: 'about' })"
  icon="contact-support"
  title="Klik for at gå til om os"
>
  Funktionslink med ikon - Om os
</fds-funktionslink>

// Eller

<fds-funktionslink
  href="/forside"
  icon="contact-support"
  title="Klik for at gå til om os"
>
  Funktionslink med ikon - Om os
</fds-funktionslink>
`;
</script>
