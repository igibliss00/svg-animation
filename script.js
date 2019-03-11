
let btn = document.querySelector('#cta');
let btn2 = document.querySelector('#cta2');

btn.onclick = () => {
let morphing = anime({
    targets: '#polymorph',
    points: [
      { value: '0.000 0.519, 69.600 0.519, 102.000 146.000, 600.000 200.000, 0.000 200.000, 0.000 0.519'},
      { value: '0.000 0.519, 0.000 0.519, 102.000 146.000, 600.000 200.000, 0.000 200.000, 0.000 0.519'},
    ],
    easing: 'easeOutQuad',
    duration: 2000,
    loop: false
  });

  anime({
    targets: '.blip',
    opacity: 1,
    duration: 1500,
    delay: 1000,
    translateY: 150
  })

  let promise = morphing.finished.then(() => {
    btn2.onclick = (() => {
      let morphing = anime({
        targets: '#polymorph',
        points: [
          { value: '0.000 0.519, 69.600 0.519, 102.000 146.000, 600.000 200.000, 0.000 200.000, 0.000 0.519'},
          { value: '0.000 0.519, 69.600 0.519, 599.317 0.000, 600.000 200.000, 0.000 200.000, 0.000 0.519'},
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: false
      });

      anime({
        targets: '.blip',
        opacity: 0,
        duration: 500,
        translateY: -800
      })
    })
  });
}


