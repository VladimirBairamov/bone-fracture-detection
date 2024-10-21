import { BoneImage } from "../../api/aws";
import { COLORS_MAP } from "../../theme";
import { Chip } from "../Chip";
import { ImageCanvas } from "../ImageCanvas";
import {
  BackDrop,
  CloseButton,
  Header,
  Modal,
  Title,
  SubTitle,
  ChipsList,
} from "./styled";

type Props = {
  image: BoneImage | null;
  onClose: () => void;
};

export const ImageModal = ({ image, onClose }: Props) => {
  if (!image) return null;

  return (
    <BackDrop>
      <Modal>
        <Header>
          <Title>{image.name}</Title>
          <CloseButton onClick={onClose} />
        </Header>
        <SubTitle>Details:</SubTitle>
        <ChipsList>
          {image.polygons.map(({ id }, index) => (
            <Chip key={index} label={`fracture_${id}`} color={COLORS_MAP[id]} />
          ))}
        </ChipsList>
        <ImageCanvas image={image} />
      </Modal>
    </BackDrop>
  );
};
