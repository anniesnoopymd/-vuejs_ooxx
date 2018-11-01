var blocks = { type: 0 };
var vm = new Vue({
   el: "#app",
   data: {
      blocks: [],
      turn: -1 },

   mounted: function mounted() {
      this.restart();
   },
   methods: {
      restart: function restart() {
         this.blocks = Array.from({ length: 9 }, function () {
            return {
               type: 0 };

         });
      },
      player_go: function player_go(block) {
         block.type = this.turn;
         this.turn = -this.turn;

      } } });