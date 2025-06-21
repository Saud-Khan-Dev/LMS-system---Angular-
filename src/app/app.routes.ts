import { Routes } from '@angular/router';

import { Home } from './pages/home/home';

// About section
import { Objective } from './pages/about/objective/objective';
import { TopStories } from './pages/about/top-stories/top-stories';
import { Responsibility } from './pages/about/responsibility/responsibility';
import { OrganizationChart } from './pages/about/organization-chart/organization-chart';
import { QecTeam } from './pages/about/qec-team/qec-team';

// Activities section
import { Academic } from './pages/activities/academic/academic';
import { Conferences } from './pages/activities/conferences/conferences';
import { FunFair } from './pages/activities/fun-fair/fun-fair';
import { NonAcademic } from './pages/activities/non-academic/non-academic';
import { Training } from './pages/activities/training/training';
import { Workshops } from './pages/activities/workshops/workshops';

// Admin section
import { Admin } from './pages/admin/admin';
import { Registration } from './pages/admin/registration/registration';

// Admissions section
import { Admissions } from './pages/admissions/admissions';

// Membership section
import { Societies } from './pages/membership/societies/societies';

// News section
import { Exams } from './pages/news/exams/exams';
import { UpcomingEvents } from './pages/news/upcoming-events/upcoming-events';

// Undergraduate Programs
import { UndergraduatePrograms } from './pages/undergraduate-programs/undergraduate-programs';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',

    children: [
      { path: 'objective', component: Objective },
      { path: 'top-stories', component: TopStories },
      { path: 'responsibility', component: Responsibility },
      { path: 'organization-chart', component: OrganizationChart },
      { path: 'QEC-team', component: QecTeam },
    ],
  },
  {
    path: 'activities',
    children: [
      { path: 'academic', component: Academic },
      { path: 'conferences', component: Conferences },
      { path: 'fun-fair', component: FunFair },
      { path: 'non-academic', component: NonAcademic },
      { path: 'training', component: Training },
      { path: 'workshops', component: Workshops },
    ],
  },
  {
    path: 'admin',
    component: Admin,
    children: [{ path: 'registration', component: Registration }],
  },
  {
    path: 'admissions',
    component: Admissions,
  },
  {
    path: 'membership',
    children: [{ path: 'societies', component: Societies }],
  },
  {
    path: 'news',
    children: [
      { path: 'exams', component: Exams },
      { path: 'upcoming-events', component: UpcomingEvents },
    ],
  },
  {
    path: 'undergraduate-programs',
    component: UndergraduatePrograms,
  },
];
