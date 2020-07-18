<template>
    <div class="card-container">
        <section class="card" v-if="user">
            <h3>{{user.firstName}} {{user.lastName}}'s card</h3>
            <ul>
                <li><span>first name:</span> {{ user.firstName }}</li>
                <li><span>last name:</span> {{ user.lastName }}</li>
                <li><span>phone number:</span> {{ user.phone }}</li>
                <li><span>email:</span> {{ user.email }}</li>
                <li><span>height:</span> {{ user.height }}</li>
                <li><span>weight:</span> {{ user.weight }}</li>
                <li v-if="user.description"><span>description:</span> {{ user.description }}</li>
            </ul>
        </section>
        <p v-else>Fill in your details please</p>
        <div>
            <img class="heart-img" src="../assets/colorfulheart.png">
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

<style lang="scss">
.card-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 650px) {
        flex-direction: column-reverse;
    }
    & .card {
        color: #666563;
        background-color: #fff;
        height: fit-content;
        width: 50vw;
        border-radius: 0.2em;
        margin: 1rem 2rem;
        @media (max-width: 650px) {
            width: 95vw;
        }
        & h3 {
            padding: 1em;
            text-align: center;
            background-color: rgba(250, 191, 28, 0.945);
            text-transform: uppercase;
            letter-spacing: .05em;
            padding-bottom: 1.5rem;
            font-weight: 300;
        }
        & ul {
            padding: 1em;
        }
        & li {
            display: flex;
            @media (max-width: 650px) {
                flex-direction: column;
            }
            margin-bottom: 1em;
            & span {
                font-weight: 300;
                text-transform: uppercase;
                flex: 1 0 20em;
                max-width: 13.75em;
                @media (max-width: 650px) {
                    flex: 1 0 1.5em;
                }
            }
        }
    }
    .heart-img {
        width: 30vw;
        margin: 1rem;
    }
}
</style>
