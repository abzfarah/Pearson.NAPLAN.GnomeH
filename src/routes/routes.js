import AppContainer from '../containers/AppContainer'
import CallbackPage from '../components/callback'
import RegistrationContainer from '../containers/Registration/RegistrationContainer'
import AuthorizedStaff from '../components/MultiTab/AuthStaff/AuthStaff'
import ManageUsersContainer from '../containers/ManageUsers/ManageUsersContainer'
import ManageSchools from '../components/layouts/ManageSchools'
import StatementContainer from '../containers/Registration/Statement/StatementContainer'
import SchoolDetailsContainer from '../containers/Registration/SchoolDetails/SchoolDetailsContainer'
import SummaryTable from '../containers/Registration/Summary/SummaryTable'
import session from '../utils/session'
//  { onEnter: redirectToHome }
export default {
  path: '/',
  indexRoute: { onEnter: redirectToHome },
  component: AppContainer,
  childRoutes: [
    {
      path:'/school',
      component: RegistrationContainer,
      indexRoute: { component: SummaryTable },
      childRoutes: [
        { path: 'summary', component: SummaryTable },
        { path: 'soc', component: StatementContainer },
    //    { path: 'authorisedstaff', component: AuthorizedStaff },
        { path: 'schooldetails', component: SchoolDetailsContainer }
  //      { path: 'studentregistration', component: Summary },
      ]
    },
    {
      path: '/manageschools',
      component: ManageSchools
    },
    {
      path: '/manageusers',
      component: ManageUsersContainer
    },
    { path:'/callback',
      component: CallbackPage
    }
  ]
}



function render(nextState, replaceState) {
  if (session.login)
    replaceState({ nextPathname: nextState.location.pathname }, '/school')
}

function redirectToHome(nextState, replace) { 
  if (session.isAdmin) { 
    replace('/manageschools') 
  } 
  else if (session.schoolcode) {
    replace('/school') 
  }

}
      
function renderRoot(nextState, replace) {
  if (1) { replace('/school') }
}