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
body {
    background-color: rgba(223, 215, 223, 0.89);
    font-family: "Fira Sans", "Helvetica Neue", sans-serif;
}
</style>
