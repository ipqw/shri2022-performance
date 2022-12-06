(() => {
    function bind(nodes, event, handler) {
        Array.from(nodes).forEach(node => {
            node.addEventListener(event, handler);
        });
    }

    function makeTabs(node) {
        const tabs = node.querySelectorAll('.section__tab');

        function selectTab(newId) {
            const newTab = node.querySelector(`.section__tab[data-id=${newId}]`);
            const newPanel = node.querySelector(`.section__panel[data-id=${newId}]`);
            const oldTab = node.querySelector('.section__tab_active');
            const oldPanel = node.querySelector('.section__panel:not(.section__panel_hidden)');

            oldTab.classList.remove('section__tab_active');
            newTab.classList.add('section__tab_active');
            oldPanel.classList.add('section__panel_hidden');
            newPanel.classList.remove('section__panel_hidden');
        }

        bind(tabs, 'click', event => {
            const newId = event.target.dataset.id;
            selectTab(newId);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        Array.from(document.querySelectorAll('.main__devices')).forEach(makeTabs);
    });
})();