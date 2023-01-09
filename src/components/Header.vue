<template>
    <header>
        <nav class="container">
            <a href="/"><img id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt=""></a>
            <img @click="openMenu() " id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" alt="">

            <div id="menu-overlay" v-if="menuActive" @click="closeMenu()">
            </div>

            <div id="menu-itens" :class="{active: menuActive}">
                <a href="/"><img id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" alt=""></a>
                <ul>
                    <li v-on:click="closeMenu()"><router-link to="/">Home</router-link></li>
                    <li v-on:click="closeMenu()"><router-link to="/about">About</router-link></li>
                    <li v-on:click="closeMenu()"><router-link to="/videos">Videos</router-link></li>
                    <li v-on:click="closeMenu()"><router-link to="/contato">Contato</router-link></li>
                </ul>
                    
            </div>
        
        </nav>

    </header>
</template>

<script>
import '../style/global.css'
export default ({
    name: 'Header',
    data(){
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function(){
            this.menuActive = true
        },
        closeMenu: function(){
            this.menuActive = false
        }
    }
    })
</script>

<style scoped>
header {
    background-color: var(--color-background-nav);
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

ul li {
    list-style: none;
    margin: 10px;
}

ul li a{
    color: white;
    text-align: center;
}

#logo {
    width: 100px;
}

#menu-button {
    width: 30px;
}

#menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background: var(--color-background-nav);
    opacity: 0.7;

}

#menu-logo {
    width: 100px;
}

#menu-itens {
    position: fixed;
    top: 0;
    right: 0;
    background: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
}

#menu-itens.active {
    display: flex;
}

@media (min-width: 700px){
    #menu-button,#menu-overlay, #menu-logo {
        display: none;
    }
    #menu-itens {
        display: flex;
        position: static;
        height: 100px;
        width: auto;
    }

    ul {
        display: flex;
        align-items: center;
        ;
    }

    ul li {
    margin: 10px;
    margin-left: 20px;
    }
}

</style>