import React, { Component } from 'react';

// Import Styles
import injectSheet from 'react-jss';
import { modalStyle } from './styles';

class Modal extends Component {
    render () {
        const { handleClose, show, children, classes } = this.props;
        const style = classes.root;
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        return (
            <div className={style} >
                <div className={showHideClassName} onClick={handleClose}>
                    <section className="modal-main">
                      <button className="btnClose" onClick={handleClose}>
                        <i className="fas fa-times"></i>
                      </button>
                      <div className="modalBody">
                          {children}
                      </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default (injectSheet(modalStyle)(Modal));
