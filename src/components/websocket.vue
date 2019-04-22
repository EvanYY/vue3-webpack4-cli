<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "websocket-modules",
  components: {},
  mixins: [],
  props: {
    url: {
      type: String,
      default: ""
    },
    componentId: {
      type: String,
      default: "none"
    }
  },
  watch: {},
  computed: {},
  data() {
    return {
      websock: null,
      lockReconnect: false,
      tt: null,
      heartCheck: {
        timeout: 3000,
        timeoutObj: null,
        serverTimeoutObj: null,
        start: function(ws, fn) {
          console.log("start");
          var self = this;
          this.timeoutObj && clearTimeout(this.timeoutObj);
          this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
          this.timeoutObj = setTimeout(function() {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            console.log("55555");
            ws.send("123456789");
            self.serverTimeoutObj = setTimeout(function() {
              console.log(111);
              console.log(ws);
              ws.close();
              // createWebSocket();
            }, self.timeout);
          }, this.timeout);
        }
      }
    };
  },
  methods: {
    createdWebsocket() {
      try {
        this.websock = new WebSocket(this.url);
        this.websock.onmessage = this.onMessage;
        this.websock.onopen = this.onOpen;
        this.websock.onerror = this.onError;
        this.websock.onclose = this.onClose;
      } catch (e) {
        console.log(e.message);
        this.reconnect();
      }
    },
    isJsonString(str) {
      try {
        if (typeof JSON.parse(str) === "object") {
          return true;
        }
      } catch (e) {}
      return false;
    },
    onMessage(e) {
      //拿到任何消息都说明当前连接是正常的
      console.log("接收到消息");
      this.heartCheck.start(this.websock); // 心跳
      if (this.isJsonString(e.data)) {
        /** @业务逻辑代码
				 */
        let res = JSON.parse(e.data);
      }
    },
    onOpen(e) {
      //心跳检测重置
      this.heartCheck.start(this.websock);
    },
    onError(e) {
      console.log("发生异常了");
      this.reconnect(); // 重连
    },
    onClose(e) {
      console.log("链接关闭");
      if (e.code === 3001 && e.reason === "手动关闭") return;
      this.reconnect(); // 断线重连
    },
    reconnect() {
      if (this.lockReconnect) {
        return;
      }
      this.lockReconnect = true;
      //没连接上会一直重连，设置延迟避免请求过多
      this.tt && clearTimeout(this.tt);
      this.tt = setTimeout(() => {
        this.createWebSocket();
        this.lockReconnect = false;
      }, 4000);
    }
  },
  created() {},
  mounted() {
    this.createdWebsocket();
  },
  beforeDestroy() {
    this.websock.close(3001, "手动关闭");
  }
};
</script>

<style scoped lang='scss'>
</style>
