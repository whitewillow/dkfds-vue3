<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-alert level="info" header="Informativ besked" closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
      </fds-alert>
      <fds-alert level="success" header="Succesmeddelelse" closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
      </fds-alert>
      <fds-alert level="warning" header="Advarsel" closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
      </fds-alert>
      <fds-alert level="error" header="Fejlbesked" closeable>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
        architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
        molestiae natus, hic eius ab architecto dolorum placeat.
      </fds-alert>

      <template #description>
        <p class="italic">
          Beskeder også kendt som Alerts - anvendes til at give brugeren vigtig og aktuel
          information om fx status, generelle fejl, til fejlopsummeringer, samt til at gøre
          opmærksom på ting brugeren skal vide, fx automatiske ændringer i brugerens data o.l.
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
<fds-alert level="info" header="Informativ besked" closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

<fds-alert level="success" header="Succesmeddelelse" closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

<fds-alert level="warning" header="Advarsel" closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

<fds-alert level="error" header="Fejlbesked" closeable>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus voluptatum corrupti
  architecto? Accusantium obcaecati aliquam totam voluptas perspiciatis. Voluptate animi quas
  molestiae natus, hic eius ab architecto dolorum placeat.
</fds-alert>

`;
</script>
