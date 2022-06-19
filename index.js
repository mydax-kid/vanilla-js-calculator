//VARIABLES.................................................

const number= document.querySelectorAll('.btn-num');
const operator= document.querySelectorAll('.btn-operation');
const del= document.querySelector('#delete');
const allClear= document.querySelector('#clear');
const equals= document.querySelector('#equals');
const previousOperandElemnt= document.querySelector('.previous-operand');
const currentOperandElemnt= document.querySelector('.current-operand');

let currentOperand= '';
let previousOperand= '';
let operation= undefined;


//FUNCTIONS................................................

const appendNumber= (number)=> {
  if(number === '.' && currentOperand.includes('.')) return;
  currentOperand= currentOperand.toString() + number.toString();
}

const chooseOperation= (op) => {
  if(currentOperand == '') return;
  if(previousOperand !== ''){
    compute()
  }
  operation= op;
  previousOperand= currentOperand;
  currentOperand= '';
}

const compute= () => {
  let computation;
  const prev= parseFloat(previousOperand);
  const current= parseFloat(currentOperand);
  if( isNaN(prev) || isNaN(current)) return;

  switch(operation){
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand= computation;
  operation= undefined;
  previousOperand= ''
}

const updateDisplay= ()=> {
  currentOperandElemnt.innerText= formattedNumber(currentOperand);
  if(operation != null){
   previousOperandElemnt.innerText= `${previousOperand} ${operation} `;
  }
}

const formattedNumber= (num)=> {
  var n = Number(num);
  var value= n.toLocaleString("en");
  return value;
}

const clear= () => {
  currentOperand= "";
  previousOperand= "";
  operation= ''
  updateDisplay();
}

const deleteLast= ()=> {
  currentOperand= currentOperand.toString().slice(0, -1);
}


//EVENTS..............................................................

number.forEach(button => {
  button.addEventListener('click', ()=> {
    appendNumber(button.innerText);
    updateDisplay()
  })
})

operator.forEach(button => {
  button.addEventListener('click', ()=> {
    chooseOperation(button.innerText);
    updateDisplay()
  })
})

allClear.addEventListener('click', ()=> {
  clear();
})

equals.addEventListener('click', ()=> {
  compute();
  updateDisplay();
})

del.addEventListener('click', ()=> {
  deleteLast();
  updateDisplay();
})


















































/*
//VARIABLES
const numbers= document.querySelectorAll('.btn-num');
const operators= document.querySelectorAll('.btn-operation');
const allClear= document.querySelector('#clear');
const del= document.querySelector('#delete');
const equals= document.querySelector('#equals');
const previousDisplay= document.querySelector('.previous-operand')
const currentDisplay= document.querySelector('.current-operand')

let currentOp= '';
let previousOp= '';
let operation= '';


//EVENTS
numbers.forEach(number => {
  number.addEventListener('click', () => {
    appendNumber(number.innerText);
  })
})

operators.forEach(op => {
  op.addEventListener('click', ()=> {
    addOperation(op.innerText);
  })
})

equals.addEventListener('click', ()=> {
  calculate();
})

allClear.addEventListener('click', ()=> {
  currentOp='';
  previousOp= '';
  operation= '';

  updateDisplay()
})

del.addEventListener('click', ()=> {
  currentOp= currentOp.toString().slice(0, -1);
  updateDisplay()
})


//FUNCTIONS

const appendNumber= (num) => {
  if(num == '.' && currentOp.includes('.')) return;
  currentOp= currentOp + num;

   updateDisplay()
}

const updateDisplay= () => {
  currentDisplay.innerText= currentOp;
  previousDisplay.innerText= `${previousOp} ${operation}`;
}

const addOperation= (op) => {
  //if (!currentOp) return;
  if(previousOp && currentOp){
    calculate()
  }
  operation = op;
  previousOp= currentOp;
  currentOp= ''

  updateDisplay()
}

const calculate= () => {
  let prev= parseFloat(previousOp);
  let curr= parseFloat(currentOp);
  let result;

  switch(operation){

    case '+':
      result= prev + curr;
      break;

    case '-':
      result= prev - curr;
      break;
    
    case '*':
      result= prev * curr;
      break;

    case '/':
      result= prev/curr;
      break;

    default:
     return;
  }

    currentOp= result;
    previousOp=''
    operation= ''

    updateDisplay();
}
*/