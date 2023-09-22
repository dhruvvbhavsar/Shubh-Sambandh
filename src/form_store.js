import { writable } from "svelte/store";

// Initial form data structure
const initialFormData = {
  personal_details: {},
  medical_details: {},
  spiritual_details: {},
  lifestyle_details: {},
  educational_details: {},
  professional_details: {},
  family_details: {},
  partner_preferences: {},
  astrology_details: {},
};

// Create the writable store
export const formData = writable(initialFormData);
