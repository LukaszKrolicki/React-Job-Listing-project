
export const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newJob),
    });
    if(res.ok){
      return ;
    }
  }

 
export const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    });
    if(res.ok){
      return ;
    }
  }

 
export const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(job),
    });
    if(res.ok){
      return ;
    }
  }

export const JobLoader = async ({params}) =>{
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = res.json();
    return data;
}