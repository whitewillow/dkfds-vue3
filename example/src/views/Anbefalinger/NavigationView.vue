<template>
  <section>
    <fds-component-preview header="Udvidet Navigationslink til header">
      <p>
        Nedestående er et eksempel på at udvide eksisterende komponenter, til at gøre brug af
        vue-router (da DKFDS-Vue3 - ikke selv inkludere vue router)
      </p>
      <div class="navbar navbar-primary">
        <div class="navbar-inner container">
          <ul class="nav-primary" role="menu">
            <fds-xtnd-nav-item-route
              toName="forside"
              :current-route-name="$route.name?.toString()"
              linkTitle="Link title"
            >
              Forside
            </fds-xtnd-nav-item-route>
            <fds-xtnd-nav-item-route
              toName="anbefalingernavigation"
              :current-route-name="$route.name?.toString()"
              linkTitle="Link title"
            >
              Denne side
            </fds-xtnd-nav-item-route>
          </ul>
        </div>
      </div>

      <fds-pre :code="code" :header="'Brug af komponent'" />

      <template #description>
        <p class="italic">
          Komponenten <code>fds-xtnd-nav-item-route</code> gør det nemmer at auto markere om siden
          er aktiv
        </p>
        <p class="italic">Se nedestående kode for komponenten</p>
      </template>
      <template #code>
        <pre v-text="codeComponent"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<div class="navbar navbar-primary">
    <div class="navbar-inner container">
        <ul class="nav-primary" role="menu">
            <fds-nav-item-route
                toName="forside"
                :current-route-name="$route.name?.toString()"
                linkTitle="Link title"
            >
                Forside
            </fds-nav-item-route>
            <fds-nav-item-route
                toName="anbefalingernavigation"
                :current-route-name="$route.name?.toString()"
                linkTitle="Link title"
            >
                Denne side
            </fds-nav-item-route>
        </ul>
    </div>
</div>`;

const codeComponent = `
// fds-xtnd-nav-item-route.vue

<template>
  <router-link :to="{ name: toName }" custom v-slot="{ href, navigate, isActive }">
    <li role="none" :class="[{ current: isActive || isPartOfMenu(toName) }]">
      <fds-nav-link :href="href" :title="linkTitle" :disabled="isDisabled" @click="navigate">
        <slot />
      </fds-nav-link>
    </li>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  toName: {
    type: String,
    default: '',
  },
  currentRouteName: {
    type: String,
    default: null,
  },
  linkTitle: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
  },
});

const isPartOfMenu = (name: string): boolean => {
  if (route) {
    const [parent] = route.matched;
    if (parent && parent.name === name) {
      return true;
    }
  }
  if (props.currentRouteName) {
    return props.currentRouteName === name;
  }
  return false;
};
<${'/'}script>`;
</script>
