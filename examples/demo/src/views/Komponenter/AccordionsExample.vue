<template>
  <section>
    <fds-preview
      header="Single Accordions"
      href="https://designsystem.dk/komponenter/accordions/">
      <fds-preview-item>
        <fds-accordion
          header="Accordion normal header"
          class="mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion>

        <fds-accordion
          header="Accordion normal header"
          header-tag="h3"
          class="mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion>

        <fds-accordion
          class="mb-4"
          header-tag="h3">
          <template #header>
            <p class="h4">
              Accordion med custom header
            </p>
          </template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="accSingleCode"></pre>
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
              <td><code>null</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>header-tag</code></td>
              <td><code>'h2' | 'h3' | 'h4' | 'h5' | 'h6'</code></td>
              <td><code>'h2'</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td><code>'success' | 'warning' | 'error'</code></td>
              <td><code>null</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>variantText</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>expanded</code></td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td></td>
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
              <td><code>prop.header, prop.variantText</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>default</code></td>
              <td><code></code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <fds-preview header="Accordion gruppe">
      <fds-preview-item>
        <fds-accordion-group>
          <fds-accordion header="Accordion header med hint">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </fds-accordion>

          <fds-accordion
            header="Accordion header med Success"
            variant="success"
            variant-text="Success"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </fds-accordion>

          <fds-accordion
            header="Accordion header med advarsel"
            variant="warning"
            variant-text="Advarsel"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </fds-accordion>

          <fds-accordion
            header="Accordion header med Fejl"
            variant="error">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </fds-accordion>
        </fds-accordion-group>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="accGroupCode"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const accSingleCode = `
<fds-accordion header="Accordion normal header" class="mb-4">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>

<fds-accordion header="Accordion normal header" header-tag="h3" class="mb-4">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>

<fds-accordion class="mb-4" header-tag="h3">
  <template #header>
    <p class="h4">Accordion med custom header</p>
  </template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>`;
const accGroupCode = `
<fds-accordion-group>
  <fds-accordion header="Accordion header med hint">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>

  <fds-accordion
    header="Accordion header med Success"
    variant="success"
    variant-text="Success"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>

  <fds-accordion
    header="Accordion header med advarsel"
    variant="warning"
    variant-text="Advarsel"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>

  <fds-accordion header="Accordion header med Fejl" variant="error">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>
</fds-accordion-group>
`;
</script>
