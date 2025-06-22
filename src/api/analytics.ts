// Google Analytics integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const initializeAnalytics = (measurementId: string) => {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_title: 'Agilio Capital - Investment Banking',
    page_location: window.location.href
  });
};

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value
    });
  }
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

export const trackFormSubmission = (formType: string, success: boolean) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'Forms',
    label: formType,
    value: success ? 1 : 0
  });
};

export const trackUserEngagement = (action: string, element: string) => {
  trackEvent({
    action,
    category: 'User Engagement',
    label: element
  });
};