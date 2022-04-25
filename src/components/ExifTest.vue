<template>
  <div>
    <h1>选择文件</h1>
    <label for="main">
      <input type="file" name="main" @change="chooseFile" multiple />
    </label>
    <div class="content">
      <div class="box" v-for="exifItem in output" >
        <template v-if="exifItem">
          <div v-for="([key, value]) in exifItem">
            {{key}}: {{value}}
          </div>
        </template>
        <div v-else>empty</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import exifr from 'exifr';

const exifOption = {
  tiff: true,
  ifd1: true,
  exif: true,
  gps: true,
  reviveValues: true,
  translateKeys: true,
  translateValues: true,
  mergeOutput: true,
  jfif: true,
};

@Component
export default class ExifTest extends Vue {
  private output: any[] | null = [];

  async chooseFile(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);
      const res = (await Promise.all(files.map((file) => exifr.parse(file, exifOption)))) as Record<
        string,
        any
      >[];
      this.output = res.map((info) => (info ? Object.entries(info) : null));
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .box {
    border: 1px solid #888;
    padding: 1vw;
    margin-right: 1vw;
    margin-bottom: 1vw;

    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
}
</style>
