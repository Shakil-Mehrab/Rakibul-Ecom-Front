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
        <CategoryHeadingLeft title="Electronics" />
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
import CategoryHeadingLeft from "@/components/indexPage/Heading/CategoryHeadingLeft";
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
    CategoryHeadingLeft,
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
