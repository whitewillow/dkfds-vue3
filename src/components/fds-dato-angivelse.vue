<template>
  <div class="date-group js-calendar-group mt-3">
    <div class="form-group form-group-day">
      <label
        class="form-label"
        for="date-day">
        Dag
      </label>
      <input
        class="form-input js-calendar-day-input"
        id="date-day"
        value=""
        type="tel"
        data-min="1"
        data-max="31"
        maxlength="2"
        pattern="^[0-9]{0,2}$"
        data-input-regex="^[0-9]{0,2}$"
        title="Indskriv dag på måneden som tal"
        aria-describedby="example-date-field-hint"/>
    </div>
    <div class="form-group form-group-month">
      <label
        class="form-label"
        for="date-month">
        Måned
      </label>
      <input
        class="form-input js-calendar-month-input"
        id="date-month"
        value=""
        type="tel"
        data-min="1"
        data-max="12"
        maxlength="2"
        pattern="^[0-9]{0,2}$"
        data-input-regex="^[0-9]{0,2}$"
        title="Indskriv månedens nummer"
        aria-describedby="example-date-field-hint"/>
    </div>
    <div class="form-group form-group-year">
      <label
        class="form-label"
        for="date-year">
        År
      </label>
      <input
        class="form-input js-calendar-year-input"
        id="date-year"
        value=""
        type="tel"
        data-min="1900"
        data-max="3000"
        maxlength="4"
        pattern="^[0-9]{0,4}$"
        data-input-regex="^[0-9]{0,4}$"
        title="Indskriv årstal"
        aria-describedby="example-date-field-hint"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

// defineProps({
//   modelValue: {
//     type: String, // json date?
//     required: true,
//   },
// });
</script>