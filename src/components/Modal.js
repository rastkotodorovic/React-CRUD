import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={ props.onDismiss } className="modal" style={{ display: "block" }} tabIndex="1" role="dialog">
            <div onClick={(e) => e.stopPropagation() } className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{ props.title }</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{ props.content }</p>
                    </div>
                    <div className="modal-footer">
                        { props.actions }
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;