<template>
    <div>
        <nav>
            
        </nav>
    </div>
    <section class="dashboard">

        <div class="dashboard-header">
            <h1>Welcome back, Eugene</h1>
            <p>You have 1 learning journeys</p>
        </div>

        <div class="learning-journeys">
            <ul class="tabs">
                <li class="tab tab--active"><SvgIcon path="/dashboard/school.svg" /><span>Google Adwords</span></li>
                <li class="tab tab--locked"><SvgIcon path="/dashboard/lock.svg" /><span>New learning journey</span></li>
            </ul>
        </div>

        <div class="divider divider-horizontal"></div>

        

       
        <div class="dashboard-main">

            <div class="dashboard-content">
                <div class="dashboard-content--learning">
                    <h2>What I'm learning</h2>
                    <div class="learning">
                        <div class="learning-header">
                            <h3>Currently learning</h3>
                            <SvgIcon path="/help.svg" />
                        </div>
                        <div class="learning-title">
                            <h4>Introduction to Adwords</h4>
                            <p>Last learnt on 14/03/2024</p>
                        </div>
                        <div class="learning-description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit vero blanditiis id libero nisi est quod ut! Laborum fuga eos enim atque obcaecati autem iste ex omnis dolorum similique.</p>
                        </div>
                        <div class="learning-button">
                            <button>
                                <span>Start task</span>
                                <SvgIcon path="/chevron_forward.svg" />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="divider divider-horizontal"></div>

                <div class="dashboard-content--learnt">
                    <h2>What I've learnt</h2>
                    <div class="dashboard-content--learnt-container">

                        <!-- this sections the duplicated content under it -->
                        <ul class="tabs">
                            <li class="tab tab--active">Tasks</li>
                            <li>Topics</li>
                            <li>Subjects</li>
                        </ul>

                        <div class="learnt-container">

                            <!-- this gets duplicated -->
                            <div class="learnt">

                                <div class="learnt-header">
                                    <div class="learnt-header--title">
                                        <span class="learnt--topic">Topic Name</span>
                                        <h3>Task Name</h3>
                                    </div>
                                    <p class="learnt-header--completed">Completed 26/04/2024</p>
                                </div>

                                <ul class="learnt-statistics">
                                    <li>
                                        <SvgIcon path="/dashboard/alarm.svg" />
                                        <span>Est. Completion time: 26 mins</span>
                                    </li>
                                    <li>
                                        <SvgIcon path="/dashboard/text_snippet.svg" />
                                        <a href="#" target="_blank">Review notes</a>
                                    </li>
                                </ul>

                                <div class="learnt-button">
                                    <button class="text-button">
                                        <span>Review task</span>
                                        <SvgIcon path="/chevron_forward.svg" />
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="divider divider-horizontal"></div>

                <div class="dashboard-content--learn">
                    <h2>What I need to learn</h2>
                    <div class="dashboard-content--learn-container">

                        <!-- this sections the duplicated content under it -->
                        <ul class="tabs">
                            <li class="tab tab--active">Topics</li>
                            <li>Subjects</li>
                        </ul>

                        <div class="learn-container">

                            <!-- this gets duplicated -->
                            <div class="learn">

                                <div class="learn-header">
                                    <h3>Topic Name</h3>
                                </div>

                                <ul class="learnt-statistics">
                                    <li>
                                        <SvgIcon path="/dashboard/alarm.svg" />
                                        <span>Est. Completion time: 26 mins</span>
                                    </li>
                                </ul>

                                <div class="learnt-button">
                                    <button class="text-button">
                                        <span>Review topic</span>
                                        <SvgIcon path="/chevron_forward.svg" />
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="divider divider-vertical"></div>


            <!-- Sidebar -->

            <div class="dashboard-sidebar">
                <div class="dashboard-sidebar--goals">
                    <div class="goal">

                        <div class="goal-header">
                            <div class="goal-header--text">
                                <h3>Goals</h3>
                                <button class="text-button">
                                    <span>Review goals</span>
                                    <SvgIcon path="/chevron_forward.svg" />
                                </button>
                            </div>
                            <SvgIcon path="/help.svg" />
                        </div>

                        <div class="goal-content">
                            <div class="goal-content--graph">
                                <img src="./example-graph" alt="graph">
                            </div>
                            <div class="goal-content--progress">
                                <p>I want to progress to intermediate level</p>
                                <div class="progress-bar">
                                    <div class="progress-bar--container">

                                    </div>
                                    <span class="progress-bar--percentage">0%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="pop-quiz">

                        
                    <div class="pop-quiz-header">
                        <h3>Pop Quiz</h3>
                        <SvgIcon path="/help.svg" />
                    </div>

                    <div class="pop-quiz--container">

                        <div class="pop-quiz-item">
                            <div class="pop-quiz-item--header">
                                <div class="pop-quiz-item--header-text">
                                    <span class="tag tag-normal">Normal</span>
                                    <p>Task Name</p>
                                </div>
                                <div className="progress progress--complete">
                                    <SvgIcon path="/check_circle.svg" />
                                    <p>To do</p>
                                </div>
                            </div>
                            <div class="pop-quiz-item--button">
                                <SvgIcon path="/play_circle.svg" />
                            </div>
                        </div>

                        <div class="divider divider-horizontal"></div>

                        <div class="pop-quiz-item">
                            <div class="pop-quiz-item--header">
                                <div class="pop-quiz-item--header-text">
                                    <span class="tag tag-medium">Medium</span>
                                    <p>Task Name</p>
                                </div>
                                <div className="progress progress--incomplete">
                                    <SvgIcon path="/cancel_circle.svg" />
                                    <p>To do</p>
                                </div>
                            </div>
                            <div class="pop-quiz-item--button">
                                <SvgIcon path="/play_circle.svg" />
                            </div>
                        </div>

                        <div class="divider divider-horizontal"></div>

                        <div class="pop-quiz-item">
                            <div class="pop-quiz-item--header">
                                <div class="pop-quiz-item--header-text">
                                    <span class="tag tag-hard">Hard</span>
                                    <p>Task Name</p>
                                </div>
                                <div className="progress progress--incomplete">
                                    <SvgIcon path="/cancel_circle.svg" />
                                    <p>To do</p>
                                </div>
                            </div>
                            <div class="pop-quiz-item--button">
                                <SvgIcon path="/play_circle.svg" />
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>

    </section>
