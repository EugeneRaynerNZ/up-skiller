<template>

    <Navigation></Navigation>
    
    <section class="learning">

        <div class="learning-header">
            <h1>Introduction to Adwords</h1>
            <p class="estimated-learning-time">Est. learning time 5 minutes</p>
        </div>

        <div class="learning--container">
            <div class="learning-title">
                <h2>What am I learning?</h2>
                <p>A description here of what I am learning. Below are links to resources</p>
            </div>

            <div class="learning-title">
                <h2>Choose how to learn</h2>
            </div>

            <ul class="tabs">
                <li class="tab tab--active">Video Resources</li>
                <li class="tab">Articles</li>
                <li class="tab">Audiobooks</li>
            </ul>

            <div class="resources">
                <div class="resource">
                    <p class="resource--title">Learning Resource</p>
                    <p class="resource--status">To do</p>
                </div>
            </div>

            <div class="learnt">
                <div class="learnt-notes">
                    <h2>What did you learn?</h2>
                    <textarea name="" id=""></textarea>
                </div>

                <div class="two-column--container">
                    <div class="learnt-upload">
                        <h3>Upload documents / pictures</h3>
                        <div class="upload">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="learning--controls">
            <button class="active">
                <SvgIcon path="/chevron_backward.svg" />
                <span>Previous Task</span>
            </button>
            <button class="inactive">
                <span>Next Task</span>
                <SvgIcon path="/chevron_forward.svg" />
            </button>
        </div>

    </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'DashboardView',
  components: {
    Navigation,
    SvgIcon
  }
}
</script>

<style>

    :root {
        --sidebar-width: 268px;
    }

    h1, h2, h3, h4, p, a {
        margin: 0;
    }

    ul {
        padding: 0;
        list-style-type: none;
        margin: 0;
    }

    a, button {
        cursor: pointer;
    }

    .tabs {
        display: flex;
        margin: 0;
        gap: 16px;
    }

    .tab {
       display: flex;
       align-items: center;
       font-size: 16px;
       position: relative;
       gap: 4px;
       cursor: pointer;
    }

    .tab img {
        width: 24px;
        height: 24px;
    }

    .tab--active {
        color: #0043C5;
        cursor: default;
    }

    .tab--active svg path {
        fill: #0043C5;
    }

    .tab--active:after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        background: #0043C5;
        height: 1px;
        width: 100%;
    }

    .tab--locked {
        color: rgba(0,0,0,0.2)
    }

    .tab--locked svg path {
        fill: rgba(0,0,0,0.4);
    }

    .estimated-learning-time {
        color: #1C1B1F;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learning {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #FCFCFC;
        margin-left: var(--sidebar-width);
        padding: 32px;
        gap: 24px;
        min-height: 100vh;
    }

    .learning--container {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .learning-header {

    }

    .learning-header h1 {
        color: #1C1B1F;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learning-title {
        display: flex;
        flex-direction: column;
    }

    .learning-title h2 {
        color: #1C1B1F;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learning-title p {
        color: #1C1B1F;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learning .resources {
        display: flex;
        gap: 16px;
    }

    .learning .resources .resource {
        flex: 0 0 25%;
        padding: 16px;
        display: flex;
        gap: 4px;
        border-radius: 4px;
        border: 1px solid #E0E0E0;
        flex-direction: column;
        cursor: pointer;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
        background: white;
    }

    .learning .resources .resource:hover {
        box-shadow: none;
    }

    .learning .resources .resource .resource--title {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learning .resources .resource .resource--status {
        color: #1C1B1F;
        font-size: 14px;
        font-style: italic;
        font-weight: 300;
        line-height: normal;
    }

    .learnt {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
        background: #f3f3f3;
        border-radius: 8px;
    }

    .learnt-notes {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    .learnt-notes h2 {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learnt-notes textarea {
        border-radius: 8px;
        border: 1px solid #E0E0E0;
        background: #FFF;
        width: 100%;
        min-height: 135px;
        box-sizing: border-box;
        padding: 8px;
        font-size: 14px;
    }

    .two-column--container {
        display: flex;
    }

    .learnt-upload {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .learnt-upload h3 {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .upload {
        display: flex;
        padding: 32px 0px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 8px;
        border: 1px dashed #0005FF;
        background: #FFF;
    }

    .learning--controls {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .learning--controls button {
        display: flex;
        padding-right: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 13px */
    }

    .learning--controls button.active {
        color: #1C1B1F;
        border: 1px solid #1C1B1F;
    }

    .learning--controls button.active svg path {
        fill: #1C1B1F;
    }

    .learning--controls button.inactive {
        color: #CACACA;
        border: 1px solid #CACACA;
        cursor: default;
    }

    .learning--controls button.inactive svg path {
        fill: #CACACA;
    }

</style>