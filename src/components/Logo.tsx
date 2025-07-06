import React from 'react';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <img 
        src="/logo-nobg.png" 
        alt="AgentXstore Logo"
        className="h-full w-auto"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/logo-nobg.png";
        }}
      />
    </div>
  );
}
