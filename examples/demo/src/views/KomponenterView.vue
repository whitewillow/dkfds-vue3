<template>
  <section>
    <div class="container page-container">
      <div class="row">
        <aside class="col-12 col-lg-3 sidebar-col">
          <nav>
            <komponent-menu @current-item="currentItem = $event" />
          </nav>
        </aside>
        <div class="col-12 col-lg-9">
          <div class="subheading">
            Komponenter
          </div>
          <h1
            v-if="currentItem"
            :id="currentItem.key">
            {{ currentItem.title }}
          </h1>
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/utils';
import { ref } from 'vue';

const currentItem = ref<FdsNavigationItem | undefined>();
</script>
