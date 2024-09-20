import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccedentComponent } from './Component/DeparMents/accedent/accedent.component';
import { AnastiologistComponent } from './Component/DeparMents/anastiologist/anastiologist.component';
import { BariatricsurguryComponent } from './Component/DeparMents/bariatricsurgury/bariatricsurgury.component';
import { CancerRehabilationCenterComponent } from './Component/DeparMents/cancer-rehabilation-center/cancer-rehabilation-center.component';
import { BiochemistryComponent } from './Component/DeparMents/biochemistry/biochemistry.component';
import { InstituteOfCardiaSciencesComponent } from './Component/Institute/institute-of-cardia-sciences/institute-of-cardia-sciences.component';
import { InstituteOfDentalScienceComponent } from './Component/Institute/institute-of-dental-science/institute-of-dental-science.component';
import { InstituteOfGastroenterologyHepatologyComponent } from './Component/Institute/institute-of-gastroenterology-hepatology/institute-of-gastroenterology-hepatology.component';
import { InstituteOfHeartLungTransplantationComponent } from './Component/Institute/institute-of-heart-lung-transplantation/institute-of-heart-lung-transplantation.component';
import { InstituteOfNeuroSciencesComponent } from './Component/Institute/institute-of-neuro-sciences/institute-of-neuro-sciences.component';
import { AnteriorResectionComponent } from './Component/Procedure/anterior-resection/anterior-resection.component';
import { AorticAnuerysmComponent } from './Component/Procedure/aortic-anuerysm/aortic-anuerysm.component';
import { AorticStentGraftComponent } from './Component/Procedure/aortic-stent-graft/aortic-stent-graft.component';
import { ArthroscopyComponent } from './Component/Procedure/arthroscopy/arthroscopy.component';
import { BrainCancerComponent } from './Component/Procedure/brain-cancer/brain-cancer.component';
import { LocationsComponent } from './Component/InternationalPatients/locations/locations.component';
import { SpecialtiesComponent } from './Component/InternationalPatients/specialties/specialties.component';
import { ServiceFacilitiesComponent } from './Component/InternationalPatients/service-facilities/service-facilities.component';
import { PatientTestimonialsComponent } from './Component/InternationalPatients/patient-testimonials/patient-testimonials.component';
import { TechnologyAndInnovationComponent } from './Component/InternationalPatients/technology-and-innovation/technology-and-innovation.component';
import { SecundrabadComponent } from './Component/Online Lab Reports/secundrabad/secundrabad.component';
import { RajamundryComponent } from './Component/Online Lab Reports/rajamundry/rajamundry.component';
import { NelloreComponent } from './Component/Online Lab Reports/nellore/nellore.component';
import { KurnoolComponent } from './Component/Online Lab Reports/kurnool/kurnool.component';
import { AnathpurComponent } from './Component/Online Lab Reports/anathpur/anathpur.component';
import { DeparmentComponent } from './Component/DeparMents/deparment/deparment.component';
import { InstituteComponent } from './Component/Institute/institute/institute.component';
import { InternationalPatientComponent } from './Component/InternationalPatients/international-patient/international-patient.component';
import { OnlineLabreportComponent } from './Component/Online Lab Reports/online-labreport/online-labreport.component';
import { ProcedureComponent } from './Component/Procedure/procedure/procedure.component';
import { HomeComponent } from './Component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccedentComponent,
    AnastiologistComponent,
    BariatricsurguryComponent,
    CancerRehabilationCenterComponent,
    BiochemistryComponent,
    InstituteOfCardiaSciencesComponent,
    InstituteOfDentalScienceComponent,
    InstituteOfGastroenterologyHepatologyComponent,
    InstituteOfHeartLungTransplantationComponent,
    InstituteOfNeuroSciencesComponent,
    AnteriorResectionComponent,
    AorticAnuerysmComponent,
    AorticStentGraftComponent,
    ArthroscopyComponent,
    BrainCancerComponent,
    LocationsComponent,
    SpecialtiesComponent,
    ServiceFacilitiesComponent,
    PatientTestimonialsComponent,
    TechnologyAndInnovationComponent,
    SecundrabadComponent,
    RajamundryComponent,
    NelloreComponent,
    KurnoolComponent,
    AnathpurComponent,
    DeparmentComponent,
    InstituteComponent,
    InternationalPatientComponent,
    OnlineLabreportComponent,
    ProcedureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
