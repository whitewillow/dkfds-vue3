<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <div class="row">
          <div class="col-4">
            <xfds-menu
              v-model="manuelSideNavList"
              @navigate="navigatedKey = $event" />
          </div>
          <div class="col">
            <fds-pre :json="{ navigatedKey }" />
            <fds-pre :json="manuelSideNavList" />
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
import { FdsNavigationItem } from 'dkfds-vue3-utils';
import { ref } from 'vue';

const code = `
<xfds-menu v-model="manuelSideNavList" @navigate="navigatedKey = $event" />
`;

const navigatedKey = ref('');
const manuelSideNavList = ref<Array<FdsNavigationItem>>([
  {
    key: 'suppe',
    title: 'Supper',
    hint: '',
    icon: 'done',
  },
  {
    key: 'dessert',
    title: 'Dessert',
    hint: 'Hjælpetekst',
    active: true,
    children: [
      {
        key: 'bananasplit',
        title: 'Bananasplit',
        hint: '',
      },
      {
        key: 'cheesecake',
        title: 'Cheesecake',
        hint: '',
        children: [
          {
            key: 'cheesechili',
            title: 'Cheese Chili',
            hint: '',
          },
          {
            key: 'cheeseapple',
            title: 'Cheese Apple',
            hint: '',
          },
        ],
      },
    ],
  },
  {
    key: 'kod',
    title: 'Kød',
    hint: '',
    children: [
      {
        key: 'chicken',
        title: 'Chicken',
        hint: '',
      },
      {
        key: 'beef',
        title: 'Beef',
        hint: '',
      },
    ],
  },
  {
    key: 'fisk',
    title: 'Fisk',
    hint: '',
    disabled: true,
  },
] as unknown as FdsNavigationItem[]);
</script>
