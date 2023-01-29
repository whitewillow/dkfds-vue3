<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/paginering/">
      <fds-preview-item>
        <fds-paginering
          :list="largeArray"
          @filtered-page="filteredPagingList = $event"
          @skip="skipPaging = $event"
        />

        <fds-pre
          header="filter list"
          :json="{ skipPaging }" />

        <fds-pre
          header="filter list"
          :json="{ filteredPagingList }" />
      </fds-preview-item>
      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>list</code></td>
              <td><code>Array[any]</code></td>
              <td><code>null</code></td>
              <td>Tager imod en et vilkårligt array</td>
            </tr>
            <tr>
              <td><code>skip</code></td>
              <td><code>Number</code></td>
              <td>
                <code> 0</code>
              </td>
              <td>Antal elementer der skal skippes</td>
            </tr>
            <tr>
              <td><code>pageSize</code></td>
              <td><code>Number</code></td>
              <td><code>10</code></td>
              <td>Antal elementer per side, default 10</td>
            </tr>
            <tr>
              <td><code>dirty</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td>Om feltet er blevet berørt</td>
            </tr>
            <tr>
              <td><code>useAutoDirty</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td>Om underliggende input eller select felt er blevet berørt (blur event)</td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Events</th>
              <th>return</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@filteredPage</code></td>
              <td><code>Array[any]</code></td>
              <td>Filtreret liste, med nuværende side elementer</td>
            </tr>
            <tr>
              <td><code>@skip</code></td>
              <td><code>Number</code></td>
              <td>Antal elementer der er skippet</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const filteredPagingList = ref<Array<{ id: string; indhold: string }>>([]);
const skipPaging = ref(0);

const largeArray = computed((): Array<{ id: string; indhold: string }> => {
  const totalPages = 200;
  return [...Array(totalPages).keys()].map((i) => ({
    id: (i + 1).toString(),
    indhold: `Data${i}`,
  }));
});

const code = `
<fds-paginering
  :list="largeArray"
  @filteredPage="filteredPagingList = $event"
  @skip="skipPaging = $event"
/>
`;
</script>
