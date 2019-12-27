import React from 'react';
import ReactDOM from 'react-dom';
import './custom-modal.style.scss';

import Modal from 'react-modal';
import CustomButton from '../custom-button/custom-button.component';

import {connect} from 'react-redux';
import { handleCloseModal,handleOpenModal } from '../../redux/modal/modal.actions';

// 锁定显示的父类标签(必备)
var appElement = document.querySelector('body');
Modal.setAppElement(appElement);

class CustomModal extends React.Component {

    render(){
        const { handleCloseModal,handleOpenModal,showModal,text } = this.props;
        return(
            <div className="custom-modal" >
                <Modal 
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
                className="Modal"
                overlayClassName="Overlay"
                >
                    <div className="modal-title">
                        <button className="modal-btn" onClick={handleCloseModal}>
                            X
                        </button>
                    </div>
                    <div className="modal-content">
                        <p>
                            { text }
                        </p>
                    </div>
                </Modal>
            </div>
        );
    };

}
const mapStateToProps = ({ modal: { showModal,text } }) => ({
    showModal,
    text,
});

const mapDispatchToProps = dispatch => ({
    handleOpenModal: text => dispatch(handleOpenModal(text)),
    handleCloseModal: () => dispatch(handleCloseModal()),
});

export default connect(mapStateToProps,mapDispatchToProps)(CustomModal) ;