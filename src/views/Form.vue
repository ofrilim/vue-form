<template>
    <div class="form">
        <keep-alive>
            <transition name="fade" mode="out-in">
                <component
                    :is="component"
                    @toggleSteps="toggle"
                    @submit="handleSubmit">
                </component>
            </transition>
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
            isFliped: false
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
        },
        handleSubmit(info) {
            this.handleData(info);
            this.$store.dispatch({ type: "setUser", user: this.user });
            this.$router.push('/card');
        },
    },
    components: {
        Step1,
        Step2,
    },
};
</script>
