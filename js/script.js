'use strict';

window.onload = function () {
  // modal page
  $('.button-checked').click(function () {
    $('.modal').fadeOut(500);
  });

  // button go top
  $('.button-go-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    });
  });

  new Swiper('.swp-main-banner', {
    loop: true,
    // autoplay: true,
    pagination: {
      el: '.swp-p-main-banner',
      type: 'fraction',
    },
  });
  new Swiper('.swp-buttons-quick-nav', {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 4,
    pagination: {
      el: '.swp-p-buttons-quick-nav',
      clickable: true,
    }
  });
  new Swiper('.swp-bottom-banner', {
    loop: true,
    effect: 'fade',
    // autoplay: true,
    pagination: {
      el: '.swp-p-bottom-banner',
      clickable: true,
    }
  });

  $('.button-like-plus').click(function () {
    $(this).toggleClass('button-like-plused');
  });

  
  function sort_data(_obj, _where) {
    $.each(_where, function (index, item) {
      var temp_data = _obj[index];

      var temp_name = $(this).find('.best-product-name');
      temp_name.text(temp_data.product);
      var temp_price = $(this).find('.best-product-price');
      temp_price.text(temp_data.price);
      var temp_capacity = $(this).find('.best-capacity');
      temp_capacity.text(temp_data.capacity);
    });
  }
  var button_color = $('.slide');
  var button_generation = $('.best-navigation a');
  var content_product = $('.best-product-text-wrapper');
  // sort_data(product_data_all[1], content_product);

  
  $.each(button_generation, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();

      var temp = String(55 * index);
      var temp_str = 'translateY(' + temp + "px)";
      button_color.css("transform", temp_str);
      button_color.css("transition", "all ease-in .25s");

      
      sort_data(product_data_all[index], content_product);
      button_generation.removeClass('b-nav-button-focus');
      $(this).addClass('b-nav-button-focus');
      
    });
  });
  
  // sort_data(product_data_2, content_product);
  // var temp_y = index * 55;
  // button_color.css("transform", "translateY(55px*index)");
  
  var product_data_1 = [{
    product: null,
    price: null,
    capacity: null
  }, {
    product: null,
    price: null,
    capacity: null
  }, {
    product: null,
    price: null,
    capacity: null
  }, {
    product: '매일아침 튼튼플러스',
    price: '1,500원',
    capacity: '(100ml)'
  }, {
    product: '아이러브 루테인',
    price: '2,600원',
    capacity: '(130ml)'
  }
  ];
  var product_data_2 = [{
    product: '식물성유산균쌀요거트',
    price: '2,000원',
    capacity: '(150ml)'
  }, {
    product: '러브미 케일&셀러리',
    price: '1,800원',
    capacity: '(130ml)'
  }, {
    product: '식물성유산균 위&캡슐',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '노니&깔라만시',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '식물성유산균 오메가&치아씨드',
    price: '2,100원',
    capacity: '(130ml)'
  }
  ];
  var product_data_3 = [{
    product: '위러브플러스',
    price: '2,600원',
    capacity: '(130ml)'
  }, {
    product: '러브미 케일&셀러리',
    price: '1,800원',
    capacity: '(130ml)'
  }, {
    product: '노니&깔라만시',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '마시는 새싹',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '식물성유산균 위&캡슐',
    price: '2,100원',
    capacity: '(130ml)'
  }
  ];
  var product_data_4 = [{
    product: '위러브플러스',
    price: '2,600원',
    capacity: '(130ml)'
  }, {
    product: '노니&깔라만시',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '명일엽&헛개 발효 녹즙',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '하트러브 레드비트&당근',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '마시는 새싹',
    price: '2,100원',
    capacity: '(130ml)'
  }
  ];
  var product_data_5 = [{
    product: '위러브플러스',
    price: '2,600원',
    capacity: '(130ml)'
  }, {
    product: '노니&깔라만시',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '돌미나리와민들레',
    price: '2,400원',
    capacity: '(130ml)'
  }, {
    product: '식물성유산균 오메가&치아씨드',
    price: '2,100원',
    capacity: '(130ml)'
  }, {
    product: '명일엽&헛개 발효 녹즙',
    price: '2,100원',
    capacity: '(130ml)'
  }
  ];

  var product_data_all = [
    product_data_1,
    product_data_2,
    product_data_3,
    product_data_4,
    product_data_5
  ];

}