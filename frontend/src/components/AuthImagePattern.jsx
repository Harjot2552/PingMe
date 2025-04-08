// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     // <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//     //   <div className="max-w-md text-center">
//     //     <div className="grid grid-cols-3 gap-3 mb-8">
//     //       {[...Array(9)].map((_, i) => (
//     //         <div
//     //           key={i}
//     //           className={`aspect-square rounded-2xl bg-primary/10 ${
//     //             i % 2 === 0 ? "animate-pulse" : ""
//     //           }`}
//     //         />
//     //       ))}
//     //     </div>
//     //     <h2 className="text-2xl font-bold mb-4">{title}</h2>
//     //     <p className="text-base-content/60">{subtitle}</p>
//     //   </div>
//     // </div>
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//     <div className="max-w-lg text-center">
//       {/* Fancy Grid Pattern */}
//       <div className="grid grid-cols-5 gap-3 mb-8">
//         {[...Array(25)].map((_, i) => (
//           <div
//             key={i}
//             className={`w-6 h-6 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-primary to-secondary 
//             ${i % 3 === 0 ? "animate-spin-slow" : ""}
//             ${i % 5 === 0 ? "rotate-45" : ""}
//             ${i % 4 === 0 ? "scale-110" : "scale-90"}
//             transition-all duration-500`}
//           />
//         ))}
//       </div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <p className="text-base-content/60">{subtitle}</p>
//     </div>
//   </div>
//   );
// };

// export default AuthImagePattern;


import { useEffect, useState } from "react";
import {
  Loader,
  Fingerprint,
  ShieldCheck,
  Lock,
  KeyRound,
  CheckCheck,
  Cpu,
  CloudCog,
  Settings,
  Wifi,
  Link,
  ShieldAlert ,
} from "lucide-react";

const icons = [
  Loader,
  Fingerprint,
  ShieldCheck,
  Lock,
  KeyRound,
  CheckCheck,
  Cpu,
  CloudCog,
  Settings,
  Wifi,
  Link,
  ShieldAlert,
];

const AuthImagePattern = ({ title, subtitle }) => {
  const [iconStates, setIconStates] = useState(
    Array(9)
      .fill(0)
      .map(() => Math.floor(Math.random() * icons.length))
  );

  // Switch icons every 2 seconds randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setIconStates((prev) =>
        prev.map((idx) =>
          Math.random() < 0.3 // 30% chance to change
            ? Math.floor(Math.random() * icons.length)
            : idx
        )
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {iconStates.map((iconIdx, i) => {
            const Icon = icons[iconIdx];
            return (
              <div
                key={i}
                className="flex items-center justify-center aspect-square rounded-xl bg-primary/10 transition-all duration-500 hover:bg-primary/20"
              >
                <Icon className="w-6 h-6 text-primary animate-fade-in-out" />
              </div>
            );
          })}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
