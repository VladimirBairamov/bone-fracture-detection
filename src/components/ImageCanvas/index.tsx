import { Layer, Stage, Image, Shape, Rect, Text } from "react-konva";
import { BoneImage } from "../../api/aws";
import useImage from "use-image";
import { useRef } from "react";
import { colors, COLORS_MAP } from "../../theme";

type Props = {
  image: BoneImage;
};

const DEFAULT_WIDTH = 520;

export const ImageCanvas = ({ image }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageData = useImage(image.imageUrl);

  const containerWidth = containerRef.current?.clientWidth ?? DEFAULT_WIDTH;
  const imageWidth = imageData[0]?.width ?? 0;
  const imageHeight = imageData[0]?.height ?? 0;
  const scale = containerWidth / imageWidth;
  const containerHeight = imageHeight * scale;
  const elementScale = containerWidth / DEFAULT_WIDTH;

  return (
    <div ref={containerRef}>
      {imageData[1] === "loading" ? (
        <div>Loading...</div>
      ) : (
        <Stage width={containerWidth} height={containerHeight} key={image.name}>
          <Layer>
            <Image
              image={imageData[0]}
              width={containerWidth}
              height={containerHeight}
            />
            {image.polygons.map((polygon, index) => {
              const startX = Math.min(
                ...polygon.points.map((point) => point.x)
              );
              const startY = Math.min(
                ...polygon.points.map((point) => point.y)
              );
              const endX = Math.max(...polygon.points.map((point) => point.x));
              const endY = Math.max(...polygon.points.map((point) => point.y));

              const width = (endX - startX) * containerWidth;
              const height = (endY - startY) * containerHeight;
              const color = colors[COLORS_MAP[polygon.id]];
              const titleHeight = 20 * elementScale;
              const minimumWidth = 60 * elementScale;

              return (
                <>
                  {/* Fracture shape */}
                  <Shape
                    key={index}
                    width={width}
                    height={height}
                    sceneFunc={(context, shape) => {
                      context.beginPath();
                      context.moveTo(
                        polygon.points[0].x * containerWidth,
                        polygon.points[0].y * containerHeight
                      );
                      polygon.points.forEach((point) => {
                        context.lineTo(
                          point.x * containerWidth,
                          point.y * containerHeight
                        );
                      });
                      context.closePath();
                      context.fillStrokeShape(shape);
                    }}
                    fill={`${color}4d`}
                    stroke={color}
                    strokeWidth={1}
                  />
                  {/* Fracture border */}
                  <Rect
                    x={startX * containerWidth}
                    y={startY * containerHeight - titleHeight}
                    width={width < minimumWidth ? minimumWidth : width}
                    height={height + titleHeight}
                    stroke={color}
                    strokeWidth={2}
                    cornerRadius={10 * elementScale}
                  />
                  {/* Fracture title back */}
                  <Rect
                    x={startX * containerWidth}
                    y={startY * containerHeight - titleHeight}
                    width={width < minimumWidth ? minimumWidth : width}
                    height={titleHeight}
                    cornerRadius={12 * elementScale}
                    fill={color}
                  />
                  {/* Fracture title */}
                  <Text
                    x={startX * containerWidth + 6}
                    y={startY * containerHeight - 15}
                    text={`fracture_${polygon.id}`}
                    fill={colors.text}
                    fontSize={10 * elementScale}
                  />
                </>
              );
            })}
          </Layer>
        </Stage>
      )}
    </div>
  );
};
