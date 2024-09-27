gsap.registerPlugin(ScrollTrigger, ScrollSmoother,ScrollToPlugin);

const smoother = ScrollSmoother.create({
 wrapper: "#wrapper",
 content: "#content",
 smooth: 1,
 effects: true,
 preventDefault: true
});
  

gsap.fromTo('.box-cont1', { 
    opacity: 0 ,
    y:-20
    },{
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out" ,
    immediateRender: false
});

gsap.to('.box-cont1-p1', {
    scrollTrigger: {
        trigger: '.box', 
        start: 'top top', 
        end: '+=300', 
        scrub: 0,
    },
    x: 100, 
    y: 230,
    ease: "none",
});

gsap.to('.box-cont1-p2', {
    scrollTrigger: {
        trigger: '.box', 
        start: 'top top', 
        end: '+=300', 
        scrub: 0,
    },
    x: -100, 
    y: 230, 
    ease: "none",

});

gsap.fromTo('.box-cont2', { 
    perspective: 1000 }, { 
    delay: 1,
    perspective: "none" })

gsap.fromTo(".box-cont2 p, .box-cont2 .V4X", { 
    rotateX: "-90",  
    z: "-500", 
    opacity: 0 }, { 
    rotateX: "0", 
    y: 0, 
    z: 0, 
    opacity: 1, 
    duration: 1 
}, 0.1)

gsap.to(".box-cont2 p:nth-child(1)", {
    scrollTrigger: {
        trigger: '.box',
        start: 'top top', 
        end: '+=900', 
        scrub: 0.9,
    },
    y: -220, 
    ease: "none",
});

gsap.to(".box-cont2 p:nth-child(2)", {
    scrollTrigger: {
        trigger: '.box',
        start: 'top top', 
        end: '+=900', 
        scrub: 0.9,
    },
    y: -150, 
    ease: "none",
});

gsap.to(".V4X span:nth-child(1)", {
    scrollTrigger:{
        trigger: '.box',
        start: 'top top', 
        end: '+=900', 
        scrub: 0.9,
    },    
    y:-160    
});
gsap.to(".V4X span:nth-child(2)", {
    scrollTrigger:{
        trigger: '.box',
        start: 'top top', 
        end: '+=900', 
        scrub: 0.9,
    },    
    y:-270
});
gsap.to(".V4X span:nth-child(3)", {
    scrollTrigger:{
        trigger: '.box',
        start: 'top top', 
        end: '+=900', 
        scrub: 0.9,
    },    
    y:-110   
    
});
gsap.to(".V4X span:nth-child(4)", {
    scrollTrigger:{
        trigger: '.box',
        start: 'top top', 
        end: '+=900', 
        scrub: 0.9,
    },    
    y:-220    
});

gsap.fromTo(".hr-header",  // Указание правильного селектора
  {
    width: "0%",  // Начальная ширина
    marginLeft: "72.3rem)"
  },
  {
    scrollTrigger: {
      trigger: ".hr-header",  // Элемент, который запускает анимацию
      start: "bottom bottom-=100",  // Когда нижняя часть триггера совпадает с нижней частью экрана
      end: "+=100",  // Анимация длится в течение 100px после начала
    },
    width: "136.6rem",  // Конечная ширина
    ease: "power2.out",  // Плавность анимации
     marginLeft: "4.0rem"
  }
);

ScrollTrigger.clearScrollMemory();
gsap.to("body", {
    duration: 1,
    backgroundColor:"rgb(212, 201, 80)",
    scrollTrigger: {
      trigger: "body", // Элемент, который запускает анимацию
      start: "top top",    // Когда верх элемента совпадает с верхом экрана
      end: "bottom top",   // Когда низ элемента совпадает с верхом экрана
      scrub: true,         // Включает синхронизацию со скроллом        
      immediateRender: false
    },
    keyframes: [
      { backgroundColor: "rgb(212, 201, 201)", duration: 1 },
      { backgroundColor: "rgb(201, 212, 201)", duration: 1 },
      { backgroundColor: "rgb(201, 201, 212)", duration: 1 }
    ],
    
  });

  
  document.querySelector(".boxanchor-1").addEventListener("click", function(e) {
      e.preventDefault();
      gsap.to(window, {duration: 1.5, scrollTo: "#box3"});
    });
    
    document.querySelector(".boxanchor-2").addEventListener("click", function(e) {
        e.preventDefault();
    gsap.to(window, {duration: 1.5, scrollTo: "#box4"});
});



