<template>
    <div class="step">
        <form @submit.prevent="nextStep" class="container">
            <ul class="content">
                <li>
                    <label for="first-name">first name*</label>
                    <input type="text" id="first-name" name="firstName"
                        placeholder="Enter your first name here"
                        v-model="info1.firstName" required/>
                </li>
                <li>
                    <label for="last-name">last name*</label>
                    <input type="text" id="last-name" name="lastName"
                        placeholder="Enter your last name here"
                        v-model="info1.lastName" required/>
                </li>
                <li>
                    <label for="phone">phone number*</label>
                    <input type="tel" id="phone" name="phone" pattern="[0]{1}[0-9]{9}"
                        placeholder="e.g. 0505555555"
                        v-model="info1.phone" required/>
                </li>
                <li>
                    <label for="email">email address*</label>
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
.step {
    background-color: rgba(250, 191, 28, 0.945);
    color: #fff;
    width: 70vw;
    max-width: 1200px;
    margin: 2rem auto 0;
    border-radius: 0.2em;
    -webkit-box-shadow: 5px 5px 7px 0px rgba(107,105,107,1);
    -moz-box-shadow: 5px 5px 7px 0px rgba(107,105,107,1);
    box-shadow: 5px 5px 7px 0px rgba(107,105,107,1);
    @media (max-width: 650px) {
        width: 95vw;
    }
    & .container {
        margin: 0 auto;
        padding: 2em 1em;
        height: 70vh;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 650px) {
            height: fit-content;
            margin-bottom: 2em;
        }
        & li {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 1.5em;
            & label {
                font-weight: 300;
                letter-spacing: .09em;
                text-transform: uppercase;
                flex: 1 0 7.5em;
                max-width: 13.75em;
                @media (max-width: 650px) {
                    padding-bottom: 0.5em;
                }
                & + * {
                    -webkit-box-flex: 1;
                    flex: 1 0 13.75em;
                }
            }
            & input, textarea {
                border-radius: 0.2em;
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
            background: #8E8D8A;
            color: #f2f2f2;
            text-transform: uppercase;
            letter-spacing: .09em;
            &.nextBtn {
                align-self: flex-end;
            }
        }
    }

}
</style>
