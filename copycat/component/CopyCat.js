import React from 'react';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
    render(){
        return (
            <div>
                 <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {name || 'Kojo'}</h1>
        <input type="text" value={this.props.input} onChange={this.props.handleChange}/>
        <img 
          alt='cat'
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
          styles={styles.imgStyles}
        />
        <p>{copying ?  images.copycat : images.quietcat }</p>
        </div>
            </div>
        );
    }
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
 value: PropTypes.string.isRequired,
 toggleTape: PropTypes.func.isRequired,
 handleChange: PropTypes.func.isRequired,
 name: PropTypes.string.isRewquired
} 

