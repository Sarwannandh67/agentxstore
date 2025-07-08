import React from 'react';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <img 
        src="/lovable-uploads/ed32a92f-24be-4398-b1e1-5466a63505df.png"
        alt="AgentXstore Logo"
        className="h-full w-auto"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/logo-nobg.png";
        }}
      />
    </div>
  );
}
