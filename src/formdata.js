import Authentication from './components/Authentication';
import Basic from './components/Basic';
import Contacts from './components/contactsapp/Contacts';

const forms = [
    {
        id: 1,
        component: Basic,
        title: "Basic form w/Inverse Data Flow",
        route: "/basic",
        description: "Basic form creation with inverse data flow.",
    },
    {
        id: 2,
        component: Authentication,
        title: "Authentication & Validation",
        route: "/authentication",
        description: "Looking at two levels of validation. 1. The Form and 2. The authentication procedure. Also, looking at the inverse of data up to the authentication component.",
    },
    {
        id: 3,
        component: Contacts,
        title: "Contacts App",
        route: "/contactsapp",
        description: "An app that allows users to input their contacts in a database and send email.",
    }
  ]

  export default forms;