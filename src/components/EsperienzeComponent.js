import React, { useState } from 'react';
import NavBar from './Navbar';
import workExperiencesData from '../utilities/WorkExperienceData';
import WorkExperience from './WorkExperience';
import { ESPERIENZE_TAB } from '../utilities/Constants';

const EsperienzeComponent = () => {
  const [sortBy, setSortBy] = useState('');

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const filteredExperiences = workExperiencesData.sort((a, b) => {
    switch (sortBy) {
      case 'startDateAsc':
        return new Date(a.startDate) - new Date(b.startDate);
      case 'startDateDesc':
        return new Date(b.startDate) - new Date(a.startDate);
      case 'endDateAsc':
        if (b.endDate === 'IN CORSO') return -1;
        if (a.endDate === 'IN CORSO') return 1;
        return new Date(a.endDate) - new Date(b.endDate);
      case 'endDateDesc':
        if (b.endDate === 'IN CORSO') return 1;
        if (a.endDate === 'IN CORSO') return -1;
        return new Date(b.endDate) - new Date(a.endDate);
      case 'companyAsc':
        return a.company.localeCompare(b.company);
      case 'companyDesc':
        return b.company.localeCompare(a.company);
      default:
        return 0;
    }
  });

  return (
    <>
      <NavBar activeItem={ESPERIENZE_TAB} />
      <div className="container-fluid mt-4">
        <div className='row mb-3 justify-content-center d-flex'>
            <div className='col-sm-12 col-lg-6 text-center'>
                <h2>Le mie esperienze lavorative</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="justify-content-center mx-auto col-lg-6 col-sm-12 mb-3">
              <label htmlFor="sortBy">Ordina per:</label>
              <select
                id="sortBy"
                className="form-select"
                value={sortBy}
                onChange={handleSort}
              >
                <option value="">Nessun ordine</option>
                <option value="startDateAsc">Data di inizio (Ascendente)</option>
                <option value="startDateDesc">Data di inizio (Discendente)</option>
                <option value="endDateAsc">Data di fine (Ascendente)</option>
                <option value="endDateDesc">Data di fine (Discendente)</option>
                <option value="companyAsc">Nome azienda (Ascendente)</option>
                <option value="companyDesc">Nome azienda (Discendente)</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            {filteredExperiences.map((experience) => (
              <WorkExperience
                key={experience.id}
                logo={experience.logo}
                company={experience.company}
                role={experience.role}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EsperienzeComponent;