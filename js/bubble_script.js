;(function () {
const bubbleSort = document.querySelector('.sort__block--bubble');
const bubbleButton = document.querySelector('.bubble--button');

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
    bubbleSort.append(line);

};

let lines = bubbleSort.getElementsByClassName('line');

bubbleButton.addEventListener('click', function() {
    let i = 0;
    let delay = 300;
  
    let forI = setTimeout(function request() {
        delay = (array.length - (i + 1)) * 500;
        let j = 0;
        let forJ = setInterval(function(i) {
            j++;
            k=j-1;
                        
            if (k >= array.length - (i + 2)) {
                clearInterval(forJ);
            };

            if (k > 0) {
                lines[k].style.backgroundColor = '#ffb309';
                lines[k+1].style.backgroundColor = '#ffb309';
                lines[k-1].style.backgroundColor = 'rgb(247, 14, 14)';
            } else {
                lines[k].style.backgroundColor = '#ffb309';
                lines[k+1].style.backgroundColor = '#ffb309';
            };
            if (i > 0) {
                lines[array.length - i].style.backgroundColor = 'rgb(247, 14, 14)';
                lines[array.length-(i+1)].style.backgroundColor = 'rgb(247, 14, 14)';
            };
            
            if (array[k] > array [k + 1]) {
                let swap = array[k];
                array[k] = array[k + 1];
                array[k + 1] = swap;

                lines[k].style.backgroundColor = '#643c3c';
                lines[k+1].style.backgroundColor = '#643c3c';
                

                let animation = lines[k+1].animate([
                    {transform: 'translateX(' + k * (widthLine / 9) + 'px)'}
                ], 300);
                animation.addEventListener('finish', function() {
                  bubbleSort.insertBefore(lines[k+1], lines[k]);
                  lines[k].style.transform = 'translateX(' + k * (widthLine / 9) + 'px)';
                });  
                  
                let animationTwo = lines[k].animate([
                  {transform: 'translateX(' + (k+1) * (widthLine / 9) + 'px)'}
                ], 300);
                animationTwo.addEventListener('finish', function() {
                  lines[k+1].style.transform = 'translateX(' + (k+1) * (widthLine / 9) + 'px)';
                });
            };
        
        }, 500, i);
        i++;
        if (i < array.length) {
            forI = setTimeout(request, delay);
        }
    }, delay);

})


})();