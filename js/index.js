var blocks = { type: 0 };
var vm = new Vue({
   el: "#app",
   data: {
      blocks: Array.from({ length: 9 }, function () {
         return {
            type: 1 };

      }) } });