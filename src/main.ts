import { mount } from './view';

import Dummy from './plugins/Dummy.vue';

mount({
    toolbar: {
        main: {
            clusterA: [{ id: 'dummy-main-a-1', component: Dummy }],
            clusterB: [
                { id: 'dummy-main-b-1', component: Dummy },
                { id: 'dummy-main-b-2', component: Dummy },
            ],
        },
        auxiliary: {
            clusterA: [{ id: 'dummy-auxiliary-a-1', component: Dummy }],
            clusterB: [
                { id: 'dummy-auxiliary-b-1', component: Dummy },
                { id: 'dummy-auxiliary-b-2', component: Dummy },
            ],
        },
    },
});
