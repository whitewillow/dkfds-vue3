<template>
  <section>
    <fds-component-preview header="Tekstfelter">
      <xfds-validate
        :modelValue="user.name"
        :dirty="dirty"
        :validations="[hasContent, charactersMinLength(10)]"
        #default="{ isValid, errorMessage }"
      >
        <xfds-formgroup :is-valid="isValid" #default="{ formid }">
          <fds-label :id="formid"> Navn </fds-label>
          <fds-fejlmeddelelse v-if="!isValid">
            {{ errorMessage }}
          </fds-fejlmeddelelse>
          <fds-hint>Indtast navn</fds-hint>
          <fds-input v-model="user.name" :id="formid" @dirty="dirty = $event"></fds-input>
        </xfds-formgroup>
      </xfds-validate>

      <fds-pre :json="user" />

      <h2>Validering komponent</h2>
      <div class="col-10">
        <fds-strukturerede-liste header="modelValue">
          <template #header>
            <fds-label class="d-block">modelValue</fds-label>
            <code>string, number, array</code>
          </template>
          tager imod <code>string, number, array</code>
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="validations">
          <template #header>
            <fds-label class="d-block">validations</fds-label>
            <code>Array'&lt;'(x?: unknown) => string | null'&gt;'</code>
          </template>
          et array af valideringsmetoder
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header="dirty">
          <template #header>
            <fds-label class="d-block">dirty</fds-label>
            <code>Boolean</code>
          </template>
          Om feltet er blevet berørt
        </fds-strukturerede-liste>
        <fds-strukturerede-liste header='#default="{ isValid, errorMessage }"'>
          Eksponering af resultatet, om modelValue er validt <code>isValid</code> og evt. tilhørende
          fejlbesked <code>errorMessage</code>
        </fds-strukturerede-liste>
      </div>
      <fds-pre :code="codeValidate" />

      <h2>Validerings metoder</h2>

      <p>Konceptet er at hvis der returneres en fejlbesked <code>string</code> så er der fejl</p>
      <p>returneres der <code>null</code> er modelValue valid</p>

      <fds-pre :code="codeVal1" />
      <fds-pre :code="codeVal2" />

      <template #description>
        <p class="italic">Komponented <code>xfds-validate</code> er en valideringswrapper.</p>
        <p class="italic">
          Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen
          validarings-komponent
        </p>
        <p class="italic">
          Komponented <code>fds-input</code> kan udskiftes med egne komponenter eller eg:
          <code>fds-input-number</code> m.m.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { charactersMinLength, hasContent } from 'dkfds-vue3/src/utils/validate-utils';

const user = ref({
  name: '',
  adress: '',
  city: '',
  search: '',
});
const dirty = ref(false);

const codeVal1 = `
export function charactersMinLength (length: number): (args: string) => string | null {
  return (x: string) => 
    (x.length >= length ? null : \`Feltet må ikke være kortere end \${length} tegn.\`);
}`;

const codeVal2 = `
export function hasContent (x: string): string | null {
  return x !== null && x.replace(/\\s+/g, '').length > 0 ? null : 'Feltet må ikke være tomt.';
}`;

const codeValidate = `
<xfds-validate
  :modelValue="user.name"
  :dirty="dirty"
  :validations="[hasContent, charactersMinLength(10)]"
  #default="{ isValid, errorMessage }"
>
...
</xfds-validate>
`;

const code = `
<xfds-validate
  :modelValue="user.name"
  :dirty="dirty"
  :validations="[hasContent, charactersMinLength(10)]"
  #default="{ isValid, errorMessage }"
>
  <xfds-formgroup :is-valid="isValid" #default="{ formid }">
    <fds-label :id="formid"> Navn </fds-label>
    <fds-fejlmeddelelse v-if="!isValid">
      {{ errorMessage }}
    </fds-fejlmeddelelse>
    <fds-hint>Indtast navn</fds-hint>
    <fds-input v-model="user.name" :id="formid" @dirty="dirty = $event"></fds-input>
  </xfds-formgroup>
</xfds-validate>
`;
</script>
