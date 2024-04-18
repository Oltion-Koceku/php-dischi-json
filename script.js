const { createApp } = Vue;

createApp({
  data(){
    return{
      url: 'success.php',
      dischiArray: [],
      newAlbum: {
        title: "",
        author: "",
        year: "",
        poster: "",
        genre: "",
      },
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

    addNewAlbum(){
      // invio dati a success.php tramite post

      const data = new FormData();
      data.append('newAlbumTitle', this.newAlbum.title);
      data.append('newAlbumAuthor', this.newAlbum.author);
      data.append('newAlbumYear', this.newAlbum.year);
      data.append('newAlbumPoster', this.newAlbum.poster);
      data.append('newAlbumGenre', this.newAlbum.genre);


      axios.post(this.url, data)
      .then(result =>{
          this.dischiArray = result.data
          console.log(this.dischiArray);
        })
      .catch(error =>{
        console.log(error);
      })  


    }

  },

  mounted(){
    this.getApi()
  }
}).mount('#app')