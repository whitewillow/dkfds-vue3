<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/overflowmenu/">
      <fds-preview-item>
        <fds-overflow-menu header="Overflow menu">
          <ul class="overflow-list">
            <li><button>Option 1</button></li>
            <li><button>Option 2</button></li>
            <li><a href="#"> Option 3 as link </a></li>
            <li><button>Option 4 is longer text</button></li>
          </ul>
        </fds-overflow-menu>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Eksempel m. ikon og venstre stillet">
      <fds-preview-item>
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
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeIcon"></pre>
      </fds-preview-code>
    </fds-preview>
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
