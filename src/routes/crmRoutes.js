import { addNewContact, deleteContact, getContacts, getContactWithID, updateContact } from '../controllers/crmController';

import { login, register, loginRequired } from '../controllers/userController';

const routes = (app) => {

    app.route('/contact')
        .get(loginRequired, getContacts)
        .post(loginRequired, addNewContact);


    app.route('/contact/:contactID')
        .get(loginRequired, getContactWithID)
        .put(loginRequired, updateContact)
        .delete(loginRequired, deleteContact);

    app.route('/auth/register')
        .post(register);

    app.route('/auth/login')
        .post(login);
};

export default routes;