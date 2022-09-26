<template>
  <section>
    <div class="bg-alternative py-9">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7">
            <h1>DKFDS-VUE3</h1>
            <p class="font-lead">Vue 3 Komponent bibliotek til "Det Fælles Designsystem"</p>
            <ul class="nobullet-list">
              <li>
                <a href="https://designsystem.dk/" class="icon-link bold-link"
                  >Det Fælles Designsystem<svg
                    class="icon-svg"
                    focusable="false"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <use xlink:href="#open-in-new"></use></svg
                ></a>
              </li>
              <li>
                <a
                  href="https://github.com/detfaellesdesignsystem/dkfds-components/"
                  class="icon-link bold-link"
                  >DKFDS på Github<svg
                    class="icon-svg"
                    focusable="false"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    <use xlink:href="#open-in-new"></use></svg
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-5 align-text-center">
            <img
              id="designsystem-illustration"
              src="https://via.placeholder.com/250x200"
              alt=""
              class="d-none d-lg-inline-block"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row py-9">
        <div class="col-12 col-lg-4">
          <h2 class="mt-0">Implementering</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto perspiciatis
            praesentium et vero error molestiae, reiciendis id nulla tempore similique dicta.
          </p>
          <p><a href="/design/" class="bold-link">Følg designet</a></p>
        </div>
        <div class="col-12 col-lg-4">
          <h2 class="mt-0">Komponenter</h2>
          <p>
            Komponenterne er byggeklodserne, som du kan bruge til at bygge den løsning dine brugere
            har behov for.
          </p>
          <p>
            <router-link :to="{ name: 'komponenter' }" class="bold-link">
              Brug komponenterne
            </router-link>
          </p>
        </div>
        <div class="col-12 col-lg-4">
          <h2 class="mt-0">Ekstra komponenter</h2>
          <p>
            Vi har lavet ekstra komponenter der udvider funktionalitet, der hjælper til brugen af
            komponenent biblioteket
          </p>
          <p>
            <router-link :to="{ name: 'ekstrakomponenter' }" class="bold-link">
              Brug Ekstra komponenter
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped></style>
