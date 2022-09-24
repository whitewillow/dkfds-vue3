<template>
  <section>
    <div class="container page-container">
      <fds-sidenavigation-list v-model="sideTabs">
        <template v-slot:[tab.key] v-for="tab of sideTabs" :key="tab.key">
          <div class="subheading">Ektra Komponenter</div>
          <h1>{{ tab.title }}</h1>
          <component :is="`${tab.key}-example`" />
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
    key: 'form-input',
    title: 'Tekstfelt',
  },
  {
    key: 'form-number',
    title: 'Nummer',
  },
  {
    key: 'form-textarea',
    title: 'Tekstområde',
  },
  {
    key: 'form-dropdown',
    title: 'Dropdown-menu',
  },
  {
    key: 'form-radio',
    title: 'Radio',
  },
  {
    key: 'form-checkboxlist',
    title: 'Tjekbox liste',
  },
  {
    key: 'form-group',
    title: 'Form gruppe',
  },
  {
    key: 'form-validate',
    title: 'Validate',
  },
  {
    key: 'progressbar',
    title: 'Progressbar',
  },
] as FdsNavigationItem[];
</script>
<style lang="scss" scoped></style>
