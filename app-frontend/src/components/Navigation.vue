<template>
    <div class="sidebar">
        <div class="logo-container">
            <SvgIcon class="logo" path="/navigation/logo.svg" />
        </div>

        <nav>
            <a class="active" href="/dashboard">
                <SvgIcon class="logo" path="/navigation/dashboard.svg" />
                <span>Dashboard</span>
            </a>
            <a href="/learning">
                <SvgIcon class="logo" path="/navigation/school.svg" />
                <span>Learn</span>
            </a>
            <a href="#">
                <SvgIcon class="logo" path="/navigation/flag.svg" />
                <span>Goals</span>
            </a>
            <a href="#">
                <SvgIcon class="logo" path="/navigation/settings.svg" />
                <span>Settings</span>
            </a>
        </nav>
    </div>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'NavigationView',
  components: {
    SvgIcon
  }
}
</script>

<style>
    :root {
        --sidebar-width: 268px;
    }

    .sidebar {
        height: 100vh;
        position: fixed;
        width: var(--sidebar-width);
    }

    .sidebar .logo-container {
        height: 177px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar nav {
        display: flex;
        flex-direction: column;
        padding: 16px;
    }

    .sidebar nav a {
        display: flex;
        gap: 16px;
        color: #000;
        padding: 12px 16px;
    }

    .sidebar nav a svg path {
        fill: #000;
    }

    .sidebar nav a.active {
        background-color: #F6F6FF;
        border-left: 4px solid #0043C5;
        color: #0043C5;
        border-radius: 0px 8px 8px 0px;
    }

    .sidebar nav a.active svg path {
        fill: #0043C5;
    }

    .logo-container .logo {
        width: 108px;
    }

</style>