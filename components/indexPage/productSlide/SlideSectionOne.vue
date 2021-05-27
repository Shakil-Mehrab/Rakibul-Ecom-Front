<template>
  <div
    v-observe-visibility="{
      callback: showProductsNow,
      once: true,
    }"
    class="col-md-12"
  >
    <template>
      <client-only>
        <carousel
          class="product-slider"
          :perPageCustom="[
            [350, 3],
            [768, 5],
            [992, 6],
            [1200, 8],
          ]"
          :loop="true"
          :navigationEnabled="true"
        >
          <slide v-for="n in 20" :key="n">
            <div class="p-2" style="">
              <nuxt-link to="" exact>
                <img
                  src="https://img.alicdn.com/imgextra/i1/O1CN01r7pL1J1DYSxOOPt7s_!!6000000000228-2-tps-990-400.png"
                  width="100%"
                  alt=""
                />
                <!-- <img
                  v-if="product.thumbnail"
                  v-lazy="product.thumbnail"
                  :alt="product.name"
                /> -->
              </nuxt-link>
              <div class="product_attribute">
                <p class="mt-2 mb-1">300 BDTsw</p>
                <nuxt-link :to="link('detail')" exact><h6 class="">This is product name</h6></nuxt-link>
                <p class="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.....
                </p>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </template>
    <!-- <template class="text-center"> No Product Found </template> -->
    <!-- <div class="flex" v-if="isLoading">
      <div class="w-48 p-2" v-for="skull in skeleton" :key="skull">
        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-heading />
        </content-placeholders>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      products: [],
    };
  },
  props: {
    endpoints: {
      required: true,
      type: String,
      default: "news?per-page=9",
    },
    short_des: {
      required: true,
      type: Boolean,
      default: false,
    },
    skeleton: {
      required: false,
      type: Number,
      default: 1,
    },
  },
  methods: {
    async showProductsNow(visible) {
      if (visible) {
        await this.getProducts(this.endpoints);
      }
    },
    async getProducts(endpoint) {
      try {
        this.isLoading = true;
        let response = await this.$axios.$get(endpoint);

        this.products = response.data;
      } catch (e) {}
      this.isLoading = false;
    },
    link(arg) {
      return {
        name: "product-slug",
        // params: {
        //   slug: arg.slug,
        // },
      };
    },
  },
};
</script>
<style>
.product-slider .VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
.product-slider .VueCarousel-navigation-button {
  color: #333;
}
.product-slider .VueCarousel-navigation-prev {
  left: 20px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-next {
  right: 20px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: black;
}
.product-slider .VueCarousel-dot-container {
  display: none !important;
}
</style>
