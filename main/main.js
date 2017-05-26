// Write your cade below:
"use strict";
function caclRemaindar( a  , b ) {
    return a % b ;

};

function caclSum(arr ) {
    var sum  =  0 ;
    for ( var i = 0 ; i < arr.length ; i ++) {
        sum += arr[i];
    }
    return sum ;
};

function caclSumInConditon(arr , b) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < b) {
            sum += arr[i];
        }
    }
    return sum;
};


module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}