<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog">
        <header class="modal-header">
          <slot name="headerTitle"> </slot>

          <button type="button" class="btn-close" @click="close">x</button>
        </header>

        <section class="modal-body">
          <slot name="body"> </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer"> </slot>
          <RippleButtonSmall @click="close">Cancel</RippleButtonSmall>
          <RippleButtonSmall @click="save">Save</RippleButtonSmall>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import RippleButtonSmall from "@/components/subComponents/buttons/RippleButtonSmall.vue";
export default {
  name: "Modal",
  components: {
    RippleButtonSmall,
  },
  methods: {
    close() {
      this.$emit("close"); // the modal component emits(communicates) the event to the parent where its implemented
      // the custom v-on directive @close catches the emit and closes the modal
    },
    save() {
      this.$emit("save");
    },
  },
};
</script>

<style lang="scss">
$boxShadowSmall: 0 3px 5px 0 rgba(0, 0, 0, 0.2);

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: $boxShadowSmall;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #093a96;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: row;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  min-width: 720px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #a9ae4a;
  background: transparent;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
