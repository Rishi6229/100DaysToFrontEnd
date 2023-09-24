<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Show details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    data(){
       return{
        detailsAreVisible:false,
        friend:{
            id: "Rishi",
          name: "Rishi Jha",
          phone: "2423423",
          email: "jsjf@fsjfs.com",
        }
       }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible != this.detailsAreVisible;
        }
    }
};
</script>
