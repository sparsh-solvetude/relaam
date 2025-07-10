// import React from "react";

// export const Modal = ({ isOpen, onClose, children }: any) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//       <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative mx-4">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useRef } from "react";

export const Modal = ({ isOpen, onClose, children }: any) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside the modal
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] md:hidden">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative mx-4"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
