import styled from "@emotion/styled";

const determineColor = (value: number) => {
  switch (value) {
    case 0:
      return "#eeffee";
    case 2:
      return "#00bbff";
    case 4:
      return "#00cdef";
    case 8:
      return "#aacdef";
    case 16:
      return "#88aadd";
    case 32:
      return "#4477dd";
    case 64:
      return "#2299aa";
    case 128:
      return "#227799";
    case 256:
      return "#001155";
    case 512:
      return "#0000ff";
    case 1024:
      return "#0000AA";
    case 2048:
      return "#002299";
    default:
      return `#${value % 10000}ee`;
  }
};
export const Container = styled.div`
  background-color: ${(props: any) => determineColor(props.value)};
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  height: 110px;
  width: 110px;
`;
