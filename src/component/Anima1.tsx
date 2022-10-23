import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;

const boxVarients = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

// delayChildren 자식요소에 딜레이 거는것 staggerChildren 자식요소 하나씩 시간차로 순서대로 적용되는것

const circleVarients = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
// 이미 Circle은 Box의 motion을 상속받는다

// 모든 애니메이션에는 transition: {type: spring}이 기본적으로 달려있음
// string은 물리법칙을 사용한 움직임이다. transition={{type:"tween", damping(제동):1 }}

function Anima1() {
  return (
    <Wrapper>
      <Box variants={boxVarients} initial="start" animate="end">
        <Circle variants={circleVarients} />
        <Circle variants={circleVarients} />
        <Circle variants={circleVarients} />
        <Circle variants={circleVarients} />
      </Box>
    </Wrapper>
  );
}

export default Anima1;
