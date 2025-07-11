import React, { useEffect, useRef } from "react";

export const Modal = ({ isOpen, onClose, children, activeModal }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalHeightClass =
    activeModal === "contact"
      ? "h-auto  mx-2 rounded-lg" 
      : "h-full"; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] md:hidden">
      <div
        ref={modalRef}
        className={`bg-[#c2d6ef] w-full overflow-y-auto shadow-lg p-6 relative pt-20 ${modalHeightClass}`}
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-4 text-gray-600 hover:text-black text-[50px]"
        >
          &times;
        </button>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};
