<template>
  <section>
    <fds-component-preview header="Eksempel">
      <nav class="breadcrumbs container" aria-label="Brødkrumme">
        <ol class="breadcrumbs__list">
          <li class="breadcrumbs__list-item">
            <a class="breadcrumbs__link" href="#">Forside</a>
          </li>

          <li class="breadcrumbs__list-item">
            <a class="breadcrumbs__link" href="#">Komponenter</a>
          </li>

          <li class="breadcrumbs__list-item" aria-current="page">Brødkrumme</li>
        </ol>
      </nav>
      <template #description>
        <p class="italic">
          Benyt som angivet
          <a href="https://designsystem.dk/kode/komponenter/broedkrumme/">
            https://designsystem.dk/kode/komponenter/broedkrumme/</a
          >
        </p>
        <p>På sigt, vil denne indgår i layout komponenterne</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<nav class="breadcrumbs container" aria-label="Brødkrumme">
  <ol class="breadcrumbs__list">
      <li class="breadcrumbs__list-item">
          <a class="breadcrumbs__link" href="#">Forside</a>
      </li>

      <li class="breadcrumbs__list-item">
          <a class="breadcrumbs__link" href="#">Komponenter</a>
      </li>

      <li class="breadcrumbs__list-item" aria-current="page">Brødkrumme
      </li>
  </ol>
</nav>
`;
</script>
