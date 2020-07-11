<template>
    <div class="step">
        <form @submit.prevent="nextStep" class="form-container">
            <ul class="content">
                <li>
                    <label for="first-name">first name</label>
                    <input type="text" id="first-name" name="firstName"
                        placeholder="Enter your first name here"
                        v-model="info1.firstName" required/>
                </li>
                <li>
                    <label for="last-name">last name</label>
                    <input type="text" id="last-name" name="lastName"
                        placeholder="Enter your last name here"
                        v-model="info1.lastName" required/>
                </li>
                <li>
                    <label for="phone">phone number</label>
                    <input type="tel" id="phone" name="phone" pattern="[0]{1}[0-9]{9}"
                        placeholder="e.g. 0505555555"
                        v-model="info1.phone" required/>
                </li>
                <li>
                    <label for="email">email address</label>
                    <input type="email" id="email" name="email"
                        placeholder="example@example.com" 
                        v-model="info1.email" required/>
                </li>
            </ul>
                <button class="nextBtn">Next</button>
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
$color-dark: #2c3e50; 
.step {
    background-color: rgb(64, 192, 181);
    color: #fff;
    width: 80vw;
    max-width: 1200px;
    margin: 0 auto;
}
.form-container {
    padding: 1em;
    height: 70vh;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & li {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 2em;
        & label {
            font-weight: 300;
            letter-spacing: .09em;
            text-transform: uppercase;
            flex: 1 0 120px;
            max-width: 220px;
            & + * {
                flex: 1 0 220px;
            }
        }
        & input, textarea {
            padding: 1em;
            border: none;
        }
    }
    & .buttons {
        display: flex;
        justify-content: space-between;
    }
    & button {
        padding: 8px 16px;
        border: none;
        background: $color-dark;
        color: #f2f2f2;
        text-transform: uppercase;
        letter-spacing: .09em;
        &.nextBtn {
            align-self: flex-end;
        }
    }
}
</style>
