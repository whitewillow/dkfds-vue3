<template>
  <section>
    <fds-preview header="Accordion gruppe">
      <fds-preview-item>
        <fds-accordion-group>
          <fds-accordion header="Accordion header med hint" hint="Hint for header">
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
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="accGroupCode"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Single Accordions">
      <fds-preview-item>
        <fds-accordion class="mb-4">
          <template #header>
            <h4 class="">Accordion med custom header</h4>
          </template>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </fds-accordion>

        <fds-accordion header="Accordion normal header" hint="Et hint">
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
              <td><code>hint</code></td>
              <td><code>string</code></td>
              <td>
                <code> ''</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>expanded</code></td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
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
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Template</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>header</code></td>
              <td><code>prop.header, prop.hint</code></td>
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
  </section>
</template>

<script setup lang="ts">
const accSingleCode = `
<fds-accordion class="mb-4">
  <template #header>
    <h4 class="">
      Accordion med custom header
    </h4>
  </template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>

<fds-accordion
  header="Accordion normal header"
  hint="Et hint">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>`;
const accGroupCode = `
<fds-accordion-group>
  <fds-accordion header="Accordion header med hint" hint="Hint for header">
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
