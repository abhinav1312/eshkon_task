import { useRef } from 'react';

export default function CustomCtaButton({ text }: { text: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent) => {
    alert("You just got pranked. Nothing happens 😁")
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.className = "ripple";

    // Remove old ripple if any
    const oldRipple = button.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    button.appendChild(circle);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={createRipple}
        className="gradient-btn"
      >
        {text}
      </button>

      <style jsx>{`
        .gradient-btn {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1f2937, #4b5563);
          transition: background 0.4s ease;
        }

        .gradient-btn:hover {
          background: linear-gradient(135deg, #6366f1, #0ea5e9);
        }

        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple-animation 600ms linear;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
);
}
