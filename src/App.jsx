import React from 'react'
import{ Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {JobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import { addJob, deleteJob, updateJob } from './api/jobService';

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
          <Route index element = {<HomePage />} />
          <Route path='/jobs' element = {<JobsPage />} />
          <Route path='/add-job' element = {<AddJobPage addJobSubmit={addJob} />} />
          <Route path='*' element = {<NotFoundPage />} />
          <Route path='/jobs/:id' element = {<JobPage deleteJob={deleteJob} />} loader={JobLoader} />
          <Route path='/jobs/edit/:id' element = {<EditJobPage updateJobSubmit={updateJob}/>} loader={JobLoader} />
      </Route>)
  );

  return <RouterProvider router={router} />
}

export default App
