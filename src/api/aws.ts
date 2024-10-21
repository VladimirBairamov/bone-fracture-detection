import AWS, { CognitoIdentityCredentials } from "aws-sdk";
import { Range } from "../components/RangeSlider";

export type Folder = "train" | "test" | "valid" | "all";

type InnerFolder = "images" | "thumbnails" | "labels";

type Point = { x: number; y: number };

type Polygon = { id: number; points: Point[] };

export type BoneImage = {
  imageUrl: string;
  thumbnailUrl: string;
  labelUrl: string;
  name: string;
  polygons: Polygon[];
};

const albumBucketName = "dataspan.frontend-home-assignment";
const TOTAL_COUNT = 500;

AWS.config.update({
  region: "eu-central-1",
  credentials: new CognitoIdentityCredentials({
    IdentityPoolId: "eu-central-1:31ebe2ab-fc9d-4a2c-96a9-9dee9a9db8b9",
  }),
});

const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});

const listObjects = (folder: Folder, innerFolder: InnerFolder) =>
  s3
    .listObjectsV2({
      Prefix: `bone-fracture-detection/${folder}/${innerFolder}`,
      Bucket: albumBucketName,
      MaxKeys: TOTAL_COUNT,
    })
    .promise();

const getUrl = (key: string) => `${s3.endpoint.href}${albumBucketName}/${key}`;

const parsePolygons = (content: string) =>
  content
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const segments = line.split(" ");
      const id = parseInt(segments[0]);
      const points = [];

      for (let i = 1; i < segments.length; i += 2) {
        points.push({
          x: parseFloat(segments[i]),
          y: parseFloat(segments[i + 1]),
        });
      }

      return { id, points };
    });

export const getImages = async (
  folder: Folder,
  classes: number[],
  polygonsRange: Range
): Promise<BoneImage[]> => {
  let imagesUrls = [];

  if (folder === "all") {
    const folders: Folder[] = ["train", "test", "valid"];

    imagesUrls = (await Promise.all(
      folders.map((f) => listObjects(f, "images"))
    ).then((responses) =>
      responses
        .flatMap((r) => r.Contents ?? [])
        .map((c) => c.Key && getUrl(c.Key))
        .filter(Boolean)
    )) as string[];
  } else {
    imagesUrls = ((await listObjects(folder, "images")).Contents ?? [])
      ?.map((c) => c.Key && getUrl(c.Key))
      .filter(Boolean) as string[];
  }

  const images = await Promise.all(
    imagesUrls.map(async (imageUrl) => {
      const name = imageUrl.slice(imageUrl.lastIndexOf("/") + 1);
      const polygonsUrl = imageUrl
        .replace("images", "labels")
        .replace(".jpg", ".txt");
      const polygonsContent = await fetch(polygonsUrl).then((res) =>
        res.text()
      );
      const polygons = parsePolygons(polygonsContent);

      return {
        imageUrl,
        thumbnailUrl: imageUrl.replace("images", "thumbnails"),
        labelUrl: imageUrl.replace("images", "labels").replace("jpg", "txt"),
        name,
        polygons,
      };
    })
  );

  const filteredImages = images.filter((image) => {
    const classesMatch =
      classes.length === 0
        ? image.polygons.length === 0
        : image.polygons.some((polygon) => classes.includes(polygon.id));
    const polygonsCountMatch =
      image.polygons.length >= polygonsRange.from &&
      image.polygons.length <= polygonsRange.to;

    return classesMatch && polygonsCountMatch;
  });

  return filteredImages;
};
