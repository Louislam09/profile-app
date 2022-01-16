import React, { useContext } from 'react'
import { AppContext } from '../pages/_app';

interface ModalProps {

}

const Modal: React.FC<ModalProps> = ({ }) => {
    const { state } = useContext(AppContext);
    const experiences = state?.experiences;
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Experiences</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="list-group">
                                    {experiences?.sort((a: any, b: any) => b.fromYear - a.fromYear)?.map((experience: any, index: number) => (
                                        <a key={experience?.id} href="#" className={`list-group-item list-group-item-action ${index === 0 && 'active bg-info border-info'} `} aria-current={index == 0}>
                                            <div className="d-flex w-100 justify-content-between">
                                                <h5 className="mb-1">{experience?.name}</h5>
                                                <small>{experience?.fromMonth} {experience.fromYear}</small>
                                            </div>
                                            <p className="mb-1">At {experience?.organizations[0]?.name}</p>
                                            <small>Recommendations: {experience?.recommendations}</small>
                                        </a>

                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;