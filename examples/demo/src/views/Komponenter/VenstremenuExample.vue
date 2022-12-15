<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/venstremenu/">
      <fds-preview-item>
        <div class="row">
          <div class="col-4">
            <fds-menu>
              <fds-menu-item
                id="alpha"
                icon="done"
                @navigate="idClickedExample = $event">
                Alpha
              </fds-menu-item>
              <fds-menu-item
                id="beta"
                active
                @navigate="idClickedExample = $event">
                Beta
              </fds-menu-item>
            </fds-menu>
          </div>
          <div class="col">
            <fds-pre :json="{ idClickedExample }" />
          </div>
        </div>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Submenu">
      <fds-preview-item>
        <div class="row">
          <div class="col-4">
            <fds-menu>
              <fds-menu-item
                id="alpha"
                icon="done"
                @navigate="submenuClickedExample = $event">
                Alpha
              </fds-menu-item>
              <fds-menu-item
                id="beta"
                active
                @navigate="submenuClickedExample = $event">
                Beta
                <template #submenu>
                  <fds-menu variant="submenu">
                    <fds-menu-item
                      id="beta/1"
                      @navigate="submenuClickedExample = $event">
                      Beta - En
                    </fds-menu-item>
                    <fds-menu-item
                      id="beta/2"
                      active
                      @navigate="submenuClickedExample = $event">
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
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code2"></pre>
      </fds-preview-code>
    </fds-preview>
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
