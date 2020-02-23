import React from 'react';
import Visa from './visa.svg';
import MasterCard from './mastercard.svg';
import AMEX from './AMEX.svg';

const Card = props => {
    let cardNumber;
    let finalCardNumber;
    let holderName;
    let src;
    let alt;

    if(props.cardNumber !== null )
        cardNumber = props.cardNumber
    else
        cardNumber = "************0000";

    if(props.holderName !== null)
        holderName = props.holderName
    else
        holderName = "CARDHOLDER";

    switch (props.type) {
        case 'visa':
            src = Visa;
            alt = 'Visa';
            break;
        case 'masterCard':
            src = MasterCard;
            alt = 'Master Card';
            break;
        case 'amex':
            src = AMEX;
            alt = "Amex";
            break;
        default:
            src = '';
            alt = '';
            break;
    }

    /* Visa , Credit card */
    const chunk = (str, n) => {
        let arr = [];
        let i;
        let len = str.length;
    
        for(i = 0; i < len; i += n) {
            arr.push(str.substr(i,n));
        }
        return arr
    };
    /* End */

    /* Amex */
    const chuckAmex = (str,x,y,z) => {
        let arr = [];
        let firstGroup = str.substr(0,x);
        let secondGroup = str.substr(x,y);
        let thirdGroup = str.substr((x+y),z);

        arr.push(firstGroup);
        arr.push(secondGroup);
        arr.push(thirdGroup);
    
        return arr;
    }
    /* End */

    let arr = chunk(cardNumber, 4);
    arr.forEach((a,n,array) => {
        if(n !== arr.length-1)
            array[n] = "****";
    })

    let amexArr = chuckAmex(cardNumber,4,6,5);
    amexArr.forEach((a,n,array) => {
        if(n !== amexArr.length - 1){
            array[n] = "****";
            if(n === 1)
                array[n] = "******";
        }
    })
    
    finalCardNumber = props.type === 'amex' ?  amexArr.join(' ') : arr.join(' ');

    return(
        <div className={ (props.type ? props.type: '') + " BankCard"}>
            <div className="BankCardImg">
                { src !== '' ? (<img src={src} alt={alt}/>) : ''}
            </div>
            <div className="BankCardDetails">
                <p>{finalCardNumber}</p>
                <p>{holderName}</p>
            </div>
        </div>
    );
}

export default Card;