import React, {Component} from 'react';
import creditCardLogo from './credit-card.svg';
import Visa from './CardType/visa.svg';
import MasterCard from './CardType/mastercard.svg';
import AMEX from './CardType/AMEX.svg';
import Card from './CardType/Card';
import AllowedCard from './Controller/AllowedCard';
import makeAnimated from 'react-select/animated';


class App extends Component{
  state = {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      holderName: '',
      cardDetails: {
        type: '',
        number: ''
      },
      allowedCards: [],
      options :[
        { value: 'visa', label: 'VISA', startingNum:'4000' },
        { value: 'mastercard', label: 'MASTERCARD', startingNum:'5555' },
        { value: 'amex', label: 'AMEX', startingNum: '3782' }
    ],
    selectedCards: [],
    animatedComponents : makeAnimated(),
    isDisabled: true,
    isAllowed: false,
    src: '',
    alt: ''
   }

  changeCardDetailsHandler = e => {
    this.setState({
        [e.target.name] : e.target.value
    });
  }

  changeCardNumberHandler = e => {
    let {selectedCards, isAllowed} = this.state;
    let number = this.state.cardDetails.number;
    let cardNumberEntered = e.target.value;
    let cardType = null;  
    let str = cardNumberEntered.substring(0,4);

    isAllowed = selectedCards.find(card => card.startingNum === str) !== undefined ? true : false;

    selectedCards.forEach(c => {
      if(cardNumberEntered.startsWith(c.startingNum)){
        if(cardNumberEntered.startsWith('4000')){
          cardType = 'visa';
          number = 16;
        } else if(cardNumberEntered.startsWith('5555')){
          cardType = 'masterCard';
          number = 16;
        } else if(cardNumberEntered.startsWith('3782')){
          cardType = 'amex'; 
          number = 15
        } 
      }
    })
    
    this.setState({
      cardNumber: e.target.value,
      cardDetails:{
        type: cardType,
        number
      },
      isAllowed
    });
  }

  handleChange = selectedOption => {
    let selectedCards = this.state.selectedCards;
    let {isDisabled, cardNumber, holderName, cvv, expiryDate} = this.state;
    let type = this.state.cardDetails.type;
    selectedCards = selectedOption;
    if(selectedCards === null){
      isDisabled = true;
      type = null;
      cardNumber = '';
      holderName = '';
      cvv = '';
      expiryDate = '';
    }else
      isDisabled = false;

    this.setState({
      selectedCards,
      cardNumber,
      holderName,
      cvv,
      expiryDate,
      isDisabled,
      cardDetails: {
        type
      }
    });
  };
  render(){
    let cssClass;
    let src;
    let alt;
    let type = this.state.cardDetails.type;
    cssClass = this.state.isDisabled ? 'customInput inputDisabled' : 'customInput';

    switch (type) {
      case 'visa':
            src= Visa;
            alt = 'Visa';
            break;
        case 'masterCard':
            src = MasterCard;
            alt = 'Master Card';
            break;
        case 'amex':
            src = AMEX;
            alt = 'Amex';
            break;
        default:
            src = creditCardLogo;
            alt = 'Creditcard Logo';
            break;
    }
    return (
      <div className="App">
        <Card 
          cardNumber={this.state.cardNumber} 
          holderName={this.state.holderName}
          type={this.state.cardDetails.type} />

        <AllowedCard
          submit={this.submitHandler}
          change={this.handleChange}
          options={this.state.options}
          animatedComponents={this.state.animatedComponents}/>
          
        <div className="cardDetails">
          <div className="cardName">
            <img src={src} alt={alt} />
            <input
              type="text"
              className={cssClass + ' ' + (this.state.isAllowed ? '' : 'noAllowed')}
              onChange={ e => this.changeCardNumberHandler(e)} 
              placeholder="Card Number"
              maxLength={this.state.cardDetails.number}
              name="cardNumber"
              disabled={this.state.isDisabled}
              value={this.state.cardNumber}/>
          </div>
          <div className="cardValid">
            <input 
              type="text"
              className={cssClass}
              placeholder="MM/YY"
              maxLength="5"
              name="expiryDate"
              onChange={ e => this.changeCardDetailsHandler(e)}
              disabled={this.state.isDisabled}
              value={this.state.expiryDate}/>

            <input 
              type="text"
              className={cssClass} 
              placeholder="CVV" 
              maxLength="3" 
              name="cvv"
              onChange={ e => this.changeCardDetailsHandler(e)} 
              disabled={this.state.isDisabled}
              value={this.state.cvv}/>
          </div>
          <div className="holderName">
            <input 
              type="text" 
              className={cssClass} 
              placeholder="Card Holder Name" 
              name="holderName"
              onChange={ e => this.changeCardDetailsHandler(e)} 
              disabled={this.state.isDisabled}
              value={this.state.holderName} />
          </div>
        </div>
        <div className="submitForm">
          <button disabled={!this.state.isAllowed || this.state.isDisabled}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
