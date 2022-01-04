<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style>
@import './common.css';

page,
view {
    display: flex;
}

page {
    display: flex;
    min-height: 100%;
    background-color: #EFEFEF;
}

template {
    display: flex;
    flex: 1;
}
</style>
