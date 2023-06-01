import './style.scss';
import candidate from '../../../images/candidate.png';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { styled } from '@mui/material/styles';
import React from 'react';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));
export const Resume = ({ data }) => {
    const { personalData, experienceData } = data;
    const handlePrint = () => alert("Printing");

    return (
        <React.Fragment>
            <main className='container'>
                <header className='header'>
                    <div>
                        <h1>{[personalData.name]}</h1>
                        <p className='resumeTitle'>
                            Location:  {personalData.city}, {personalData.country}
                        </p>
                        <p className='resumeTitle headerTitle'>
                            Contact Number: {personalData.mobile}
                        </p>
                        <p className='resumeTitle'>
                            Experience: 1-3 years
                        </p>
                    </div>
                    <div>
                        <img
                            src={candidate}
                            alt='fff'
                            className='resumeImage'
                        />
                    </div>
                </header>
                <div className='resumeBody'>
                    <div>
                        <h2 className='resumeBodyTitle'>PROFILE SUMMARY</h2>
                        <p>Non ea do elit deserunt aute do irure nisi do deserunt eiusmod esse. Voluptate culpa enim elit consequat in exercitation non. Laborum consectetur eiusmod commodo aliqua aliqua mollit amet irure ex commodo ut.

                            Ex aliqua officia proident magna aliqua dolor eu pariatur quis id duis minim. Aliquip nulla adipisicing officia elit quis cupidatat cupidatat elit incididunt sint ex velit. Culpa deserunt non in laborum eiusmod voluptate. Eiusmod nulla ea fugiat sit.

                            Consequat non est cillum aliquip dolore enim voluptate reprehenderit do enim eu amet duis id. Nisi ea quis do voluptate Lorem ea. Id consequat velit consectetur consequat officia elit. Qui sit sunt pariatur laboris officia consectetur id occaecat ad eu est. Nulla nisi sint veniam ipsum proident ullamco enim.

                            Nisi ex pariatur minim pariatur sit tempor. Adipisicing id proident officia sunt non velit. Ut ipsum sint ut labore sunt est cupidatat aute ea in sint deserunt.

                            Nostrud esse exercitation laborum in Lorem irure ullamco qui qui do. Eu sunt irure sit adipisicing sit elit. Nostrud sunt sint mollit dolore eiusmod mollit Lorem exercitation aliquip amet commodo incididunt. Incididunt qui tempor reprehenderit amet et officia voluptate. Et eu aliqua ut consectetur labore culpa deserunt commodo ipsum laboris duis fugiat do. Occaecat officia amet aliqua ad et quis duis proident esse non ullamco ea anim. Qui irure veniam do elit irure exercitation sint pariatur nostrud pariatur.</p>
                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>WORK HISTORY</h2>
                        <p>Enim nostrud in velit magna fugiat veniam anim. Culpa id magna incididunt tempor proident commodo amet in. Est ea anim deserunt sint laboris amet elit adipisicing quis officia amet dolor. Occaecat veniam pariatur consectetur pariatur. Ut proident consectetur pariatur cupidatat mollit officia tempor sint sunt.

                            Aliqua amet tempor pariatur mollit dolore est consectetur irure ad fugiat. Laboris do ad cupidatat aliquip aute esse et enim enim laboris. Consectetur culpa amet cupidatat ut ex qui nostrud nisi qui laboris consequat ut ut.

                            Anim sit ad labore duis esse elit in proident sit nisi anim proident. Ad sit occaecat dolor duis nulla consectetur deserunt exercitation cupidatat do id sunt do. Aute nostrud aliqua et id proident commodo dolore voluptate adipisicing.

                            Dolore ea mollit Lorem consequat mollit tempor laborum laboris nostrud amet deserunt non ea amet. Nostrud quis pariatur non dolore mollit sint sunt anim laboris laboris. Proident nisi eu ex officia nisi sit ea nostrud labore eu cillum. Ut cillum do eu in occaecat aute.</p>
                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>JOB PROFILE</h2>
                        <p>{experienceData.org}</p>
                        <p>{experienceData.title}</p>
                        <p>Non sit et magna amet. Sit cillum adipisicing aliqua et. Enim officia ipsum ullamco minim minim consectetur dolor. Nulla non ex pariatur ea fugiat est velit. Ex minim non dolor eiusmod amet qui amet.

                            Mollit velit laboris labore do labore. Nisi reprehenderit adipisicing sint ullamco culpa aliquip consectetur ex est irure consequat proident. Mollit dolore minim est et aliquip ad est deserunt ipsum eu.

                            Lorem deserunt dolor veniam sunt officia esse ad tempor minim do ea consequat quis. Commodo irure qui do commodo ad ipsum. Irure et mollit id veniam aliquip mollit veniam id consectetur laborum enim fugiat mollit magna. Laboris ut amet velit sit incididunt eu. Tempor officia dolor quis incididunt eiusmod reprehenderit nostrud minim ullamco laboris Lorem.</p>
                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>JOB RESPONSIBILITIES</h2>
                        <div>{experienceData.skills.map((data) => {
                            return (
                                <ListItem key={data.code}>
                                    <Chip
                                        label={data.name}

                                    />
                                </ListItem>
                            );
                        })}</div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};