gsap.utils.toArray(".box2-cont2 a").forEach((element, index) => {
    gsap.from(element.querySelector("p"), {
      scrollTrigger: {
          trigger: element,
          start: "top+=100 bottom",
          end: "bottom+=100 bottom",
        },
        opacity: 0,
        y: 50,
        ease: "power2.out",
        duration: 1,
        stagger: 0.2,  // Задержка между анимациями для элементов <p>
    });
    gsap.from(element.querySelector("span"), {
        scrollTrigger: {
            trigger: element,
            start: "to+=100 bottom",
            end: "bottom+=100 bottom",
            
        },
        x: "8rem",
        rotation: 90,
        ease: "power2.out",
        duration: 1,
        stagger: 0.2,  // Задержка между анимациями для элементов <span>
    });
});
// Анимация <hr> элементов
gsap.utils.toArray(".box2-cont2 hr").forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
        trigger: element,
        start: "top+=50 bottom",
        end: "bottom+=100 bottom",
    },
    width: "0%",
    ease: "power2.out",
    duration: 1,
    delay: 0.4,
    stagger: 0.9
});
});

gsap.from(".box2-cont1", {
    scrollTrigger: {
        trigger: ".box2-cont1",
        start: "top+=100 bottom",
        end: "bottom+=100 bottom",
    },
    opacity: 0,
    y: 50,
    ease: "power2.out",
    duration: 1,
});


