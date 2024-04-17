const { createApp } = Vue;

createApp({
  data(){
    return{
      url: 'success.php',
      dischiArray: [],
      back: false
    }
  },

  methods:{
    getApi(){
      axios.get(this.url)
        .then(res =>{
          this.dischiArray = res.data
          console.log(this.dischiArray);
        })
    },

    backCard(){
      this.back = !this.back
    }
  },

  mounted(){
    this.getApi()
  }
}).mount('#app')