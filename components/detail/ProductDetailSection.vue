<template>
  <div>
    <h3>The name of this product is ek thi hasina</h3>
    <div style="color:orange">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    <hr />
    <div class="mt-2">
      <strong class="pr-2 my-2"
        >Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </strong>
      123 BDT
    </div>
    <div class="mt-2 size">
      <strong class="pr-2 my-2"
        >Size
        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
      >
      <uL>
        <li class="m-2 px-2" v-for="n in 9" :key="n">
          <a href="">xl</a>
        </li>
      </uL>
    </div>
    <div class="mt-2 color">
      <strong class="pr-2 my-2"
        >Color :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
      >
      <ul>
        <li class="mx-2 mb-2" v-for="n in 7" :key="n">
          <a href=""
            ><img
              src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
              width="100%"
              alt=""
          /></a>
        </li>
      </ul>
    </div>
    <div class="my-2 quantity">
      <input type="number" placeholder="Quantity" class="px-1" />
      <a href="" class="text-white p-2"> Add to Cart </a>
    </div>
    <hr />
    <div class="my-2">
      <h3 class="text-center">About this item</h3>
      <ul>
        <li v-for="n in 5" :key="n">
          <a href="#">
            &#9679; Dimensions with Stand (W x H x D): 28.8" x 18.9" x 7.1" |
            Without Stand (W x H x D): 28.8" x 17.2" x 2.9" | Weight with Stand:
            8.2 lbs | Weight without Stand: 8.0 lbs
          </a>
        </li>
      </ul>
    </div>
    <hr />
    <br />
    <ProductBodyCertificketComment />
  </div>
</template>
<script>
import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";

export default {
  props: {
    // product: {
    //   required: true,
    //   type: Object
    // }
  },
  components: {
    ProductBodyCertificketComment,
  },
};
</script>
