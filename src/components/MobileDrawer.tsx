import React, { useEffect } from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-20 bg-black transition-opacity duration-300
          ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 bg-[#0f0f16] border-t border-[#2a2a35]
          rounded-t-2xl transition-transform duration-300 ease-out
          flex flex-col
          ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "80vh" }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-[#2a2a35]" />
        </div>

        {/* Drawer header */}
        <div className="px-5 pb-3 flex items-center justify-between flex-shrink-0 border-b border-[#2a2a35]">
          <span className="text-[10px] font-mono tracking-widest text-[#555570] uppercase">
            // Controls
          </span>
          <button
            onClick={onClose}
            aria-label="Close controls"
            className="text-[#444] hover:text-[#39ff14] transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {children}
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
