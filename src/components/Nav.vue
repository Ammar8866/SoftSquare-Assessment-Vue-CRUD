<template>
<div class="nav-bar">
    <div class="title"><img src="softsquare.jpg" width="60" height="60"></div>
    <div class="title">WELCOME  IN  MY  VUE-CRUD</div>
    <ul class="top-nav">
        <li>
            <a href='/' v-on:click="myBtn1()">Logout</a>
        </li>
    </ul>
</div>
</template>

  
<script>
export default {
    name: 'Nav',
    methods:{
        myBtn1(){
            alert("Press Ok for Logout");
        }
    }

}
</script>
