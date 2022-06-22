import React from 'react';

const Modal = ({title,children,fbtn,sbtn}) => {
    return (
        <div className="modal-dialog modal-lg">
            <div className="modal-content">

                <div className="modal-header" style = {{background : "#f1f6f7",color : "#3674c1"}}>
                    <h4 className="modal-title">{title}</h4>
                </div>

                <div className="modal-body">
                    {children}
                </div>

                <div className ="modal-footer"  style = {{background : "#f1f6f7"}}>
                    <button type="button" className ="btn btn-sm btn-danger" data-dismiss="modal">{fbtn}</button>
                    <button type="button" className ="btn btn-sm btn-primary" data-dismiss="modal">{sbtn}</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;