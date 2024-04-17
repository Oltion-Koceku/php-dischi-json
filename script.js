const { createApp } = Vue;

createApp({
  data(){
    return{
      url: 'success.php',
      dischiArray: [],
    }
  },

  methods:{
    getApi(){
      axios.get(this.url)
        .then(res =>{
          this.dischiArray = res.data
          console.log(this.dischiArray);
        })
    }

  },

  mounted(){
    this.getApi()
  }
}).mount('#app')