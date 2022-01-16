import Link from 'next/link';
// import Image from 'next/image';
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
        [SkillNames.NOVICE]: 'star',
        [SkillNames.NO_EXPERIENCE]: 'body',
    }

    const SkillSection = (skillName: any) => {
        const color: SkillNames = skillName;
        return (
            <div className={`col-sm-12 col-md-6 col-lg-3 my-2 p-3 `} key={skillName}>
                <h1 className={`text-capitalize d-flex align-items-center gap-2 fs-2 justify-content-start mb-3`}>
                    <i className={`bx bx-${icons[color]} text-${colors[color]} fs-1`}></i>
                    {skillName === SkillNames.NO_EXPERIENCE ? 'No experience, but interested' : skillName}
                </h1>
                <div className='d-flex flex-wrap gap-1'>
                    {getSkill(skillName)?.map((skill: any) => (
                        <div key={skill.id} className=''>
                            <span className={`badge rounded-pill p-2 bg-${colors[color]}`}>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='d-flex align-items-center justify-content-center col-sm-auto  p-3 w-50 flex-ms-column'>
                    <div className="col-md-6 col-lg-3">
                        <img
                            className='img-fluid img-thumbnail rounded-circle w-75'
                            src={person?.pictureThumbnail || emptyPic}
                            alt={person?.name} />
                    </div>

                    <div className='col-sm-6 d-flex align-items-start flex-column justify-content-start'>
                        <h4 className='d-flex align-items-center gap-1'>{person?.name || 'name'} {person?.verified && <i className='bx bx-check-circle' ></i>}</h4>
                        <p className='d-none d-lg-block overflow-hidden' style={{ fontSize: '14px', textOverflow: 'ellipsis', maxHeight: '140px' }}>{person?.summaryOfBio || 'bio'}</p>

                        <div className="d-flex w-100 justify-content-start">
                            <Link href={person?.links[0]?.address || '#!'} passHref={false}>
                                <button className='btn btn-outline-info btn-sm'>{person?.links[0]?.name}</button>
                            </Link>
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
