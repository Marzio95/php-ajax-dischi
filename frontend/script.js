new Vue({
    el: '#app',
    data() {
        return {
            arrayDischi: '',
            selected: "general",
        }

    },
    created() {
        axios.get('http://localhost/php-ajax-dischi/db/data.php')
            .then(response => this.arrayDischi = response.data)
    },
    computed: {
        changeMusicFunction() {
            let arrayDischiFiltered = null;
            if (this.selected.toLowerCase() == "") {
                return this.arrayDischi;
            } else if (this.selected.toLowerCase() == "general") {
                return this.arrayDischi;
            } else {
                arrayDischiFiltered = this.arrayDischi.filter((element) => {
                    return (
                        element.genre.toLowerCase() == this.selected.toLowerCase()
                    );
                });
            }

            return arrayDischiFiltered;
        },
    }
})