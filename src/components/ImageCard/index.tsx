import { BoneImage } from "../../api/aws";
import { ImageCanvas } from "../ImageCanvas";
import { Tooltip } from "../Tooltip";
import { Container, ImageWrapper, Title } from "./styled";

type Props = {
  image: BoneImage;
  onClick: (image: BoneImage) => void;
};

export const ImageCard = ({ image, onClick }: Props) => (
  <Container onClick={() => onClick(image)}>
    <ImageWrapper>
      <ImageCanvas image={image} />
    </ImageWrapper>
    <Tooltip label={image.name}>
      <Title>{image.name}</Title>
    </Tooltip>
  </Container>
);
