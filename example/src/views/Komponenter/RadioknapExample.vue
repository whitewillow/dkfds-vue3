<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup>
        <fds-label>Vælg Genre</fds-label>

        <fds-radio-group v-model="radioValueKerne">
          <fds-radio-item value="metal"> Metal </fds-radio-item>
          <fds-radio-item value="pop">
            Pop
            <template #content>
              Pop er som musikgenre den mest udbredte musikstilart i moderne tid - væsentlig mere
              udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "populær"
              (eng. "popular").
            </template>
          </fds-radio-item>
          <fds-radio-item value="klassisk"> Klassist </fds-radio-item>
        </fds-radio-group>
      </fds-formgroup>

      <fds-pre :json="{ radioValueKerne }" />

      <template #description>
        <p class="italic">Det er muligt at udfolde valgte radio og angive eget indhold</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const radioValueKerne = ref('');

const code = `
<fds-formgroup>
  <fds-label>Vælg Genre</fds-label>

  <fds-radio-group v-model="radioValueKerne">
    <fds-radio-item value="metal"> Metal </fds-radio-item>
    <fds-radio-item value="pop">
      Pop
      <template #content>
        Pop er som musikgenre den mest udbredte musikstilart i moderne tid - væsentlig mere
        udbredt end fx rock, jazz og folkemusik. Navnet er en afledning af ordet "populær"
        (eng. "popular").
      </template>
    </fds-radio-item>
    <fds-radio-item value="klassisk"> Klassist </fds-radio-item>
  </fds-radio-group>
</fds-formgroup>
`;
</script>
