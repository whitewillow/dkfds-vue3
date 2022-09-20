<template>
  <div class="overflow-menu overflow-menu--open-right">
    <button
      class="button-overflow-menu js-dropdown"
      data-js-target="overflow5"
      aria-haspopup="true"
      aria-expanded="false">
      Trin 2 af 3
      <svg
        class="icon-svg"
        aria-hidden="true"
        focusable="false">
        <use xlink:href="#arrow-drop-down"></use>
      </svg>
    </button>
    <div
      class="overflow-menu-inner"
      id="overflow5"
      aria-hidden="true">
      <nav>
        <ul
          class="sidenav-list"
          role="menu">
          <li role="none">
            <a
              href="#"
              role="menuitem">
              <span class="sidenav-number">
                1.
              </span><span class="sidenav-title">
                Lorem ipsum
              </span>
              <span class="sidenav-icon">
                <svg
                  class="icon-svg"
                  aria-hidden="true"
                  focusable="false"
                  tabindex="-1">
                  <use xlink:href="#done"></use>
                </svg>
              </span>
            </a>
          </li>
          <li
            role="none"
            class="active current">
            <a
              href="#"
              role="menuitem"
              aria-current="page">
              <span class="sidenav-number">
                2.
              </span><span class="sidenav-title">
                Dolor sit amet
              </span>
            </a>
          </li>
          <li role="none">
            <a
              href="#"
              role="menuitem">
              <span class="sidenav-number">
                3.
              </span><span class="sidenav-title">
                Consectetur adipiscing elit
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
// Afventer udvikling
</script>

<style scoped lang="scss"></style>