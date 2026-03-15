/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  incidentsSidebar: [
    {
      type: 'category',
      label: 'Incidents',
      items: [
        'incidents/overview',
        'incidents/example-incident',
        'incidents/april-fools-incident',
        'events/cat-squad-bombing',
      ],
    },
  ],
  eventsSidebar: [
    {
      type: 'category',
      label: 'Events',
      items: [
        'events/overview',
        'events/example-event',
      ],
    },
  ],
  peopleSidebar: [
    {
      type: 'category',
      label: 'People',
      items: [
        'people/overview',
        'people/example-person',
      ],
    },
  ],
};

module.exports = sidebars;
