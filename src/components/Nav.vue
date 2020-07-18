<template>
    <div class="nav">
        <router-link to="/">Sign In</router-link>
        <router-link to="/Card">Card</router-link>
        <!-- <img class="red-heart" src="../assets/redheart.png" /> -->
    </div>
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style lang="scss">
.nav {
    padding: 1rem 1rem;
    a {
        color: #8E8D8A;
        padding: 0.2rem;
        margin-right: 1rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        text-decoration: none;
        &.router-link-exact-active {
            color: rgb(226, 167, 6);
            font-weight: bolder;
        }
        &:hover {
            border-bottom: 0.1em solid #fff;
        }
    }
}
</style>
