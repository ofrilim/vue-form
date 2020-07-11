<template>
    <div class="form">
        <h1>Inside form!</h1>
        <keep-alive>
            <component
                :is="component"
                @toggleSteps="toggle"
                @submit="handleSubmit">
            </component>
        </keep-alive>
    </div>
</template>

<script>
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";

export default {
    name: "Form",
    data() {
        return {
            component: "Step1",
            user: {},
        };
    },
    methods: {
        toggle(info) {
            this.handleData(info);
            this.component === "Step1"
                ? (this.component = "Step2")
                : (this.component = "Step1");
        },
        handleData(info) {
            this.user = { ...this.user, ...info };
            console.log(this.user)
        },
        handleSubmit(info) {
            this.handleData(info);
            console.log(this.user)
            this.$store.dispatch({ type: "setUser", user: this.user });
        },
    },
    components: {
        Step1,
        Step2,
    },
};
</script>
