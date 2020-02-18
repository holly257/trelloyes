import React from 'react';
import Card from './Card';

function List (props){
    return (
        <section className="List">
            <header className="List-header">
            <h2>Second list</h2>
            </header>
            <div className="List-cards">
                {this.props.cards.map(item => {
                    <Card 
                        key={item.id}
                        title={item.title}
                        component={item.content}
                    />
                })}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;