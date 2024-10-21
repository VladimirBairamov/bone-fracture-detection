import { useEffect, useMemo, useState } from "react";
import { Tabs } from "../Tabs";
import { BoneImage, getImages, Folder } from "../../api/aws";
import { Container, Grid, Header, Loader, PagesInfo, Title } from "./styled";
import { ImageCard } from "../ImageCard";
import { ImageModal } from "../ImageModal";
import { useFiltersContext } from "../../contexts/FiltersContext";
import { Pagination } from "../Pagination";

const TABS = [
  { label: "All Groups", value: "all" },
  { label: "Train", value: "train" },
  { label: "Valid", value: "valid" },
  { label: "Test", value: "test" },
];
const ROWS = 6;
const COLUMNS = 9;
const PAGE_SIZE = ROWS * COLUMNS;

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<BoneImage | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const currentPageSize = Math.min(PAGE_SIZE, total - page * PAGE_SIZE);
  const [images, setImages] = useState<BoneImage[]>([]);
  const {
    filters: { classes, polygonRange },
  } = useFiltersContext();

  const paginatedImages = useMemo(
    () => images.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [images, page]
  );

  useEffect(() => {
    setLoading(true);
    getImages(selectedTab as Folder, classes, polygonRange)
      .then((data) => {
        setImages(data);
        setTotal(data.length);
      })
      .finally(() => setLoading(false));
  }, [classes.length, polygonRange.from, polygonRange.to, selectedTab]);

  const closeImageModal = () => setSelectedImage(null);

  return (
    <Container>
      <Header>
        <Title>Bone-fracture-detection</Title>
        <PagesInfo>
          <b>{currentPageSize}</b> of <b>{total}</b> images
        </PagesInfo>
      </Header>
      <Tabs tabs={TABS} selected={selectedTab} onSelect={setSelectedTab} />

      {loading ? (
        <Loader />
      ) : (
        <div>
          <Grid $columns={COLUMNS}>
            {paginatedImages.map((image) => (
              <ImageCard
                key={image.name}
                image={image}
                onClick={setSelectedImage}
              />
            ))}
          </Grid>
          {total > PAGE_SIZE && (
            <Pagination
              page={page}
              onPageChange={setPage}
              totalPages={Math.ceil(total / PAGE_SIZE)}
            />
          )}
        </div>
      )}

      <ImageModal image={selectedImage} onClose={closeImageModal} />
    </Container>
  );
};
