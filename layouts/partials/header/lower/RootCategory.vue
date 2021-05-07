<template>
  <ul class="root_category_ul">
    <li  class="root_category_li"
      v-for="n in 10"
      :key="n"
      @mouseover="subCategoryUl(n)"
      @mouseleave="subCategoryUlHide()"
    >
      <nuxt-link to="" exact target="_blank">
        <h6>This is about our category about our category section{{n}}</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </nuxt-link>
        
        <SubCategory :subCategory="subCategory" :category='n' />
      
    </li>
  </ul>
</template>
<script>
import SubCategory from "@/layouts/partials/header/lower/SubCategory";

export default {
  data() {
    return {
      subCategory: 0,
    };
  },
  props: {
    categories: {
      required: false,
      type: Array,
    },
  },
  components: {
    SubCategory,
  },
  methods: {
    subCategoryUl(arg) {
      this.subCategory = arg;
    },
    subCategoryUlHide() {
      this.subCategory = 0;
    },
    // link(arg) {
    //   return {
    //     name: "",
    //     query: { categories: arg.slug },
    //   };
    // },
  },
};
</script>
