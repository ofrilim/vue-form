<template>
  <div class="card">
    <h1>This is a user-card page</h1>
    <ul>
        <li>{{user.firstName}}</li>
        <li>{{user.lastName}}</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
  </div>
</template>


<script>
export default {
    name: "Card",
    data() {
        return {
            user: {}
        }
    },
    created() {
        const user = this.$store.getters.user;
        this.user = user;
    }
}
</script>

<style scoped lang="scss">
</style>

