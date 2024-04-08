// Motion
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealOnViewLeft({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView, control]);

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial={"hidden"}
      animate={control}
      transition={{ duration: 0.6, delay: 0.4 }}
      style={{ height: "100%" }}>
      {children}
    </motion.div>
  );
}

export default RevealOnViewLeft;
