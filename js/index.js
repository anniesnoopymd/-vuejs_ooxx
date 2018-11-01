var blocks = { type: 0 };
var vm = new Vue({
   el: "#app",
   data: {
      blocks: [],
      turn: 1 },

   mounted: function mounted() {
      this.restart();
   },
   methods: {
      restart: function restart() {
         this.blocks = Array.from({ length: 9 }, function (d, i) {
            return {
               id: i + 1,
               type: 0 };

         });
      },
      player_go: function player_go(block) {
         if (block.type == 0) {
            block.type = this.turn;
            this.turn = -this.turn;
         } else {
            alert("Not allowed");
         }
      } },

   computed: {
      pattern_data: function pattern_data() {var _this = this;
         // return this.turn==1?"O's turn":"X's turn"
         var verify_list = "123,456,789,147,258,369,159,357";
         var result =
         verify_list.split(",").
         map(function (vtext) {
            var add =
            _this.blocks.
            filter(function (d, i) {return vtext.indexOf(i + 1) != -1;}).
            map(function (d, i) {return d.type;}).
            reduce(function (a, b) {return a + b;}, 0);
            return {
               rule: vtext,
               value: add };

         });
         result = result.filter(function (obj) {return Math.abs(obj.value) == 3;});
         return result;
      },
      win_test: function win_test() {
         var winner = -1;
         if (this.pattern_data.length > 0) {
            winner = this.pattern_data[0].value;
         }
         if (winner == 3) {
            return "O Wins";
         } else if (winner == -3) {
            return "X Wins";
         }
         return (this.turn == 1 ? "O" : "X") + "' turn";
      } } });