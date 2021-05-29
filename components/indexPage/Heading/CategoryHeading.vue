<template>
  <fragment>
    <div class="category_heading">
      <h5 class="" v-if="title">
        {{ title }}
        
      </h5>
      <div class="see_all">
        <a href="" class="brand_button"> See All Products <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          style="width:14px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg></a>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
      default: "All Categories",
    },
  },
};
</script>
