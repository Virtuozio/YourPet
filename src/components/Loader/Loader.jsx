import { Grid } from 'react-loader-spinner';
import { StyledOverlay } from './Loader.styled';

const Loader = () => {
  return (
    <StyledOverlay>
      <Grid
        height="120"
        width="120"
        color="#FFC107"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledOverlay>
  );
};

export default Loader;
