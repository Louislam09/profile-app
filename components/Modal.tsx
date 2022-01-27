import React, { useContext, useRef } from 'react'
import styled from 'styled-components';
import { AppContext } from '../pages/_app';
import ProfileCard from './ProfileCard';
import Spinner from './Spinner';


const ScrollContainer = styled.div`
 width: 100%;
    height: 600px;
    overflow-y: auto;
    position: relative;

    &::-webkit-scrollbar {
        width: 12px;
    }
    
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 1px 0px 5px 0px #0DCAF0;
    }
`;

const ModalContainer = styled.div`
.close {
  background-color: white;
}
`
interface ModalProps {
    currentSkill: string;
    userBySkillData: any;
    loading: boolean;
}

const Modal: React.FC<ModalProps> = ({ currentSkill, userBySkillData, loading }) => {
    const closeRef = useRef<HTMLButtonElement>(null);

    return (
        <ModalContainer>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                {loading && <div className='d-flex w-100 h-100 align-items-center justify-content-center'><Spinner /></div>}
                {userBySkillData && !loading && (<div className="modal-dialog">
                    <div className="modal-content" style={{ background: '#212529', color: 'white' }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">People By Skills: <span style={{ color: '#0DCAF0' }}>{currentSkill}</span> </h5>
                            <button ref={closeRef} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: 'white' }}></button>
                        </div>
                        <div className="modal-body">
                            <ScrollContainer className="container-fluid" style={{ height: '600px', overflow: 'auto' }}>
                                {userBySkillData.map((user: any) => (<ProfileCard user={user} closeRef={closeRef} />))}
                            </ScrollContainer>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        </div>
                    </div>
                </div>)}
            </div>
        </ModalContainer>
    );
}

export default Modal;