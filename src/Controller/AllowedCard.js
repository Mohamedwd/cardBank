import React from 'react';
import Select from 'react-select';

const AllowedCard = props => {
    return(
        <div className="selectTypes">
            <Select 
                options={props.options} 
                closeMenuOnSelect={true}
                components={props.animatedComponents}
                isMulti
                onChange={props.change}
                placeholder="Select your card type..." 
                className="selectType"/>
        </div>
    );
}

export default AllowedCard;