/*
* Given an integer n, calculate the nth row of Pascal's triangle
* 
* @param n
*	 row number of Pascal's triangle, where the first row is n = 0
* 
* @return 
*	an array of the nth row of Pascal's triangle,
* 	or an empty array if n is not valid
*/
const ptRow = (n) =>
{
    //input verification
    if(n < 0){
        return [];
    }

    /*recursive algorithm: build nth row from the previous one, by adding all side by side terms.
    don't calculate edge terms, as they are always one.
    */

    let thisRow = [1];

    //base case, if n reaches zero, return the 0th row.
    if(n <= 0)
    {
        return thisRow;
    }

    //else, get the previous row to compute this row from.
    let previousRow = ptRow(n-1);

    //iterate through the previous row to get all the terms sandwiched between 1 and 1.
        //this is done by starting (the i variable) at the SECOND term of previous array and summing it with first term (stepping back) to get second term of THIS array.
        //We then let i go until the last term, so it can step back and add the number in the index previous. This makes the second LAST term.
    for(let i = 1; i<previousRow.length; i++)
    {
        thisRow.push(previousRow[i-1] + previousRow[i]);
    }

    //add the edge
    thisRow.push(1);

    return thisRow;
}

//output is ugly :c
console.log(ptRow(3));
console.log(ptRow(7));
console.log(ptRow(25));
console.log(ptRow(100));
console.log(ptRow(-1));



