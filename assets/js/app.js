$(".menu__icon").click(function(e) 
{
    e.preventDefault();
    $(this).toggleClass('active');
    $(".profile__menu").toggleClass('active');
    $(".profile__menu-box").toggleClass('active');
  });

  $(document).on('mouseup', function(e)
  {
    let burger = $('.menu__icon');
    let profile_menu = $('.profile__menu');
    let profile_menu_box = $('.profile__menu-box');

    if(!burger.is(e.target)) {
        burger.removeClass('active');
        profile_menu.removeClass('active');
        profile_menu_box.removeClass('active');
    }   
  });


  $(".planet-tab").click(function(e) 
{
    e.preventDefault();
    $(".planet-tab").addClass('inactive');
    $(".planet-tab").removeClass('active');
    $(this).removeClass('inactive');
    $(this).toggleClass('active');

    $(".planet-image").addClass('inactive');
    $(".planet-text").addClass('inactive');
    $(".planet-distance").addClass('inactive');
    $(".planet-time").addClass('inactive');

    $(".planet-image").removeClass('active');
    $(".planet-text").removeClass('active');
    $(".planet-distance").removeClass('active');
    $(".planet-time").removeClass('active');
  });

  $(".moon-tab").click(function(e) 
  {
      e.preventDefault();
      $(".moon-image").removeClass('inactive');
      $(".moon-text").removeClass('inactive');
      $(".moon-distance").removeClass('inactive');
      $(".moon-time").removeClass('inactive');

      $(".moon-image").addClass('active');
      $(".moon-text").addClass('active');
      $(".moon-distance").addClass('active');
      $(".moon-time").addClass('active');
    });

    
  $(".mars-tab").click(function(e) 
  {
      e.preventDefault();

      $(".mars-image").removeClass('inactive');
      $(".mars-text").removeClass('inactive');
      $(".mars-distance").removeClass('inactive');
      $(".mars-time").removeClass('inactive');

      $(".mars-image").addClass('active');
      $(".mars-text").addClass('active');
      $(".mars-distance").addClass('active');
      $(".mars-time").addClass('active');
    });

    
  $(".europa-tab").click(function(e) 
  {
      e.preventDefault();
      $(".europa-image").removeClass('inactive');
      $(".europa-text").removeClass('inactive');
      $(".europa-distance").removeClass('inactive');
      $(".europa-time").removeClass('inactive');

      $(".europa-image").addClass('active');
      $(".europa-text").addClass('active');
      $(".europa-distance").addClass('active');
      $(".europa-time").addClass('active');
    });

    
  $(".titan-tab").click(function(e) 
  {
      e.preventDefault();

      $(".titan-image").removeClass('inactive');
      $(".titan-text").removeClass('inactive');
      $(".titan-distance").removeClass('inactive');
      $(".titan-time").removeClass('inactive');

      $(".titan-image").addClass('active');
      $(".titan-text").addClass('active');
      $(".titan-distance").addClass('active');
      $(".titan-time").addClass('active');
    });