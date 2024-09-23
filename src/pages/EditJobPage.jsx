import React from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import JobForm from '../components/JobForm'; 

const EditJobPage = ({ updateJobSubmit }) => {
  const { id } = useParams();
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateJobSubmit = (jobData) => {
    const updatedJob = {
      ...jobData,
      id,
    };
    updateJobSubmit(updatedJob);
    toast.success('Job updated successfully');
    navigate(`/jobs/${id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <JobForm
            initialData={job}
            onSubmit={handleUpdateJobSubmit}
            buttonText="Update"
          />
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;