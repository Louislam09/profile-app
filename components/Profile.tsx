import React, { useContext, useEffect } from 'react';
import { AppContext } from '../pages/_app';

enum SkillNames {
    EXPERT = 'expert',
    PROFICIENT = 'proficient',
    NOVICE = 'novice',
    NO_EXPERIENCE = 'no-experience-interested',
}

const Profile = () => {
    const { state } = useContext(AppContext);
    const person = state?.person;
    const skills = state?.strengths;

    const getSkill = (skill: any) => skills?.filter((s: any) => s.proficiency === skill);

    const emptyPic = 'https://www.gravatar.com/avatar/?d=mm';
    const allSkills: Array<string> = Object.values(SkillNames)
    const colors = {
        [SkillNames.EXPERT]: 'info',
        [SkillNames.NOVICE]: 'warning',
        [SkillNames.PROFICIENT]: 'success',
        [SkillNames.NO_EXPERIENCE]: 'secondary',
    }
    const icons = {
        [SkillNames.EXPERT]: 'run',
        [SkillNames.PROFICIENT]: 'walk',
        [SkillNames.NOVICE]: 'star-half',
        [SkillNames.NO_EXPERIENCE]: 'body',
    }

    const SkillSection = (skillName: any) => {
        const color: SkillNames = skillName;
        return (
            <div className={`col my-2 p-3 `} key={skillName}>
                <h1 className={`text-capitalize d-flex align-items-center gap-2`}><i className={`bx bx-${icons[color]} text-${colors[color]}`}></i>{skillName} </h1>
                <div className='d-flex flex-wrap gap-1'>
                    {getSkill(skillName)?.map((skill: any) => (
                        <div key={skill.id} className=''>
                            <span className={`badge rounded-pill bg-${colors[color]}`}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-sm-auto d-flex align-items-center p-3'>
                    <div className="profile rounded-circle">
                        <img className='img-fluid img-thumbnail rounded-circle w-75' src={person?.pictureThumbnail || emptyPic} alt={person?.name} />
                    </div>

                    <div className='d-flex align-items-start flex-column justify-content-start'>
                        <h4 className='fs-3'>{person?.name || 'name'}</h4>
                        <p style={{ fontSize: '14px' }}>{person?.summaryOfBio || 'bio'}</p>

                        <div className="d-flex w-100 justify-content-start">
                            <a className='btn btn-outline-info btn-sm' target={'_blank'} href={person?.links[0]?.address || '#!'}>linkedin</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row">
                {allSkills.map((skillName: any) => (SkillSection(skillName)))}
            </div>
        </div>
    );
}

export default Profile;
