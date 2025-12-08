import { createApp, ref, onMounted } from 'vue';
import axios from 'axios';



const bearerToken = localStorage.getItem("token");

createApp({
  setup() {
    const info = ref(null);

    onMounted(() => {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json', {
          headers: {
            Authorization: bearerToken
          }
        })
        .then(response => (info.value = response.data));
    });

    return {
      info
    };
  },
}).mount('#app');