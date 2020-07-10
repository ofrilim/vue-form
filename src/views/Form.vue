<template>
    <div class="form">
        <h1>Inside form!</h1>
        <keep-alive>
            <component v-bind:is="component" @toggleSteps="toggle"></component>
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
        };
    },
    methods: {
        toggle(info) {
            this.handleData(info)
            this.component === "Step1"
                ? (this.component = "Step2")
                : (this.component = "Step1");
        },
        handleData(info) {
            console.log(info)
        }
    },
    components: {
        Step1,
        Step2,
    },

};
</script>
