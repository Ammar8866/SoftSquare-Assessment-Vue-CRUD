<template>
<Nav />
<div class="wrraper">
    <div class="left-content">
        <SideBar />
    </div>
    <div class="right-content">
        <router-view />
    </div>
</div>
</template>

<script>
import Nav from './Nav.vue'
import SideBar from './SideBar.vue'
export default {
    name: 'Admin',
    components: { Nav, SideBar }
}
</script>

<style>

   </style>
