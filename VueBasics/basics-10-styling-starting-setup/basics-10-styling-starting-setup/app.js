const app = Vue.createApp({
data(){
    return{
        boxASelc:false,
        boxBSelc:false,
        boxCSelc:false
    }
},
method:{
    boxSelected(box){
        if(box ==='A')
        {
            this.boxASelc = true;
        }
        else if(box === 'B'){
          this.boxBSelc = true;
        }
        else if(box === 'C'){
            this.boxCSelc = true;
        }
    }
}
})

app.mount('#styling')