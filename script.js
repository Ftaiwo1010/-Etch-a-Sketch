
//select body element
const container = document.querySelector('.container');

//container to hold buttons and color input
const textContainer = document.createElement('div');
textContainer.setAttribute('class', 'sketch-text-wrapper');
container.appendChild(textContainer);

const generateBtn = document.createElement('button');
generateBtn.textContent = 'Generate Grid';
textContainer.appendChild(generateBtn);

//color btn
const randomColorBtn = document.createElement('button');
randomColorBtn.setAttribute('class', 'color-btn');
randomColorBtn.textContent = 'Black';
textContainer.appendChild(randomColorBtn);

//clear background color btn
const clearSketch = document.createElement('button');
clearSketch.textContent = 'Clear color'
textContainer.appendChild(clearSketch)


//create sketchpad container
const sketchpadContainer = document.createElement('div');
sketchpadContainer.setAttribute('class', 'pad-container');
sketchpadContainer.style.width = `${Math.round(window.innerWidth / 2)}px`;
sketchpadContainer.style.height = `${Math.round(window.innerWidth / 2)}px`;
container.appendChild(sketchpadContainer)


let numberOfSquaresInOneRow = 16;
let totalNumberOfSquares = numberOfSquaresInOneRow ** 2; // Squared
let widthOfSquare = sketchpadContainer.clientWidth / numberOfSquaresInOneRow;

let randomColor = false;



//event that change button text
randomColorBtn.addEventListener('click', () => {
    if (randomColorBtn.textContent === 'Black') {
        randomColorBtn.textContent = 'Rainbow';
        randomColor = true;
    } else {
       randomColorBtn.textContent = 'Black';
       randomColor = false;
    }
});


//function that generate new grid
function drawGrid(totalNumberOfSquares, widthOfSquare) {
    for (let i = 0; i < totalNumberOfSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.height = `${widthOfSquare}px`;
        square.style.width = `${widthOfSquare}px`;
        sketchpadContainer.appendChild(square);

        //create random color
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let rgb = `rgb(${r},${g},${b})`


        square.addEventListener('mousemove', (e) => {
                if (randomColor) {
                  e.target.style.background = rgb;
                } else {
                  e.target.style.background = 'black';
                }
        });
     };
};

drawGrid(totalNumberOfSquares, widthOfSquare);



// a popup function to generate grid
 generateBtn.addEventListener('click', () => {
    do {
        numberOfSquaresInOneRow = +prompt('Enter grid size: (max 100)');        
    } while (numberOfSquaresInOneRow > 100 || numberOfSquaresInOneRow < 1);

    totalNumberOfSquares = numberOfSquaresInOneRow ** 2; // Squared
    widthOfSquare = sketchpadContainer.clientWidth / numberOfSquaresInOneRow;

    //remove all grid 
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach((s) => {
        sketchpadContainer.removeChild(s);
    })

    //draw again
    drawGrid(totalNumberOfSquares, widthOfSquare);
   
})



//clear sketchpad background color
clearSketch.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((s) => {
        s.style.background = '';
    })
})






