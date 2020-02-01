const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("toast", () => {
  it("存在.", () => {
    expect(Toast).to.exist;
  });
  describe("props", function() {
    it("接受 autoClose 属性", done => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div);
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
        vm.$el.remove();
        vm.$destroy();
      });
    });
    it("接受 closeButton 属性", done => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭吧",
            callback
          }
        }
      }).$mount();
      let closeButton = vm.$el.querySelector(".close");
      expect(closeButton.textContent.trim()).to.eq("关闭吧");
      // bug 后增加下面这一行
      setTimeout(() => {
        closeButton.click();
        expect(callback).to.have.been.called;
        done();
        vm.$el.remove();
        vm.$destroy();
      }, 200); // bug 后增加这行
    });
    it("接受 enableHtml 属性", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      });
      vm.$slots.default = ['<strong id="test">hi</strong>'];
      vm.$mount();
      let strong = vm.$el.querySelector("#test");
      expect(strong).to.exist;
      vm.$el.remove();
      vm.$destroy();
    });
    it("接受 position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: "middle"
        }
      }).$mount();
      expect(vm.$el.classList.contains("position-middle")).to.eq(true);
      vm.$el.remove();
      vm.$destroy();
    });
  });
});
