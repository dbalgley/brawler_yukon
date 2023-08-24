import { createRouter, createWebHistory } from 'vue-router';
import ActionVideoGallery from '@/components/ActionVideoGallery.vue';
import AboutMe from '@/components/AboutMe.vue';
import BlogPosts from '@/components/BlogPosts.vue';
import ResumePage from '@/components/ResumePage.vue';
import SoftwareProjects from '@/components/SoftwareProjects.vue';
import PrintingProjects from '@/components/PrintingProjects.vue';
import HomePage from '@/components/HomePage.vue';
import MainLayout from '@/components/MainLayout.vue';
import KnittingProjects from '@/components/KnittingProjects.vue';


const Router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children:  [
                {
                    path: '/',
                    name: 'HomePage',
                    component: HomePage
                },
                {
                    path: '/about_me',
                    name: 'AboutMe',
                    component: AboutMe
                },
                {
                    path: '/videos',
                    name: 'ActionVideoGallery',
                    component: ActionVideoGallery
                },
                {
                    path: '/blog',
                    name: 'BlogPosts',
                    component: BlogPosts
                },
                {
                    path: '/resume',
                    name: 'Resume',
                    component: ResumePage
                },
                {
                    path: '/software_projects',
                    name: 'SoftwareProjects',
                    component: SoftwareProjects
                },
                {
                    path: '/printing',
                    name: 'PrintingProjects',
                    component: PrintingProjects
                },
                {
                    path: '/knitting',
                    name: 'KnittingProjects',
                    component: KnittingProjects
                }
            ]
        }
    ]
})
export default Router;