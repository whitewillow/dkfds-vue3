<template>
  <div class="date-group js-calendar-group mt-3">
    <div class="form-group form-group-day">
      <label
        class="form-label"
        :for="`day_${formid}`">
        Dag
      </label>
      <input
        :id="`day_${formid}`"
        ref="day"
        v-model="dateObj.day"
        class="form-input js-calendar-day-input"
        type="tel"
        data-min="1"
        data-max="31"
        maxlength="2"
        pattern="^[0-9]{0,2}$"
        data-input-regex="^[0-9]{0,2}$"
        title="Indskriv dag på måneden som tal"
        @input="onNextTab($event, 'day')"
        @blur="$emit('dirty', true)"
        @focus="($event.target as any)?.select()"
      />
    </div>
    <div class="form-group form-group-month">
      <label
        class="form-label"
        :for="`month_${formid}`">
        Måned
      </label>
      <input
        :id="`month_${formid}`"
        ref="month"
        v-model="dateObj.month"
        class="form-input js-calendar-month-input"
        type="tel"
        data-min="1"
        data-max="12"
        maxlength="2"
        pattern="^[0-9]{0,2}$"
        data-input-regex="^[0-9]{0,2}$"
        title="Indskriv månedens nummer"
        @input="onNextTab($event, 'month')"
        @blur="$emit('dirty', true)"
        @focus="($event.target as any)?.select()"
      />
    </div>
    <div class="form-group form-group-year">
      <label
        class="form-label"
        :for="`year_${formid}`">
        År
      </label>
      <input
        :id="`year_${formid}`"
        ref="year"
        v-model="dateObj.year"
        class="form-input js-calendar-year-input"
        type="tel"
        data-min="1900"
        data-max="3000"
        maxlength="4"
        pattern="^[0-9]{0,4}$"
        data-input-regex="^[0-9]{0,4}$"
        title="Indskriv årstal"
        @blur="$emit('dirty', true)"
        @input="onNextTab($event, 'year')"
        @focus="($event.target as any)?.select()"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue';
import { formId } from 'dkfds-vue3-utils';

const day = ref<HTMLInputElement | null>(null);
const month = ref<HTMLInputElement | null>(null);
const year = ref<HTMLInputElement | null>(null);

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String, // JSON Date
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'valid']);

const isDateValid = (dateString: string) => {
  const date = Date.parse(dateString);
  return !Number.isNaN(date);
};

const getModelDate = (dateString: string) => {
  if (isDateValid(props.modelValue)) {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString(),
      month: date.getMonth().toString(),
      year: date.getFullYear().toString(),
    };
  }
  return { day: '', month: '', year: '' };
};

const { formid } = formId(props.id, true);
const dateObj = ref<{ day: string; month: string; year: string }>(getModelDate(props.modelValue));

const onInput = () =>
  emit('update:modelValue', [dateObj.value.year, dateObj.value.month, dateObj.value.day].join('-'));

const onValid = () =>
  emit(
    'valid',
    isDateValid([dateObj.value.year, dateObj.value.month, dateObj.value.day].join('-')),
  );

const onNextTab = (event: Event, source: string) => {
  const inp = event.target as HTMLInputElement;
  if (!inp.selectionEnd || inp.selectionEnd < 2) {
    return;
  }

  if (source === 'day') {
    // const regExString: string = day.value?.dataset.inputRegex ?? '';
    // const r = new RegExp(regExString); // TODO: skal den bruges?
    (month.value as HTMLInputElement).focus();
  }

  if (source === 'month') {
    (year.value as HTMLInputElement).focus();
  }
  onInput();
  onValid();
};
</script>
