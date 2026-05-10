import {
  FaWrench,
  FaLightbulb,
  FaThermometerHalf,
  FaFan,
  FaToolbox,
  FaTools
} from 'react-icons/fa';

export const services = [
  {
    id: 1,
    icon: FaWrench,
    key: 'plumbing',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: FaLightbulb,
    key: 'electrical',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    icon: FaThermometerHalf,
    key: 'heating',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 4,
    icon: FaFan,
    key: 'ac',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 5,
    icon: FaToolbox,
    key: 'installation',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 6,
    icon: FaTools,
    key: 'repair',
    color: 'from-green-500 to-emerald-500'
  }
];

export const testimonials = [
  {
    id: 1,
    rating: 5,
    key: 'testimonial1',
    clientKey: 'client1'
  },
  {
    id: 2,
    rating: 5,
    key: 'testimonial2',
    clientKey: 'client2'
  },
  {
    id: 3,
    rating: 5,
    key: 'testimonial3',
    clientKey: 'client3'
  }
];

export const stats = [
  {
    number: '2500+',
    key: 'customers'
  },
  {
    number: '5000+',
    key: 'projects'
  },
  {
    number: '15+',
    key: 'experience'
  },
  {
    number: '50+',
    key: 'team'
  }
];
