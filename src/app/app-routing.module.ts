import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeparmentComponent } from './Component/DeparMents/deparment/deparment.component';
import { AccedentComponent } from './Component/DeparMents/accedent/accedent.component';
import { ArthroscopyComponent } from './Component/Procedure/arthroscopy/arthroscopy.component';
import { AnastiologistComponent } from './Component/DeparMents/anastiologist/anastiologist.component';
import { BariatricsurguryComponent } from './Component/DeparMents/bariatricsurgury/bariatricsurgury.component';
import { BiochemistryComponent } from './Component/DeparMents/biochemistry/biochemistry.component';
import { CancerRehabilationCenterComponent } from './Component/DeparMents/cancer-rehabilation-center/cancer-rehabilation-center.component';
import { InstituteComponent } from './Component/Institute/institute/institute.component';
import { InternationalPatientComponent } from './Component/InternationalPatients/international-patient/international-patient.component';
import { OnlineLabreportComponent } from './Component/Online Lab Reports/online-labreport/online-labreport.component';
import { ProcedureComponent } from './Component/Procedure/procedure/procedure.component';
import { InstituteOfCardiaSciencesComponent } from './Component/Institute/institute-of-cardia-sciences/institute-of-cardia-sciences.component';
import { InstituteOfDentalScienceComponent } from './Component/Institute/institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './Component/Institute/institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './Component/Institute/institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './Component/Institute/institute-of-neuro-sciences/institute-of-neuro-sciences.component';
import { LocationsComponent } from './Component/InternationalPatients/locations/locations.component';
import { PatientTestimonialsComponent } from './Component/InternationalPatients/patient-testimonials/patient-testimonials.component';
import { ServiceFacilitiesComponent } from './Component/InternationalPatients/service-facilities/service-facilities.component';
import { SpecialtiesComponent } from './Component/InternationalPatients/specialties/specialties.component';
import { TechnologyAndInnovationComponent } from './Component/InternationalPatients/technology-and-innovation/technology-and-innovation.component';
import { AnathpurComponent } from './Component/Online Lab Reports/anathpur/anathpur.component';
import { SecundrabadComponent } from './Component/Online Lab Reports/secundrabad/secundrabad.component';
import { NelloreComponent } from './Component/Online Lab Reports/nellore/nellore.component';
import { KurnoolComponent } from './Component/Online Lab Reports/kurnool/kurnool.component';
import { AnteriorResectionComponent } from './Component/Procedure/anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from './Component/Procedure/aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from './Component/Procedure/aortic-stent-graft/aortic-stent-graft.component';
import { BrainCancerComponent } from './Component/Procedure/brain-cancer/brain-cancer.component';
import { HomeComponent } from './Component/home/home.component';
const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:"DeparMents",component:DeparmentComponent,children:[
      {path:"Bariatricsurgury",component:BariatricsurguryComponent},
      {path:"Accedent",component:AccedentComponent},
      {path:"Anastiologist",component:AnastiologistComponent},
      {path:"Biochemistry",component:BiochemistryComponent},
      {path:"CancerRehabilationCenter",component:CancerRehabilationCenterComponent}
    ],
  },
  {path:"Institute",component:InstituteComponent,
    children:[
      {path:"InstituteOfCardiaSciences",component:InstituteOfCardiaSciencesComponent},
      {path:"InstituteOfDentalScience",component:InstituteOfDentalScienceComponent},
      {path:"InstituteOfGastroenterologyHepatology",component:InstituteOfGastroenterologyHepatologyComponent},
      {path:"InstituteOfHeartLungTransplantation",component:InstituteOfHeartLungTransplantationComponent},
      {path:"InstituteOfNeuroSciences",component:InstituteOfNeuroSciencesComponent}
    ],
  },
  {path:"InternationalPatient",component:InternationalPatientComponent,
    children:[
      {path:"Locations",component:LocationsComponent},
      {path:"PatientTestimonials",component:PatientTestimonialsComponent},
      {path:"ServiceFacilities",component:ServiceFacilitiesComponent},
      {path:"Specialties",component:SpecialtiesComponent},
      {path:"TechnologyAndInnovation",component:TechnologyAndInnovationComponent}
    ],
  },
  {path:"OnlineLabreport",component:OnlineLabreportComponent,
    children:[
      {path:"Anathpur",component:AnathpurComponent},
      {path:"Secundrabad",component:SecundrabadComponent},
      {path:"Nellore",component:NelloreComponent},
      {path:"Kurnool",component:KurnoolComponent},
      {path:"Anathpur",component:AnathpurComponent}
    ],
  },
  {path:"Procedure",component:ProcedureComponent,
    children:[
      {path:"AnteriorResection",component:AnteriorResectionComponent},
      {path:"AorticAnuerysm",component:AorticAnuerysmComponent},
      {path:"AorticStentGraft",component:AorticStentGraftComponent},
      {path:"Arthroscopy",component:ArthroscopyComponent},
      {path:"BrainCancer",component:BrainCancerComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
