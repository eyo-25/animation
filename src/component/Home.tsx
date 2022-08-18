import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

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
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const boxVarients = {
    hover: {rotateZ: 90},
    click: {scale: 1, borderRadius: "100px"},
}

const condition = true

// whileDrag={{background: "blue"}} "blue"이런식으로 단순 string을 넣으면 모션이 적용되지않고 수치가 있는 rgba rgb를 적용해야 한다.
// drag="x" 이렇게 하면 가로로만 움직일 수 있다.

// const biggerBoxRef = useRef<HTMLDivElement>(null) 로 선언하고 <BiggerBox ref={biggerBoxRef}>로 할당하여 BiggerBox요소를 사용할 수 있다.

function Home(){
    const x = useMotionValue(0)
    useEffect(()=>{x.onChange(()=>console.log(x.get()))},[x])
    return (
        <Wrapper>
            <button onClick={()=>x.set(200)}>Click me</button>
            <Box style={{x:x, }} drag="x" dragSnapToOrigin/>
        </Wrapper>
    )
}

export default Home;