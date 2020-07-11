<template>
    <div id="app">
        <Nav></Nav>
        <router-view />
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
    components: {
        Nav,
    },
};
</script>

<style lang="scss">
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
#app {
    overflow-y: hidden;
    font-family: "Fira Sans", "Helvetica Neue", sans-serif;
}
</style>
