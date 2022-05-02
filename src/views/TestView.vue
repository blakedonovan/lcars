<template>
  <h1>Testground - the component demo section</h1>

  <RippleButtonSmall @click="showModal">Demo Modal</RippleButtonSmall>
  <Modal v-show="ModalState" @close="closeModal" @save="saveBooking">
    <template v-slot:headerTitle> Demo Modal </template>

    <template v-slot:body>
      <form>
        <input type="date" name="" id="" />
        <input type="checkbox" name="" id="" />
      </form>
    </template>
  </Modal>

  <hr />
  <DropDown>
    <template #menuButton>Drop Down </template>

    <template #li>
      <button>Play</button>
    </template>
  </DropDown>

  <hr />

  <Collapsible>
    <template v-slot:buttonText>CollapseToggle</template>

    <template v-slot:collapsibleContent>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ligula eu ipsum
      ultrices interdum. Morbi ac enim sed quam porttitor molestie in at metus. Nam ut
      consectetur diam. Donec enim erat, varius ut nunc eget, congue ultrices dui. In
      sodales quis nisi vehicula faucibus. Nulla eu magna nec dui sollicitudin consectetur
      pharetra vitae nisi. In bibendum purus nulla, non aliquet nisi tristique eget. Ut a
      vulputate orci. Nullam fringilla quis purus elementum blandit. Nullam volutpat
      pharetra porttitor. Fusce erat lacus, tincidunt in tristique sit amet, pellentesque
      sed quam. Sed malesuada, massa a varius tempus, orci leo feugiat nisl, sed aliquam
      lorem leo at justo. Pellentesque ipsum urna, finibus eget tempor vel, tincidunt eu
      erat. Praesent sed nulla turpis. Vivamus mattis leo lobortis massa venenatis
      rhoncus. Duis pretium pulvinar libero, vel mattis lectus dignissim eu. Maecenas
      purus nisl, vulputate imperdiet laoreet in, dapibus a purus. Vestibulum tincidunt
      porttitor posuere. Cras ac lectus bibendum, blandit urna in, laoreet dui. Duis at
      sem at risus consectetur tristique sit amet nec ipsum. Vivamus laoreet arcu eget
      vestibulum mollis. Sed pretium lorem felis, at tincidunt risus semper id. Phasellus
      auctor purus quam, nec vestibulum dui faucibus eget. Suspendisse nulla ligula,
      tempor quis quam in, tincidunt tempus ante. Cras ac bibendum enim. Proin cursus
      efficitur rutrum. Phasellus ullamcorper enim erat, posuere gravida dui mattis et.
      Pellentesque mi ipsum, rhoncus eget elit ut, fringilla egestas enim. Sed ac ligula
      velit. Nunc at luctus lectus, sed tempor diam. Maecenas non viverra odio, ut blandit
      ex. Morbi nec ornare nisl. Maecenas dapibus, sapien nec maximus hendrerit, neque
      magna consectetur augue, ac vulputate mauris neque id orci. Fusce consectetur, arcu
      et fermentum imperdiet, orci sem interdum arcu, sit amet volutpat metus ipsum sed
      nulla. Suspendisse potenti. Sed nec dignissim massa. Nullam a varius sapien. Vivamus
      non leo ac sem imperdiet luctus. Curabitur ante lacus, lacinia vel gravida et,
      lacinia a diam. Morbi eleifend a est eu vestibulum. Phasellus rutrum velit eu tellus
      efficitur eleifend. Aenean justo lectus, imperdiet at tortor eu, tempus tempus
      nulla. Mauris in lectus tincidunt nisi ultricies tempus. Maecenas commodo placerat
      rhoncus. Cras vehicula iaculis ex, vitae varius enim vulputate sit amet. Nam cursus
      maximus gravida. Nulla lacinia luctus purus, sed elementum lectus molestie sit amet.
      Donec convallis nunc sit amet consequat lacinia. Sed sed posuere leo. Nulla eget
      egestas justo.
    </template>
  </Collapsible>
  <hr />

  <Form></Form>
  <hr />

  <h2>Customizable button test</h2>

  <Button type="info xxl">
    <template #text>Play</template>
  </Button>
  <p></p>

  <Button type="warning sm">
    <template #text>Small</template>

    <template #icon>OO</template>
  </Button>

  <p></p>
  <Button type="danger xl">
    <template #text>XL</template>
  </Button>
  <p></p>
  <Button type="success xxl" :disabled="true">
    <template #text>XXL</template>

    <template #icon></template>
  </Button>
  <Button><template #text>Fallback</template></Button>

  <Button type="warning xs"><template #text>Extra Small</template></Button>

  <Button type="danger tiny"><template #text>Tiny</template></Button>

  <Button type="outlined xxl"><template #text>BCM</template></Button>
</template>

<script>
import RippleButtonSmall from "@/components/subComponents/buttons/RippleButtonSmall.vue";
import Collapsible from "@/components/subComponents/collapse/CollapseContent.vue";
import DropDown from "@/components/subComponents/menus/DropDown.vue";
import Modal from "@/components/subComponents/dialogues/Modal.vue";
import Form from "@/components/subComponents/forms/loginForm.vue";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import Button from "@/components/subComponents/buttons/ButtonCustomizeable.vue";
export default {
  setup() {},
  props: [],
  data() {
    return {
      ModalState: false,
    };
  },
  components: {
    Collapsible,
    DropDown,
    Modal,
    RippleButtonSmall,
    Form,
    Datepicker,
    Button,
  },

  methods: {
    showModal() {
      this.ModalState = true;
    },
    closeModal() {
      this.ModalState = false;
    },
    saveBooking() {
      console.log("booked");
    },
  },
};
</script>
