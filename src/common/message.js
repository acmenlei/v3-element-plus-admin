import { ElMessage } from "element-plus";

export function errorMessage(message) {
  return ElMessage({
    message,
    type: "danger",
  });
}

export function successMessage(message) {
  return ElMessage({
    message,
    type: "success",
  });
}
