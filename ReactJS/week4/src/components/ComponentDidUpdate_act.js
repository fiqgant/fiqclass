import React from "react";

class ActComponentUpdate extends React.Component {
    state = {
        count: 0
        };
        
        componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
            alert('Nilai count telah berubah!');
            // aksi lain yang ingin dilakukan setelah perubahan terjadi
            }
        }
        
        handleIncrement = () => {
            this.setState(prevState => ({
            count: prevState.count + 1
            }));
        };
        
        render() {
            return (
            <div>
                <h1>Contoh componentDidUpdate()</h1>
                <p>Nilai count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Tambah</button>
            </div>
            );
        }
}

export default ActComponentUpdate;