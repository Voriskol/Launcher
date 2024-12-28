<script setup></script>
<template>
  <div class="sidebar">
    <h1 class="text-white font-bold text-[30px] mb-[30px]">MyLauncher</h1>
    <div class="divider"></div>
    <ul class="buttonsList">
      <li>
        <button>
          <div class="flex items-center gap-3">
            <img src="../assets/icons/HomePage.png" alt="HomePage icon" />
            <p>Home</p>
          </div>
        </button>
      </li>
      <li>
        <button>
          <div class="flex items-center gap-3">
            <img src="../assets/icons/TagWindow.png" alt="Library icon" />
            <p>Library</p>
          </div>
        </button>
      </li>
      <li>
        <button>
          <div class="flex items-center gap-3">
            <img src="../assets/icons/OnlineShop.png" alt="Store icon" />
            <p>Store</p>
          </div>
        </button>
      </li>
      <li>
        <button>
          <div class="flex items-center gap-3">
            <img src="../assets/icons/Love.png" alt="Wishlist icon" />
            <p>Wishlist</p>
          </div>
        </button>
      </li>
    </ul>
    <div class="divider"></div>
    <ul class="buttonsList">
      <li>
        <button>
          <div class="flex items-center gap-3">
            <img src="../assets/icons/Discount.png" alt="Wishlist icon" />
            <p>Discount</p>
          </div>
        </button>
      </li>
      <li>
        <button>
          <div class="flex items-center gap-3">
            <img src="../assets/icons/Wallet.png" alt="Wishlist icon" />
            <p>Wallet | Rp.20.053</p>
          </div>
        </button>
      </li>
    </ul>
    <div class="divider"></div>
  </div>
</template>

<style scoped>
.divider {
  height: 1px;
  width: 100%;
  background-color: rgba(221, 221, 221);
}

.buttonsList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #dddddd;
  font-size: 24px;
  padding: 30px 0;
}
</style>
