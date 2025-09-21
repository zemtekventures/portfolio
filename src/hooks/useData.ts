import { useState, useEffect } from 'react';
import { api } from '../services/api';
// Generic hook for fetching any data type
export function useData<T>(fetchFunction: () => Promise<T>, initialState: T) {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchFunction]);
  return {
    data,
    loading,
    error
  };
}
// Specific hooks for each data section
export function useHeroData() {
  return useData(api.getHeroData, {
    title: {
      highlight: '',
      line1: '',
      line2: ''
    },
    description: '',
    buttons: [],
    image: '',
    imageAlt: ''
  });
}
export function useServicesData() {
  return useData(api.getServicesData, {
    title: {
      highlight: '',
      main: ''
    },
    services: []
  });
}
export function useWhyChooseUsData() {
  return useData(api.getWhyChooseUsData, {
    title: {
      highlight: '',
      main: ''
    },
    reasons: []
  });
}
export function useProjectsData() {
  return useData(api.getProjectsData, {
    title: {
      highlight: '',
      main: ''
    },
    projects: []
  });
}
export function useTestimonialsData() {
  return useData(api.getTestimonialsData, {
    title: {
      highlight: '',
      main: ''
    },
    testimonials: []
  });
}
export function useToolsData() {
  return useData(api.getToolsData, {
    title: {
      highlight: '',
      main: ''
    },
    tools: []
  });
}
export function useAboutData() {
  return useData(api.getAboutData, {
    title: {
      highlight: '',
      main: ''
    },
    description: '',
    mission: '',
    values: [],
    team: {
      heading: '',
      members: []
    }
  });
}
export function useContactData() {
  return useData(api.getContactData, {
    title: {
      highlight: '',
      main: ''
    },
    description: '',
    contactInfo: {
      email: '',
      phone: '',
      address: ''
    },
    socialMedia: {
      linkedin: '',
      twitter: '',
      github: ''
    },
    formPlaceholders: {
      name: '',
      email: '',
      message: '',
      button: ''
    }
  });
}