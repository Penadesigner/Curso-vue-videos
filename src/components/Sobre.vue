<template>
    <main>
        <section>
            <h1>Sobre</h1>
                <div class="about" v-html="about">
                    
                </div>
        </section>
    </main>
</template>
<script>
import api from '@/services/api.js'
export default ({
    name: 'Sobre',
    data(){
        return {
            about: ''
        }
    },
    mounted(){
        api.get('/about.json').then(res => {
            this.about = res.data.about
        }).catch(err => {
            console.log(err);
        })
    }
})
</script>
<style scoped>
main {
    display: flex;
    
}
</style>