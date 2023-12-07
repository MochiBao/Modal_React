import { Component } from "react";

class Modal extends Component {
    state = {
        openModal: false,
        
    }

    changeModal = () => {
        this.setState({
            openModal: !this.state.openModal
        });
    }

    closeModal = (e) => {
        if(e.code ==="ESCAPE" ){
            this.changeModal()
        };
    };
   
    render () {
//         const {openModal} = this.state;
//         return (
//             {openModal && <div className="backdrop">
//             <div className="modal">
//                 {this.props.children}
//             </div>
//         </div> 
// }
         
        
           
//         )
    }
}


// if (this.state.openModal === true) {
    
// }
export default Modal 