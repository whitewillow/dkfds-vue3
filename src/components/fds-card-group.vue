<template>
  <div
    class="card-group"
    :class="getClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Card-group -> Komponent for at wrappe cards
 * https://designsystem.dk/komponenter/cards/
 *
 * */
import { computed, defineProps, PropType } from 'vue';

const props = defineProps({
  type: {
    type: String as PropType<'deck' | 'columns'>,
    default: null,
  },
});

const getClass = computed(() => props.type ?? 'normal');
</script>

<style lang="scss">
.card-group {
  margin-bottom: 32px;
  > .card {
    margin-bottom: 24px;
  }
}

@media only screen and (min-width: 768px) {
  .normal {
    display: flex;
    flex-flow: row wrap;

    > .card {
      position: relative;
      flex: 1 0 0%;
      margin-bottom: 0;
      flex-direction: column;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
      height: 100%;
      min-width: 0;
    }
  }
  .deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
    > .card {
      flex: 1 0 0%;
      flex-direction: column;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }

  .columns {
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
    column-count: 3;
    > .card {
      display: inline-block;
      width: 100%;
      flex-direction: column;
      margin-bottom: 0.75rem;
    }
  }
}
</style>