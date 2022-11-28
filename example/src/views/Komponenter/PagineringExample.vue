<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/paginering/">
      <fds-preview-item>
        <fds-paginering
          :list="largeArray"
          @filteredPage="filteredPagingList = $event"
          @skip="skipPaging = $event"
        />

        <fds-pre header="filter list" :json="{ skipPaging }" />

        <fds-pre header="filter list" :json="{ filteredPagingList }" />

        <h2>Properties</h2>
        <div class="col-10">
          <fds-strukturerede-liste header="modelValue">
            <template #header>
              <fds-label class="d-block">list</fds-label>
              <code>Array[any]</code>
            </template>
            Tager imod en et vilkårligt array
          </fds-strukturerede-liste>
          <fds-strukturerede-liste header="validations">
            <template #header>
              <fds-label class="d-block">skip</fds-label>
              <code>Number = 0</code>
            </template>
            Antal elementer der skal skippes
          </fds-strukturerede-liste>
          <fds-strukturerede-liste header="dirty">
            <template #header>
              <fds-label class="d-block">pageSize</fds-label>
              <code>Number = 10</code>
            </template>
            Antal elementer per side, default 10
          </fds-strukturerede-liste>
        </div>

        <h2>Events</h2>
        <div class="col-10">
          <fds-strukturerede-liste header="modelValue">
            <template #header>
              <fds-label class="d-block">@filteredPage</fds-label>
              <code>Array[any]</code>
            </template>
            Filtreret liste, med nuværende side elementer
          </fds-strukturerede-liste>
          <fds-strukturerede-liste header="validations">
            <template #header>
              <fds-label class="d-block">@skip</fds-label>
              <code>Number</code>
            </template>
            Antal elementer der er skippet
          </fds-strukturerede-liste>
        </div>
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
