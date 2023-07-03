
//ローディング画面
const loadingAreaPink = document.querySelector('#loading');
window.addEventListener('load', () => {
  //ローディング中(ピンクのスクリーン)
  loadingAreaPink.animate({
    //動きの内容
    opacity: [1, 0],
    visibility: 'hidden',
  }, {
    duration: 2000,
    delay: 1200,
    easing: 'ease',
    fill: 'forwards',
  })
});






const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('.menu-list li');
const menuOption = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards', 
};

menuOpen.addEventListener('click', () => {
  //console.log('メニューを開く');
  menuPanel.animate({translate: ['100vw', 0]}, menuOption);

  //リンクを一つずつ表示させる
  menuItems.forEach((menuItem, index) => {
    //console.log(`${index}番目のリスト`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 2400,
        delay: 500 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});




menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOption);

  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOption);
  });
});

const heading = document.querySelector('#top');
const keyframes = {
  opacity: [0, 1],
  //          横　縦
  translate: ['0 200px', 0],
};
const options = {
  duration: 4000,
  easing: 'ease',
};

heading.animate(keyframes, options);

//監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      //console.log(entry.target);
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      obs.unobserve(entry.target);
    }
  });

}

//監視設定

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement, obs) => {
  fadeObserver.observe(fadeElement);
});

const menu = document.querySelector('.grid-img');
const gridText = document.querySelector('.grid-text');
const lists = [
  {
    name: 'バレンタインデーに向けて料理教室のサンプルページを作りました。',
    img: 'valentine.png',
    
    lan: 'HTML/CSS',
    material: 'イラストACより',
  },

  
];

//console.log(lists[0].name);

for (let i = 0; i < lists.length; i++) {
  const content = `<div><img src="images/${lists[i].img}" alt="">`;
  

  menu.insertAdjacentHTML('beforebegin', content);

  const grid = `<h2>${lists[i].name}</h2><p>使用言語:${lists[i].lan}</p><p>画像素材：${lists[i].material}</p>`;
  gridText.insertAdjacentHTML('beforeend', grid); 

}

const showimg = (entries, obs) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0', 0],
  }
  entries[0].target.animate(keyframes, 800);
  obs.unobserve(entries[0].target);//監視を解除
};

//監視ロボの設定
const showimgObserve = new IntersectionObserver(showimg);

//grid-itemを監視するように指示
showimgObserve.observe(document.querySelector('.grid-item'));

//textareaのテキストボックスを定数textに代入
const text = document.querySelector('#text');

//現在：0文字の『0』の<span>に設定した#countを定数countに代入
const count = document.querySelector('#count');

//定数『text』にイベントを付与
text.addEventListener('keyup', () => {
  //現在：0文字の『0』の<span>に設定した#countに文字数カウントを付与
  count.textContent = text.value.length;

  //もし、textの文字数(中身が)100越えたら～
  if(text.value.length > 100) {
    //数字の文字色をCSSに設定した『.alert』を付与
    count.classList.add('alert');
  } else {
    //文字数100以下なら『.alert』を排除
    count.classList.remove('alert');
  }
});

const roundShow = document.querySelector('.roundShow');

roundShow.animate(
  {
    borderRadius: [
      '20% 50% 50% 70%/50% 50% 70% 50%',
      '50% 20% 50% 50%/40% 40% 60% 60%',
      '50% 40% 20% 40%/40% 50% 50% 80%',
      '50% 50% 50% 20%/60% 40% 70% 20%'
    ]
  },
  {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
  }
);
