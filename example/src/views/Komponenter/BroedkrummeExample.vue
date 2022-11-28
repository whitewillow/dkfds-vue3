<template>
  <section>
    <fds-alert variant="info" header="Under udvikling" closeable>
      Brødkrumme vil på sigt indgår som en del af <code>fds-header</code> layout
    </fds-alert>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/broedkrumme/">
      <fds-preview-item>
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
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
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
