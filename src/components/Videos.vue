<template>
    <main>
        <section>
            <h1>Videos</h1>
            <div class="tamanho">
                <section class="videos" v-for="(video, index) in videos" :key="index">
                    <a class="video" :href="video.link" target="_blank">
                        <img :src="video.thumb" alt="">
                        <div class="video-title">
                            <h2>{{video.title}}</h2>
                        </div>
                    </a>
                </section>
            </div>
        </section>
    </main>
</template>
<script>
import api from '@/services/api.js'
export default ({
    name: 'Videos',
    data(){
        return {
            videos: []
        }
    },
    mounted(){
        api.get('/videos.json').then(res => {
            this.videos = res.data
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

.tamanho {
    display: flex;
    flex-direction: row;
}

.videos {
    margin: 2em;
}

.video-title, .videos img {
        display: flex;
        width: 100%;
    }

@media (max-width:700px){
    .tamanho {
        flex-direction: column;
    }
    a.video {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .video-title, .videos img {
        display: flex;
        justify-content: center;
        width: 80%;
    }
}


</style>