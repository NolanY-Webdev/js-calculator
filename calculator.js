/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {

  var memory = 0;
  var total = 0;
  var calculator = {
    load : _load,
    getTotal : _getTotal,
    add : _add,
    subtract : _subtract,
    multiply : _multiply,
    divide : _divide,
    recallMemory : _recallMemory,
    saveMemory : _saveMemory,
    clearMemory : _clearMemory
  };




/**
 * sets the `total` to the number passed in
 * @param  { Number } x
 * @return { Number }    current total
 */
  function _load(num) {
    if ( valid(num) ) {
      total = num;
      return total;
    } else {
      return 'how the fuck did you think entering numbers on a calculator would work';
    }
  }



  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal() {
    return total;
  }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _add(num) {
    if ( valid(num) ) {
      return total += num;
    } else {
      return 'how the fuck did you think entering numbers on a calculator would work';
    }
  }



  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract(num) {
    if ( valid(num) ) {
      return total -= num;
    } else {
      return 'how the fuck did you think entering numbers on a calculator would work';
    }
  }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multiply(num) {
    if ( valid(num) ) {
      return total *= num;
    } else {
      return 'how the fuck did you think entering numbers on a calculator would work';
    }
  }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide(num) {
    if ( valid(num) ) {
      return total /= num;
    } else {
      return 'how the fuck did you think entering numbers on a calculator would work';
    }
  }




  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function _recallMemory() {
    return memory;
  }


  /**
   * Stores the value of `total` to `memory`
   */
  function _saveMemory() {
    memory = total;
  }


  /**
   * Clear the value stored at `memory`
   */
  function _clearMemory() {
    memory = 0;
  }

  /**
   * Validation
   */
  function valid(x) {
    if ( typeof x  === 'number') {
      return true;
    } else {
      return false;
    }
  }

  return calculator;
}