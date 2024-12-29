<script setup>
import { ref, onMounted, watch } from "vue";
import { ProductService } from "../service/ProductService";
const products = ref();
onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data));
});
</script>
<template>
  <Carousel
    :value="products"
    :numVisible="1"
    :numScroll="1"
    circular
    :showNavigators="false"
    :autoplayInterval="5000"
  >
    <template #item="slotProps">
      <div class="rounded mt-4">
        <div class="mb-4">
          <div class="relative mx-auto">
            <img :src="slotProps.data.image" class="w-full rounded" />
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<style scoped></style>
