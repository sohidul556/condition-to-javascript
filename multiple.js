const salary =2500;
const isBCS = true;
const hight =68;
const hasCar = false;
/*
if(salary>2600 && hight >69){  //  and (&&) 2 tai condition true hote hobe
    console.log('Mama Chol be su---patro');
}
else{
    console.log("kothathake ahse agulo ochol mal");
}
*/
/*
if(salary>2501 || hight >69){  //  or (||) 1 ta condition true hole hobe
    console.log('Mama Chol be su---patro');
}
else{
    console.log("kothathake ahse agulo ochol mal");
}
*/

//------------more condition-----------
/*
if(salary>2501 || hight >69 || isBCS == true){ //  or (||) 1 ta condition true hole hobe
    console.log('Mama Chol be su---patro');
}
else{
    console.log("kothathake ahse agulo ochol mal");
}

*/
if(salary>2499 && hight >65 && isBCS == true){ 
    //  or (||) 3 ta condition true hole hobe
        console.log('Mama Chol be su---patro');
    }
    else{
        console.log("kothathake ahse agulo ochol mal");
    }

    /******************complex condition********** */

   /* if((salary>2499 && hasCar== true) || isBCS == true){ 
        //  or (||) jekuno 1 ta condition true hole hobe
            console.log('Mama Chol be su---patro');
        }
        else{
            console.log("kothathake ahse agulo ochol mal");
        }
    
*/

if((salary>2499 || hasCar== true) && isBCS == true){ 
    //  or (||) jekuno 1 ta condition true hole hobe
        console.log('Mama Chol be su---patro');
    }
    else{
        console.log("kothathake ahse agulo ochol mal");
    }