import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const usePortal = (id: string): React.RefObject<HTMLElement> => {
  const portalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const existingPortal = document.getElementById(id);

    if (existingPortal) {
      portalRef.current = existingPortal;
      return;
    }

    const newPortal = document.createElement("div");
    newPortal.id = id;
    document.body.appendChild(newPortal);
    portalRef.current = newPortal;

    return () => {
      document.body.removeChild(newPortal);
    };
  }, [id]);

  return portalRef;
};

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRef = usePortal("phongkv");

  console.log({ children });

  return portalRef.current
    ? ReactDOM.createPortal(children, portalRef.current)
    : null;
};

export default Portal;