</template>

<script>
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'DashboardView',
  components: {
    SvgIcon
  }
}
</script>

<style>

    h1, h2, h3, h4, p, a {
        margin: 0;
    }

    ul {
        padding: 0;
        list-style-type: none;
        margin: 0;
    }

    .divider {
        background: rgba(235, 235, 235, 1);
    }

    .divider-horizontal {
        padding: 0 32px;
        height: 1px;
    }

    .divider-vertical {
        padding: 32px 0;
        height: 100%;
        width: 1px;
    }

    .tabs {
        display: flex;
        margin: 0;
        gap: 16px;
        padding: 0;
    }

    .tab {
       display: flex;
       align-items: center;
       font-size: 16px;
       position: relative;
       gap: 8px;
    }

    .tab img {
        width: 24px;
        height: 24px;
    }

    .tab--active {
        color: #0043C5;
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

    main {
        display: flex;
    }

    main > div {
        flex: 1;
        max-width: 270px;
    }

    main > section {
        flex: 1;
        display: flex;
        flex-direction: column;
        background: #FCFCFC;
    }

    .learning-journeys {
        padding: 16px 32px;
    }

    .dashboard h1 {
        color: #1C1B1F;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }

    .dashboard h2 {
        color: #1C1B1F;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .dashboard-header {
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 8;
    }

    .dashboard-header p {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }

    .dashboard-main {
        display: flex;
        flex-direction: row;
        gap: 48px;
        padding: 32px;
    }

    .dashboard-content {
        display: flex;
        flex-direction: column;
        gap: 24px;
        flex: 1;
    }

    .dashboard-content--learning {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .learning {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid #EFEFEF;
        background: #FFF;
        max-width: 500px;
        gap: 16px;
    }

    .learning-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .learning-header h3 {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .learning-header svg path {
        fill: rgba(0, 50, 227, 1)
    }

    .learning-title {

    }

    .learning-title h4 {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learning-title p {
        color: #1C1B1F;
        font-size: 14px;
        font-style: italic;
        font-weight: 300;
        line-height: normal;
    }

    .learning-description p {
        color: #1C1B1F;
        font-size: 14px;
        font-style: italic;
        font-weight: 300;
        line-height: normal;
    }

    .learning-button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-self: stretch;
    }

    .learning-button button {
        display: flex;
        padding-left: 8px;
        align-items: center;
        border-radius: 8px;
        background: #0032E3;
    }

    .learning-button button span {
        color: #FFF;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 13px */
    }

    .learning-button button svg path {
        fill: #FFF;
    }

    .dashboard-content--learnt {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .dashboard-content--learnt-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .learnt-container {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    .learnt {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        border-radius: 8px;
        border: 1px solid #EFEFEF;
        background: #FFF;
        max-width: 240px;
    }

    .learnt-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .learnt-header--title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
    }

    .learnt--topic {
        color: #1C1B1F;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learnt-header--title h3 {
        color: #1C1B1F;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .learnt-header--completed {
        color: #000;
        font-size: 11px;
        font-style: italic;
        font-weight: 300;
        line-height: normal;
    }

    .learnt-statistics {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        align-self: stretch;
    }

    .learnt-statistics li {
        display: flex;
        align-items: center;
        gap: 4px;
        align-self: stretch;
    }

    .learnt-statistics svg path {
        fill: rgba(28, 27, 31, 1);
    }

    .learnt-statistics span {
        color: #1C1B1F;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .learnt-statistics a {
        color: #1C1B1F;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 18px */
        text-decoration-line: underline;
    }


    .text-button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border: 0;
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        
    }

    .text-button:hover span {
        border-bottom: 1px solid #0032E3;
    }

    .text-button span {
        color: #0032E3;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-bottom: 1px solid transparent;
    }

    .text-button svg path {
        fill: #0032E3;
    }

    .dashboard-content--learn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }

    .dashboard-content--learn-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }

    .learn-container {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }

    .learn {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        flex: 1 0 0;
        border-radius: 8px;
        border: 1px solid #EFEFEF;
        background: #FFF;
        max-width: 330px;
    }

    .leader-header h3 {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .dashboard-sidebar {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .goal {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid #EFEFEF;
        background: #FFF;
    }

    .goal-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
    }

    .goal-header--text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1 0 0;
    }

    .goal-header--text h3 {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .goal-content {
        display: flex;
        align-items: center;
        align-self: stretch;
    }

    .goal-content--progress {
        display: flex;
        padding: 8px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        max-width: 145px;
    }

    .progress-bar {
        display: flex;
        gap: 4px;
        align-items: center;
        width: 100%;
    }

    .progress-bar--container {
        background: rgba(219, 220, 255, 1);
        height: 2px;
        display: flex;
        width: 100%;
        align-items: flex-start;
        gap: 10px;
    }

    .progress-bar--percentage {
        color: #616161;
        text-align: right;
        font-family: Roboto;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    
    .pop-quiz {
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
        border-radius: 4px;
        border: 1px solid #EFEFEF;
        background: #FFF;
    }

    .pop-quiz-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .pop-quiz-header h3 {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .pop-quiz--container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
    }

    .pop-quiz-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        justify-content: space-between;
    }

    .pop-quiz-item--header {
        display: flex;
        /* align-items: center; */
        gap: 4px;
        align-self: stretch; 
        flex-direction: column;   
        
    }

    .pop-quiz-item--header-text {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .pop-quiz-item--header-text p {
        color: #000;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .tag {
        display: flex;
        padding: 4px 8px;
        align-items: center;
        gap: 8px;
        color: #6D6D6D;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .tag-normal {
        border-radius: 24px;
        border: 1px solid #EDEDED;
        background: #D2FFD1;
    }

    .tag-medium {
        border-radius: 24px;
        border: 1px solid #EDEDED;
        background: #FFE7D1;
    }

    .tag-hard {
        border-radius: 24px;
        border: 1px solid #EDEDED;
        background: #FFD1D1;
    }

    .progress {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .progress--complete svg path {
        fill: rgba(0, 116, 46, 1);
    }

    .progress--complete p {
        color: rgba(0, 116, 46, 1);;
    }

    .progress--incomplete svg path {
        fill: rgba(207, 0, 0, 1);
    }

    .progress--incomplete p {
        color: rgba(207, 0, 0, 1);
    }

    .progress p {
        
        font-size: 12px;
        font-style: italic;
        font-weight: 300;
        line-height: normal;
    }

    .pop-quiz-item--button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

</style>