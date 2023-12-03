"use client";
import { ReactNode } from "react";
import Card from "../Card";

type InputProps = {
  className?: string;
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
};

export default function Modal({
  className,
  isOpen,
  children,
  closeModal,
  ...rest
}: InputProps) {
  const handleOverlayClick = (event: any) => {
    event.stopPropagation();

    if (event.target.classList.contains("close-modal")) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen overlay">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-black opacity-50 close-modal"
                onClick={handleOverlayClick}
              ></div>
            </div>
            <Card className="z-50 bg-white p-6 rounded-lg md:min-w-[630px] min-w-full">
              {children}
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
