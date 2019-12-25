import React from 'react';
import ReactDOM from 'react-dom';
import './custom-modal.style.scss';

import Modal from 'react-modal';
import CustomButton from '../custom-button/custom-button.component';

// 锁定显示的父类标签(必备)
var appElement = document.querySelector('body');
Modal.setAppElement(appElement);

class CustomModal extends React.Component {
    constructor(props){
     super(props);
     this.state = {
         showModal: this.props.door,
         text: this.props.children,
     } 
    }

    // 核心 - 只要出现更新内容,则将出现渲染
    handleOpenModal = ()=> {
        this.setState({ showModal: true });
    }
    
    handleCloseModal = ()=> {
        this.setState({ showModal: false });
    }

    componentDidMount(){
        this.setState({ door: this.props.door , text: this.props.children });
    }

    render(){
        return(
            <div className="custom-modal" >
                <CustomButton onClick={ this.handleOpenModal } selfCss={`custom-modal-btn`}>
                    开启弹窗
                </CustomButton>
                <Modal 
                isOpen={this.state.showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={this.handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
                >
                    <div className="modal-title">
                        <button className="modal-btn" onClick={this.handleCloseModal}>
                            X
                        </button>
                    </div>
                    <div className="modal-content">
                        <p>
                            { this.state.text }
                        </p>
                    </div>
                </Modal>
            </div>
        );
    };

}

export default CustomModal;