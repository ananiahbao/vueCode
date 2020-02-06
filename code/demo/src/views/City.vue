<template>
    <div>
        <mt-index-list :style="{height: cityHeight}">
            <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
                <mt-cell :title="item.name" v-for="item in data.city" :key="item.cityId"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cityHeight: 0,
            datalist: 0
        }
    },
    mounted () {
        this.cityHeight = document.documentElement.clientHeight - 50 + 'px'

        this.$axios({
            url: 'https://m.maizuo.com/gateway?k=7226420',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15806305334105988735223"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => {
            console.log(res.data)
            this.datalist = this.handleCityArr(res.data.data.cities)
        })
    },
    methods: {
        handleCityArr (list) {
            var arr = []
            for (var i = 65; i < 91; i++) {
                arr.push(String.fromCharCode(i))
            }

            var listarr = []
            for (var j = 0; j < arr.length; j++) {
                let arrs = list.filter(item => item.pinyin.substring(0, 1) === arr[j].toLowerCase())
                listarr.push({
                    index: arr[j],
                    city: arrs
                })
            }
            console.log(listarr)
            return listarr
        }
    }
}
</script>
