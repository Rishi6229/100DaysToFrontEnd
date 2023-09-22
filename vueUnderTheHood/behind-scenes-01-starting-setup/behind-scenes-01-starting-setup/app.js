const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value
      //$ is a vue javascript property where we use it to access the key 
      //to which ref is pointing to.
    },
    beforeCreate(){
      console.log('beforeCreate()')
    }
  },
});

app.mount('#app');

//how does vue work under the hood ? 
  //hint - Javascirpt - Proxy.

//Q. How Vue Updates the DOM ?


//Vue instance lifecycle - Important

/*createApp({...})                                 updated()             unmounted
   beforeCreate()                                   |                     |
    created() ---------->                              beforeUpdate()         before
     beforeMount()-----Compile template             |                     |
     mounted ---- > mounted vue instance ------> data changed           Instance Unmounted
                           |                                              |
                           |-----------------------------------------------
*/
     
