'use client';

import React, { useRef, useState } from 'react'
import GoTop from '@/components/GoTop'

const Student = () => {
  const refScrollUp = useRef();
  const [showGoTop, setshowGoTop] = useState("goTopHidden");

  //SCROLL UP HANDLER
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      Specific Student Page
      <div ref={refScrollUp}> </div>
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
    </div>
  )
}

export default Student