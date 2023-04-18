import React from "react";

class OtherComponent extends React.Component {
    state = {
        showPopup: false
        }
    
        componentDidMount() {
        setTimeout(() => {
            this.setState({ showPopup: true });
        }, 5000);
        }
    
        render() {
        return (
            <div>
            <h2>componentDidMount() untuk mengatur perilaku komponen lain</h2>
            {this.state.showPopup && (
                <div>
                <p>Terima kasih sudah menunggu selama 5 detik</p>
                </div>
            )}
            </div>
        )
        }
}

export default OtherComponent;