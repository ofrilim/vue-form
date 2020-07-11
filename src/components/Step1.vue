<template>
    <div class="container">
        <h3>Step1 component</h3>
        <form>
            <ul>
                <li>
                    <label for="first-name">first name</label>
                    <input type="text" id="first-name" name="firstName"
                        v-model="info1.firstName" required/>
                </li>
                <li>
                    <label for="last-name">last name</label>
                    <input type="text" id="last-name" name="lastName"
                        v-model="info1.lastName" required/>
                </li>
                <li>
                    <label for="phone">phone number</label>
                    <input type="tel" id="phone" name="phone" pattern="[0]{1}[0-9]{9}"
                        v-model="info1.phone" required/>
                </li>
                <li>
                    <label for="email">email address</label>
                    <input type="email" id="email" name="email" 
                        v-model="info1.email" required/>
                </li>
            </ul>
            <button @click.prevent="nextStep">Next From Step1</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Step1",
    data() {
        return {
            info1: {
                firstName: "",
                lastName: "",
                phone: null,
                email: "",
            },
        };
    },
    methods: {
        nextStep() {
            this.$emit("toggleSteps", this.info1);
        },
    },
};
</script>

<style lang="scss">
</style>
