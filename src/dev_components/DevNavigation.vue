<template>
  <!-- Start: Navigation -->
  <div class="overlay"></div>
  <nav class="nav">
    <button class="function-link button-menu-close js-menu-close" title="Luk mobil menu">
      <svg class="icon-svg" aria-hidden="true"><use xlink:href="#close"></use></svg>Luk
    </button>

    <!-- Start: Hovedmenu -->
    <div class="navbar navbar-primary">
      <div class="navbar-inner container">
        <ul class="nav-primary">
          <li>
            <a href="#" class="nav-link" title="Designsystem">
              <span>Første menupunkt</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link" title="Eksempler">
              <span>Andet menupunkt</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link" title="Kom godt i gang">
              <span>Tredje menupunkt</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link" title="Fællesoffentlige krav">
              <span>Fjerde menupunkt</span>
            </a>
          </li>
          <li class="current">
            <div class="overflow-menu">
              <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="headeroverflow1" aria-haspopup="true" aria-expanded="false">
                <span>Femte menupunkt</span>
              </button>
              <div class="overflow-menu-inner" id="headeroverflow1" aria-hidden="true">
                <ul class="overflow-list">
                  <li class="active">
                    <a href="#">Subsektion med en meget lang titel som går i flere linier</a>
                  </li>
                  <li>
                    <a href="#">Subsektion title</a>
                  </li>
                  <li>
                    <a href="#">Subsektion title</a>
                  </li>
                  <li>
                    <a href="#">Subsektion title som også er forholdsvis lang</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        <!-- Start: Overflow menu i navigation -->
        <ul class="unstyled-list nav-actions">
          <li>
            <div class="overflow-menu overflow-menu--open-left">
              <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="headeroverflow2" aria-haspopup="true" aria-expanded="false">
                Overflow menu
                <svg class="icon-svg" aria-hidden="true"><use xlink:href="#arrow-drop-down"></use></svg>
              </button>
              <div class="overflow-menu-inner" id="headeroverflow2" aria-hidden="true">
                <ul class="overflow-list">
                  <li><a href="#">Menupunkt 1</a></li>
                  <li><a href="#">Et menupunkt 2</a></li>
                  <li><a href="#">Tredje menupunkt 3</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <!-- Slut: Overflow menu i navigation -->
      </div>
    </div>
    <!-- Slut: Hovedmenu -->

    <!-- 4: Secondary navigation-->
    <div class="navbar">
      <div class="navbar-inner container">
        <div class="nav-secondary">
          <p class="nav-secondary-heading">Ekstra menu- og funktionslinje</p>
          <ul class="unstyled-list nav-actions">
            <li>
              <div class="overflow-menu overflow-menu--open-right">
                <button class="button-overflow-menu js-dropdown js-dropdown--responsive-collapse" data-js-target="headeroverflow3" aria-haspopup="true" aria-expanded="false">
                  Overflow menu
                  <svg class="icon-svg" aria-hidden="true"><use xlink:href="#arrow-drop-down"></use></svg>
                </button>
                <div class="overflow-menu-inner" id="headeroverflow3" aria-hidden="true">
                  <ul class="overflow-list">
                    <li><a href="#">Menupunkt 1</a></li>
                    <li><a href="#">Et menupunkt 2</a></li>
                    <li><a href="#">Tredje menupunkt 3</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <ul class="unstyled-list nav-actions">
          <li>
            <a href="#" class="button button-tertiary">Tertiærknap</a>
          </li>
          <li>
            <a href="#" class="button button-tertiary">Tertiærknap</a>
          </li>
          <li>
            <a href="#" class="button button-tertiary">Tertiærknap</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 4: Secondary header end-->

    <!-- 5: Contextual actions-->
    <div class="navbar">
      <div class="navbar-inner container navbar-context-actions">
        <div class="nav-actions">
          <a href="" class="function-link"><svg class="icon-svg" aria-hidden="true"><use xlink:href="#print"></use></svg>Funktionsikon</a>
          <a href="" class="function-link"><svg class="icon-svg" aria-hidden="true"><use xlink:href="#save"></use></svg>Funktionsikon</a>
        </div>
      </div>
    </div>
    <!-- 5: Contextual actions end-->

    <div class="portal-info-mobile">
      <p class="user">Christian Emil Vestergaard Christensen</p>
      <p>Københavns Urmager og Værksted v/Martin Elsig</p>
      <a href="#" class="button button-secondary alert-leave" role="button"> Log af </a>
    </div>

    <div class="solution-info-mobile">
      <p class="h5 authority-name">Myndighedsnavn</p>
      <p>
        Support: 12 34 56 78 ·
        <a href="#" class="icon-link function-link alert-leave">Kontakt<svg class="icon-svg" aria-hidden="true" focusable="false"><use xlink:href="#open-in-new"></use></svg></a>
      </p>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
</script>
<style lang="scss" scoped></style>