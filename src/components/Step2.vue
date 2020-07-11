<template>
    <div class="container">
        <h3>Step2 component!</h3>
        <form>
            <ul>
                <li>
                    <label for="height">height</label>
                    <input type="number" min=100 max=250 id="height" name="height" 
                        v-model="info2.height" required/>
                </li>
                <li>
                    <label for="weight">weight</label>
                    <input type="number" id="weight" name="weight" 
                        v-model="info2.weight" required/>
                </li>
                <li>
                    <label for="description">description</label>
                    <textarea type="text" id="description" name="description" 
                        v-model="info2.description"/>
                </li>
            </ul>
            <button @click="toggleSteps">Previous</button>
            <button @click.prevent="submit">Submit</button>
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