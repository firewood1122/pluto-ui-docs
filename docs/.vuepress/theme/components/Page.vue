<template>
  <div>
    <main class="page pluto-main">
      <slot name="top" />
      <Content class="theme-default-content" />
      <PageEdit />
      <PageNav v-bind="{ sidebarItems }" />
      <slot name="bottom" />
    </main>
    <div class="pluto-example" v-if="exampleUrl">
      <div class="pluto-display-wrapper">
        <iframe :src="exampleUrl" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems", "exampleUrl"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;

  &.pluto-main {
    padding-right 30rem;
  }
}
.pluto-example {
  position: fixed;
  top: 3.6rem;
  right 0;
  bottom: 0;
  padding-bottom: 2rem;
  width: 29.8rem;
  overflow-y: auto;

  .pluto-display-wrapper {
    margin: 4rem auto 0;
    padding: 8rem 2.5rem 0 1.5rem;
    width: 18rem;
    height: 43rem;
    background: url('../public/img/phone.png') no-repeat;
    background-size: contain;

    iframe {
      height: 25rem;
    }
  }
}
</style>
