<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/trinindikator/">
      <fds-preview-item>
        <fds-trinindikator-group :size="trinSize ? 'large' : 'small'">
          <template #header>
            Trin {{ trinNavigationsId }} af 4
          </template>
          <fds-trinindikator-item
            id="1"
            :active="trinNavigationsId === '1'"
            icon="done"
            hint="Et hint"
            :index="1"
            @navigate="trinNavigationsId = $event"
          >
            Første
          </fds-trinindikator-item>
          <fds-trinindikator-item
            id="2"
            :active="trinNavigationsId === '2'"
            hint="Et hint"
            :index="2"
            @navigate="trinNavigationsId = $event"
          >
            Anden
          </fds-trinindikator-item>
        </fds-trinindikator-group>

        <fds-formgroup>
          <fds-label>Størrelse af trin</fds-label>
          <fds-checkbox v-model="trinSize">
            Large - fuld bredde når der er plads (breakpoint lg)</fds-checkbox
          >
        </fds-formgroup>

        <fds-pre :json="{ trinNavigationsId }"></fds-pre>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props (Group)</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td>
                <code>Trin</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td>
                <code>auto</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td><code>string</code></td>
              <td>
                <code>arrow-drop-down</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td><code>'small' | 'large'</code></td>
              <td><code>small</code></td>
              <td>large = fuld bredde, men small ved responsive</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props (Item)</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td>
                <code>required</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td><code>string</code></td>
              <td>
                <code>null</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>hint</code></td>
              <td><code>string</code></td>
              <td>
                <code>null</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>href</code></td>
              <td><code>string</code></td>
              <td>
                <code>null</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>index</code></td>
              <td><code>Number</code></td>
              <td>
                <code>null</code>
              </td>
              <td></td>
            </tr>
            <tr>
              <td><code>active</code></td>
              <td><code>Boolean</code></td>
              <td>
                <code>false</code>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const trinSize = ref(false);
const trinNavigationsId = ref('1');
const code = `
<fds-trinindikator-group :size="trinSize ? 'large' : 'small'">
  <template #header> Trin {{ trinNavigationsId }} af 4 </template>
  <fds-trinindikator-item
    id="1"
    :active="trinNavigationsId === '1'"
    icon="done"
    hint="Et hint"
    @navigate="trinNavigationsId = $event"
    :index="1"
  >
    Første
  </fds-trinindikator-item>
  <fds-trinindikator-item
    id="2"
    :active="trinNavigationsId === '2'"
    hint="Et hint"
    @navigate="trinNavigationsId = $event"
    :index="2"
  >
    Anden
  </fds-trinindikator-item>
</fds-trinindikator-group>
`;
</script>
