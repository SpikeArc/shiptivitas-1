// src/components/Swimlane.js

import React from 'react';
import Card from './Card';
import './Swimlane.css';

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          // Bind status directly from parent prop rather than stale client data
          status={this.props.status} 
        />
      );
    })
    return (
      // Enforced AC requirement: 'Swimlane-column' root class
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        {/* Bound dragulaRef strictly to the drop-target child node */}
        <div className="Swimlane-dragColumn" ref={this.props.dragulaRef}>
          {cards}
        </div>
      </div>
    );
  }
}
