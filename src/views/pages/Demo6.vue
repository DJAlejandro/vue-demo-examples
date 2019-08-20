<template>
    <div class="container">
        <city-list
            :cities="cities"
            :letter="letter"
            :cityScorllTop="cityScorllTop"
            @change="handleLetterChange2"
        ></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange" :letter2="letter2"></city-alphabet>
    </div>
</template>

<script>
import axios from "axios";
import CityList from "../../components/demo6/List";
import CityAlphabet from "../../components/demo6/Alphabet";
export default {
    name: "City",
    components: {
        CityList,
        CityAlphabet
    },
    data() {
        return {
            cities: {},
            letter: "",
            letter2: "",
            cityScorllTop: [],
            len: 0
        };
    },
    methods: {
        getCityInfo() {
            axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
        },
        handleGetCityInfoSucc(res) {
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                this.cities = data.cities;

                for (var key in this.cities) {
                    // console.log("key." + key + " = " + this.cities[key].length);

                    let len = this.len + 27 + 39 * this.cities[key].length;
                    this.len = len;

                    this.cityScorllTop.push(len);
                }
            }
        },
        handleLetterChange(letter) {
            this.letter = letter;
        },
        handleLetterChange2(letter2) {
            this.letter2 = letter2;
        }
    },
    mounted() {
        this.getCityInfo();
    }
};
</script>

<style lang="scss" scoped>
</style>