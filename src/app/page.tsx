import React from 'react';
import EmployeeSection from '../components/ui/EmployeeSection';
import ServiceSection from '../components/ui/ServiceSection';
import ProjectSection from '../components/ui/ProjectSection';
export default function Page() {
  return (

    <main className="flex flex-col w-full">
      <EmployeeSection />
      <ServiceSection />
      <ProjectSection />
    </main>
  );
}