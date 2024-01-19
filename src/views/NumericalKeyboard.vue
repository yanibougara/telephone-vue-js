<template>
    <div class="number">{{ currentNumber }}</div>
    <div class="pavé-tactile">
        <button @click="touche(0)">0</button>
        <button @click="touche(1)">1</button>
        <button @click="touche(2)">2</button>
        <button @click="touche(3)">3</button>
        <button @click="touche(4)">4</button>
        <button @click="touche(5)">5</button>
        <button @click="touche(6)">6</button>
        <button @click="touche(7)">7</button>
        <button @click="touche(8)">8</button>
        <button @click="touche(9)">9</button>

        <button @click="telephone()">📞</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentNumber: "",
        };
    },
    methods: {
        touche(digit) {
            this.currentNumber += digit;
            this.$emit("number-updated", this.currentNumber);
        },
        telephone() {
            this.$emit("number-called", this.currentNumber);
            this.currentNumber = "";
        },
    },
};
</script>

<style scoped>
.pavé-tactile {
    width: 275px;
    margin: 300px;
    margin-top: 30px;
    border: 1px solid;
    height: 435px;
    border-radius: 20px;
    box-shadow: 0 0 30px;
    padding-top: 276px;
}
button {
    width: 50px;
    height: 50px;
}

.number {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 30px;
    margin-bottom: -81px;
}
</style>
