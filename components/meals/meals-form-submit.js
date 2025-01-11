"use client";

import { useFormState } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormState();

  return (
    <button disable={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
