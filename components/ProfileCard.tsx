import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../pages/_app'

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    background-color: #212529;
    border-radius: 5px;
    box-shadow: 1px 0px 5px 0px #f8f9fa;
    padding: 20px ;
    margin-bottom: 20px;
    height: fit-content;
    width: 100%;

    .profileCard__header {
        display: flex;
        align-items: center;
        width: 100%;
    }
   
    .profileCard__picture {
        border: 5px solid #5E626B;
        width: 70px;
        border-radius: 50%;
        margin-right: 10px;
        margin-top: 10px;
    }

    .profileCard__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: #fff;
        margin-top: 25px;

        i{
            color: #bfc3cc;
        }

        h5{
            display: flex;
            align-items: center;
            color: #0DCAF0;
            font-size: 18px;
        }
        span{
            font-size: 14px;
        }
    }

    .profileCard__skill-section {
        display: flex;
        margin-top: 20px;
        overflow-x: hidden;
        width: 100%;

        span{
            border: 1px solid #e6e6e6;
            color: #fff;
            padding: 5px;
            margin: 5px;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            min-width: fit-content;
            transition: ease 3ms;

            &:hover{
               transform: scale(1.09);
            }
        }
    }
    

    .profileCard__action {
        margin-top: 15px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff;
        font-size: 14px;
        width: 100%;

        button{
            background-color: transparent;
            color: #fff;
            border: 2px solid #0DCAF0;
            padding: 5px 10px;
            border-radius: 50px;
            cursor: pointer;

            &:hover{
                background-color: #0DCAF0;
                color: #fff;
                border: 2px solid #fff;
                transform: scale(1.09);
            }

        }
    }
`

interface ProfileCardProps {
    user: {
        username: string,
        name: string,
        picture: string,
        verified: boolean,
        professionalHeadline: string,
        locationName: string
        skills: string[],
    },
    closeRef: React.RefObject<HTMLButtonElement>
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, closeRef }) => {
    const { setCurrentUser } = useContext(AppContext);
    const emptyPic = 'https://www.gravatar.com/avatar/?d=mm';

    const onViewProfile = () => {
        setCurrentUser(user.username);
        closeRef.current?.click();
    }

    return (
        <ProfileCardContainer>
            <div className='profileCard__header'>
                <img className='profileCard__picture' src={user.picture || emptyPic} alt="profile" />

                <div className='profileCard__info'>
                    <h5>{user.name} &nbsp; {user?.verified && <i className='bx bx-check-circle' ></i>}</h5>
                    <span>{user.professionalHeadline}</span>
                    <span>{user.locationName}</span>
                </div>
            </div>


            <div className='profileCard__skill-section'>
                {user.skills.slice(0, 5).map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
            </div>

            <div className='profileCard__action'>
                <button onClick={onViewProfile}>View Profile</button>
            </div>

        </ProfileCardContainer>
    );
}

export default ProfileCard;