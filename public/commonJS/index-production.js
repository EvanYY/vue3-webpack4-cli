// window.API_ROOT = window.location.protocol + '//' + window.location.hostname + ':9555/collector-admin' ;
if ((window.location.hostname === '11.11.190.185')) {
  window.API_ROOT = 'http://11.11.190.185:9555/collector-admin';
  window.API_ROOT_WS = 'ws://11.11.190.185:9555/collector-admin';
} else if ((window.location.hostname === '192.168.8.222')) {
  window.API_ROOT = 'http://192.168.8.222:9555/collector-admin';
  window.API_ROOT_WS = 'ws://192.168.8.222:9555/collector-admin';
} else if ((window.location.hostname === '210.12.194.201') || (window.location.hostname === '192.168.8.234')) {
  window.API_ROOT = 'http://210.12.194.201:9555/collector-admin';
  window.API_ROOT_WS = 'ws://210.12.194.201:9555/collector-admin';
} else if ((window.location.hostname === '192.168.8.239')) {
  window.API_ROOT = 'http://192.168.8.239:9555/collector-admin';
  window.API_ROOT_WS = 'ws://192.168.8.239:9555/collector-admin';
} else if ((window.location.hostname === '192.168.8.217')) {
  window.API_ROOT = 'http://210.12.194.201:8020/collector-admin';
  window.API_ROOT_WS = 'ws://210.12.194.201:8020/collector-admin';
} else if ((window.location.hostname === '124.207.128.50:9999')) {
  window.API_ROOT = 'http://124.207.128.50:9555/collector-admin';
  window.API_ROOT_WS = 'ws://124.207.128.50:9555/collector-admin';
}