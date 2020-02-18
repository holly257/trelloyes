import React from 'react';
import Card from './Card';

function List (){
    return (
        <section class="List">
            <header class="List-header">
            <h2>Second list</h2>
            </header>
            <div class="List-cards">
                <Card />
                <button type="button" class="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    )
}

export default List;