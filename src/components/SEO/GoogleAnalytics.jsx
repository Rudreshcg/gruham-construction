import { useEffect } from 'react';

// Google Analytics configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual Google Analytics tracking ID

// Initialize Google Analytics
const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track phone number clicks
export const trackPhoneClick = (phoneNumber) => {
  trackEvent('phone_click', 'contact', phoneNumber);
};

// Track email clicks
export const trackEmailClick = (emailAddress) => {
  trackEvent('email_click', 'contact', emailAddress);
};

// Google Analytics component
const GoogleAnalytics = () => {
  useEffect(() => {
    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Add Google Analytics configuration script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `;
    document.head.appendChild(script2);

    initGA();

    // Cleanup function
    return () => {
      // Remove scripts on unmount
      const scripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default GoogleAnalytics;
