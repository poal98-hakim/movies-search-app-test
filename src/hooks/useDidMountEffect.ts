import { useEffect, useRef } from "react";

// This hook is fired only in case of dependency change, but not on initial rendering
const useDidMountEffect = (callback: React.EffectCallback, deps: React.DependencyList | undefined = []) : void => {
    const didMount = useRef(false);
  
    useEffect(() => {
      if (didMount.current) callback();
      else didMount.current = true;
    }, [...deps]);
};

export default useDidMountEffect;