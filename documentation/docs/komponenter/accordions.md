# Accordions

```html
<fds-accordion-group #default="{ groupActive }">
    <fds-accordion
        :expanded="groupActive"
        header="Accordion header med hint"
        hint="Hint for header"
    >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </fds-accordion>
    <fds-accordion
        :expanded="groupActive"
        header="Accordion header med hint"
        hint="Hint for header"
    >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </fds-accordion>
</fds-accordion-group>
```