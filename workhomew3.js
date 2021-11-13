//Student: JORGE CRUZ DE LEON

//Part Number 1.
//a.
console.log("***** PART A *****");
let ages = [3, 9, 23, 64, 2, 8, 28,93];
console.log(ages);
let last = ages[ages.length - 1] //the last index of array
let first = ages[ages.length - ages.length] //the first index of array
let difference = last - first //calculating difference between first and last

console.log("Difference between first and last element is:" + difference);
console.log("\n\n");

//b. Add a new age  to the array
console.log("***** PART B *****");
ages.push(15);
console.log(ages);
let last2 = ages[ages.length - 1] //the last index of array
let first2= ages[ages.length - ages.length] //the first index of array
let difference2 = last2 - first2 //calculating difference between first and last

console.log("Difference between first and last element is:" + difference2);


//c. calculating the average age
console.log("***** PART C *****");
var i, sum=0;
for(i=0; i<ages.length; i++)
{
    sum = sum + ages[i];
}
console.log("The Average Age in the  array is : ",sum/ages.length);
console.log("\n\n");
// **** Part Number 2. 

var names = [ "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//a. Calculating average letters per name in the names array

sum=0;
for(i=0; i<names.length; i++)
    {
        sum = sum + names[i].length;
    }

console.log("Average number of letter per name is: ", sum / names.length);
console.log("\n\n");

// b. Concatenating names

    var conc= names[0];

    for(i=1; i<names.length; i++)
    {
        conc = conc.concat(" ",names[i]);
    }

console.log("Here show the concatenated names : ",conc);
console.log("\n\n");

//point 3 and 4. HOW DO YOU ACCESS THE LAST AND FIRST ELEMENT OF ANY ARRAY
 
let s = [9, 2, 5.,8, 7, 1];
function gfg()
{
    let f=s[0];
    let l=s[s.length - 1];
    console.log("First element is: " + f);
    console.log("Last element is: "+ l);
}
gfg();
console.log("\n\n");
//Part 5. 

let namesArray2 = [ "Kelly", "Sam", "Kate"]; 
var nameLengths = [];

    for(i=0; i<names.length; i++)
    {
        nameLengths[i] = names[i].length;
    }
//Part 6.

sum=0;
    for(i=0; i<nameLengths.length; i++)
    {
    sum = sum + nameLengths[i];
    }
console.log("Sum of all elements in the nameLengths array is : ",sum);
console.log("\n\n");

//Part 7.
    function concat_n_times(word, n)
    {
        var con= word;
        for(i=1; i<=n; i++)
        {
            con = con.concat(word);
        }
        return con;
    }
    //Printing the concatenated same word for n times using function call
    console.log("Concatenated words : ",concat_n_times("Hello", 3));
console.log("\n\n");

//Part 8

function fullName(firstName, lastName)
    {
        return firstName.concat(" ", lastName);
    }

//Printing full name 
console.log("Full Name : ",fullName( "Marcelita", "Cruz"));


//Part 9
//Function that works to check the total sum of all the elements is greater than 100 or not, true o false.

    function isTotalGreaterThan100(arr)
    {
        sum=0;
        for(i=0; i<arr.length; i++)
        {
            sum = sum + arr[i];
        }

        if(sum > 100)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
let ArrayToTest = [100,2,3,5]
console.log(isTotalGreaterThan100(ArrayToTest));

//Part 10

    function average(arr)
    {
        sum=0;

        for(i=0; i<arr.length; i++)
        {
            sum = sum + arr[i];
        }
        return (sum/arr.length);

    }

//Function to compare the average of all elements of two different number array

    function compare_average(arr1, arr2)
    {
        if(average(arr1) > average(arr2))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

let array1 = [1,3,5];
let array2 = [7,5,7];

let average1 = average(array1);
let average2 = average(array2);

console.log("The average of Array 1 is: " + average1);
console.log("The average of Array 1 is: " + average2);
console.log("Is array1 is > array2 ?: " + compare_average(array1,array2));
console.log("\n\n");

//Part 11
var myArr1 = [12, 25, 18, 80, 50];
var myArr2 = [32, 74, 12];

console.log("Average array1 is : ",average(myArr1));
console.log("Average array2 is : ",average(myArr2));
console.log("Is the average array1 is greater > the average array2  ? : ",compare_average(myArr1, myArr2));
console.log("\n\n");

//Part 12

function willBuyDrink(isHotOutside, moneyInPocket)
{
    if((isHotOutside) && (moneyInPocket > 10.50))
    {
        return true;
    }
    else
    {
        return false;
    }
}

var hotOutside = true;
var moneyInPocket = 10.5;

console.log("Drink that Can be buy : ",willBuyDrink(hotOutside, moneyInPocket));
console.log("\n\n");

//Part 13.

let hoursOfSleep = 8;
function evaluateSleep() {
    if (hoursOfSleep < 6) {
        console.log("I am groggy");
    } else {
        console.log("I feel fantastic");
    }
}
evaluateSleep();

//function evaluateSleep() receive parameter hoursOrSleep, If this parameter is < 6 show 
//the message "I am groggy" else show the message "I feel fantastic"

