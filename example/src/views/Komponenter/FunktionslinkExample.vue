<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-funktionslink title="Klik for event" @click="handleFunkClick">
          Funktionslink
        </fds-funktionslink>
        <fds-pre header="Klik" :json="{ funktionsLinkClick }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Med ikon og Som link">
      <fds-preview-item>
        <fds-funktionslink
          @click="$router.push({ name: 'about' })"
          icon="contact-support"
          title="Klik for at gå til om os"
        >
          Funktionslink med ikon - Om os
        </fds-funktionslink>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code2"></pre>
      </fds-preview-code>
    </fds-preview>
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
