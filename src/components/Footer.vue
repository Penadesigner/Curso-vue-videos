<template>
    <footer>
        <a :href="links.link" class="socialLink" v-for="(links, index) in socialLinks" :key="index">
            <img :src="links.icon" alt="">
        </a>
    </footer>
</template>

<script>
import api from '@/services/api'
export default {
    name: 'Footer',
    data(){
        return {
            socialLinks: []
        }
    },
    mounted(){
        api.get('/social-links.json').then(res => {
            this.socialLinks = res.data
        })
    }
}
</script>

<style scoped>
    footer {
        width: 100%;
        background-color: var(--color-background-nav);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-text-light);
    }

    .socialLink {
        border: 1px solid var(--color-text-light);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1em;
    }

    .socialLink img{
        width: 20px;
    }
</style>