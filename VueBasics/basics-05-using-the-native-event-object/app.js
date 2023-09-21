const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName:''
    };
  },
  methods: { //not good for dynamically changing values why is that ?
    outputFullname(){
      if(this.name==''){
        return '';
      }
      return this.name + ' '+ 'Jha';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  },
  watch:{
    name(value){ //watcher takees the latest value as an arguement and can be used as an alternatives
      //however for the computed property with more than one argument we use computed property only
  
      if(value === '')
      {
        this.fullName = ''
      }else
      {
        this.fullName = value +' '+ 'Jha';
      }
    }
  },
  computed:{
    fullName(){
      if(this.name==''){
        return '';
      }
      return this.name + ' '+ 'Jha';
    }
  }
});

app.mount('#events');
