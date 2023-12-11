import { useEffect, useRef } from "react";

function useOutsideClick(modalFunction, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function onClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          modalFunction();
        }
      }

      document.addEventListener("click", onClick, listenCapturing);

      return () =>
        document.removeEventListener("click", onClick, listenCapturing);
    },
    [modalFunction, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
