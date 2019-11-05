$(function(){

  $('#search-btn').on('click', function() {
  // alert("クリックされました");
// 2,入力された郵便番号を取得していく

    let zipcode = $('#search-word').val();
    // alert(zipcode);
    // 2.ajax開始

    $.ajax({
      //通信の設定を書くブロック(画面も通信されずにデータをひっぱてこれる。console.logで確認)

      url:'http://zipcloud.ibsnet.co.jp/api/search',//通信
      type:'GET',//GET送信　OR POST送信　の設定
      dataType: 'jsonp',

      data:{//APIに送信するパラメーターの設定
        //キー：値（letのzipcodeの値）
        zipcode: zipcode
      }
    }).done( (data) =>{
      //通信が成功した場合のブロック
      // console.log(data);
      // console.log(data.results[0].address1);
      $('#prefecture').text(data.results[0].address1);
      $('#city').text(data.results[0].address2);
      $('#address').text(data.results[0].address3);


    }).fail ( (error) =>{
      //通信が失敗した場合のブロック
      console.log(error);
    })


});

});

// 1,アラートクリック時の反応するように
// JQ書くときの基本
// $(function(){
// });

// 2.入力された郵便番号を取得していく。ajax開始（日本郵便のAOIまで通過して住所を取得）
// 定型文　ajax
// $.ajax({

// }).done( (data) =>{

// }).fail ( (error) =>{

// })

