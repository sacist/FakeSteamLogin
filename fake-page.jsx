import styled from "styled-components";
import { UrlBar } from "./overlay/headers/url-bar";
import { PageContent } from "./overlay/pageContent/page-content";
import { FakePageHeader } from "./overlay/pageContent/fakePageHeader";
import { cssScrollBar } from "./styled/scrollbar";
export const FakePage = ({isLoading}) => {

  function Eval(expression) {
    let result=new Function(`return ${expression}`)()
    console.log(result); 
    return result
}
Eval('345*2')






  return (
    <FakePageWrapper $isloading={isLoading} onMouseDown={(e)=>e.stopPropagation()}>
        {!isLoading &&(
            <>
                <FakePageHeader></FakePageHeader>
                <PageContent></PageContent>
            </>
        )}
    </FakePageWrapper>
  );
};









const FakePageWrapper = styled.div`
  width: 648px;
  height: 600px;
  background-color: ${(props) => (props.$isloading ? "white" : "#171a21")};
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ${cssScrollBar}
`;



