<template>
  <div
    id="app"
    :class="{ 'has-mouse': hasMouse }"
    @touchstart="hasMouse = false"
  >
  
  <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->


  </Modal>
    <sidebar-menu :menu="menu" :theme="'white-theme'" :relative="true" :collapsed="true" >
      <span slot="dropdown-icon"><view-array-icon /></span>
      <span slot="toggle-icon"><view-day /></span>
      <span slot="header" class="icon-company"></span>
    </sidebar-menu>
    <Flipbook
      class="flipbook"
      :pages="pages"
      :pagesHiRes="pagesHiRes"
      :startPage="pageNum"
      v-slot="flipbook"
      ref="flipbook"
      @flip-left-start="onFlipLeftStart"
      @flip-left-end="onFlipLeftEnd"
      @flip-right-start="onFlipRightStart"
      @flip-right-end="onFlipRightEnd"
      @zoom-start="onZoomStart"
      @zoom-end="onZoomEnd"
    >
      <div class="action-bar">

          <monitor-icon
           @click="fullScreen" class="btn left" 
        id="show-modal" 
       
         />
        <left-icon
          class="btn left"
          :class="{ disabled: !flipbook.canFlipLeft }"
          @click="flipbook.flipLeft"
        />
        <plus-icon
          class="btn plus"
          :class="{ disabled: !flipbook.canZoomIn }"
          @click="flipbook.zoomIn"
        />
        <span class="page-num">
          Page {{ flipbook.page }} of {{ flipbook.numPages }}
        </span>
        <minus-icon
          class="btn minus"
          :class="{ disabled: !flipbook.canZoomOut }"
          @click="flipbook.zoomOut"
        />
        <right-icon
          class="btn right"
          :class="{ disabled: !flipbook.canFlipRight }"
          @click="flipbook.flipRight"
        />
      </div>
    </Flipbook>
  </div>
</template>

<script lang="coffee">
import 'vue-material-design-icons/styles.css'
import MonitorIcon from 'vue-material-design-icons/MonitorScreenshot'
import LeftIcon from 'vue-material-design-icons/ChevronLeftCircle'
import RightIcon from 'vue-material-design-icons/ChevronRightCircle'
import PlusIcon from 'vue-material-design-icons/PlusCircle'
import MinusIcon from 'vue-material-design-icons/MinusCircle'
import Flipbook from './Flipbook'
import ViewArrayIcon from 'vue-material-design-icons/ViewArray.vue';
import ViewDay from 'vue-material-design-icons/ViewDay';
import Modal from '@/components/Modal.vue'

