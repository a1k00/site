$('.pentruimg').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
  
  });

  const primul=document.querySelector('.navig')
  window.addEventListener('scroll', checkScroll)
  function checkScroll() {
    const poss= window.scrollY
    if (poss>1000) {
        primul.classList.add ('navig_bg')
    } else {
    primul.classList.remove ('navig_bg')
    }
  }