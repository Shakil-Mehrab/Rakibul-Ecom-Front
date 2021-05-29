<template>
  <div>
    <br />
    <div class="container mx-auto bg-white shadow-sm">
      <div class="row p-2">
        <div class="col-md-3 col-sm-3">
          <MyMarket />
        </div>
        <div class="col-md-9 col-sm-9">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <MainSlider />
            </div>
            <div class="col-md-4 col-sm-12">
              <TrendingConsumer />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container mx-auto shadow-sm">
      <div class="row newarrival_row">
        <NewArrival v-for="n in 3" :key="n" />
      </div>
    </div>
    <br>
    <div class="container mx-auto shadow-sm">
      <div class="row bg-white">
        <CategoryHeading title="Electronics" />
      </div>
      <div class="row bg-white">
        <SlideSectionOne
          endpoints="products?categories=richie&per-page=12"
          :short_des="true"
          :skeleton="6"
        />
      </div>
    </div>
    <br />
    <div class="container mx-auto shadow-sm">
      <div class="row bg-white">
        <div class="col-md-3 left_heading" style="padding: 0; overflow: hidden;position:relative">
           <img
            src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
            alt=""
            width="100%" height="100%"
          />
           
          <div class="left_category_heading">
            <h5>Jwellery</h5>
             <a href="" class=""> See All Products <svg
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
        <div class="col-md-9">
          <SlideSectionOne
            endpoints="products?categories=richie&per-page=12"
            :short_des="true"
            :skeleton="6"
          />
        </div>
      </div>
    </div>
    <br />
    <div class="container mx-auto">
      <!-- <SupplierRegion /> -->
    </div>
  </div>
</template>
<script>
import MyMarket from "@/components/indexPage/topSection/MyMarket";
import MainSlider from "@/components/indexPage/topSection/MainSlider";
import TrendingConsumer from "@/components/indexPage/topSection/TrendingConsumer";
import NewArrival from "@/components/indexPage/NewArrival";
import CategoryHeading from "@/components/indexPage/Heading/CategoryHeading";
// import CategorySection from "@/components/indexPage/CategorySection";
import SlideSectionOne from "@/components/indexPage/productSlide/SlideSectionOne";
// import JustForYou from "@/components/indexPage/JustForYou";
// import SupplierRegion from "@/components/indexPage/SupplierRegion";
import { mapGetters } from "vuex";

export default {
  components: {
    MyMarket,
    MainSlider,
    TrendingConsumer,
    NewArrival,
    // CategorySection,
    CategoryHeading,
    SlideSectionOne,
    // JustForYou,
    // SupplierRegion
  },
  computed: {
    ...mapGetters({
      // selectedCategories: "selectedCategories"
    }),
  },
  async asyncData({ app }) {
    // let response = await app.$axios.$get("products");

    return {
      // products: response.data
    };
  },
};
</script>
