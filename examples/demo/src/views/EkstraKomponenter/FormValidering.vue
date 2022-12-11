<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-validate
          :modelValue="user.name"
          @validated="validator.addItem($event)"
          :validations="[hasContent, charactersMinLength(10)]"
        >
          <fds-formgroup>
            <fds-label> Navn </fds-label>
            <fds-fejlmeddelelse />
            <fds-hint>Indtast navn</fds-hint>
            <fds-input v-model="user.name" />
          </fds-formgroup>
        </xfds-validate>

        <fds-pre header="object data" :json="{ navn: user.name }" />

        <fds-pre header="@validated" :json="{ validatedList: validator.validatorItems }" />
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
        <p>Se evt nedestående eksempler for andre måde at opnå det samme</p>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

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
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>null (auto id)</code></td>
              <td></td>
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
              <th>Returns</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@validated</code></td>
              <td>
                ValidatorItem:
                <code>
                  { key: string; type: string; reasons?: string[]; valid: boolean; dirty: boolean; }
                </code>
              </td>
              <td>
                Hver gang input valideres returneres et ValidatorItem object. Der indeholder den
                fulde sandhed
              </td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slot #default binds</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>isValidWaitForDirty</code></td>
              <td>Er form valid - Bliver kun aktiveret efter underligge input/select er blur</td>
            </tr>
            <tr>
              <td><code>isValid</code></td>
              <td>Er form valid</td>
            </tr>
            <tr>
              <td><code>errorMessage</code></td>
              <td>Først fundne fejlbesked</td>
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
      </fds-preview-item>

      <hr />
      <fds-preview-item>
        <h2>Validerings metoder</h2>

        <p>Konceptet er at hvis der returneres en fejlbesked <code>string</code> så er der fejl</p>
        <p>returneres der <code>null</code> er modelValue valid</p>

        <fds-pre header="eks på valideringsmetode" :code="codeVal1" />
        <fds-pre header="eks på valideringsmetode" :code="codeVal2" />
      </fds-preview-item>

      <fds-preview-code header="Andre eksempler">
        <pre v-text="codeAlternatives"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { charactersMinLength, hasContent } from "dkfds-vue3-utils";
import ValidatorService from "dkfds-vue3-extra/src/service/validator.service";

const validator = ref(new ValidatorService());

const user = ref({
  name: "",
  adress: "",
  city: "",
  search: "",
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

const code = `

<xfds-validate
  :modelValue="user.name"
  @validated="validator.addItem($event)"
  :validations="[hasContent, charactersMinLength(10)]"
>
  <fds-formgroup>
    <fds-label> Navn </fds-label>
    <fds-fejlmeddelelse />
    <fds-hint>Indtast navn</fds-hint>
    <fds-input v-model="user.name" />
  </fds-formgroup>
</xfds-validate>

`;

const codeAlternatives = `
<xfds-validate
  :modelValue="user.name"
  :validations="[hasContent, charactersMinLength(10)]">
  <xfds-form-input
    label="Navn"
    hint="Indtast navn"
    tooltip="Input tooltip"
    v-model="user.name"
  />
</xfds-validate>



<xfds-validate :modelValue="user.name" :validations="[hasContent, charactersMinLength(10)]">
  <fds-formgroup>
    <fds-label> Navn </fds-label>
    <fds-fejlmeddelelse />
    <fds-hint>Indtast navn</fds-hint>
    <fds-input v-model="user.name" />
  </fds-formgroup>
</xfds-validate>


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
`;

const codeVal = `
import ValidatorService, { ValidatorItem } from '@/service/validator.service';


const validator = ref(new ValidatorService());

`;
</script>
