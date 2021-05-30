<template>
  <div v-if="subCategory==category">
    <div class="sub_category">
      <div class="row">
        <div class="col-md-6" v-for="m in 4" :key="m">
          <nuxt-link to="" exact target="_blank" class="sub_category_a">
            <h6>
              This is sub category{{ m }}
                <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            </h6>
          
          </nuxt-link>
          <div class="child_category">
            <ul>
              <li class="" v-for="n in 5" :key="n">
                <a href="category/category" exact target="_blank" class="">
                  This is aboute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subCategory: {
      required: true,
      type: Number,
    },
    category: {
      required: true,
      type: Number,
    },
  },
  methods: {
    link(arg) {
      return {
        name: "",
        query: { slug: arg.slug },
      };
    },
  },
};
</script>
