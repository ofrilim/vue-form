<template>
    <div class="card">
        <section v-if="user">
            <h1>This is a user-card page</h1>
            <ul>
                <li>{{ user.firstName }}</li>
                <li>{{ user.lastName }}</li>
                <li>{{ user.phone }}</li>
                <li>{{ user.email }}</li>
                <li>{{ user.height }}</li>
                <li>{{ user.weight }}</li>
                <li>{{ user.description }}</li>
            </ul>
        </section>
        <div v-else>
            <h3>Fill in your details please</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            user: null,
        };
    },
    created() {
        this.user = this.$store.getters.user;
    },
};
</script>

<style scoped lang="scss"></style>
