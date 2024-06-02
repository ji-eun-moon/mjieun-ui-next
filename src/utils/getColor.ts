import { Color } from "@/types/themes/color";

export const textColor = (color: Color) => {
  switch (color) {
    case "primary":
      return "text-primary";
    case "danger":
      return "text-danger";
    case "success":
      return "text-success";
    case "warning":
      return "text-warning";
    case "dark":
      return "text-dark";
  }
};

export const backgroundColor = (color: Color) => {
  switch (color) {
    case "primary":
      return "bg-primary";
    case "danger":
      return "bg-danger";
    case "success":
      return "bg-success";
    case "warning":
      return "bg-warning";
    case "dark":
      return "bg-dark";
  }
};
