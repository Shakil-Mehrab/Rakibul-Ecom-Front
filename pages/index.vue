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
                <TrendingConsumer
            />
           </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="container mx-auto">
      <div class="row">
        <NewArrival v-for="n in 3" :key="n"/>
      </div>
    </div>
    <!-- <br /> -->
    <div class="container mx-auto">
      <div class="row">
        <!-- <CategoryHeading title="Electronics" /> -->
      </div>
      <div class="row">
        <SlideSectionOne
          endpoints="products?categories=richie&per-page=12"
          :short_des="true"
          :skeleton="6"
        />
      </div>
    </div>
    <div class="md:mx-10">
      <div class="flex justify-between items-center py-2 w-full">
        <div
          class="text-2xl font-bold whitespace-no-wrap mr-2 text-customcolor-400"
        >
          Choose Your Product
        </div>
        <div class="rounded-md text-sm font-bold">
          <a href="" class="text-customcolor-200 hover:text-customcolor-300">
            See All Products
            <i class="fas fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
      <!-- <SlideSectionOne
        endpoints="products?categories=richie&per-page=12"
        :short_des="true"
        :skeleton="10"
      /> -->
    </div>
    <br />
    <div class="container mx-auto">
      <div class="flex justify-between items-center py-2">
        <div
          class="text-2xl font-bold whitespace-no-wrap mr-2 text-customcolor-400"
        >
          JUST FOR YOU
        </div>
        <div class="border-b-4 border-gray-600 w-full rounded-md"></div>
      </div>
      <!-- <JustForYou
        endpoints="products?categories=richie&per-page=12"
        :short_des="true"
        :skeleton="10"
      /> -->
    </div>
    <br />
    <div class="md:mx-10">
      <!-- <SlideSectionOne /> -->
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
// import CategoryHeading from "@/components/indexPage/Heading/CategoryHeading";
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
    // CategoryHeading,
    SlideSectionOne,
    // JustForYou,
    // SupplierRegion
  },
  computed: {
    ...mapGetters({
      // selectedCategories: "selectedCategories"
    })
  },
  async asyncData({ app }) {
    // let response = await app.$axios.$get("products");

    return {
      // products: response.data
    };
  }
};
</script>
