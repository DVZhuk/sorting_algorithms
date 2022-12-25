;(function () {
const bubbleSort = document.querySelector('.sort__block--bubble');
const bubbleButton = document.querySelector('.bubble--button');

let array = [812, 1360, 657, 1247, 165, 1000, 2468, 43, 544];

let div = document.createElement('div');
div.classList.add('line');



for (let i = 0; i < array.length; i ++) {
    let height = Math.floor((array[i] / 2500) * 100);
    div.style.height = height + '%';
    div.style.transform = 'translateX(' + i * (500 / 9) + 'px)';
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
                lines[k].style.backgroundColor = 'yellow';
                lines[k+1].style.backgroundColor = 'yellow';
                lines[k-1].style.backgroundColor = 'rgb(247, 14, 14)';
            } else {
                lines[k].style.backgroundColor = 'yellow';
                lines[k+1].style.backgroundColor = 'yellow';
            };
            if (i > 0) {
                lines[array.length - i].style.backgroundColor = 'rgb(247, 14, 14)';
                lines[array.length-(i+1)].style.backgroundColor = 'rgb(247, 14, 14)';
            };
            
            if (array[k] > array [k + 1]) {
                let swap = array[k];
                array[k] = array[k + 1];
                array[k + 1] = swap;

                lines[k].style.backgroundColor = 'blue';
                lines[k+1].style.backgroundColor = 'blue';
                

                let animation = lines[k+1].animate([
                    {transform: 'translateX(' + k * (500 / 9) + 'px)'}
                ], 300);
                animation.addEventListener('finish', function() {
                  bubbleSort.insertBefore(lines[k+1], lines[k]);
                  lines[k].style.transform = 'translateX(' + k * (500 / 9) + 'px)';
                });  
                  
                let animationTwo = lines[k].animate([
                  {transform: 'translateX(' + (k+1) * (500 / 9) + 'px)'}
                ], 300);
                animationTwo.addEventListener('finish', function() {
                  lines[k+1].style.transform = 'translateX(' + (k+1) * (500 / 9) + 'px)';
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