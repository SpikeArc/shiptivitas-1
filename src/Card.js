// src/components/Card.js

import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    // Base class array for modular and safe string concatenation
    let className = ['Card'];
    
    // Strict mapping of status prop to CSS class for dynamic background color
    if (this.props.status === 'backlog') {
      className.push('Card-grey');
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue');
    } else if (this.props.status === 'complete') {
      className.push('Card-green');
    }

    return (
      <div 
        className={className.join(' ')} 
        data-id={this.props.id} 
        data-status={this.props.status}
      >
        {/* React JSX safely escapes these interpolated values automatically, preventing XSS */}
        <div className="Card-title">{this.props.name}</div>
        {/* Ensured the description renders so the card data is complete */}
        <div className="Card-description">{this.props.description}</div>
      </div>
    );
  }
}
