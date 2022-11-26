<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-validate
          :modelValue="user.name"
          :dirty="dirty"
          :validations="[hasContent, charactersMinLength(10)]"
          #default="{ isValidWaitForDirty, errorMessage }"
        >
          <fds-formgroup :is-valid="isValidWaitForDirty">
            <fds-label> Navn </fds-label>
            <fds-fejlmeddelelse v-if="!isValidWaitForDirty">
              {{ errorMessage }}
            </fds-fejlmeddelelse>
            <fds-hint>Indtast navn</fds-hint>
            <fds-input v-model="user.name" @dirty="dirty = $event"></fds-input>
          </fds-formgroup>
        </xfds-validate>

        <fds-pre header="object data" :json="user" />
      </fds-preview-item>

      <hr />
      <fds-preview-item>
        <p class="h4">Props</p>
        <table class="table table--compact">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>modelValue</code></td>
              <td><code>string, number, array</code></td>
              <td><code>null</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>validations</code></td>
              <td><code>Array'&lt;'(x?: unknown) => string | null'&gt;'</code></td>
              <td>
                <code>
                  [(input: unknown) => { if (!input) { return 'Indtast data'; } return null;
                  }]</code
                >
              </td>
              <td>Et array af valideringsmetoder</td>
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

        <p class="h4">Provide</p>
        <table class="table table--compact">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>provideIsValid</code></td>
              <td><code>boolean</code></td>
              <td><code>true</code></td>
              <td>Er alle validations valide</td>
            </tr>
            <tr>
              <td><code>provideErrorMessage</code></td>
              <td><code>string</code></td>
              <td>
                <code> ''</code>
              </td>
              <td>Først fundne fejl</td>
            </tr>
          </tbody>
        </table>

        <p>
          Det er også muligt at brug slot props, <code>#default="{ isValid, errorMessage }</code>
        </p>

        <fds-pre header="properties" :code="codeValidate" />

        <h2>Validerings metoder</h2>

        <p>Konceptet er at hvis der returneres en fejlbesked <code>string</code> så er der fejl</p>
        <p>returneres der <code>null</code> er modelValue valid</p>

        <fds-pre header="eks på valideringsmetode" :code="codeVal1" />
        <fds-pre header="eks på valideringsmetode" :code="codeVal2" />
      </fds-preview-item>

      <hr />
      <fds-preview-item>
        <p class="italic">Komponenten <code>xfds-validate</code> er en valideringswrapper.</p>
        <p class="italic">
          Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen
          validarings-komponent
        </p>
        <p class="italic">
          Komponenten <code>fds-input</code> kan udskiftes med egne komponenter eller eg:
          <code>fds-input-number</code> m.m.
        </p>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
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


  // Eller

  <xfds-validate
    :modelValue="user.name"
    :validations="[hasContent, charactersMinLength(10)]">
    <fds-formgroup> // lytter efter provideIsValid
      <fds-label> Navn </fds-label>
      <fds-fejlmeddelelse /> // lytter efter provideErrorMessage
      <fds-hint>Indtast navn</fds-hint>
      <fds-input v-model="user.name" />
    </fds-formgroup>
  </xfds-validate>
  `;

const code = `
  <xfds-validate
    :modelValue="user.name"
    :dirty="dirty"
    :validations="[hasContent, charactersMinLength(10)]"
    #default="{ isValid, errorMessage }"
  >
    <fds-formgroup :is-valid="isValid" >
      <fds-label> Navn </fds-label>
      <fds-fejlmeddelelse v-if="!isValid">
        {{ errorMessage }}
      </fds-fejlmeddelelse>
      <fds-hint>Indtast navn</fds-hint>
      <fds-input v-model="user.name" @dirty="dirty = $event"></fds-input>
    </fds-formgroup>
  </xfds-validate>
  `;
</script>
