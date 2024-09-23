import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import JobForm from '../components/JobForm';

const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (newJob) => {
    addJobSubmit(newJob);
    toast.success(`Job added successfully`);
    navigate('/jobs');
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <JobForm onSubmit={handleSubmit} buttonText="Add" />
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;