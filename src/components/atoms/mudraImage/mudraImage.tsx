import React, { useState, useEffect, useCallback } from "react";
import "./styles.scss";
import { IMudraImageProps, ContainerProps } from "./types";
const MudraImage: React.FunctionComponent<IMudraImageProps> = (props) => {
  const { src, height, width, alt, isEnableLoading, onLoad } = props;
  const [imgSrc, setSrc] = useState<string | undefined>(src);
  const [isImageLoading, toggleLoading] = useState<boolean>(true);

  const handleOnLoad = useCallback(() => {
    setSrc(src);
    onLoad && onLoad();
    toggleLoading(false);
  }, [onLoad, src]);

  useEffect(() => {
    const img = new Image();
    img.src = src as string;
  }, [src]);
  return (
    <ImageWithLoaderContainer
      {...props}
      isImageLoading={isImageLoading}
      toggleLoading={toggleLoading}
    >
      <ImageLoader
        {...props}
        isImageLoading={isImageLoading}
        toggleLoading={toggleLoading}
      />
      <ImageContainer
        {...props}
        isImageLoading={isImageLoading}
        toggleLoading={toggleLoading}
      >
        <img
          data-testid="mudra_image"
          alt={alt}
          width={width}
          height={height}
          src={imgSrc}
          loading={isEnableLoading ? "lazy" : undefined}
          onLoad={handleOnLoad}
        />
      </ImageContainer>
    </ImageWithLoaderContainer>
  );
};

const ImageWithLoaderContainer: React.FunctionComponent<ContainerProps> = ({
  isImageLoading,
  isEnableLoading,
  loadingContainerWidth,
  loadingContainerHeight,
  children,
}) => {
  return (
    <div
      data-testid="mudra_image-root"
      style={
        isImageLoading && isEnableLoading
          ? { width: loadingContainerWidth, height: loadingContainerHeight }
          : {}
      }
      className="mudra-image"
    >
      {children}
    </div>
  );
};

const ImageLoader: React.FunctionComponent<ContainerProps> = ({
  isImageLoading,
  isEnableLoading,
}) => {
  return (
    <div
      data-testid="mudra_image-loader"
      style={{ display: isImageLoading && isEnableLoading ? "block" : "none" }}
      className="loader"
    />
  );
};

const ImageContainer: React.FunctionComponent<ContainerProps> = ({
  children,
  isEnableLoading,
  isImageLoading,
}) => {
  return (
    <div
      data-testid="mudra_image-container"
      style={{ display: isImageLoading && isEnableLoading ? "none" : "block" }}
      className="image-container"
    >
      {children}
    </div>
  );
};

MudraImage.defaultProps = {
  isEnableLoading: true,
};
export default MudraImage;
