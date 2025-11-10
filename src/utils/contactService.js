const DEFAULT_CONTACT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwSj7Yykrp8zq2T9JO3l7Ivb1XlExopd6QTpga7lvlr1C_5iYhBD0ol07V2eLdd9sI1JQ/exec";

const getContactEndpoint = () => {
  const url = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || DEFAULT_CONTACT_ENDPOINT;

  if (!url) {
    throw new Error(
      "Contact endpoint is not configured. Please set VITE_GOOGLE_APPS_SCRIPT_URL."
    );
  }

  return url;
};

export const submitContactForm = async (payload) => {
  const endpoint = getContactEndpoint();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data = null;

  try {
    data = await response.json();
  } catch (error) {
    // Ignore JSON parsing errors; Apps Script can return empty body
  }

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      "Failed to submit contact form. Please try again later.";

    throw new Error(message);
  }

  return data;
};

