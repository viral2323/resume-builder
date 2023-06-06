import {createBrowserRouter} from 'react-router-dom'
import Form from "../component/Form";

const router = createBrowserRouter([
    {
        path: '/create-resume',
        element: <Form/>,
    },
    // {
    //     path: '/login',
    //     element: <Login/>
    // },
    // {
    //     path:'/admin',
    //     element: <PrivatRoute><AdminLayout/></PrivatRoute>,
    //     children: [
    //         {
    //             path: '/admin/main-profile/',
    //             element: <AdminMainProfile/>
    //         },
    //         {
    //             path: '/admin/social-profile',
    //             element: <AdminSocialProfile/>
    //         },{
    //             path: '/admin/about-me',
    //             element: <AdminAbout/>
    //         },
    //         {
    //             path: '/admin/experties',
    //             element: <AdminExperties/>
    //         },{
    //             path: '/admin/testimonial',
    //             element: <AdminTestimonial/>
    //         },{
    //             path: '/admin/education',
    //             element: <AdminEducation/>
    //         },
    //         {
    //             path: '/admin/experience',
    //             element: <AdminExperience/>
    //         },{
    //             path: '/admin/skills',
    //             element: <AdminSkill/>
    //         },
    //         {
    //             path: '/admin/tools',
    //             element: <AdminTools/>
    //         },
    //         {
    //             path: '/admin/personal-portfolio',
    //             element: <AdminPersonalProject/>
    //         },{
    //             path: '/admin/client-portfolio',
    //             element: <AdminClientProject/>
    //         },
    //         {
    //             path: '/admin/contact',
    //             element: <AdminContact/>
    //         },
    //         {
    //             path: '/admin/edit',
    //             element: <AdminEditPageLayout/>,
    //             children: [
    //                 {
    //                     path: '/admin/edit/main-profile',
    //                     element: <AdminEditMainProfile/>,
    //                 },
    //                 {
    //                     path: '/admin/edit/social-profile',
    //                     element: <AdminEditSocialProfile/>,
    //                 },{
    //                     path: '/admin/edit/about-me',
    //                     element: <AdminEditAbout/>
    //                 },{
    //                     path: '/admin/edit/experties',
    //                     element: <AdminEditExperties/>
    //                 },{
    //                     path: '/admin/edit/testimonial',
    //                     element: <AdminEditTestimonial/>
    //                 },{
    //                     path: '/admin/edit/education',
    //                     element: <AdminEditEducation/>
    //                 },{
    //                     path: '/admin/edit/experience',
    //                     element: <AdminEditExperience/>
    //                 },{
    //                     path: '/admin/edit/skills',
    //                     element: <AdminEditSkills/>
    //                 },{
    //                     path: '/admin/edit/tools',
    //                     element: <AdminEditTools/>
    //                 },{
    //                     path: '/admin/edit/personal-portfolio',
    //                     element: <AdminEditPersonalProject/>,
    //                 },{
    //                     path: '/admin/edit/client-portfolio',
    //                     element: <AdminEditClientProject/>,
    //                 },{
    //                     path: '/admin/edit/contact',
    //                     element: <AdminEditContact/>
    //                 },
    //             ]
    //         },
    //     ]
    // },
])

export default router;