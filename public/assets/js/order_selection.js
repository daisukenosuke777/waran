var Tavern = function() {};
Tavern.prototype.registration = function(param1, param2, param3) {
  console.log("param1 :" + param1, "param2 :" + param2, "param3 :" + param3);
  $.ajax({
    type: 'POST',
    url: '/order/insert',
    async: true,
    dataType: 'text',
    data: {
      'order_group': param1,
      'item_name': param2,
      'price': param3,
    },    
    success: function(result){
      $('.modal').modal('hide');
      alert("注文が完了しました。");
    },
    error: function(result){
      $('.modal').modal('hide');
      alert("注文に失敗しました。");
    }
  });
}
