<template>
  <section>
    <fds-preview header="Standard modal">
      <fds-preview-item>
        <fds-modal ref="refModal" header="Min Modal" closeable>
          <p>Eksempel på et modal vindue</p>
          <p>
            Det er muligt at skifte tekster på nedestående knapper
            <code>acceptText, cancelText</code>
          </p>
          <p>
            Events <code>cancel, close, accept</code> emittes ved hhv klik på godkend og
            annuller/luk knap
          </p>
        </fds-modal>

        <fds-button @click="(refModal as any)?.showModal()" id="modalButton">
          Vis Modal
        </fds-button>
      </fds-preview-item>
      <hr />
      <fds-preview-item>
        <code>fds-modal</code> afviger fra standard DKFDS Modal - da den udelukkende bruger standard
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" target="mdn"
          >HTML dialog element</a
        >:
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
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>null (autogenerer id)</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>closeable</code></td>
              <td><code>Boolean</code></td>
              <td><code>true</code></td>
              <td>Luk oppe i højre hjørne og muligt at klikke escape</td>
            </tr>
            <tr>
              <td><code>acceptText</code></td>
              <td><code>string</code></td>
              <td><code>'Godkend'</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>cancelText</code></td>
              <td><code>string</code></td>
              <td><code>'Annuller'</code></td>
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
              <td><code>props.header og luk knap</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>footer</code></td>
              <td><code>knapper</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Metoder</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ref.showModal()</code></td>
              <td>Åbner modal</td>
            </tr>
            <tr>
              <td><code>ref.hideModal()</code></td>
              <td>Lukker modal</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Events</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@close</code></td>
              <td>Når modal lukkes</td>
            </tr>
            <tr>
              <td><code>@accept</code></td>
              <td>Når accept klikkes</td>
            </tr>
            <tr>
              <td><code>@cancel</code></td>
              <td>Når cancel klikkes</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <fds-preview header="Modal med egen footer">
      <fds-preview-item>
        <fds-modal ref="refModalCustomFooter" header="Egen footer modal">
          <p>Eksempel på et modal vindue</p>
          <p>med egen footer</p>
          <template #footer>
            <fds-button
              id="showModalCustomFooter"
              @click="(refModalCustomFooter as any).hideModal()"
              variant="error"
            >
              Godkend
            </fds-button>
            <fds-button
              variant="secondary"
              @click="(refModalCustomFooter as any).hideModal()"
              id="showModalCustomFooter"
            >
              Nej takker
            </fds-button>
          </template>
        </fds-modal>

        <fds-button @click="(refModalCustomFooter as any).showModal()" id="showModalCustomFooter">
          Vis Footer Modal
        </fds-button>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeFooter"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const refModal = ref(null);
const refModalCustomFooter = ref(null);

const code = `
<fds-modal
  ref="refModal"
  header="Min Modal"
  closeable>
  <p>Eksempel på et modal vindue</p>
  <p>
    Det er muligt at skifte tekster på nedestående knapper <code>acceptText, cancelText</code>
  </p>
  <p>
    Events <code>cancel, close, accept</code> emittes ved hhv klik på godkend og annuller/luk
    knap
  </p>
</fds-modal>

<fds-button
  @click="refModal.showModal()"
  id="modalButton">
  Vis Modal
</fds-button>

const refModal = ref(null);

`;

const codeFooter = `
<fds-modal ref="refModalCustomFooter" header="Egen footer modal">
  <p>Eksempel på et modal vindue</p>
  <p>med egen footer</p>
  <template #footer>
    <fds-button
      id="showModalCustomFooter"
      @click="refModalCustomFooter.hideModal()"
      variant="error"
    >
      Godkend
    </fds-button>
    <fds-button
      variant="secondary"
      @click="refModalCustomFooter.hideModal()"
      id="showModalCustomFooter"
    >
      Nej takker
    </fds-button>
  </template>
</fds-modal>

<fds-button @click="refModalCustomFooter.showModal()" id="showModalCustomFooter">
  Vis Footer Modal
</fds-button>

const refModalCustomFooter = ref(null);

`;
</script>
