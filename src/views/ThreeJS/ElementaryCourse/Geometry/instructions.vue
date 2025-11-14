<!--
 * @Author: zengjing
 * @Date: 2024-10-29 16:25:18
 * @LastEditTime: 2024-11-12 10:29:15
 * @FilePath: \xsqdc:\Users\29737\Desktop\muckAbout\src\views\ThreeJS\ElementaryCourse\Geometry\instructions.vue
 * @Description: 
-->
<template>
  <MdPreview
    :editorId="id"
    :modelValue="decode(text)"
    :codeTheme="appStore.codeTheme"
    :theme="appStore.theme"
    :previewTheme="appStore.previewTheme"
    :codeFoldable="appStore.codeFoldable"
    :autoFoldThreshold="appStore.autoFoldThreshold"
  />
</template>
<script setup>
import { MdPreview, MdCatalog } from "md-editor-v3";
import { encode, decode } from "js-base64";
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
const id = "preview-only";
const text = ref(
  "W1Z1ZStUaHJlZS5qc+aVmeeoi++8ml0oaHR0cDovL3d3dy53ZWJnbDNkLmNuL3BhZ2VzL2VjZmMyYy8pIGh0dHA6Ly93d3cud2ViZ2wzZC5jbi9wYWdlcy9lY2ZjMmMvClszROaooeWei2dsdGbkuIvovb3nvZHnq5kodGhyZWVqc+W8gOWPkSldKGh0dHA6Ly93d3cud2ViZ2wzZC5jbi9wYWdlcy9jM2VjYzkvKSBodHRwOi8vd3d3LndlYmdsM2QuY24vcGFnZXMvYzNlY2M5LwojIyMg6YCP6KeG5oqV5b2x55u45py6UGVyc3BlY3RpdmVDYW1lcmHvvJrop4bplKXkvZMK6YCP6KeG5oqV5b2x55u45py655qE5Zub5Liq5Y+C5pWwYGZvdiwgYXNwZWN0LCBuZWFyLCBmYXJg5p6E5oiQ5LiA5Liq5Zub5qOx5Y+wM0Tnqbrpl7TvvIzooqvnp7DkuLrop4bplKXkvZPvvIzlj6rmnInop4bplKXkvZPkuYvlhoXnmoTniankvZPvvIzmiY3kvJrmuLLmn5Plh7rmnaXvvIzop4bplKXkvZPojIPlm7TkuYvlpJbnmoTniankvZPkuI3kvJrmmL7npLrlnKhDYW52YXPnlLvluIPkuIrjgIIKfCDlj4LmlbAgfCDlkKvkuYkgfCDpu5jorqTlgLwgfAp8IC0gfCAtIHwgLSB8CnwgZm92IHwg55u45py66KeG6ZSl5L2T56uW55u05pa55ZCR6KeG6YeO6KeS5bqmIHwgNTAgfAp8IGFzcGVjdCB8IOebuOacuuinhumUpeS9k+awtOW5s+aWueWQkeWSjOerluebtOaWueWQkemVv+W6puavlO+8jOS4gOiIrOiuvue9ruS4ukNhbnZhc+eUu+W4g+WuvemrmOavlHdpZHRoIC8gaGVpZ2h0IHwgMSB8CnwgbmVhciB8IOebuOacuuinhumUpeS9k+i/keijgeaIqumdouebuOWvueebuOacuui3neemuyB8IDAuMSB8CnwgZmFyfCDnm7jmnLrop4bplKXkvZPov5zoo4HmiKrpnaLnm7jlr7nnm7jmnLrot53nprvvvIxmYXItbmVhcuaehOaIkOS6huinhumUpeS9k+mrmOW6puaWueWQkSB8IDIwMDAgfAoKIyMjIOebuOacuuaOp+S7tk9yYml0Q29udHJvbHMKLSDml4vovazvvJrmi5bliqjpvKDmoIflt6bplK4KLSDnvKnmlL7vvJrmu5rliqjpvKDmoIfkuK3plK4KLSDlubPnp7vvvJrmi5bliqjpvKDmoIflj7PplK4KICAKYGBganMKaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzLmpzJzsKCmNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSguLi4pOwpjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7CnJlbmRlcmVyLnNldFNpemUoLi4uKTsKZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTsgLy8g5oiW6ICF5bCG5YW25re75Yqg5YiwIFZ1ZSDnu4Tku7bnmoQgcmVmIOS4rQogCmNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTsKYGBg"
);
console.log(decode(text.value));
</script>
<style scoped lang="scss"></style>
