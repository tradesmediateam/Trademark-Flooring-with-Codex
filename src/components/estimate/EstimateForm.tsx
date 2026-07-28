"use client";

import { useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import {
  projectTypes,
  validateEstimateForm,
  MAX_PHOTOS,
  MAX_PHOTO_SIZE_MB,
  type EstimateFormValues,
  type EstimateFormErrors,
} from "@/lib/validation";
import { CheckIcon } from "@/components/ui/Icons";

const initialValues: EstimateFormValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  projectType: "",
  description: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelCls = "mb-1.5 block text-sm font-semibold text-ink-800";
const errorCls = "mt-1.5 text-sm text-red-600";

export function EstimateForm() {
  const [values, setValues] = useState<EstimateFormValues>(initialValues);
  const [errors, setErrors] = useState<EstimateFormErrors>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof EstimateFormValues>(
    key: K,
    value: EstimateFormValues[K]
  ) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const incoming = Array.from(fileList);
    const combined = [...photos, ...incoming];

    if (combined.length > MAX_PHOTOS) {
      setPhotoError(`You can attach up to ${MAX_PHOTOS} photos.`);
      return;
    }
    const maxBytes = MAX_PHOTO_SIZE_MB * 1024 * 1024;
    const oversized = incoming.find((f) => f.size > maxBytes);
    if (oversized) {
      setPhotoError(`"${oversized.name}" is over ${MAX_PHOTO_SIZE_MB}MB.`);
      return;
    }
    setPhotoError(null);
    setPhotos(combined);
  };

  const removePhoto = (index: number) => {
    setPhotos((p) => p.filter((_, i) => i !== index));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validateEstimateForm(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    setServerMessage(null);

    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) =>
        formData.append(key, value)
      );
      photos.forEach((file) => formData.append("photos", file));

      const res = await fetch("/api/estimate", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrors(data.errors ?? {});
        setServerMessage(
          data.message ?? "Please check the highlighted fields and try again."
        );
        return;
      }

      setStatus("success");
      setValues(initialValues);
      setPhotos([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setStatus("error");
      setServerMessage(
        "We couldn't send your request. Please call or email us directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-ink-950">
          Request received
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-600">
          Thanks — we&apos;ve got your project details. Our team will reach out
          shortly to schedule your free, no-obligation estimate.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputCls}
            placeholder="Jane Smith"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className={errorCls}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
            placeholder="(604) 555-0123"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className={errorCls}>
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputCls}
            placeholder="jane@email.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className={errorCls}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="address" className={labelCls}>
            Project address{" "}
            <span className="font-normal text-ink-400">(optional)</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            className={inputCls}
            placeholder="123 Main St, Vancouver, BC"
            value={values.address}
            onChange={(e) => update("address", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelCls}>
          Type of flooring project
        </label>
        <select
          id="projectType"
          name="projectType"
          className={cn(inputCls, "appearance-none bg-white")}
          value={values.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          aria-invalid={!!errors.projectType}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p id="projectType-error" className={errorCls}>
            {errors.projectType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="description" className={labelCls}>
          Brief description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className={cn(inputCls, "resize-none")}
          placeholder="Tell us about your space, timeline, and what flooring you're planning to install..."
          value={values.description}
          onChange={(e) => update("description", e.target.value)}
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "description-error" : undefined}
        />
        {errors.description ? (
          <p id="description-error" className={errorCls}>
            {errors.description}
          </p>
        ) : null}
      </div>

      <div>
        <label className={labelCls}>
          Photos{" "}
          <span className="font-normal text-ink-400">
            (optional — up to {MAX_PHOTOS})
          </span>
        </label>
        <div className="rounded-lg border border-dashed border-ink-300 bg-ink-50/60 p-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFiles(e.target.files)}
            className="block w-full text-sm text-ink-600 file:mr-4 file:rounded-md file:border-0 file:bg-brand-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-700"
          />
          <p className="mt-2 text-xs text-ink-400">
            JPG or PNG, up to {MAX_PHOTO_SIZE_MB}MB each. Helpful but not
            required.
          </p>
          {photoError ? <p className={errorCls}>{photoError}</p> : null}

          {photos.length > 0 ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {photos.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 shadow-sm"
                >
                  {file.name}
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    className="text-ink-400 hover:text-red-600"
                    aria-label={`Remove ${file.name}`}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {status === "error" && serverMessage ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand-600 px-6 text-base font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Request My Free Estimate"}
      </button>
      <p className="text-xs text-ink-400">
        By submitting, you agree to be contacted about your project. We never
        share your information.
      </p>
    </form>
  );
}
