<template>
  <section>
    <fds-component-preview header="Eksempel">
      <div>
        <fds-strukturerede-liste header="Navn"> Kirsten Mønster Jensen </fds-strukturerede-liste>
        <fds-strukturerede-liste header="E-mail">
          kirstenjensen@eksempel.dk
        </fds-strukturerede-liste>
      </div>

      <template #description>
        <p class="italic">Simpel måde at vise overskrift og værdi</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
    <hr class="my-6" />
    <fds-component-preview header="Med link rediger">
      <div>
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
      </div>

      <template #description>
        <p class="italic">Simpel måde at vise overskrift og værdi</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<div class="w-percent-60">
  <fds-strukturerede-liste header="Navn"> Kirsten Mønster Jensen </fds-strukturerede-liste>
  <fds-strukturerede-liste header="E-mail"> kirstenjensen@eksempel.dk </fds-strukturerede-liste>
</div>
`;
</script>
