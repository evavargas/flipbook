<template  id="modal-template">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            Para continuar, habilite la pantalla completa o presione la tecla
            F11
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <button
              @click="fullScreen"
              style="background-color: #614389; color: white"
            >
              Habilitar Pantalla Completa
              <monitor-icon @click="fullScreen = true" id="show-modal" />
            </button>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            para desactivar, presione nuevamente F11
            <button
              style="background-color: #614389; color: white"
              class="modal-default-button"
              @click="$emit('close')"
            >
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MonitorIcon from "vue-material-design-icons/MonitorScreenshot";

export default {
  methods: {
    fullScreen() {
      var elem = document.getElementById("app");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    },
  },
  components: {
    MonitorIcon,
  },
};
</script>
<style scoped>
#app {
  padding: 1rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header,
.modal-footer {
  margin-top: 0;
  color: #614389;
  font-size: 14px;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>