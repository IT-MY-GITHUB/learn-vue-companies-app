<template>
  <div class="container md:container mx-auto">
    <div class="wrapper bg-[#D4622C]">
      <!-- header -->
      <header class="header flex flex-col py-[1rem]">
        <h1 class="header__title text-center text-white text-[1.5rem] mx-auto mb-[1rem]">
          Input Company Alias
        </h1>
        <form
          @submit.prevent
          class="header__form mx-auto w-[40%] flex items-center justify-center mb-[1rem]"
          action="/"
        >
          <input
            class="
              header__input
              h-[2.1rem]
              w-[70%]
              bg-[#e7d7cc]
              border-r-4 border-transparent
              focus:border-green-300
              font-medium
              focus:outline-none focus:shadow-btn
              transition
              duration-800
              ease
            "
            type="text"
            required
            v-model="textValue"
          />

          <button
            class="
              header__btn
              p-[0.3rem]
              bg-[#f2e9e3]
              w-[5rem]
              text-green-300
              font-medium
              hover:shadow-btn
              transition
              duration-300
              ease
            "
            type="submit"
            @click="addCompany"
          >
            Add
          </button>
        </form>

        <hr />
      </header>
      <!-- /header -->

      <!-- section content -->
      <section class="content bg-[#f2e9e3] pt-[1rem]">
        <h2
          class="
            content__title
            text-center text-[#D4622C]
            font-bold
            text-[1.3rem]
            mx-auto
          "
        >
          Companies Info
        </h2>
        <!-- content items -->
        <div class="flex flex-col items-center" v-if="!COMPANIES.length">
          <h2 class="mb-[0.5rem] mt-[0.5rem] font-semibold">Enter a companies aliases</h2>
          <h3 class="italic mb-[0.5rem]">Example: AMD, TSLA, ozon, nvda</h3>
          <h4 class="font-semibold mb-[0.5rem]">List of all Aliases</h4>
          <p class="text-center">
          AAPL, NVDA, TSLA, AMD, INTC, MDB, SPCE, V, DAL,
          DOCU, OKTA, AMZN, PINS, TRIP, GDDY, DIS, MCD, NOK,
          UPWK, IBM, FB, ZM, OZON, NFLX, EA, HLT, H, CCL</p>
        </div>
        <div v-else
         class="content__items flex
         p-[1rem] gap-x-[1rem] gap-y-[1rem] flex-wrap justify-center">
          <!-- item -->
          <div v-for="item in COMPANIES"
          :key="item.symbol"
          class="item relative flex-0-23
          bg-gray-100 p-[0.5rem]
            h-[250px] rounded-md
            hover:shadow-md">
            <div class="item-header flex justify-between">
              <img
                class="item-header__img
                h-[7rem] w-[7rem]
                mr-[0.7rem]
                mb-[0.7rem]"
                :src="item.image"
                alt="image"
              />
              <div class="wrapper--item flex flex-col justify-center">
                <p class="item-header__sybmol mb-[1rem] font-medium">
                  {{ item.symbol }}
                </p>
                <p class="item-header__price italic">{{ item.price }} $</p>
              </div>
              <button
                type="submit"
                class="
                  text-white
                  hover:bg-red-600
                  h-[1.3rem]
                  w-[1.3rem]
                  transition
                  duration-300
                  ease
                  bg-[#D4622C]
                "
                @click="deleteItem(item.symbol)"
              >
                X
              </button>
            </div>

            <div class="item-description flex flex-col items">
              <p class="item-description__name font-bold">
                {{ item.companyName }}
              </p>
              <div class="wrapper-desc flex flex-col">
                <p class="item-description__city text-[#D4622C]">
                City:
                <span class="text-black italic opacity-25">{{ item.city }}</span>
                </p>
                <p class="item-description__phone text-[#D4622C]">
                Phone:
                <span class="text-black italic opacity-25">{{ item.phone }}</span>
                </p>
              </div>
              <router-link class="absolute bottom-0 left-1
               hover:underline
               hover:font-medium
               hover:text-[#D4622C]"
              :to="{ name: 'CompaniesInfo', params: { info: item.symbol } }">
              More info
              </router-link>
            </div>
          </div>
          <!-- /item -->
        </div>
        <!-- /content items -->
      </section>
      <!-- /section content -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters(['COMPANIES', 'INPUT_VALUE']),
  },
  methods: {
    ...mapActions(['GET_COMPANIES_FROM_API', 'DELETE_FROM_COMPANIES', 'SET_INPUT_VALUE']),

    deleteItem(symbol) {
      this.DELETE_FROM_COMPANIES(symbol);
    },
    addCompany() {
      this.SET_INPUT_VALUE(this.textValue);
      if (this.INPUT_VALUE) {
        this.GET_COMPANIES_FROM_API(this.INPUT_VALUE).then((res) => {
          console.log(res.data);
        });
      }
    },
  },
  // mounted() {
  //   this.GET_COMPANIES_FROM_API().then((res) => {
  //     console.log(res.data);
  //   });
  // },
};
</script>
