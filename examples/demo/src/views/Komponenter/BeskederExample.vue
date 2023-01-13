<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/beskeder/">
      <fds-preview-item>
        <fds-alert
          variant="info"
          header="Informativ besked"
          closeable>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum
          corrupti architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate
          animi quas molestiae natus, hic eius ab architecto dolorum placeat.
        </fds-alert>
        <fds-alert
          variant="success"
          header="Succesmeddelelse"
          closeable>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum
          corrupti architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate
          animi quas molestiae natus, hic eius ab architecto dolorum placeat.
        </fds-alert>
        <fds-alert
          variant="warning"
          header="Advarsel"
          closeable>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum
          corrupti architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate
          animi quas molestiae natus, hic eius ab architecto dolorum placeat.
        </fds-alert>
        <fds-alert
          variant="error"
          header="Fejlbesked"
          closeable>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum
          corrupti architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate
          animi quas molestiae natus, hic eius ab architecto dolorum placeat.
        </fds-alert>
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
              <td><code>null</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td><code>'success' | 'info' | 'warning' | 'error'</code></td>
              <td>
                <code>info</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>showIcon</code></td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>closeable</code></td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-alert variant="info" header="Informativ besked"  closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

<fds-alert variant="success" header="Succesmeddelelse"  closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

<fds-alert variant="warning" header="Advarsel"  closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

<fds-alert variant="error" header="Fejlbesked"  closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

`;
</script>
