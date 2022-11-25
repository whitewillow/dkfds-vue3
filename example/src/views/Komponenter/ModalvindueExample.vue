<template>
  <section>
    <fds-preview header="Standard modal">
      <fds-preview-item>
        <fds-modal
          :show="showModal"
          header="Min Modal"
          focusId="modalButton"
          @close="showModal = false"
        >
          <p>Eksempel på et modal vindue</p>
          <p>
            Det er muligt at skifte tekster på nedestående knapper
            <code>okTekst, annullerTekst</code>
          </p>
          <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>
          <p>Hvis <code>focusId</code> er sat, sætte denne i focus efter luk</p>
        </fds-modal>
        <fds-pre :json="{ showModal }" />

        <fds-button @click="showModal = !showModal" id="modalButton"> Vis Modal </fds-button>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Modal med egen footer">
      <fds-preview-item>
        <fds-modal
          :show="showModalCustomFooter"
          header="Egen footer modal"
          focusId="showModalCustomFooter"
          @close="showModalCustomFooter = false"
        >
          <p>Eksempel på et modal vindue</p>
          <p>
            Det er muligt at skifte tekster på nedestående knapper
            <code>okTekst, annullerTekst</code>
          </p>
          <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>
          <p>Hvis <code>focusId</code> er sat, sætte denne i focus efter luk</p>
          <template #footer>
            <fds-button id="showModalCustomFooter" variant="error"> Godkend </fds-button>
            <fds-button
              variant="secondary"
              @click="showModalCustomFooter = !showModalCustomFooter"
              id="showModalCustomFooter"
            >
              Nej takker
            </fds-button>
          </template>
        </fds-modal>
        <fds-pre :json="{ showModalCustomFooter }" />
        <fds-button
          @click="showModalCustomFooter = !showModalCustomFooter"
          id="showModalCustomFooter"
        >
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

const showModal = ref(false);
const showModalCustomFooter = ref(false);
const code = `
<fds-modal
  :show="showModal"
  header="Min Modal"
  focusId="modalButton"
  @close="showModal = false"
>
  <p>Eksempel på et modal vindue</p>
  <p>
    Det er muligt at skifte tekster på nedestående knapper <code>okTekst, annullerTekst</code>
  </p>
  <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>
  <p>Hvis <code>focusId</code> er sat, sætte denne i focus efter luk</p>
</fds-modal>

<fds-button @click="showModal = !showModal" id="modalButton"> Vis Modal </fds-button>

const showModal = ref(false);

`;

const codeFooter = `
<fds-modal
  :show="showModalCustomFooter"
  header="Egen footer modal"
  focusId="showModalCustomFooter"
  @close="showModalCustomFooter = false"
>
  <p>Eksempel på et modal vindue</p>
  <p>
    Det er muligt at skifte tekster på nedestående knapper <code>okTekst, annullerTekst</code>
  </p>
  <p>Events <code>ok, close</code> emittes ved hhv klik på ok og annuller/luk knap</p>
  <p>Hvis <code>focusId</code> er sat, sætte denne i focus efter luk</p>
  <template #footer>
    <fds-button id="showModalCustomFooter" variant="error"> Godkend </fds-button>
    <fds-button
      variant="secondary"
      @click="showModalCustomFooter = !showModalCustomFooter"
      id="showModalCustomFooter"
    >
      Nej takker
    </fds-button>
  </template>
</fds-modal>

<fds-button
  @click="showModalCustomFooter = !showModalCustomFooter"
  id="showModalCustomFooter"
>
  Vis Footer Modal
</fds-button>

const showModalCustomFooter = ref(false);

`;
</script>
