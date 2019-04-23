<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>报障</a-layout-header>
      <a-layout-content>
        <a-upload
          name="files"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          :data="{
            ...datas
          }"
          action="http://192.168.10.175:8058/dcc-oms/work/workwork/save?token=d06ff1f0a91450870175a8c3c5a8ed5a"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="avatar"
          />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  name: "headerNav",
  components: {},
  mixins: [],
  props: {},
  watch: {},
  computed: {},
  data() {
    return {
      name: "nav",
      loading: false,
      imageUrl: "",
      datas: {
        address: "string",
        description: "string",
        faultCommonId: 1,
        faultTypeId: 1,
        serveTime: "2019-04-23 06:43:35"
      }
    };
  },
  methods: {
    nav() {
      console.log(this.name);
    },
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      // if (!isJPG) {
      //   this.$message.error('You can only upload JPG file!')
      // }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      // return isJPG && isLt2M
      return isLt2M;
    }
  },
  created() {},
  mounted() {
    // this.heart.start(this.nav);
  },
  beforeDestroy() {}
};
</script>

<style scoped lang='scss'>
#components-layout-demo-basic {
  text-align: center;
  // height: 100vh;
  .ant-layout {
    height: 100vh;
    // background-color: red;
    // display: flex;
    // align-items:a
  }
  .ant-layout-content {
    background: #fff;
    color: #000;
  }
  .ant-layout-header,
  .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
    // font-size: 20px;
    font-size: 30px;
  }
  .ant-layout-header {
  }
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
</style>
