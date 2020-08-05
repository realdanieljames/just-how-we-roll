//----------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------//
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
const resultAfterDiceRoll = []

/***************
 * DICE IMAGES *
 ***************/
const sixesDice = document.querySelector('img#d6-roll.d6.roll')

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
// twentiesMaxDiceNum = 20
// const resultAfterRoll = function (maxDiceNum){
//   resultAfterDiceRoll.push(getRandomNumber(maxDiceNum))


// }

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/

//  Calculate a random number from 1 to the maximum number for that die 
// console.log(getRandomNumber(2))

//  Change the image of the dice roll "button" to the results, 
//  using the images in the d6 and numbers directories
// if (getRandomNumber(6) === 1){
//   sixesDice.src = './images/d6/1.png'
// }



switch (getRandomNumber(6)) {

  case 1:
    sixesDice.src = './images/d6/1.png';

  case 2:
    sixesDice.src = './images/d6/2.png';

  case 3:
    sixesDice.src = './images/d6/3.png';

  case 4:
    sixesDice.src = './images/d6/4.png';

  case 5:
    sixesDice.src = './images/d6/5.png';

  case 6:
    sixesDice.src = './images/d6/6.png';

  // console.log(getRandomNumber(sixesMaxDiceNum))
}









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

// reset()



/****************
 * MATH SECTION *
 ****************/
