export default function (amount, symbol) {
	  /*create switch statement to assign currency based on symbol*/
	  return `${amount.toLocaleString(symbol, { style: 'currency', currency: 'USD' })}`;
};
