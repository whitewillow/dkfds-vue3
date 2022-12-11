<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/funktionslink/">
      <fds-preview-item>
        <fds-funktionslink title="Klik for event" @click="handleFunkClick">
          Funktionslink
        </fds-funktionslink>
        <fds-pre header="Klik" :json="{ funktionsLinkClick }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>icon</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td>
                Se standard ikone hos
                <a href="https://designsystem.dk/design/ikoner/" target="dkfds">DKFDS</a>
              </td>
            </tr>
            <tr>
              <td><code>href</code></td>
              <td><code>string</code></td>
              <td><code></code></td>
              <td>Standard a tag</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slots</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>header</code></td>
              <td><code>props.header</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
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