gsap.fromTo(
    ".box3-cont1",
    {
        y:"-15.7rem"
    },
    {scrollTrigger: {
        trigger: ".box3",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
    y:"8.7rem"
}
);

gsap.fromTo(
    ".box3-cont2",
    {
        y:"60.8rem"
    },
    {scrollTrigger: {
        trigger: ".box3",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 ,

    },
    y:"-19.8rem"
}
);

// span X
gsap.fromTo(
    ".box3 span",
    {
        y: "120.8rem"
    },
    {
        y: "-40.8rem", 
        scrollTrigger: {
            trigger: ".box3", 
            start: "top bottom", 
            end: "bottom top",
            scrub: 1, 
        }
    }
);

gsap.fromTo(
    ".box4 span:nth-child(2)",
    {
        y: "50.8rem"
    },
    {
        scrollTrigger: {
            trigger: ".box4", 
            start: "top bottom", 
            end: "bottom top",
            scrub: 1, 
        },
        y: "-18.8rem", 
    }
);

gsap.fromTo(
    ".box4 span:nth-child(3)",
    {
        y: "150rem"
    },
    {
        scrollTrigger: {
            trigger: ".box4", 
            start: "top bottom", 
            end: "bottom top",
            scrub: 1,  
        },
        y: "-36rem", 
    }
);

gsap.fromTo(
    ".box4 span:nth-child(4)",
    {
        y: "250rem"
    },
    {
        scrollTrigger: {
            trigger: ".box4", 
            start: "top bottom", 
            end: "bottom top",
            scrub: 1, 
        },
        y: "-50rem", 
    }
);

gsap.fromTo(
    ".box4 span:nth-child(5)",
    {
        y: "200rem"
    },
    {
        scrollTrigger: {
            trigger: ".box4", 
            start: "top bottom", 
            end: "bottom top",
            scrub: 1, 
        },
        y: "-40rem", 
    }
);

gsap.fromTo(
    ".box4 span:nth-child(6)",
    {
        y: "100rem"
    },
    {
        scrollTrigger: {
            trigger: ".box4", 
            start: "top bottom", 
            end: "bottom top",
            scrub: 1, 
        },
        y: "-20rem", 
    }
);






gsap.fromTo(".box4-cont1",{
    y: "120.8rem"
    },{
    scrollTrigger: {
        trigger: ".box4",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 ,
    },
     y: "-40.8rem"
    }
);

gsap.fromTo(".box4-cont1 img",{
    y: "17rem"
    },{
    scrollTrigger: {
        trigger: ".box4",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 ,
    },
     y: "-7rem"
    }
);

gsap.fromTo(".box4-cont2",{
    y: "130.8rem"
    },{
    scrollTrigger: {
        trigger: ".box4",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 ,
    },
     y: "-30.8rem"
    }
);

gsap.fromTo(".box4-cont img",{
    y: "17rem"
    },{
    scrollTrigger: {
        trigger: ".box4",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 ,
    },
     y: "-7rem"
    }
);

gsap.fromTo(".box5", {
    // Начальные значения (если нужны)
  }, {
    scrollTrigger: {
      trigger: ".box5",   // Элемент, который нужно зафиксировать
      start: "top top",  // Когда начинается фиксация
      end: () => `+=${document.querySelector(".box5").offsetHeight - document.querySelector(".box5-cont1").offsetHeight}px`,      // Продолжительность фиксации (500px прокрутки)
      pin: ".box5-cont1",         // Закрепить элемент
      pinSpacing: false,  // Если нужно убрать отступы после фиксации
      
    }
  });


  gsap.fromTo(".box-text-anim span:nth-child(2)", {
    x: "140rem",  
    y: "70rem",
  },
  {
    scrollTrigger: {
      trigger: ".box-text-anim", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.5,  
      
    },
    x: "-140rem",  
    y: "-70rem",
  }
);

gsap.fromTo(".box-text-anim span:nth-child(3)", {
    x: "-480rem",  
  },
  {
    scrollTrigger: {
      trigger: ".box-text-anim", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.5, 
      
    },
    x: "140rem", 
  }
);

gsap.fromTo(".box-text-anim span:nth-child(4)", {
    x: "280rem", 
    y: "140.5rem"
},
{
    scrollTrigger: {
        trigger: ".box-text-anim", 
        start: "top bottom", 
        end: "bottom top",
        scrub: 1.5,  
        
    },
    x: "-140rem",
    y: "-40rem"
  }
);


gsap.fromTo(".box-text-anim span:nth-child(5)", {
    x: "280rem", 
    y: "-70rem"
},
{
    scrollTrigger: {
        trigger: ".box-text-anim", 
        start: "top bottom", 
        end: "bottom top",
        scrub: 1.5,  
        
    },
    x: "-252rem",
    y: "63rem"
  }
);


gsap.fromTo(".box-text-anim span:nth-child(1)", {
    x: "-420rem",
    y: "-40.5rem"
  },
  {
    scrollTrigger: {
      trigger: ".box-text-anim", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.5, 
      
    },
    x: "350rem", 
    y: "13rem"
  }
);

gsap.fromTo(".b6-anim1 span:nth-child(2)", {
    y: "37.5rem"
  },
  {
    scrollTrigger: {
      trigger: ".box6", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1, 
      
    },
    y: "-38.5rem"
  }
);

gsap.fromTo(".b6-anim1 span:nth-child(1)", {
    y: "37.5rem"
  },
  {
    scrollTrigger: {
      trigger: ".box6", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.5, 
      
    },
    y: "-38.5rem"
  }
);

gsap.fromTo(".b6-anim2 span:nth-child(2)", {
    y: "37.5rem"
  },
  {
    scrollTrigger: {
      trigger: ".box6", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.3, 
      
    },
    y: "-38.5rem"
  }
);

gsap.fromTo(".b6-anim2 span:nth-child(1)", {
    y: "33.6rem"
  },
  {
    scrollTrigger: {
      trigger: ".box6", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.7, 
      
    },
    y: "-36rem"
  }
);

gsap.fromTo(".b6-anim3 > span:nth-child(1)", {
    y: "33.6rem"
  },
  {
    scrollTrigger: {
      trigger: ".box6", 
      start: "top bottom", 
      end: "bottom top",
      scrub: 1.9, 
      
    },
    y: "-36rem"
  }
);

function animbox6() {

  const letters = document.querySelectorAll('.box6-span-anim span');
  
  let scrubValue = 1;
  const counter = 0.2;

  letters.forEach((letter, index) => {

    // Сохраняем анимацию в переменную
    const animation = gsap.fromTo(letter, {
        y: "37.5rem"
      },
      {
        scrollTrigger: {
          trigger: ".box6", 
          start: "top bottom", 
          end: "bottom top",
          scrub: scrubValue, 
          
        },
        y: "-38.5rem"
      }
    );

    scrubValue += counter;


  });
}
animbox6();

gsap.fromTo(".b6-anim4 span:nth-child(2)", {
  y: "37.5rem"
},
{
  scrollTrigger: {
    trigger: ".box6", 
    start: "top bottom", 
    end: "bottom top",
    scrub: 1.3, 
    
  },
  y: "-38.5rem"
}
);

gsap.fromTo(".b6-anim4 span:nth-child(1)", {
  y: "33.6rem"
},
{
  scrollTrigger: {
    trigger: ".box6", 
    start: "top bottom", 
    end: "bottom top",
    scrub: 1.7, 

  },
  y: "-36rem"
}
);


gsap.fromTo(".box7", {
  // Начальные значения (если нужны)
}, {
  scrollTrigger: {
    trigger: ".box7",   // Элемент, который нужно зафиксировать
    start: "top top",  // Когда начинается фиксация
    end: () => `+=${document.querySelector(".box7").offsetHeight - document.querySelector(".box7-cont1").offsetHeight}px`,// Продолжительность фиксации (500px прокрутки)
    pin: ".box7-cont1",         // Закрепить элемент
    pinSpacing: false,  // Если нужно убрать отступы после фиксации
   
  }
});

gsap.fromTo(".box7-cont2 img", {
  y: "-100vh"
},
{
  scrollTrigger: {
    trigger: ".box7", 
    start: "top bottom", 
    end: "bottom top",
    scrub: 0, 
    
  },
  y:  "100vh"  ,
  ease: "none",
}
);

let isFlipped1 = false; // Флаг для отслеживания состояния переворота
let isFlipped2 = false;
const img1 = document.querySelector(".box8 img:nth-child(1)"); // Получаем элемент изображения
const img2 = document.querySelector(".box8 img:nth-child(2)");

gsap.fromTo(img1,
  {
    x: "60vw", // Начальная позиция
    rotateY: 0 // Начальный угол поворота
  }, 
  { 
    x: "-60vw", // Конечная позиция
    scrollTrigger: {
      trigger: img1, // Элемент триггера
      start: "top bottom", // Когда начинается анимация
      end: "bottom top", // Когда заканчивается анимация
      scrub: 0, // Плавное движение
       // Включаем маркеры для отладки
      onUpdate: (self) => {
        // Проверяем направление скролла
        if (self.direction === -1 && !isFlipped1) { // Если скроллим вверх и еще не перевернули
          isFlipped1 = true; // Устанавливаем флаг переворота
          gsap.to(img1, { rotateY: 180, duration: 0.1 }); // Плавно поворачиваем на 180 градусов
        } else if (self.direction === 1 && isFlipped1) { // Если скроллим вниз и уже перевернули
          isFlipped1 = false; // Сбрасываем флаг переворота
          gsap.to(img1, { rotateY: 0, duration: 0.1 }); // Возвращаем в исходное состояние
        }
      }
    },
    ease: "none", // Линейная анимация
  }
);

gsap.fromTo(img2,
  {
    x: "-60vw", // Начальная позиция
    rotateY: 0 // Начальный угол поворота
  }, 
  { 
    x: "60vw", // Конечная позиция
    scrollTrigger: {
      trigger: img2, // Элемент триггера
      start: "top bottom", // Когда начинается анимация
      end: "bottom top", // Когда заканчивается анимация
      scrub: 0, // Плавное движение
       // Включаем маркеры для отладки
      onUpdate: (self) => {
        // Проверяем направление скролла
        if (self.direction === -1 && !isFlipped2) { // Если скроллим вверх и еще не перевернули
          isFlipped2 = true; // Устанавливаем флаг переворота
          gsap.to(img2, { rotateY: 0, duration: 0.1 }); // Плавно поворачиваем на 180 градусов
        } else if (self.direction === 1 && isFlipped2) { // Если скроллим вниз и уже перевернули
          isFlipped2 = false; // Сбрасываем флаг переворота
          gsap.to(img2, { rotateY: 180, duration: 0.1 }); // Возвращаем в исходное состояние
        }
      }
    },
    ease: "none", // Линейная анимация
  }
);




































window.addEventListener("load", function() {
  smoother.paused(true);  // Отключаем ScrollSmoother
  gsap.to(window, {duration: 0, scrollTo: 0});  // Сбрасываем скролл
  smoother.paused(false);  // Включаем ScrollSmoother обратно
});