<template>
  <section>
    <h3>Simpel brug</h3>

    <div class="w-percent-60">
      <fds-strukturerede-liste header="Navn"> Kirsten Mønster Jensen </fds-strukturerede-liste>
      <fds-strukturerede-liste header="E-mail"> kirstenjensen@eksempel.dk </fds-strukturerede-liste>
    </div>

    <h3>med rediger</h3>

    <div class="w-percent-60">
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
  </section>
</template>

<script setup lang="ts"></script>
