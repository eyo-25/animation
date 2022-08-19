import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,#e09,#d0e);
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  top: 100px;
  display: flex;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  justify-content: center;
  align-items: center;
  &:first-child{
    transform-origin: bottom right;
  }
  &:nth-child(2){
    transform-origin: bottom left;
  }
  &:nth-child(3){
    transform-origin: top right;
  }
  &:last-child{
    transform-origin: top left;
  }
`

const Grid = styled(motion.div)`
  width: 40vw;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Btn = styled(motion.button)`
  position: absolute;
  bottom: 100px;
  background-color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: 700;
`

const btnVariants = {
  start:{
    color: "rgb(65, 59, 255)"
  },
  click:{
    scale: 1.2,
    color: "rgba(255, 136, 0, 0.834)"
  }
}

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`

const boxVariant = {
  hover:  {
    scale: 1.1,
  }
}


function App() {
  const [id, setId] = useState<null | string>(null)
  const [clicked, setClicked] = useState(false)
  const toggleClick = ()=>setClicked(prev=>!prev)

  return (
    <>
      <Wrapper>
          <Grid>
            {["bottom right","2","3","4"].map((n)=>(
              <Box
                variants={boxVariant}
                whileHover="hover"
                onClick={()=> setId(n)}
                key={n}
                layoutId={n}
              > 
                {n === "2" && !clicked ? <Circle layoutId="circle"/> :null}
                {n === "3" && clicked ? <Circle layoutId="circle"/> :null}
              </Box>
            ))}
          </Grid>
          <AnimatePresence>
            {id ?
            <Overlay
              onClick={()=> setId(null)}
              initial={{backgroundColor:" rgba(0, 0, 0, 0)"}}
              animate={{backgroundColor:" rgba(0, 0, 0, 0.5)"}}
              exit={{backgroundColor:" rgba(0, 0, 0, 0)"}}>
              <Box
                layoutId={id}
                style={{width: 300, height: 200, backgroundColor:" rgba(255, 255, 255, 1)"}}
              >
              </Box>
            </Overlay>
            :null}
          </AnimatePresence>
          <Btn variants={btnVariants} initial="start" whileTap="click" onClick={toggleClick}>switch</Btn>
      </Wrapper>
    </>
  )
}
export default App;