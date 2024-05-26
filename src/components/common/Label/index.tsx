import React from "react";

interface Props {
  label: string;
  required?: boolean;
}

export default function Label({ label, required = false }: Props) {
  return (
    <div className="flex gap-1 select-none">
      {label && <p className="text-gray-700 text-sm font-semibold">{label}</p>}
      {required && <p className="text-primary-500 text-sm font-bold">*</p>}
    </div>
  );
}
