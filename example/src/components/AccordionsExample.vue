<template>
  <section>
    <h2 class="mt-0">Accordions</h2>

    <fds-accordion-group #default="{ groupcollapse }">
      <fds-accordion-item
        :collapsed="groupcollapse"
        header="Accordion header med hint"
        hint="Hint for header"
      >
        <p>
          {{ groupcollapse }}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion-item>
      <fds-accordion-item
        :collapsed="groupcollapse"
        header="Accordion header med hint"
        hint="Hint for header"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion-item>

      <fds-accordion-item
        :collapsed="groupcollapse"
        header="Accordion header med Success"
        variant="success"
        variant-text="Success"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion-item>

      <fds-accordion-item
        :collapsed="groupcollapse"
        header="Accordion header med advarsel"
        variant="warning"
        variant-text="Advarsel"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion-item>

      <fds-accordion-item
        :collapsed="groupcollapse"
        header="Accordion header med Fejl"
        variant-text="Fejl"
        variant="error"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </fds-accordion-item>
    </fds-accordion-group>

    <h3>Single Accordions</h3>

    <fds-accordion>
      <template #header>
        <h4 class="">Accordion med custom header</h4>
      </template>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </fds-accordion>

    <fds-accordion header="Accordion normal header" hint="Et hint">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </fds-accordion>
  </section>
</template>

<script setup lang="ts"></script>
