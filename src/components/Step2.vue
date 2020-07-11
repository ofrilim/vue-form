<template>
    <div class="step">
        <form @submit.prevent="submit" class="form-container">
            <ul class="content">
                <li>
                    <label for="height">height</label>
                    <input type="number" id="height" name="height" min=100 max=250 
                        placeholder="Enter your height in cm here"
                        v-model="info2.height" required/>
                </li>
                <li>
                    <label for="weight">weight</label>
                    <input type="number" id="weight" name="weight"
                        placeholder="Enter your weight here" 
                        v-model="info2.weight" required/>
                </li>
                <li>
                    <label for="description">description</label>
                    <textarea type="text" id="description" name="description" rows=4
                        placeholder="Tell us more details about yourself" 
                        v-model="info2.description"/>
                </li>
            </ul>
            <div class="buttons">
                <button @click="toggleSteps">Previous</button>
                <button>Submit</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    name: 'Step2',
    data() {
        return {
            info2: {
                height: null,
                weight: null,
                description: ''
            }
        }
    },
    methods: {
        toggleSteps() {
            this.$emit('toggleSteps', this.info2)
        },
        submit() {
            this.$emit('submit', this.info2)
        }
    }
}
</script>

<style lang="scss">
</style>