import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop()
{ 
    const { pathname } = useLocation();
     useEffect(() => { window.scrollTo(0, 0); // Har page change hone par screen ke top (0,0) par le jayega
      },
       [pathname]);
return null; 
}
export default ScrollToTop;
