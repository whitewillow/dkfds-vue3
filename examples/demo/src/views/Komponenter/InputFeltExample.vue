<template>
  <section>
    <fds-preview
      header="Tekstfelt"
      href="https://designsystem.dk/komponenter/inputfelter/">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Fornavn </fds-label>
          <fds-tooltip class="ml-2">
            Hjælpende <b>tekst</b>
          </fds-tooltip>
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-input v-model="txtFornavn" />
        </fds-formgroup>

        <fds-pre
          header="v-model"
          :json="{ txtFornavn }" />
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
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>null (autoid)</code></td>
              <td>Lytter efter injected formid</td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>placeholder</code></td>
              <td><code>string</code></td>
              <td><code>'text'</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>prefix</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td>Indikator/tydeliggørelse af data i starten - eg. stk, kr, m.m.</td>
            </tr>
            <tr>
              <td><code>suffix</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td>Indikator/tydeliggørelse af data i enden - eg. stk, kr, m.m.</td>
            </tr>
            <tr>
              <td><code>readonly</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Events</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>@dirty</code></td>
              <td>Om input feltet er blevet berørt</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <fds-preview header="Karakterbegrænsning">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Efternavn </fds-label>
          <fds-tooltip class="ml-2">
            Hjælpende <b>tekst</b>
          </fds-tooltip>
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-input v-model="txtEfternavn"></fds-input>
          <fds-input-limit
            :model-value="txtEfternavn"
            :limit="20" />
        </fds-formgroup>

        <fds-pre
          header="v-model"
          :json="{ txtEfternavn }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeLimit"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Prefix og Suffix">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label id="prefix">
            Med prefix
          </fds-label>
          <fds-input
            id="prefix"
            v-model="txtPre"
            prefix="prefix"></fds-input>
        </fds-formgroup>

        <fds-formgroup>
          <fds-label id="txtSuffix">
            Med suffix
          </fds-label>
          <fds-input
            id="txtSuffix"
            v-model="txtSuffix"
            suffix="suffix"></fds-input>
        </fds-formgroup>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codePrefixSuffix"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Nummer tekstfelt">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label id="noBeloeb">
            Tal/Beløb
          </fds-label>
          <fds-input-number
            id="noBeloeb"
            v-model="noBeloeb"
            input-class="input-width-xs"
            suffix="kr."
          ></fds-input-number>
        </fds-formgroup>

        <fds-pre
          header="v-model"
          :json="{ noBeloeb }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codePrefixSuffix"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Readonly">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Fornavn </fds-label>
          <fds-tooltip class="ml-2">
            Hjælpende <b>tekst</b>
          </fds-tooltip>
          <fds-input
            v-model="txtFornavn"
            readonly></fds-input>
        </fds-formgroup>

        <fds-pre
          header="v-model"
          :json="{ txtFornavn }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="readonly"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Søg knap">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label id="searchtxt">
            Input med knap ikon
          </fds-label>
          <fds-input
            id="searchtxt"
            v-model="txtSearch"
            placeholder="Søg efter...">
            <template #button>
              <button class="button button-search">
                <svg
                  class="icon-svg m-0"
                  aria-hidden="true">
                  <use xlink:href="#search"></use></svg
                ><span class="sr-only">
                  Søg
                </span>
              </button>
            </template>
          </fds-input>
        </fds-formgroup>

        <fds-formgroup>
          <fds-label id="searchbtn">
            Input med knap tekst
          </fds-label>
          <fds-input
            id="searchbtn"
            v-model="txtSearch"
            placeholder="Søg efter...">
            <template #button>
              <button class="button button-search">
                Søg
              </button>
            </template>
          </fds-input>
        </fds-formgroup>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeInputKnap"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const txtFornavn = ref('Anders');
const txtEfternavn = ref('');
const txtPre = ref('');
const txtSuffix = ref('');
const txtSearch = ref('');
const noBeloeb = ref(0);

const code = `
<fds-input v-model="txtFornavn" />
`;

const codeLimit = `
<fds-formgroup>
  <fds-label> Efternavn </fds-label>
  <fds-tooltip class="ml-2"> Hjælpende <b>tekst</b> </fds-tooltip>
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-input v-model="txtEfternavn"></fds-input>
  <fds-input-limit :modelValue="txtEfternavn" :limit="20" />
</fds-formgroup>
`;

const codePrefixSuffix = `
<fds-input v-model="txtPre" prefix="prefix" id="prefix"></fds-input>

<fds-input v-model="txtSuffix" suffix="suffix" id="txtSuffix"></fds-input>

`;

const codeInputKnap = `
<fds-input v-model="txtSearch" placeholder="Søg efter..." id="search">
  <template #button>
    <button class="button button-search">
      <svg class="icon-svg m-0" aria-hidden="true">
        <use xlink:href="#search"></use></svg
      ><span class="sr-only"> Søg </span>
    </button>
  </template>
</fds-input>

<fds-input v-model="txtSearch" placeholder="Søg efter..." id="searchbtn">
  <template #button>
    <button class="button button-search">Søg</button>
  </template>
</fds-input>
`;

const readonly = `
<fds-formgroup>
 ...
 <fds-input
  v-model="txtFornavn"
  readonly />
</fds-formgroup>`;
</script>
