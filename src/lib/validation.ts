/** Shared client + server validation for the estimate request form. */

export const projectTypes = [
  "Self-Levelling",
  "Concrete Grinding",
  "Floor Preparation",
  "Patching",
  "Skim Coating",
  "Residential",
  "Commercial",
  "High-Rise",
  "Low-Rise",
  "Multi-Family",
  "Not sure / other",
] as const;

export type EstimateFormValues = {
  name: string;
  phone: string;
  email: string;
  address: string;
  projectType: string;
  description: string;
};

export type EstimateFormErrors = Partial<Record<keyof EstimateFormValues, string>>;

const PHONE_RE = /^[\d\s()+\-.]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEstimateForm(
  values: EstimateFormValues
): EstimateFormErrors {
  const errors: EstimateFormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!values.description.trim()) {
    errors.description = "Please add a brief description of your project.";
  } else if (values.description.trim().length < 10) {
    errors.description = "Please add a few more details (10+ characters).";
  }

  return errors;
}

export const MAX_PHOTOS = 6;
export const MAX_PHOTO_SIZE_MB = 8;
