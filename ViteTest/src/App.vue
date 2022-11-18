<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const txtFornavn = ref("");
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <div>
    <fds-card header="Det virker">
      <p>Hvis du ser et Card - så virker det</p>
      <fds-formgroup>
        <fds-label> Fornavn </fds-label>
        <fds-tooltip class="ml-2"> Hjælpende <b>tekst</b> </fds-tooltip>
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="txtFornavn" />
        <fds-input-limit :modelValue="txtFornavn" :limit="10" />
      </fds-formgroup>
    </fds-card>
  </div>

  <RouterView />
  <fds-icon-collection />
</template>

<style lang="scss">
$font-path: "~dkfds/src/fonts/IBMPlexSans/";
$image-path: "~dkfds/src/img";
$site-image-path: "~dkfds/src/img";
$icons-folder-path: "~dkfds/src/img/svg-icons";
@import "../node_modules/dkfds/src/stylesheets/dkfds-virkdk";
@import "../node_modules/dkfds-vue3/src/assets/main.scss";
</style>
