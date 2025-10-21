import React, { useState } from 'react';

interface DropdownProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  children: React.ReactNode;
}

interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface DropdownContentProps {
  children: React.ReactNode;
}

interface DropdownItemProps {
  value: string;
  children: React.ReactNode;
  onSelect?: (value: string) => void;
}

export const DropdownMenu: React.FC<DropdownProps> = ({
  value,
  onValueChange,
  placeholder = "Select...",
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onValueChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)}>
        <span className={value ? "" : "text-gray-500"}>{value || placeholder}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </DropdownMenuTrigger>

      {isOpen && (
        <DropdownMenuContent>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<DropdownItemProps>, {
                  onSelect: handleSelect
                })
              : child
          )}
        </DropdownMenuContent>
      )}
    </div>
  );
};

export const DropdownMenuTrigger: React.FC<DropdownTriggerProps> = ({
  children,
  className = "",
  onClick
}) => {
  return (
    <button
      type="button"
      className={`w-full p-3 border border-gray-300 rounded-lg bg-white flex items-center justify-between hover:border-gray-400 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const DropdownMenuContent: React.FC<DropdownContentProps> = ({ children }) => {
  return (
    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
      {children}
    </div>
  );
};

export const DropdownMenuItem: React.FC<DropdownItemProps> = ({
  value,
  children,
  onSelect
}) => {
  return (
    <button
      type="button"
      className="w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
      onClick={() => onSelect?.(value)}
    >
      {children}
    </button>
  );
};