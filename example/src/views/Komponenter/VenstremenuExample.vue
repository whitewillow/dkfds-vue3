<template>
  <section>
    <fds-component-preview header="Eksempel">
      <div class="row">
        <div class="col-4">
          <fds-menu>
            <fds-menu-item icon="done" id="alpha" @navigate="idClickedExample = $event">
              Alpha
            </fds-menu-item>
            <fds-menu-item id="beta" @navigate="idClickedExample = $event" active>
              Beta
            </fds-menu-item>
          </fds-menu>
        </div>
        <div class="col">
          <fds-pre :json="{ idClickedExample }" />
        </div>
      </div>

      <template #description>
        <p class="italic">Håndtering af menu</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Submenu">
      <div class="row">
        <div class="col-4">
          <fds-menu>
            <fds-menu-item icon="done" id="alpha" @navigate="submenuClickedExample = $event">
              Alpha
            </fds-menu-item>
            <fds-menu-item id="beta" @navigate="submenuClickedExample = $event" active>
              Beta
              <template #submenu>
                <fds-menu variant="submenu">
                  <fds-menu-item id="beta/1" @navigate="submenuClickedExample = $event">
                    Beta - En
                  </fds-menu-item>
                  <fds-menu-item id="beta/2" @navigate="submenuClickedExample = $event" active>
                    Beta - To
                  </fds-menu-item>
                </fds-menu>
              </template>
            </fds-menu-item>
          </fds-menu>
        </div>
        <div class="col">
          <fds-pre :json="{ submenuClickedExample }" />
        </div>
      </div>

      <template #description>
        <p class="italic">Håndtering af menu med submenu</p>
      </template>
      <template #code>
        <pre v-text="code2"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const idClickedExample = ref('');
const code = `
<fds-menu>
  <fds-menu-item icon="done" id="alpha" @navigate="idClickedExample = $event">
    Alpha
  </fds-menu-item>
  <fds-menu-item id="beta" @navigate="idClickedExample = $event" active>
    Beta
  </fds-menu-item>
</fds-menu>
`;

const submenuClickedExample = ref('');
const code2 = `
<fds-menu>
  <fds-menu-item icon="done" id="alpha" @navigate="submenuClickedExample = $event">
    Alpha
  </fds-menu-item>
  <fds-menu-item id="beta" @navigate="submenuClickedExample = $event" active>
    Beta
    <template #submenu>
      <fds-menu variant="submenu">
        <fds-menu-item id="beta/1" @navigate="submenuClickedExample = $event">
          Beta - En
        </fds-menu-item>
        <fds-menu-item id="beta/2" @navigate="submenuClickedExample = $event" active>
          Beta - To
        </fds-menu-item>
      </fds-menu>
    </template>
  </fds-menu-item>
</fds-menu>
`;
</script>
