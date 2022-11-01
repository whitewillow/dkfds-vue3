<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-card header="Overskrift">
        <p>
          In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas purus
          lectus vitae tortor.
        </p>
      </fds-card>

      <template #description>
        <p class="italic">
          Du kan bruge cards til at gruppere funktionalitet, der adskiller sig fra sidens øvrige
          indhold. Det kan fx være en afledt, men ikke direkte koblet ekstra funktion ift. sidens
          sammenhæng.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
    <fds-component-preview header="Eksempel">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card header="Overskrift" subheader="Understøttende tekst" class="card-align-height">
            <p>
              In sollicitudin, nulla sit amet facilisis euismod, ex ex hendrerit eros, et egestas
              purus lectus vitae tortor.
            </p>
            <template #actions>
              <button class="button button-secondary">Sekundærknap</button>
            </template>
          </fds-card>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
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
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-6 mt-md-0">
          <fds-card class="card-align-height">
            <template #custom>
              <div class="card-content">
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
        </div>
      </div>

      <template #description>
        <p class="italic">Udvidet brug af cards</p>
      </template>
      <template #code>
        <pre v-text="props"></pre>
      </template>
    </fds-component-preview>
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
<fds-card class="card-align-height">
  <template #custom>
    <div class="card-content">
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
`;
</script>
