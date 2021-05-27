import styled from "@emotion/styled";
import { ButtonLink } from "components/ButtonLink";
import { CONSTANTS } from "styles";

const BannerButton = styled(ButtonLink)`
  @media ${CONSTANTS.DESKTOP} {
    margin-left: 1rem;
  }
  @media ${CONSTANTS.MOBILE} {
    margin-top: 1rem;
  }
`;

export default BannerButton;
