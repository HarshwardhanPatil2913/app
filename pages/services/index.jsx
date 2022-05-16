import ServiceContainer from '../../components/ServiceListContainer/index';
const serviceList = [
  {
    id: 1,
    serviceItem: {
      listTitle: 'Check Inventory',
      time: '7:00 am',
    },
    services: [
      {
        id: 1,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 2,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 3,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 4,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
    ],
  },
  {
    id: 2,
    serviceItem: {
      listTitle: 'Check2 Inventory',
      time: '7:00 am',
    },
    services: [
      {
        id: 1,
        serviceText: 'Observce2 the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 2,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 3,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 4,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
    ],
  },
  {
    id: 3,
    serviceItem: {
      listTitle: 'Check Inventory',
      time: '7:00 am',
    },
    services: [
      {
        id: 1,
        serviceText: 'Observce3 the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 2,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 3,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 4,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
    ],
  },
  {
    id: 4,
    serviceItem: {
      listTitle: 'Check Inventory',
      time: '7:00 am',
    },
    services: [
      {
        id: 1,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 2,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 3,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
      {
        id: 4,
        serviceText: 'Observce the Physical Inventory Count',
        time: '7.30 am',
        points: 10,
        name: 'parella',
      },
    ],
  },
];

const Services = () => {
  return <ServiceContainer serviceList={serviceList} />;
};
export default Services;
