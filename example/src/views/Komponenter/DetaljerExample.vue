<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-detaljer header="Mine detaljer">
        <p>
          Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero. Integer euismod augue
          leo.
        </p>
        <p>
          Morbi faucibus nunc tortor, condimentum vulputate urna sollicitudin non. Nam commodo nulla
          metus. Phasellus varius eu dolor nec ultricies. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris ac leo finibus, blandit velit nec, consequat est. Nulla facilisi.
        </p>
      </fds-detaljer>

      <template #description>
        <p class="italic">
          Du kan bruge Detalje komponenten til at holde indhold skjult, indtil brugeren vælger at
          aktivere det. Når brugeren klikker på komponenten, folder indholdet sig ud, eller brugeren
          får fx mulighed for at læse teksten.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-detaljer header="Mine detaljer">
  <p>
    Pellentesque nulla mi, pulvinar id blandit eu, volutpat at libero. Integer euismod augue
    leo.
  </p>
  <p>
    Morbi faucibus nunc tortor, condimentum vulputate urna sollicitudin non. Nam commodo nulla
    metus. Phasellus varius eu dolor nec ultricies. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Mauris ac leo finibus, blandit velit nec, consequat est. Nulla facilisi.
  </p>
</fds-detaljer>

`;
</script>
