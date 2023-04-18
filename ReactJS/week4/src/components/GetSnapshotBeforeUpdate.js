import React, { Component } from 'react';

class GetSnapshotBeforeUpdate extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.state = {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        scrollTop: 0
        };
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // mengambil posisi scroll sebelum komponen di-update
        if (prevState.items.length !== this.state.items.length) {
        return this.listRef.current.scrollTop;
        }
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        // menggunakan posisi scroll sebelum komponen di-update
        if (snapshot !== null) {
        this.listRef.current.scrollTop = snapshot;
        }
    }
    
    render() {
        return (
        <div
            ref={this.listRef}
            style={{ overflowY: 'scroll', height: '100px' }}>
            {this.state.items.map(item => (
            <div key={item}>{item}</div>
            ))}
        </div>
        );
    }
}

export default GetSnapshotBeforeUpdate;
