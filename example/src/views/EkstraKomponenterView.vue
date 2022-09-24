<template>
  <section>
    <div class="container page-container">
      <fds-sidenavigation-list v-model="sideTabs">
        <template v-slot:[tab.key] v-for="tab of sideTabs" :key="tab.key">
          <div class="subheading">Ektra Komponenter</div>
          <h1>{{ tab.title }}</h1>
          <component :is="`form-${tab.key}-example`" />
        </template>
      </fds-sidenavigation-list>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
// <component :is="`${tab.key}-example`" />
const sideTabs = [
  {
    key: 'input',
    title: 'Tekstfelt',
  },
  {
    key: 'number',
    title: 'Nummer',
  },
  {
    key: 'textarea',
    title: 'Tekstområde',
  },
  {
    key: 'dropdown',
    title: 'Dropdown-menu',
  },
  {
    key: 'radio',
    title: 'Radio',
  },
  {
    key: 'checkboxlist',
    title: 'Tjekbox liste',
  },
  {
    key: 'group',
    title: 'Form gruppe',
  },
  {
    key: 'validate',
    title: 'Validate',
  },
] as FdsNavigationItem[];
</script>
<style lang="scss" scoped></style>
