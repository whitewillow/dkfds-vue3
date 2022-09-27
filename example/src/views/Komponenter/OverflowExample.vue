<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-overflow-menu header="Overflow menu">
        <ul class="overflow-list">
          <li><button>Option 1</button></li>
          <li><button>Option 2</button></li>
          <li><a href="#"> Option 3 as link </a></li>
          <li><button>Option 4 is longer text</button></li>
        </ul>
      </fds-overflow-menu>

      <template #description>
        <p class="italic"><code>fds-overflow-menu</code> er wrapper rundt om en liste</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Eksempel m. ikon og venstre stillet">
      <fds-overflow-menu
        header="Overflow menu eks"
        class="overflow-menu--open-left"
        icon="arrow-drop-down"
      >
        <ul class="overflow-list">
          <li><button>Option 1</button></li>
          <li><button>Option 2</button></li>
          <li><a href="#"> Option 3 as link </a></li>
          <li><button>Option 4 is longer text</button></li>
        </ul>
      </fds-overflow-menu>

      <template #description>
        <p class="italic"><code>fds-overflow-menu</code> er wrapper rundt om en liste</p>
      </template>
      <template #code>
        <pre v-text="codeIcon"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-overflow-menu
  header="Overflow menu eks">
  <ul class="overflow-list">
    <li><button>Option 1</button></li>
    <li><button>Option 2</button></li>
    <li><a href="#">
      Option 3 as link
    </a></li>
    <li><button>Option 4 is longer text</button></li>
  </ul>
</fds-overflow-menu>
`;

const codeIcon = `
<fds-overflow-menu
  header="Overflow menu eks"
  class="overflow-menu--open-left"
  icon="arrow-drop-down"
>
  <ul class="overflow-list">
    <li><button>Option 1</button></li>
    <li><button>Option 2</button></li>
    <li><a href="#"> Option 3 as link </a></li>
    <li><button>Option 4 is longer text</button></li>
  </ul>
</fds-overflow-menu>
`;
</script>
