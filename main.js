//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
let resultAfterDiceRoll = []
const resetButton = document.querySelector('button#reset-button') 
// for image recognition in functions
let numbersImgSource = './images/numbers/'
let d6ImgSource = './images/d6/'

/***************
 * DICE IMAGES *
 ***************/
const sixesDice = document.querySelector('img#d6-roll.d6.roll')

const doubleDiceImages =  document.querySelector('main');
const doubleSixesDice1 = document.querySelector('img#double-d6-roll-1.d6.roll ')
const doubleSixesDice2 = document.querySelector('img#double-d6-roll-2.d6.roll')

const twelvesDice = document.querySelector('img#d12-roll.roll')

const twentiesDice = document.querySelector('img#d20-roll.roll')
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//


/*************************************
 * SIXES SECTION MEAN MEDIAN AVERAGE *
 *************************************/
//  change the text in our mean/media/mode text areas to nothing

const sixesMean = document.querySelector('h3#d6-rolls-mean')

const sixesMedian = document.querySelector('h3#d6-rolls-median')

const sixesMode = document.querySelector('h3#d6-rolls-mode')
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//


/************************************
 * DOUBLE SIXES MEAN MEDIAN AVERAGE *
 ************************************/
const doubleSixesMean = document.querySelector('h3#double-d6-rolls-mean')

const doubleSixesMedian = document.querySelector('h3#double-d6-rolls-median')

const doubleSixesMode = document.querySelector('h3#double-d6-rolls-mode')
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//


/***************************************
 * TWELVES SECTION MEAN MEDIAN AVERAGE *
 ***************************************/

const twelvesMean = document.querySelector('h3#d12-rolls-mean')
// added \n for spaces to copy results syntax

const twelvesMedian = document.querySelector('h3#d12-rolls-median')

const twelvesMode = document.querySelector('h3#d12-rolls-mode')
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//


/****************************************
 * TWENTIES SECTION MEAN MEDIAN AVERAGE *
 ****************************************/

const twentiesMean = document.querySelector('h3#d12-rolls-mean')

const twentiesMedian = document.querySelector('h3#d12-rolls-median')

const twentiesMode = document.querySelector('h3#d12-rolls-mode')
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//







/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}


sixesMaxDiceNum = 6
twelvesMaxDiceNum = 12
twentiesMaxDiceNum = 20

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

// }
/*******************
 * YOUR CODE BELOW *
 *******************/





const doubleSixesDice2Roll = function () {
  let result = getRandomNumber(sixesMaxDiceNum);


  let pngImage = d6ImgSource + `${result}.png`

  doubleSixesDice2.src = pngImage


  // doubleSixesDice1Roll()
  //  Add the result of the roll into its respective array
  //  global Scope
  resultAfterDiceRoll.push(result)
}
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

/******************************
 * TWElVES DICE ROLL FUNCTION *
 ******************************/

const twelvesDiceRoll = function () {
  let result = getRandomNumber(twelvesMaxDiceNum)

  // let source = './images/numbers/'
  // console.log(source)
  // console.log(result)
  // console.log(source + `${result}.png`)
  let pngImage = numbersImgSource + `${result}.png`

  //  try with image source
  twelvesDice.src = pngImage
}

// twelvesDiceRoll()
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

/*******************************
 * TWENTIES DICE ROLL FUNCTION * 
 *******************************/

const twentiesDiceRoll = function () {
  let result = getRandomNumber(twentiesMaxDiceNum)

  let pngImg = numbersImgSource + `${result}.png`

  twentiesDice.src = pngImg
}

// twentiesDiceRoll()








/******************
 * RESET FUNCTION *
 ******************/
