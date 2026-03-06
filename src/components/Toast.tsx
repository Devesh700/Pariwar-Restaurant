import type { Toast } from "../types";

interface ToastProps {
  toast: Toast | null;
}

export const ToastComponent = ({ toast }: ToastProps) => {
  if (!toast) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 30,
        left: "50%",
        transform: "translateX(-50%)",
        background: toast.type === "success" ? "#3a6b35" : "#9b3a1a",
        color: "white",
        padding: "14px 28px",
        borderRadius: 50,
        fontFamily: "'Lato', sans-serif",
        fontWeight: 700,
        fontSize: 14,
        zIndex: 3000,
        boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        whiteSpace: "nowrap",
        animation: "fadeInUp 0.3s ease",
      }}
    >
      {toast.msg}
    </div>
  );
};
