<template>
  <div class="container p-[1.5rem] mx-auto shadow-lg mt-[1rem]">
    <router-link :to="{name: 'Companies'}"
     class="font-semibold hover:text-yellow-600 ">Go Back</router-link>
    <div class="info mt-[1rem] w-full flex flex-col">
      <div class="info__title w-full flex justify-center items-center mb-[2rem]">
        <div class="info__title-image w-5/12 mr-[5rem]">
          <img class="w-full h-full" :src="company.image" alt="image">
        </div>
        <div class="info__title-about w-5/12 pl-[2rem]">
          <p class="font-medium mb-[0.5rem]">Sector:
             <span class="italic opacity-70" >{{company.sector}}</span></p>
          <p class="font-medium mb-[0.5rem]">Company:
             <span class="italic opacity-70" >{{company.companyName}}</span></p>
          <p class="font-medium mb-[0.5rem]">Website:
             <span class="italic opacity-70" >{{company.website}}</span></p>
          <p class="font-medium mb-[0.5rem]">Country:
             <span class="italic opacity-70" >{{company.country}}</span></p>
          <p class="font-medium mb-[0.5rem]">City:
             <span class="italic opacity-70" >{{company.city}}</span></p>
          <p class="font-medium mb-[0.5rem]">IPO Date:
             <span class="italic opacity-70" >{{company.ipoDate}}</span></p>
        </div>
      </div>
      <hr>
      <div class="info__content w-full mt-[2rem] text-[1.1rem]">
        <p class="font-standart">{{company.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CompaniesInfo',
  data() {
    return {
      company: {},
    };
  },
  props: {
    info: {
      type: String,
      default() {
        return '';
      },
    },
  },
  computed: {
    ...mapGetters(['COMPANIES']),
  },
  mounted() {
    if (!localStorage.localItem) localStorage.localItem = this.info;
    this.company = this.COMPANIES.find((el) => el.symbol === this.info);
  },
};
</script>
