;(function () {
const selectionSort = document.querySelector('.sort__block--selection');
const selectionButton = document.querySelector('.selection--button');

let array = [812, 1360, 657, 1247, 165, 1000, 2468, 43, 544];

let div = document.createElement('div');
div.classList.add('line');

let widthLine = 350;

if (window.innerWidth >= 768) {
  widthLine = 500;
};

window.addEventListener('resize', function(evt) {
  if (window.innerWidth < 768) {
    widthLine = 350;
  } else if (window.innerWidth >= 768) {
    widthLine = 500;
  };

  for (let i = 0; i < array.length; i ++) {
    lines[i].style.transform = 'translateX(' + i * (widthLine / 9) + 'px)';
  };

});

for (let i = 0; i < array.length; i ++) {
  let height = Math.floor((array[i] / 2500) * 100);
  div.style.height = height + '%';
  div.style.transform = 'translateX(' + i * (widthLine / 9) + 'px)';
  let line = div.cloneNode(false);
  selectionSort.append(line);

};

let lines = selectionSort.getElementsByClassName('line');


selectionButton.addEventListener('click', function () {
  let i = 0;
  let j;
  let delay = 300;
  
  let forI = setTimeout(function request() {
    
    if (i > 0) {
      lines[i-1].style.backgroundColor = 'rgb(247, 14, 14)';
      lines[array.length - 1].style.backgroundColor = 'rgb(247, 14, 14)';
    }
    
    delay = 5000 - (i * 500);
    j = i + 1;
    lines[i].style.backgroundColor = '#643c3c';
    
    let minValue = array[i];

    let forJ = setInterval(function(i) {
      j++;
      
      if (j-1 >= array.length - 1) {
        clearInterval(forJ);
      };

      if (j-1 > i + 1) {
        lines[j-1].style.backgroundColor = '#ffb309';
        lines[j-2].style.backgroundColor = 'rgb(247, 14, 14)';
      } else {
        lines[j-1].style.backgroundColor = '#ffb309';
      };

      if (array[j-1] < minValue) {
        minValue = array[j-1];
        let swap = array[i];
        array[i] = minValue;
        array[j-1] = swap;
        
        let animation = lines[j-1].animate([
          {transform: 'translateX(' + i * (widthLine / 9) + 'px)'}
        ], 300);
        animation.addEventListener('finish', function() {
          selectionSort.insertBefore(lines[j-1], lines[i]);
          lines[i].style.transform = 'translateX(' + i * (widthLine / 9) + 'px)';
          if (i < array.length - 2) {
            lines[i].style.backgroundColor = '#643c3c';
          } else {
            lines[i].style.backgroundColor = 'rgb(247, 14, 14)';
          };
        });  
        
        let animationTwo = lines[i].animate([
          {transform: 'translateX(' + (j-1) * (widthLine / 9) + 'px)'}
        ], 300);
        animationTwo.addEventListener('finish', function() {
          selectionSort.insertBefore(lines[i+1], lines[j]);
          lines[j-1].style.transform = 'translateX(' + (j-1) * (widthLine / 9) + 'px)';
          lines[j-1].style.backgroundColor = 'rgb(247, 14, 14)';
        });
        
      };

    }, 500, i)

    i ++;
    if (i < array.length - 1) {
      forI = setTimeout(request, delay);
    };
    
  }, delay);
  
})

})();