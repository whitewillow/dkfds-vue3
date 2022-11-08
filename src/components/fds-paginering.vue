<template>
  <nav
    v-if="show"
    class="pagination"
    id="pagination-ID"
    aria-label="Pagineringseksempel med 12 sider">
    <a
      href="javascript:void(0);"
      @click="handlePageChange(1)"
      class="button button-arrow button-first"><svg
        class="icon-svg"
        aria-hidden="true">
        <use xlink:href="#first-page"></use></svg><span class="sr-only">
        Første side
      </span></a>
    <a
      v-if="currentPage > 1"
      href="javascript:void(0);"
      @click="handlePageChange(currentPage - 1)"
      class="button button-arrow button-previous"
      aria-label="Forrige side">
      <svg
        class="icon-svg"
        aria-hidden="true">
        <use xlink:href="#chevron-left"></use></svg><span class="pagination-nav-link">
        Forrige
      </span>
    </a>
    <span class="pagination-mobile">
      Side {{ currentPage }} af {{ lastPage }}
    </span>
    <ul class="pagination__items">
      <li
        v-for="page in generatePages()"
        :key="page.index"
        class="pagination-item"
        :role="`${page.dotted ? 'presentation' : 'list'}`"
        :class="[{ 'pagination-number': !page.dotted }, { ' pagination-overflow': page.dotted }]">
        <a
          v-if="currentPage === page.index"
          href="javascript:void(0);"
          class="button current-page"
          :aria-label="`Side ${page.index}`"
          aria-current="page">
          {{ page.index }}
        </a>
        <a
          v-if="currentPage !== page.index && !page.dotted"
          href="javascript:void(0);"
          @click="handlePageChange(page.index)"
          class="button button-secondary"
          :aria-label="`Side ${page.index}`">
          {{ page.index }}
        </a>
        <span v-if="page.dotted">
          ...
        </span>
      </li>
    </ul>
    <a
      v-if="currentPage !== lastPage"
      href="javascript:void(0);"
      @click="handlePageChange(currentPage + 1)"
      class="button button-arrow button-next"
      aria-label="Næste side">
      <span class="pagination-nav-link">
        Næste
      </span><svg
        class="icon-svg"
        aria-hidden="true">
        <use xlink:href="#chevron-right"></use>
      </svg>
    </a>
    <a
      href="javascript:void(0);"
      @click="handlePageChange(lastPage)"
      class="button button-arrow button-last"><svg
      class="icon-svg"
      aria-hidden="true">
      <use xlink:href="#last-page"></use></svg><span class="sr-only">
      Sidste side
    </span></a>
  </nav>
</template>

<script setup lang="ts">
/**
 *
 * Komponent til Badge
 * https://designsystem.dk/komponenter/badges/
 *
 * */
import { FdsPaging } from '@/model/fds.model';
import {
  defineProps, computed, ref, defineEmits, watch,
} from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  skip: {
    type: Number,
    default: 0,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  maxElements: {
    type: Number,
    default: 7,
  },
});

const emit = defineEmits(['filteredPage', 'skip']);

const currentPage = ref(1);
const show = ref(true);

const getTotalPages = computed((): Array<number> => {
  const totalPages = Math.abs(Math.ceil(props.list.length / props.pageSize));
  return [...Array(totalPages).keys()].map((i) => i + 1);
});

const lastPage = computed((): number => {
  return getTotalPages.value.length;
});

// const focusButton = (id: number) => {
//   nextTick(() => {
//     const e = document.querySelector(`ul.pagination>li[id="${id}"]>button`) as HTMLElement;
//     e.focus();
//   });
// };

const emitList = (skip = 0) => {
  emit('filteredPage', props.list.length > 0 ? props.list.slice(skip, skip + props.pageSize) : []);
  emit('skip', props.skip > 0 ? props.skip : skip);
};

const handlePageChange = (newPage: number) => {
  const skip = props.pageSize * (newPage - 1);
  emitList(skip);
  currentPage.value = newPage;
};

const generatePages = (): FdsPaging[] => {
  const tmpPages = getTotalPages.value;
  const pages: FdsPaging[] = [];
  const centerDiff = Math.ceil(props.maxElements / 2) + 1;

  tmpPages.forEach((f) => {
    if (f === 1 || f === lastPage.value || f === currentPage.value) {
      pages.push({ index: f, dotted: false });
      return;
    }

    // under 5
    if (currentPage.value < centerDiff && f <= centerDiff) {
      pages.push({ index: f, dotted: false });
      return;
    }

    // middle range
    if (currentPage.value - 1 <= f && f <= currentPage.value + 1) {
      pages.push({ index: f, dotted: false });
      return;
    }

    // upper range
    if (lastPage.value - centerDiff < currentPage.value - 1 && lastPage.value - centerDiff < f) {
      pages.push({ index: f, dotted: false });
      return;
    }

    const dotMe = true;

    if (dotMe && pages.slice(-1)[0].dotted) {
      return;
    }

    pages.push({ index: f, dotted: dotMe });
  });

  return pages;
};

watch(
  () => props.skip,
  () => {
    if (props.skip > 0) {
      currentPage.value = props.skip / props.pageSize + 1;
    } else {
      currentPage.value = 1;
    }
    show.value = props.list && props.list.length > props.pageSize;
    emitList();
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>