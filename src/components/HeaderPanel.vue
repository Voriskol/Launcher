<template>
  <div class="flex gap-[18px] items-center justify-end">
    <div class="search">
      <img
        src="../assets/icons/Search.png"
        alt="Search icon"
        class="search-icon"
      />
      <input type="text" placeholder="Type to search" class="search-field" />
    </div>
    <img src="../assets/icons/ShoppingCart.png" alt="Cart" />
    <img src="../assets/icons/Bell.png" alt="Bell" />
    <img src="../assets/icons/User.png" alt="User" />
  </div>
</template>

<style scoped>
.search {
  display: inline-flex;
  border-radius: 30px;
  padding: 5px 20px;
  background: #908d8da9;
}

.search-icon {
  margin-right: 10px;
  order: -1;
}

.search-field {
  width: 540px;
  border: 0;
  background: #908d8d00;
}

.search-field:focus {
  outline: none;
}
</style>