const reset = function () {

  //  empty all four global roll arrays
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;

  //  change the dice buttons back to their starting images 
  //  in the start sub-directory of our images directory
  sixesDice.src = './images/start/d6.png'
  doubleSixesDice1.src = './images/start/d6.png'
  doubleSixesDice2.src = './images/start/d6.png'
  twelvesDice.src = './images/start/d12.jpeg'
  twentiesDice.src = './images/start/d20.jpg'


  //  change the text in our mean/media/mode text areas to nothing
  sixesMean.innerText = ''
  sixesMedian.innerText = ''
  sixesMode.innerText = ''

  // added \n for spaces to copy results syntax
  doubleSixesMean.innerText = '\n'
  doubleSixesMedian.innerText = '\n'
  doubleSixesMode.innerText = '\n'

  twelvesMean.innerText = '\n'
  twelvesMedian.innerText = '\n'
  twelvesMode.innerText = '\n'


  twentiesMean.innerText = '\n'
  twentiesMedian.innerText = '\n'
  twentiesMode.innerText = '\n'

  
}

//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//

// reset()



/****************
 * MATH SECTION *
 ****************/

//  mean, median and mode. 
//  recommended making helper functions for each of these.
//  hat take in an array as input 
//  and spit out one number as output

/*****************
 * MEAN FUNCTION *
 *****************/
const mean = function (array) {
  let average = 0
  let sum = 0
  let arrLength = array.length
  for (number of array) {
    sum = sum + number
    average = sum / arrLength
  }
  // console.log(average)
  resultAfterDiceRoll.push(average)
  return (average)
}
// mean([1, 2, 3, 4, 5, 6])
// mean([9, 8, 7, 6, 5, 4])
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//


/*******************
 * MEDIAN FUNCTION *
 *******************/
const median = function (array) {

  //  sort the numbers.
  array = sortByNumber(array)
  // find middle character
  //keep whole numbers
  let middleCharacter = Math.floor(array.length / 2)
  // console(middleCharacter)
  resultAfterDiceRoll.push(middleCharacter)
  return (middleCharacter)
}
// median([1, 2, 3, 4, 5, 6])
// median([9, 8, 7, 6, 5, 4, 45, 67, 8, 6, 60])
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//


/*****************
 * MODE FUNCTION *
 *****************/
//  store how many times ive seen each number in object
// track which is the highest number as we go
const mode = function () { }








/****************************
 * SIXES DICE ROLL FUNCTION *
 ****************************/

// DEFAULT PICTURE NOT SET
// PHOTO ONLY CHANGES WITH CLICK

//  Calculate a random number from 1 to the maximum number for that die 
const sixesDiceRoll = function () {
  //  Change the image of the dice roll "button" to the results, 
  //  using the images in the d6 and numbers directories
  let result = getRandomNumber(sixesMaxDiceNum);
  
  let pngImage = d6ImgSource + `${result}.png`
  
  sixesDice.src = pngImage

  // calculate mean and median
  sixesMean.innerText = mean(resultAfterDiceRoll)
  sixesMedian.innerText = median(resultAfterDiceRoll)
  //  Add the result of the roll into its respective array
  //  global Scope
  resultAfterDiceRoll.push(result)
  // console.log(resultAfterDiceRoll)
}


// sixesDiceRoll()
// sixesDice.addEventListener('click', sixesDiceRoll)
// console.log(resultAfterDiceRoll)
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//



const doubleSixesDice1Roll = function () {
  let result = getRandomNumber(sixesMaxDiceNum);

  let pngImage = d6ImgSource + `${result}.png`

  doubleSixesDice1.src = pngImage

  //  Add the result of the roll into its respective array
  //  global Scope
  doubleSixesMean.innerText = mean(resultAfterDiceRoll)
  doubleSixesMedian.innerText = median(resultAfterDiceRoll)
  doubleSixesDice2Roll()
  resultAfterDiceRoll.push(result)
}
// doubleSixesDice1Roll()
//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//



/*******************
 * EVENT LISTENERS *
 *******************/

resetButton.addEventListener('click', reset)

sixesDice.addEventListener('click', sixesDiceRoll)



doubleDiceImages.addEventListener('click', doubleSixesDice1Roll)
doubleDiceImages.addEventListener('click', doubleSixesDice2Roll)



















