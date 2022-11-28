<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/header/#standard-header-med-navigation"
    >
      <fds-preview-item>
        <p>Nedestående er et eksempel navigation med standard komponenter og med overflow.</p>
        <p>
          Se også
          <router-link :to="{ name: 'anbefalingernavigation' }"
            >Eksempel på navigation med vue router</router-link
          >
        </p>
        <div class="navbar navbar-primary">
          <div class="navbar-inner container">
            <ul class="nav-primary" role="menu">
              <li role="none">
                <fds-nav-link href="/forside" title="Link title"> Forside </fds-nav-link>
              </li>
              <li class="current">
                <fds-overflow-menu header="Overflow menu eks">
                  <ul class="overflow-list">
                    <li class="active">
                      <a href="#"> Subsektion med en meget lang titel som går i flere linier </a>
                    </li>
                    <li>
                      <a href="#"> Subsektion title </a>
                    </li>
                    <li>
                      <a href="#"> Subsektion title </a>
                    </li>
                    <li>
                      <a href="#"> Subsektion title som også er forholdsvis lang </a>
                    </li>
                  </ul>
                </fds-overflow-menu>
              </li>
            </ul>
          </div>
        </div>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<div class="navbar navbar-primary">
<div class="navbar-inner container">
  <ul class="nav-primary" role="menu">
    <li role="none">
      <fds-nav-link href="/forside" title="Link title"> Forside </fds-nav-link>
    </li>
    <li class="current">
      <fds-overflow-menu header="Overflow menu eks">
        <ul class="overflow-list">
          <li class="active">
            <a href="#"> Subsektion med en meget lang titel som går i flere linier </a>
          </li>
          <li>
            <a href="#"> Subsektion title </a>
          </li>
          <li>
            <a href="#"> Subsektion title </a>
          </li>
          <li>
            <a href="#"> Subsektion title som også er forholdsvis lang </a>
          </li>
        </ul>
      </fds-overflow-menu>
    </li>
  </ul>
</div>
`;
</script>
