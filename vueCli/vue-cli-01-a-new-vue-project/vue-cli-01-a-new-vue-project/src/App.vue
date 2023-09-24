<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from '../components/FriendContact.vue';
export default
{
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: "Rishi",
          name: "Rishi Jha",
          phone: "2423423",
          email: "jsjf@fsjfs.com",
        },
        {
          id: "Mayank",
          name: "Mayank Jha",
          phone: "2423499",
          email: "2ersdf@gmail.com",
        },
      ],
    };
  },
};
</script>


<style scoped>

</style>
