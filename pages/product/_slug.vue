<template>
  <div class="container mx-auto">
    <div class="row bg-white mt-2">
      <div class="col-md-12 pt-2">
          Home > All Industries > Apparel > Plus Size Clothing > Plus Size
          Jackets Subscribe to Trade Alert
      </div>
      <div class="col-md-6">
        <ProductImageSection />
      </div>
      <div class="col-md-6">
        <ProductDetailSection />
      </div>
    </div>
    <br />
    <div class="row bg-white">
      <CategoryHeading title="Releated" />
    </div>
    <div class="row bg-white">
      <SlideSectionOne />
    </div>
    <br>
  </div>
</template>
<script>
import ProductImageSection from "@/components/detail/ProductImageSection";
import ProductDetailSection from "@/components/detail/ProductDetailSection";
import SlideSectionOne from "@/components/indexPage/ProductSlide/SlideSectionOne";
import CategoryHeading from "@/components/indexPage/Heading/CategoryHeading";

export default {
  components: {
    ProductImageSection,
    ProductDetailSection,
    SlideSectionOne,
    CategoryHeading,
  },
  //   async asyncData({ params, app, error }) {
  //     try {
  //       let response = await app.$axios.$get(
  //         `products/${encodeURI(params.slug)}`
  //       );
  //
  //       return {
  //         product: response.data
  //       };
  //     } catch (e) {
  //       error({
  //         statusCode: e.response.status
  //       });
  //     }
  //   }
};
</script>
