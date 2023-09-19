const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:
  {
    add(num){
      this.counter++;
    },
    subtract(num){
      this.counter--;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(){
      alert('Submitted !')
    }
  }
});

app.mount('#events');
