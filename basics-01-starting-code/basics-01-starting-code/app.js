const app = Vue.createApp({
    data(){
        //itself is a function
        return {
            message:'Goal Achieved !!',
            message2:'Master Vue and do nothing' ,
            vueLink:'https://vuejs.org/guide/introduction.html#what-is-vue'
        };
    },
    methods:{
        //these contains functions
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.message
            }
            else{
                return this.message2
            }
        }

    }
});

app.mount('#user-goal')

//why do we use v-bind instead of interpolation ?
