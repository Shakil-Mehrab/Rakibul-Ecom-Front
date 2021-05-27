<template>
  <div>
    <div class="container mx-auto">
      <div class="row bg-white mt-2">
        <div class="col-md-12">
          <p>
            Home > All Industries > Apparel > Plus Size Clothing > Plus Size
            Jackets Subscribe to Trade Alert
          </p>
        </div>
        <div class="col-md-6">
          <div class="">
            <ProductImageSection  />
          </div>
          <div class="col-md-6">
            <!-- <ProductDetailSection :product="product" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductImageSection from "@/components/detail/ProductImageSection";
// import ProductDetailSection from "@/components/detail/ProductDetailSection";
// import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";
// import RelatedProduct from "@/components/detail/RelatedProduct";
export default {
  components: {
    ProductImageSection,
    // ProductDetailSection,
    // RelatedProduct,
    // ProductBodyCertificketComment
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
