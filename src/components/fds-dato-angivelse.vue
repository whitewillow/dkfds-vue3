<template>
  <div class="form-group">
    <fieldset aria-describedby="example-date-field-helptext ">
      <legend class="form-label">
        Indsendelsesfrist
      </legend>
      <span
        class="form-hint"
        id="example-date-field-helptext">
        For eksempel: 05 12 2018
      </span>

      <div class="date-group js-calendar-group mt-3">
        <div class="form-group form-group-day">
          <label
            class="form-label"
            for="date-day">
            Dag
          </label>
          <input
            class="form-input js-calendar-day-input"
            ref="day"
            @input="handleNextTab($event, 'day')"
            id="date-day"
            value=""
            type="tel"
            data-min="1"
            data-max="31"
            maxlength="2"
            pattern="^[0-9]{0,2}$"
            data-input-regex="^[0-9]{0,2}$"
            title="Indskriv dag på måneden som tal"
            aria-describedby="example-date-field-helptext"/>
        </div>
        <div class="form-group form-group-month">
          <label
            class="form-label"
            for="date-month">
            Måned
          </label>
          <input
            class="form-input js-calendar-month-input"
            ref="month"
            @input="handleNextTab($event, 'month')"
            id="date-month"
            value=""
            type="tel"
            data-min="1"
            data-max="12"
            maxlength="2"
            pattern="^[0-9]{0,2}$"
            data-input-regex="^[0-9]{0,2}$"
            title="Indskriv månedens nummer"
            aria-describedby="example-date-field-helptext"/>
        </div>
        <div class="form-group form-group-year">
          <label
            class="form-label"
            for="date-year">
            År
          </label>
          <input
            class="form-input js-calendar-year-input"
            ref="year"
            id="date-year"
            value=""
            type="tel"
            data-min="1900"
            data-max="3000"
            maxlength="4"
            pattern="^[0-9]{0,4}$"
            data-input-regex="^[0-9]{0,4}$"
            title="Indskriv årstal"
            aria-describedby="example-date-field-helptext"/>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script setup lang="ts">
import { InputRegexMask } from 'dkfds';
import { defineProps, ref } from 'vue';

const day = ref<HTMLInputElement | null>(null);
const month = ref<HTMLInputElement | null>(null);
const year = ref<HTMLInputElement | null>(null);

// defineProps({
//   modelValue: {
//     type: String, // json date?
//     required: true,
//   },
// });

const handleNextTab = (event: Event, source: string) => {
  const inp = event.target as HTMLInputElement;
  if (!inp.selectionEnd || inp.selectionEnd < 2) {
    return;
  }

  if (source === 'day') {
    const regExString: string = day.value?.dataset.inputRegex ?? '';
    const r = new RegExp(regExString);
    console.log(r.exec(day.value?.value));
    (month.value as HTMLInputElement).focus();
  }

  if (source === 'month') {
    (year.value as HTMLInputElement).focus();
  }
};
</script>