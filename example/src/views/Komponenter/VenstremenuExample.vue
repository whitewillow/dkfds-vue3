<template>
  <section>
    <h3>Manuel venstremenu</h3>
    <div class="row">
      <div class="col-4">
        <fds-venstremenu v-model="manuelSideNavList" @navigate="manuelSideNavKey = $event" />
      </div>
      <div class="col">
        <fds-pre :json="{ currentKey: manuelSideNavKey }" />
        <fds-pre :json="manuelSideNavList" />
      </div>
    </div>

    <hr class="my-6" />
    <h3>Venstremenu automatiseret</h3>
    <p class="font-lead">med for loop og dynamisk navngivning af slot name</p>
    <fds-venstremenu-side v-model="sideTabs" showIndex>
      <template v-slot:[tab.key] v-for="tab of sideTabs" :key="tab.key">
        <h2>{{ tab.title }}</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
    </fds-venstremenu-side>

    <hr class="my-6" />

    <h3>Venstremenu automatiseret</h3>
    <fds-venstremenu-side v-model="sideTabs">
      <template v-slot:[`suppe`]>
        <h2>Suppe</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
      <template v-slot:[`dessert`]>
        <h2>Dessert</h2>
        <p>
          Autogeneret faner ud fra liste, hvor man kan lave tilhørende template refereret med "key"

          <fds-pre>
            {{`${`<template v-slot:[\`dessert\`]> Mit Indhold </template>
            `}`}}
          </fds-pre>
        </p>
      </template>
      <template v-slot:[`kod`]>
        <h2>Kød</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
      <template v-slot:[`fisk`]>
        <h2>Fisk</h2>
        <p>
          Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue, ac lacinia nisl
          dolor et augue. Ut lorem massa, consequat ut orci sit amet, maximus dictum orci. Mauris
          pharetra nunc sed augue bibendum semper. Donec in cursus orci. Ut sed posuere elit, quis
          semper turpis. Curabitur malesuada nisi nec nisl facilisis ornare. Praesent vestibulum,
          velit id sollicitudin auctor, ipsum lacus auctor nisl, in lacinia sem massa eget urna.
        </p>
      </template>
    </fds-venstremenu-side>
  </section>
</template>

<script setup lang="ts">
import { FdsNavigationItem } from 'dkfds-vue3/src/model/fds.model';
import { ref } from 'vue';

const manuelSideNavKey = ref('');
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

const sideTabs = ref<FdsNavigationItem[]>([
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
    icon: 'home',
    active: true,
  },
  {
    key: 'kod',
    title: 'Kød',
    hint: '',
  },
  {
    key: 'fisk',
    title: 'Fisk',
    hint: '',
    disabled: true,
  },
] as unknown as FdsNavigationItem[]);
</script>
