import { useEffect, useState } from "react";
import workExperiencesData from '../utilities/WorkExperienceData';
import WorkExperience from "./WorkExperience";
import { FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";

const CurrentWorkExperience = () => {

    const [currentWorkExperience, setCurrentWorkExperience] = useState(workExperiencesData[0]);

    useEffect(() => {
        var curr = workExperiencesData.find(
            (experience) => experience.endDate === 'IN CORSO'
        );
        setCurrentWorkExperience(curr);
    }, []);


    return (
        <div className="container-fluid px-auto pt-2 w-100">
            <div className="row mb-2 mt-2">
                <div className="col-lg-6 col-sm-12 text-center w-100">
                    <h3 className="">Esperienza Lavorativa in corso</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12 w-100">
                    <WorkExperience
                        key={currentWorkExperience.id}
                        logo={currentWorkExperience.logo}
                        company={currentWorkExperience.company}
                        role={currentWorkExperience.role}
                        startDate={currentWorkExperience.startDate}
                        endDate={currentWorkExperience.endDate}
                        description={currentWorkExperience.description}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12 w-100 justify-content-center d-flex mb-3">
                    <Link
                        className="btn btn-primary rounded btn-lg me-lg-2 mb-2 mb-lg-0 button-secondary-pers shadow-lg"
                        to="/job"
                    >
                        <FaEye /> Visualizza Altro
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CurrentWorkExperience;