<template>
  <div>
    <fds-icon-collection />
    <dev-header>
      <template #navigation>
        <dev-navigation></dev-navigation>
      </template>
    </dev-header>

    <div class="container page-container">
      <dev-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DKFDS from 'dkfds';
import DevHeader from '@/dev_components/DevHeader.vue';
import DevNavigation from '@/dev_components/DevNavigation.vue';
import DevContent from '@/dev_components/DevContent.vue';

DKFDS.init();

export default defineComponent({
  name: 'App',
  components: {
    DevContent,
    DevHeader,
    DevNavigation,
  },
});
</script>

<style lang="scss">
$font-path: '~dkfds/src/fonts/IBMPlexSans/';
$image-path: '~dkfds/src/img';
$site-image-path: '~dkfds/src/img';
$icons-folder-path: '~dkfds/src/img/svg-icons';
@import '../node_modules/dkfds/src/stylesheets/dkfds-virkdk';
@import 'assets/main.scss';
</style>