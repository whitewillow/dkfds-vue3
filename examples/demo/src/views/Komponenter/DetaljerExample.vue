<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/detaljer/">
      <fds-preview-item>
        <fds-detaljer header="Mine detaljer">
          <p>
            Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero. Integer euismod augue
            leo.
          </p>
          <p>
            Morbi faucibus nunc tortor, condimentum vulputate urna sollicitudin non. Nam commodo
            nulla metus. Phasellus varius eu dolor nec ultricies. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris ac leo finibus, blandit velit nec, consequat est.
            Nulla facilisi.
          </p>
        </fds-detaljer>
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
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td><code>'Mere information'</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slots</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>header</code></td>
              <td><code>props.header</code></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-detaljer header="Mine detaljer">
  <p>
    Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero. Integer euismod augue
    leo.
  </p>
  <p>
    Morbi faucibus nunc tortor, condimentum vulputate urna sollicitudin non. Nam commodo nulla
    metus. Phasellus varius eu dolor nec ultricies. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris ac leo finibus, blandit velit nec, consequat est. Nulla facilisi.
  </p>
</fds-detaljer>

`;
</script>