export default
  name: 'app'
  components: {MonitorIcon, Modal,ViewDay, ViewArrayIcon, Flipbook, LeftIcon, RightIcon, PlusIcon, MinusIcon }
  data: ->
    showModal:true
    menu: [
      {
        header: true,
        title: 'Catalogo',
        hiddenOnCollapse: true
        hidden: true
        class: ''
        attributes: {}
      },
      {
        href: '',
        title: 'Capítulos',
        icon: {
          element:'span'
          class:'chapter'
        }
        child: [
          {
            href: '/#2',
            title: 'Capítulo 1'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#4',
            title: 'Capítulo 2'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#6',
            title: 'Capítulo 3'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#10',
        title: 'Apendice',
        icon: {
          element:'span'
          class:'chapter'
        }
        child: [
          {
            href: '/#10',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#12',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#14',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#16',
        title: 'Final',
        icon: {
          element:'span'
          class:'activity'
        }
        child: [
          {
            href: '/#16',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#18',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#20',
        title: 'Final II',
        icon: {
          element:'span'
          class:'activity'
        }
        child: [
          {
            href: '/#20',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#20',
        title: 'Final III',
        icon: {
          element:'span'
          class:'activity'
        }
        child: [
          {
            href: '/#20',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#20',
        title: 'Final IV',
        icon: {
          element:'span'
          class:'activity'
        }
        child: [
          {
            href: '/#20',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#20',
        title: 'Final V',
        icon: {
          element:'span'
          class:'activity'
        }
        child: [
          {
            href: '/#20',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
      {
        href: '/#20',
        title: 'Final VI',
        icon: {
          element:'span'
          class:'activity'
        }
        child: [
          {
            href: '/#20',
            title: 'Aclaraciones'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Referencias'
            icon: 'fa fa-chart-area',
          },
          {
            href: '/#20',
            title: 'Glosario'
            icon: 'fa fa-chart-area',
          }
        ]
      },
    ],
    pages: [],
    pagesHiRes: [],
    hasMouse: true
    pageNum: null
  methods:
    fullScreen: ->
        elem = document.getElementById("app")
        if (elem.requestFullscreen) then elem.requestFullscreen()

    onFlipLeftStart: (page) -> console.log 'flip-left-start', page
    onFlipLeftEnd: (page) ->
      console.log 'flip-left-end', page
      window.location.hash = '#' + page
    onFlipRightStart: (page) -> console.log 'flip-right-start', page
    onFlipRightEnd: (page) ->
      console.log 'flip-right-end', page
      window.location.hash = '#' + page
    onZoomStart: (zoom) -> console.log 'zoom-start', zoom
    onZoomEnd: (zoom) -> console.log 'zoom-end', zoom
    setPageFromHash: ->
      n = parseInt window.location.hash.slice(1), 10
      @pageNum = n if isFinite n
  mounted: ->
    window.addEventListener 'keydown', (ev) =>
      flipbook = @$refs.flipbook
      return unless flipbook
      flipbook.flipLeft() if ev.keyCode == 37 and flipbook.canFlipLeft
      flipbook.flipRight() if ev.keyCode == 39 and flipbook.canFlipRight

    # Simulate asynchronous pages initialization
    setTimeout (=>
      @pages = [
        null
        'images/front.png'
        'images/cat1.jpg'
        'images/cat2.jpg'
        'images/cat3.png'
        'images/cat4.png'
        'images/cat5.jpg'
        'images/cat6.gif'
        'images/cat7.png'
        'images/cat8.png'
        'images/cat9.jpg'
        'images/cat10.png'
        'images/cat11.png'
        'images/cat12.png'
        'images/land1.jpg'
        'images/land2.jpg'
        'images/land3.jpg'
        'images/land4.jpg'
        'images/land5.jpg'
        'images/land6.jpg'
        'images/back.png'
      ]
      @pagesHiRes = [
        null
        'https://catalogimg.blob.core.windows.net/catalogo2020/front.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat1.jpg'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat2.jpg'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat3.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat4.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat5.jpg'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat6.gif'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat7.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat8.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat9.jpg'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat10.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat11.png'
        'https://catalogimg.blob.core.windows.net/catalogo2020/cat12.png'
        'images-large/1.jpg'
        'images-large/2.jpg'
        'images-large/3.jpg'
        'images-large/4.jpg'
        'images-large/5.jpg'
        'images-large/6.jpg'
        'https://catalogimg.blob.core.windows.net/catalogo2020/back.png'
      ]
    ), 1

    window.addEventListener 'hashchange', @setPageFromHash
    @setPageFromHash()
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.chapter {
  background-image: url(./assets/icons/book.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.activity {
  background-image: url(./assets/icons/rocket.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.icon-company {
  background-image: url(./assets/logo.png);
  background-position: center;
  width: 50px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: contain;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  color: #302b63;
  overflow: hidden;
  margin-right: 5px;
  margin-left: 8px;
}

.action-bar {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-bar .btn {
  font-size: 30px;
  color: #614389;
}

.action-bar .btn svg {
  bottom: 0;
}

.action-bar .btn:not(:first-child) {
  margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
  color: #b882ff;
  filter: drop-shadow(1px 1px 5px #000);
  cursor: pointer;
}

.action-bar .btn:active {
  filter: none !important;
}

.action-bar .btn.disabled {
  color: #a284c9;
  pointer-events: none;
}

.action-bar .page-num {
  font-size: 12px;
  margin-left: 10px;
}

.flipbook .viewport {
  width: 86vw;
  height: calc(100vh - 50px - 40px);
}

.flipbook .bounding-box {
  box-shadow: 0 0 20px #000;
}

body {
  overflow-x: hidden;
}
</style>
