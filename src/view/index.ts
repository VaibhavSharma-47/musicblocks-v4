import { Component, createApp } from 'vue';
import App from './App.vue';
import store from './store';

export function mount(items: {
    toolbar: {
        main: {
            clusterA: { id: string; component: Component }[];
            clusterB: { id: string; component: Component }[];
        };
        auxiliary: {
            clusterA: { id: string; component: Component }[];
            clusterB: { id: string; component: Component }[];
        };
    };
}): void {
    createApp(App).use(store).mount('#app');

    const toolbarAuxiliaryClusterA = document.getElementById('toolbar-auxiliary-cluster-a')!;
    items.toolbar.auxiliary.clusterA.forEach((item) => {
        const element = document.createElement('div');
        createApp(item.component).mount(element);
        [...element.children].forEach((child) => {
            child.classList.add('toolbar-cluster-item');
            child.classList.add('toolbar-auxiliary-cluster-item');
            child.classList.add('toolbar-auxiliary-cluster-a-item');
            child.id = item.id;
            toolbarAuxiliaryClusterA.appendChild(child);
        });
    });

    const toolbarAuxiliaryClusterB = document.getElementById('toolbar-auxiliary-cluster-b')!;
    items.toolbar.auxiliary.clusterB.forEach((item) => {
        const element = document.createElement('div');
        createApp(item.component).mount(element);
        [...element.children].forEach((child) => {
            child.classList.add('toolbar-cluster-item');
            child.classList.add('toolbar-auxiliary-cluster-item');
            child.classList.add('toolbar-auxiliary-cluster-b-item');
            child.id = item.id;
            toolbarAuxiliaryClusterB.appendChild(child);
        });
    });
}
