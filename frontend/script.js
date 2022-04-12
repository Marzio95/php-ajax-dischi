new Vue({
    el: '#app',
    data() {
        return {
            arrayDischi: ''
        }

    },
    created() {
        axios.get('http://localhost/php-ajax-dischi/db/data.php')
            .then(response => this.arrayDischi = response.data)

    }
})