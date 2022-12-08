<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/strukturerede-lister/">
      <fds-preview-item>
        <fds-strukturerede-liste header="Navn"> Kirsten Mønster Jensen </fds-strukturerede-liste>
        <fds-strukturerede-liste>
          <template #header>
            <fds-label class="d-flex justify-content-start"
              >E-mail <i class="ml-4 icon icon-email" /> </fds-label
          ></template>
          kirstenjensen@eksempel.dk
        </fds-strukturerede-liste>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
    <hr class="my-6" />
    <fds-preview header="Med link rediger">
      <fds-preview-item>
        <fds-strukturerede-liste header="Navn">
          Kirsten Mønster Jensen
          <template #button>
            <a href="#"> Redigér<span class="sr-only"> Kirsten Mønster Jensen </span> </a>
          </template>
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="E-mail">
          kirstenjensen@eksempel.dk
          <template #button>
            <a href="#"> Redigér<span class="sr-only"> Kirsten Mønster Jensen </span> </a>
          </template>
        </fds-strukturerede-liste>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeRediger"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-strukturerede-liste header="Navn"> Kirsten Mønster Jensen </fds-strukturerede-liste>
<fds-strukturerede-liste>
  <template #header>
    <fds-label class="d-flex justify-content-start"
      >E-mail <i class="ml-4 icon icon-email" /> </fds-label
  ></template>
  kirstenjensen@eksempel.dk
</fds-strukturerede-liste>
`;
const codeRediger = `
<fds-strukturerede-liste header="Navn">
  Kirsten Mønster Jensen
  <template #button>
    <a href="#"> Redigér<span class="sr-only"> Kirsten Mønster Jensen </span> </a>
  </template>
</fds-strukturerede-liste>
<fds-strukturerede-liste header="E-mail">
  kirstenjensen@eksempel.dk
  <template #button>
    <a href="#"> Redigér<span class="sr-only"> Kirsten Mønster Jensen </span> </a>
  </template>
</fds-strukturerede-liste>
`;
</script>
