<template>
    <div class="nav">
      <router-link to="/">Form</router-link> |
      <router-link to="/Card">Card</router-link>
    </div>
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style scoped lang="scss">
.nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
        color: red;
        }
    }
}
</style>
