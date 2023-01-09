<template>
    <main>
        <section>
            <h1>Contato</h1>
                <section class="contacts">
                    <div class="contato" v-for="(contato, index) in contacts" :key="index">
                        <h2>{{contato.title}}</h2>
                        <a :href="contato.link">{{contato.label}}</a>
                    </div>
                </section>
        </section>
    </main>
</template>
<script>
import api from '@/services/api.js'
export default ({
    name: 'Contato',
    data(){
        return {
            contacts: []
        }
    },
    mounted(){
        api.get('/contacts.json').then(res => {
            this.contacts = res.data
        }).catch(err => {
            console.log(err);
        })
    }
})
</script>
<style scoped>
main {
    display: flex;
    justify-content: center;
}

.contato {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1em;
}
</style>