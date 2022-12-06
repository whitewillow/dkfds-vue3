<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/cards/">
      <fds-preview-item>
        <fds-card header="Overskrift">
          <p>
            In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
            purus lectus vitae tortor.
          </p>
        </fds-card>
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
              <td><code>header</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td>Default h2 - benyt #header hvis andet ønskes</td>
            </tr>
            <tr>
              <td><code>subheader</code></td>
              <td><code>string</code></td>
              <td><code>null</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table class="table table--compact">
          <thead>
            <tr>
              <th>Slots</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>content</code></td>
              <td><code></code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>header</code></td>
              <td><code>props.header, props.subheader</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>default</code></td>
              <td><code></code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>actions</code></td>
              <td><code></code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-card-group>
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
          <fds-card header="Overskrift">
            <template #content>
              <div class="align-text-center bg-info-light p-6">
                <h2 class="h5 mb-5">Lorem ipsum fordeling</h2>
                <div class="mt-3 row">
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="80%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="20" width="50" height="80" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> København </span>
                  </div>
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="36%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="64" width="50" height="36" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> Hele landet </span>
                  </div>
                </div>
              </div>
            </template>
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
          </fds-card>
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
        </fds-card-group>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="props"></pre>
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
              <td><code>header</code></td>
              <td><code>'deck' | 'columns'</code></td>
              <td><code>null</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <fds-preview header="Eksempel deck">
      <fds-preview-item>
        <fds-card-group type="deck">
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
          <fds-card header="Overskrift">
            <template #content>
              <div class="align-text-center bg-info-light p-6">
                <h2 class="h5 mb-5">Lorem ipsum fordeling</h2>
                <div class="mt-3 row">
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="80%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="20" width="50" height="80" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> København </span>
                  </div>
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="36%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="64" width="50" height="36" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> Hele landet </span>
                  </div>
                </div>
              </div>
            </template>
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
          </fds-card>
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
        </fds-card-group>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="deck"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Eksempel columns">
      <fds-preview-item>
        <fds-card-group type="columns">
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
          <fds-card header="Overskrift" class="card-align-height">
            <template #content>
              <div class="align-text-center bg-info-light p-6">
                <h2 class="h5 mb-5">Lorem ipsum fordeling</h2>
                <div class="mt-3 row">
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="80%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="20" width="50" height="80" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> København </span>
                  </div>
                  <div class="col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="36%"
                      class="w-percent-30 w-percent-md-70"
                      viewBox="0 0 50 100"
                    >
                      <rect width="50" height="100" fill="#eefafa" />
                      <rect y="64" width="50" height="36" fill="#0868AC" /></svg
                    ><span class="small-text mt-2 bold d-block"> Hele landet </span>
                  </div>
                </div>
              </div>
            </template>
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
          </fds-card>
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
          <fds-card header="Overskrift" subheader="Understøttende tekst">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
          <fds-card class="card-align-height">
            <template #custom>
              <div class="card-content">
                <!-- Alt i denne div er blot et eksempel. Visse klasser er ikke en del af FDS. -->
                <div class="row bg-success-light p-6">
                  <div class="col-12 align-text-left">
                    <h2 class="h3 mb-0">3 ofte stillede spørgsmål</h2>
                    <ul class="mt-0 noindent-list">
                      <li>In viverra faucibus lorem?</li>
                      <li>Phasellus posuere neque?</li>
                      <li>Nullam quis nunc dui?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-header">
                <h2 class="header-title">Header</h2>
                <p class="sub-header">Understøttende tekst</p>
              </div>

              <div class="card-footer card-action">
                <div class="action-buttons">
                  <button class="button button-secondary">Sekundærknap</button
                  ><button class="button button-tertiary">Tertiærknap</button>
                </div>
                <div class="action-links">
                  <ul class="nobullet-list">
                    <li>
                      <a href="javascript:void(0);" class="default link state"
                        >Et link til et sted i løsningen</a
                      >
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="icon-link"
                        >Et link til et sted uden for løsningen<svg
                          class="icon-svg"
                          aria-hidden="true"
                          focusable="false"
                          tabindex="-1"
                        >
                          <use xlink:href="#open-in-new"></use></svg
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </fds-card>
        </fds-card-group>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="columns"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-card header="Overskrift">
  <p>
    In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas purus
    lectus vitae tortor.
  </p>
</fds-card>
`;

const props = `
<fds-card-group>
  <fds-card header="Overskrift" subheader="Understøttende tekst">
    <p>
      In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
      purus lectus vitae tortor.
    </p>
    <template #actions>
      <button class="button button-secondary">Sekundærknap</button>
    </template>
  </fds-card>
  <fds-card header="Overskrift">
    <template #content>
      <div class="align-text-center bg-info-light p-6">
        <h2 class="h5 mb-5">Lorem ipsum fordeling</h2>
        <div class="mt-3 row">
          <div class="col-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="80%"
              class="w-percent-30 w-percent-md-70"
              viewBox="0 0 50 100"
            >
              <rect width="50" height="100" fill="#eefafa" />
              <rect y="20" width="50" height="80" fill="#0868AC" /></svg
            ><span class="small-text mt-2 bold d-block"> København </span>
          </div>
          <div class="col-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="36%"
              class="w-percent-30 w-percent-md-70"
              viewBox="0 0 50 100"
            >
              <rect width="50" height="100" fill="#eefafa" />
              <rect y="64" width="50" height="36" fill="#0868AC" /></svg
            ><span class="small-text mt-2 bold d-block"> Hele landet </span>
          </div>
        </div>
      </div>
    </template>
    <p>
      In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
      purus lectus vitae tortor.
    </p>
  </fds-card>
  <fds-card header="Overskrift" subheader="Understøttende tekst">
    <p>
      In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
      purus lectus vitae tortor.
    </p>
    <template #actions>
      <button class="button button-secondary">Sekundærknap</button>
    </template>
  </fds-card>
</fds-card-group>
`;

const deck = `
<fds-card-group type="deck">
  <fds-card header="Overskrift" subheader="Understøttende tekst">
   ...
  </fds-card>
  <fds-card header="Overskrift">
    ...
  </fds-card>
  <fds-card header="Overskrift" subheader="Understøttende tekst">
   ...
  </fds-card>
</fds-card-group>
`;
const columns = `
<fds-card-group type="columns">
  <fds-card header="Overskrift" subheader="Understøttende tekst">
   ...
  </fds-card>
  <fds-card header="Overskrift">
    ...
  </fds-card>
  <fds-card header="Overskrift" subheader="Understøttende tekst">
   ...
  </fds-card>
  ...
</fds-card-group>
`;
</script>
