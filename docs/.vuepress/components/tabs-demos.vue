<template>
  <div class="container">
    <f-tabs :selected="selected" direction="vertical">
      <f-tabs-header>
        <f-tabs-item name="1">tab 1</f-tabs-item>
        <f-tabs-item name="2">tab 2</f-tabs-item>
        <f-tabs-item name="3">tab 3</f-tabs-item>
      </f-tabs-header>
      <f-tabs-body>
        <f-tabs-pane name="1">content 1</f-tabs-pane>
        <f-tabs-pane name="2">content 2</f-tabs-pane>
        <f-tabs-pane name="3">content 3</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
  </div>
</template>
<script>
import FTabs from "../../../src/tabs.vue";
import FTabsHeader from "../../../src/tabs-header.vue";
import FTabsBody from "../../../src/tabs-body.vue";
import FTabsItem from "../../../src/tabs-item.vue";
import FTabsPane from "../../../src/tabs-pane.vue";

export default {
  components: {
    "f-tabs": FTabs,
    "f-tabs-header": FTabsHeader,
    "f-tabs-body": FTabsBody,
    "f-tabs-item": FTabsItem,
    "f-tabs-pane": FTabsPane,
  },
  data() {
    return {
      selected: "2",
    };
  },
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  padding: 15px;
}
.container:hover {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3), 0 2px 4px 0 rgba(0, 0, 0, 0.3);
}
ul > li {
  list-style: circle;
}
</style>
